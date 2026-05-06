'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getConsent,
  setConsent,
  CONSENT_REOPEN_EVENT,
  type ConsentValue,
} from '@/lib/consent';

// Delay banner appearance until after the home-route splash dismisses
// (2.2s splash + 200ms breathing room). On non-home routes or when the
// splash was already seen this session, show after a short transition.
const SPLASH_GUARDED_DELAY_MS = 2400;
const SHORT_DELAY_MS = 250;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Initial mount: show only if no decision yet.
  useEffect(() => {
    if (getConsent() !== null) return;

    let splashActive = false;
    try {
      const onHome = window.location.pathname === '/';
      const seen = !!window.sessionStorage.getItem('1020-splash-seen');
      splashActive = onHome && !seen;
    } catch {}

    const delay = splashActive ? SPLASH_GUARDED_DELAY_MS : SHORT_DELAY_MS;
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  // Listen for the "reopen settings" event from the footer link.
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, handler);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, handler);
  }, []);

  const decide = (value: ConsentValue) => {
    const previous = getConsent();
    setConsent(value);
    setVisible(false);
    // If a previous decision existed and changed, reload so any already-
    // loaded gtag.js script is removed (script unload isn't reliable).
    if (previous !== null && previous !== value) {
      window.setTimeout(() => window.location.reload(), 280);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
    >
      <div className="cookie-banner-card">
        <div className="cookie-banner-marker">Cookie-Einstellungen</div>
        <h2 id="cookie-banner-title" className="cookie-banner-title">
          Cookies &amp; <em>Tracking.</em>
        </h2>
        <p id="cookie-banner-text" className="cookie-banner-text">
          Wir verwenden technisch notwendige Speicherung sowie — nur mit Ihrer
          Einwilligung — Google Analytics 4 und Google Ads-Conversion-Tracking, um
          Reichweite und Wirksamkeit unserer Anzeigen zu messen. Details finden Sie in
          der <Link href="/datenschutz">Datenschutzerklärung</Link>. Ihre Auswahl
          können Sie jederzeit über „Cookie-Einstellungen" im Footer ändern.
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-primary"
            onClick={() => decide('all')}
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-secondary"
            onClick={() => decide('essential')}
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
