import { SITE } from '@/lib/data';

interface AuditCheck {
  label: string;
  status: 'ok' | 'warn' | 'fail' | string;
  note?: string;
}

export interface AuditResult {
  domain: string;
  score: number;
  verdict: string;
  checks: AuditCheck[];
  recommendations: string[];
}

const ACCENT = '#818CF8';
const BG = '#0a1230';
const TEXT = '#e8ecff';
const MUTED = '#a8b0d8';
const LINE = 'rgba(255,255,255,0.08)';

function statusColor(s: string): string {
  if (s === 'ok') return '#34d399';
  if (s === 'warn') return '#fbbf24';
  return '#f87171';
}

function statusIcon(s: string): string {
  if (s === 'ok') return '&#10003;';
  if (s === 'warn') return '!';
  return '&times;';
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderAuditEmail(result: AuditResult): { subject: string; html: string; text: string } {
  const subject = `Ihr AEO-Bericht für ${result.domain} — Score ${result.score}/100`;

  const checksHtml = (result.checks || [])
    .map((c) => {
      const color = statusColor(c.status);
      const icon = statusIcon(c.status);
      return `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid ${LINE};vertical-align:top;width:32px;">
            <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:${color}22;color:${color};text-align:center;line-height:24px;font-weight:700;font-size:13px;">${icon}</span>
          </td>
          <td style="padding:14px 0 14px 12px;border-bottom:1px solid ${LINE};vertical-align:top;">
            <div style="color:${TEXT};font-size:15px;font-weight:600;line-height:1.3;">${escapeHtml(c.label)}</div>
            ${c.note ? `<div style="color:${MUTED};font-size:14px;line-height:1.5;margin-top:4px;">${escapeHtml(c.note)}</div>` : ''}
          </td>
        </tr>`;
    })
    .join('');

  const recosHtml = (result.recommendations || [])
    .map(
      (r, i) => `
        <tr>
          <td style="padding:12px 0;vertical-align:top;width:32px;">
            <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:${ACCENT}22;color:${ACCENT};text-align:center;line-height:24px;font-weight:700;font-size:13px;">${i + 1}</span>
          </td>
          <td style="padding:12px 0 12px 12px;vertical-align:top;color:${TEXT};font-size:15px;line-height:1.55;">${escapeHtml(r)}</td>
        </tr>`
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#030615;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:${TEXT};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#030615;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:${BG};border:1px solid ${LINE};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 0;">
                <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:14px;color:${MUTED};letter-spacing:0.02em;">
                  1020<span style="color:${ACCENT};">.</span>dev
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 0;">
                <div style="color:${MUTED};font-size:13px;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">AEO-Audit</div>
                <h1 style="margin:0 0 6px;color:${TEXT};font-size:26px;line-height:1.2;font-weight:600;">${escapeHtml(result.domain)}</h1>
                <div style="color:${MUTED};font-size:14px;">Answer-Engine-Optimization Readiness Report</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background:rgba(129,140,248,0.06);border:1px solid ${LINE};border-radius:12px;">
                  <tr>
                    <td style="padding:20px 24px;">
                      <div style="display:flex;align-items:baseline;gap:8px;">
                        <span style="color:${ACCENT};font-size:48px;font-weight:700;line-height:1;">${result.score}</span>
                        <span style="color:${MUTED};font-size:18px;">/ 100</span>
                      </div>
                      <div style="color:${TEXT};font-size:15px;line-height:1.55;margin-top:12px;">${escapeHtml(result.verdict)}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 0;">
                <h2 style="margin:0 0 8px;color:${TEXT};font-size:18px;font-weight:600;">Prüfpunkte</h2>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${checksHtml}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 0;">
                <h2 style="margin:0 0 8px;color:${TEXT};font-size:18px;font-weight:600;">Drei Hebel, die Sie ab morgen umsetzen können</h2>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${recosHtml}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:rgba(129,140,248,0.08);border:1px solid ${ACCENT}33;border-radius:12px;">
                  <tr>
                    <td style="padding:24px;">
                      <h3 style="margin:0 0 8px;color:${TEXT};font-size:17px;font-weight:600;">Diese Findings in eine Strategie übersetzen?</h3>
                      <p style="margin:0 0 18px;color:${MUTED};font-size:14px;line-height:1.55;">
                        Ein 30-Minuten-Erstgespräch klärt, welche Hebel sich für Ihren Fall am meisten lohnen — und ob wir die Richtigen sind, um sie umzusetzen. Kostenlos, unverbindlich.
                      </p>
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:${ACCENT};border-radius:8px;">
                            <a href="${SITE.bookingUrl}" style="display:inline-block;padding:12px 20px;color:#0a0f2c;font-size:15px;font-weight:600;text-decoration:none;">Termin buchen &rarr;</a>
                          </td>
                          <td style="padding-left:12px;">
                            <a href="mailto:${SITE.email}" style="display:inline-block;padding:12px 20px;color:${TEXT};font-size:15px;text-decoration:none;border:1px solid ${LINE};border-radius:8px;">E-Mail schreiben</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px;color:${MUTED};font-size:12px;line-height:1.55;border-top:1px solid ${LINE};padding-top:20px;">
                Dieser Bericht wurde automatisiert auf Basis öffentlich verfügbarer Daten erstellt. Für eine vollständige Analyse mit Wettbewerbsvergleich und Umsetzungsplan empfehlen wir das Erstgespräch.
                <br /><br />
                1020.dev · ${SITE.location} · <a href="${SITE.url}" style="color:${MUTED};">${SITE.url.replace('https://', '')}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `AEO-Bericht für ${result.domain}`,
    `Score: ${result.score}/100`,
    '',
    result.verdict,
    '',
    'Prüfpunkte:',
    ...(result.checks || []).map((c) => `  [${c.status.toUpperCase()}] ${c.label}${c.note ? ` — ${c.note}` : ''}`),
    '',
    'Drei Hebel:',
    ...(result.recommendations || []).map((r, i) => `  ${i + 1}. ${r}`),
    '',
    `Termin buchen: ${SITE.bookingUrl}`,
    `E-Mail: ${SITE.email}`,
    '',
    `1020.dev · ${SITE.location}`,
  ].join('\n');

  return { subject, html, text };
}
