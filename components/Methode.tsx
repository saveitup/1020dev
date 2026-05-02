import { METHODE } from '@/lib/data';

export function Methode() {
  return (
    <section className="section" id="methode">
      <div className="section-head">
        <div className="section-tag">Methode</div>
        <h2 className="section-title">Vier Schritte. Kein Black Box.</h2>
        <p className="section-sub">
          Vom ersten Audit zur laufenden Optimierung — jeder Schritt mit klarem Ergebnis und
          definierter Dauer.
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
