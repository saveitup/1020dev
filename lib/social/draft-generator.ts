import 'server-only';
import type { JournalArticle } from '@/lib/journal';
import { SITE } from '@/lib/data';

/**
 * Generates LinkedIn, X (Twitter), and Newsletter drafts from a published
 * journal article via the Anthropic API.
 *
 * Brand voice constraints baked into the system prompt:
 *   - Formelles "Sie", keine Du-Anrede
 *   - Keine Emojis, keine Buzzwords
 *   - Konkrete Zahlen statt Marketing-Phrasen
 *   - Persönliche Stimme (nicht generisch-bot)
 *
 * Returns three text blocks ready to copy-edit-post. Never auto-posts.
 */

export type SocialDrafts = {
  linkedin: string;
  twitter: string;
  newsletter: string;
};

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5';

// ----- Prompt construction -----

const SYSTEM_PROMPT = `Du bist Content-Editor für 1020.dev, ein Wiener Studio für
Webentwicklung, SEO und Answer-Engine-Optimization (AEO) für KMU.

BRAND VOICE — strikt einhalten:
- Formelles "Sie", niemals "Du" oder "ihr"
- Keine Emojis (auch keine ✓, ↗, → in Drafts — Ausnahme nur in CTA-Pfeilen)
- Keine Buzzwords ohne Substanz (nicht: "innovativ", "ganzheitlich", "synergetisch")
- Konkrete Zahlen statt vager Aussagen
- Persönliche Stimme aus dem Studio (nicht generisch-corporate)
- Tone: ehrlich, präzise, mit Pointe, kein Marketing-Sprech
- Auf Deutsch (Österreich)

OUTPUT-FORMAT — drei klar getrennte Drafts mit exakt diesen Markern:

===LINKEDIN===
[LinkedIn-Post]
===X===
[X/Twitter-Post oder Kurzthread]
===NEWSLETTER===
[Newsletter-Abschnitt]

LINKEDIN-Spezifikation:
- 700-1200 Zeichen
- Hook in Zeile 1 (Statistik, Provokation, Beobachtung — nicht "Wir freuen uns")
- 2-3 Absätze Spannungsaufbau + Substanz
- CTA mit Link am Ende
- 0-3 Hashtags am Schluss (oder keine — DACH-B2B oft besser ohne)
- Kein "Lies meinen neuen Artikel" — stattdessen Inhalt anteasern

X/TWITTER-Spezifikation:
- 240-280 Zeichen Single-Tweet ODER 3-5-Tweet-Thread
- Bei Thread: Tweets mit "1/", "2/" etc. nummerieren
- Hook in Tweet 1, Substanz in 2-3, CTA in letztem
- Härter, direkter als LinkedIn — X-Audience erwartet Pointe
- Kein Hashtag-Spam

NEWSLETTER-Spezifikation:
- 200-350 Wörter
- Persönliche Anrede ("Liebe Leserin, lieber Leser" oder eigener Stil)
- Kontext, der NICHT im Artikel steht — Anekdote, Studio-Beobachtung, Branchen-Einordnung
- Verlinkt zum Artikel im 2.-3. Absatz
- Schluss: Frage oder Reflexionsanstoß für Reply-Engagement
- Wirkt wie persönliche E-Mail aus dem Studio, nicht wie Auto-Newsletter`;

function buildUserPrompt(article: JournalArticle): string {
  const articleUrl = `${SITE.url}/journal/${article.slug}`;

  return `Generiere LinkedIn-, X-, und Newsletter-Drafts für diesen Artikel:

TITEL: ${article.title}
KATEGORIE: ${article.category}
URL: ${articleUrl}
DESCRIPTION: ${article.description}
KEYWORDS: ${article.keywords?.join(', ') || '—'}

ARTIKEL-INHALT:
${article.content.slice(0, 6000)}

WICHTIG:
- Drei deutlich unterschiedliche Drafts (nicht dreimal derselbe Text in verschiedenen Längen)
- LinkedIn-Hook und X-Hook sollen NICHT identisch sein — verschiedene Aufhänger nutzen
- Newsletter darf eigenen Kontext einbringen, der nicht 1:1 aus dem Artikel kommt
- Link immer als ${articleUrl}
- Keine Emojis, keine Marketing-Phrasen, formelles Sie`;
}

// ----- Anthropic call -----

type AnthropicMessage = {
  content?: Array<{ type: string; text?: string }>;
  error?: { message: string };
};

export async function generateDrafts(article: JournalArticle): Promise<SocialDrafts> {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY not set');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 2500,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildUserPrompt(article) }],
    }),
  });

  if (!response.ok) {
    const errBody = (await response.json().catch(() => ({}))) as AnthropicMessage;
    throw new Error(errBody?.error?.message || `Anthropic returned ${response.status}`);
  }

  const data = (await response.json()) as AnthropicMessage;
  const text = (data.content || [])
    .filter((c) => c.type === 'text' && c.text)
    .map((c) => c.text!)
    .join('\n')
    .trim();

  return parseSections(text);
}

// ----- Section parser -----

function parseSections(text: string): SocialDrafts {
  const sections: Record<string, string> = {};
  const re = /^===(LINKEDIN|X|NEWSLETTER)===\s*$/gm;
  const matches = [...text.matchAll(re)];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const name = m[1];
    const start = m.index! + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : text.length;
    sections[name] = text.slice(start, end).trim();
  }

  return {
    linkedin: sections.LINKEDIN || '[LinkedIn-Draft konnte nicht extrahiert werden — Roh-Output unten]',
    twitter: sections.X || '[X-Draft konnte nicht extrahiert werden — Roh-Output unten]',
    newsletter: sections.NEWSLETTER || '[Newsletter-Draft konnte nicht extrahiert werden — Roh-Output unten]',
  };
}
