import type { CSSProperties } from 'react';
import { SITE } from '@/lib/data';

const FLOW_STEPS = [
  { tag: 'Trigger', label: 'Neue E-Mail · CRM-Update · Webhook · Cron' },
  { tag: 'Logik', label: 'LLM-Analyse · Klassifikation · Datenanreicherung' },
  { tag: 'Aktion', label: 'CRM-Eintrag · Slack-Nachricht · Dokument · Report' },
] as const;

export function AutomationHero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-text">
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
          <div className="flow-card" role="presentation">
            <div className="flow-card-head">
              <span className="flow-dot" aria-hidden="true"></span>
              <span>Beispiel-Workflow</span>
            </div>
            <ol className="flow-list">
              {FLOW_STEPS.map((step, i) => (
                <li key={step.tag} className="flow-step" style={{ '--i': i } as CSSProperties}>
                  <span className="flow-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flow-step-body">
                    <span className="flow-step-tag">{step.tag}</span>
                    <span className="flow-step-label">{step.label}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flow-card-foot">
              <span>End-to-End in 1–8 Wochen · EU-Hosting · DSGVO-konform</span>
            </div>
          </div>

          <div className="hero-stage-label">
            <span className="dot" aria-hidden="true"></span>
            <span>Automation · Custom Dev · AI-Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
