'use client';

import { useEffect, useRef } from 'react';

type Field = { readonly id: string; readonly label: string; readonly product: string };

/**
 * Überleitung vom Hero zu den Produkten: drei Felder, über die beim Scrollen
 * nacheinander die Markenfarbe wischt — orange, grün, rot —, mit schräger
 * Kante wie die Farbstreifen der Produkte und einem hellen Block vorneweg.
 * Der Fortschritt (`--f`, 0–1) hängt direkt an der Scrollposition, läuft
 * also auch rückwärts. Ohne JS oder bei „Bewegung reduzieren“ sind die
 * Felder voll.
 */
export function ProductFields({ fields }: { fields: readonly Field[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = ref.current;
    if (!row || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = [...row.querySelectorAll<HTMLElement>('.fld')];

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = row.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0: Felder kommen unten ins Bild — 1: ihre Mitte steht bei 60 % der Höhe
      const p = (vh - r.top) / (vh * 0.4 + r.height * 0.5);
      items.forEach((el, i) => {
        const f = Math.min(1, Math.max(0, (p - i * 0.14) / 0.68));
        el.style.setProperty('--f', f.toFixed(3));
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // Bilder und Schriften verschieben das Layout noch nach dem ersten Rechnen
    window.addEventListener('load', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="fields">
      {fields.map((f) => {
        const text = (
          <>
            <span className="fld-text">
              <span className="fld-label">{f.label}</span>
              <span className="fld-product">{f.product}</span>
            </span>
            <span className="fld-arrow">↓</span>
          </>
        );
        return (
          <a key={f.id} href={`#produkt-${f.id}`} className={`fld fld--${f.id}`}>
            {text}
            <span className="fld-lead" aria-hidden="true" />
            {/* Dieselbe Beschriftung in Weiß auf Markenfarbe, nur so weit sichtbar wie der Wisch */}
            <span className="fld-wet" aria-hidden="true">
              {text}
            </span>
          </a>
        );
      })}
    </div>
  );
}
