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
// Erste Stufe startet kurz nach dem Splash; jede weitere kurz nach dem
// Aufprall der vorherigen — der Rhythmus wird schneller, wie Anlauf nehmen.
const START_DELAY = 650;
const GAP_AFTER_LAND = [850, 560, 460];
// Wie lange sich ein Tropfen unter der Ziffer bildet, bevor er fällt
const HANG = [460, 320, 240];
// Wartezeit, bis die neue Zahl eingeblendet ist und gemessen werden kann
const TEXT_SETTLE = [420, 240, 220];
// Strahl: so lange gießen die hundert Ideen aus dem Ursprung
const POUR_MS = 2600;
const RISE_MS = [1500, 1300, 1200, 3400];
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

/**
 * Hero als Gleichung: "leerer Raum = leerer Raum". Alle Tropfen haben
 * denselben Ursprung — unter der Zahl, die dank der Ausrichtung am
 * Rechenzeichen nie wandert. Die ersten Ideen bilden sich dort einzeln und
 * machen aus "=" ein "≠"; der Pegel federt hoch, die Oberfläche schwappt.
 * Bis 100 gießt es als Strahl aus demselben Punkt, der Zähler läuft mit
 * jedem Aufprall, und am Ende fällt der Punkt der Wortmarke:
 * "leerer Raum + 100 Ideen = 1020.dev". Startet erst nach dem Splash.
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
      setLevel(LAST);
      return;
    }

    // ---- Pegel ------------------------------------------------------------
    const fillOf = (i: number) => (i < 0 ? 0 : HERO.ideas[i].fill);
    let rise = { from: 0, to: 0, at: 0, ms: 1 };
    const levelAt = (t: number) => rise.from + (rise.to - rise.from) * easeOut((t - rise.at) / rise.ms);
    const surfaceY = (t: number) => hero.clientHeight * (1 - levelAt(t));

    const slosh = (strength: number) => {
      const k = strength;
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

    const raiseTo = (i: number) => {
      const now = performance.now();
      rise = { from: levelAt(now), to: fillOf(i), at: now, ms: RISE_MS[i] };
      setLevel(i);
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

    // Strahl: nicht jeder Tropfen bekommt einen Ring, sonst verschwimmt es
    const streamImpact = (x: number, y: number, k: number) => {
      if (k % 2 === 0) ripple(x, y, 64 + Math.random() * 30, 0, 900);
      if (Math.random() < 0.22) fleck(x, y, (Math.random() - 0.5) * 22, 8 + Math.random() * 10, 420);
    };

    // ---- Ursprung ---------------------------------------------------------
    // Ein Punkt für alle Tropfen: unter der ersten Ziffer der Zahl. Die Zahl
    // steht durch die Ausrichtung am Rechenzeichen fest; gemessen wird
    // einmal und erst nach einer Größenänderung erneut.
    let origin: { x: number; y: number } | null = null;
    const getOrigin = () => {
      if (origin) return origin;
      const heroBox = hero.getBoundingClientRect();
      const num = hero.querySelector<HTMLElement>('.eq-num');
      if (!num) return null;
      const box = num.getBoundingClientRect();
      const digits = Math.max(num.textContent?.trim().length ?? 1, 1);
      origin = {
        x: box.left - heroBox.left + box.width / digits / 2,
        y: box.bottom - heroBox.top - 6,
      };
      return origin;
    };
    const onResize = () => {
      origin = null;
    };
    window.addEventListener('resize', onResize);

    // ---- Tropfen ----------------------------------------------------------
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
        // Tropfen taucht am Ursprung erst auf (statt fertig dazuhängen)
        appear?: boolean;
        onLand: (x: number, y: number) => void;
      },
    ) => {
      const delay = opts.delay ?? 0;
      const dx = opts.dx ?? 0;
      const startAt = performance.now() + delay;
      const msFor = (h: number) => clamp(Math.sqrt((2 * Math.max(h, 12)) / GRAVITY) * 1000, 240, 1100);
      let ms = msFor(surfaceY(startAt + 600) - y);
      ms = msFor(surfaceY(startAt + ms) - y);
      const yLand = surfaceY(startAt + ms) - 3;
      const keyframes: Keyframe[] = opts.appear
        ? [
            { transform: `translate(${x}px, ${y}px) scale(0.2)`, opacity: 0 },
            { transform: `translate(${x + dx * 0.05}px, ${y + 4}px) ${opts.from}`, opacity: 1, offset: 0.1 },
            { transform: `translate(${x + dx}px, ${yLand}px) ${opts.to}`, opacity: 1 },
          ]
        : [
            { transform: `translate(${x}px, ${y}px) ${opts.from}`, opacity: 1 },
            { transform: `translate(${x + dx}px, ${yLand}px) ${opts.to}`, opacity: 1 },
          ];
      el.animate(
        keyframes,
        // Ease-in (≈ t²): wird schneller wie unter Schwerkraft
        { duration: ms, delay, easing: 'cubic-bezier(.32,0,.67,0)', fill: 'both' },
      ).onfinish = () => {
        el.remove();
        opts.onLand(x + dx, yLand + 3);
      };
    };

    // Ein Tropfen bildet sich unter (x, y), hängt kurz und fällt dann
    const drip = (x: number, y: number, hang: number, onLand: () => void) => {
      const el = add('drop drop--big');
      el.animate(
        [
          { transform: `translate(${x}px, ${y}px) scale(0, 0)`, opacity: 0 },
          { transform: `translate(${x}px, ${y}px) scale(0.7, 0.55)`, opacity: 1, offset: 0.35 },
          { transform: `translate(${x}px, ${y + 3}px) scale(0.9, 0.95)`, offset: 0.7 },
          { transform: `translate(${x}px, ${y + 8}px) scale(0.78, 1.3)`, opacity: 1 },
        ],
        { duration: hang, easing: 'ease-in-out', fill: 'forwards' },
      ).onfinish = () =>
        fall(el, x, y + 8, {
          dx: (Math.random() - 0.5) * 10,
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
      // Der Punkt der Wortmarke "fällt" (CSS); danach ein großer Ring
      later(() => {
        const y = surfaceY(performance.now());
        ripple(hero.clientWidth / 2, y, 260, 0, 1600);
        ripple(hero.clientWidth / 2, y, 170, 200, 1400);
        slosh(0.6);
      }, 650);
    };

    // Die restlichen Ideen gießen als Strahl aus dem Ursprung
    const pour = () => {
      const i = LAST;
      const prev = HERO.ideas[i - 1].count;
      const fresh = HERO.ideas[i].count - prev;
      const o = getOrigin();
      if (!o) return;
      let landed = 0;
      for (let k = 0; k < fresh; k++) {
        // Dreiecksverteilung: der Strahl schwillt an und läuft wieder aus
        const delay = ((Math.random() + Math.random()) / 2) * POUR_MS;
        const el = add('drop');
        fall(el, o.x + (Math.random() - 0.5) * 2, o.y + 6, {
          delay,
          dx: (Math.random() - 0.5) * 12,
          from: 'scale(0.75, 1.15)',
          to: 'scale(0.6, 1.7)',
          appear: true,
          onLand: (x, y) => {
            streamImpact(x, y, k);
            landed += 1;
            if (landed === 1) raiseTo(i);
            setCount(prev + landed);
            if (landed === fresh) later(finish, 260);
          },
        });
      }
    };

    const step = (i: number) => {
      if (i === LAST) {
        pour();
        return;
      }
      setCount(HERO.ideas[i].count);
      later(() => {
        const o = getOrigin();
        if (!o) return;
        drip(o.x, o.y, HANG[i], () => {
          setUnequal(true);
          raiseTo(i);
          slosh(i === 0 ? 1 : 0.75);
          later(() => step(i + 1), GAP_AFTER_LAND[i]);
        });
      }, TEXT_SETTLE[i]);
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
      window.removeEventListener('resize', onResize);
      layer.replaceChildren();
    };
  }, []);

  const fill = level < 0 ? 0 : HERO.ideas[level].fill;
  const riseMs = level < 0 ? RISE_MS[0] : RISE_MS[level];
  // Neue Zahl rollt nur bei den einzelnen Stufen ein, nicht beim Hochzählen
  const numKey = count <= HERO.ideas[LAST - 1].count ? `n${count}` : 'rain';

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title" ref={heroRef}>
      <div className="glass" aria-hidden="true">
        <div
          className={`glass-liquid${level === LAST ? ' is-final' : ''}`}
          style={{ '--fill': fill, '--rise': `${riseMs}ms` } as CSSProperties}
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
        <div className="glass-drops" ref={dropsRef} />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        {/* Am Rechenzeichen ausgerichtet: "+" und "=" stehen in einer Spalte,
            dadurch wandert die Zahl nie — der Ursprung der Tropfen bleibt */}
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
                <span key={numKey} className={`eq-num${numKey === 'rain' || count === 1 ? '' : ' is-new'}`}>
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
