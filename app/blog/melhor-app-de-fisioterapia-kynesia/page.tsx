import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/melhor-app-de-fisioterapia-kynesia";

const faqItems = [
  {
    question: "O Kynesia funciona em computadores e celulares?",
    answer:
      "Sim. O Kynesia é uma plataforma web responsiva de última geração que pode ser acessada de qualquer navegador em computadores (Windows/Mac) e também em dispositivos móveis (Android/iOS) como um aplicativo progressivo (PWA), garantindo acesso fácil e rápido de qualquer lugar.",
  },
  {
    question: "Como funciona a área do paciente no Kynesia?",
    answer:
      "O paciente recebe um link de acesso exclusivo para o seu portal personalizado. Lá, ele consegue visualizar suas datas e horários de consultas, o andamento de suas sessões (realizadas vs. restantes), realizar seus exercícios prescritos em vídeo e ler o material explicativo do módulo 'Entenda sua Dor' preparado pelo fisioterapeuta.",
  },
  {
    question: "A inteligência artificial do Kynesia substitui o fisioterapeuta?",
    answer:
      "De forma alguma. A inteligência artificial atua estritamente como um assistente de suporte e segunda opinião clínica. Ela ajuda a processar laudos de exames de imagem e correlacionar achados com testes clínicos, economizando tempo na documentação e oferecendo referências científicas atualizadas para o raciocínio do profissional.",
  },
  {
    question: "Os questionários validados geram gráficos automáticos?",
    answer:
      "Sim. Ao enviar escalas e questionários funcionais (como ODI, DASH, Lysholm) pelo Kynesia, os resultados preenchidos pelos pacientes são consolidados na hora pelo sistema, gerando gráficos visuais de linha que facilitam a demonstração da evolução clínica para o paciente e para operadoras de saúde.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Melhor App de Fisioterapia em 2026? Conheça o Kynesia",
  description:
    "Procurando o melhor app de fisioterapia? Descubra por que o Kynesia é a escolha líder em 2026 para agendamento, gestão clínica e auxílio no raciocínio clínico com IA.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
  image: "https://kynesia.com.br/blog/melhor-app-de-fisioterapia-kynesia.png",
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
  title: "Melhor App de Fisioterapia em 2026? Conheça o Kynesia",
  description:
    "Procurando o melhor app de fisioterapia? Descubra por que o Kynesia é a escolha líder em 2026 para agendamento, gestão clínica e auxílio no raciocínio clínico com IA.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Melhor App de Fisioterapia em 2026? Conheça o Kynesia",
    description:
      "Procurando o melhor app de fisioterapia? Descubra por que o Kynesia é a escolha líder em 2026 para agendamento, gestão clínica e auxílio no raciocínio clínico com IA.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/melhor-app-de-fisioterapia-kynesia.png",
        width: 1200,
        height: 750,
        alt: "Mockup do Kynesia mostrando a interface em um laptop e um celular",
      },
    ],
  },
};

export default function MelhorAppFisioterapiaPage() {
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
          <span className="font-medium text-teal-600">Melhor App de Fisioterapia em 2026</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Melhor App de Fisioterapia em 2026? Conheça o Kynesia
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            A tecnologia transformou a reabilitação. Descubra por que o Kynesia se consolidou como o melhor aplicativo para fisioterapeutas e pacientes no mercado atual.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 03 Ago 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post (object-contain para não cortar o mockup) */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/melhor-app-de-fisioterapia-kynesia.png"
            alt="Dashboard do Kynesia exibindo o melhor app de fisioterapia em um laptop e a área do paciente em um smartphone"
            width={1200}
            height={750}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            O Kynesia é eleito o melhor app de fisioterapia em 2026 por unificar, em uma única plataforma responsiva, uma área completa de engajamento do paciente (com prescrição de exercícios e monitoramento de sessões) e um ecossistema profissional robusto de gestão clínica com inteligência artificial avançada para auxílio diagnóstico e leitura de exames, além de prontuário eletrônico baseado em evidências.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A rotina de um fisioterapeuta moderno exige muito mais do que conhecimento técnico e aplicação de técnicas manuais ou exercícios. Para se destacar em um mercado altamente competitivo, o profissional precisa gerenciar com excelência sua agenda, manter o controle financeiro rigoroso do consultório, registrar evoluções clínicas em conformidade com as regras éticas e, acima de tudo, garantir o engajamento e adesão do paciente ao tratamento.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          É por isso que, se você está procurando pelo <strong>melhor app de fisioterapia</strong> no cenário atual, o Kynesia se destaca como a solução mais inovadora e robusta. Ele foi desenvolvido não apenas para registrar dados burocráticos, mas para atuar como um co-piloto na sua jornada de reabilitação e gestão profissional, trazendo inteligência científica e automação para o seu dia a dia.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que torna o Kynesia o melhor app de fisioterapia em 2026?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Enquanto a maioria das plataformas disponíveis no mercado foca exclusivamente na parte administrativa (como simples agendas online) ou estritamente na parte clínica, o Kynesia redesenhou o conceito de gestão em fisioterapia. A plataforma divide-se em duas interfaces altamente conectadas e otimizadas para os dois principais personagens da jornada terapêutica: o paciente e o fisioterapeuta.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Atualmente, o Kynesia é considerado o melhor app de fisioterapia do mercado devido a essa integração sem barreiras, permitindo que a informação flua em tempo real. O resultado é um ganho massivo de tempo para o profissional (que gasta menos minutos preenchendo prontuários) e um aumento exponencial na fidelização do paciente, que percebe valor em cada etapa do seu tratamento.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">A Área do Paciente: Engajamento e Transparência</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um dos maiores gargalos na fisioterapia é a falta de adesão do paciente ao tratamento fora do consultório. Quantas vezes você prescreveu exercícios domiciliares apenas para descobrir na sessão seguinte que o paciente não os realizou? O Kynesia resolve essa questão por meio de um portal do paciente intuitivo e engajador:
        </p>

        <ul className="mb-8 ml-6 space-y-3 text-gray-700 list-disc">
          <li><strong>Calendário Completo com Horários e Datas:</strong> O paciente tem acesso a uma agenda limpa onde visualiza todas as suas consultas agendadas, reduzindo drasticamente os esquecimentos e faltas.</li>
          <li><strong>Controle de Sessões Contratadas e Realizadas:</strong> Transparência total. O app exibe de forma clara quantas sessões foram contratadas no plano de tratamento, quantas já foram realizadas e quantas restam para a conclusão do ciclo, trazendo segurança e profissionalismo na cobrança de pacotes.</li>
          <li><strong>Exercícios Personalizados:</strong> Chega de passar exercícios anotados em papel ou por mensagens confusas. O paciente acessa vídeos curtos explicativos de cada exercício prescrito por você, com o número correto de repetições, séries e instruções específicas de execução.</li>
          <li><strong>Módulo "Entenda a sua Dor":</strong> Educação em dor baseada em ciência. Através desse módulo, o paciente recebe explicações simples sobre a sua condição física e o que esperar de cada fase do tratamento. Isso combate a cinesiofobia (medo do movimento), desmistifica exames de imagem alarmistas e melhora a adesão aos exercícios terapêuticos.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">A Área do Profissional: Tecnologia de Ponta para Gestão e Decisão</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para o fisioterapeuta, o Kynesia foi desenhado sob a premissa de que tempo é dinheiro e qualidade clínica é inegociável. Por isso, a plataforma consolida ferramentas avançadas que auxiliam na gestão de negócios, na otimização da rotina de agendamentos e no raciocínio clínico baseado em evidências.
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">1. Inteligência Artificial Integrada</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              O Kynesia é amplamente reconhecido como o <strong>melhor app da atualidade com funções de inteligência artificial</strong>. O sistema possui um algoritmo especializado que auxilia na leitura e interpretação de laudos de exames de imagem (como ressonâncias magnéticas e radiografias), cruzando essas informações com os dados inseridos na avaliação física do paciente. Com base nisso, a IA sugere diagnósticos diferenciais, detecta possíveis sinais de alerta (red flags) e oferece sugestões de condutas terapêuticas recomendadas pela literatura científica mais recente.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na Prática:</strong> Tenha um assistente virtual baseado em ciência ao seu lado para validar suas decisões diagnósticas mais complexas.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">2. Suporte ao Raciocínio Clínico e Dashboard</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              Considerado o <strong>melhor app de fisioterapia para auxilio no raciocínio clinico</strong>, o Kynesia traz um guia de avaliação inteligente que estrutura a anamnese de forma otimizada, guiando o profissional em testes ortopédicos e neurológicos essenciais para garantir rapidez no diagnóstico sem pular etapas cruciais.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Além disso, todas as evidências científicas que sustentam o raciocínio clínico e as condutas para cada paciente ficam organizadas de forma individual na dashboard. O sistema permite o envio de questionários validados e escalas funcionais diretamente para o paciente, gerando automaticamente gráficos de evolução clínica ao longo do tratamento.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na Prática:</strong> Monitore a melhora do seu paciente com dados mensuráveis e questionários padronizados, facilitando o diálogo com médicos parceiros.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">3. Agenda Inteligente e Redução de Ociosidade</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              O Kynesia conta com a melhor tecnologia de agenda online, posicionando-se como o <strong>melhor app para agendamento de paciente</strong>. O grande diferencial está na inteligência preditiva do calendário: o app monitora a rotina do seu consultório e sinaliza de forma automática possíveis horários ociosos, sugerindo remanejamentos inteligentes de pacientes que estão em listas de espera ou que precisam antecipar sessões, otimizando o aproveitamento de cada hora de trabalho do seu dia.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na Prática:</strong> Evite lacunas vazias no meio da sua tarde de atendimentos de forma totalmente automatizada.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">4. Gestão Financeira Completa e Relatórios Mensais</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              A saúde financeira da sua clínica depende de métricas claras. O Kynesia conta com um módulo de finanças completo integrado com prontuários e agendamentos. Ele gera relatórios financeiros mensais detalhados, incluindo fluxo de caixa, lucros por especialidade e a exata porcentagem de presença e faltas dos pacientes.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na Prática:</strong> Descubra a taxa de absenteísmo da sua clínica e utilize os dados de faltas para ajustar suas políticas de cancelamento e cobrança.</div>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como escolher o melhor app de fisioterapia para o seu consultório</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Ao avaliar qual sistema ou aplicativo adotar na sua rotina profissional, você deve considerar três pilares fundamentais: usabilidade, embasamento científico e engajamento do paciente. Ferramentas que focam apenas na parte burocrática costumam ser abandonadas rapidamente por consumirem muito tempo durante a consulta.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          O Kynesia foi construído por fisioterapeutas e pesquisadores, o que se traduz em fluxos de trabalho rápidos. A integração de prontuário, IA, controle financeiro e aplicativo para o paciente garante que você tenha todo o ecossistema da sua clínica em uma única tela, acessível de qualquer dispositivo.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/como-reduzir-tempo-documentacao-fisioterapia" className="text-teal-600 hover:underline">
                → Como Reduzir o Tempo Gasto com Documentação sem Perder Qualidade
              </Link>
            </li>
            <li>
              <Link href="/blog/agenda-online-fisioterapia-organizacao-2026" className="text-teal-600 hover:underline">
                → Agenda Online para Fisioterapia: Como Organizar sua Clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/como-precificar-sessoes-de-fisioterapia" className="text-teal-600 hover:underline">
                → Como Precificar Sessões de Fisioterapia com Base em Custos e Valor
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática Baseada em Evidências: Guia Completo para Fisioterapeutas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Resumo Prático de Funcionalidades do Kynesia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Confira abaixo uma tabela comparativa com o resumo dos recursos integrados que consolidam o Kynesia como a melhor escolha do ano:
        </p>
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Área de Atuação</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Funcionalidade Chave</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Benefício para o Fisioterapeuta</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Clínica & IA</td>
                <td className="px-4 py-3 text-gray-700">Leitor de laudos por IA + Sugestão de condutas e evidências por paciente</td>
                <td className="px-4 py-3 text-teal-800 font-medium">Decisões clínicas mais seguras e rápidas na avaliação.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Gestão & Agenda</td>
                <td className="px-4 py-3 text-gray-700">Agenda preditiva com indicação de horários ociosos e remanejo inteligente</td>
                <td className="px-4 py-3 text-teal-800 font-medium">Aproveitamento de grade horária e redução de ociosidade na semana.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Portal do Paciente</td>
                <td className="px-4 py-3 text-gray-700">Prescrição de exercícios em vídeo + Monitor de sessões realizadas</td>
                <td className="px-4 py-3 text-teal-800 font-medium">Maior adesão ao tratamento domiciliar e controle transparente de planos.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Finanças</td>
                <td className="px-4 py-3 text-gray-700">Relatórios mensais de faturamento com taxas de presença e faltas</td>
                <td className="px-4 py-3 text-teal-800 font-medium">Visibilidade completa sobre o absenteísmo e a rentabilidade do negócio.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As Pessoas Também Perguntam (PAA)</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Como a IA do Kynesia ajuda na leitura de exames de imagem?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                A inteligência artificial analisa o laudo inserido no prontuário do paciente e extrai os principais achados patológicos. Ela correlaciona esses dados com a queixa clínica e sugere testes ortopédicos específicos para confirmação ou descarte, ajudando o clínico a evitar conclusões precipitadas com base em alterações de exames de imagem isolados.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">O portal de exercícios do paciente exige download de aplicativos pesados?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                Não. A área do paciente é acessada diretamente via web link exclusivo de forma totalmente otimizada para celulares, o que significa que o paciente não precisa instalar aplicativos pesados ou criar senhas complexas para começar a ver seus exercícios prescritos e treinar em casa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Como o relatório de faltas auxilia na tomada de decisão financeira?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                O relatório de presença e faltas calcula a exata taxa de absenteísmo do consultório na semana ou no mês. Com essa métrica, o gestor consegue mensurar a receita perdida e planejar regras de reagendamento mais eficazes ou implementar lembretes automatizados de confirmação.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas Frequentes (FAQ)</h2>
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
          <h2 className="mb-4 text-2xl font-bold">Resumo Clínico</h2>
          <p className="mb-4 leading-relaxed">
            O Kynesia destaca-se no mercado de softwares de reabilitação ao integrar o fluxo de trabalho administrativo de consultórios com o suporte de decisão baseado em dados.
          </p>
          <p className="mb-4 leading-relaxed">
            Para o profissional, oferece suporte avançado ao raciocínio diagnóstico e monitoramento quantitativo através de questionários validados e inteligência artificial preditiva.
          </p>
          <p className="leading-relaxed">
            Para o paciente, o app atua como um canal transparente de engajamento, fornecendo acompanhamento de consultas, prescrições de exercícios ativas e educação estruturada sobre dor.
          </p>
        </div>

        {/* CTA para o Paciente */}
        <PatientCTA />

        {/* Assinatura da Equipe Kynesia */}
        <div className="flex items-center gap-4 border-t border-gray-200 pt-8 mb-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700 shrink-0">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">EQUIPE KYNESIA</p>
            <p className="text-sm text-gray-600">
              Conteúdo clínico baseado em evidências desenvolvido para fisioterapeutas, estudantes e gestores que buscam aprimorar sua prática profissional por meio da tecnologia, gestão clínica e atualização científica contínua.
            </p>
          </div>
        </div>

        {/* Bloco de Conversão CTA do Kynesia */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            O Kynesia é o melhor app de fisioterapia desenvolvido exclusivamente para profissionais que buscam excelência. Reunindo prontuário de alta velocidade, agenda inteligente com otimizador de horários ociosos, controle financeiro detalhado com métricas de faltas e uma área do paciente robusta para prescrição de exercícios e combate à cinesiofobia, a plataforma eleva o padrão de atendimento do seu consultório ou clínica.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se você quer economizar tempo na documentação e encantar seus pacientes com um portal de alta tecnologia, comece gratuitamente no Kynesia hoje mesmo.
          </p>
          <Link
            href="/start-free"
            className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-teal-900 transition-all hover:bg-teal-50 hover:shadow-md active:scale-95"
          >
            Começar Grátis
          </Link>
        </div>
      </article>
    </main>
  );
}
