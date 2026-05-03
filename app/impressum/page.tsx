import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: `Impressum · ${SITE.name}`,
  description: `Impressum und Offenlegung gemäß § 5 ECG, § 24 MedienG für ${SITE.name}.`,
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="legal">
      <header className="legal-head">
        <div className="chapter-marker">
          <span className="num">§</span>
          <span className="slash">/</span>
          <span>Impressum</span>
        </div>
        <h1 className="chapter-title">
          Offenlegung &amp; <em>Impressum.</em>
        </h1>
        <p className="chapter-lede">
          Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB)
          und § 24 Mediengesetz (MedienG) — sowie Offenlegung nach § 25 MedienG.
        </p>
      </header>

      <section className="legal-section">
        <h2 className="legal-h2">Medieninhaber, Diensteanbieter &amp; Herausgeber</h2>
        <p>
          <strong>{SITE.legal.owner}</strong>
          <br />
          {SITE.legal.legalForm}
          <br />
          {SITE.address.street}
          <br />
          {SITE.address.postalCode} {SITE.address.city}, {SITE.address.countryName}
        </p>
        <dl className="legal-dl">
          <dt>Telefon</dt>
          <dd>
            <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phoneDisplay}</a>
          </dd>
          <dt>E-Mail</dt>
          <dd>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </dd>
          <dt>Web</dt>
          <dd>
            <a href={SITE.url}>{SITE.url.replace(/^https?:\/\//, '')}</a>
          </dd>
        </dl>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Unternehmensdaten</h2>
        <dl className="legal-dl">
          <dt>Unternehmensgegenstand</dt>
          <dd>
            Dienstleistung in der automatischen Datenverarbeitung und Informationstechnik —
            Webentwicklung, SEO, Answer-Engine-Optimization (AEO), Workflow-Automatisierung.
          </dd>
          <dt>Berufsbezeichnung</dt>
          <dd>Dienstleister in der automatischen Datenverarbeitung und Informationstechnik (Österreich)</dd>
          <dt>Mitgliedschaften</dt>
          <dd>Wirtschaftskammer Wien, Fachgruppe UBIT</dd>
          <dt>Anwendbare Rechtsvorschriften</dt>
          <dd>
            Gewerbeordnung (GewO),{' '}
            <a href="https://www.ris.bka.gv.at/" target="_blank" rel="noopener">
              ris.bka.gv.at
            </a>
          </dd>
          <dt>Aufsichts- bzw. Gewerbebehörde</dt>
          <dd>Magistratisches Bezirksamt für den 2. Bezirk, Wien</dd>
          <dt>UID-Nummer</dt>
          <dd>[falls vorhanden — sonst „nicht USt-pflichtig (Kleinunternehmer § 6 Abs. 1 Z 27 UStG)"]</dd>
        </dl>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Blattlinie / Grundlegende Richtung</h2>
        <p>
          {SITE.name} dokumentiert die Arbeit eines unabhängigen Studios für Webentwicklung
          und KI-Sichtbarkeit in Wien. Inhalte sind redaktionell-kommerziell ausgerichtet,
          frei von Drittwerbung und werden vom Medieninhaber selbst verfasst.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Haftung für Inhalte und Links</h2>
        <p>
          Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          Externe Verlinkungen wurden zum Zeitpunkt der Verlinkung auf rechtswidrige Inhalte
          überprüft; auf nachträgliche Änderungen besteht kein Einfluss. Bei Bekanntwerden
          rechtswidriger Inhalte werden derartige Links umgehend entfernt.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Urheberrecht</h2>
        <p>
          Sämtliche auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Layout)
          unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
          der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Streitbeilegung</h2>
        <p>
          Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungs-Plattform
          der EU zu richten:{' '}
          <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener">
            ec.europa.eu/odr
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>
    </main>
  );
}
