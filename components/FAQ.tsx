'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/data';

type FaqItem = {
  question: string;
  plainAnswer: string;
  htmlAnswer: string;
};

type FAQProps = {
  faqs?: readonly FaqItem[];
  marker?: string;
  title?: React.ReactNode;
  lede?: string;
};

export function FAQ({
  faqs = FAQS,
  marker = '05',
  title = (
    <>
      Häufig gestellte <em>Fragen.</em>
    </>
  ),
  lede = 'Was Kunden vor dem Erstgespräch wissen wollen — und die Antworten, die wir auch in Calls geben würden. Knapp, ehrlich, ohne Marketing-Filter.',
}: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="chapter chapter-tinted" id="faq">
      <div className="chapter-head">
        <div className="chapter-marker">
          <span className="num">{marker}</span>
          <span className="slash">/</span>
          <span>FAQ</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        <p className="chapter-lede">{lede}</p>
      </div>

      <div className="faq-list">
        {faqs.map((q, i) => {
          const isOpen = openIndex === i;
          const num = String(i + 1).padStart(2, '0');
          return (
            <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="qnum">{num}</span>
                <span>{q.question}</span>
                <span className="icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <p dangerouslySetInnerHTML={{ __html: q.htmlAnswer }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
