'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Spielt den Auftritt seines Inhalts ab, sobald er ins Bild scrollt.
 * `is-armed` (Ausgangszustand) kommt nur dazu, wenn der Block beim Laden
 * komplett unter dem Viewport liegt; `is-in` startet die Transitions.
 * Ohne JS, bei „Bewegung reduzieren“ oder wenn der Block schon sichtbar
 * ist, bleibt alles im Endzustand.
 */
export function InView({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add('is-armed');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('is-in');
        io.disconnect();
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
