import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

type FAQItem = {
  question: string;
  answer: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

type StandardBlogPostProps = {
  pageUrl: string;
  title: string;
  intro: string;
  category: string;
  dateText: string;
  readTime: string;
  featuredSnippet: string;
  articleSchema: Record<string, unknown>;
  faqItems: FAQItem[];
  relatedLinks: RelatedLink[];
  summaryParagraphs: string[];
  children: ReactNode;
};

export default function StandardBlogPost({
  pageUrl,
  title,
  intro,
  category,
  dateText,
  readTime,
  featuredSnippet,
  articleSchema,
  faqItems,
  relatedLinks,
  summaryParagraphs,
  children,
}: StandardBlogPostProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">{title}</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            {category}
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{title}</h1>

          <p className="mb-6 text-lg text-gray-600">{intro}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 {dateText}</span>
            <span>⏱ {readTime}</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Resumo rápido:</strong> {featuredSnippet}
          </p>
        </div>

        {children}

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-teal-600 hover:underline">
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                <summary className="font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Resumo clínico</h2>
          {summaryParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 leading-relaxed last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para profissionais da saúde.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
