'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { HERO, SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';

// Geschützte Bindestriche, damit "iOS-" nicht allein am Zeilenende steht
const nbHyphen = (text: string) => text.replace(/(KI|iOS)-/g, '$1‑');

// Titel rund um das Zählwort aufteilen: "… und [eine Idee] noch …"
const [TITLE_BEFORE, TITLE_AFTER] = HERO.title.split(HERO.ideas[0].label);

// Wann (ms nach Start) der Pegel auf die Stufen eins bis hundert steigt
const STEP_AT = [400, 3000, 5000, 7000];

// Wellenoberfläche: vier gleiche Perioden auf 2400 Einheiten, damit eine
// Verschiebung um die halbe Breite nahtlos in sich übergeht.
const WAVE = (() => {
  let d = 'M0 20';
  for (let x = 0; x < 2400; x += 600) {
    d += ` C${x + 100} 6 ${x + 200} 6 ${x + 300} 20 C${x + 400} 34 ${x + 500} 34 ${x + 600} 20`;
  }
  return `${d} L2400 40 L0 40 Z`;
})();

// Aufsteigende Bläschen — feste Werte, damit Server und Browser gleich rendern
const BUBBLES = [
  { x: '8%', size: 7, dur: 7.5, delay: 0 },
  { x: '17%', size: 4, dur: 6.2, delay: 2.1 },
  { x: '29%', size: 9, dur: 8.4, delay: 1.2 },
  { x: '38%', size: 5, dur: 6.8, delay: 3.6 },
  { x: '51%', size: 6, dur: 7.9, delay: 0.7 },
  { x: '60%', size: 4, dur: 5.9, delay: 2.8 },
  { x: '69%', size: 8, dur: 8.8, delay: 1.9 },
  { x: '78%', size: 5, dur: 6.5, delay: 4.2 },
  { x: '87%', size: 7, dur: 7.2, delay: 0.4 },
  { x: '94%', size: 4, dur: 6.1, delay: 3.1 },
];

/**
 * Hero als Frage: "Ist ein leerer Raum und eine Idee noch ein leerer Raum?"
 * Das Zählwort steigt von "eine Idee" bis "hundert Ideen", und mit jeder
 * Stufe füllt sich der Hintergrund wie ein Glas. Der Raum startet leer;
 * der Ablauf beginnt erst, wenn der Splash weg ist (`body.ready`).
 */
export function Hero() {
  // -1 = noch leer, danach Index in HERO.ideas
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const timers: number[] = [];
    let observer: MutationObserver | null = null;
    const start = () => {
      STEP_AT.forEach((at, i) => {
        timers.push(window.setTimeout(() => setStep(i), at));
      });
    };

    if (document.body.classList.contains('ready')) {
      start();
    } else {
      observer = new MutationObserver(() => {
        if (!document.body.classList.contains('ready')) return;
        observer?.disconnect();
        observer = null;
        start();
      });
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      observer?.disconnect();
    };
  }, []);

  const shown = HERO.ideas[Math.max(step, 0)];
  const fill = step < 0 ? 0 : shown.fill;

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="glass" aria-hidden="true">
        <div className="glass-liquid" style={{ '--fill': fill } as CSSProperties}>
          <svg className="glass-wave glass-wave--back" viewBox="0 0 2400 40" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
          <svg className="glass-wave glass-wave--front" viewBox="0 0 2400 40" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
          <div className="glass-body">
            {BUBBLES.map((b) => (
              <span
                key={b.x}
                className="bubble"
                style={
                  {
                    '--bx': b.x,
                    '--bs': `${b.size}px`,
                    '--bt': `${b.dur}s`,
                    '--bd': `${b.delay}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        <h1 id="hero-title" className="hero-title">
          {TITLE_BEFORE}
          <span key={step} className={`idea-count${step > 0 ? ' is-new' : ''}`}>
            {shown.label}
          </span>
          {TITLE_AFTER}
        </h1>
        <p className="hero-lede">{nbHyphen(HERO.lede)}</p>
        <div className="hero-actions">
          <a href={`mailto:${SITE.email}`} className="btn">
            Kontakt aufnehmen
            <span className="btn-icon">
              <ArrowIcon />
            </span>
          </a>
          <a href="#referenzen" className="hook-link">
            Referenzen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
