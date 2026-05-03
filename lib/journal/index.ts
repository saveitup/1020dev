/**
 * Journal — File-based Markdown articles in `content/journal/`.
 *
 * Convention:
 * - One `.md` file per article. Filename (minus extension) is the slug.
 * - Frontmatter required: title, description, publishedAt, category.
 * - Optional: updatedAt, ogImage, keywords, draft (omit from prod listing).
 *
 * Server-only — uses `node:fs`. Don't import from Client Components.
 *
 * Markdown parsing lives in `./markdown.tsx` — zero external deps.
 */

import 'server-only';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from './markdown';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'journal');

export type JournalCategory = 'AEO' | 'SEO' | 'Webentwicklung' | 'Automation' | 'Case-Study';

export type JournalFrontmatter = {
  title: string;
  description: string;
  publishedAt: string; // ISO date YYYY-MM-DD
  updatedAt?: string;
  category: JournalCategory;
  keywords?: string[];
  ogImage?: string;
  draft?: boolean;
};

export type JournalArticle = JournalFrontmatter & {
  slug: string;
  content: string; // raw markdown body
};

export type JournalListItem = JournalFrontmatter & {
  slug: string;
  readingMinutes: number;
};

const WORDS_PER_MINUTE = 220; // average German reading speed for B2B-tech text

function calculateReadingMinutes(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

async function readMarkdownFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(CONTENT_DIR);
    return entries.filter((e) => e.endsWith('.md') && !e.startsWith('_'));
  } catch {
    return [];
  }
}

function fmToArticle(data: Record<string, string | string[] | boolean>): JournalFrontmatter {
  return {
    title: String(data.title || ''),
    description: String(data.description || ''),
    publishedAt: String(data.publishedAt || ''),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    category: (data.category as JournalCategory) || 'AEO',
    keywords: Array.isArray(data.keywords) ? data.keywords : undefined,
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    draft: data.draft === true,
  };
}

export async function getAllArticles(): Promise<JournalListItem[]> {
  const files = await readMarkdownFiles();
  const articles = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = await fs.readFile(path.join(CONTENT_DIR, file), 'utf-8');
      const { data, content } = parseFrontmatter(raw);
      const fm = fmToArticle(data);
      return {
        ...fm,
        slug,
        readingMinutes: calculateReadingMinutes(content),
      };
    }),
  );

  return articles
    .filter((a) => !a.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<JournalArticle | null> {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(file, 'utf-8');
    const { data, content } = parseFrontmatter(raw);
    const fm = fmToArticle(data);
    return { ...fm, slug, content };
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const articles = await getAllArticles();
  return articles.map((a) => a.slug);
}
