'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/data';

type NavLink = { href: string; label: string };

const WEB_LINKS: NavLink[] = [
  { href: '#audit', label: 'Audit' },
  { href: '#methode', label: 'Methode' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
];

const AUTOMATION_LINKS: NavLink[] = [
  { href: '#methode', label: 'Methode' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
];

const TRACK_LINKS: NavLink[] = [
  { href: '/web', label: 'Web' },
  { href: '/automation', label: 'Automation' },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isChooser = pathname === '/';
  const isWeb = pathname === '/web';
  const isAutomation = pathname === '/automation';

  // On the chooser landing: minimal nav (no inner anchors). On track pages:
  // anchor links to that page's sections plus a quick switch to the other track.
  let links: NavLink[] = [];
  if (isWeb) links = WEB_LINKS;
  else if (isAutomation) links = AUTOMATION_LINKS;
  else if (!isChooser) links = TRACK_LINKS;

  return (
    <nav className={scrolled ? 'is-scrolled' : ''}>
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label={SITE.name}>
          <span className="num">1020</span>
          <span className="dot">.</span>
          <span className="tld">dev</span>
        </Link>
        {links.length > 0 && (
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        )}
        <Link
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener"
          className="nav-cta"
        >
          Termin buchen <span className="arrow">→</span>
        </Link>
      </div>
    </nav>
  );
}
