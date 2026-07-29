import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/kinesio-tape-funciona-o-que-dizem-as-evidencias";

const faqItems = [
  {
    question: "Kinesio Tape funciona para dor?",
    answer:
      "Pode ajudar em alguns casos no curto prazo, especialmente como recurso complementar. O efeito tende a ser modesto e deve ser combinado com exercício e manejo de carga.",
  },
  {
    question: "Kinesio Tape corrige postura sozinho?",
    answer:
      "Não. A fita pode aumentar percepção corporal temporária, mas não substitui treino ativo, fortalecimento e mudanças de hábito.",
  },
  {
    question: "Qual a principal indicação do Kinesio Tape?",
    answer:
      "A principal utilidade clínica é complementar o tratamento para conforto, percepção de suporte e facilitação de movimento em contextos específicos.",
  },
  {
    question: "Posso usar Kinesio Tape sem avaliação?",
    answer:
      "O ideal é usar com orientação profissional para definir objetivo, técnica de aplicação e tempo de uso, reduzindo risco de irritação de pele e expectativas inadequadas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kinesio Tape funciona? O que dizem as evidências",
  description:
    "Kinesio Tape funciona mesmo? Veja o que a ciência diz sobre seus efeitos, indicações e quando usar na fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
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
  title: "Kinesio Tape funciona? O que dizem as evidências",
  description:
    "Kinesio Tape funciona mesmo? Veja o que a ciência diz sobre seus efeitos, indicações e quando usar na fisioterapia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Kinesio Tape funciona? O que dizem as evidências",
    description:
      "Entenda o que as evidências mostram sobre Kinesio Tape, quando ele pode ajudar e como usar sem substituir o tratamento ativo.",
    type: "article",
    url: pageUrl,
  },
};

export default function KinesioTapePage() {
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
          <span className="font-medium text-teal-600">Kinesio Tape funciona? O que dizem as evidências</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Kinesio Tape funciona? O que dizem as evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda quando o Kinesio Tape pode ajudar na fisioterapia, quais são seus limites e como integrar esse recurso a uma conduta baseada em evidência.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 16 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            O Kinesio Tape pode trazer alívio discreto e temporário em alguns pacientes, mas não é solução isolada. As evidências indicam melhores resultados quando ele é usado como complemento de exercício terapêutico e reabilitação ativa.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A dúvida <strong>“Kinesio Tape funciona?”</strong> aparece com frequência na prática clínica. A resposta mais honesta é: depende do objetivo terapêutico, do perfil do paciente e de como o recurso é inserido no plano de tratamento.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Isoladamente, a fita costuma gerar efeitos modestos. Já em combinação com educação, exercício e progressão funcional, pode contribuir para conforto, confiança e adesão do paciente.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/kinesio-tape-funciona-o-que-dizem-as-evidencias</p>
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
              <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">
                → Diagnóstico diferencial: cervical vs ombro na prática clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que a ciência mostra sobre Kinesio Tape</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões sistemáticas e ensaios clínicos apontam que o Kinesio Tape pode gerar melhora pequena de dor e função em curto prazo, dependendo da condição clínica.
          No entanto, o efeito geralmente não supera de forma relevante intervenções ativas quando usado sozinho.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Efeito analgésico discreto",
              desc: "Alguns pacientes relatam redução de dor nos primeiros dias, especialmente em quadros musculoesqueléticos leves a moderados.",
              tip: "Use como suporte temporário, não como tratamento principal.",
            },
            {
              num: "02",
              title: "Melhora de percepção corporal",
              desc: "A fita pode aumentar consciência de movimento e sensação de suporte em certas tarefas funcionais.",
              tip: "Esse ganho deve ser aproveitado para treinar movimento com qualidade.",
            },
            {
              num: "03",
              title: "Baixo impacto quando isolado",
              desc: "Sem fortalecimento e progressão de carga, os resultados tendem a ser limitados e pouco duradouros.",
              tip: "Combine sempre com plano ativo e metas funcionais.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Evidência {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando o Kinesio Tape pode ser indicado</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O recurso pode ser útil em fases iniciais de dor, durante retorno funcional e em contextos esportivos, desde que exista um objetivo claro: modular sintomas, facilitar movimento ou melhorar adesão.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Dor aguda com necessidade de conforto</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Em alguns casos, a fita ajuda o paciente a se movimentar com menos medo e maior tolerância, favorecendo início da reabilitação ativa.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Suporte durante treino funcional</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Pode ser usada temporariamente em tarefas específicas enquanto força, controle motor e capacidade tecidual são desenvolvidos.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Estratégia adjuvante, não substituta</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O melhor resultado surge quando a fita é apenas uma parte de um plano maior, com progressão de carga, educação em dor e acompanhamento clínico.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando evitar ou reavaliar o uso</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Se houver irritação cutânea, alergia, piora da dor ou expectativa de “cura rápida” sem abordagem ativa, o uso deve ser reavaliado.
          A decisão sempre depende da resposta individual do paciente.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Coceira intensa, vermelhidão ou irritação de pele</li>
            <li>• Dor piorando após aplicação</li>
            <li>• Dependência da fita sem evolução funcional</li>
            <li>• Uso prolongado sem progressão de tratamento ativo</li>
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
          <h2 className="mb-4 text-2xl font-bold">Kinesio Tape pode ajudar, mas o centro do tratamento é ativo</h2>
          <p className="mb-4 leading-relaxed">
            A evidência atual sugere que o Kinesio Tape é um recurso complementar. Ele pode facilitar algumas fases da reabilitação, mas não substitui exercício, progressão de carga e raciocínio clínico.
          </p>
          <p className="mb-4 leading-relaxed">
            O foco deve ser sempre recuperar função com autonomia, e não depender de estratégias passivas por tempo indefinido.
          </p>
          <p className="leading-relaxed">
            Em uma fisioterapia baseada em evidências, cada recurso tem lugar — e o tape é uma peça, não o plano inteiro.
          </p>
        </div>

        <PatientCTA />


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
