'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/data';

interface AuditSuccess {
  ok: true;
  email: string;
  domain: string;
}

const STATUS_MESSAGES = [
  (url: string) => `Prüfe E-Mail-Adresse`,
  (url: string) => `Lade ${url}`,
  () => `Suche nach Erwähnungen im Web`,
  () => `Prüfe Schema.org-Markup`,
  () => `Bewerte AEO-Readiness`,
  () => `Formuliere Empfehlungen`,
  () => `Sende Bericht per E-Mail`,
];

export function AuditWidget({ compact = false }: { compact?: boolean } = {}) {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState<AuditSuccess | null>(null);
  const [error, setError] = useState('');
  const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (tickerRef.current) clearInterval(tickerRef.current);
    };
  }, []);

  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [success]);

  const cleanUrl = (raw: string) =>
    raw.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = cleanUrl(url);
    const mail = email.trim().toLowerCase();
    if (!target || !mail) return;

    setBusy(true);
    setSuccess(null);
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
        body: JSON.stringify({ url: target, email: mail }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `Status ${res.status}`);
      }

      setSuccess(data as AuditSuccess);
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

  const Wrapper = compact ? 'div' : 'section';

  return (
    <Wrapper className={compact ? 'hero-audit' : 'chapter'} id="audit">
      {!compact && (
        <div className="chapter-head">
          <div className="chapter-marker">
            <span className="num">00</span>
            <span className="slash">/</span>
            <span>Live-Analyse</span>
          </div>
          <h2 className="chapter-title">
            Wie sichtbar ist Ihre Website in <em>KI-Antworten?</em>
          </h2>
          <p className="chapter-lede">
            Geben Sie Ihre Domain und E-Mail ein. Wir prüfen in Echtzeit, wie ChatGPT,
            Perplexity und Claude Ihre Inhalte sehen — und senden Ihnen den Bericht mit drei
            konkreten Hebeln direkt in den Posteingang.
          </p>
        </div>
      )}

      {compact && (
        <div className="hero-audit-head">
          <span className="hero-audit-tag">
            <span className="dot" aria-hidden="true"></span>
            Live-Analyse
          </span>
          <span className="hero-audit-hint">
            Bericht direkt per E-Mail. KI prüft Sichtbarkeit in ChatGPT, Perplexity, Claude.
          </span>
        </div>
      )}

      {!success && (
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
              aria-label="Domain"
            />
          </div>
          <div className="audit-input-wrap">
            <span className="audit-prefix audit-prefix-mail" aria-hidden="true">@</span>
            <input
              type="email"
              className="audit-input"
              placeholder="ihre@e-mail.at"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy}
              autoComplete="email"
              spellCheck={false}
              required
              aria-label="E-Mail-Adresse"
            />
          </div>
          <button type="submit" className="audit-btn" disabled={busy || !url.trim() || !email.trim()}>
            {busy ? (
              <>
                <span className="spinner"></span>
                <span>Analysiere…</span>
              </>
            ) : (
              <>
                Bericht anfordern <span className="arrow">→</span>
              </>
            )}
          </button>
          <p className="audit-hint">
            Der Bericht wird an die angegebene Adresse gesendet. Keine Newsletter, keine
            Weitergabe an Dritte.
          </p>
        </form>
      )}

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

      {success && (
        <div className="audit-success" ref={successRef}>
          <div className="audit-success-icon" aria-hidden="true">✓</div>
          <h3 className="audit-success-title">Bericht ist unterwegs.</h3>
          <p className="audit-success-sub">
            Wir haben den AEO-Bericht für <strong>{success.domain}</strong> an{' '}
            <strong>{success.email}</strong> gesendet. Der Eingang sollte in den nächsten ein
            bis zwei Minuten erfolgen — falls nicht, bitte auch im Spam-Ordner nachsehen.
          </p>
          <div className="audit-cta-actions">
            <a href={SITE.bookingUrl} target="_blank" rel="noopener" className="cta-primary">
              Direkt Termin buchen <span className="arrow">→</span>
            </a>
            <button
              type="button"
              className="cta-secondary"
              onClick={() => {
                setSuccess(null);
                setUrl('');
                setEmail('');
              }}
            >
              Weitere Domain prüfen
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
