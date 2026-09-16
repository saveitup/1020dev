import { APPS_SHOWCASE } from '@/lib/data';

type AppShowcaseProps = {
  marker?: string;
};

export function AppShowcase({ marker = '03' }: AppShowcaseProps = {}) {
  const featured = APPS_SHOWCASE[0];

  return (
    <section className="chapter" id="referenz">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Referenz</span>
        </div>
        <h2 className="chapter-title">
          Unsere eigene App. <em>{featured.name}.</em>
        </h2>
        <p className="chapter-lede">
          Wer Apps für andere baut, sollte selbst eine betreiben. {featured.name}{' '}
          ist unser eigenes Produkt — jede Entscheidung von Architektur bis
          Release-Prozess haben wir daran selbst getroffen und ausgehalten.
        </p>
      </div>

      <div className="app-cases">
        {APPS_SHOWCASE.map((app) => (
          <article key={app.id} className="app-case">
            <a
              href={app.href}
              target="_blank"
              rel="noopener"
              className="app-case-visual"
              aria-label={`${app.name} öffnen — ${app.domain}`}
            >
              <span className="app-case-visual-mark">{app.wordmark}</span>
              <span className="app-case-visual-tagline">{app.tagline}</span>
              <span className="app-case-visual-domain">
                {app.domain} <span aria-hidden="true">↗</span>
              </span>
            </a>

            <div className="app-case-body">
              <span className="app-case-tag">{app.tag}</span>
              <h3 className="app-case-title">{app.name}</h3>
              <p className="app-case-desc">{app.desc}</p>

              <ul className="app-case-features">
                {app.features.map((feature) => (
                  <li key={feature}>
                    <span className="bullet" aria-hidden="true">›</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <dl className="app-case-facts">
                {app.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={app.href}
                target="_blank"
                rel="noopener"
                className="row-cta"
              >
                App ansehen <span className="arrow">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
