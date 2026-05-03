import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { getAllArticles } from '@/lib/journal';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Journal · AEO, SEO und Webentwicklung für KMU',
  description:
    'Artikel und Anleitungen zu Answer-Engine-Optimization, klassischem SEO, Next.js-Webentwicklung und Workflow-Automation — geschrieben für KMU in Wien und Österreich.',
  alternates: { canonical: `${SITE.url}/journal` },
  openGraph: {
    title: 'Journal · 1020.dev',
    description:
      'Artikel zu AEO, SEO, Webentwicklung und Automation für KMU im DACH-Raum.',
    url: `${SITE.url}/journal`,
    type: 'website',
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('de-AT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function JournalIndexPage() {
  const articles = await getAllArticles();

  return (
    <>
      <main className="journal">
        <header className="journal-head">
          <div className="chapter-marker">
            <span className="num">§</span>
            <span className="slash">/</span>
            <span>Journal</span>
          </div>
          <h1 className="chapter-title">
            Notizen aus dem <em>Studio.</em>
          </h1>
          <p className="chapter-lede">
            Artikel zu Answer-Engine-Optimization, klassischem SEO, Next.js-Entwicklung und
            Workflow-Automation. Geschrieben für KMU im DACH-Raum, ohne Buzzwords, mit
            konkreten Beispielen.
          </p>
        </header>

        {articles.length === 0 ? (
          <p className="journal-empty">Noch keine Artikel veröffentlicht.</p>
        ) : (
          <ul className="journal-list" role="list">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/journal/${a.slug}`} className="journal-row">
                  <div className="journal-meta">
                    <span className="journal-cat">{a.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{a.readingMinutes} min</span>
                  </div>
                  <h2 className="journal-title">{a.title}</h2>
                  <p className="journal-desc">{a.description}</p>
                  <span className="journal-cta" aria-hidden="true">
                    Lesen <span className="arrow">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
