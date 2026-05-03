import { METHODE } from '@/lib/data';

type MethodeStep = {
  num: string;
  title: string;
  duration: string;
  desc: string;
  cta?: { label: string; href: string };
};

type MethodeProps = {
  steps?: readonly MethodeStep[];
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
};

export function Methode({
  steps = METHODE,
  marker = '01',
  title = (
    <>
      Vier Schritte. <em>Keine Black Box.</em>
    </>
  ),
  lede = 'Vom ersten Audit zur laufenden Optimierung — jeder Schritt mit klarem Ergebnis und definierter Dauer. Wöchentliche Reviews, ehrliches Reporting.',
}: MethodeProps = {}) {
  return (
    <section className="chapter" id="methode">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Methode</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="rows rows-methode">
        {steps.map((step) => (
          <article key={step.num} className="row">
            <div className="row-side">
              <div className="row-num">{step.num}</div>
              <div className="row-meta">{step.duration}</div>
            </div>
            <div className="row-body">
              <h3 className="row-title">{step.title}</h3>
              <p className="row-desc">{step.desc}</p>
              {step.cta && (
                <a href={step.cta.href} className="row-cta">
                  {step.cta.label} <span className="arrow">→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
