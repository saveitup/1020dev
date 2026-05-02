import { METHODE } from '@/lib/data';

export function Methode() {
  return (
    <section className="chapter" id="methode">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">01</span>
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

      <div className="methode-grid">
        {METHODE.map((step) => (
          <div key={step.num} className="methode-step">
            <div className="methode-num">{step.num}</div>
            <div className="methode-title">{step.title}</div>
            <div className="methode-duration">{step.duration}</div>
            <div className="methode-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
