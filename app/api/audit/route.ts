import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateEmail } from './_lib/email';
import { renderAuditEmail, type AuditResult } from './_lib/template';
import { SITE } from '@/lib/data';
import { clientIp, createLimiter } from '@/lib/ratelimit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const RESEND_FROM = process.env.RESEND_FROM || '1020.dev <onboarding@resend.dev>';
const RESEND_BCC = process.env.RESEND_BCC || SITE.email;

const limiter = createLimiter({ name: 'audit', max: 1, windowSeconds: 60 });

interface AnthropicContentBlock {
  type: string;
  text?: string;
}

interface AnthropicResponse {
  content?: AnthropicContentBlock[];
  error?: { message?: string };
}

function buildPrompt(domain: string): string {
  return `Du bist ein Audit-Tool für Answer Engine Optimization (AEO) und SEO. Analysiere die Domain "${domain}".

Nutze das web_search-Tool, um:
1. Die Hauptseite der Domain zu finden und zu prüfen
2. Zu prüfen, ob die Marke/Domain in KI-Antworten zu typischen Branchenfragen genannt wird
3. Vorhandene strukturierte Daten (Schema.org, FAQPage, LocalBusiness) zu erkennen
4. Zu beurteilen, ob die Inhaltsstruktur antwort-orientiert ist

Gib eine ehrliche, präzise Bewertung zurück. Werde nicht zu freundlich, sondern zeige reale Schwachstellen.

Antworte AUSSCHLIESSLICH als gültiges JSON in genau diesem Format (keine Erklärungen davor oder danach):

{
  "domain": "${domain}",
  "score": 0-100 (ehrliche AEO-Readiness),
  "verdict": "1-2 Sätze, was die Hauptfindings sind. Ehrlich, präzise, auf Deutsch.",
  "checks": [
    { "label": "Schema.org-Markup", "status": "ok|warn|fail", "note": "kurze Erklärung" },
    { "label": "Antwort-orientierte Struktur", "status": "ok|warn|fail", "note": "..." },
    { "label": "FAQ-Inhalte", "status": "ok|warn|fail", "note": "..." },
    { "label": "Lokale Signale", "status": "ok|warn|fail", "note": "..." },
    { "label": "Sichtbarkeit in KI-Antworten", "status": "ok|warn|fail", "note": "..." }
  ],
  "recommendations": [
    "Konkrete, umsetzbare Empfehlung 1 (1-2 Sätze)",
    "Konkrete, umsetzbare Empfehlung 2 (1-2 Sätze)",
    "Konkrete, umsetzbare Empfehlung 3 (1-2 Sätze)"
  ]
}`;
}

function extractJsonFromContent(content: AnthropicContentBlock[]): unknown | null {
  const textBlocks = content.filter((b) => b.type === 'text').map((b) => b.text || '');
  for (let i = textBlocks.length - 1; i >= 0; i--) {
    const cleaned = textBlocks[i].replace(/```json/gi, '').replace(/```/g, '').trim();
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) continue;
    try {
      return JSON.parse(match[0]);
    } catch {
      // try next
    }
  }
  return null;
}

function isAuditResult(x: unknown): x is AuditResult {
  if (!x || typeof x !== 'object') return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.domain === 'string' &&
    typeof o.score === 'number' &&
    typeof o.verdict === 'string' &&
    Array.isArray(o.checks) &&
    Array.isArray(o.recommendations)
  );
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: 'Server is not configured. ANTHROPIC_API_KEY is missing.' },
      { status: 500 }
    );
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Server is not configured. RESEND_API_KEY is missing.' },
      { status: 500 }
    );
  }

  const ip = clientIp(req);
  const limit = await limiter.check(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: `Zu viele Anfragen. Bitte in ${limit.retryAfter} Sekunden erneut versuchen.` },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    );
  }

  let body: { url?: unknown; email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (typeof body.url !== 'string' || !body.url.trim()) {
    return NextResponse.json({ error: 'Domain ist erforderlich.' }, { status: 400 });
  }
  if (typeof body.email !== 'string' || !body.email.trim()) {
    return NextResponse.json({ error: 'E-Mail ist erforderlich.' }, { status: 400 });
  }

  const domain = body.url.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!/^[a-z0-9.-]+\.[a-z]{2,}/i.test(domain)) {
    return NextResponse.json(
      { error: 'Bitte eine gültige Domain eingeben (z. B. ihre-domain.at).' },
      { status: 400 }
    );
  }

  const emailCheck = await validateEmail(body.email);
  if (!emailCheck.ok) {
    return NextResponse.json({ error: emailCheck.reason }, { status: 400 });
  }

  let parsed: unknown;
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2000,
        tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 3 }],
        messages: [{ role: 'user', content: buildPrompt(domain) }],
      }),
    });

    if (!response.ok) {
      const errBody = (await response.json().catch(() => ({}))) as AnthropicResponse;
      const msg = errBody?.error?.message || `Anthropic API returned ${response.status}`;
      return NextResponse.json({ error: msg }, { status: response.status });
    }

    const data = (await response.json()) as AnthropicResponse;
    parsed = extractJsonFromContent(data.content || []);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unbekannter Fehler.';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  if (!isAuditResult(parsed)) {
    return NextResponse.json(
      { error: 'Konnte die Antwort nicht parsen. Versuchen Sie es erneut.' },
      { status: 500 }
    );
  }

  const { subject, html, text } = renderAuditEmail(parsed);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: emailCheck.email,
      bcc: RESEND_BCC,
      replyTo: SITE.email,
      subject,
      html,
      text,
    });
    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json(
        { error: 'Bericht konnte nicht versendet werden. Bitte später erneut versuchen.' },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error('Resend exception:', err);
    return NextResponse.json(
      { error: 'Bericht konnte nicht versendet werden. Bitte später erneut versuchen.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, email: emailCheck.email, domain: parsed.domain });
}
