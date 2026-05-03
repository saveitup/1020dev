import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Methode } from '@/components/Methode';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Web · Sites, SEO & AEO',
  description: SITE.description,
  alternates: { canonical: `${SITE.url}/web` },
};

export default function WebPage() {
  return (
    <>
      <FaqStructuredData />
      <Hero />
      <Methode />
      <Services />
      <Projects />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
