import Link from 'next/link';
import { SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';
import { Wordmark } from './Wordmark';

const LINKS = [
  { href: '/#studio', label: 'Studio' },
  { href: '/#schwerpunkte', label: 'Schwerpunkte' },
  { href: '/#referenzen', label: 'Referenzen' },
  { href: '/apps', label: 'Apps' },
] as const;

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="wordmark" aria-label={`${SITE.name} — Startseite`}>
          <Wordmark />
        </Link>
        <div className="nav-end">
          <a href={`mailto:${SITE.email}`} className="nav-mail">
            Kontakt
          </a>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener" className="btn btn--sm">
            Gespräch buchen
            <span className="btn-icon">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
