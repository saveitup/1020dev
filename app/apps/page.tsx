import type { Metadata } from 'next';
import { AppsHero } from '@/components/AppsHero';
import { AppShowcase } from '@/components/AppShowcase';
import { AppSchema } from '@/components/AppSchema';
import { Methode } from '@/components/Methode';
import { Services } from '@/components/Services';
import { Scope } from '@/components/Scope';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import {
  APPS_FAQS,
  APPS_METHODE,
  APPS_SCOPE,
  APPS_SERVICES,
  APPS_SHOWCASE,
  SITE,
} from '@/lib/data';

const featured = APPS_SHOWCASE[0];

export const metadata: Metadata = {
  title: 'Apps · Mobile für iOS & Android',
  description: `Mobile Apps für iOS und Android aus einer Codebasis, plus Web-Version — von der Idee bis in den Store. Entwickelt in Wien, gezeigt an unserer eigenen App ${featured.name} (${featured.domain}).`,
  alternates: { canonical: `${SITE.url}/apps` },
};

export default function AppsPage() {
  return (
    <>
      <FaqStructuredData faqs={APPS_FAQS} />
      <AppSchema />
      <BreadcrumbSchema
        trail={[
          { name: 'Start', path: '/' },
          { name: 'Apps', path: '/apps' },
        ]}
      />
      <AppsHero />
      <Methode
        steps={APPS_METHODE}
        marker="01"
        title={
          <>
            Vier Schritte. <em>Vom Prototyp in den Store.</em>
          </>
        }
        lede="Vom ersten Gespräch bis zum Release — jeder Schritt mit klarem Output und realistischer Dauer. Sie haben jede Version am eigenen Handy, nicht nur in Screenshots."
      />
      <Services
        services={APPS_SERVICES}
        marker="02"
        title={
          <>
            Drei Bausteine. <em>Eine App.</em>
          </>
        }
        lede="Was wir tatsächlich für Sie bauen — von der Cross-Platform-App über die Web-Version bis zu Backend und Store-Release."
      />
      <AppShowcase marker="03" />
      <Scope
        data={APPS_SCOPE}
        marker="04"
        title={
          <>
            Modular und <em>klar.</em>
          </>
        }
        lede="Sie buchen nur, was Ihre App braucht — einzeln oder als Paket. Den Preis bekommen Sie nach dem kostenlosen Erstgespräch als Fixpreis-Angebot mit klar abgegrenztem Funktionsumfang."
      />
      <FAQ
        faqs={APPS_FAQS}
        marker="05"
        title={
          <>
            Häufig gestellte <em>Fragen.</em>
          </>
        }
        lede="Was Kunden vor dem Erstgespräch zu Apps wissen wollen — und die Antworten, die wir auch in Calls geben würden."
      />
      <Footer />
    </>
  );
}
