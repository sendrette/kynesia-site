import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/cervical-travada-o-que-fazer-na-hora-e-quando-preocupar";

const faqItems = [
  {
    question: "Cervical travada melhora sozinha?",
    answer:
      "Em muitos casos, há melhora em alguns dias com manejo correto. Porém, quando a dor limita muito movimentos, irradia para o braço ou não evolui, a avaliação fisioterapêutica é indicada.",
  },
  {
    question: "Quanto tempo dura uma cervical travada?",
    answer:
      "Em quadros leves, pode melhorar entre 3 e 10 dias. Casos com maior irritabilidade, recorrência ou sobrecarga mantida podem durar mais e exigir plano estruturado de reabilitação.",
  },
  {
    question: "Posso fazer alongamento forte na crise?",
    answer:
      "Não é o ideal no pico da dor. Alongamento agressivo pode aumentar proteção muscular. O mais seguro é iniciar com movimentos leves, respiração, calor local e progressão conforme tolerância.",
  },
  {
    question: "Quando devo procurar urgência por dor no pescoço?",
    answer:
      "Procure urgência se houver trauma importante, febre, perda de força progressiva, formigamento intenso persistente, dor de cabeça súbita muito forte ou outros sintomas neurológicos associados.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cervical travada: o que fazer na hora e quando preocupar",
  description:
    "Cervical travada? Veja o que fazer na hora, causas, quanto tempo dura e quando procurar fisioterapia para aliviar a dor no pescoço.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
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
  title: "Cervical travada: o que fazer na hora e quando preocupar",
  description:
    "Cervical travada? Veja o que fazer na hora, causas, quanto tempo dura e quando procurar fisioterapia para aliviar a dor no pescoço.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Cervical travada: o que fazer na hora e quando preocupar",
    description:
      "Entenda como aliviar crise de cervical travada, causas comuns e sinais de alerta para procurar fisioterapia com segurança.",
    type: "article",
    url: pageUrl,
  },
};

export default function CervicalTravadaPage() {
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
          <span className="font-medium text-teal-600">Cervical travada: o que fazer na hora e quando preocupar</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Cervical travada: o que fazer na hora e quando preocupar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda condutas imediatas para aliviar dor no pescoço, entenda causas frequentes e saiba quando a cervical travada precisa de avaliação especializada.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 14 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Se sua cervical travou, comece reduzindo carga, fazendo movimentos leves sem forçar amplitude, aplicando calor local por 15 a 20 minutos e ajustando postura no trabalho.
            Se houver piora, irradiação para braço, formigamento persistente ou perda de força, procure avaliação fisioterapêutica.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A sensação de <strong>cervical travada</strong> costuma aparecer de forma súbita, com rigidez e dor no pescoço que limita movimentos simples do dia a dia.
          Embora muitas crises sejam benignas, saber o que fazer logo nas primeiras horas pode encurtar o tempo de recuperação.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste guia, você vai entender as causas mais comuns, o que evita piora da dor e quando o quadro deixa de ser apenas tensão muscular para exigir investigação clínica.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/cervical-travada-o-que-fazer-na-hora-e-quando-preocupar</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico para escolher conduta
              </Link>
            </li>
            <li>
              <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">
                → Diagnóstico diferencial: cervical vs ombro na prática clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: quando ajudam na decisão clínica
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Cervical travada: o que fazer na hora?</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          O foco inicial é reduzir irritabilidade e recuperar movimento gradualmente. Evite repouso absoluto prolongado e manobras bruscas no pescoço.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Diminua carga e posições sustentadas",
              desc: "Faça pausas frequentes, ajuste altura de tela e reduza tempo com cabeça inclinada para frente.",
              tip: "Micropausas de 2 a 3 minutos a cada 40-60 minutos costumam ajudar bastante.",
            },
            {
              num: "02",
              title: "Use calor local e movimentos leves",
              desc: "Aplicar calor por 15 a 20 minutos pode reduzir tensão muscular. Depois, faça rotações e inclinações leves, sem dor forte.",
              tip: "Movimento confortável é melhor que imobilidade total na maioria dos casos.",
            },
            {
              num: "03",
              title: "Controle dor sem agressividade",
              desc: "Evite alongamentos intensos ou manipulações sem avaliação. A prioridade é modular dor e recuperar função progressivamente.",
              tip: "Se dor aumentar após uma estratégia, reduza intensidade e reavalie a conduta.",
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

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Principais causas de cervical travada</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Na maior parte dos casos, a dor no pescoço envolve combinação de sobrecarga mecânica, estresse, baixa variabilidade de movimento e sono ruim.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Sobrecarga postural</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Longos períodos em frente ao computador, celular abaixo da linha dos olhos e poucas pausas aumentam tensão cervical.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Pico de estresse e tensão muscular</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Estresse elevado pode aumentar co-contração muscular e sensibilidade dolorosa, piorando rigidez e percepção de travamento.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Sono inadequado e posição mantida</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Noites mal dormidas e posições desconfortáveis por muito tempo podem desencadear dor ao acordar e limitação de rotação cervical.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quanto tempo dura uma cervical travada?</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em crises leves, a melhora costuma ocorrer entre 3 e 10 dias. Quando há recorrência, maior irritabilidade ou sintomas irradiados, o tempo pode se estender e exigir intervenção estruturada para restaurar mobilidade e força.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando se preocupar com dor no pescoço?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Nem toda cervical travada é grave, mas alguns sinais pedem avaliação imediata. O objetivo é descartar condições relevantes e definir conduta segura.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Dor após trauma importante (queda, colisão, acidente)</li>
            <li>• Formigamento intenso persistente ou perda de força no braço</li>
            <li>• Febre, mal-estar geral ou dor noturna progressiva</li>
            <li>• Dor de cabeça súbita muito forte associada à rigidez cervical</li>
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
          <h2 className="mb-4 text-2xl font-bold">Aliviar cervical travada exige estratégia, não força</h2>
          <p className="mb-4 leading-relaxed">
            A melhor conduta inicial combina redução de carga, movimento gradual e monitoramento de sinais de alerta.
            Em muitos casos, essa abordagem já reduz dor e devolve mobilidade em poucos dias.
          </p>
          <p className="mb-4 leading-relaxed">
            Quando a dor no pescoço se repete ou limita rotina e trabalho, a fisioterapia ajuda a identificar fatores causais e criar um plano objetivo de recuperação.
          </p>
          <p className="leading-relaxed">
            Intervir cedo evita cronificação e melhora sua confiança para voltar às atividades sem medo de novas crises.
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
