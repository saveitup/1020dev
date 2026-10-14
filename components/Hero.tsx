import { Fragment, type CSSProperties } from 'react';
import { HERO, SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';

// Geschützte Bindestriche, damit "KI-"/"iOS-" nicht allein am Zeilenende stehen
const nbHyphen = (text: string) => text.replace(/(KI|iOS)-/g, '$1‑');

export function Hero() {
  const words = HERO.title.split(' ');

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        {/* Jedes Wort steigt einzeln aus einer Maske auf; das Akzentwort
            schimmert grün, am Ende blinkt ein Cursor. */}
        <h1 id="hero-title" className="hero-title">
          {words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <span className="hw">
                <span
                  className={`hw-in${word === HERO.accent ? ' hw-accent' : ''}`}
                  style={{ '--i': i } as CSSProperties}
                >
                  {nbHyphen(word)}
                </span>
              </span>
              {i < words.length - 1 && ' '}
            </Fragment>
          ))}
          <span className="hero-caret" aria-hidden="true" />
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
