import { Hero } from '@/components/Hero';
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
      <AuditWidget />
      <Methode />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
