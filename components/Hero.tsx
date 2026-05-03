'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { REFS, SITE } from '@/lib/data';
import { AuditWidget } from '@/components/AuditWidget';

const HERO_REFS = REFS.filter((ref) => ref.images.length > 0);

const ENTER_STAGGER = 110;
const AUTO_INTERVAL = 3800;
const RESUME_DELAY = 2500;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const container = selectorRef.current;
    if (!container) return;
    // Only act when the container itself is scrollable (mobile carousel).
    // Using scrollIntoView would scroll the whole page on desktop where
    // overflow is hidden — the browser walks up to find a scrollable
    // ancestor. scrollTo on the container is scoped.
    if (container.scrollWidth <= container.clientWidth) return;
    const panel = container.children[activeIndex] as HTMLElement | undefined;
    if (!panel) return;
    const target = panel.offsetLeft - (container.clientWidth - panel.clientWidth) / 2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [activeIndex]);

  // Cursor-follow glow: track mouse position over the selector and
  // expose it as CSS variables so a pseudo-element can follow.
  useEffect(() => {
    const container = selectorRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf: number | null = null;
    let x = 0;
    let y = 0;

    const apply = () => {
      raf = null;
      container.style.setProperty('--cursor-x', `${x}px`);
      container.style.setProperty('--cursor-y', `${y}px`);
    };

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (raf == null) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      container.style.removeProperty('--cursor-x');
      container.style.removeProperty('--cursor-y');
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    HERO_REFS.forEach((_, i) => {
      timers.push(setTimeout(() => setRevealed((prev) => [...prev, i]), ENTER_STAGGER * i));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (paused || userPaused || reduceMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_REFS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, userPaused, reduceMotion]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  };

  const handleEnter = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const handleLeave = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            Sichtbar in <em>Google</em> &amp; zitiert von <em>KI</em>
          </h1>

          <p className="hero-lede">
            Webentwicklung, SEO und Answer-Engine-Optimierung für KMU in Wien und ganz
            Österreich. Wir bauen Websites, die in <strong>Google ranken</strong> und in{' '}
            <strong>ChatGPT, Perplexity und Claude</strong> zitiert werden — plus Backends
            und Automatisierungen, die Ihnen die Arbeit abnehmen.
          </p>

          <div className="hero-ctas">
            <a href={`mailto:${SITE.email}`} className="cta-primary">
              E-Mail schreiben <span className="arrow">→</span>
            </a>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener"
              className="cta-primary cta-primary--accent"
            >
              Termin vereinbaren <span className="arrow">→</span>
            </a>
          </div>

          <div className="hero-signature">
            <span className="line" aria-hidden="true"></span>
            <span>Studio 1020.dev — Wien, Leopoldstadt</span>
          </div>
        </div>

        <div className="hero-stage">
          <div
            className="hero-selector"
            ref={selectorRef}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onTouchStart={handleEnter}
            onTouchEnd={handleLeave}
            role="group"
            aria-label="Aktuelle Arbeiten"
          >
            {HERO_REFS.map((ref, i) => {
              const cover = ref.images[0];
              const isActive = activeIndex === i;
              const isRevealed = revealed.includes(i);

              return (
                <button
                  key={ref.id}
                  type="button"
                  className={[
                    'selector-panel',
                    isActive ? 'is-active' : '',
                    !cover ? 'is-placeholder' : '',
                    isRevealed ? 'is-in' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleSelect(i)}
                  aria-pressed={isActive}
                  aria-label={`${ref.domain} — ${ref.tag}`}
                >
                  {cover && (
                    <Image
                      src={cover.src}
                      // Decorative: button has aria-label, screen readers
                      // ignore img alt inside labelled buttons. Empty alt
                      // prevents double announcement.
                      alt=""
                      fill
                      sizes="(max-width: 920px) 86vw, 25vw"
                      priority={i === 0}
                      className="selector-image"
                    />
                  )}
                  <span className="selector-shadow" aria-hidden="true" />
                  <span className="selector-label">
                    <span className="selector-domain">
                      {ref.domain}
                      {ref.href && <span className="selector-ext" aria-hidden="true">↗</span>}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hero-stage-label">
            <span className="dot" aria-hidden="true"></span>
            <span>
              Aktuelle Arbeiten · {HERO_REFS.length} Projekte · {activeIndex + 1}/{HERO_REFS.length}
            </span>
            <button
              type="button"
              className="hero-stage-toggle"
              onClick={() => setUserPaused((p) => !p)}
              aria-pressed={userPaused}
              aria-label={userPaused ? 'Slideshow fortsetzen' : 'Slideshow pausieren'}
            >
              {userPaused ? 'Play' : 'Pause'}
            </button>
          </div>
        </div>
      </div>

      <AuditWidget compact />
    </section>
  );
}
