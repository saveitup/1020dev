'use client';

import { useState } from 'react';

type Industry = {
  id: string;
  label: string;
  tag: string;
  short: string;
  htmlDetail: string;
};

type IndustriesProps = {
  items: readonly Industry[];
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
};

export function Industries({
  items,
  marker = '02',
  title = (
    <>
      Was Agenten in <em>Ihrer Branche</em> tun.
    </>
  ),
  lede = 'Jede Branche hat eigene Engpässe und eigene Tools. Wählen Sie Ihren Bereich — wir zeigen, wo ein Agent konkret entlastet und an welche Systeme er angedockt wird.',
}: IndustriesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="chapter" id="branchen">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>Branchen</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="faq-list faq-list--industries">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const num = String(i + 1).padStart(2, '0');
          return (
            <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="qnum">{num}</span>
                <span className="industry-label">
                  <span className="industry-name">{item.label}</span>
                  <span className="industry-tag">{item.tag}</span>
                </span>
                <span className="icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <p className="industry-short">{item.short}</p>
                  <div
                    className="faq-a-text"
                    dangerouslySetInnerHTML={{ __html: item.htmlDetail }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
