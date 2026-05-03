'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { REFS, SITE } from '@/lib/data';
import { AuditWidget } from '@/components/AuditWidget';

const ENTER_STAGGER = 110;
const AUTO_INTERVAL = 3800;
const RESUME_DELAY = 2500;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    REFS.forEach((_, i) => {
      timers.push(setTimeout(() => setRevealed((prev) => [...prev, i]), ENTER_STAGGER * i));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REFS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

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
            Wir bauen, was Ihre Idee <em>verlangt.</em>
          </h1>

          <p className="hero-lede">
            Webentwicklung, SEO und Answer-Engine-Optimierung für KMU in Wien und ganz
            Österreich. Manchmal ist das eine Website, die in <strong>Google rankt</strong>.
            Manchmal ein Backend, das Ihnen die Arbeit abnimmt. Was im Vordergrund steht —{' '}
            <strong>Design oder Funktion</strong> — entscheiden Sie. Wir bauen es.
          </p>

          <div className="hero-ctas">
            <a href={`mailto:${SITE.email}`} className="cta-primary">
              E-Mail schreiben <span className="arrow">→</span>
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

        <div className="hero-stage">
          <div
            className="hero-selector"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            role="tablist"
            aria-label="Aktuelle Arbeiten"
          >
            {REFS.map((ref, i) => {
              const cover = ref.images[0];
              const isActive = activeIndex === i;
              const isRevealed = revealed.includes(i);
              const num = (i + 1).toString().padStart(2, '0');

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
                  style={
                    cover
                      ? ({ '--panel-bg': `url('${cover.src}')` } as CSSProperties)
                      : undefined
                  }
                  onClick={() => handleSelect(i)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${ref.domain} — ${ref.tag}`}
                >
                  <span className="selector-shadow" aria-hidden="true" />
                  <span className="selector-label">
                    <span className="selector-num">{num}</span>
                    <span className="selector-info">
                      <span className="selector-tag">{ref.tag}</span>
                      <span className="selector-domain">
                        {ref.domain}
                        {ref.href && <span className="selector-ext" aria-hidden="true">↗</span>}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hero-stage-label">
            <span className="dot" aria-hidden="true"></span>
            <span>
              Aktuelle Arbeiten · {REFS.length} Projekte · {activeIndex + 1}/{REFS.length}
            </span>
          </div>
        </div>
      </div>

      <AuditWidget compact />
    </section>
  );
}
