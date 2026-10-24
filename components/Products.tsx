import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { PRODUCTS, PRODUCTS_HEAD } from '@/lib/data';
import { InView } from './InView';
import { ProductFields } from './ProductFields';

type Cta = { readonly label: string; readonly href: string };

// Einsatz der fünf Prüfweg-Balken auf dem Clausl-Screen (wie auf clausl.1020.dev)
const WEG_T = [0.3, 0.55, 0.8, 1.05, 2.1];

// Maße des ATX-Charts im AlpenBroker-Screen (viewBox, gleiches Seitenverhältnis wie gerendert)
const CHART_W = 318;
const CHART_H = 110;

/**
 * Die eigenen Produkte direkt unter dem Hero. Oben drei Felder (Legal AI,
 * iOS, FinanceEd), die sich beim Scrollen in den Markenfarben füllen; darunter
 * die drei Websites nebeneinander. Weil sie gleich aufgebaut sind (Pill,
 * Headline mit farbigem Schlusswort, Lead, zwei Knöpfe, Handy), teilen sie
 * eine Karte — Schrift, Farben und Details kommen von der jeweiligen Seite.
 */
export function Products() {
  const { clausl, spin, alpenbroker } = PRODUCTS;
  // Reihenfolge der Felder: orange, grün, rot — die Kartenanker heißen #produkt-<id>
  const order = [clausl, spin, alpenbroker];

  return (
    <div className="products-flow">
      <section className="section products" id="produkte" aria-labelledby="products-title">
        <header className="section-head section-head--center">
          <p className="products-eyebrow">{PRODUCTS_HEAD.eyebrow}</p>
          <h2 id="products-title" className="section-title">
            {PRODUCTS_HEAD.title}
          </h2>
          <p className="section-sub">{PRODUCTS_HEAD.sub}</p>
        </header>

        <ProductFields
          fields={order.map((p) => ({ id: p.id, label: p.field, product: p.fieldProduct }))}
        />

        <div className="products-grid">
          <ProductCard
            brand="clausl"
            logo={
              <>
                <Image src={clausl.mark.src} alt={clausl.mark.alt} width={28} height={28} />
                <b className="pc-name">{clausl.name}</b>
              </>
            }
            product={clausl}
          >
            <ClauslScreen />
          </ProductCard>

          <ProductCard
            brand="spin"
            logo={<Image src={spin.wordmark.src} alt={spin.wordmark.alt} width={70} height={30} className="pc-wm" />}
            product={spin}
          >
            <div className="pc-schirm">
              <Image src={spin.screenshot} alt="" fill sizes="380px" className="pc-shot" />
              <div className="pc-insel" />
            </div>
          </ProductCard>

          <ProductCard
            brand="alpenbroker"
            logo={
              <>
                <Image src={alpenbroker.mark.src} alt={alpenbroker.mark.alt} width={28} height={28} />
                <AlpenName />
              </>
            }
            product={alpenbroker}
          >
            <AlpenScreen />
          </ProductCard>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  brand,
  logo,
  product,
  children,
}: {
  brand: 'clausl' | 'spin' | 'alpenbroker';
  logo: ReactNode;
  product: {
    readonly badge: string | null;
    readonly badgeText: string;
    readonly titleStart: string;
    readonly titleAccent: string;
    readonly lede: string;
    readonly primary: Cta;
    readonly secondary: Cta;
    readonly noteLabel?: string;
    readonly note: string | null;
  };
  children: ReactNode;
}) {
  const titleId = `product-${brand}-title`;

  return (
    <InView className={`pc pc--${brand}`}>
      <article id={`produkt-${brand}`} aria-labelledby={titleId}>
        <div className="pc-copy">
          <div className="pc-brand p-auf">{logo}</div>
          <a className="pc-pill p-auf" href={product.primary.href} target="_blank" rel="noopener">
            {product.badge && <span className="pc-tag">{product.badge}</span>}
            {product.badgeText} <span aria-hidden="true">→</span>
          </a>
          <h3 id={titleId} className="pc-title p-auf d1">
            <span className="pc-t1">{product.titleStart}</span> <span className="pc-grad">{product.titleAccent}</span>
          </h3>
          <p className="pc-lead p-auf d2">{product.lede}</p>
          <div className="pc-btns p-auf d3">
            <a className="pc-kn pc-kn--voll" href={product.primary.href} target="_blank" rel="noopener">
              {product.primary.label} <span className="pc-pf" aria-hidden="true">→</span>
            </a>
            <a className="pc-kn pc-kn--leer" href={product.secondary.href} target="_blank" rel="noopener">
              {product.secondary.label} <span className="pc-pf" aria-hidden="true">→</span>
            </a>
          </div>
          {product.note && (
            <p className="pc-klein p-auf d3">
              {product.noteLabel && <b>{product.noteLabel}</b>} {product.note}
            </p>
          )}
        </div>

        <div className="pc-stage" aria-hidden="true">
          <div className="pc-skala">
            <div className="pc-handy">{children}</div>
          </div>
        </div>

        <div className="pc-streifen" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </article>
    </InView>
  );
}

// Clausl: Nachbau der Antwort von clausl.1020.dev
function ClauslScreen() {
  const { clausl } = PRODUCTS;
  const screen = clausl.screen;

  return (
    <div className="pc-schirm pc-schirm--clausl">
      <div className="pc-insel" />
      <div className="cl-kopf">
        <Image src={clausl.mark.src} alt="" width={20} height={20} />
        {clausl.name}
      </div>
      <div className="cl-frage">{screen.question}</div>
      <div className="cl-weg">
        {WEG_T.map((t, i) => (
          <i key={t} style={{ '--c': `var(--g${i})`, '--t': `${t}s` } as CSSProperties} />
        ))}
      </div>
      <div className="cl-status">{screen.caption}</div>
      <div className="cl-schema">{screen.scheme}</div>
      {screen.checks.map((c, i) => (
        <div key={c.label} className="cl-mk">
          <i className="cl-hk" style={{ '--t': `${1.2 + i * 0.25}s` } as CSSProperties} />
          <div>
            <b>{c.label}</b>
            <span>{c.ref}</span>
          </div>
        </div>
      ))}
      <div className="cl-erg">
        <small>{screen.result.label}</small>
        <strong>{screen.result.value}</strong>
        <span className="cl-beleg">{screen.proof}</span>
      </div>
    </div>
  );
}

// „AlpenBroker“ mit rotem „Alpen“, wie im Logo der Website
function AlpenName() {
  const { name, nameAccent } = PRODUCTS.alpenbroker;
  return (
    <b className="pc-name">
      <span>{nameAccent}</span>
      {name.slice(nameAccent.length)}
    </b>
  );
}

// AlpenBroker: mobile Ansicht von alpenbroker.com (Kursleiste, ATX-Chart, Werte)
function AlpenScreen() {
  const { mark, screen } = PRODUCTS.alpenbroker;
  const pts = screen.chart.map((v, i) => [
    (i / (screen.chart.length - 1)) * CHART_W,
    8 + (1 - v) * (CHART_H - 16),
  ]);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${line} L${CHART_W} ${CHART_H} L0 ${CHART_H} Z`;

  return (
    <div className="pc-schirm pc-schirm--alpen">
      <div className="pc-insel" />
      <div className="ab-kopf">
        <Image src={mark.src} alt="" width={24} height={24} />
        <AlpenName />
        <span className="ab-menu" />
      </div>

      <div className="ab-ticker">
        <div className="ab-band">
          {[...screen.ticker, ...screen.ticker].map((t, i) => (
            <span key={`${t.symbol}-${i}`} className="ab-tick">
              <b>{t.symbol}</b> {t.price}{' '}
              <span className={t.up ? 'ab-up' : 'ab-down'}>
                {t.up ? '↗' : '↘'}
                {t.change}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="ab-karte">
        <div className="ab-zeile">
          <div>
            <small>{screen.index}</small>
            <strong>{screen.value}</strong>
          </div>
          <div className="ab-chg">
            <span>↗ {screen.change}</span>
            <small>{screen.changePct}</small>
          </div>
        </div>
        <svg className="ab-chart" viewBox={`0 0 ${CHART_W} ${CHART_H}`}>
          <defs>
            <linearGradient id="ab-flaeche" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dc2626" stopOpacity="0.22" />
              <stop offset="1" stopColor="#dc2626" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="ab-area" d={area} fill="url(#ab-flaeche)" />
          <path className="ab-line" d={line} pathLength={1} />
        </svg>
        <p className="ab-cap">{screen.caption}</p>
      </div>

      <div className="ab-liste">
        <p className="ab-liste-titel">{screen.listTitle}</p>
        {screen.stocks.map((s, i) => (
          <div key={s.symbol} className="ab-row" style={{ '--t': `${1.4 + i * 0.18}s` } as CSSProperties}>
            <span className="ab-sym">{s.symbol}</span>
            <span className="ab-name">
              <b>{s.name}</b>
              <small>{screen.market}</small>
            </span>
            <span className="ab-px">
              <b>{s.price}</b>
              <small className={s.up ? 'ab-up' : 'ab-down'}>{s.change}</small>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
