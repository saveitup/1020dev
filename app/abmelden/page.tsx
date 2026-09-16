import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Abgemeldet',
  description: 'Sie wurden erfolgreich von weiteren E-Mails abgemeldet.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/abmelden` },
};

interface PageProps {
  searchParams: Promise<{ email?: string }>;
}

export default async function AbmeldenPage({ searchParams }: PageProps) {
  const { email } = await searchParams;
  const shown = email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? email : null;

  return (
    <main className="legal">
      <header className="legal-head">
        <div className="chapter-marker">
          <span className="num">✓</span>
          <span className="slash">/</span>
          <span>Abgemeldet</span>
        </div>
        <h1 className="chapter-title">
          Erfolgreich <em>abgemeldet.</em>
        </h1>
        <p className="chapter-lede">
          {shown ? (
            <>
              Die Adresse <strong>{shown}</strong> erhält keine weiteren E-Mails
              von 1020.dev mehr.
            </>
          ) : (
            <>Sie erhalten keine weiteren E-Mails von 1020.dev mehr.</>
          )}
        </p>
      </header>

      <section className="legal-section">
        <p>
          Falls die Abmeldung versehentlich passiert ist oder Sie später wieder
          Berichte oder Antworten von uns bekommen möchten, schreiben Sie kurz
          an <a href={`mailto:${SITE.email}`}>{SITE.email}</a> — wir tragen Sie
          gerne wieder ein.
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </main>
  );
}
