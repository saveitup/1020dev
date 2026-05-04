'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/data';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[1020.dev] Unhandled route error:', error);
  }, [error]);

  return (
    <main className="status-page">
      <div className="status-page-inner">
        <p className="status-page-code" aria-hidden="true">500</p>
        <h1 className="status-page-title">Etwas ist schiefgelaufen</h1>
        <p className="status-page-lede">
          Ein unerwarteter Fehler ist aufgetreten. Wir haben eine Notiz davon — Sie können es
          erneut versuchen oder zur Startseite zurückkehren.
        </p>
        {error.digest && (
          <p className="status-page-digest">
            Referenz: <code>{error.digest}</code>
          </p>
        )}
        <div className="status-page-actions">
          <button type="button" onClick={reset} className="cta-primary">
            Erneut versuchen <span className="arrow">→</span>
          </button>
          <Link href="/" className="cta-primary cta-primary--accent">
            Zur Startseite <span className="arrow">→</span>
          </Link>
        </div>
        <p className="status-page-fallback">
          Bleibt der Fehler bestehen, schreiben Sie uns gerne an{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </main>
  );
}
