import type { Metadata } from 'next';
import { FAQ } from '@/components/FAQ';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { Methode } from '@/components/Methode';
import { Industries } from '@/components/Industries';
import { Footer } from '@/components/Footer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import {
  AGENTEN_METHODE,
  AGENTEN_INDUSTRIES,
  AGENTEN_BENEFITS,
  AGENTEN_FAQS,
  SITE,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'KI-Agenten für KMU · Maßgeschneidert für Österreich',
  description:
    'Maßgeschneiderte KI-Agenten für österreichische KMU. Automatisieren Sie Kundenkommunikation, Marketing und wiederkehrende Workflows — branchenspezifisch, DSGVO-konform, ohne eigene IT-Abteilung.',
  alternates: { canonical: `${SITE.url}/agenten` },
};

export default function AgentenPage() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Start', path: '/' },
          { name: 'Agenten', path: '/agenten' },
        ]}
      />
      <FaqStructuredData faqs={AGENTEN_FAQS} />

      {/* ── Hero ── */}
      <section className="hero hero--automation" id="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>Agenten · KI für KMU</span>
            </div>

            <h1 className="hero-title">
              Agenten, die <em>arbeiten</em>
              <br />— nicht plaudern.
            </h1>

            <p className="hero-lede">
              Wir entwickeln <strong>maßgeschneiderte KI-Agenten</strong> für
              kleine und mittlere Unternehmen in Österreich. Jeder Agent
              automatisiert konkrete Aufgaben in Ihrem Betrieb — abgestimmt
              auf Ihre Branche, Ihre Sprache, Ihre Tools. Kein Standardprodukt,
              keine eigene IT-Abteilung nötig.
            </p>

            <div className="hero-ctas">
              <a href={`mailto:${SITE.email}`} className="cta-primary">
                E-Mail schreiben <span className="arrow">→</span>
              </a>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener"
                className="cta-primary cta-primary--accent"
              >
                Erstgespräch vereinbaren <span className="arrow">→</span>
              </a>
            </div>

            <div className="hero-signature">
              <span className="line" aria-hidden="true"></span>
              <span>Studio 1020.dev — Wien, Leopoldstadt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Branchen-Akkordeon ── */}
      <Industries items={AGENTEN_INDUSTRIES} marker="02" />

      {/* ── Ablauf in 4 Phasen ── */}
      <Methode
        steps={AGENTEN_METHODE}
        marker="03"
        title={
          <>
            Vier Phasen. <em>Von der Anfrage bis Go-Live.</em>
          </>
        }
        lede="Jede Phase hat einen klaren Output und definierte Dauer. Sie sehen vor dem Build, was wo passiert — und nach dem Go-Live, wie der Agent tatsächlich performt."
      />

      {/* ── Mehrwert ── */}
      <section className="chapter chapter-tinted" id="mehrwert">
        <div className="chapter-head">
          <div className="chapter-marker">
            <span className="num">04</span>
            <span className="slash">/</span>
            <span>Mehrwert</span>
          </div>
          <h2 className="chapter-title">
            Warum unsere <em>Agenten.</em>
          </h2>
          <p className="chapter-lede">
            KI-Agenten gibt es viele. Die wenigsten verstehen die Realität
            eines österreichischen KMU. Wir bauen für genau diese Realität —
            mit fünf Eigenschaften, die wir nicht verhandeln.
          </p>
        </div>

        <div className="rows rows-services">
          {AGENTEN_BENEFITS.map((b) => (
            <article key={b.num} className="row">
              <div className="row-side">
                <div className="row-num">{b.num}</div>
              </div>
              <div className="row-body">
                <h3 className="row-title row-title-lg">{b.title}</h3>
                <p className="row-desc">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        faqs={AGENTEN_FAQS}
        marker="05"
        title={
          <>
            Häufig gestellte <em>Fragen.</em>
          </>
        }
        lede="Was KMU vor dem Erstgespräch über KI-Agenten wissen wollen — und die Antworten, die wir auch in Calls geben würden. Knapp, ehrlich, ohne Marketing-Filter."
      />

      {/* ── CTA ── */}
      <section className="chapter" id="start">
        <div className="chapter-head">
          <div className="chapter-marker">
            <span className="num">06</span>
            <span className="slash">/</span>
            <span>Nächster Schritt</span>
          </div>
          <h2 className="chapter-title">
            Erstgespräch — <em>kostenlos und konkret.</em>
          </h2>
          <p className="chapter-lede">
            Schildern Sie uns in einem kurzen Gespräch, welche Aufgabe Sie am
            meisten Zeit kostet. Wir sagen Ihnen ehrlich, ob ein Agent dafür
            Sinn ergibt — und wenn ja, was er kostet und wann er läuft.
          </p>
        </div>

        <div className="hero-ctas">
          <a href={`mailto:${SITE.email}`} className="cta-primary">
            E-Mail schreiben <span className="arrow">→</span>
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener"
            className="cta-primary cta-primary--accent"
          >
            Erstgespräch vereinbaren <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
