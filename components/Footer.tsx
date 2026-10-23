import Link from 'next/link';
import { SITE } from '@/lib/data';
import { CookieSettingsLink } from './CookieSettingsLink';
import { Wordmark } from './Wordmark';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-mark" aria-label={`${SITE.name} — Startseite`}>
            <Wordmark />
          </Link>
          <p className="footer-tag">{SITE.tagline}</p>
        </div>

        <nav className="footer-cols" aria-label="Footer">
          <div className="footer-col">
            <p className="footer-col-title">Studio</p>
            <Link href="/#produkte">Produkte</Link>
            <Link href="/#studio">Über uns</Link>
            <Link href="/#schwerpunkte">Schwerpunkte</Link>
            <Link href="/#referenzen">Referenzen</Link>
            <Link href="/apps">Apps</Link>
            <Link href="/journal">Journal</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Kontakt</p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener">
              Gespräch buchen ↗
            </a>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Rechtliches</p>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
            <CookieSettingsLink />
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>{SITE.location}</span>
      </div>
    </footer>
  );
}
