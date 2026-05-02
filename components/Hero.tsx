import { SITE } from '@/lib/data';

export function Hero() {
  return (
    <main className="hero">
      <div className="hero-meta">
        <span className="pulse" aria-hidden="true"></span>
        <span className="available">Verfügbar · Q4 2026</span>
        <span className="sep" aria-hidden="true"></span>
        <span>{SITE.location}</span>
        <span className="sep" aria-hidden="true"></span>
        <span>Studio · Web · AEO</span>
      </div>

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
    </main>
  );
}
