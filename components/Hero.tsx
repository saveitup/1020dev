import { HERO, SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';

export function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-sky" aria-hidden="true">
        <span className="hero-glow" />
        <span className="hero-horizon" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">{HERO.eyebrow}</p>
        <h1 id="hero-title" className="hero-title">
          {/* Geschützte Bindestriche, damit "KI-"/"iOS-" nicht allein am Zeilenende stehen */}
          {HERO.title.replace('KI-', 'KI\u2011')}
        </h1>
        <p className="hero-lede">{HERO.lede.replace('iOS-', 'iOS\u2011')}</p>
        <div className="hero-actions">
          <a href={`mailto:${SITE.email}`} className="btn btn--light">
            Kontakt aufnehmen
            <span className="btn-icon">
              <ArrowIcon />
            </span>
          </a>
          <a href="#referenzen" className="hook-link hook-link--light">
            Referenzen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
