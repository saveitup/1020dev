'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { REFS } from '@/lib/data';

export function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const refs = Array.from(strip.querySelectorAll<HTMLElement>('.refs > .ref'));
    const dots = Array.from(strip.querySelectorAll<HTMLElement>('.refs-dots .dot'));
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;

    const goToSlide = (index: number) => {
      if (resumeTimer) clearTimeout(resumeTimer);
      strip.classList.add('manual');
      refs.forEach((r, i) => r.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    };

    const startResumeTimer = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        refs.forEach((r) => r.classList.remove('active'));
        dots.forEach((d) => d.classList.remove('active'));
        setTimeout(() => strip.classList.remove('manual'), 500);
      }, 3000);
    };

    const dotClickHandlers: Array<(e: Event) => void> = [];
    const dotKeyHandlers: Array<(e: KeyboardEvent) => void> = [];

    dots.forEach((dot, i) => {
      const click = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        goToSlide(i);
      };
      const key = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToSlide(i);
        }
      };
      dot.addEventListener('click', click);
      dot.addEventListener('keydown', key);
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', `Show reference ${i + 1}`);
      dot.setAttribute('tabindex', '0');
      dotClickHandlers.push(click);
      dotKeyHandlers.push(key);
    });

    const enter = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const leave = () => {
      if (strip.classList.contains('manual')) startResumeTimer();
    };

    strip.addEventListener('mouseenter', enter);
    strip.addEventListener('mouseleave', leave);

    return () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      dots.forEach((dot, i) => {
        dot.removeEventListener('click', dotClickHandlers[i]);
        dot.removeEventListener('keydown', dotKeyHandlers[i]);
      });
      strip.removeEventListener('mouseenter', enter);
      strip.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <main className="hero">
      <div className="hero-left">
        <div className="pill">
          <span className="dot"></span>
          Verfügbar für neue Projekte · Q4 2026
        </div>

        <h1>
          Sichtbar bleiben, wenn niemand mehr <em>klickt.</em>
        </h1>

        <p className="lede">
          Webentwicklung, SEO und Answer-Engine-Optimierung für KMU in Wien und ganz
          Österreich. Wir bauen Websites, die in Google <strong>ranken</strong>, in
          Perplexity <strong>zitiert</strong> und in ChatGPT <strong>empfohlen</strong>{' '}
          werden — plus die Automatisierung dahinter, die Ihnen Zeit zurückgibt.
        </p>

        <div className="ctas">
          <a href="#audit" className="cta-primary">
            Kostenlose AEO-Analyse <span className="arrow">→</span>
          </a>
          <a href="#" className="cta-secondary">
            Was ist AEO?
          </a>
        </div>

        <div className="strip">
          <div className="strip-label">Gebaut für</div>
          <div className="engines">
            {['ChatGPT', 'Perplexity', 'Claude', 'Google AI'].map((engine) => (
              <span key={engine} className="engine">
                <span className="check">✓</span> {engine}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="strip strip-refs" ref={stripRef}>
          <div className="strip-label">Aktuelle Arbeiten</div>
          <div className="refs">
            {REFS.map((ref, idx) => (
              <a
                key={ref.id}
                href={ref.href}
                target="_blank"
                rel="noopener"
                className="ref"
              >
                <div className="ref-thumb">
                  {ref.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 820px) 100vw, 600px"
                      priority={idx === 0 && i === 0}
                      style={{ objectFit: 'cover' }}
                    />
                  ))}
                </div>
                <div className="ref-meta">
                  <span className="ref-domain">
                    {ref.domain} <span className="ext">↗</span>
                  </span>
                  <span className="ref-tag">{ref.tag}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="refs-footer">
            <div className="refs-dots" aria-hidden="true">
              {REFS.map((_, i) => (
                <span key={i} className="dot"></span>
              ))}
            </div>
            <a href="#" className="more-link">
              Mehr Arbeiten <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
