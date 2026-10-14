'use client';

import { useEffect, useState } from 'react';
import { FOCUS, FOCUS_HEAD } from '@/lib/data';
import { PlusIcon } from './Icons';

/**
 * Schwerpunkte als Pill-Akkordeon (angelehnt an Legoras aOS-Section).
 * Wechselt automatisch durch, bis jemand selbst klickt. Der Takt kommt aus
 * der CSS-Animation der Fortschrittsleiste (onAnimationEnd), damit Pausieren
 * per Hover/Fokus ohne Timer-Logik funktioniert.
 */
export function Focus() {
  const [active, setActive] = useState(0);
  // Auto-advance starts only after mount, and never with reduced motion.
  const [auto, setAuto] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(true);
  }, []);

  const select = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  return (
    <section className="section focus" id="schwerpunkte" aria-labelledby="focus-title">
      <header className="section-head section-head--center">
        <h2 id="focus-title" className="section-title">
          {FOCUS_HEAD.title}
        </h2>
        <p className="section-sub">{FOCUS_HEAD.sub}</p>
      </header>

      <div
        className="focus-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="focus-list">
          {FOCUS.map((f, i) => {
            const isActive = active === i;
            return (
              <div key={f.id} className={`focus-item${isActive ? ' is-active' : ''}`}>
                <button
                  type="button"
                  className="focus-pill"
                  id={`focus-tab-${f.id}`}
                  aria-expanded={isActive}
                  aria-controls={`focus-panel-${f.id}`}
                  onClick={() => select(i)}
                >
                  <span>{f.label}</span>
                  <span className="focus-pill-icon">
                    <PlusIcon />
                  </span>
                </button>
                <div
                  className="focus-panel"
                  id={`focus-panel-${f.id}`}
                  role="region"
                  aria-labelledby={`focus-tab-${f.id}`}
                  hidden={!isActive}
                >
                  <div className="focus-panel-inner">
                    <p className="focus-panel-text">{f.text}</p>
                    <ul className="focus-points">
                      {f.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="focus-visual" aria-hidden="true">
          <LegalVisual active={active === 0} />
          <IosVisual active={active === 1} />
          <ConceptVisual active={active === 2} />
        </div>

        {auto && (
          <div className="focus-progress" aria-hidden="true">
            <span
              key={active}
              className={`focus-progress-bar${paused ? ' is-paused' : ''}`}
              onAnimationEnd={() => setActive((a) => (a + 1) % FOCUS.length)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function LegalVisual({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 440 400" className={`focus-svg${active ? ' is-active' : ''}`}>
      <rect className="v-paper v-stroke" x="100" y="36" width="230" height="316" rx="14" />
      <text className="v-glyph" x="124" y="90">§</text>
      <rect className="v-ink" x="160" y="68" width="124" height="9" rx="4.5" />
      <rect className="v-mute" x="160" y="84" width="82" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="118" width="182" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="132" width="168" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="146" width="122" height="7" rx="3.5" />
      <rect className="v-green-tint" x="114" y="168" width="202" height="60" rx="8" />
      <rect className="v-green" x="124" y="180" width="176" height="7" rx="3.5" />
      <rect className="v-green" x="124" y="194" width="160" height="7" rx="3.5" />
      <rect className="v-green" x="124" y="208" width="104" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="250" width="182" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="264" width="150" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="278" width="170" height="7" rx="3.5" />
      <rect className="v-soft" x="124" y="292" width="96" height="7" rx="3.5" />
      <g className="v-float">
        <rect className="v-ink" x="248" y="214" width="168" height="66" rx="14" />
        <circle className="v-green-bright" cx="276" cy="247" r="13" />
        <path className="v-check" d="M270 247.5l4 4 8-8.5" />
        <rect className="v-on-ink" x="298" y="237" width="94" height="8" rx="4" />
        <rect className="v-on-ink-mute" x="298" y="252" width="62" height="7" rx="3.5" />
      </g>
    </svg>
  );
}

function IosVisual({ active }: { active: boolean }) {
  const rows = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 440 400" className={`focus-svg${active ? ' is-active' : ''}`}>
      <rect className="v-ink" x="132" y="16" width="176" height="364" rx="36" />
      <rect className="v-paper" x="140" y="24" width="160" height="348" rx="29" />
      <rect className="v-ink" x="191" y="34" width="58" height="17" rx="8.5" />
      <rect className="v-ink" x="156" y="76" width="92" height="13" rx="4" />
      <rect className="v-soft" x="156" y="100" width="128" height="22" rx="8" />
      {rows.map((r) => {
        const y = 136 + r * 44;
        return (
          <g key={r}>
            <circle className={r === 1 ? 'v-green' : 'v-soft'} cx="170" cy={y + 15} r="11" />
            <rect className="v-ink-mute" x="189" y={y + 7} width="76" height="7" rx="3.5" />
            <rect className="v-soft" x="189" y={y + 19} width="52" height="6" rx="3" />
            <rect className="v-hair" x="156" y={y + 36} width="128" height="1" />
          </g>
        );
      })}
      <circle className="v-green" cx="178" cy="346" r="4" />
      <circle className="v-soft-strong" cx="206" cy="346" r="4" />
      <circle className="v-soft-strong" cx="234" cy="346" r="4" />
      <circle className="v-soft-strong" cx="262" cy="346" r="4" />
      <g className="v-float">
        <rect className="v-green" x="262" y="236" width="124" height="100" rx="22" />
        <circle className="v-on-ink" cx="286" cy="260" r="9" />
        <rect className="v-on-ink" x="278" y="290" width="76" height="9" rx="4.5" />
        <rect className="v-on-ink-mute" x="278" y="306" width="50" height="7" rx="3.5" />
      </g>
    </svg>
  );
}

function ConceptVisual({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 440 400" className={`focus-svg${active ? ' is-active' : ''}`}>
      <rect className="v-dash" x="22" y="140" width="110" height="110" rx="14" />
      <path
        className="v-scribble"
        d="M42 214c10-22 20-34 30-14s18 8 26-6 14-10 18 2M44 176h44M44 188h28"
      />
      <path className="v-arrow" d="M140 195h22m-6-6 6 6-6 6" />
      <rect className="v-paper v-stroke" x="166" y="140" width="110" height="110" rx="14" />
      <rect className="v-soft-strong" x="180" y="154" width="82" height="34" rx="6" />
      <rect className="v-soft" x="180" y="196" width="56" height="7" rx="3.5" />
      <rect className="v-soft" x="180" y="209" width="70" height="7" rx="3.5" />
      <rect className="v-ink-mute" x="180" y="226" width="34" height="12" rx="6" />
      <path className="v-arrow" d="M284 195h22m-6-6 6 6-6 6" />
      <g className="v-float">
        <rect className="v-green" x="310" y="140" width="110" height="110" rx="14" />
        <rect className="v-on-ink-mute" x="324" y="154" width="82" height="34" rx="6" />
        <rect className="v-on-ink" x="324" y="196" width="56" height="7" rx="3.5" />
        <rect className="v-on-ink-mute" x="324" y="209" width="70" height="7" rx="3.5" />
        <rect className="v-on-ink" x="324" y="226" width="34" height="12" rx="6" />
      </g>
      <text className="v-label" x="77" y="282" textAnchor="middle">Skizze</text>
      <text className="v-label" x="221" y="282" textAnchor="middle">Prototyp</text>
      <text className="v-label" x="365" y="282" textAnchor="middle">Produkt</text>
    </svg>
  );
}
