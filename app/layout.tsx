import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, Fragment_Mono, Inter, JetBrains_Mono } from 'next/font/google';
import { Splash } from '@/components/Splash';
import { Nav } from '@/components/Nav';
import { GoogleTag } from '@/components/GoogleTag';
import { CookieBanner } from '@/components/CookieBanner';
import { Announcement } from '@/components/Announcement';
import { OrganizationSchema } from '@/components/OrganizationSchema';
import { WebsiteSchema } from '@/components/WebsiteSchema';
import { SITE } from '@/lib/data';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

// Instrument Sans (variabel, inkl. Breitenachse) als freie Annäherung an
// Legoras Hausschrift; Fragment Mono für Code und kleine Labels.
const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  axes: ['wdth'],
});

const mono = Fragment_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: '400',
});

// Hausschriften von Spin und Clausl — nur für die Produktkarten unter dem Hero.
// Ohne Preload, damit sie den Hero nicht ausbremsen.
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
});

const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  display: 'swap',
  weight: '600',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const viewport: Viewport = {
  themeColor: '#003D26',
  width: 'device-width',
  initialScale: 1,
};

// Inline script that runs in <head> BEFORE paint — avoids splash flash for
// returning visitors. Only relevant on the home route; on sub-routes the
// Splash component renders null anyway.
const splashSkipScript = `
try {
  if (location.pathname !== '/' || sessionStorage.getItem('1020-splash-seen')) {
    document.documentElement.classList.add('splash-skip');
  }
} catch(e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT" className={`${sans.variable} ${mono.variable} ${inter.variable} ${jbmono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashSkipScript }} />
      </head>
      <body>
        <GoogleTag />
        <OrganizationSchema />
        <WebsiteSchema />
        <Splash />
        <Announcement />
        <Nav />
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
