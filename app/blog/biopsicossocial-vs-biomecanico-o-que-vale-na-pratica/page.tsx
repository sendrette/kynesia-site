import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/biopsicossocial-vs-biomecanico-o-que-vale-na-pratica";

const faqItems = [
  {
    question: "O que é o modelo biopsicossocial?",
    answer:
      "É um modelo que considera fatores biológicos, psicológicos e sociais na compreensão da dor e da incapacidade, indo além do enfoque exclusivamente anatômico.",
  },
  {
    question: "Devo abandonar a avaliação biomecânica?",
    answer:
      "Não. Avaliação biomecânica continua relevante, mas deve ser integrada com aspectos psicológicos e sociais para uma estratégia terapêutica completa.",
  },
  {
    question: "Como aplicar na prática clínica?",
    answer:
      "Use avaliação funcional, escutas sobre crenças e contexto do paciente, e combine isso com intervenções de exercício, educação e ajuste de atividades, individualizando metas.",
  },
  {
    question: "Existe evidência que biopsicossocial é melhor?",
    answer:
      "Estudos mostram que abordagens multimodais que incluem educação e exercício têm melhores resultados do que intervenções isoladas em muitas condições musculoesqueléticas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Biopsicossocial vs modelo biomecânico: o que vale na prática?",
  description:
    "Entenda a controvérsia entre o modelo biomecânico e o modelo biopsicossocial na fisioterapia e como aplicar evidências na prática clínica.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/avaliacao-clinica.svg",
};

export const metadata: Metadata = {
  title: "Biopsicossocial vs modelo biomecânico: o que vale na prática?",
  description:
    "Polêmica 2026: biopsicossocial versus biomecânico na fisioterapia. Saiba o que a evidência recomenda e como aplicar na clínica.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Biopsicossocial vs modelo biomecânico: o que vale na prática?",
    description:
      "Polêmica 2026: biopsicossocial versus biomecânico na fisioterapia. Saiba o que a evidência recomenda e como aplicar na clínica.",
    url: pageUrl,
    type: "article",
  },
};

export default function BiopsicossocialVsBiomecanicoPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Biopsicossocial vs biomecânico</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Avaliação</span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Biopsicossocial vs modelo biomecânico: o que vale na prática?</h1>

          <p className="mb-6 text-lg text-gray-600">
            A dicotomia entre olhar anatômico e olhar integral tem gerado debate intenso. Este artigo resume evidências recentes e propõe um caminho prático para decidir o que priorizar na clínica.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 10 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Resumo:</strong> a discussão não é eliminar a biomecânica, mas integrar evidências sobre fatores psicológicos e sociais para melhorar resultados e adesão ao tratamento.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>modelo biomecânico</strong> foca em estruturas (músculos, articulações, tecidos) e em como ajustes técnicos devem corrigir a causa da dor. Já o <strong>modelo biopsicossocial</strong> amplia a visão incluindo crenças, medo-evitação, fatores ocupacionais e suporte social. Em 2026, pesquisas reforçam que ambos têm papel: o desafio é saber quando cada aspecto é determinante para o prognóstico.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Evidência atual — o que dizem as revisões</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões sistemáticas e guidelines para dor lombar, dor patelofemoral e dor musculoesquelética inespecífica mostram que intervenções multimodais (exercício + educação + abordagem contextual) costumam superar intervenções isoladas em variáveis de dor e função. Porém, quando existe uma lesão estrutural clara (ex.: ruptura extensa, instabilidade), a avaliação biomecânica orienta intervenção específica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando priorizar cada abordagem</h2>
        <div className="mb-8 space-y-6">
          {[
            {
              title: "Sinais que favorecem foco biomecânico",
              items: [
                "Clínica com alteração estrutural documentada (imagem + exame consistente)",
                "Deficiência de força local significativa que limita função", 
                "Padrões de movimento claramente correlacionados à dor e que respondem a correção técnica" ,
              ],
            },
            {
              title: "Sinais que favorecem olhar biopsicossocial",
              items: [
                "Dor persistente sem correlação direta com achados estruturais", 
                "Medo-evitação, catastrophizing ou baixa autoeficácia", 
                "Carga psicossocial elevada (trabalho estressante, insônia, baixa rede de suporte)",
              ],
            },
          ].map((block) => (
            <div key={block.title} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{block.title}</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {block.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Estratégia prática recomendada</h2>
        <ol className="mb-8 list-decimal pl-5 space-y-4 text-gray-700">
          <li>
            Avaliação completa: história clínica, exame funcional, medidas objetivas e triagem de sinais de alarme. Use instrumentos rápidos para rastrear crenças e ativação (ex.: Örebro, PCS quando aplicável).
          </li>
          <li>
            Defina hipótese dominante: estrutural, funcional ou contextual. Muitas vezes existem múltiplos fatores; priorize aquilo que limita função e pode ser modificado em curto prazo.
          </li>
          <li>
            Planeje intervenção multimodal: exercícios progressivos com critérios, educação orientada ao contexto do paciente, e estratégias para reduzir barreiras psicossociais (ex.: enfrentamento, sono, organização de trabalho).
          </li>
          <li>
            Meça resultado por função e metas do paciente, não apenas por imagem ou alívio imediato. Ajuste a  intervenção com base em resposta objetiva e reporte do paciente.
          </li>
        </ol>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">Exemplo prático</h3>
          <p className="leading-relaxed text-gray-700">
            Paciente com dor patelofemoral sem alterações significativas por imagem, mas com medo de atividades e déficit de força. A estratégia combina: 1) educação sobre dor e expectativa; 2) programa de força progressivo para quadríceps/glúteo; 3) exposição gradual a atividades que geram medo; 4) reavaliação objetiva a cada 2 semanas.
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Riscos de posições extremas (apenas um modelo)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Apoiar-se apenas no modelo biomecânico coloca risco de intervenções excessivamente técnicas e pouco foco em fatores que mantêm a dor no longo prazo. Por outro lado, adotar apenas educação sem abordar déficits de força e movimento pode atrasar recuperação funcional. A integração é chave.
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
          <h2 className="mb-4 text-2xl font-bold">Conclusão</h2>
          <p className="mb-4 leading-relaxed">
            A controvérsia entre modelos reflete uma questão produtiva: a prática clínica deve ser guiada por evidência e por objetivo funcional do paciente. Em 2026, a recomendação prática é integrar avaliação biomecânica com entendimento do contexto biopsicossocial, priorizando intervenção que maximize função e adesão.
          </p>
          <p className="leading-relaxed">
            Use instrumentos simples, metas claras e reavaliação por critério para decidir quando enfatizar cada aspecto. Assim você traz o melhor da ciência para a rotina do consultório.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
