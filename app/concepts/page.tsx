import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { Methode } from '@/components/Methode';
import { Footer } from '@/components/Footer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { CONCEPTS_METHODE, SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Konzepte · AI & Automation Concepts',
  description:
    'Strukturierte Konzeptentwicklung für AI und Automatisierung in KMU. Sechs Phasen von der Idee bis zur Umsetzung — validiert, messbar, umsetzungsfertig.',
  alternates: { canonical: `${SITE.url}/concepts` },
};

export default function ConceptsPage() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: 'Start', path: '/' },
          { name: 'Konzepte', path: '/concepts' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="hero hero--automation hero--concepts" id="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>Konzepte · AI & Automation</span>
            </div>

            <h1 className="hero-title">
              Konzepte, die <em>halten.</em>
              <br />
              Entscheidungen, die <em>tragen.</em>
            </h1>

            <p className="hero-lede">
              Bevor Sie bauen, brauchen Sie ein Konzept, das trägt.
              Wir entwickeln <strong>AI- und Automatisierungskonzepte</strong> für
              KMU — strukturiert in sechs Phasen, validiert vor der Umsetzung,
              messbar nach dem Go-Live.
            </p>

            <ul className="hero-pills" aria-label="Was Sie bekommen">
              <li><span className="hero-pill-dot" aria-hidden="true"></span>Validiert vor Build</li>
              <li><span className="hero-pill-dot" aria-hidden="true"></span>Go/No-Go pro Use-Case</li>
              <li><span className="hero-pill-dot" aria-hidden="true"></span>Umsetzungsfertig</li>
            </ul>

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

          <div className="hero-stage">
            <div className="blueprint" role="presentation" aria-label="Sechs-Phasen-Blueprint">
              <div className="blueprint-bar">
                <span className="blueprint-tag">
                  <span className="blueprint-dot" aria-hidden="true"></span>
                  concept.blueprint
                </span>
                <span className="blueprint-meta">6 Phasen · 4–5 Wochen</span>
              </div>

              <ol className="blueprint-list">
                {CONCEPTS_METHODE.map((step, i) => (
                  <li
                    key={step.num}
                    className="blueprint-step"
                    style={{ '--i': i } as CSSProperties}
                  >
                    <span className="blueprint-num">{step.num}</span>
                    <div className="blueprint-detail">
                      <span className="blueprint-title">{step.title}</span>
                      <span className="blueprint-dur">{step.duration}</span>
                    </div>
                    <span className="blueprint-tick" aria-hidden="true">✓</span>
                  </li>
                ))}
              </ol>

              <div className="blueprint-foot">
                <span className="blueprint-arrow" aria-hidden="true">▸</span>
                <span>Output: umsetzungsfertiges Paket</span>
                <span className="blueprint-cursor" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow: 6 Phasen ── */}
      <Methode
        steps={CONCEPTS_METHODE}
        marker="01"
        title={
          <>
            Sechs Phasen. <em>Von der Idee zum Ergebnis.</em>
          </>
        }
        lede="Jede Phase hat einen klaren Output und definierte Dauer. Kein Konzept verschwindet in der Schublade — jeder Schritt bringt Sie näher an eine fundierte Entscheidung."
      />

      {/* ── Warum strukturierte Konzeptentwicklung ── */}
      <section className="chapter chapter-tinted" id="warum">
        <div className="chapter-head">
          <div className="chapter-marker">
            <span className="num">02</span>
            <span className="slash">/</span>
            <span>Warum</span>
          </div>
          <h2 className="chapter-title">
            Warum Konzept <em>vor Code.</em>
          </h2>
          <p className="chapter-lede">
            AI-Projekte scheitern selten an der Technik. Sie scheitern an
            unklaren Zielen, falschen Annahmen und fehlender Abstimmung.
            Ein strukturiertes Konzept verhindert das.
          </p>
        </div>

        <div className="rows rows-services">
          <article className="row">
            <div className="row-side">
              <div className="row-num">01</div>
            </div>
            <div className="row-body">
              <h3 className="row-title row-title-lg">
                Teure Sackgassen vermeiden
              </h3>
              <p className="row-desc">
                Ohne Konzept starten viele Projekte mit Annahmen, die sich
                erst nach Wochen als falsch herausstellen. Assessment und
                Validation prüfen Machbarkeit und Wirtschaftlichkeit, bevor
                signifikantes Budget fließt.
              </p>
            </div>
          </article>

          <article className="row">
            <div className="row-side">
              <div className="row-num">02</div>
            </div>
            <div className="row-body">
              <h3 className="row-title row-title-lg">
                Validieren vor dem Bauen
              </h3>
              <p className="row-desc">
                Ein schlanker Prototyp in Phase vier beantwortet die
                entscheidende Frage: Funktioniert das? Sie sehen das Ergebnis,
                bevor die Umsetzung startet — nicht erst danach.
              </p>
            </div>
          </article>

          <article className="row">
            <div className="row-side">
              <div className="row-num">03</div>
            </div>
            <div className="row-body">
              <h3 className="row-title row-title-lg">
                Alle Beteiligten auf einer Linie
              </h3>
              <p className="row-desc">
                AI-Projekte betreffen Geschäftsführung, Fachabteilung und
                IT gleichermaßen. Das Konzept schafft ein gemeinsames
                Verständnis von Zielen, Aufwand und Verantwortlichkeiten —
                dokumentiert und nachvollziehbar.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="chapter" id="start">
        <div className="chapter-head">
          <div className="chapter-marker">
            <span className="num">03</span>
            <span className="slash">/</span>
            <span>Nächster Schritt</span>
          </div>
          <h2 className="chapter-title">
            Erstgespräch — <em>kostenlos und konkret.</em>
          </h2>
          <p className="chapter-lede">
            Schildern Sie Ihren Anwendungsfall in einem kurzen Gespräch.
            Wir sagen Ihnen ehrlich, ob ein Konzept Sinn ergibt — und wenn
            ja, wie der Weg aussieht.
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
