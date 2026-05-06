import type { Metadata } from 'next';
import { AutomationHero } from '@/components/AutomationHero';
import { Methode } from '@/components/Methode';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FaqStructuredData } from '@/components/FaqStructuredData';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import {
  AUTOMATION_FAQS,
  AUTOMATION_METHODE,
  AUTOMATION_PRICING,
  AUTOMATION_SERVICES,
  SITE,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Software · Automation, Dev & AI',
  description:
    'Workflow-Automation, interne Tools und LLM-Integrationen für KMU in Wien und Österreich. Claude, GPT und Open-Source-Modelle DSGVO-konform mit EU-Hosting.',
  alternates: { canonical: `${SITE.url}/automation` },
};

export default function AutomationPage() {
  return (
    <>
      <FaqStructuredData faqs={AUTOMATION_FAQS} />
      <BreadcrumbSchema
        trail={[
          { name: 'Start', path: '/' },
          { name: 'Automation', path: '/automation' },
        ]}
      />
      <AutomationHero />
      <Methode
        steps={AUTOMATION_METHODE}
        marker="01"
        title={
          <>
            Vier Schritte. <em>Vom Prozess zum Workflow.</em>
          </>
        }
        lede="Vom ersten Audit zum produktiven Workflow — jeder Schritt mit klarem Output und realistischer Dauer. Keine Black Box, kein Vendor-Lock-in."
      />
      <Services
        services={AUTOMATION_SERVICES}
        marker="02"
        title={
          <>
            Drei Hebel. <em>Konkret und messbar.</em>
          </>
        }
        lede="Was wir tatsächlich für Sie bauen — von einzelnen Workflows bis zu vollwertigen internen Tools mit AI-Integration."
      />
      <Pricing
        data={AUTOMATION_PRICING}
        marker="03"
        title={
          <>
            Modular und <em>transparent.</em>
          </>
        }
      />
      <FAQ
        faqs={AUTOMATION_FAQS}
        marker="04"
        title={
          <>
            Häufig gestellte <em>Fragen.</em>
          </>
        }
        lede="Was Kunden vor dem Erstgespräch wissen wollen — und die Antworten, die wir auch in Calls geben würden."
      />
      <Footer />
    </>
  );
}
