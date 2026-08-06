import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl =
  "https://kynesia.com.br/blog/prontuario-eletronico-fisioterapia-como-escolher-2026";

const faqItems = [
  {
    question: "O que é um prontuário eletrônico para fisioterapia?",
    answer:
      "É um sistema digital que substitui o prontuário em papel, centralizando informações clínicas do paciente — anamnese, evolução, exames, prescrições e histórico de atendimentos — em uma plataforma segura, acessível e em conformidade com as normas do COFFITO e da LGPD.",
  },
  {
    question: "Qual é o melhor prontuário eletrônico para fisioterapia em 2026?",
    answer:
      "O melhor prontuário eletrônico para fisioterapia em 2026 é aquele que vai além do armazenamento de dados: deve oferecer agenda integrada, inteligência artificial clínica, área do paciente, gestão financeira e suporte à Prática Baseada em Evidências. O Kynesia reúne todos esses recursos em uma única plataforma desenvolvida exclusivamente para fisioterapeutas.",
  },
  {
    question: "Prontuário eletrônico para fisioterapia é obrigatório?",
    answer:
      "O COFFITO exige que o fisioterapeuta mantenha prontuário de todos os pacientes atendidos. Embora o formato eletrônico não seja obrigatório por lei, ele é fortemente recomendado por garantir maior segurança, conformidade, rastreabilidade e eficiência na documentação clínica.",
  },
  {
    question: "Um software de fisioterapia com inteligência artificial substitui o raciocínio clínico?",
    answer:
      "Não. A inteligência artificial presente em plataformas como o Kynesia atua como suporte ao raciocínio clínico do fisioterapeuta, sugerindo testes, diagnósticos e condutas baseadas em evidências. A decisão clínica final é sempre do profissional. A tecnologia organiza dados e amplia o olhar clínico.",
  },
  {
    question: "Como a área do paciente melhora os resultados do tratamento?",
    answer:
      "Pacientes que têm acesso digital ao seu plano de tratamento, exercícios prescritos e histórico de evolução apresentam maior adesão terapêutica. Estudos de engajamento em saúde mostram que a transparência e o acesso à informação são fatores determinantes na continuidade do tratamento.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Prontuário Eletrônico para Fisioterapia: Como Escolher o Melhor Sistema em 2026",
  description:
    "Saiba como escolher o melhor prontuário eletrônico para fisioterapia em 2026. Conheça os critérios essenciais e como o Kynesia reúne IA, agenda, financeiro e gestão clínica.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  image:
    "https://kynesia.com.br/blog/prontuario-eletronico-fisioterapia-2026.png",
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
  title: "Prontuário Eletrônico para Fisioterapia: Como Escolher em 2026 | Kynesia",
  description:
    "Saiba como escolher o melhor prontuário eletrônico para fisioterapia em 2026. Conheça os critérios essenciais e como o Kynesia reúne IA, agenda, financeiro e gestão clínica.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Prontuário Eletrônico para Fisioterapia: Como Escolher em 2026 | Kynesia",
    description:
      "Saiba como escolher o melhor prontuário eletrônico para fisioterapia em 2026. Conheça os critérios essenciais e como o Kynesia reúne IA, agenda, financeiro e gestão clínica.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/prontuario-eletronico-fisioterapia-2026.png",
        width: 1200,
        height: 750,
        alt: "Interface do Kynesia — prontuário eletrônico para fisioterapia em 2026",
      },
    ],
  },
};

export default function ProntuarioEletronicoFisioterapia2026Page() {
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
            Prontuário Eletrônico para Fisioterapia em 2026
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
            Prontuário Eletrônico para Fisioterapia: Como Escolher o Melhor
            Sistema em 2026
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            A documentação clínica evoluiu. Entenda quais critérios definem um
            prontuário eletrônico realmente eficiente para fisioterapia e como
            a escolha certa impacta a qualidade do atendimento, a produtividade
            e os resultados dos pacientes.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 06 Ago 2026</span>
            <span>⏱ 13 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/prontuario-eletronico-fisioterapia-2026.png"
            alt="Interface do Kynesia mostrando prontuário eletrônico para fisioterapia, agenda inteligente e área do paciente"
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
            O melhor prontuário eletrônico para fisioterapia é aquele que reúne
            agenda inteligente, prontuário completo, inteligência artificial,
            financeiro, área do paciente e gestão clínica em uma única
            plataforma — aumentando a produtividade e melhorando a qualidade do
            atendimento.
          </p>
        </div>

        {/* Introdução */}
        <p className="mb-5 leading-relaxed text-gray-700">
          A maioria dos fisioterapeutas ainda enfrenta o mesmo dilema: prontuários
          em papel empilhados, evoluções registradas manualmente após cada sessão,
          controle financeiro em planilhas desatualizadas e comunicação com o
          paciente feita por aplicativos de mensagem pessoal. Essa fragmentação
          não é apenas desconfortável — ela representa um risco clínico e
          operacional real.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Em 2026, o mercado oferece dezenas de opções de{" "}
          <strong>prontuário eletrônico para fisioterapia</strong>. Algumas são
          adaptações de sistemas genéricos de saúde; outras foram desenvolvidas
          especificamente para a realidade da clínica fisioterapêutica. A
          diferença entre elas é enorme na prática diária.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, você vai entender o que caracteriza um bom sistema de
          prontuário eletrônico para fisioterapia, quais funcionalidades fazem
          diferença real no atendimento e por que a inteligência artificial
          passou a ser um critério relevante na escolha de uma plataforma
          clínica.
        </p>

        {/* H2 — O que é um prontuário eletrônico */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          O que é um prontuário eletrônico para fisioterapia?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          O prontuário eletrônico é o registro digital de todas as informações
          clínicas de um paciente: anamnese, diagnóstico fisioterapêutico,
          evolução das sessões, escalas e questionários validados, plano de
          tratamento, exames complementares e documentos clínicos.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Em fisioterapia, um prontuário eletrônico bem estruturado vai além do
          simples registro de dados. Ele deve apoiar o raciocínio clínico,
          facilitar a comunicação entre profissional e paciente, garantir
          conformidade com as normas do COFFITO e da LGPD, e integrar-se à
          operação administrativa da clínica.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Diferente do prontuário médico, o prontuário fisioterapêutico tem
          particularidades importantes: evolução funcional por sessão,
          aplicação de testes ortopédicos e neurológicos, uso de escalas
          validadas como ODI, DASH, Lysholm e NPRS, além de registro de
          condutas e protocolos de reabilitação com embasamento científico.
        </p>

        {/* H2 — Por que abandonar papel */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Por que abandonar o prontuário em papel?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          O prontuário físico em papel apresenta limitações que vão muito além
          do incômodo de carregar pastas. Do ponto de vista clínico e legal, os
          riscos são concretos.
        </p>

        <div className="mb-8 rounded-2xl border-l-4 border-red-400 bg-red-50 p-6">
          <h3 className="mb-4 text-base font-semibold text-red-900">
            Limitações do prontuário em papel
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>Risco de perda e deterioração:</strong> documentos físicos
              estão sujeitos a danos irreversíveis por umidade, incêndio ou
              extravio.
            </li>
            <li>
              <strong>Ausência de busca e indexação:</strong> localizar uma
              evolução específica de meses anteriores exige tempo considerável e
              retrabalho.
            </li>
            <li>
              <strong>Baixa rastreabilidade:</strong> não há registro automático
              de quem acessou ou alterou uma informação clínica.
            </li>
            <li>
              <strong>Não conformidade com LGPD:</strong> o armazenamento físico
              de dados sensíveis de saúde exige controles que o papel não
              oferece adequadamente.
            </li>
            <li>
              <strong>Impossibilidade de análise de dados:</strong> sem
              digitalização, não há como gerar indicadores de desempenho clínico
              ou identificar padrões entre pacientes.
            </li>
            <li>
              <strong>Tempo elevado de documentação:</strong> preencher
              prontuários manualmente após cada atendimento consome parte
              significativa da carga horária do profissional.
            </li>
          </ul>
        </div>

        {/* H2 — Quais recursos um bom software precisa oferecer */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Quais recursos um bom software de fisioterapia precisa oferecer?
        </h2>

        <p className="mb-6 leading-relaxed text-gray-700">
          Antes de comparar plataformas, é fundamental entender quais
          funcionalidades são indispensáveis para uma clínica de fisioterapia
          moderna. Um sistema que atende apenas parte dessas necessidades obriga
          o profissional a manter ferramentas paralelas, o que recria o problema
          da fragmentação.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Agenda inteligente
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A agenda é o ponto central de qualquer operação clínica. Um bom
          sistema deve permitir visualização diária, semanal e mensal,
          configuração de intervalos entre sessões, bloqueio de horários,
          lembretes automáticos para o paciente e controle de presença e
          cancelamentos — tudo integrado ao prontuário, sem necessidade de
          reentrada de dados.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Prontuário e evoluções clínicas
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O núcleo do sistema. Deve oferecer anamnese estruturada para
          fisioterapia, modelos de evolução personalizáveis (incluindo SOAP),
          histórico completo acessível por sessão, upload de exames e imagens,
          e registro de testes ortopédicos e neurológicos. A evolução por voz
          — que permite ao fisioterapeuta ditar o registro clínico — representa
          um ganho expressivo de tempo na rotina de atendimento.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Questionários e escalas validadas
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A Prática Baseada em Evidências exige mensuração de desfechos. Um
          software de fisioterapia moderno deve disponibilizar escalas validadas
          como ODI, DASH, NPRS, Lysholm, PSFS e outras, com envio digital ao
          paciente e geração automática de gráficos de evolução. Isso transforma
          dados subjetivos em indicadores clínicos objetivos e comunicáveis.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Gestão financeira integrada
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Controle de receitas e despesas, fluxo de caixa, metas mensais,
          faturamento por sessão, planos e assinaturas de pacotes — tudo
          integrado ao prontuário. Quando uma sessão é realizada, o sistema
          deve registrar automaticamente o faturamento correspondente, sem
          retrabalho administrativo.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Relatórios clínicos e gerenciais
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Indicadores como taxa de comparecimento, tempo médio de alta, receita
          por período, sessões realizadas versus canceladas e desempenho por
          profissional são fundamentais para a gestão de uma clínica. Sistemas
          modernos geram esses relatórios automaticamente, sem necessidade de
          planilhas externas.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Área do paciente
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um portal do paciente integrado ao sistema clínico é um diferencial
          relevante na adesão ao tratamento. O paciente deve conseguir
          visualizar seus próximos horários, acessar exercícios prescritos,
          acompanhar sessões realizadas e restantes, responder questionários e
          receber orientações clínicas — tudo em um ambiente seguro e
          personalizado pelo fisioterapeuta.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Exercícios personalizados
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A prescrição de exercícios domiciliares é parte central do tratamento
          fisioterapêutico. O sistema deve permitir a prescrição digital de
          exercícios com vídeos explicativos, número de séries, repetições e
          instruções específicas — acessíveis pelo paciente via portal, sem
          necessidade de papel ou aplicativos externos.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Leitura e interpretação de exames
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A capacidade de fazer upload e interpretar exames de imagem —
          ressonâncias, radiografias, laudos — diretamente no prontuário, com
          cruzamento de dados com a avaliação física, representa um avanço
          significativo na qualidade do raciocínio clínico.
        </p>

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Inteligência artificial baseada em evidências
        </h3>
        <p className="mb-8 leading-relaxed text-gray-700">
          Plataformas de nova geração utilizam inteligência artificial para
          sugerir testes clínicos, hipóteses diagnósticas e condutas
          terapêuticas com base na literatura científica indexada. Isso não
          substitui o fisioterapeuta — amplia seu repertório clínico e reduz o
          risco de vieses cognitivos na tomada de decisão.
        </p>

        {/* H2 — IA na fisioterapia */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Como a Inteligência Artificial está transformando a fisioterapia?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          A inteligência artificial aplicada à fisioterapia clínica é uma
          realidade em 2026. Não se trata de tecnologia futurista: trata-se de
          algoritmos que processam dados clínicos, cruzam com a literatura
          científica e oferecem suporte estruturado ao raciocínio do
          fisioterapeuta durante o atendimento.
        </p>

        <div className="mb-8 space-y-5">
          {[
            {
              title: "Auxílio ao raciocínio clínico",
              desc: "A plataforma analisa os dados inseridos na avaliação — queixas, histórico, testes realizados — e sugere clusters diagnósticos, testes complementares e hipóteses a serem consideradas, com o grau de evidência correspondente.",
            },
            {
              title: "Leitura automática de exames",
              desc: "Laudos de ressonância magnética, ultrassonografia e outros exames de imagem podem ser interpretados pela IA e cruzados com os achados da avaliação física, gerando uma leitura integrada que enriquece o raciocínio clínico.",
            },
            {
              title: "Sugestões clínicas baseadas em evidências",
              desc: "Com base no diagnóstico fisioterapêutico, o sistema sugere condutas, protocolos e progressões de tratamento fundamentadas nas diretrizes clínicas mais atuais — reduzindo a dependência de memória e minimizando vieses de confirmação.",
            },
            {
              title: "Dashboard científica por paciente",
              desc: "Cada paciente possui um painel individualizado com suas escalas respondidas, gráficos de evolução funcional, achados de testes e literatura associada ao seu quadro clínico — tudo centralizado e acessível durante o atendimento.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* H2 — O que o paciente ganha */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          O que o paciente ganha com uma plataforma moderna?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          O impacto de um bom sistema de prontuário eletrônico não se limita ao
          profissional. O paciente percebe diretamente a diferença na qualidade
          e na experiência do tratamento.
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-200 px-5 py-3 text-left font-semibold text-gray-900">
                  Recurso
                </th>
                <th className="border-b border-gray-200 px-5 py-3 text-left font-semibold text-gray-900">
                  Experiência do paciente
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  resource: "Portal do paciente",
                  benefit:
                    "Acessa o histórico, agenda e evolução de qualquer dispositivo",
                },
                {
                  resource: "Exercícios prescritos",
                  benefit:
                    "Visualiza vídeos e instruções de casa, sem papel ou mensagens avulsas",
                },
                {
                  resource: "Sessões realizadas e restantes",
                  benefit:
                    "Acompanha o progresso do plano de tratamento com transparência",
                },
                {
                  resource: "Próximos horários",
                  benefit:
                    "Recebe lembretes automáticos e confirma presença pelo portal",
                },
                {
                  resource: "Questionários digitais",
                  benefit:
                    "Responde escalas funcionais antes da sessão, sem papel ou caneta",
                },
                {
                  resource: "Módulo Entenda sua Dor",
                  benefit:
                    "Acessa educação em dor personalizada pelo fisioterapeuta",
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

        {/* H2 — O que o fisioterapeuta ganha */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          O que o fisioterapeuta ganha com um prontuário eletrônico completo?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          Do ponto de vista profissional, os ganhos de um sistema integrado são
          mensuráveis. Não se trata apenas de conforto operacional — trata-se
          de impacto direto na qualidade clínica e na sustentabilidade do
          negócio.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Redução do tempo administrativo",
              desc: "Evoluções por voz, documentos gerados automaticamente e agenda integrada eliminam horas de retrabalho semanal.",
            },
            {
              title: "Raciocínio clínico mais estruturado",
              desc: "Sugestões de testes, diagnósticos e condutas baseadas em evidências reduzem o risco de vieses cognitivos no atendimento.",
            },
            {
              title: "Conformidade legal garantida",
              desc: "Documentação conforme COFFITO e LGPD, com rastreabilidade de acessos e armazenamento seguro de dados clínicos sensíveis.",
            },
            {
              title: "Controle financeiro preciso",
              desc: "Receitas, despesas, metas e relatórios gerenciais integrados ao prontuário, sem planilhas paralelas.",
            },
            {
              title: "Maior adesão dos pacientes",
              desc: "Portal do paciente com exercícios, histórico e lembretes reduz abandono e aumenta o engajamento terapêutico.",
            },
            {
              title: "Indicadores de desempenho",
              desc: "Taxa de presença, tempo médio de alta, receita por período e outros indicadores disponíveis automaticamente.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* H2 — Por que o Kynesia reúne todos esses recursos */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Por que o Kynesia reúne todos esses recursos em uma única plataforma?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          O Kynesia não é uma adaptação de sistema genérico de saúde. Foi
          desenvolvido do zero para a realidade da fisioterapia, com cada
          funcionalidade pensada a partir das necessidades reais do
          fisioterapeuta — desde o raciocínio clínico até a gestão financeira
          da clínica.
        </p>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <p className="mb-4 leading-relaxed text-gray-200">
            Enquanto a maioria dos softwares para fisioterapia apenas armazena
            informações, o Kynesia foi desenvolvido para{" "}
            <strong className="text-white">
              apoiar o fisioterapeuta durante todo o raciocínio clínico
            </strong>
            . A plataforma utiliza inteligência artificial, organização
            inteligente e embasamento em evidências científicas para transformar
            dados clínicos em decisões mais seguras e eficientes.
          </p>
          <p className="leading-relaxed text-gray-200">
            O resultado é uma clínica mais organizada, atendimentos mais
            qualificados, pacientes mais engajados e um profissional que passa
            menos tempo com burocracia e mais tempo com o que realmente
            importa.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          {[
            {
              title: "Prontuário eletrônico completo e conforme COFFITO",
              desc: "Anamnese estruturada para fisioterapia, modelos de evolução personalizáveis, histórico por sessão, upload de exames e documentação em conformidade com as normas éticas da profissão.",
            },
            {
              title: "Agenda inteligente com controle de presença",
              desc: "Visualização diária, semanal e mensal, lembretes automáticos, controle de faltas e cancelamentos — tudo integrado ao prontuário do paciente.",
            },
            {
              title: "Inteligência artificial baseada em evidências científicas",
              desc: "Sugestão de testes ortopédicos, clusters diagnósticos, hipóteses clínicas e condutas terapêuticas fundamentadas na literatura de maior impacto.",
            },
            {
              title: "Área do paciente com exercícios personalizados",
              desc: "Portal exclusivo onde o paciente acessa exercícios prescritos em vídeo, histórico de sessões, próximos horários, questionários e orientações clínicas.",
            },
            {
              title: "Gestão financeira integrada ao prontuário",
              desc: "Controle de receitas, despesas, metas, relatórios e assinaturas de pacotes — sem planilhas externas e com integração direta às sessões realizadas.",
            },
            {
              title: "Relatórios clínicos e gerenciais automáticos",
              desc: "Indicadores de desempenho clínico e financeiro gerados automaticamente, com dados em tempo real para embasar decisões de gestão.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-blue-100 bg-blue-50 p-5"
            >
              <h3 className="mb-1 font-semibold text-blue-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* H2 — Conclusão */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">
          Como escolher o prontuário eletrônico certo para a sua clínica?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          A decisão por um software de fisioterapia é estratégica, não apenas
          operacional. Antes de contratar qualquer plataforma, avalie se ela
          atende aos critérios abaixo:
        </p>

        <div className="mb-8 space-y-3">
          {[
            "Prontuário desenvolvido especificamente para fisioterapia, não adaptado de sistema médico genérico",
            "Integração real entre prontuário, agenda e financeiro — não apenas módulos isolados",
            "Conformidade com COFFITO e LGPD, com rastreabilidade e criptografia de dados",
            "Área do paciente funcional, com exercícios, histórico e questionários digitais",
            "Inteligência artificial com embasamento científico, não apenas automação de texto",
            "Relatórios clínicos e financeiros automáticos, sem necessidade de planilhas externas",
            "Período de teste gratuito e suporte especializado em fisioterapia",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-teal-100 bg-teal-50 p-4"
            >
              <span className="mt-0.5 flex-shrink-0 text-teal-600 font-bold text-sm">
                ✓
              </span>
              <p className="text-sm leading-relaxed text-gray-800">{item}</p>
            </div>
          ))}
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          Em 2026, um prontuário eletrônico para fisioterapia não é mais um
          diferencial competitivo — é uma exigência operacional. A pergunta
          relevante não é se você vai adotar um sistema digital, mas qual
          plataforma vai escolher para suportar sua prática clínica com a
          qualidade que seus pacientes merecem.
        </p>

        {/* Resumo Clínico */}
        <div className="mb-8 mt-12 rounded-2xl border border-gray-200 bg-slate-50 p-6">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            Resumo Clínico
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
            <li>
              O prontuário eletrônico para fisioterapia deve ir além do
              registro: precisa apoiar o raciocínio clínico e integrar toda a
              operação da clínica.
            </li>
            <li>
              Funcionalidades como evolução por voz, escalas validadas e
              geração automática de documentos reduzem significativamente o
              tempo administrativo.
            </li>
            <li>
              A inteligência artificial em plataformas como o Kynesia sugere
              testes, diagnósticos e condutas baseados em evidências, sem
              substituir o raciocínio do profissional.
            </li>
            <li>
              A área do paciente com exercícios, histórico e orientações
              personalizadas é determinante para a adesão ao tratamento.
            </li>
            <li>
              O Kynesia reúne prontuário eletrônico, agenda, IA clínica,
              financeiro e portal do paciente em uma única plataforma
              desenvolvida exclusivamente para fisioterapia.
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
                q: "Qual a diferença entre prontuário eletrônico e software de gestão clínica?",
                a: "O prontuário eletrônico registra informações clínicas do paciente. O software de gestão clínica integra prontuário, agenda, financeiro e relatórios em uma única plataforma. Sistemas modernos como o Kynesia oferecem ambos de forma integrada, eliminando a necessidade de ferramentas separadas.",
              },
              {
                q: "O prontuário eletrônico do Kynesia funciona no celular?",
                a: "Sim. O Kynesia é uma plataforma web responsiva acessível de qualquer navegador, em computadores, tablets e smartphones. A área do paciente funciona como um aplicativo progressivo (PWA) no celular, sem necessidade de instalação.",
              },
              {
                q: "Como a evolução por voz funciona no prontuário eletrônico?",
                a: "A evolução por voz permite ao fisioterapeuta ditar o registro clínico da sessão oralmente, enquanto o sistema transcreve automaticamente o texto. Isso reduz significativamente o tempo de documentação e permite manter atenção plena no paciente durante o atendimento.",
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
                href: "/blog/melhor-app-de-fisioterapia-kynesia",
                label: "Melhor App de Fisioterapia em 2026? Conheça o Kynesia",
              },
              {
                href: "/blog/ia-na-fisioterapia-como-a-tecnologia-esta-mudando-clinicas",
                label: "Inteligência Artificial na Fisioterapia: como a tecnologia está mudando as clínicas",
              },
              {
                href: "/blog/como-precificar-sessoes-de-fisioterapia",
                label: "Como Precificar Sessões de Fisioterapia: guia prático",
              },
              {
                href: "/blog/escalas-e-questionarios-validados-na-fisioterapia",
                label: "Escalas e Questionários Validados na Fisioterapia",
              },
              {
                href: "/blog/soap-na-fisioterapia-evolucao-clinica",
                label: "SOAP na Fisioterapia: como fazer a evolução clínica corretamente",
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
            exclusivamente para fisioterapeutas. Além de prontuário eletrônico
            completo e conforme COFFITO, o sistema oferece agenda inteligente,
            inteligência artificial baseada em evidências, questionários
            validados, área do paciente com exercícios prescritos e gestão
            financeira integrada. Se você busca mais organização, produtividade
            e qualidade no atendimento, conheça o Kynesia gratuitamente.
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
