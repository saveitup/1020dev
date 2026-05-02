'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/data';

interface AuditCheck {
  label: string;
  status: 'ok' | 'warn' | 'fail' | string;
  note?: string;
}

interface AuditResult {
  domain: string;
  score: number;
  verdict: string;
  checks: AuditCheck[];
  recommendations: string[];
}

const STATUS_MESSAGES = [
  (url: string) => `Lade ${url}`,
  () => `Suche nach Erwähnungen im Web`,
  () => `Prüfe Schema.org-Markup`,
  () => `Bewerte AEO-Readiness`,
  () => `Formuliere Empfehlungen`,
];

export function AuditWidget() {
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');
  const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (tickerRef.current) clearInterval(tickerRef.current);
    };
  }, []);

  const cleanUrl = (raw: string) =>
    raw
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = cleanUrl(url);
    if (!target) return;

    setBusy(true);
    setResult(null);
    setError('');
    setStatus(STATUS_MESSAGES[0](target));

    let i = 0;
    if (tickerRef.current) clearInterval(tickerRef.current);
    tickerRef.current = setInterval(() => {
      i = (i + 1) % STATUS_MESSAGES.length;
      setStatus(STATUS_MESSAGES[i](target));
    }, 4500);

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: target }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `Status ${res.status}`);
      }

      setResult(data as AuditResult);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Es ist ein Fehler aufgetreten.';
      setError(msg);
    } finally {
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
        tickerRef.current = null;
      }
      setBusy(false);
      setStatus('');
    }
  };

  return (
    <section className="chapter" id="audit">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">05</span>
          <span className="slash">/</span>
          <span>Live-Analyse</span>
        </div>
        <h2 className="chapter-title">
          Wie sichtbar ist Ihre Website in <em>KI-Antworten?</em>
        </h2>
        <p className="chapter-lede">
          Geben Sie eine Domain ein. Wir prüfen in Echtzeit, wie ChatGPT, Perplexity und
          Claude Ihre Inhalte sehen — und geben drei konkrete Hebel zurück, die Sie ab
          morgen umsetzen können.
        </p>
      </div>

      <form className="audit-form" onSubmit={onSubmit}>
        <div className="audit-input-wrap">
          <span className="audit-prefix">https://</span>
          <input
            type="text"
            className="audit-input"
            placeholder="ihre-domain.at"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={busy}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <button type="submit" className="audit-btn" disabled={busy || !url.trim()}>
          {busy ? (
            <>
              <span className="spinner"></span>
              <span>Analysiere…</span>
            </>
          ) : (
            <>
              Analyse starten <span className="arrow">→</span>
            </>
          )}
        </button>
      </form>

      {busy && status && (
        <div className="audit-status">
          <span className="status-dot"></span>
          {status}
          <span className="cursor">_</span>
        </div>
      )}

      {error && (
        <div className="audit-error">
          <strong>Hoppla.</strong> {error}
        </div>
      )}

      {result && (
        <>
          <div className="audit-result">
            <div className="audit-result-head">
              <div className="audit-result-domain">
                <span className="label">Analyse für</span>
                <span className="domain">{result.domain}</span>
              </div>
              <div
                className="score-circle"
                style={
                  {
                    '--score': result.score,
                  } as React.CSSProperties
                }
              >
                <div className="score-circle-inner">
                  <span className="score-num">{result.score}</span>
                  <span className="score-of">/100</span>
                </div>
              </div>
            </div>

            <p className="audit-verdict">{result.verdict}</p>

            {result.checks?.length > 0 && (
              <div className="audit-checks">
                {result.checks.map((c, i) => (
                  <div key={i} className={`check check-${c.status}`}>
                    <span className="check-icon">
                      {c.status === 'ok' ? '✓' : c.status === 'warn' ? '!' : '×'}
                    </span>
                    <div className="check-body">
                      <div className="check-label">{c.label}</div>
                      {c.note && <div className="check-note">{c.note}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {result.recommendations?.length > 0 && (
              <div className="audit-recos">
                <div className="recos-label">Drei Hebel, die Sie ab morgen umsetzen können</div>
                <ol className="recos-list">
                  {result.recommendations.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="audit-cta">
            <h3 className="audit-cta-title">Diese Findings in eine Strategie übersetzen?</h3>
            <p className="audit-cta-sub">
              Ein 30-Minuten-Erstgespräch klärt, welche Hebel sich für Ihren Fall am meisten
              lohnen — und ob wir die Richtigen sind, um sie umzusetzen.
            </p>
            <div className="audit-cta-actions">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener"
                className="cta-primary"
              >
                Termin buchen <span className="arrow">→</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="cta-secondary">
                E-Mail schreiben
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
