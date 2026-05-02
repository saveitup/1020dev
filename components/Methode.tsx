import { METHODE } from '@/lib/data';

export function Methode() {
  return (
    <section className="chapter" id="methode">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">02</span>
          <span className="slash">/</span>
          <span>Methode</span>
        </div>
        <h2 className="chapter-title">
          Vier Schritte. <em>Keine Black Box.</em>
        </h2>
        <p className="chapter-lede">
          Vom ersten Audit zur laufenden Optimierung — jeder Schritt mit klarem
          Ergebnis und definierter Dauer. Wöchentliche Reviews, ehrliches Reporting.
        </p>
      </div>

      <div className="rows">
        {METHODE.map((step) => (
          <article key={step.num} className="row">
            <div className="row-side">
              <div className="row-num">{step.num}</div>
              <div className="row-meta">{step.duration}</div>
            </div>
            <div className="row-body">
              <h3 className="row-title">{step.title}</h3>
              <p className="row-desc">{step.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
