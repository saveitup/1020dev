import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Methode } from '@/components/Methode';
import { Services } from '@/components/Services';
import { Scope } from '@/components/Scope';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Web · Sites, SEO & AEO',
  description: SITE.webDescription,
  alternates: { canonical: `${SITE.url}/web` },
};

export default function WebPage() {
  return (
    <>
      <FaqStructuredData />
      <BreadcrumbSchema
        trail={[
          { name: 'Start', path: '/' },
          { name: 'Web', path: '/web' },
        ]}
      />
      <Hero />
      <Methode />
      <Services />
      <Projects />
      <Scope />
      <FAQ />
      <Footer />
    </>
  );
}
