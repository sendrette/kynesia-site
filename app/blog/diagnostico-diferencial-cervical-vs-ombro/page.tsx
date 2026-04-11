import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/diagnostico-diferencial-cervical-vs-ombro";

const faqItems = [
  {
    question: "Dor no ombro pode ser causada pela cervical?",
    answer:
      "Sim. Disfunções cervicais podem irradiar dor para ombro e braço. Por isso, testar mobilidade cervical e sinais neurológicos é essencial antes de concluir origem local no ombro.",
  },
  {
    question: "Quando suspeitar que o problema é do ombro e não da coluna cervical?",
    answer:
      "Quando a dor reproduz com testes específicos do ombro, piora com movimentos glenoumerais e não muda com manobras cervicais. O conjunto de achados é que define a hipótese mais provável.",
  },
  {
    question: "Exame de imagem sozinho fecha diagnóstico diferencial?",
    answer:
      "Não. Imagem é complementar. O diagnóstico diferencial entre cervical e ombro depende de história clínica, exame físico e resposta aos testes funcionais.",
  },
  {
    question: "Qual erro mais comum nesse tipo de avaliação?",
    answer:
      "Focar apenas no local da dor e ignorar regiões relacionadas. Isso aumenta falso positivo e pode atrasar melhora por conduta inadequada.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diagnóstico diferencial cervical vs ombro: guia prático",
  description:
    "Diagnóstico diferencial cervical vs ombro: saiba como avaliar dor referida, testes clínicos e critérios para definir conduta mais assertiva.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
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
  title: "Diagnóstico diferencial cervical vs ombro: guia prático",
  description:
    "Diagnóstico diferencial cervical vs ombro: saiba como avaliar dor referida, testes clínicos e critérios para definir conduta mais assertiva.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Diagnóstico diferencial cervical vs ombro: guia prático",
    description:
      "Aprenda a diferenciar dor cervical e dor de ombro com critérios clínicos práticos para melhorar precisão diagnóstica e plano terapêutico.",
    type: "article",
    url: pageUrl,
  },
};

export default function DiagnosticoDiferencialCervicalOmbroPage() {
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
          <span className="font-medium text-teal-600">Diagnóstico diferencial: cervical vs ombro</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Diagnóstico Diferencial (Cervical vs. Ombro)
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Como diferenciar origem cervical e origem glenoumeral para reduzir erro clínico e definir conduta mais precisa desde a primeira avaliação.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 11 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            No diagnóstico diferencial cervical vs ombro, a regra prática é verificar se a dor muda com movimentos cervicais, testes neurológicos e manobras específicas do ombro.
            A combinação dos achados — e não um teste isolado — é o que orienta a hipótese mais confiável.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>diagnóstico diferencial cervical vs ombro</strong> é uma das decisões mais importantes na fisioterapia musculoesquelética. Dor em região lateral do ombro pode vir de tendão, bursa, cápsula, raiz nervosa cervical ou dor referida miofascial.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Quando o clínico foca apenas no ponto doloroso, aumenta risco de falso positivo e conduta ineficiente. Por isso, a avaliação precisa seguir sequência lógica com hipóteses e critérios objetivos.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/diagnostico-diferencial-cervical-vs-ombro</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: quais realmente ajudam na decisão clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico para conduta sem excesso
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais sinais sugerem origem cervical na dor do ombro?</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Suspeite de origem cervical quando houver dor irradiada abaixo do deltóide, parestesia, fraqueza em padrão miotomal, alteração de reflexos, limitação dolorosa da cervical ou reprodução dos sintomas com testes neurodinâmicos e compressão cervical.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como diferenciar dor cervical de lesão local no ombro?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O caminho mais seguro é cruzar dados: anamnese, comportamento da dor, exame cervical, exame do ombro e resposta a movimentos repetidos. Uma hipótese forte no ombro exige consistência entre dor, função e testes específicos positivos.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Anamnese direcionada",
              desc: "Mapeie localização, irradiação, gatilhos, fatores de alívio e histórico de sobrecarga cervical ou glenoumeral.",
              tip: "Dor que muda com postura de pescoço pede triagem cervical obrigatória.",
            },
            {
              num: "02",
              title: "Exame cervical e neurológico",
              desc: "Avalie mobilidade cervical, sensibilidade, força segmentar e reflexos quando houver suspeita de radiculopatia.",
              tip: "Sem exame neurológico, o risco de erro diagnóstico aumenta bastante.",
            },
            {
              num: "03",
              title: "Testes específicos do ombro",
              desc: "Aplique cluster de testes conforme hipótese (impacto, manguito, instabilidade, cápsula).",
              tip: "Teste isolado positivo não fecha diagnóstico por si só.",
            },
            {
              num: "04",
              title: "Integração dos achados",
              desc: "Compare coerência entre dor referida, padrão de movimento e resposta funcional para decidir principal fonte de sintomas.",
              tip: "Decisão clínica melhora quando você hierarquiza hipóteses, não quando escolhe apenas uma cedo demais.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Passo {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando pedir exame de imagem no diagnóstico cervical vs ombro?</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Exame de imagem deve ser solicitado quando houver red flags, déficit neurológico progressivo, trauma importante ou falha de resposta ao tratamento conservador bem conduzido.
          Na maioria dos casos iniciais, avaliação clínica funcional é suficiente para iniciar conduta segura.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta na avaliação cervical/ombro</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Fraqueza progressiva no membro superior</li>
            <li>• Perda sensitiva persistente em dermátomos</li>
            <li>• Dor noturna intensa sem variação com movimento</li>
            <li>• Trauma relevante com incapacidade funcional imediata</li>
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
          <h2 className="mb-4 text-2xl font-bold">Diagnóstico diferencial bem feito economiza tempo clínico</h2>
          <p className="mb-4 leading-relaxed">
            Diferenciar cervical e ombro com método reduz retrabalho, evita condutas ineficazes e melhora experiência do paciente já nas primeiras sessões.
          </p>
          <p className="mb-4 leading-relaxed">
            Quanto mais objetiva for sua avaliação, maior a chance de acertar o foco terapêutico e acelerar resultado funcional.
          </p>
          <p className="leading-relaxed">
            Use protocolos, mas mantenha raciocínio clínico ativo: o conjunto de evidências sempre vale mais do que um teste isolado.
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
