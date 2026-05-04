import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description: `Diese Seite existiert nicht (mehr). Zurück zur Startseite von ${SITE.name}.`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <main className="status-page">
        <div className="status-page-inner">
          <p className="status-page-code" aria-hidden="true">404</p>
          <h1 className="status-page-title">Seite nicht gefunden</h1>
          <p className="status-page-lede">
            Die angeforderte Adresse existiert nicht — vielleicht ein Tippfehler, ein alter Link
            oder ein Inhalt, den wir entfernt haben.
          </p>
          <div className="status-page-actions">
            <Link href="/" className="cta-primary">
              Zur Startseite <span className="arrow">→</span>
            </Link>
            <Link href="/journal" className="cta-primary cta-primary--accent">
              Zum Journal <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
