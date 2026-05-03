import { FAQS } from '@/lib/data';

type FaqItem = {
  question: string;
  plainAnswer: string;
};

export function FaqStructuredData({ faqs = FAQS }: { faqs?: readonly FaqItem[] } = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.plainAnswer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
