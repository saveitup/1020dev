import { SITE } from '@/lib/data';

type PricingProps = {
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
};

export function Pricing({
  marker = '04',
  title = (
    <>
      Honorar statt <em>Preisliste.</em>
    </>
  ),
  lede = 'Keine starre Preisliste. Sie zahlen ein angemessenes Honorar — fair kalkuliert unter Berücksichtigung der Unterstützung durch KI im Entwicklungsprozess.',
}: PricingProps = {}) {
  return (
    <section className="chapter" id="preise">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Honorar</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="pricing-cta">
        <div className="pricing-konditionen">
          <div><strong>Kalkulation</strong> nach tatsächlichem Aufwand — Effizienzgewinne durch KI fließen direkt in den Preis ein.</div>
          <div><strong>Zahlung</strong> 50&nbsp;% bei Auftragserteilung, 50&nbsp;% bei Übergabe.</div>
          <div><strong>Bugfix</strong> 30 Tage nach Launch inklusive.</div>
          <div><strong>Laufende Posten</strong> monatlich kündbar.</div>
          <div className="accent">Audit &amp; Erstgespräch immer kostenlos.</div>
        </div>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener"
          className="pricing-cta-btn"
        >
          Konkretes Angebot <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
