import Link from 'next/link';
import { SITE } from '@/lib/data';
import { CookieSettingsLink } from './CookieSettingsLink';

const TRACKS = [
  { href: '/web', label: 'Web' },
  { href: '/automation', label: 'Software' },
  { href: '/apps', label: 'Apps' },
  { href: '/journal', label: 'Journal' },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-mark" aria-label={SITE.name}>
          <span className="num">1020</span>
          <span className="dot">.</span>
          <span className="tld">dev</span>
        </div>
        <div className="footer-tag">
          {SITE.tagline}
          <br />
          Studio · Wien · gebaut für KMU in ganz Österreich.
        </div>
        <nav className="footer-nav" aria-label="Tracks">
          {TRACKS.map((t) => (
            <Link key={t.href} href={t.href}>
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer-right">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <a href={SITE.bookingUrl} target="_blank" rel="noopener">
          cal.eu/1020dev ↗
        </a>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/agb">AGB</Link>
        <CookieSettingsLink />
        <div className="footer-meta">© 2026 · {SITE.location}</div>
      </div>
    </footer>
  );
}
