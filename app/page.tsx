import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Studio } from '@/components/Studio';
import { Focus } from '@/components/Focus';
import { References } from '@/components/References';
import { ContactCard } from '@/components/ContactCard';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <Studio />
        <Focus />
        <References />
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}
