'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/data';

interface AuditSuccess {
  ok: true;
  email: string;
  domain: string;
}

const STATUS_MESSAGES = [
  (url: string) => `Lade ${url}`,
  () => `Suche nach Erwähnungen im Web`,
  () => `Prüfe Schema.org-Markup`,
  () => `Bewerte AEO-Readiness`,
  () => `Formuliere Empfehlungen`,
  () => `Sende Bericht per E-Mail`,
];

interface PreludeStep {
  build: (url: string) => string;
  durationMs: number;
}

const PRELUDE_STEPS: PreludeStep[] = [
  { build: (url) => `Verbinde mit ${url}`, durationMs: 700 },
  { build: () => `Lade Sitemap und robots.txt`, durationMs: 800 },
  { build: () => `Extrahiere strukturierte Daten`, durationMs: 1100 },
  { build: () => `Vergleiche Antwort-Patterns mit KI-Modellen`, durationMs: 1400 },
  { build: () => `Bewerte AEO-Readiness`, durationMs: 1000 },
  { build: () => `Bericht erstellen`, durationMs: 2000 },
];

const REPORT_STEP_INDEX = PRELUDE_STEPS.length - 1;

export function AuditWidget({ compact = false }: { compact?: boolean } = {}) {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState<AuditSuccess | null>(null);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [prelude, setPrelude] = useState(false);
  const [preludeStep, setPreludeStep] = useState(-1);
  const [pendingDomain, setPendingDomain] = useState('');
  const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const preludeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerOriginRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return () => {
      if (tickerRef.current) clearInterval(tickerRef.current);
      if (preludeTimerRef.current) clearTimeout(preludeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [success]);

  useEffect(() => {
    if (modalOpen) {
      triggerOriginRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => emailInputRef.current?.focus(), 80);
      return () => {
        document.body.style.overflow = '';
        clearTimeout(t);
        triggerOriginRef.current?.focus?.();
      };
    }
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !busy) {
        closeModal();
        return;
      }
      if (e.key !== 'Tab') return;
      const root = modalRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen, busy]);

  const cleanUrl = (raw: string) =>
    raw.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');

  const closeModal = () => {
    if (busy) return;
    setModalOpen(false);
    setError('');
    setEmail('');
  };

  const onDomainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = cleanUrl(url);
    if (!target || prelude) return;
    setPendingDomain(target);
    setError('');
    setPrelude(true);
    setPreludeStep(0);

    fetch('/api/audit/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: target }),
      keepalive: true,
    }).catch(() => {});

    const advance = (idx: number) => {
      if (idx >= PRELUDE_STEPS.length) {
        setPrelude(false);
        setPreludeStep(-1);
        setModalOpen(true);
        return;
      }
      setPreludeStep(idx);
      preludeTimerRef.current = setTimeout(
        () => advance(idx + 1),
        PRELUDE_STEPS[idx].durationMs
      );
    };

    if (preludeTimerRef.current) clearTimeout(preludeTimerRef.current);
    advance(0);
  };

  const onEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const mail = email.trim().toLowerCase();
    if (!mail || !pendingDomain) return;

    setBusy(true);
    setError('');
    setStatus(STATUS_MESSAGES[0](pendingDomain));

    let i = 0;
    if (tickerRef.current) clearInterval(tickerRef.current);
    tickerRef.current = setInterval(() => {
      i = (i + 1) % STATUS_MESSAGES.length;
      setStatus(STATUS_MESSAGES[i](pendingDomain));
    }, 4500);

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: pendingDomain, email: mail }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `Status ${res.status}`);
      }

      setSuccess(data as AuditSuccess);
      setModalOpen(false);
      setEmail('');
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
            Geben Sie eine Domain ein. Wir prüfen in Echtzeit, wie ChatGPT, Perplexity und
            Claude Ihre Inhalte sehen — und liefern drei konkrete Hebel, die Sie ab morgen
            umsetzen können.
          </p>
        </div>
      )}

      {compact && (
        <div className="hero-audit-head">
          <span className="hero-audit-tag">
            <span className="dot" aria-hidden="true"></span>
            Live-Analyse
          </span>
          <span className="hero-audit-hint" id="audit-domain-hint">
            Domain eingeben. KI prüft Sichtbarkeit in ChatGPT, Perplexity, Claude.
          </span>
        </div>
      )}

      {!success && (
        <>
          <form className="audit-form" onSubmit={onDomainSubmit}>
            <div className="audit-input-wrap audit-input-wrap--inline">
              <span className="audit-prefix">https://</span>
              <input
                type="text"
                className="audit-input"
                placeholder="ihre-domain.at"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={prelude}
                autoComplete="off"
                spellCheck={false}
                aria-label="Domain"
                aria-describedby={compact ? 'audit-domain-hint' : undefined}
              />
              <button
                type="submit"
                className="audit-btn audit-btn--inline"
                disabled={prelude || !url.trim()}
              >
                {prelude ? (
                  <>
                    <span className="spinner"></span>
                    <span>{preludeStep >= REPORT_STEP_INDEX ? 'Bericht erstellen…' : 'KI denkt…'}</span>
                  </>
                ) : (
                  <>
                    Analyse starten <span className="arrow">→</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {prelude && (
            <div className="audit-thinking" role="status" aria-live="polite">
              <div className="thinking-head">
                <span className="thinking-pulse" aria-hidden="true"></span>
                {preludeStep >= REPORT_STEP_INDEX ? 'Bericht erstellen' : 'Analyse läuft'}
              </div>
              <ol className="thinking-list">
                {PRELUDE_STEPS.map((step, idx) => {
                  const state =
                    idx < preludeStep ? 'done' : idx === preludeStep ? 'running' : 'pending';
                  return (
                    <li key={idx} className={`thinking-step is-${state}`}>
                      <span className="thinking-icon" aria-hidden="true"></span>
                      <span className="thinking-label">{step.build(pendingDomain)}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </>
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

      {modalOpen && (
        <div
          className="audit-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="audit-modal-title"
        >
          <div className="audit-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="audit-modal-close"
              onClick={closeModal}
              disabled={busy}
              aria-label="Schließen"
            >
              ×
            </button>

            <div className="audit-modal-tag">Schritt 2 / 2</div>
            <h3 id="audit-modal-title" className="audit-modal-title">
              Wohin senden wir den Bericht?
            </h3>
            <p className="audit-modal-sub">
              Wir prüfen <strong>{pendingDomain}</strong> und schicken Ihnen die vollständige
              Analyse — Score, Findings und drei konkrete Hebel — direkt in den Posteingang.
            </p>

            <form className="audit-modal-form" onSubmit={onEmailSubmit}>
              <div className="audit-input-wrap">
                <span className="audit-prefix audit-prefix-mail" aria-hidden="true">@</span>
                <input
                  ref={emailInputRef}
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
                  aria-invalid={!!error}
                  aria-describedby={error ? 'audit-email-error' : undefined}
                />
              </div>
              <button
                type="submit"
                className="audit-btn audit-modal-btn"
                disabled={busy || !email.trim()}
              >
                {busy ? (
                  <>
                    <span className="spinner"></span>
                    <span>Analysiere…</span>
                  </>
                ) : (
                  <>
                    Bericht senden <span className="arrow">→</span>
                  </>
                )}
              </button>
            </form>

            {busy && status && (
              <div className="audit-status audit-modal-status">
                <span className="status-dot"></span>
                {status}
                <span className="cursor">_</span>
              </div>
            )}

            {error && (
              <div
                className="audit-error audit-modal-error"
                id="audit-email-error"
                role="alert"
              >
                <strong>Hoppla.</strong> {error}
              </div>
            )}

            {!busy && (
              <p className="audit-modal-hint">
                Keine Newsletter, keine Weitergabe an Dritte. Audit dauert ca. 30 Sekunden.
              </p>
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
}
