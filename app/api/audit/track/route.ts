import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE } from '@/lib/data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const RESEND_FROM = process.env.RESEND_FROM || '1020.dev <onboarding@resend.dev>';
const TRACK_TO = process.env.RESEND_BCC || SITE.email;

const RATE_MAX = 10;
const RATE_WINDOW_MS = 60_000;
const RATE_BUCKETS = new Map<string, number[]>();

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const stamps = (RATE_BUCKETS.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (stamps.length >= RATE_MAX) {
    RATE_BUCKETS.set(ip, stamps);
    return false;
  }
  stamps.push(now);
  RATE_BUCKETS.set(ip, stamps);
  return true;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: true });
  }

  let body: { url?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (typeof body.url !== 'string' || !body.url.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const domain = body.url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');

  if (!/^[a-z0-9.-]+\.[a-z]{2,}/i.test(domain)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ua = req.headers.get('user-agent') || '-';
  const ref = req.headers.get('referer') || '-';
  const ts = new Date().toISOString();

  console.log(`[audit-track] domain=${domain} ip=${ip} ua=${ua}`);

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: RESEND_FROM,
        to: TRACK_TO,
        subject: `[Lead] AEO-Audit angefragt für ${domain}`,
        text: [
          `Ein Besucher hat das AEO-Audit-Widget gestartet.`,
          ``,
          `Domain:      ${domain}`,
          `Zeit:        ${ts}`,
          `IP:          ${ip}`,
          `User-Agent:  ${ua}`,
          `Referer:     ${ref}`,
          ``,
          `Falls die E-Mail-Adresse anschließend eingegeben wird, erhältst du den vollständigen Bericht als BCC.`,
        ].join('\n'),
        html: `<!doctype html><html><body style="margin:0;padding:24px;background:#f6f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a2e;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7f0;border-radius:12px;padding:28px;">
    <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;color:#6b7280;letter-spacing:0.04em;margin-bottom:8px;">[LEAD] AUDIT-ANFRAGE</div>
    <h1 style="margin:0 0 16px;font-size:20px;font-weight:600;color:#1a1a2e;">${escapeHtml(domain)}</h1>
    <table cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;color:#374151;border-top:1px solid #e5e7f0;width:100%;">
      <tr><td style="padding:10px 0;color:#6b7280;width:120px;">Zeit</td><td style="padding:10px 0;">${escapeHtml(ts)}</td></tr>
      <tr><td style="padding:10px 0;color:#6b7280;border-top:1px solid #e5e7f0;">IP</td><td style="padding:10px 0;border-top:1px solid #e5e7f0;font-family:ui-monospace,monospace;">${escapeHtml(ip)}</td></tr>
      <tr><td style="padding:10px 0;color:#6b7280;border-top:1px solid #e5e7f0;">User-Agent</td><td style="padding:10px 0;border-top:1px solid #e5e7f0;font-size:12px;">${escapeHtml(ua)}</td></tr>
      <tr><td style="padding:10px 0;color:#6b7280;border-top:1px solid #e5e7f0;">Referer</td><td style="padding:10px 0;border-top:1px solid #e5e7f0;font-size:12px;">${escapeHtml(ref)}</td></tr>
    </table>
    <p style="color:#6b7280;font-size:13px;margin:20px 0 0;line-height:1.55;">
      Falls die E-Mail-Adresse anschließend eingegeben wird, bekommst du den vollständigen Bericht als BCC.
    </p>
  </div>
</body></html>`,
      });
    } catch (err) {
      console.error('[audit-track] resend failed', err);
    }
  }

  return NextResponse.json({ ok: true });
}
