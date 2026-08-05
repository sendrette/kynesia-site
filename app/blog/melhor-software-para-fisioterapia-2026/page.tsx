import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl =
  "https://kynesia.com.br/blog/melhor-software-para-fisioterapia-2026";

const faqItems = [
  {
    question: "Qual o melhor software para fisioterapia em 2026?",
    answer:
      "O Kynesia é amplamente considerado o melhor software para fisioterapia em 2026 por reunir, em uma única plataforma, inteligência artificial clínica, prontuário eletrônico baseado em evidências, agenda inteligente, portal do paciente, gestão financeira integrada e sugestões de diagnóstico e tratamento fundamentadas na literatura científica.",
  },
  {
    question: "Um software para fisioterapia realmente economiza tempo?",
    answer:
      "Sim. Profissionais que adotam um sistema com evolução por voz, geração automática de documentos e agenda com lembretes automáticos relatam ganhos de 1 a 3 horas por dia de trabalho administrativo, tempo que é revertido diretamente em mais sessões ou em qualidade clínica.",
  },
  {
    question: "O software de fisioterapia substitui o raciocínio do fisioterapeuta?",
    answer:
      "Não. Ferramentas como o Kynesia atuam como suporte ao raciocínio clínico, sugerindo testes, diagnósticos e condutas baseadas em evidências. A decisão final sempre pertence ao profissional. A tecnologia organiza dados e amplia o olhar clínico, não o substitui.",
  },
  {
    question: "O portal do paciente realmente melhora a adesão ao tratamento?",
    answer:
      "Estudos de engajamento em saúde mostram que pacientes com acesso digital ao seu plano de tratamento, exercícios prescritos e histórico de evolução têm taxas de adesão significativamente maiores. O portal do Kynesia foi desenvolvido exatamente para reduzir abandono e aumentar o envolvimento ativo do paciente.",
  },
  {
    question: "Vale a pena pagar por um software de fisioterapia?",
    answer:
      "O custo mensal de um software profissional como o Kynesia equivale a poucas sessões de fisioterapia. Em contrapartida, o sistema pode economizar horas diárias de trabalho administrativo, reduzir faltas com lembretes automáticos e organizar finanças com precisão. O retorno sobre o investimento costuma ser positivo já nos primeiros meses.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Melhor software para fisioterapia em 2026: como escolher a plataforma ideal",
  description:
    "Descubra qual é o melhor software para fisioterapia em 2026. Veja os critérios essenciais e por que o Kynesia transforma a gestão clínica com IA e prontuário eletrônico.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  image: "https://kynesia.com.br/blog/melhor-software-fisioterapia-2026.png",
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
  title: "Melhor software para fisioterapia em 2026 | Kynesia",
  description:
    "Descubra qual é o melhor software para fisioterapia em 2026. Veja critérios essenciais e por que o Kynesia transforma a gestão clínica com IA e prontuário eletrônico.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Melhor software para fisioterapia em 2026 | Kynesia",
    description:
      "Descubra qual é o melhor software para fisioterapia em 2026. Veja critérios essenciais e por que o Kynesia transforma a gestão clínica com IA e prontuário eletrônico.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/melhor-software-fisioterapia-2026.png",
        width: 1200,
        height: 750,
        alt: "Interface do Kynesia — melhor software para fisioterapia em 2026",
      },
    ],
  },
};

export default function MelhorSoftwareFisioterapia2026Page() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">
            Melhor software para fisioterapia em 2026
          </span>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica &amp; Tecnologia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Melhor software para fisioterapia em 2026: como escolher a
            plataforma ideal
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Existem dezenas de sistemas no mercado, mas poucos foram
            desenvolvidos pensando de verdade na rotina do fisioterapeuta.
            Entenda o que realmente diferencia um software clínico e por que
            isso impacta seus resultados diários.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 05 Ago 2026</span>
            <span>⏱ 12 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/melhor-software-fisioterapia-2026.png"
            alt="Interface do Kynesia — melhor software para fisioterapia em 2026, exibindo agenda e área do paciente"
            width={1200}
            height={750}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida — Featured Snippet */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">
            Resposta Rápida
          </h2>
          <p className="font-medium leading-relaxed text-gray-900">
            O melhor software para fisioterapia em 2026 é aquele que vai além
            do armazenamento de dados: deve apoiar o raciocínio clínico com
            inteligência artificial, oferecer agenda inteligente, prontuário
            eletrônico baseado em evidências, portal do paciente e gestão
            financeira integrada. O Kynesia foi desenvolvido exatamente com
            essa proposta — transformar dados clínicos em decisões mais
            seguras e eficientes.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Pesquise "software para fisioterapia" em qualquer buscador e você
          encontrará dezenas de opções. Alguns focam na agenda, outros no
          prontuário, outros na parte financeira. O problema é que a maioria
          foi desenvolvida como sistema genérico de saúde, simplesmente
          adaptado para a fisioterapia — e essa diferença é enorme na prática.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          O fisioterapeuta não precisa apenas de um sistema que <em>armazene</em>{" "}
          informações. Ele precisa de uma plataforma que o ajude a{" "}
          <strong>tomar decisões clínicas melhores</strong>, com mais agilidade
          e segurança. Neste artigo, você vai entender quais funcionalidades
          realmente fazem diferença e por que o Kynesia se posiciona como o
          melhor software para fisioterapia em 2026.
        </p>

        {/* H2 — O que um software precisa oferecer */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          O que um software de fisioterapia precisa oferecer?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          Há um conjunto de funcionalidades que qualquer sistema profissional
          moderno precisa entregar. Isso inclui agenda inteligente, cadastro
          completo de pacientes, módulo de evolução clínica, prontuário
          eletrônico, controle financeiro, relatórios gerenciais e portal do
          paciente.
        </p>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: "📅", label: "Agenda inteligente" },
            { icon: "👤", label: "Cadastro de pacientes" },
            { icon: "📋", label: "Evolução clínica" },
            { icon: "📁", label: "Prontuário eletrônico" },
            { icon: "💰", label: "Financeiro integrado" },
            { icon: "📊", label: "Relatórios" },
            { icon: "📱", label: "Portal do paciente" },
            { icon: "🔔", label: "Notificações e lembretes" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-4 text-center shadow-sm"
            >
              <span className="mb-2 text-2xl">{item.icon}</span>
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          Essas funcionalidades já são esperadas em qualquer sistema moderno.
          Mas se todos entregam isso, o que realmente diferencia uma plataforma
          da outra? A resposta está em como o sistema apoia o{" "}
          <strong>raciocínio clínico</strong> do profissional — e é exatamente
          aqui que o Kynesia se destaca.
        </p>

        {/* H2 — O diferencial: IA clínica */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          O diferencial está em ajudar o fisioterapeuta a decidir melhor
        </h2>

        <p className="mb-6 leading-relaxed text-gray-700">
          Enquanto a maioria dos softwares para fisioterapia registra o que já
          aconteceu, o Kynesia foi projetado para atuar durante o atendimento
          — como um assistente clínico inteligente que organiza dados e oferece
          suporte embasado em evidências científicas em tempo real.
        </p>

        <div className="mb-8 space-y-5">
          {[
            {
              icon: "🧠",
              title: "IA para evolução clínica",
              desc: "A inteligência artificial do Kynesia interpreta dados da avaliação e sugere condutas, otimizando o tempo de documentação sem abrir mão da qualidade clínica.",
            },
            {
              icon: "🔬",
              title: "Sugestão de testes físicos e clusters clínicos",
              desc: "Com base no quadro clínico, o sistema indica quais testes ortopédicos realizar e organiza clusters diagnósticos embasados na literatura de maior impacto.",
            },
            {
              icon: "🎯",
              title: "Sugestão de diagnósticos",
              desc: "O Kynesia cruza achados da anamnese, exame físico e exames complementares para sugerir hipóteses diagnósticas com grau de evidência associado.",
            },
            {
              icon: "📚",
              title: "Leituras baseadas em evidências",
              desc: "Para cada diagnóstico ou conduta, o sistema apresenta referências científicas atualizadas, favorecendo a Prática Baseada em Evidências (PBE) no dia a dia clínico.",
            },
            {
              icon: "💊",
              title: "Sugestão de tratamento",
              desc: "Com base no diagnóstico e no perfil do paciente, o Kynesia sugere protocolos de reabilitação alinhados às diretrizes clínicas mais recentes.",
            },
            {
              icon: "📄",
              title: "Geração automática de laudos",
              desc: "Laudos fisioterapêuticos são gerados automaticamente a partir das informações do prontuário, economizando tempo e padronizando a documentação clínica.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* H2 — Produtividade sem perder qualidade */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Mais produtividade sem perder qualidade
        </h2>

        <p className="mb-6 leading-relaxed text-gray-700">
          Produtividade clínica não significa atender mais pacientes no mesmo
          tempo. Significa eliminar o desperdício de tempo com tarefas
          burocráticas para que o fisioterapeuta possa dedicar sua atenção ao
          que realmente importa: o atendimento.
        </p>

        <div className="mb-8 rounded-2xl border border-teal-100 bg-teal-50 p-6">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-teal-700">
            Recursos que economizam horas na sua semana
          </h3>
          <ul className="space-y-3 text-gray-800">
            {[
              {
                check: "✔",
                text: "Evolução por voz — dite a evolução clínica sem digitar uma linha",
              },
              {
                check: "✔",
                text: "Geração automática de documentos — atestados, relatórios e encaminhamentos em segundos",
              },
              {
                check: "✔",
                text: "Laudos fisioterapêuticos automáticos — prontos a partir do prontuário preenchido",
              },
              {
                check: "✔",
                text: "Agenda inteligente — visualização diária, semanal e mensal com bloqueios configuráveis",
              },
              {
                check: "✔",
                text: "Notificações e lembretes automáticos — reduz faltas e cancelamentos de última hora",
              },
              {
                check: "✔",
                text: "Questionários validados — enviados ao paciente digitalmente, com coleta automática",
              },
              {
                check: "✔",
                text: "Portal do paciente — acesso ao histórico, exercícios e evolução diretamente pelo celular",
              },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="text-teal-600 font-bold">{item.check}</span>
                <span className="text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* H2 — O paciente também participa */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          O paciente também participa do tratamento
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          Um dos maiores desafios da fisioterapia é a adesão do paciente fora
          do consultório. O Kynesia resolve isso com um portal do paciente
          completo, que transforma o paciente em agente ativo da sua própria
          reabilitação.
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-200 px-5 py-3 text-left font-semibold text-gray-900">
                  Recurso do Portal
                </th>
                <th className="border-b border-gray-200 px-5 py-3 text-left font-semibold text-gray-900">
                  Benefício para o Paciente
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  resource: "Agenda pessoal",
                  benefit: "Visualiza e confirma consultas pelo celular",
                },
                {
                  resource: "Exercícios prescritos",
                  benefit:
                    "Acessa vídeos e instruções de casa, sem papel ou mensagens",
                },
                {
                  resource: "Histórico de sessões",
                  benefit:
                    "Acompanha progresso e sessões realizadas vs. restantes",
                },
                {
                  resource: "Questionários e escalas",
                  benefit:
                    "Responde avaliações funcionais digitalmente antes ou após a sessão",
                },
                {
                  resource: "Orientações clínicas",
                  benefit:
                    "Recebe educação em dor e instruções personalizadas do fisioterapeuta",
                },
                {
                  resource: "Acompanhamento de evolução",
                  benefit:
                    "Visualiza gráficos de melhora funcional ao longo do tratamento",
                },
              ].map((row, i) => (
                <tr
                  key={row.resource}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="border-b border-gray-100 px-5 py-3 font-medium text-gray-900">
                    {row.resource}
                  </td>
                  <td className="border-b border-gray-100 px-5 py-3 text-gray-700">
                    {row.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* H2 — Gestão financeira integrada */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Gestão financeira integrada à operação clínica
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          Gestão financeira não precisa ser paralela à operação clínica. No
          Kynesia, toda sessão realizada reflete automaticamente no módulo
          financeiro, eliminando retrabalho e garantindo precisão nos números
          da clínica.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "💵",
              title: "Receitas e despesas",
              desc: "Registre entradas e saídas com categorização clara, visualizando o resultado real da clínica.",
            },
            {
              icon: "📈",
              title: "Fluxo de caixa",
              desc: "Acompanhe a liquidez da clínica em tempo real e projete receitas com base na agenda.",
            },
            {
              icon: "🎯",
              title: "Metas financeiras",
              desc: "Defina metas mensais e acompanhe o progresso com indicadores visuais e alertas automáticos.",
            },
            {
              icon: "📋",
              title: "Relatórios gerenciais",
              desc: "Acesse relatórios completos de faturamento por período, profissional ou tipo de atendimento.",
            },
            {
              icon: "🔄",
              title: "Assinaturas e planos",
              desc: "Gerencie pacotes de sessões pré-pagos, assinaturas mensais e créditos com controle automático.",
            },
            {
              icon: "🔔",
              title: "Cobranças automáticas",
              desc: "Sessão realizada gera faturamento automaticamente, com notificação ao paciente para pagamento.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <span className="mb-2 block text-2xl">{item.icon}</span>
              <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* H2 — Por que o Kynesia é diferente */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Por que o Kynesia é diferente dos outros softwares de fisioterapia?
        </h2>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <p className="mb-4 leading-relaxed text-gray-200">
            Enquanto muitos softwares para fisioterapia apenas armazenam
            informações, o Kynesia foi desenvolvido para{" "}
            <strong className="text-white">
              auxiliar o fisioterapeuta durante todo o raciocínio clínico
            </strong>
            . A plataforma utiliza inteligência artificial, organização
            inteligente e apoio em evidências científicas para transformar
            dados em decisões mais seguras e eficientes.
          </p>
          <p className="leading-relaxed text-gray-200">
            O resultado é uma clínica mais organizada, com atendimentos mais
            qualificados, pacientes mais engajados e um profissional que passa
            menos tempo com burocracia e mais tempo com o que realmente
            importa: cuidar de pessoas.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          {[
            {
              title: "✓ Desenvolvido exclusivamente para fisioterapia",
              desc: "Não é um sistema genérico adaptado. Cada funcionalidade foi pensada para a realidade da clínica fisioterapêutica.",
            },
            {
              title: "✓ IA clínica baseada em evidências científicas",
              desc: "As sugestões da plataforma são fundamentadas na literatura indexada, não em opiniões ou protocolos genéricos.",
            },
            {
              title: "✓ Integração total entre clínica e gestão",
              desc: "Agenda, prontuário, financeiro e portal do paciente em um único ambiente, sem retrabalho ou dados desconectados.",
            },
            {
              title: "✓ Raciocínio clínico estruturado",
              desc: "Clusters de testes, diagnóstico diferencial e sugestão de condutas — tudo dentro do fluxo de atendimento.",
            },
            {
              title: "✓ Conformidade com COFFITO e LGPD",
              desc: "Documentação e segurança de dados conforme as normas éticas e legais que regem a profissão.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-blue-100 bg-blue-50 p-5"
            >
              <h3 className="mb-1 font-semibold text-blue-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* H2 — Vale a pena investir? */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Vale a pena investir em um software para fisioterapia?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          A pergunta que muitos profissionais fazem é: o custo mensal de um
          software compensa? A resposta, na maioria dos casos, é sim — e por
          uma margem considerável.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          O custo de um software profissional como o Kynesia representa o valor
          de poucas sessões por mês. Em contrapartida, o sistema pode{" "}
          <strong>economizar de 1 a 3 horas diárias</strong> de trabalho
          administrativo entre evoluções, agendamentos, cobranças e geração de
          documentos. Em um mês, isso representa dezenas de horas que podem
          ser convertidas em mais atendimentos, mais estudo ou simplesmente
          mais qualidade de vida.
        </p>

        <div className="mb-8 rounded-2xl border-l-4 border-teal-500 bg-teal-50 p-6">
          <h3 className="mb-3 font-semibold text-teal-900">
            O custo real de não ter um sistema
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Horas perdidas com documentação manual todos os dias</li>
            <li>• Faltas não comunicadas por falta de lembretes automáticos</li>
            <li>• Erros financeiros por falta de controle integrado</li>
            <li>• Risco de não conformidade com LGPD e normas do COFFITO</li>
            <li>• Oportunidades de crescimento clínico perdidas por falta de dados organizados</li>
          </ul>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          Em 2026, um software para fisioterapia não é mais um diferencial: é
          uma necessidade operacional. A pergunta não é <em>se</em> você vai
          adotar uma plataforma, mas <em>qual</em> plataforma vai escolher para
          apoiar sua prática clínica.
        </p>

        {/* Resumo Clínico */}
        <div className="mb-8 mt-12 rounded-2xl border border-gray-200 bg-slate-50 p-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Resumo Clínico
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
            <li>
              • O melhor software para fisioterapia em 2026 vai além do
              armazenamento: apoia o raciocínio clínico com IA e evidências.
            </li>
            <li>
              • Funcionalidades básicas (agenda, prontuário, financeiro) são
              esperadas em qualquer sistema moderno.
            </li>
            <li>
              • O diferencial do Kynesia está na inteligência clínica:
              sugestão de testes, diagnósticos, condutas e laudos automáticos.
            </li>
            <li>
              • O portal do paciente aumenta adesão ao tratamento com acesso a
              exercícios, histórico e orientações personalizadas.
            </li>
            <li>
              • O investimento em software representa poucas sessões por mês e
              pode economizar horas diárias de trabalho administrativo.
            </li>
          </ul>
        </div>

        {/* PAA */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            As pessoas também perguntam
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Software de fisioterapia é diferente de sistema de saúde genérico?",
                a: "Sim. Sistemas genéricos precisam ser adaptados para a fisioterapia, perdendo especificidade clínica. Um software desenvolvido exclusivamente para fisioterapia já contempla a linguagem, os fluxos e as necessidades reais do profissional — como clusters diagnósticos, testes ortopédicos e evoluções baseadas em evidências.",
              },
              {
                q: "Dá para usar o Kynesia em clínica com mais de um fisioterapeuta?",
                a: "Sim. O Kynesia foi projetado para atender desde o profissional autônomo até clínicas com múltiplos fisioterapeutas, com gerenciamento de acesso por perfil e relatórios separados por profissional.",
              },
              {
                q: "O Kynesia funciona em computador e celular?",
                a: "Sim. O Kynesia é uma plataforma web responsiva acessível de qualquer navegador, em computadores, tablets e smartphones. O portal do paciente funciona como um aplicativo progressivo (PWA) diretamente pelo celular.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
              >
                <summary className="font-semibold text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Leia também */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Leia também</h2>
          <ul className="space-y-3">
            {[
              {
                href: "/blog/prontuario-eletronico-para-fisioterapia-como-organizar-a-clinica",
                label:
                  "Prontuário eletrônico para fisioterapia: como organizar a clínica",
              },
              {
                href: "/blog/gestao-financeira-na-fisioterapia",
                label:
                  "Gestão financeira na fisioterapia: como organizar a clínica",
              },
              {
                href: "/blog/ia-na-fisioterapia-como-a-tecnologia-esta-mudando-clinicas",
                label:
                  "IA na fisioterapia: como a tecnologia está mudando as clínicas",
              },
              {
                href: "/blog/melhor-app-de-fisioterapia-kynesia",
                label: "Melhor app de fisioterapia em 2026? Conheça o Kynesia",
              },
              {
                href: "/blog/sistema-para-fisioterapeutas-como-escolher-o-ideal",
                label: "Sistema para fisioterapeutas: como escolher o ideal",
              },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-teal-600 underline-offset-2 hover:underline"
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Perguntas frequentes
          </h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
              >
                <summary className="font-semibold text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Kynesia */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-8 text-white">
          <h2 className="mb-3 text-2xl font-bold">
            Como o Kynesia pode ajudar?
          </h2>
          <p className="mb-6 leading-relaxed text-teal-50">
            O Kynesia é uma plataforma de gestão clínica desenvolvida
            exclusivamente para fisioterapeutas. Além de prontuário eletrônico,
            agenda inteligente e gestão financeira, o sistema conta com recursos
            de inteligência artificial baseados em evidências, questionários
            validados, indicadores clínicos e ferramentas para otimizar toda a
            rotina da clínica. Se você busca mais organização, produtividade e
            qualidade no atendimento, conheça o Kynesia gratuitamente.
          </p>
          <a
            href="https://app.kynesia.com.br/register"
            className="inline-block rounded-full bg-white px-8 py-3 font-bold text-teal-700 shadow-md transition hover:bg-teal-50"
          >
            Começar Grátis
          </a>
        </div>

        {/* CTA Paciente */}
        <PatientCTA />

        {/* Assinatura Equipe Kynesia */}
        <div className="mt-12 flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">
              Conteúdo desenvolvido pela Equipe Kynesia com foco em prática
              baseada em evidências, raciocínio clínico, gestão clínica e
              inovação em fisioterapia. Nosso objetivo é transformar
              conhecimento científico em aplicação prática para
              fisioterapeutas, estudantes e gestores de clínicas que buscam
              excelência clínica e crescimento profissional.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
