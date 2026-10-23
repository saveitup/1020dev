import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { PRODUCTS, PRODUCTS_HEAD } from '@/lib/data';
import { InView } from './InView';

type Cta = { readonly label: string; readonly href: string };

// Einsatz der fünf Prüfweg-Balken auf dem Clausl-Screen (wie auf clausl.1020.dev)
const WEG_T = [0.3, 0.55, 0.8, 1.05, 2.1];

/**
 * Die eigenen Produkte direkt unter dem Hero. Jede Karte übernimmt den Look
 * ihrer Landingpage (Inter, Verlaufsschrift, Pill, runde Knöpfe, gekipptes
 * Handy, Farbstreifen) — in Grün für Spin, in Orange für Clausl.
 */
export function Products() {
  const { spin, clausl } = PRODUCTS;
  const screen = clausl.screen;

  return (
    <section className="section products" id="produkte" aria-labelledby="products-title">
      <header className="section-head section-head--center">
        <p className="products-eyebrow">{PRODUCTS_HEAD.eyebrow}</p>
        <h2 id="products-title" className="section-title">
          {PRODUCTS_HEAD.title}
        </h2>
        <p className="section-sub">{PRODUCTS_HEAD.sub}</p>
      </header>

      <div className="products-grid">
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
          brand="clausl"
          logo={
            <>
              <Image src={clausl.mark.src} alt={clausl.mark.alt} width={28} height={28} />
              <b className="pc-name">{clausl.name}</b>
            </>
          }
          product={clausl}
        >
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
        </ProductCard>
      </div>
    </section>
  );
}

function ProductCard({
  brand,
  logo,
  product,
  children,
}: {
  brand: 'spin' | 'clausl';
  logo: ReactNode;
  product: {
    readonly name: string;
    readonly badge: string;
    readonly badgeText: string;
    readonly titleStart: string;
    readonly titleAccent: string;
    readonly lede: string;
    readonly primary: Cta;
    readonly secondary: Cta;
    readonly note: string | null;
  };
  children: ReactNode;
}) {
  const titleId = `product-${brand}`;

  return (
    <InView className={`pc pc--${brand}`}>
      <article aria-labelledby={titleId}>
        <div className="pc-copy">
          <div className="pc-brand p-auf">{logo}</div>
          <a className="pc-pill p-auf" href={product.primary.href} target="_blank" rel="noopener">
            <span className="pc-tag">{product.badge}</span>
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
          {product.note && <p className="pc-klein p-auf d3">{product.note}</p>}
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
