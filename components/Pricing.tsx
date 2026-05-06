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

type PackageItem = {
  name: string;
  desc: string;
  includes: readonly string[];
  price: string;
  strikethrough?: string;
  saves?: string;
};

type PricingData = {
  pakete?: readonly PackageItem[];
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
  lede = 'Sie zahlen nur für das, was Sie brauchen — modular oder als Paket. Keine versteckten Kosten.',
  bundleHint,
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
        {data.pakete && data.pakete.length > 0 && (
          <div className="pricing-group pricing-pakete">
            <div className="pricing-group-label">
              <span>Pakete</span>
            </div>

            {data.pakete.map((item, i) => (
              <div key={i} className="pricing-row pricing-package-row">
                <div className="pricing-text">
                  <div className="pricing-name">
                    {item.name}
                    {item.saves && (
                      <span className="pricing-saves-badge">spart {item.saves}&nbsp;€</span>
                    )}
                  </div>
                  <div className="pricing-desc">{item.desc}</div>
                  <div className="pricing-package-includes">
                    {item.includes.join(' · ')}
                  </div>
                </div>
                <div className="pricing-amount">
                  {item.strikethrough && (
                    <span className="pricing-strikethrough">{item.strikethrough}&nbsp;€</span>
                  )}
                  {item.price}
                  <span className="cur">€</span>
                </div>
              </div>
            ))}
          </div>
        )}

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
                {item.prefix && <span className="prefix">{item.prefix}</span>}
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
          <div className="pricing-konditionen">
            <div><strong>Preise</strong> netto, exkl. 20&nbsp;% USt.</div>
            <div><strong>Zahlung</strong> 50&nbsp;% bei Auftragserteilung, 50&nbsp;% bei Übergabe.</div>
            <div><strong>Bugfix</strong> 30 Tage nach Launch inklusive.</div>
            <div><strong>Hosting &amp; SSL</strong> bei Website-Basis 12 Monate inklusive; Domain stellt der Kunde.</div>
            <div><strong>Monitoring</strong> monatlich kündbar.</div>
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
      </div>
    </section>
  );
}
