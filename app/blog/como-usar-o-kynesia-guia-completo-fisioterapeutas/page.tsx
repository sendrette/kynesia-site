import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/como-usar-o-kynesia-guia-completo-fisioterapeutas";

const paaItems = [
  {
    question: "O que é o aplicativo Kynesia?",
    answer:
      "O Kynesia é uma plataforma completa de gestão clínica desenvolvida exclusivamente para fisioterapeutas. O sistema reúne prontuário eletrônico inteligente, agenda com confirmação, controle financeiro integrado, transcrição e estruturação de evolução clínica com apoio de inteligência artificial baseada em evidências, clusters diagnósticos de testes ortopédicos e um portal do paciente para acompanhamento de exercícios domiciliares.",
  },
  {
    question: "Como a inteligência artificial do Kynesia ajuda o fisioterapeuta?",
    answer:
      "A inteligência artificial do Kynesia atua como um assistente de suporte ao raciocínio clínico e documentação. Ela auxilia na transcrição de relatos por voz para notas SOAP estruturadas, sugere clusters de testes ortopédicos conforme a queixa do paciente e disponibiliza referências científicas atualizadas. A tecnologia atua como apoio, cabendo sempre ao fisioterapeuta validar as informações e tomar as decisões clínicas.",
  },
  {
    question: "O Kynesia permite acompanhar os exercícios dos pacientes?",
    answer:
      "Sim. A plataforma conta com o Portal do Paciente, uma área exclusiva onde o fisioterapeuta prescreve exercícios domiciliares com orientações detalhadas, parâmetros de carga e recursos visuais. O paciente pode acessar pelo smartphone, visualizar as orientações de execução e acompanhar o histórico de suas sessões, favorecendo a adesão ao tratamento e o combate à cinesiofobia.",
  },
];

const faqItems = [
  {
    question: "O Kynesia funciona no celular?",
    answer:
      "Sim. O Kynesia é 100% em nuvem e responsivo. Ele pode ser acessado pelo navegador de qualquer smartphone (Android ou iPhone), tablet ou computador sem perda de recursos, permitindo registrar evoluções ou consultar a agenda de qualquer lugar.",
  },
  {
    question: "Preciso instalar um programa para utilizar o Kynesia?",
    answer:
      "Não. Não é necessário fazer download ou instalar softwares pesados no seu computador. O acesso é feito diretamente pelo navegador web com login e senha seguros, com sincronização em tempo real e backups automáticos na nuvem.",
  },
  {
    question: "A inteligência artificial do Kynesia substitui a avaliação fisioterapêutica?",
    answer:
      "De forma alguma. A inteligência artificial é uma ferramenta de suporte para agilizar a documentação e organizar hipóteses clínicas baseadas na literatura. A avaliação física, a anamnese detalhada, o raciocínio diagnóstico e a tomada de decisão terapêutica permanecem sendo prerrogativas exclusivas do fisioterapeuta.",
  },
  {
    question: "O Kynesia reúne gestão clínica e gestão financeira?",
    answer:
      "Sim. Além de toda a parte clínica (prontuário, anamnese, escalas validadas e evoluções), o Kynesia oferece módulos de fluxo de caixa, controle de pagamentos por sessão ou planos de tratamento, relatórios de faturamento e métricas de comparecimento.",
  },
];

const allStructuredFaqs = [...paaItems, ...faqItems];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Usar o Kynesia: Guia Completo para Fisioterapeutas",
  description:
    "Aprenda a organizar sua clínica, utilizar inteligência artificial baseada em evidências, documentar evoluções e acompanhar seus pacientes em uma única plataforma.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  image: "https://kynesia.com.br/blog/como-usar-o-kynesia-guia-completo-fisioterapeutas.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allStructuredFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Como Usar o Kynesia: Guia Completo para Fisioterapeutas | Kynesia",
  description:
    "Aprenda como usar o Kynesia: guia completo para fisioterapeutas organizarem prontuário eletrônico, evolução com IA, agenda, finanças e portal do paciente.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como Usar o Kynesia: Guia Completo para Fisioterapeutas",
    description:
      "Aprenda a organizar sua clínica, utilizar a inteligência artificial baseada em evidências, documentar evoluções e acompanhar seus pacientes com o Kynesia.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/como-usar-o-kynesia-guia-completo-fisioterapeutas.png",
        width: 1024,
        height: 576,
        alt: "Como Usar o Kynesia: Guia Completo para Fisioterapeutas - Gestão Clínica Inteligente",
      },
    ],
  },
};

export default function ComoUsarKynesiaGuiaPage() {
  return (
    <main className="k-page kyn-article">
      <SiteHeader showProgress />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Como Usar o Kynesia: Guia Completo para Fisioterapeutas</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica & Tecnologia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Como Usar o Kynesia: Guia Completo para Fisioterapeutas
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a organizar sua clínica, utilizar a inteligência artificial baseada em evidências, documentar evoluções em minutos e acompanhar seus pacientes em uma única plataforma integrada.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 27 Out 2026</span>
            <span>⏱ 18 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      {/* Artigo */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/como-usar-o-kynesia-guia-completo-fisioterapeutas.png"
            alt="Como Usar o Kynesia: Guia Completo para Fisioterapeutas - Plataforma de Gestão Clínica"
            width={1024}
            height={576}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">Resposta Rápida</h2>
          <p className="text-gray-900 leading-relaxed font-medium">
            O Kynesia é uma plataforma e aplicativo para fisioterapeutas que reúne gestão clínica, prontuário eletrônico inteligente, agenda integrada, controle financeiro e recursos de inteligência artificial baseados em evidências. Ele permite cadastrar pacientes, redigir evoluções por voz ou texto em menos de 2 minutos, apoiar o raciocínio clínico com sugestões de testes ortopédicos e acompanhar a adesão aos exercícios domiciliares através do portal exclusivo do paciente.
          </p>
        </div>

        {/* Introdução */}
        <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900 md:text-3xl">
          Introdução: como a tecnologia pode transformar sua rotina na fisioterapia?
        </h2>

        <p className="mb-5 leading-relaxed text-gray-700 text-lg">
          Gerenciar um consultório ou clínica de fisioterapia moderna exige muito mais do que realizar avaliações detalhadas e prescrever exercícios assertivos. No dia a dia profissional, o fisioterapeuta precisa equilibrar a gestão de agendamentos, o registro legal de atendimentos, a mensuração quantitativa de desfechos clínicos (PROMs), o faturamento financeiro e o engajamento contínuo dos pacientes entre as consultas.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Quando essas atividades operacionais ficam fragmentadas em fichas de papel, cadernos físicos, planilhas despadronizadas e trocas desorganizadas de mensagens em aplicativos comuns, a rotina profissional rapidamente se torna sobrecarregada. Estudos sobre burnout na área da saúde indicam que o excesso de tempo despendido em tarefas burocráticas e documentação manual reduz drasticamente a energia disponível para o raciocínio clínico, o estudo de casos complexos e o acolhimento humano do paciente.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          É exatamente nesse cenário que um <strong>aplicativo e software para fisioterapeutas</strong> desenhado por quem compreende as particularidades da reabilitação faz toda a diferença. O Kynesia foi concebido para unificar todas as etapas da jornada assistencial em uma única plataforma segura, intuitiva e orientada pela Prática Baseada em Evidências (PBE).
        </p>

        {/* Bloco Leia Também */}
        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Conteúdos recomendados para aprofundamento:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/melhor-app-de-fisioterapia-kynesia" className="text-teal-600 hover:underline">
                → O Melhor App de Fisioterapia: Comparativo e Funcionalidades Essenciais
              </Link>
            </li>
            <li>
              <Link href="/blog/prontuario-eletronico-fisioterapia-como-escolher-2026" className="text-teal-600 hover:underline">
                → Prontuário Eletrônico para Fisioterapia: Guia Definitivo de Escolha
              </Link>
            </li>
            <li>
              <Link href="/blog/ia-na-fisioterapia-como-a-tecnologia-esta-mudando-clinicas" className="text-teal-600 hover:underline">
                → Inteligência Artificial na Fisioterapia: Como a Tecnologia Transforma Clínicas
              </Link>
            </li>
            <li>
              <Link href="/blog/como-reduzir-tempo-evolucao-fisioterapeutica-sem-perder-qualidade" className="text-teal-600 hover:underline">
                → Como Reduzir o Tempo de Evolução Fisioterapêutica sem Perder Qualidade
              </Link>
            </li>
            <li>
              <Link href="/blog/clusters-de-testes-ortopedicos-o-que-sao-e-como-usar" className="text-teal-600 hover:underline">
                → Clusters de Testes Ortopédicos: Como Elevar a Precisão Diagnóstica
              </Link>
            </li>
          </ul>
        </div>

        {/* 1. Como começar */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          1. Como começar a usar o Kynesia?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O primeiro passo para modernizar sua gestão clínica é criar sua conta de acesso. Por operar 100% em tecnologia em nuvem (SaaS), o Kynesia não exige instalação de nenhum aplicativo pesado, dependência de servidores locais caros ou manutenções técnicas complexas.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          Você pode acessar a plataforma pelo navegador do seu computador de mesa, notebook, tablet ou celular (iOS e Android), mantendo todas as suas informações clínicas perfeitamente sincronizadas em tempo real.
        </p>

        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Passo a passo inicial para novos usuários:</h3>
          <ol className="space-y-3 pl-5 list-decimal text-gray-700">
            <li>
              <strong>Acesse o portal oficial:</strong> Entre no site do Kynesia e clique em <em>Começar Grátis</em> para realizar seu cadastro inicial.
            </li>
            <li>
              <strong>Configure seu perfil profissional:</strong> Preencha seus dados de identificação, número de registro profissional (CREFITO) e personalize os horários padrão de atendimento da sua agenda.
            </li>
            <li>
              <strong>Explore os módulos da plataforma:</strong> Familiarize-se com a barra de navegação lateral (Pacientes, Prontuário, Agenda, Financeiro, Guias Clínicos, Exercícios e Relatórios).
            </li>
            <li>
              <strong>Cadastre seus primeiros pacientes:</strong> Insira os dados cadastrais básicos e inicie uma avaliação ou importe registros anteriores.
            </li>
            <li>
              <strong>Experimente a evolução por inteligência artificial:</strong> Faça uma gravação por voz ou digitação livre de um atendimento e veja a estruturação automática em notas SOAP.
            </li>
          </ol>
        </div>

        {/* Botão Conhecer a Kynesia */}
        <div className="my-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/start-free"
            className="w-full sm:w-auto text-center rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg active:scale-95"
          >
            Começar Grátis no Kynesia
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto text-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition-all hover:bg-slate-50 hover:border-slate-400"
          >
            Conhecer todos os recursos
          </Link>
        </div>

        {/* 2. Prontuário e cadastro */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          2. Como cadastrar pacientes e organizar o prontuário eletrônico?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O prontuário do paciente é o coração legal e técnico da atuação fisioterapêutica. No Kynesia, o prontuário eletrônico foi arquitetado para transformar registros burocráticos estáticos em uma <strong>linha do tempo clínica interativa</strong>, respeitando as normas éticas do Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO) e os requisitos rigorosos da Lei Geral de Proteção de Dados (LGPD).
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">
          Por que centralizar as informações clínicas em formato digital?
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Considere o exemplo de um paciente com queixa de dor lombar crônica que retorna ao consultório após três semanas de afastamento. Em modelos manuais de anotação, o fisioterapeuta frequentemente perde minutos preciosos procurando fichas antigas para relembrar quais testes de mobilidade articular foram realizados, quais foram as cargas dos exercícios na última sessão e qual era a pontuação inicial do paciente na escala de incapacidade funcional.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          Com o prontuário centralizado do Kynesia, com apenas dois cliques você visualiza o histórico cronológico completo, compara os achados de amplitude de movimento, consulta exames complementares anexados em PDF ou imagem e toma decisões com base na evolução quantitativa real do paciente.
        </p>

        <div className="mb-8 rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
          <h4 className="font-bold text-teal-800 mb-2">💡 Na prática clínica diária:</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            Utilize os campos estruturados para documentar a queixa principal, mecanismo de lesão, comorbidades, bandeiras vermelhas (red flags) e amarelas (yellow flags), metas acordadas em conjunto com o paciente e respostas neurofuncionais sessão a sessão. Isso confere robustez jurídica e eleva o padrão de cuidado da sua clínica.
          </p>
        </div>

        {/* 3. Inteligência Artificial */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          3. Como utilizar a inteligência artificial do Kynesia na prática clínica?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A inteligência artificial é um dos pilares mais inovadores do Kynesia. Ela foi desenvolvida para atuar como um &ldquo;exoesqueleto cognitivo&rdquo; para o fisioterapeuta, automatizando a parte repetitiva da escrita e oferecendo suporte analítico rápido sem jamais substituir a expertise clínica.
        </p>

        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="font-semibold text-amber-900 mb-2">⚠️ Princípio Fundamental da Tecnologia no Kynesia:</p>
          <p className="text-sm text-amber-950 leading-relaxed">
            A inteligência artificial atua como uma ferramenta de apoio ao raciocínio clínico e à eficiência documental. Ela <strong>não substitui</strong> a anamnese humana, o exame físico presencial, o julgamento soberano do fisioterapeuta e a validação ética final de qualquer dado adicionado ao prontuário.
          </p>
        </div>

        {/* 3.1 Evolução com IA */}
        <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">
          3.1. Evolução fisioterapêutica com inteligência artificial
        </h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A redação detalhada de evoluções consome cerca de 10 a 15 minutos por paciente quando feita manualmente do zero. Em uma jornada de 8 atendimentos diários, isso representa quase duas horas dedicadas exclusivamente à digitação de textos repetitivos.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          No Kynesia, o fisioterapeuta pode ditar por voz ou digitar um resumo rápido dos achados da sessão (por exemplo: <em>&ldquo;Paciente relatou redução da dor lombar para 3/10 após caminhadas. Realizamos mobilidade de quadril, ponte de glúteos com caneleira de 3kg e remada com elástico forte sem dor. Mantida orientação para caminhadas diárias&rdquo;</em>).
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          Em questão de segundos, a inteligência artificial do Kynesia organiza as informações no padrão internacional **SOAP (Subjetivo, Objetivo, Avaliação e Plano)**:
        </p>

        <div className="mb-8 space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-sm">
          <div className="border-b border-slate-100 pb-2">
            <span className="font-bold text-teal-700">[S] Subjetivo:</span> Paciente refere redução da intensidade dolorosa lombar para 3/10 na EVA após realização regular das caminhadas orientadas.
          </div>
          <div className="border-b border-slate-100 pb-2">
            <span className="font-bold text-teal-700">[O] Objetivo:</span> Realizada mobilidade articular de quadril em rotação interna e flexão; fortalecimento de cadeia posterior com ponte bipodal (carga: 3kg); remada neutra com faixa elástica de alta resistência sem compensações motoras.
          </div>
          <div className="border-b border-slate-100 pb-2">
            <span className="font-bold text-teal-700">[A] Avaliação:</span> Excelente tolerância tecidual e neuromuscular à progressão de carga mecânica, com ausência de sintomas de radiculopatia ou espasmos protetores.
          </div>
          <div>
            <span className="font-bold text-teal-700">[P] Plano:</span> Manter progressão de carga nos extensores de tronco, estimular manutenção do volume de caminhadas e prescrever novos exercícios no portal do paciente.
          </div>
        </div>

        <p className="mb-6 leading-relaxed text-gray-700">
          O fisioterapeuta revisa o texto gerado, faz ajustes finos se desejar e aprova a evolução com um clique. Isso assegura documentação técnica impecável em menos de dois minutos por atendimento.
        </p>

        {/* 3.2 Clusters de testes */}
        <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">
          3.2. Sugestões de testes ortopédicos e clusters clínicos
        </h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A literatura científica contemporânea comprova que testes ortopédicos especiais isolados raramente possuem sensibilidade e especificidade suficientes para confirmar ou refutar uma hipótese diagnóstica. O padrão-ouro do raciocínio clínico reside no uso de <strong>clusters diagnósticos combinados</strong> (agrupamento de testes com altas Razões de Verossimilhança / Likelihood Ratios).
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Ao inserir as queixas anatômicas do paciente no Kynesia (como dor anterior no joelho ou impacto no ombro), o assistente clínico sugere baterias de testes validados na literatura internacional (como o Cluster de Park para síndrome do manguito rotador ou o Cluster de Laslett para articulação sacroilíaca), indicando a metodologia de execução de cada manobra e como interpretar resultados cruzados.
        </p>

        {/* 3.3 PBE */}
        <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">
          3.3. Prática Baseada em Evidências (PBE) integrada
        </h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A Prática Baseada em Evidências é definida pela clássica tríade de David Sackett: a integração harmoniosa entre a <strong>melhor evidência científica disponível</strong>, a <strong>expertise do profissional</strong> e as <strong>preferências individuais do paciente</strong>.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          O Kynesia auxilia essa tomada de decisão fornecendo resumos de diretrizes clínicas internacionais (como as CPGs da JOSPT e NICE guidelines), parâmetros de dosagem de carga e alertas sobre condutas que caíram em desuso científico (como repouso absoluto ou dependência exclusiva de eletroterapia passiva sem estímulo ativo).
        </p>

        {/* 3.4 Guia de anamnese */}
        <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">
          3.4. Guia de anamnese e organização da avaliação
        </h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para garantir que nenhum dado crítico seja omitido, a plataforma conta com roteiros pré-formatados de anamnese estruturada:
        </p>
        <ul className="mb-8 space-y-2 pl-6 list-disc text-gray-700">
          <li>Mapeamento corporal gráfico da dor (dor referida, dermátomos e parestesias);</li>
          <li>Checklist de Red Flags para triagem rápida de condições sistêmicas ou cirúrgicas urgentes;</li>
          <li>Identificação de fatores psicossociais (cinesiofobia, catastrofização e hipervigilância);</li>
          <li>Definição compartilhada de objetivos funcionais realistas com o paciente.</li>
        </ul>

        {/* 4. Acompanhar evolução */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          4. Como acompanhar a evolução clínica dos pacientes?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Evoluir um paciente não é apenas anotar &ldquo;paciente compareceu sem queixas&rdquo;. O acompanhamento de alto nível exige a aplicação de <strong>Medidas de Desfecho Relatadas pelo Paciente (PROMs - Patient-Reported Outcome Measures)</strong> e testes de desempenho físico padronizados.
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
          <h3 className="mb-3 text-lg font-bold text-teal-900">Instrumentos e questionários validados no Kynesia:</h3>
          <p className="leading-relaxed text-teal-950 text-sm mb-3">
            O Kynesia disponibiliza questionários funcionais validados em língua portuguesa, gerando gráficos de evolução comparativa automática:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-teal-950">
            <div className="bg-white/80 p-3 rounded-lg border border-teal-200">
              <strong>Coluna Lombar e Cervical:</strong> Oswestry Disability Index (ODI), Roland-Morris e Neck Disability Index (NDI).
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-teal-200">
              <strong>Membro Superior:</strong> QuickDASH, SPADI e PRTEE para cotovelo.
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-teal-200">
              <strong>Membro Inferior:</strong> LEFS (Lower Extremity Functional Scale), VISA-P e KOOS.
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-teal-200">
              <strong>Fatores Psicossociais:</strong> Tampa Scale for Kinesiophobia (TSK) e Pain Catastrophizing Scale (PCS).
            </div>
          </div>
        </div>

        <p className="mb-6 leading-relaxed text-gray-700">
          Ao acompanhar o escore ao longo das semanas, o fisioterapeuta identifica com clareza se as mudanças ultrapassaram a <em>Diferença Clinicamente Importante Mínima (MCID)</em>, permitindo comprovar a eficácia do tratamento para o paciente, médicos solicitantes e operadoras de saúde.
        </p>

        {/* 5. Portal do paciente */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          5. Como o portal do paciente pode ajudar no acompanhamento do tratamento?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O processo de reabilitação não ocorre apenas durante os 50 minutos dentro do consultório. A recuperação de tecidos musculoesqueléticos e a reprogramação neuromotora dependem diretamente do comportamento do paciente nos outros 10.000 minutos de sua semana.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          O <strong>Portal do Paciente do Kynesia</strong> atua como um elo contínuo entre o consultório e a rotina do paciente, resolvendo um dos maiores gargalos da fisioterapia mundial: a baixa adesão aos exercícios domiciliares.
        </p>

        <div className="mb-8 space-y-4">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Prescrição de exercícios para casa com clareza visual</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              Chega de desenhos à mão em folhas soltas que o paciente perde no caminho de casa. Pelo Kynesia, o fisioterapeuta monta o protocolo de exercícios com vídeos instrutivos, número exato de séries, repetições, tempo de sustentação isométrico e orientações de segurança. O paciente acessa direto do smartphone pelo navegador, sem atrito.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Acompanhamento e transparência das sessões</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              O paciente pode verificar quantas sessões foram realizadas, quais os próximos compromissos e as recomendações pós-atendimento, eliminando ruídos de comunicação e faltas involuntárias.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Educação em saúde e combate à cinesiofobia</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              Um estudo publicado no <em>Journal of Orthopaedic & Sports Physical Therapy (JOSPT, 2025)</em> demonstrou que a <strong>educação terapêutica estruturada combinada ao exercício</strong> promove reduções significativas em dor crônica, incapacidade funcional e índices de medo do movimento (cinesiofobia) [1]. O portal permite fornecer orientações educativas que esclarecem mitos e tranquilizam o paciente sobre a segurança do movimento ativo.
            </p>
          </div>
        </div>

        {/* 6. Agenda e Gestão Financeira */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          6. Como organizar a agenda e a gestão financeira da clínica?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A sustentabilidade financeira e a tranquilidade mental de um profissional dependem de uma gestão administrativa organizada. O Kynesia integra as facetas clínicas às rotinas operacionais essenciais do negócio:
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Agenda Inteligente</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Visualização por dia, semana ou mês, com status de confirmação, histórico de faltas e encaixes rápidos para eliminar horários ociosos na sua grade de atendimento.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Controle Financeiro</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Registro simplificado de entradas por sessão, pacotes ou planos mensais, controle de despesas operacionais da clínica e conciliação de pagamentos pendentes.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Indicadores de Gestão</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Métricas reais de taxa de cancelamento (no-show), faturamento médio por paciente (LTV) e volume de novos cadastros para embasar o crescimento do seu negócio.
            </p>
          </div>
        </div>

        {/* 7. Comparativo */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          7. Qual é a diferença entre usar várias ferramentas e centralizar tudo no Kynesia?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Muitos profissionais ainda operam no modelo &ldquo;colcha de retalhos&rdquo;: uma planilha para o financeiro, um aplicativo genérico para a agenda, notas soltas no celular para a evolução e WhatsApp para mandar vídeos de exercícios. Veja o impacto comparativo da centralização:
        </p>

        <div className="mb-10 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Demanda do Dia a Dia</th>
                <th className="px-6 py-4 text-left font-bold text-rose-800">Modelo Fragmentado (Várias Ferramentas)</th>
                <th className="px-6 py-4 text-left font-bold text-teal-800">Modelo Kynesia (Centralizado)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Cadastro e Prontuário</td>
                <td className="px-6 py-4 text-gray-700">Fichas de papel ou arquivos Word dispersos com risco de perda</td>
                <td className="px-6 py-4 text-teal-900 font-medium bg-teal-50/40">Prontuário eletrônico seguro na nuvem com histórico instantâneo</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Documentação Clínica</td>
                <td className="px-6 py-4 text-gray-700">10 a 15 minutos digitando evoluções manuais acumuladas no fim do dia</td>
                <td className="px-6 py-4 text-teal-900 font-medium bg-teal-50/40">Evolução por voz ou texto em padrão SOAP com IA em menos de 2 minutos</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Raciocínio Diagnóstico</td>
                <td className="px-6 py-4 text-gray-700">Memória individual, protocolos genéricos ou busca rápida no Google</td>
                <td className="px-6 py-4 text-teal-900 font-medium bg-teal-50/40">Sugestões de clusters clínicos e referências científicas atualizadas</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Exercícios Domiciliares</td>
                <td className="px-6 py-4 text-gray-700">Mensagens soltas de WhatsApp que o paciente esquece de fazer</td>
                <td className="px-6 py-4 text-teal-900 font-medium bg-teal-50/40">Portal exclusivo do paciente com vídeos, séries e parâmetros visuais</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Gestão e Finanças</td>
                <td className="px-6 py-4 text-gray-700">Planilhas manuais esquecidas e perda de controle sobre sessões pagas</td>
                <td className="px-6 py-4 text-teal-900 font-medium bg-teal-50/40">Agenda conectada ao financeiro e fluxo de caixa automatizado</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 8. IA vai substituir o fisioterapeuta? */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          8. A inteligência artificial vai substituir o fisioterapeuta?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A resposta direta e inegociável é: <strong>não</strong>. A fisioterapia é, por excelência, uma profissão relacional, humanizada e baseada em toque terapêutico, comunicação contextual, escuta empática e julgamento clínico individualizado.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Nenhum algoritmo é capaz de segurar a mão de um paciente fragilizado pela dor, perceber uma sutil compensação motora na marcha durante a fadiga ou construir a aliança terapêutica necessária para devolver a esperança a alguém com dor crônica.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Como bem expressam os principais pesquisadores em saúde digital: <em>&ldquo;A inteligência artificial não vai substituir os profissionais de saúde; no entanto, os profissionais que utilizam ferramentas inteligentes com responsabilidade ética substituirão aqueles que permanecem presos a processos obsoletos e manuais.&rdquo;</em>
        </p>

        {/* 9. Uso responsável */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          9. Como utilizar o Kynesia de maneira responsável e eficiente?
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Para extrair o valor máximo do sistema mantendo o mais elevado rigor ético, recomendamos a adoção dos seguintes pilares de boas práticas:
        </p>

        <div className="mb-8 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-800">
            <strong className="text-teal-800 text-base block mb-1">1. Padronize os registros essenciais</strong>
            Mantenha a consistência em todas as avaliações, garantindo que queixas, histórico pregresso e medidas de linha de base (baseline) estejam sempre documentadas.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-800">
            <strong className="text-teal-800 text-base block mb-1">2. Revise e valide sempre qualquer texto gerado por IA</strong>
            A inteligência artificial é uma assistente de redação veloz. Nunca aprove uma nota clínica sem conferir se os valores de carga, repetições e queixas correspondem com fidelidade à sessão executada.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-800">
            <strong className="text-teal-800 text-base block mb-1">3. Monitore desfechos funcionais com instrumentos validados</strong>
            Reaplique questionários funcionais (PROMs) periodicamente (por exemplo, a cada 4 ou 6 semanas) para acompanhar objetivamente a curva de recuperação.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-800">
            <strong className="text-teal-800 text-base block mb-1">4. Integre a educação ao portal do paciente</strong>
            Aproveite o canal digital para enviar orientações descomplicadas sobre fisiologia da dor, desmistificando o medo de se movimentar e empoderando o paciente.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-gray-800">
            <strong className="text-teal-800 text-base block mb-1">5. Respeite as normas de privacidade e LGPD</strong>
            Utilize senhas fortes, mantenha seu dispositivo de trabalho protegido e compartilhe informações apenas com consentimento expresso e para fins de assistência à saúde.
          </div>
        </div>

        {/* 10. Para quem é indicado */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          10. Para quem o Kynesia é indicado?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A plataforma foi arquitetada de forma modular e escalável, atendendo perfeitamente a diferentes fases da trajetória profissional:
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-5">
            <h3 className="font-bold text-teal-900 mb-1">Fisioterapeutas Autônomos</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Profissionais que atendem em consultório próprio ou a domicílio e precisam centralizar agenda, cobranças, prontuário e exercícios sem pagar por múltiplos softwares caros.
            </p>
          </div>
          <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-5">
            <h3 className="font-bold text-teal-900 mb-1">Clínicas e Consultórios</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Equipes que necessitam padronizar evoluções clínicas, controlar múltiplos profissionais em agendas simultâneas e acompanhar métricas de faturamento e absenteísmo.
            </p>
          </div>
          <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-5">
            <h3 className="font-bold text-teal-900 mb-1">Profissionais em Início de Carreira</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Fisioterapeutas recém-formados que buscam segurança no raciocínio clínico com apoio de clusters ortopédicos e práticas estruturadas de documentação ética desde o primeiro atendimento.
            </p>
          </div>
          <div className="rounded-xl border border-teal-100 bg-teal-50/40 p-5">
            <h3 className="font-bold text-teal-900 mb-1">Especialistas e Pesquisadores</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Clínicos que trabalham estritamente com Prática Baseada em Evidências e necessitam de questionários padronizados (PROMs) para quantificar desfechos e publicar casuísticas clínicas.
            </p>
          </div>
        </div>

        {/* Conclusão com botões */}
        <div className="mb-8 mt-12 rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Conclusão: uma rotina mais organizada, com a tecnologia trabalhando a seu favor</h2>
          <p className="mb-4 leading-relaxed text-slate-200">
            Adotar um software e aplicativo especializado para fisioterapia não é apenas uma escolha operacional; é um posicionamento de valor frente aos seus pacientes e ao mercado de saúde. Ao eliminar a fragmentação de ferramentas e reduzir o tempo desperdiçado com tarefas repetitivas, você conquista mais tempo para estudar, atender com presença plena e proporcionar resultados clínicos superiores.
          </p>
          <p className="mb-6 leading-relaxed text-slate-200">
            O Kynesia reúne o melhor da gestão moderna, prontuário eletrônico veloz, inteligência artificial baseada em evidências e engajamento ativo do paciente em uma interface elegante e intuitiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/start-free"
              className="inline-block text-center rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-slate-950 transition-all hover:bg-teal-400 active:scale-95"
            >
              Começar gratuitamente
            </Link>
            <Link
              href="/"
              className="inline-block text-center rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 font-semibold text-white transition-all hover:bg-slate-700"
            >
              Conhecer a Kynesia
            </Link>
          </div>
        </div>

        {/* PAA - As Pessoas Também Perguntam */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white">
              ?
            </span>
            <h2 className="text-2xl font-bold text-gray-900">As pessoas também perguntam (PAA)</h2>
          </div>

          <div className="space-y-4">
            {paaItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                  <span>{item.question}</span>
                  <span className="text-teal-600 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700 border-t border-gray-100 pt-3 text-sm">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* FAQ Interativo Adicional */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes sobre o Kynesia</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                  <span>{faq.question}</span>
                  <span className="text-teal-600 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700 border-t border-gray-100 pt-3 text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Resumo Clínico e Tecnológico */}
        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-teal-400">
            RESUMO CLÍNICO E TECNOLÓGICO
          </h2>
          <p className="mb-4 leading-relaxed text-gray-300">
            A plataforma Kynesia integra prontuário eletrônico inteligente, agenda operacional e controle financeiro, eliminando a dispersão de dados e proporcionando maior segurança jurídica ao profissional.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A documentação de evolução por inteligência artificial estrutura notas no formato internacional SOAP a partir de relatos por voz ou texto livre, reduzindo o tempo administrativo em mais de 70% sem abdicar da validação humana do fisioterapeuta.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            O suporte à decisão apoia-se em clusters de testes ortopédicos e escalas funcionais validadas (PROMs), viabilizando o monitoramento objetivo de desfechos clínicos e a conformidade com a Prática Baseada em Evidências.
          </p>
          <p className="leading-relaxed text-gray-300">
            O Portal do Paciente amplia o engajamento e a adesão aos exercícios terapêuticos domiciliares com recursos visuais, parâmetros claros e educação em saúde para redução da cinesiofobia.
          </p>
        </div>

        {/* Referências Científicas */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Referências Científicas</h3>
          <ol className="space-y-3 pl-5 list-decimal text-xs text-gray-600 leading-relaxed">
            <li>
              Cormier AA, Desmeules F, Dupuis F, Lafrance S, Côté JS, Dubé MO, et al. Efficacy of Therapeutic Patient Education for Managing Subacute and Chronic Musculoskeletal Conditions: A Systematic Review With Meta-Analysis. <em>J Orthop Sports Phys Ther</em>. 2025;55(10):623-648. doi:10.2519/jospt.2025.13247.
            </li>
            <li>
              Eisele A, Schagg D, Krämer LV, Bengel J, Göhner W. Efficacy of interventions and techniques on adherence to physiotherapy in adults: an overview of systematic reviews and panoramic meta-analysis. <em>Syst Rev</em>. 2024;13:137. doi:10.1186/s13643-024-02538-9.
            </li>
            <li>
              Sackett DL, Rosenberg WM, Gray JA, Haynes RB, Richardson WS. Evidence based medicine: what it is and what it isn&apos;t. <em>BMJ</em>. 1996;312(7023):71-72. doi:10.1136/bmj.312.7023.71.
            </li>
            <li>
              Hegedus EJ, Goode AP, Cook CE, Michener L, Myer CA, Myer WE, Wright AA. Which physical examination tests provide clinicians with the most value when examining the shoulder? Update of a systematic review including meta-analyses. <em>Br J Sports Med</em>. 2012;46(14):964-978. doi:10.1136/bjsports-2012-091066.
            </li>
          </ol>
        </section>

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
              Conteúdo clínico desenvolvido por fisioterapeutas pesquisadores e especialistas em tecnologia em saúde, com foco em gestão clínica, prática baseada em evidências e inovação para fisioterapia.
            </p>
          </div>
        </div>

        {/* Bloco Obrigatório de Conversão CTA do Kynesia */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico completo, agenda inteligente e gestão financeira integrada, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados, indicadores clínicos e ferramentas para otimizar a rotina da sua clínica ou consultório.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se você busca mais organização, produtividade e qualidade no atendimento, conheça gratuitamente o Kynesia.
          </p>
          <Link
            href="/start-free"
            className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-teal-900 transition-all hover:bg-teal-50 hover:shadow-md active:scale-95"
          >
            Começar Grátis
          </Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
