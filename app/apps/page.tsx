import type { Metadata } from 'next';
import { AppShowcase } from '@/components/AppShowcase';
import { AppSchema } from '@/components/AppSchema';
import { ContactCard } from '@/components/ContactCard';
import { Footer } from '@/components/Footer';
import { APPS_SHOWCASE, SITE } from '@/lib/data';

const app = APPS_SHOWCASE[0];

export const metadata: Metadata = {
  title: `${app.name} · Eigene App`,
  description: `${app.tagline} ${app.name} ist die eigene App von ${SITE.name} — konzipiert, gestaltet, entwickelt und betrieben im Studio.`,
  alternates: { canonical: `${SITE.url}/apps` },
};

export default function AppsPage() {
  return (
    <>
      <AppSchema />
      <main>
        <AppShowcase />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}
