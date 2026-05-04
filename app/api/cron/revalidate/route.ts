import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getAllArticles, getArticleBySlug } from '@/lib/journal';
import { generateDrafts } from '@/lib/social/draft-generator';
import { sendDraftsEmail } from '@/lib/social/draft-email';

/**
 * Daily cron — runs two things:
 *
 *   1. Revalidate journal listing + sitemap so newly-due articles
 *      (publishedAt = today) flip live within minutes after midnight.
 *
 *   2. For any article whose publishedAt = today, generate LinkedIn /
 *      X / Newsletter drafts via Claude and email them to the studio
 *      inbox via Resend. Manual review + post — never auto-publishes
 *      to social platforms.
 *
 * Triggered automatically by the cron config in `vercel.json`. Vercel
 * sends the request with header `Authorization: Bearer ${CRON_SECRET}`.
 *
 * For non-Vercel hosting (e.g. Hetzner): use a system cron + curl, like
 *   30 6 * * *  curl -H "Authorization: Bearer $CRON_SECRET" \
 *               https://1020.dev/api/cron/revalidate
 *
 * Manual trigger for backfill / testing:
 *   GET /api/cron/revalidate?slug=aeo-2026-leitfaden
 *   (still requires Bearer token)
 *
 * Endpoint requires CRON_SECRET set in env. Without it, the route
 * refuses to act (fail-safe instead of accidentally open).
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function isToday(publishedAt: string): boolean {
  return publishedAt.slice(0, 10) === todayIso();
}

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'CRON_SECRET not configured on server' },
      { status: 503 },
    );
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // ----- 1. Revalidate -----
  revalidatePath('/journal');
  revalidatePath('/journal/[slug]', 'page');
  revalidatePath('/sitemap.xml');

  // ----- 2. Social drafts for newly-published articles -----
  const slugParam = request.nextUrl.searchParams.get('slug');
  const draftedSlugs: Array<{ slug: string; emailed: boolean; error?: string }> = [];

  try {
    let candidates: string[];

    if (slugParam) {
      // Manual trigger: force draft for the requested slug regardless of date
      candidates = [slugParam];
    } else {
      // Auto: any article whose publishedAt = today
      const articles = await getAllArticles();
      candidates = articles.filter((a) => isToday(a.publishedAt)).map((a) => a.slug);
    }

    for (const slug of candidates) {
      const article = await getArticleBySlug(slug);
      if (!article) {
        draftedSlugs.push({ slug, emailed: false, error: 'article not found or not yet live' });
        continue;
      }

      try {
        const drafts = await generateDrafts(article);
        const sendResult = await sendDraftsEmail(article, drafts);
        draftedSlugs.push({
          slug,
          emailed: sendResult.ok,
          error: sendResult.ok ? undefined : sendResult.error,
        });
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Unknown error';
        draftedSlugs.push({ slug, emailed: false, error: msg });
        // Don't abort — keep going through any other due articles.
      }
    }
  } catch (err) {
    // Draft generation failures must not block revalidation success.
    console.error('Cron draft phase failed:', err);
  }

  return NextResponse.json({
    revalidated: ['/journal', '/journal/[slug]', '/sitemap.xml'],
    drafts: draftedSlugs,
    timestamp: new Date().toISOString(),
  });
}
