'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { REFS, SITE } from '@/lib/data';
import { AuditWidget } from '@/components/AuditWidget';

const HERO_REFS = REFS;

const AUTO_INTERVAL = 3000;
const RESUME_DELAY = 2500;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const advance = () => {
    setActiveIndex((cur) => {
      setPrevIndex(cur);
      return (cur + 1) % HERO_REFS.length;
    });
  };

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(advance, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  useEffect(() => {
    if (prevIndex === null) return;
    if (prevTimer.current) clearTimeout(prevTimer.current);
    prevTimer.current = setTimeout(() => setPrevIndex(null), 1100);
    return () => {
      if (prevTimer.current) clearTimeout(prevTimer.current);
    };
  }, [prevIndex, activeIndex]);

  const handleEnter = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const handleLeave = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  };

  const active = HERO_REFS[activeIndex];

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
          <a
            href={active.href ?? undefined}
            target={active.href ? '_blank' : undefined}
            rel={active.href ? 'noopener' : undefined}
            className="hero-slideshow-link"
            aria-label={
              active.href ? `${active.domain} öffnen (neuer Tab)` : undefined
            }
            aria-disabled={active.href ? undefined : true}
            tabIndex={active.href ? undefined : -1}
          >
            <div
              className="hero-slideshow"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              onTouchStart={handleEnter}
              onTouchEnd={handleLeave}
              role="group"
              aria-label={`Aktuelle Arbeiten — ${active.domain}, ${active.tag}`}
              aria-live="polite"
            >
              {HERO_REFS.map((ref, i) => {
                const cls = [
                  'slideshow-slide',
                  activeIndex === i ? 'is-active' : '',
                  prevIndex === i ? 'is-leaving' : '',
                ]
                  .filter(Boolean)
                  .join(' ');
                return (
                  <span
                    key={ref.id}
                    className={cls}
                    aria-hidden={activeIndex !== i}
                  >
                    <span className={`slideshow-card slideshow-card--${ref.id}`}>
                      <Image
                        src={ref.logo.src}
                        alt={ref.logo.alt}
                        fill
                        sizes="(max-width: 920px) 70vw, 25vw"
                        priority={i === 0}
                        className="slideshow-logo"
                      />
                    </span>
                    <span className="slideshow-meta" aria-hidden="true">
                      <span className="slideshow-tag">{ref.tag}</span>
                      <span className="slideshow-domain">
                        {ref.domain}
                        {ref.href && <span className="slideshow-ext">↗</span>}
                      </span>
                    </span>
                  </span>
                );
              })}
            </div>
          </a>
        </div>
      </div>

      <AuditWidget compact />
    </section>
  );
}
