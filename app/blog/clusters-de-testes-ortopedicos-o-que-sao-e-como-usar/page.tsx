import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/clusters-de-testes-ortopedicos-o-que-sao-e-como-usar";

const faqItems = [
  {
    question: "O que diferencia um cluster de testes ortopédicos de um teste isolado?",
    answer:
      "Um teste isolado avalia uma estrutura específica, mas pode dar falsos positivos. Um cluster combina 2-3 testes com mecanismo similar para aumentar a especificidade e diminuir incerteza diagnóstica.",
  },
  {
    question: "Como saber qual cluster usar em cada situação?",
    answer:
      "A anamnese e o mecanismo de lesão orientam hipóteses. Com base na queixa, selecione o cluster que melhor investiga essa hipótese. Combine com outros clusters para refutar ou confirmar.",
  },
  {
    question: "Cluster positivo sempre significa lesão estrutural?",
    answer:
      "Não. Um cluster positivo aumenta a probabilidade, mas contexto clínico importa: sintomas funcionais, resposta ao movimento, fatores de sensibilização e histórico complementam o diagnóstico.",
  },
  {
    question: "Posso usar clusters para descartar diagnósticos?",
    answer:
      "Sim. Um cluster com alta sensibilidade ajuda a excluir um diagnóstico quando negativo. Isso reduz o leque de hipóteses e orienta a investigação de forma mais objetiva.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Clusters de testes ortopédicos: o que são e como usar",
  description:
    "Entenda o que são clusters de testes ortopédicos, como aplicar na prática e melhorar seu diagnóstico na fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  image: "https://kynesia.com.br/blog/avaliacao-clinica.svg",
};

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

export const metadata: Metadata = {
  title: "Clusters de testes ortopédicos: o que são e como usar",
  description:
    "Entenda o que são clusters de testes ortopédicos, como aplicar na prática e melhorar seu diagnóstico na fisioterapia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Clusters de testes ortopédicos: o que são e como usar",
    description:
      "Aprenda a usar clusters de testes ortopédicos para aumentar confiabilidade no diagnóstico fisioterapêutico.",
    type: "article",
    url: pageUrl,
  },
};

export default function ClustersTesterOrtopedicosPage() {
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
          <span className="font-medium text-teal-600">Clusters de testes ortopédicos: o que são e como usar</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Clusters de testes ortopédicos: o que são e como usar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Clusters de testes aumentam a confiabilidade do diagnóstico fisioterapêutico. Veja como aplicar na prática para reduzir incerteza e melhorar decisões clínicas.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 28 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Um cluster de testes ortopédicos é uma combinação de 2-3 testes com mecanismo similar que, quando aplicados em conjunto, aumentam a sensibilidade e especificidade para um diagnóstico específico.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Um teste isolado pode ser positivo por múltiplas razões e levar a diagnósticos imprecisos. A grande vantagem dos clusters é reduzir falsos positivos e falsos negativos através da convergência de evidências.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, você vai entender como clusters funcionam, por que melhoram o raciocínio clínico e como aplicá-los na rotina da sua clínica.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos do ombro: protocolo completo
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/anamnese-fisioterapeutica-como-fazer-passo-a-passo" className="text-teal-600 hover:underline">
                → Anamnese fisioterapêutica: como fazer passo a passo
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que testes isolados não são suficientes?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um teste ortopédico avalia um mecanismo, mas raramente é 100% específico. Testes podem ser positivos por irritabilidade neural, dor central ou sensibilização sem lesão estrutural.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando você usa apenas um teste, corre o risco de "encontrar o que procura" sem validar a hipótese contra outras possibilidades. Isso resulta em diagnósticos imprecisos e tratamentos pouco direcionados.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Os clusters surgiram justamente para aumentar a precisão: se 2-3 testes com mecanismo similar forem positivos simultaneamente, a chance de diagnóstico correto aumenta significativamente.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como funcionam os clusters de testes</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um bom cluster combine testes que compartilhem estrutura alvo, mecanismo similar e com evidência de sensibilidade/especificidade. Quanto mais testes convergem para o mesmo resultado, mais confiável é a conclusão.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Seleção por mecanismo de lesão",
              desc: "Escolha testes que investigam a mesma estrutura ou mecanismo. Ex.: se suspeita de lesão meniscal, use testes que provocam rotação e compressão sobre a articulação.",
              tip: "Mecanismo convergente aumenta especificidade e reduz falsos positivos.",
            },
            {
              num: "02",
              title: "Interpretação de resultados",
              desc: "Se todos os testes do cluster forem positivos, probabilidade de diagnóstico é alta. Se forem discordantes, indica que outras hipóteses precisam ser investigadas.",
              tip: "Discordância é informação valiosa para mudar de hipótese.",
            },
            {
              num: "03",
              title: "Combinação com contexto clínico",
              desc: "Um cluster positivo não confirma diagnóstico isoladamente. Considere anamnese, mecanismo de lesão, irritabilidade, resposta ao movimento e fatores psicossociais.",
              tip: "Teste positivo + contexto clínico = diagnóstico mais confiável.",
            },
            {
              num: "04",
              title: "Aplicação para refutar diagnósticos",
              desc: "Um cluster com alta sensibilidade, quando negativo, descarta bem um diagnóstico. Isso estreita o leque e torna a avaliação mais eficiente.",
              tip: "Use sensibilidade alta para excluir; especificidade alta para incluir.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Princípio {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplos de clusters ortopédicos comuns</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Alguns clusters já têm evidência na literatura e são amplamente usados. Conheça os principais:
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Cluster de lesão meniscal de joelho</h3>
        <ul className="mb-4 space-y-2 leading-relaxed text-gray-700">
          <li>• Teste de McMurray: rotação + flexão/extensão</li>
          <li>• Teste de Thessaly: rotação em pé</li>
          <li>• Teste de Joint Line Tenderness: sensibilidade sobre linha interarticular</li>
        </ul>
        <p className="mb-6 leading-relaxed text-gray-700">
          <strong>Resultado:</strong> Se todos positivos, probabilidade de lesão meniscal é significativa. Se discordantes, sugere outras causas (condromalácia, inflamação sinovial, etc.).
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Cluster de síndrome femoropatelar</h3>
        <ul className="mb-4 space-y-2 leading-relaxed text-gray-700">
          <li>• Teste de Clarke: compressão + contração de quadríceps</li>
          <li>• Teste de descompressão patelar: alívio de dor com descompressão</li>
          <li>• Teste de Waldron: rotação interna em agachamento</li>
        </ul>
        <p className="mb-6 leading-relaxed text-gray-700">
          <strong>Resultado:</strong> Concordância sugere componente patelar importante. Considere força de quadríceps e alinhamento postural.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Cluster de lesão do manguito rotador (ombro)</h3>
        <ul className="mb-4 space-y-2 leading-relaxed text-gray-700">
          <li>• Teste de Neer: impacto subacromial em elevação</li>
          <li>• Teste de Hawkins: impacto em flexão + rotação interna</li>
          <li>• Teste de Jobe (Empty Can): força abdutor com rotação interna</li>
        </ul>
        <p className="mb-6 leading-relaxed text-gray-700">
          <strong>Resultado:</strong> Se todos positivos, investigar força e irritabilidade. Se apenas um positivo, pode ser falso positivo ou mecânica alterada sem lesão estrutural.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Limitações importantes dos clusters</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Apesar da utilidade, clusters têm limitações. Nenhum cluster tem sensibilidade e especificidade de 100%. Além disso, achados de imagem nem sempre correlacionam com sintomas.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          O mais importante é usar clusters como ferramentas de suporte, nunca como diagnóstico final isolado. Sempre combine com anamnese, evolução clínica e resposta ao tratamento.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Registro de testes e decisão clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Registrar quais testes foram realizados, seus resultados e o raciocínio clínico melhora a clareza diagnóstica. Isso facilita revisão, ajuste de hipóteses e comunicação com outros profissionais.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          No Kynesia, você estrutura avaliação física com clusters, registra resultados de forma organizada e acompanha como o paciente responde ao plano. Isso torna possível validar ou refutar hipóteses ao longo do tratamento.
        </p>

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
          <h2 className="mb-4 text-2xl font-bold">Clusters aumentam confiabilidade diagnóstica</h2>
          <p className="mb-4 leading-relaxed">
            Usar clusters de testes ortopédicos eleva o nível de confiança no diagnóstico fisioterapêutico. O resultado é melhor assertividade no plano terapêutico e maior precisão nas decisões clínicas.
          </p>
          <p className="leading-relaxed">
            Invista em conhecer os clusters da sua área e aplicá-los com método. O tempo investido em avaliação bem feita economiza semanas de tratamento impreciso.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo baseado em prática clínica e fisioterapia orientada por evidências.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
