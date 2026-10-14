import { APPS_PAGE, APPS_SHOWCASE } from '@/lib/data';
import { ArrowUpRightIcon } from './Icons';
import { PhoneMock } from './PhoneMock';

/**
 * Schlanker Showcase der eigenen App auf /apps: Intro + Phone-Mockup,
 * darunter Features und Eckdaten. Bewusst ohne Methode, Pakete oder FAQ.
 */
export function AppShowcase() {
  const app = APPS_SHOWCASE[0];

  return (
    <>
      <section className="app-hero" aria-labelledby="app-title">
        <div className="app-hero-copy">
          <p className="hero-eyebrow">{APPS_PAGE.eyebrow}</p>
          <h1 id="app-title" className="app-title">
            {app.name}.
          </h1>
          <p className="app-tagline">{app.tagline}</p>
          <p className="app-desc">{app.desc}</p>
          <div className="app-actions">
            <a href={app.href} target="_blank" rel="noopener" className="btn">
              {APPS_PAGE.cta}
              <span className="btn-icon">
                <ArrowUpRightIcon />
              </span>
            </a>
            <span className="app-domain">{app.domain}</span>
          </div>
        </div>
        <div className="app-stage">
          <div className="phones">
            {app.screenshots.map((shot) => (
              <PhoneMock key={shot.src} shot={shot} />
            ))}
          </div>
        </div>
      </section>

      <section className="section app-details" aria-labelledby="app-features-title">
        <h2 id="app-features-title" className="studio-title">
          {APPS_PAGE.featuresTitle}
        </h2>
        <div>
          <ul className="app-features">
            {app.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <dl className="app-facts">
            {app.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
