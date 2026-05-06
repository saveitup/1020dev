import type { Metadata, Viewport } from 'next';
import { DM_Sans, DM_Mono } from 'next/font/google';
import { Splash } from '@/components/Splash';
import { Nav } from '@/components/Nav';
import { GoogleTag } from '@/components/GoogleTag';
import { CookieBanner } from '@/components/CookieBanner';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { WebsiteSchema } from '@/components/WebsiteSchema';
import { SITE } from '@/lib/data';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['400', '500'],
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
  themeColor: '#030615',
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
    <html lang="de-AT" className={`${dmSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashSkipScript }} />
      </head>
      <body>
        <GoogleTag />
        <LocalBusinessSchema />
        <WebsiteSchema />
        <Splash />
        <Nav />
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
