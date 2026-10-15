'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { HERO, SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';
import { Wordmark } from './Wordmark';

// Geschützte Bindestriche, damit "iOS-" nicht allein am Zeilenende steht
const nbHyphen = (text: string) => text.replace(/(KI|iOS)-/g, '$1‑');

const EQ = HERO.equation;
const LAST = HERO.ideas.length - 1;

// ---- Timing ---------------------------------------------------------------
// Erster Tropfen kurz nach dem Splash; jeder weitere kurz nach dem Aufprall
// des vorherigen — der Rhythmus wird schneller, wie Anlauf nehmen.
const START_DELAY = 600;
const GAP_AFTER_LAND = [760, 520, 420];
// Wie lange sich ein Tropfen am oberen Rand bildet, bevor er fällt
const HANG = [520, 360, 260];
const RISE_MS = [1500, 1300, 1200];
// Finale: Oberfläche schwappt, großer Ring
const FINAL_RISE_MS = 1600;
// Tropfenfolge bis 100: Abstände werden kürzer (Faktor), bis zum Minimum;
// am Ende wieder länger, als würde der Hahn zugedreht
const SEQ_FIRST_GAP = 230;
const SEQ_FACTOR = 0.88;
const SEQ_MIN_GAP = 17;
const SEQ_TAIL = [34, 60, 95, 140, 200];
// Schwerkraft in px/s² — bestimmt die Fallzeit aus der Höhe
const GRAVITY = 1900;

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

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);
const easeOut = (t: number) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
const linear = (t: number) => clamp(t, 0, 1);

/**
 * Hero als Gleichung: "leerer Raum = leerer Raum". Alle Tropfen fallen von
 * oben, verteilt über die ganze Breite. Jeder Aufprall zählt: der erste
 * macht "+ 1 Idee ≠ leerer Raum", dann 2 und 3. Danach regnet es immer
 * dichter bis 100, das Glas läuft voll, und am Ende fällt der Punkt der
 * Wortmarke: "leerer Raum + 100 Ideen = 1020.dev".
 * Startet erst, wenn der Splash weg ist (`body.ready`).
 */
export function Hero() {
  // Gelandete Ideen (0 = Term noch nicht da)
  const [count, setCount] = useState(0);
  // Erste Idee ist gelandet → "≠"
  const [unequal, setUnequal] = useState(false);
  // Hundert erreicht → "= 1020.dev"
  const [done, setDone] = useState(false);
  // Füllstand (0–1), Steigzeit und Verlauf der CSS-Transition
  const [liquid, setLiquid] = useState({ fill: 0, ms: RISE_MS[0], linear: false });
  const heroRef = useRef<HTMLElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const dropsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const surface = surfaceRef.current;
    const layer = dropsRef.current;
    if (!hero || !surface || !layer) return;

    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    let observer: MutationObserver | null = null;

    // Ohne Bewegung: gleich den Endzustand zeigen
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(HERO.ideas[LAST].count);
      setUnequal(true);
      setDone(true);
      setLiquid({ fill: HERO.ideas[LAST].fill, ms: 0, linear: true });
      return;
    }

    // ---- Pegel ------------------------------------------------------------
    // Spiegelt die CSS-Transition, damit Tropfen genau auf der Oberfläche landen
    const fillOf = (i: number) => (i < 0 ? 0 : HERO.ideas[i].fill);
    let rise = { from: 0, to: 0, at: 0, ms: 1, ease: easeOut };
    const levelAt = (t: number) => rise.from + (rise.to - rise.from) * rise.ease((t - rise.at) / rise.ms);
    const surfaceY = (t: number) => hero.clientHeight * (1 - levelAt(t));

    const raise = (to: number, ms: number) => {
      const at = performance.now();
      rise = { from: levelAt(at), to, at, ms, ease: easeOut };
      setLiquid({ fill: to, ms, linear: false });
    };

    const slosh = (k: number) => {
      surface.animate(
        [
          { rotate: '0deg', scale: '1 1' },
          { rotate: `${-1.5 * k}deg`, scale: `1 ${1 + 1.1 * k}`, offset: 0.18 },
          { rotate: `${1.1 * k}deg`, scale: `1 ${1 + 0.6 * k}`, offset: 0.42 },
          { rotate: `${-0.5 * k}deg`, scale: `1 ${1 + 0.25 * k}`, offset: 0.68 },
          { rotate: '0deg', scale: '1 1' },
        ],
        { duration: 1700, easing: 'ease-out' },
      );
    };

    // ---- Effekte ----------------------------------------------------------
    const add = (cls: string) => {
      const el = document.createElement('span');
      el.className = cls;
      layer.appendChild(el);
      return el;
    };

    const ripple = (x: number, y: number, width: number, delay = 0, duration = 1200) => {
      const el = add('ripple');
      el.style.setProperty('--rw', `${width}px`);
      el.animate(
        [
          { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(0.08)`, opacity: 0.95 },
          { transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(1)`, opacity: 0 },
        ],
        { duration, delay, easing: 'cubic-bezier(.15,.7,.3,1)', fill: 'both' },
      ).onfinish = () => el.remove();
    };

    // Kleiner Tropfen, der auf einer Parabel fliegt
    const fleck = (x: number, y: number, dx: number, height: number, ms: number, delay = 0) => {
      const el = add('splash');
      el.animate(
        [
          { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
          { transform: `translate(${x + dx * 0.55}px, ${y - height}px) scale(0.95)`, opacity: 1, offset: 0.45 },
          { transform: `translate(${x + dx}px, ${y + 2}px) scale(0.5)`, opacity: 0 },
        ],
        { duration: ms, delay, easing: 'cubic-bezier(.33,.66,.66,1)', fill: 'both' },
      ).onfinish = () => el.remove();
    };

    const bigImpact = (x: number, y: number) => {
      ripple(x, y, 150);
      ripple(x, y, 100, 160, 1100);
      ripple(x, y, 60, 320, 900);
      // Krone: Spritzer nach links und rechts
      [-26, -14, 14, 26].forEach((dx, k) => fleck(x, y, dx, 18 + (k % 2) * 10, 560));
      // Rückstoß-Tropfen springt senkrecht hoch
      fleck(x, y, 0, 38, 640, 120);
    };

    const smallImpact = (x: number, y: number, k: number) => {
      ripple(x, y, 56 + (k % 3) * 14, 0, 900);
      if (k % 4 === 0) fleck(x, y, (k % 8 === 0 ? -1 : 1) * (10 + (k % 5) * 3), 10 + (k % 3) * 5, 420);
    };

    // ---- Tropfen ----------------------------------------------------------
    // Startpunkte am oberen Rand: die ersten drei bewusst verteilt
    // (links, rechts, Mitte — leicht variiert), der Regen danach zufällig
    const FIRST_X = [0.27, 0.73, 0.48];
    const topPoint = (i?: number) => {
      const W = hero.clientWidth;
      const frac = i === undefined ? 0.04 + Math.random() * 0.92 : FIRST_X[i] + (Math.random() - 0.5) * 0.08;
      return { x: W * frac, y: 3 };
    };
    const fallMs = (h: number) => clamp(Math.sqrt((2 * Math.max(h, 12)) / GRAVITY) * 1000, 240, 1300);

    // Fällt von (x, y) beschleunigt bis zur Oberfläche, die zur Landezeit gilt
    const fall = (
      el: HTMLElement,
      x: number,
      y: number,
      opts: {
        delay?: number;
        dx?: number;
        from: string;
        to: string;
        onLand: (x: number, y: number) => void;
      },
    ) => {
      const delay = opts.delay ?? 0;
      const dx = opts.dx ?? 0;
      const startAt = performance.now() + delay;
      let ms = fallMs(surfaceY(startAt + 700) - y);
      ms = fallMs(surfaceY(startAt + ms) - y);
      const yLand = surfaceY(startAt + ms) - 3;
      const keyframes: Keyframe[] = [
        { transform: `translate(${x}px, ${y}px) ${opts.from}`, opacity: 1 },
        { transform: `translate(${x + dx}px, ${yLand}px) ${opts.to}`, opacity: 1 },
      ];
      el.animate(keyframes, {
        duration: ms,
        delay,
        // Ease-in (≈ t²): wird schneller wie unter Schwerkraft
        easing: 'cubic-bezier(.32,0,.67,0)',
        fill: 'both',
      }).onfinish = () => {
        el.remove();
        opts.onLand(x + dx, yLand + 3);
      };
    };

    // Ein Tropfen bildet sich am oberen Rand, hängt kurz und fällt dann
    const drip = (i: number, onLand: () => void) => {
      const hang = HANG[i];
      const { x, y } = topPoint(i);
      const el = add('drop drop--big');
      el.animate(
        [
          { transform: `translate(${x}px, ${y}px) scale(0, 0)`, opacity: 0 },
          { transform: `translate(${x}px, ${y}px) scale(0.7, 0.55)`, opacity: 1, offset: 0.35 },
          { transform: `translate(${x}px, ${y + 4}px) scale(0.9, 0.95)`, offset: 0.7 },
          { transform: `translate(${x}px, ${y + 10}px) scale(0.78, 1.3)`, opacity: 1 },
        ],
        { duration: hang, easing: 'ease-in-out', fill: 'forwards' },
      ).onfinish = () =>
        fall(el, x, y + 10, {
          dx: (Math.random() - 0.5) * 6,
          from: 'scale(0.78, 1.3)',
          to: 'scale(0.66, 1.75)',
          onLand: (lx, ly) => {
            bigImpact(lx, ly);
            onLand();
          },
        });
    };

    // ---- Ablauf -----------------------------------------------------------
    const finish = () => {
      setDone(true);
      raise(fillOf(LAST), FINAL_RISE_MS);
      slosh(0.9);
      // Der Punkt der Wortmarke "fällt" (CSS); danach ein großer Ring
      later(() => {
        const y = surfaceY(performance.now());
        ripple(hero.clientWidth / 2, y, 260, 0, 1600);
        ripple(hero.clientWidth / 2, y, 170, 200, 1400);
      }, 650);
    };

    // Die restlichen Ideen regnen von oben, immer dichter, am Ende auslaufend
    const sequence = () => {
      const prev = HERO.ideas[LAST - 1].count;
      const fresh = HERO.ideas[LAST].count - prev;
      // Regentropfen kommen knapp oberhalb des Hero ins Bild
      const y = -18;

      // Abstände: schneller werdend, am Ende wieder langsamer
      const gaps: number[] = [];
      let g = SEQ_FIRST_GAP;
      for (let k = 0; k < fresh; k++) {
        gaps.push(g);
        g = Math.max(g * SEQ_FACTOR, SEQ_MIN_GAP);
      }
      SEQ_TAIL.forEach((t, k) => {
        gaps[fresh - SEQ_TAIL.length + k] = t;
      });
      const emits: number[] = [];
      let acc = 0;
      for (const gap of gaps) {
        acc += gap;
        emits.push(acc);
      }

      // Pegel steigt linear vom ersten bis zum letzten Aufprall. Der Plan
      // steht vorab, damit jeder Tropfen weiß, wo die Oberfläche bei seiner
      // Landung ist — die CSS-Transition läuft mit derselben Kurve.
      const now = performance.now();
      const H = hero.clientHeight;
      const fromLevel = fillOf(LAST - 1);
      const toLevel = fillOf(LAST);
      const firstLand = now + emits[0] + fallMs(H * (1 - fromLevel) - y);
      const lastLand = now + emits[fresh - 1] + fallMs(H * (1 - toLevel) - y);
      const span = Math.max(lastLand - firstLand, 1);
      rise = { from: fromLevel, to: toLevel, at: firstLand, ms: span, ease: linear };
      later(() => setLiquid({ fill: toLevel, ms: span, linear: true }), firstLand - now);

      let landed = 0;
      emits.forEach((emit, k) => {
        const el = add('drop');
        fall(el, topPoint().x, y, {
          delay: emit,
          dx: (Math.random() - 0.5) * 6,
          from: 'scale(0.75, 1.3)',
          to: 'scale(0.66, 1.7)',
          onLand: (lx, ly) => {
            smallImpact(lx, ly, k);
            landed += 1;
            setCount(prev + landed);
            if (landed === fresh) later(finish, 320);
          },
        });
      });
    };

    const step = (i: number) => {
      if (i === LAST) {
        sequence();
        return;
      }
      drip(i, () => {
        setCount(HERO.ideas[i].count);
        setUnequal(true);
        raise(fillOf(i), RISE_MS[i]);
        slosh(i === 0 ? 1 : 0.75);
        later(() => step(i + 1), GAP_AFTER_LAND[i]);
      });
    };

    const start = () => later(() => step(0), START_DELAY);

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

  // Neue Zahl rollt nur bei den einzelnen Stufen ein, nicht beim Hochzählen
  const numKey = count <= HERO.ideas[LAST - 1].count ? `n${count}` : 'seq';

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title" ref={heroRef}>
      <div className="glass" aria-hidden="true">
        <div
          className={`glass-liquid${liquid.linear ? ' is-linear' : ''}`}
          style={{ '--fill': liquid.fill, '--rise': `${liquid.ms}ms` } as CSSProperties}
        >
          <div className="glass-surface" ref={surfaceRef}>
            <svg className="glass-wave glass-wave--back" viewBox="0 0 2400 40" preserveAspectRatio="none">
              <path d={WAVE} />
            </svg>
            <svg className="glass-wave glass-wave--front" viewBox="0 0 2400 40" preserveAspectRatio="none">
              <path d={WAVE} />
            </svg>
          </div>
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
        {/* Tropfen fallen hinter dem Text */}
        <div className="glass-drops" ref={dropsRef} />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        {/* Am Rechenzeichen ausgerichtet: "+" und "=" stehen in einer Spalte */}
        <h1 id="hero-title" className="hero-title hero-eq" aria-label={EQ.ariaLabel}>
          <span className="eq-l1" aria-hidden="true">
            {EQ.term}
          </span>
          {count > 0 && (
            <>
              <span className="eq-op eq-o1 is-new" aria-hidden="true">
                +
              </span>
              <span className="eq-r1 idea-count is-new" aria-hidden="true">
                <span key={numKey} className={`eq-num${numKey === 'seq' || count === 1 ? '' : ' is-new'}`}>
                  {count}
                </span>{' '}
                {count === 1 ? EQ.one : EQ.many}
              </span>
            </>
          )}
          <span className={`eq-op eq-o2${unequal && !done ? ' is-unequal' : ''}`} aria-hidden="true">
            =<span className="eq-slash" />
          </span>
          {done ? (
            <span key="result" className="eq-r2 eq-result is-new" aria-hidden="true">
              <Wordmark />
            </span>
          ) : (
            <span key="term" className="eq-r2" aria-hidden="true">
              {EQ.term}
            </span>
          )}
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
