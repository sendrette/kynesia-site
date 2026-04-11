import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/modelos-evolucao-prontuario-fisioterapeutica";

const faqItems = [
  {
    question: "Preciso ter modelo diferente para avaliação e retorno?",
    answer:
      "Sim. O ideal é ter estrutura-base para primeira avaliação e outra para reavaliações/retornos. Isso melhora clareza clínica e evita campos excessivos em atendimentos rápidos.",
  },
  {
    question: "Posso usar texto padrão em todas as evoluções?",
    answer:
      "Pode usar blocos-padrão, mas cada evolução deve trazer dados individualizados (resposta do paciente, conduta do dia, parâmetros e plano). Copiar e colar sem personalizar reduz qualidade e segurança documental.",
  },
  {
    question: "Qual frequência ideal para reavaliar no prontuário fisioterapêutico?",
    answer:
      "Depende do caso e objetivo terapêutico, mas revisões periódicas com indicadores funcionais costumam ocorrer entre 2 e 6 semanas para ajustar plano com base em resultado real.",
  },
  {
    question: "Prontuário digital é melhor que papel para fisioterapia?",
    answer:
      "Na maioria dos cenários, sim. O prontuário digital facilita padronização, histórico, legibilidade, segurança de dados e auditoria, além de reduzir retrabalho operacional.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Modelos de evolução fisioterapêutica e prontuário eficaz",
  description:
    "Modelos de evolução fisioterapêutica e prontuário: estrutura prática, itens obrigatórios e exemplos para documentar melhor. Veja o guia e aplique hoje.",
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
  image: "https://kynesia.com.br/blog/gestao-clinica.svg",
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
  title: "Modelos de evolução fisioterapêutica e prontuário eficaz",
  description:
    "Modelos de evolução fisioterapêutica e prontuário: estrutura prática, itens obrigatórios e exemplos para documentar melhor. Veja o guia e aplique hoje.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Modelos de evolução fisioterapêutica e prontuário eficaz",
    description:
      "Guia prático para padronizar modelos de evolução e prontuário fisioterapêutico com mais clareza clínica, qualidade de registro e segurança.",
    type: "article",
    url: pageUrl,
  },
};

export default function ModelosEvolucaoProntuarioPage() {
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
          <span className="font-medium text-teal-600">Modelos de evolução e prontuário fisioterapêutica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Modelos de Evolução e Prontuário Fisioterapêutica
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Um guia prático para padronizar registros clínicos, melhorar a comunicação da equipe e fortalecer segurança assistencial.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 11 Abr 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Resposta rápida:</strong> modelos de evolução e prontuário fisioterapêutica devem registrar avaliação, hipóteses, condutas, resposta do paciente e plano de continuidade de forma objetiva.
            Com estrutura padronizada, você ganha clareza clínica, reduz retrabalho e melhora segurança documental.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Os <strong>modelos de evolução e prontuário fisioterapêutica</strong> são fundamentais para manter consistência no atendimento, facilitar comunicação entre profissionais e documentar progresso funcional com qualidade.
          Sem estrutura, o prontuário vira texto solto; com método, ele se torna ferramenta de decisão clínica.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, você verá o que não pode faltar em um bom modelo, como padronizar sem engessar a prática e quais elementos elevam qualidade assistencial e segurança jurídica.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/modelos-evolucao-prontuario-fisioterapeutica</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico para conduta sem excesso de protocolos
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que deve constar em um modelo de evolução fisioterapêutica?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um bom modelo precisa capturar dados suficientes para acompanhar evolução funcional sem transformar o atendimento em burocracia. O ideal é unir objetividade com critérios clínicos úteis.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Queixa e status atual do paciente",
              desc: "Registro curto do estado no dia: dor, limitação principal, percepção funcional e contexto relevante.",
              tip: "Use linguagem clínica clara e evite textos genéricos repetidos.",
            },
            {
              num: "02",
              title: "Achados objetivos e indicadores",
              desc: "Inclua medidas de ADM, força, testes funcionais, escalas e qualquer métrica utilizada na tomada de decisão.",
              tip: "Indicador sem valor de referência perde utilidade comparativa.",
            },
            {
              num: "03",
              title: "Conduta aplicada na sessão",
              desc: "Descreva técnicas, parâmetros de exercício, progressões e adaptações feitas durante o atendimento.",
              tip: "Documentar dose e resposta é mais útil do que listar técnicas isoladas.",
            },
            {
              num: "04",
              title: "Resposta do paciente",
              desc: "Anote como o paciente respondeu à sessão: melhora, piora, estabilidade, fadiga ou dor residual.",
              tip: "Resposta pós-sessão orienta a próxima conduta e evita progressão precoce.",
            },
            {
              num: "05",
              title: "Plano para próxima sessão",
              desc: "Defina próximos passos, foco terapêutico e critérios para manter, avançar ou ajustar carga.",
              tip: "Plano explícito reduz variabilidade entre atendimentos da equipe.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Item {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Qual a diferença entre evolução e prontuário fisioterapêutico?</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          O prontuário é o conjunto completo de informações do paciente (anamnese, avaliações, exames, evoluções e documentos). A evolução é uma parte do prontuário: o registro sequencial de cada sessão e da resposta clínica ao tratamento.
          Em resumo, toda evolução integra o prontuário, mas prontuário vai além da evolução diária.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como padronizar prontuário sem perder individualização clínica?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Padronizar não significa robotizar. A melhor estratégia é criar um template-base com campos obrigatórios e espaços para decisão clínica personalizada.
          Assim, você mantém comparabilidade entre sessões e preserva raciocínio individual por paciente.
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-4 font-bold text-teal-900">✔ Estrutura sugerida de template clínico</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Cabeçalho com identificação e diagnóstico funcional</li>
            <li>✓ Campos objetivos de avaliação e reavaliação</li>
            <li>✓ Bloco de conduta com parâmetros e progressão</li>
            <li>✓ Registro de resposta imediata e intercorrências</li>
            <li>✓ Plano de continuidade com critérios de decisão</li>
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
          <h2 className="mb-4 text-2xl font-bold">Prontuário bem feito melhora clínica e gestão</h2>
          <p className="mb-4 leading-relaxed">
            Modelos de evolução e prontuário fisioterapêutica bem estruturados aumentam qualidade assistencial, facilitam continuidade do cuidado e dão base concreta para decisões clínicas.
          </p>
          <p className="mb-4 leading-relaxed">
            Quando a equipe registra com padrão e propósito, o tratamento fica mais previsível, mensurável e eficiente — para profissional, clínica e paciente.
          </p>
          <p className="leading-relaxed">
            Quer implementar isso no seu fluxo? Comece com um template simples, revise semanalmente e evolua conforme os dados reais da sua prática.
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
