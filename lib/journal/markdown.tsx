/**
 * Tiny server-side Markdown → React renderer for journal articles.
 *
 * Why custom: keeps the dependency footprint at zero (in line with the
 * brand promise of "schlank") and gives us full control over which HTML
 * elements get which CSS classes. Articles use a constrained markdown
 * subset — no need for full CommonMark.
 *
 * Supports:
 *   - YAML-ish frontmatter at top (between --- markers)
 *   - Headings: ## h2, ### h3
 *   - Paragraphs (blank-line-separated)
 *   - Bullet lists: -, *
 *   - Numbered lists: 1.
 *   - Blockquotes: >
 *   - Code fences: ```lang ... ```
 *   - Inline code: `...`
 *   - Tables: | col | col |
 *   - Horizontal rule: ---
 *   - Bold: **...**
 *   - Italic: *...*
 *   - Links: [text](url)
 *
 * Server Component only — never ships parser to the client.
 */

import 'server-only';
import type { ReactNode } from 'react';

// ---------- Frontmatter ----------

export type Frontmatter = Record<string, string | string[] | boolean>;

export function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: raw };

  const [, fm, body] = m;
  const data: Frontmatter = {};
  const lines = fm.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const kv = line.match(/^([a-zA-Z_][\w-]*)\s*:\s*(.*)$/);
    if (!kv) continue;
    const [, key, valueRaw] = kv;
    const value = valueRaw.trim();

    if (value === '') {
      // Multi-line list — collect indented `- item` lines
      const items: string[] = [];
      while (i + 1 < lines.length && /^\s+-\s+/.test(lines[i + 1])) {
        const itemMatch = lines[i + 1].match(/^\s+-\s+(.*)$/);
        if (itemMatch) items.push(stripQuotes(itemMatch[1].trim()));
        i++;
      }
      if (items.length) data[key] = items;
    } else if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else {
      data[key] = stripQuotes(value);
    }
  }

  return { data, content: body };
}

function stripQuotes(s: string): string {
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

// ---------- Markdown → React ----------

// Inline parser: bold, italic, code, link
function renderInline(text: string, keyPrefix = ''): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let counter = 0;

  // Pattern order matters: code first (escapes everything), then links, then bold, then italic
  const patterns: Array<[RegExp, (m: RegExpExecArray) => ReactNode]> = [
    [/`([^`]+)`/, (m) => <code className="article-code">{m[1]}</code>],
    [/\[([^\]]+)\]\(([^)]+)\)/, (m) => {
      const isExternal = /^https?:\/\//.test(m[2]);
      return (
        <a
          className="article-link"
          href={m[2]}
          {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {m[1]}
        </a>
      );
    }],
    [/\*\*([^*]+)\*\*/, (m) => <strong>{m[1]}</strong>],
    [/\*([^*]+)\*/, (m) => <em>{m[1]}</em>],
  ];

  while (remaining.length > 0) {
    let earliest: { match: RegExpExecArray; render: (m: RegExpExecArray) => ReactNode } | null = null;

    for (const [pattern, render] of patterns) {
      const m = pattern.exec(remaining);
      if (m && (!earliest || m.index < earliest.match.index)) {
        earliest = { match: m, render };
      }
    }

    if (!earliest) {
      nodes.push(remaining);
      break;
    }

    if (earliest.match.index > 0) {
      nodes.push(remaining.slice(0, earliest.match.index));
    }
    nodes.push(<span key={`${keyPrefix}-i-${counter++}`}>{earliest.render(earliest.match)}</span>);
    remaining = remaining.slice(earliest.match.index + earliest.match[0].length);
  }

  return nodes;
}

type Block =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'quote'; lines: string[] }
  | { type: 'code'; lang: string; text: string }
  | { type: 'hr' }
  | { type: 'table'; header: string[]; rows: string[][] };

function parseBlocks(content: string): Block[] {
  const lines = content.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code fence
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push({ type: 'code', lang, text: codeLines.join('\n') });
      continue;
    }

    // Heading
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      blocks.push({
        type: 'heading',
        level: h[1].length as 2 | 3,
        text: h[2],
      });
      i++;
      continue;
    }

    // HR
    if (/^---+\s*$/.test(line)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: 'quote', lines: quoteLines });
      continue;
    }

    // Bullet list
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', ordered: false, items });
      continue;
    }

    // Numbered list
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    // Table
    if (line.startsWith('|') && i + 1 < lines.length && /^\|[\s|:-]+\|$/.test(lines[i + 1])) {
      const splitRow = (l: string): string[] =>
        l.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
      const header = splitRow(line);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push({ type: 'table', header, rows });
      continue;
    }

    // Empty line — skip
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph: collect until blank line / structural element
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('```') &&
      !lines[i].startsWith('> ') &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^---+\s*$/.test(lines[i]) &&
      !lines[i].startsWith('|')
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: 'paragraph', text: paraLines.join(' ') });
  }

  return blocks;
}

export function renderMarkdown(content: string): ReactNode {
  const blocks = parseBlocks(content);

  return (
    <>
      {blocks.map((block, idx) => {
        const key = `b-${idx}`;
        switch (block.type) {
          case 'heading': {
            const Tag = block.level === 2 ? 'h2' : 'h3';
            const className = block.level === 2 ? 'article-h2' : 'article-h3';
            const id = block.text
              .toLowerCase()
              .replace(/[^\w\s-]/g, '')
              .trim()
              .replace(/\s+/g, '-');
            return (
              <Tag key={key} id={id} className={className}>
                {renderInline(block.text, key)}
              </Tag>
            );
          }
          case 'paragraph':
            return (
              <p key={key} className="article-p">
                {renderInline(block.text, key)}
              </p>
            );
          case 'list': {
            const Tag = block.ordered ? 'ol' : 'ul';
            const className = block.ordered ? 'article-ol' : 'article-ul';
            return (
              <Tag key={key} className={className}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`} className="article-li">
                    {renderInline(item, `${key}-${j}`)}
                  </li>
                ))}
              </Tag>
            );
          }
          case 'quote':
            return (
              <blockquote key={key} className="article-quote">
                {block.lines.map((l, j) => (
                  <p key={`${key}-${j}`} className="article-p">
                    {renderInline(l, `${key}-${j}`)}
                  </p>
                ))}
              </blockquote>
            );
          case 'code':
            return (
              <pre key={key} className="article-pre">
                <code className="article-code" data-lang={block.lang || undefined}>
                  {block.text}
                </code>
              </pre>
            );
          case 'hr':
            return <hr key={key} className="article-hr" />;
          case 'table':
            return (
              <div key={key} className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      {block.header.map((c, j) => (
                        <th key={j}>{renderInline(c, `${key}-h-${j}`)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((c, k) => (
                          <td key={k}>{renderInline(c, `${key}-${j}-${k}`)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </>
  );
}
