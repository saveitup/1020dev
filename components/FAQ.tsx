'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/data';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="section-head">
        <div className="section-tag">FAQ</div>
        <h2 className="section-title">Häufig gestellte Fragen.</h2>
        <p className="section-sub">
          Was Kunden vor dem Erstgespräch wissen wollen — und die Antworten, die wir auch in
          Calls geben würden. Knapp, ehrlich, ohne Marketing-Filter.
        </p>
      </div>

      <div className="faq">
        {FAQS.map((q, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{q.question}</span>
                <span className="icon">+</span>
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
