import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { getAllSlugs, getArticleBySlug } from '@/lib/journal';
import { renderMarkdown } from '@/lib/journal/markdown';
import { SITE } from '@/lib/data';

// ISR: re-render hourly. New articles whose publishedAt-Datum gerade
// passiert ist, werden bei nächstem Request automatisch SSR'd
// (dynamicParams ist default true) und danach gecached.
export const revalidate = 3600;

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: 'Nicht gefunden' };

  const url = `${SITE.url}/journal/${slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [SITE.legal.owner],
      tags: article.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('de-AT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const url = `${SITE.url}/journal/${slug}`;

  return (
    <>
      <ArticleSchema article={article} url={url} />
      <main className="journal-article">
        <header className="article-head">
          <div className="article-breadcrumb">
            <Link href="/journal">Journal</Link>
            <span aria-hidden="true">/</span>
            <span className="article-breadcrumb-cat">{article.category}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-lede">{article.description}</p>
          <div className="article-meta">
            <span>{SITE.legal.owner}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            {article.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span className="article-updated">
                  Aktualisiert {formatDate(article.updatedAt)}
                </span>
              </>
            )}
          </div>
        </header>

        <article className="article-body">{renderMarkdown(article.content)}</article>

        <aside className="article-cta">
          <h3 className="article-cta-title">Audit für Ihre Site?</h3>
          <p>
            Wir prüfen Ihre Website auf AEO-Readiness — kostenlos, unter einer Stunde.
            Ergebnis als PDF mit konkreten Handlungsempfehlungen.
          </p>
          <div className="article-cta-row">
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
        </aside>
      </main>
      <Footer />
    </>
  );
}
