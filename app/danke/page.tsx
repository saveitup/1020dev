import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/data';
import { BookingConfirmedTrigger } from '@/components/BookingConfirmedTrigger';

export const metadata: Metadata = {
  title: `Termin bestätigt · ${SITE.name}`,
  description: 'Ihr Erstgespräch ist gebucht. Sie erhalten in Kürze eine Bestätigung per E-Mail.',
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <main className="legal">
      <BookingConfirmedTrigger />
      <header className="legal-head">
        <div className="chapter-marker">
          <span className="num">✓</span>
          <span className="slash">/</span>
          <span>Termin bestätigt</span>
        </div>
        <h1 className="chapter-title">
          Vielen Dank — wir <em>sehen uns.</em>
        </h1>
        <p className="chapter-lede">
          Ihr Erstgespräch ist eingetragen. Sie erhalten in Kürze eine
          Kalendereinladung mit Videolink an die hinterlegte E-Mail-Adresse.
        </p>
      </header>

      <section className="legal-section">
        <h2 className="legal-h2">Was passiert jetzt?</h2>
        <p>
          Vor dem Termin schaue ich mir Ihre aktuelle Website kurz an —
          Performance, SEO-Basics und wie sichtbar Sie für Antwort-Maschinen
          (ChatGPT, Perplexity, Google AI Overviews) bereits sind. So können
          wir im Gespräch direkt konkret werden, statt bei Null zu starten.
        </p>
        <p>
          Bringen Sie gern mit, was Sie haben: aktuelle Zahlen, frühere Audits,
          konkrete Fragen oder einfach eine grobe Idee, wo Sie hinwollen. Falls
          sich vorab noch etwas ändert oder Sie verschieben müssen, antworten
          Sie einfach auf die Bestätigungsmail.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Bei Fragen vorab</h2>
        <dl className="legal-dl">
          <dt>E-Mail</dt>
          <dd>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </dd>
          <dt>Telefon</dt>
          <dd>
            <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
          </dd>
        </dl>
      </section>

      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </main>
  );
}
