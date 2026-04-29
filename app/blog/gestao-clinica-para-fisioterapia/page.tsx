import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/gestao-clinica-para-fisioterapia";

const faqItems = [
  {
    question: "O que é gestão clínica para fisioterapia?",
    answer:
      "É a organização integrada da clínica: avaliação, prontuário, agenda, evolução, indicadores, financeiro e comunicação, tudo alinhado para melhorar assistência e previsibilidade.",
  },
  {
    question: "Como começar a gestão clínica na fisioterapia?",
    answer:
      "Comece padronizando anamnese, avaliação e evolução. Depois organize agenda, confirme presença, acompanhe indicadores simples e centralize os dados em um único sistema.",
  },
  {
    question: "Qual o maior erro na gestão clínica?",
    answer:
      "O maior erro é operar sem processo e sem dado. Quando cada profissional registra de um jeito e a agenda funciona de forma reativa, aumenta o retrabalho e cai a previsibilidade.",
  },
  {
    question: "Como o Kynesia ajuda a gestão clínica para fisioterapia?",
    answer:
      "O Kynesia centraliza prontuário eletrônico, agenda, controle financeiro e inteligência clínica baseada em evidências, ajudando a padronizar o atendimento e ganhar eficiência.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gestão clínica para fisioterapia: como organizar e crescer",
  description:
    "Aprenda gestão clínica para fisioterapia com passos práticos, indicadores, prontuário e agenda para organizar sua clínica e crescer com eficiência.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
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
  title: "Gestão clínica para fisioterapia: como organizar e crescer",
  description:
    "Aprenda gestão clínica para fisioterapia com passos práticos, indicadores, prontuário e agenda para organizar sua clínica e crescer com eficiência.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Gestão clínica para fisioterapia: como organizar e crescer",
    description:
      "Veja como estruturar gestão clínica para fisioterapia com processos, indicadores, agenda e prontuário centralizados.",
    type: "article",
    url: pageUrl,
  },
};

export default function GestaoClinicaParaFisioterapiaPage() {
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
          <span className="font-medium text-teal-600">Gestão clínica para fisioterapia: como organizar e crescer</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Gestão clínica para fisioterapia: como organizar e crescer
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Se a sua meta é aparecer melhor, atender com mais consistência e crescer com previsibilidade, a base é uma gestão clínica bem estruturada. Veja como aplicar isso na prática.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 29 Abr 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Gestão clínica para fisioterapia é a integração entre atendimento, processos e dados. Quando prontuário, agenda, indicadores e financeiro conversam, a clínica ganha eficiência, padrão e previsibilidade.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Muitas clínicas até atendem bem, mas perdem força na operação: evoluções inconsistentes, agenda desorganizada, falta de indicadores e comunicação dispersa. Isso impede crescimento e reduz competitividade.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A boa notícia é que existem passos práticos para mudar esse cenário. Abaixo está um guia objetivo para transformar a gestão da sua clínica e construir autoridade no mercado.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/gestao-clinica-em-fisioterapia-guia-completo-2026" className="text-teal-600 hover:underline">
                → Gestão clínica em fisioterapia: guia completo 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/software-para-fisioterapia-como-escolher-o-melhor" className="text-teal-600 hover:underline">
                → Software para fisioterapia: como escolher o melhor
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é gestão clínica para fisioterapia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          É o conjunto de processos que organizam a jornada do paciente e a operação da clínica: captação, avaliação, prontuário, evolução, agenda, financeiro e acompanhamento de resultados.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em outras palavras, é sair do atendimento improvisado e passar a trabalhar com método, padrão e visibilidade de dados.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Passo a passo para estruturar a gestão clínica</h2>
        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Padronize a avaliação e a evolução",
              desc: "Defina campos obrigatórios, sequência de avaliação e linguagem clínica uniforme para toda a equipe.",
              tip: "Padronização aumenta qualidade e reduz falhas de comunicação entre profissionais.",
            },
            {
              num: "02",
              title: "Organize agenda e fluxo de atendimento",
              desc: "Crie regras para confirmação, remarcação, tempo de sessão e encaixes. A agenda precisa ser previsível, não reativa.",
              tip: "Agenda previsível reduz faltas e melhora ocupação da clínica.",
            },
            {
              num: "03",
              title: "Centralize prontuário e histórico",
              desc: "Todos os dados do paciente devem estar em um único local, acessível e organizado para consulta rápida.",
              tip: "Quando o histórico está espalhado, o raciocínio clínico fica mais lento e inseguro.",
            },
            {
              num: "04",
              title: "Acompanhe indicadores simples",
              desc: "Comece por comparecimento, evolução funcional, retenção, tempo médio de tratamento e taxa de retorno.",
              tip: "Sem indicadores, não existe gestão; existe apenas percepção.",
            },
            {
              num: "05",
              title: "Integre financeiro e operação",
              desc: "A parte financeira precisa refletir a realidade da agenda e do atendimento para permitir decisões melhores.",
              tip: "Financeiro integrado evita surpresas e aumenta previsibilidade.",
            },
            {
              num: "06",
              title: "Crie uma rotina de revisão semanal",
              desc: "Reserve um momento para revisar agenda, indicadores, pendências e oportunidades de melhoria.",
              tip: "Revisão frequente mantém a clínica em evolução contínua.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Passo {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Dica prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que impede sua clínica de aparecer no Google</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para ranquear melhor, o site precisa de consistência temática. Uma página forte sobre gestão clínica para fisioterapia deve conversar com outros conteúdos do mesmo assunto, ter intenção clara e responder a dúvidas reais do público.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Além disso, páginas com bom título, descrição objetiva, estrutura escaneável, links internos e conteúdo aprofundado tendem a ter melhor desempenho orgânico ao longo do tempo.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Ou seja: não basta publicar. É preciso construir autoridade em torno do tema, com um conjunto de artigos conectados.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o Kynesia fortalece a gestão clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O Kynesia ajuda a centralizar o que normalmente fica disperso em planilhas, mensagens e anotações soltas. Isso reduz retrabalho e melhora a tomada de decisão.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Com prontuário eletrônico, agenda, financeiro e inteligência clínica em um só sistema, a clínica passa a operar com mais clareza, velocidade e qualidade assistencial.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Na prática, isso significa mais controle da operação e mais tempo para atender bem e crescer com previsibilidade.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de que sua gestão está travando crescimento</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Evoluções sem padrão entre profissionais</li>
            <li>• Agenda cheia, mas com baixa previsibilidade</li>
            <li>• Dificuldade para saber o que realmente funciona</li>
            <li>• Informações clínicas e financeiras espalhadas</li>
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
          <h2 className="mb-4 text-2xl font-bold">Gestão clínica forte é base para crescer</h2>
          <p className="mb-4 leading-relaxed">
            Se o objetivo é competir melhor e aparecer com mais força na busca orgânica, o caminho passa por conteúdo consistente e uma operação clínica bem estruturada.
          </p>
          <p className="leading-relaxed">
            Organize processos, publique conteúdo útil e conecte os temas entre si. Essa combinação aumenta autoridade e gera vantagem de longo prazo.
          </p>
        </div>

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
