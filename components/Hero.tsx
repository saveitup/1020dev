'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import { REFS, SITE } from '@/lib/data';

export function Hero() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let mx = 0;
    let my = 0;
    let sy = 0;
    let raf: number | null = null;

    const apply = () => {
      raf = null;
      const el = deckRef.current;
      if (!el) return;
      el.style.setProperty('--mx', mx.toFixed(3));
      el.style.setProperty('--my', my.toFixed(3));
      el.style.setProperty('--sy', sy.toFixed(0));
    };

    const schedule = () => {
      if (raf == null) raf = requestAnimationFrame(apply);
    };

    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
      schedule();
    };
    const onScroll = () => {
      sy = window.scrollY;
      schedule();
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          Wir bauen, was Ihre Idee <em>verlangt.</em>
        </h1>

        <p className="hero-lede">
          Webentwicklung, SEO und Answer-Engine-Optimierung für KMU in Wien und ganz
          Österreich. Manchmal ist das eine Website, die in <strong>Google rankt</strong>.
          Manchmal ein Backend, das Ihnen die Arbeit abnimmt. Was im Vordergrund steht —{' '}
          <strong>Design oder Funktion</strong> — entscheiden Sie. Wir bauen es.
        </p>

        <div className="hero-ctas">
          <a href="#audit" className="cta-primary">
            Kostenlose Analyse starten <span className="arrow">→</span>
          </a>
          <a href="#methode" className="cta-ghost">
            Wie wir arbeiten
          </a>
        </div>

        <div className="hero-signature">
          <span className="line" aria-hidden="true"></span>
          <span>Studio 1020.dev — Wien, Leopoldstadt</span>
        </div>
      </div>

      <div className="hero-stage" aria-hidden="true">
        <div className="hero-stage-frame">
          <div className="hero-deck" ref={deckRef}>
            <div className="deck-shadow deck-shadow--3"></div>
            <div className="deck-shadow deck-shadow--2"></div>
            <div className="deck-shadow deck-shadow--1"></div>

            {REFS.map((ref, i) => {
              const cover = ref.images[0];
              return (
              <article
                key={ref.id}
                className="deck-card"
                style={{ '--i': i } as CSSProperties}
              >
                <div className="deck-thumb">
                  {cover ? (
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 920px) 88vw, 460px"
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      priority={i === 0}
                    />
                  ) : (
                    <div className="deck-thumb-placeholder">
                      <span className="note">Screenshot folgt</span>
                      <span className="name">{ref.domain}</span>
                    </div>
                  )}
                </div>
                <div className="deck-meta">
                  <span className="deck-tag">{ref.tag}</span>
                  <span className="deck-domain">{ref.domain}</span>
                </div>
              </article>
              );
            })}
          </div>

          <div className="hero-stage-label">
            <span className="dot" aria-hidden="true"></span>
            <span>Aktuelle Arbeiten · {REFS.length} Projekte</span>
          </div>
        </div>
      </div>
    </section>
  );
}
