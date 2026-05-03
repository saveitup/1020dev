import Link from 'next/link';
import { SITE } from '@/lib/data';

const CHOICES = [
  {
    href: '/web',
    eyebrow: '01',
    title: 'Web',
    sub: 'Sites · SEO · AEO',
    desc: 'Webentwicklung mit Next.js, plus klassisches SEO und Answer-Engine-Optimierung. Sichtbar in Google und zitiert in ChatGPT, Perplexity und Claude.',
    items: ['Next.js · TypeScript', 'SEO & AEO', 'Schema.org · llms.txt', 'Lighthouse 100'],
  },
  {
    href: '/automation',
    eyebrow: '02',
    title: 'Software',
    sub: 'Automation · Dev · AI',
    desc: 'Workflows, interne Tools und LLM-Integrationen. Wiederkehrende Aufgaben automatisiert, Standard-Stacks integriert, KI dort wo sie tatsächlich liefert.',
    items: ['Workflow-Automation', 'Custom Dev · APIs', 'Claude · GPT · RAG', 'EU-Hosting · DSGVO'],
  },
] as const;

export function Chooser() {
  return (
    <main className="chooser">
      <header className="chooser-head">
        <div className="chooser-eyebrow">
          <span className="dot" aria-hidden="true"></span>
          <span>Studio 1020.dev · Wien · Leopoldstadt</span>
        </div>
        <h1 className="chooser-title">
          Was brauchen <em>Sie</em>?
        </h1>
        <p className="chooser-lede">
          Zwei Tracks, beide mit derselben Handschrift: schlank, ehrlich, performant.
          Wählen Sie den Einstieg — Sie können später jederzeit den anderen dazunehmen.
        </p>
      </header>

      <div className="chooser-grid">
        {CHOICES.map((c) => (
          <Link key={c.href} href={c.href} className="chooser-card">
            <div className="chooser-card-top">
              <span className="chooser-card-eyebrow">{c.eyebrow}</span>
              <span className="chooser-card-arrow" aria-hidden="true">→</span>
            </div>
            <div className="chooser-card-body">
              <h2 className="chooser-card-title">{c.title}</h2>
              <p className="chooser-card-sub">{c.sub}</p>
              <p className="chooser-card-desc">{c.desc}</p>
            </div>
            <ul className="chooser-card-list">
              {c.items.map((item) => (
                <li key={item}>
                  <span className="bullet" aria-hidden="true">›</span> {item}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <footer className="chooser-foot">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <span className="sep" aria-hidden="true">·</span>
        <a href={SITE.bookingUrl} target="_blank" rel="noopener">
          Termin vereinbaren
        </a>
        <span className="sep" aria-hidden="true">·</span>
        <Link href="/impressum">Impressum</Link>
      </footer>
    </main>
  );
}
