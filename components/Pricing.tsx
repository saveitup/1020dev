import { PRICING, SITE } from '@/lib/data';

type PricingItem = {
  name: string;
  desc: string;
  price: string;
  prefix?: string;
  period?: string;
  isBase?: boolean;
  plus?: boolean;
  bundle?: boolean;
};

type PricingData = {
  einmalig: readonly PricingItem[];
  laufend: readonly PricingItem[];
};

type PricingProps = {
  data?: PricingData;
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
  bundleHint?: string;
};

export function Pricing({
  data = PRICING,
  marker = '04',
  title = (
    <>
      Modular und <em>transparent.</em>
    </>
  ),
  lede = 'Sie zahlen nur für das, was Sie brauchen. Jeder Baustein ist einzeln buchbar oder kombinierbar — keine Pakete, keine versteckten Kosten.',
  bundleHint = 'Bundle „Sichtbar" empfohlen',
}: PricingProps = {}) {
  return (
    <section className="chapter" id="preise">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Preise</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="pricing-table">
        <div className="pricing-group">
          <div className="pricing-group-label">
            <span>Einmalig</span>
            {bundleHint && (
              <span className="pricing-bundle-hint">
                <span className="dot" aria-hidden="true"></span>
                {bundleHint}
              </span>
            )}
          </div>

          {data.einmalig.map((item, i) => (
            <div
              key={i}
              className={[
                'pricing-row',
                item.isBase ? 'pricing-base' : '',
                item.bundle ? 'pricing-bundle' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="pricing-text">
                <div className="pricing-name">
                  {item.plus && <span className="plus">+</span>}
                  {item.name}
                  {item.bundle && <span className="pricing-tag">Bundle</span>}
                </div>
                <div className="pricing-desc">{item.desc}</div>
              </div>
              <div className="pricing-amount">
                <span className="prefix">{item.prefix}</span>
                {item.price}
                <span className="cur">€</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-group">
          <div className="pricing-group-label">Laufend</div>

          {data.laufend.map((item, i) => (
            <div key={i} className="pricing-row">
              <div className="pricing-text">
                <div className="pricing-name">{item.name}</div>
                <div className="pricing-desc">{item.desc}</div>
              </div>
              <div className="pricing-amount">
                {item.price}
                <span className="cur">€</span>
                <span className="period">{item.period}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-cta">
          <div className="pricing-footnote">
            Alle Preise netto, exkl. 20&nbsp;% USt.
            <br />
            <span className="accent">Audit &amp; Erstgespräch immer kostenlos.</span>
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
      </div>
    </section>
  );
}
