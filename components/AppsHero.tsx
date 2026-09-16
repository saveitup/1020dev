import { APPS_SHOWCASE, SITE } from '@/lib/data';
import { PhoneMock } from './PhoneMock';

export function AppsHero() {
  const app = APPS_SHOWCASE[0];

  return (
    <section className="hero hero--automation hero--apps" id="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="dot" aria-hidden="true"></span>
            <span>Mobile Apps · iOS · Android</span>
          </div>

          <h1 className="hero-title">
            Mobile Apps,{' '}
            <br />
            die <em>ankommen.</em>
          </h1>

          <p className="hero-lede">
            iOS- und Android-Apps aus einer Codebasis, plus Web-Version. Wir
            entwickeln <strong>von der Idee bis in den Store</strong> — und
            wissen, wie sich das anfühlt, weil wir mit{' '}
            <strong>{app.name}</strong> unsere eigene App betreiben — ein
            Song pro Tag, geteilt mit Freunden.
          </p>

          <ul className="hero-pills" aria-label="Was Sie bekommen">
            <li><span className="hero-pill-dot" aria-hidden="true"></span>React Native · Expo</li>
            <li><span className="hero-pill-dot" aria-hidden="true"></span>iOS &amp; Android</li>
            <li><span className="hero-pill-dot" aria-hidden="true"></span>Web &amp; PWA</li>
            <li><span className="hero-pill-dot" aria-hidden="true"></span>Store-Release</li>
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
              Termin vereinbaren <span className="arrow">→</span>
            </a>
          </div>

          <div className="hero-signature">
            <span className="line" aria-hidden="true"></span>
            <span>Studio 1020.dev — Wien, Leopoldstadt</span>
          </div>
        </div>

        <div className="hero-stage">
          <div className="app-stage">
            <PhoneMock app={app} />

            <a
              href={app.href}
              target="_blank"
              rel="noopener"
              className="app-stage-caption"
            >
              <span className="app-stage-caption-label">
                <span className="dot" aria-hidden="true"></span>
                Eigenes Produkt · {app.status}
              </span>
              <span className="app-stage-caption-name">{app.name}</span>
              <span className="app-stage-caption-domain">
                {app.domain} <span className="ext" aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
