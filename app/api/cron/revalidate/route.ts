import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * Daily cron — re-render journal listing + sitemap so newly-due articles
 * (publishedAt = today) flip live within minutes after midnight.
 *
 * Triggered automatically by the cron config in `vercel.json`. Vercel
 * sends the request with header `Authorization: Bearer ${CRON_SECRET}`.
 *
 * For non-Vercel hosting (e.g. Hetzner): use a system cron + curl, like
 *   30 6 * * *  curl -H "Authorization: Bearer $CRON_SECRET" \
 *               https://1020.dev/api/cron/revalidate
 *
 * Endpoint is public — auth via shared secret. Without `CRON_SECRET`
 * set in env, the route refuses to revalidate (fail-safe instead of
 * accidental open endpoint).
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

  // Revalidate everything that depends on the publishedAt filter
  revalidatePath('/journal');
  revalidatePath('/journal/[slug]', 'page');
  revalidatePath('/sitemap.xml');

  return NextResponse.json({
    revalidated: true,
    paths: ['/journal', '/journal/[slug]', '/sitemap.xml'],
    timestamp: new Date().toISOString(),
  });
}
