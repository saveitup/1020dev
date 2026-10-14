'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/data';
import { ArrowIcon } from './Icons';
import { Wordmark } from './Wordmark';

const LINKS = [
  { href: '/#studio', label: 'Studio' },
  { href: '/#schwerpunkte', label: 'Schwerpunkte' },
  { href: '/#referenzen', label: 'Referenzen' },
] as const;

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  // On the home route the nav floats transparently over the dark hero and
  // turns solid as soon as the page scrolls.
  const [overHero, setOverHero] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      return;
    }
    const onScroll = () => setOverHero(window.scrollY < 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <nav className={`nav${overHero ? ' nav--over' : ''}`}>
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
