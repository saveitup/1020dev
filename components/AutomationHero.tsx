import type { CSSProperties } from 'react';
import { AUTOMATION_INTEGRATIONS, AUTOMATION_TERMINAL, SITE } from '@/lib/data';

export function AutomationHero() {
  const t = AUTOMATION_TERMINAL;

  return (
    <section className="hero hero--automation" id="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="dot" aria-hidden="true"></span>
            <span>Automation · Custom Dev · AI-Integration</span>
          </div>

          <h1 className="hero-title">
            Software, die <em>für Sie</em> arbeitet
          </h1>

          <p className="hero-lede">
            Automatisierungen, interne Tools und KI-Integrationen für KMU in Wien
            und ganz Österreich. Wir bauen Workflows, die <strong>Stunden sparen</strong>{' '}
            und <strong>Claude, GPT &amp; eigene Modelle</strong> dort einsetzen, wo es
            tatsächlich Sinn ergibt — ohne Buzzwords, ohne Vendor-Lock-in.
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
          <div className="terminal" role="presentation" aria-label="Beispiel-Workflow">
            <div className="terminal-bar">
              <span className="terminal-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="terminal-title">{t.title}</span>
              <span className="terminal-status">
                <span className="terminal-status-dot" aria-hidden="true"></span>
                live
              </span>
            </div>

            <div className="terminal-body">
              <div
                className="terminal-line terminal-prompt"
                style={{ '--i': 0 } as CSSProperties}
              >
                <span className="terminal-cmd">{t.command}</span>
              </div>

              {t.lines.map((line, i) => (
                <div
                  key={line.tag}
                  className="terminal-line"
                  style={{ '--i': i + 1 } as CSSProperties}
                >
                  <span className="terminal-check" aria-hidden="true">✓</span>
                  <span className="terminal-tag">{line.tag.padEnd(8, ' ')}</span>
                  <span className="terminal-value">{line.value}</span>
                </div>
              ))}

              <div
                className="terminal-line terminal-status-line"
                style={{ '--i': t.lines.length + 1 } as CSSProperties}
              >
                <span className="terminal-arrow" aria-hidden="true">▸</span>
                <span>{t.status}</span>
                <span className="terminal-cursor" aria-hidden="true"></span>
              </div>
            </div>
          </div>

          <div className="integrations">
            <span className="integrations-label">Integriert mit</span>
            <ul className="integrations-list">
              {AUTOMATION_INTEGRATIONS.map((name) => (
                <li key={name} className="integration-chip">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
