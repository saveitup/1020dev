import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { AuditWidget } from '@/components/AuditWidget';
import { Methode } from '@/components/Methode';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Methode />
      <Services />
      <AuditWidget />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
