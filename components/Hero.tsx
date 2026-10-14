'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { HERO, SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';
import { Wordmark } from './Wordmark';

// Geschützte Bindestriche, damit "iOS-" nicht allein am Zeilenende steht
const nbHyphen = (text: string) => text.replace(/(KI|iOS)-/g, '$1‑');

const EQ = HERO.equation;
const LAST = HERO.ideas.length - 1;

// Wann (ms nach Start) die Stufen beginnen; die Tropfen fallen ab hier
const STEP_AT = [900, 3400, 5600, 7800];
// Dauer, bis der Pegel nach dem ersten Aufprall seine Stufe erreicht
const RISE_MS = [1400, 1400, 1400, 3200];

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

const ease = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

/**
 * Hero als Gleichung: "leerer Raum = leerer Raum". Jede Idee fällt als
 * Tropfen aus dem Term "+ n Ideen" ins "Glas" — nach der ersten wird aus
 * "=" ein "≠", der Pegel steigt. Bei 100 regnet es, der Zähler läuft mit
 * jedem Aufprall hoch, und am Ende steht "leerer Raum + 100 Ideen = 1020.dev".
 * Startet leer und erst, wenn der Splash weg ist (`body.ready`).
 */
export function Hero() {
  // Ideen im Term (0 = Term noch nicht da)
  const [count, setCount] = useState(0);
  // Erste Idee ist gelandet → "≠"
  const [unequal, setUnequal] = useState(false);
  // Hundert erreicht → "= 1020.dev"
  const [done, setDone] = useState(false);
  // Stufe, deren Füllstand erreicht ist (-1 = leer)
  const [level, setLevel] = useState(-1);
  const heroRef = useRef<HTMLElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const dropsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glass = glassRef.current;
    const layer = dropsRef.current;
    if (!hero || !glass || !layer) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    let observer: MutationObserver | null = null;

    // Pegel-Bookkeeping, damit Tropfen auf der aktuellen Oberfläche landen
    const fillOf = (i: number) => (i < 0 ? 0 : HERO.ideas[i].fill);
    let rise = { from: 0, to: 0, at: 0, ms: 1 };
    const surfaceAt = (t: number) => {
      const p = ease((t - rise.at) / rise.ms);
      return rise.from + (rise.to - rise.from) * p;
    };

    const add = (cls: string) => {
      const el = document.createElement('span');
      el.className = cls;
      layer.appendChild(el);
      return el;
    };

    const ripple = (x: number, y: number, big: boolean) => {
      const rings = big ? 2 : 1;
      for (let r = 0; r < rings; r++) {
        const el = add('ripple');
        el.style.setProperty('--rw', `${big ? 120 : 70}px`);
        el.animate(
          [
            { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(0.1)`, opacity: 0.9 },
            { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(1)`, opacity: 0 },
          ],
          { duration: 1100 + r * 300, delay: r * 180, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'both' },
        ).onfinish = () => el.remove();
      }
    };

    const splash = (x: number, y: number) => {
      [-1, 1].forEach((dir, k) => {
        const el = add('splash');
        const dx = dir * (14 + k * 6);
        el.animate(
          [
            { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
            { transform: `translate(${x + dx * 0.6}px, ${y - 26 - k * 8}px) scale(0.9)`, opacity: 1, offset: 0.45 },
            { transform: `translate(${x + dx}px, ${y + 4}px) scale(0.5)`, opacity: 0 },
          ],
          { duration: 620, easing: 'cubic-bezier(.3,.6,.5,1)', fill: 'both' },
        ).onfinish = () => el.remove();
      });
    };

    // Ein Tropfen fällt von (x0, y0) und landet auf der Oberfläche
    const drop = (x0: number, y0: number, delay: number, dx: number, big: boolean, onLand: () => void) => {
      const H = hero.clientHeight;
      const startAt = performance.now() + delay;
      const guess = H * (1 - surfaceAt(startAt + 700));
      const fall = Math.max(guess - y0, 40);
      const duration = Math.min(Math.max(Math.sqrt(fall) * 42, 420), 1100);
      const yLand = H * (1 - surfaceAt(startAt + duration)) - 4;
      const el = add(big ? 'drop drop--big' : 'drop');
      el.animate(
        [
          { transform: `translate(${x0}px, ${y0}px) scale(0.2, 0.2)`, opacity: 0 },
          { transform: `translate(${x0}px, ${y0 + 4}px) scale(1, 1.1)`, opacity: 1, offset: 0.18 },
          { transform: `translate(${x0 + dx}px, ${yLand}px) scale(0.8, 1.45)`, opacity: 1 },
        ],
        { duration, delay, easing: 'cubic-bezier(.45,0,.9,.55)', fill: 'both' },
      ).onfinish = () => {
        el.remove();
        ripple(x0 + dx, yLand + 4, big);
        if (big) splash(x0 + dx, yLand);
        onLand();
      };
    };

    const raiseTo = (i: number) => {
      const now = performance.now();
      rise = { from: surfaceAt(now), to: fillOf(i), at: now, ms: RISE_MS[i] };
      setLevel(i);
      glass.classList.add('is-sloshing');
      later(() => glass.classList.remove('is-sloshing'), RISE_MS[i] + 400);
    };

    const runStep = (i: number) => {
      const target = HERO.ideas[i].count;
      const prev = i > 0 ? HERO.ideas[i - 1].count : 0;

      if (reduce) {
        setCount(target);
        setUnequal(true);
        setLevel(i);
        if (i === LAST) setDone(true);
        return;
      }

      if (i < LAST) {
        // Einzelne Ideen: Zahl erscheint, ein Tropfen fällt aus dem Term
        setCount(target);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            const heroBox = hero.getBoundingClientRect();
            const box = hero.querySelector('.idea-count')?.getBoundingClientRect();
            if (!box) return;
            const x = box.left - heroBox.left + box.width * (0.3 + 0.4 * Math.random());
            const y = box.bottom - heroBox.top - 6;
            drop(x, y, 140, (Math.random() - 0.5) * 16, true, () => {
              setUnequal(true);
              raiseTo(i);
            });
          }),
        );
        return;
      }

      // Hundert: es regnet über die ganze Breite, jeder Aufprall zählt mit
      const W = hero.clientWidth;
      const fresh = target - prev;
      let landed = 0;
      for (let k = 0; k < fresh; k++) {
        const x = 12 + Math.random() * (W - 24);
        const delay = Math.pow(Math.random(), 0.8) * 2400;
        drop(x, -20 - Math.random() * 60, delay, (Math.random() - 0.5) * 24, false, () => {
          landed += 1;
          if (landed === 1) raiseTo(i);
          setCount(prev + landed);
          if (landed === fresh) later(() => setDone(true), 350);
        });
      }
    };

    const start = () => STEP_AT.forEach((at, i) => later(() => runStep(i), at));

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
      layer.replaceChildren();
    };
  }, []);

  const fill = level < 0 ? 0 : HERO.ideas[level].fill;
  const riseMs = level < 0 ? RISE_MS[0] : RISE_MS[level];
  // Für die ersten Stufen neu einblenden, beim Hochzählen im Regen nicht
  const termKey = count <= HERO.ideas[LAST - 1].count ? `n${count}` : 'rain';

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title" ref={heroRef}>
      <div className="glass" aria-hidden="true" ref={glassRef}>
        <div
          className="glass-liquid"
          style={{ '--fill': fill, '--rise': `${riseMs}ms` } as CSSProperties}
        >
          <svg className="glass-wave glass-wave--back" viewBox="0 0 2400 40" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
          <svg className="glass-wave glass-wave--front" viewBox="0 0 2400 40" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
          <div className="glass-body">
            <span className="glass-caustics" />
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
        <div className="glass-drops" ref={dropsRef} />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        <h1 id="hero-title" className="hero-title hero-eq" aria-label={EQ.ariaLabel}>
          <span className="eq-line" aria-hidden="true">
            <span>{EQ.term}</span>
            {count > 0 && (
              <span key={termKey} className={`eq-term${termKey === 'rain' ? '' : ' is-new'}`}>
                <span className="eq-op">+</span>
                <span className="idea-count">
                  <span className="eq-num">{count}</span> {count === 1 ? EQ.one : EQ.many}
                </span>
              </span>
            )}
          </span>
          <span className="eq-line" aria-hidden="true">
            <span className={`eq-op eq-rel${unequal && !done ? ' is-unequal' : ''}`}>
              =<span className="eq-slash" />
            </span>
            {done ? (
              <span key="result" className="eq-result is-new">
                <Wordmark />
              </span>
            ) : (
              <span key="term">{EQ.term}</span>
            )}
          </span>
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
