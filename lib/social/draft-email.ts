import 'server-only';
import { Resend } from 'resend';
import type { JournalArticle } from '@/lib/journal';
import type { SocialDrafts } from './draft-generator';
import { SITE } from '@/lib/data';

const RESEND_FROM = process.env.RESEND_FROM || '1020.dev <onboarding@resend.dev>';
const RESEND_TO = process.env.RESEND_BCC || SITE.email;

/**
 * Sends the three drafts (LinkedIn, X, Newsletter) for a newly-published
 * article to the studio's own inbox via Resend. Always to-only — no
 * external recipients, this is internal review material.
 */

export async function sendDraftsEmail(
  article: JournalArticle,
  drafts: SocialDrafts,
): Promise<{ ok: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'RESEND_API_KEY not set' };
  }

  const articleUrl = `${SITE.url}/journal/${article.slug}`;
  const subject = `Heute live: ${article.title} — Drafts für LinkedIn, X, Newsletter`;
  const html = renderHtml(article, drafts, articleUrl);
  const text = renderText(article, drafts, articleUrl);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      replyTo: SITE.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      return { ok: false, error: String(result.error.message || result.error) };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

// ----- HTML / Text rendering -----

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderDraftBlock(label: string, body: string): string {
  const lines = escapeHtml(body)
    .split('\n')
    .map((l) => l || '&nbsp;')
    .join('<br>');

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%; margin: 0 0 24px;">
      <tr>
        <td style="padding: 18px 22px; background:#f6f6f7; border:1px solid #e5e7f0; border-radius:6px;">
          <div style="font-family: 'DM Mono', SFMono-Regular, Menlo, monospace; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #4F46E5; margin-bottom: 12px;">
            ${label}
          </div>
          <div style="font-family: 'DM Sans', -apple-system, sans-serif; font-size: 14px; line-height: 1.55; color: #0a0a0c; white-space: pre-wrap;">${lines}</div>
        </td>
      </tr>
    </table>
  `.trim();
}

function renderHtml(article: JournalArticle, drafts: SocialDrafts, url: string): string {
  return `<!DOCTYPE html>
<html lang="de-AT">
  <body style="margin:0; padding: 32px 16px; background:#ffffff; color:#0a0a0c; font-family: 'DM Sans', -apple-system, sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto;">
      <tr>
        <td>
          <div style="font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #6B7494; margin-bottom: 12px;">
            Auto-Draft · ${escapeHtml(article.category)} · ${escapeHtml(article.publishedAt)}
          </div>
          <h1 style="font-family: 'DM Sans', sans-serif; font-size: 22px; line-height: 1.2; font-weight: 500; letter-spacing: -0.015em; margin: 0 0 12px;">
            ${escapeHtml(article.title)}
          </h1>
          <p style="font-size: 14px; line-height: 1.5; color: rgba(10,10,12,0.62); margin: 0 0 8px;">
            ${escapeHtml(article.description)}
          </p>
          <p style="font-size: 14px; margin: 0 0 32px;">
            <a href="${url}" style="color:#4F46E5; text-decoration: underline;">${url}</a>
          </p>

          <p style="font-size: 14px; line-height: 1.55; color:#0a0a0c; margin: 0 0 24px;">
            Drei Draft-Varianten. Persönlich anpassen, dann posten — LinkedIn-Algorithmen
            belohnen manuelle Posts mit eigener Stimme deutlich stärker als 1:1-Auto-Posts.
          </p>

          ${renderDraftBlock('LinkedIn', drafts.linkedin)}
          ${renderDraftBlock('X / Twitter', drafts.twitter)}
          ${renderDraftBlock('Newsletter', drafts.newsletter)}

          <p style="font-size: 12px; color: rgba(10,10,12,0.55); margin: 24px 0 0; padding-top: 16px; border-top: 1px solid #e5e7f0;">
            Generiert via Claude API beim täglichen Cron auf 1020.dev. Bei Fragen oder
            wenn die Drafts off-brand wirken: Prompt in <code>lib/social/draft-generator.ts</code>
            anpassen.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderText(article: JournalArticle, drafts: SocialDrafts, url: string): string {
  return `1020.dev — Auto-Drafts

Heute live: ${article.title}
${article.description}
${url}

Drei Draft-Varianten. Persönlich anpassen, dann posten.

================================================================
LINKEDIN
================================================================
${drafts.linkedin}

================================================================
X / TWITTER
================================================================
${drafts.twitter}

================================================================
NEWSLETTER
================================================================
${drafts.newsletter}

—
Generiert via Claude API beim täglichen Cron.
Prompt: lib/social/draft-generator.ts
`;
}
