import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/guia-completo-funcionalidades-kynesia-app-fisioterapia";
const WA_LINK = "https://wa.me/5512996304111?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20Kynesia";

const faqItems = [
  {
    question: "O que é o Kynesia e para quem ele é indicado?",
    answer:
      "O Kynesia é um aplicativo e plataforma de gestão clínica desenvolvido exclusivamente para fisioterapeutas. Ele atende profissionais autônomos, consultórios, clínicas estruturadas, recém-formados e estudantes de fisioterapia que buscam organizar sua rotina, unificar prontuários e aplicar a prática baseada em evidências em um único lugar.",
  },
  {
    question: "Preciso instalar o Kynesia ou ele roda direto no navegador?",
    answer:
      "O Kynesia funciona 100% em nuvem e abre direto pelo navegador web no computador, tablet ou celular, sem a necessidade de baixar arquivos pesados. Além disso, ele é um Progressive Web App (PWA) e pode ser instalado como aplicativo nativo no Mac, Windows, iPhone e Android com apenas alguns toques.",
  },
  {
    question: "Como instalo o Kynesia no iPhone, Android e Mac?",
    answer:
      "No Mac (Safari), clique no menu Compartilhar e selecione 'Adicionar ao Dock'. No iPhone (Safari), toque no botão Compartilhar e escolha 'Adicionar à Tela de Início'. No Android (Chrome), toque no menu de três pontinhos e selecione 'Instalar app' ou 'Adicionar à tela inicial'. O app passará a abrir em tela cheia com ícone dedicado.",
  },
  {
    question: "Como funciona a agenda e a Disponibilidade Inteligente?",
    answer:
      "A agenda do Kynesia oferece visualizações mensal e semanal integradas, status coloridos para cada atendimento e ações rápidas (confirmar presença, dar falta, reagendar e falar no WhatsApp). A Disponibilidade Inteligente analisa a grade do dia e sugere movimentos automáticos (como antecipar pacientes) para fechar janelas ociosas e abrir espaço para novos encaixes.",
  },
  {
    question: "A inteligência artificial do Kynesia substitui o fisioterapeuta?",
    answer:
      "De forma alguma. A inteligência artificial do Kynesia atua estritamente como apoio clínico e auxílio à documentação. O sistema sugere insights de Prática Baseada em Evidências (PBE), testes ortopédicos e referências com DOI a partir do texto da evolução, mas a avaliação física, o raciocínio diagnóstico e a conduta final permanecem sob responsabilidade exclusiva do fisioterapeuta.",
  },
  {
    question: "Como o paciente acessa a área exclusiva dele?",
    answer:
      "O fisioterapeuta gera um código PIN individual com um clique na ficha do paciente. O paciente acessa o site do Kynesia, clica na aba 'Sou Paciente' e entra utilizando apenas seu número de telefone e o PIN recebido. O acesso tem validade automática de 30 dias para garantir privacidade e segurança.",
  },
  {
    question: "Quais questionários validados (PROMs) estão disponíveis no sistema?",
    answer:
      "O Kynesia disponibiliza instrumentos de avaliação amplamente reconhecidos na literatura, incluindo KOOS (joelho), MSK-HQ (saúde musculoesquelética geral), NDI (incapacidade cervical), NRS (escala numérica de dor), ODI (incapacidade lombar de Oswestry), QuickDASH (membro superior), SF-36 (qualidade de vida) e SPADI (dor e incapacidade no ombro), todos com cálculo automático de scores e gráficos evolutivos.",
  },
  {
    question: "Existe plano gratuito e período de testes sem compromisso?",
    answer:
      "Sim. O Kynesia disponibiliza o plano Start gratuito, que permite gerenciar até 3 pacientes ativos sem nenhum custo. Além disso, novos usuários podem testar todos os recursos avançados da plataforma gratuitamente por 5 dias, sem fidelidade e com cancelamento 100% online.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Funcionalidades do Kynesia: Guia Completo do App de Gestão para Fisioterapia",
  description:
    "Conheça as funcionalidades do Kynesia: tutorial tela por tela de agenda, anamnese guiada com IA, questionários, área do paciente e financeiro. Teste grátis.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  image: "https://kynesia.com.br/blog/guia-funcionalidades-kynesia.jpg",
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
  title: "Funcionalidades do Kynesia: Guia Completo do App de Gestão",
  description:
    "Conheça as funcionalidades do Kynesia: tutorial tela por tela de agenda, anamnese guiada com IA, questionários, área do paciente e financeiro. Teste grátis.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Funcionalidades do Kynesia: Guia Completo do App de Gestão para Fisioterapia",
    description:
      "Tutorial tela por tela de todas as ferramentas e funcionalidades do Kynesia: agenda inteligente, anamnese guiada, apoio de IA na evolução, área do paciente e financeiro.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/guia-funcionalidades-kynesia.jpg",
        width: 1024,
        height: 576,
        alt: "Funcionalidades do Kynesia: Guia Completo do App de Gestão para Fisioterapia",
      },
    ],
  },
};

type FeatureStepProps = {
  id?: string;
  title: string;
  description: string;
  bullets: string[];
  tip?: string;
  imgSrc: string;
  imgAlt: string;
  caption: string;
  width: number;
  height: number;
  reverse?: boolean;
  priority?: boolean;
};

function FeatureStep({
  id,
  title,
  description,
  bullets,
  tip,
  imgSrc,
  imgAlt,
  caption,
  width,
  height,
  reverse = false,
  priority = false,
}: FeatureStepProps) {
  return (
    <div
      id={id}
      className={`my-12 flex flex-col gap-8 scroll-mt-24 lg:items-center ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <figure className="w-full lg:w-1/2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:shadow-md">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={width}
            height={height}
            loading={priority ? undefined : "lazy"}
            priority={priority}
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-xs italic text-slate-500">
          {caption}
        </figcaption>
      </figure>

      <div className="w-full space-y-4 lg:w-1/2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="leading-relaxed text-gray-700">{description}</p>

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
            O que você faz aqui:
          </h4>
          <ul className="space-y-1.5 pl-5 text-sm text-gray-700 list-disc">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {tip && (
          <div className="rounded-xl border-l-4 border-teal-500 bg-teal-50/70 p-4 text-sm text-teal-950">
            <strong className="font-semibold text-teal-900">💡 Na prática: </strong>
            {tip}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GuiaFuncionalidadesKynesiaPage() {
  return (
    <main className="k-page kyn-article">
      <SiteHeader showProgress />

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
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Gestão Clínica & Tutoriais</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Tutorial & Guia Prático
          </span>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Funcionalidades do Kynesia: Guia Completo do App de Gestão para Fisioterapia
          </h1>

          <p className="mb-6 text-lg text-gray-600 md:text-xl">
            Aprenda a utilizar todas as ferramentas do Kynesia da melhor maneira: um tutorial tela por tela cobrindo agenda inteligente, anamnese guiada, apoio de IA na evolução, área do paciente e controle financeiro.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 14 Nov 2026</span>
            <span>⏱ 19 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      {/* Conteúdo do Artigo */}
      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Imagem de Destaque / Capa */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/guia-funcionalidades-kynesia.jpg"
            alt="Conheça todas as ferramentas e funcionalidades do Kynesia - Guia tela por tela"
            width={1024}
            height={576}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-10 rounded-2xl border-2 border-teal-500 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">
            Resposta Rápida
          </h2>
          <p className="font-medium leading-relaxed text-gray-900">
            O Kynesia é um aplicativo de gestão clínica para fisioterapeutas que funciona direto no navegador, no computador e no celular, e pode ser instalado como app. Reúne agenda com disponibilidade inteligente, anamnese guiada com apoio de IA, questionários validados (PROMs), área do paciente e financeiro. Neste guia você vê, tela por tela, como usar cada função. Teste todos os recursos por 5 dias grátis.
          </p>
        </div>

        {/* Introdução */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Centralizar para cuidar melhor: por que unificar sua rotina clínica?
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            A rotina de quem atende em fisioterapia costuma ser dividida entre o cuidado direto na maca e um conjunto exaustivo de processos burocráticos. Quando a agenda fica anotada em um caderno ou bloco de papel, o prontuário em planilhas soltas e as orientações domiciliares dispersas em conversas no WhatsApp, o profissional perde tempo precioso entre cada sessão.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Essa fragmentação não afeta apenas o tempo do fisioterapeuta: ela atinge em cheio a adesão do paciente. Quando o paciente não compreende a natureza do próprio diagnóstico, esquece quais exercícios deveria praticar em casa ou não enxerga a melhora obtida ao longo das semanas, a probabilidade de abandonar o plano antes da alta clínica aumenta consideravelmente.
          </p>
          <p className="leading-relaxed text-gray-700">
            O Kynesia foi construído para resolver exatamente esse gargalo. Ao reunir agendamento inteligente, anamnese estruturada, suporte clínico de Prática Baseada em Evidências (PBE), área do paciente e controle financeiro em um único ambiente, o sistema cria um fluxo integrado onde cada etapa alimenta a próxima. A seguir, você confere um guia detalhado, tela por tela, para extrair o máximo de cada ferramenta.
          </p>
        </section>

        {/* Índice clicável */}
        <nav className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-slate-900">
            Índice de Conteúdo (Navegação Rápida)
          </h3>
          <ol className="grid gap-2 text-sm text-teal-700 md:grid-cols-2">
            <li>
              <a href="#instalacao" className="hover:underline">
                1. Comece: entrar e instalar o Kynesia no celular ou PC
              </a>
            </li>
            <li>
              <a href="#agenda" className="hover:underline">
                2. Agenda para fisioterapeuta: mensal, semanal e ações
              </a>
            </li>
            <li>
              <a href="#pacientes" className="hover:underline">
                3. Pacientes: lista, filtros clínicos e acesso rápido
              </a>
            </li>
            <li>
              <a href="#avaliacao" className="hover:underline">
                4. Anamnese guiada e análise de exames com IA
              </a>
            </li>
            <li>
              <a href="#evolucao-ia" className="hover:underline">
                5. Evolução com sugestão clínica PBE (IA)
              </a>
            </li>
            <li>
              <a href="#area-paciente" className="hover:underline">
                6. Área do paciente: PIN, portal e acompanhamento
              </a>
            </li>
            <li>
              <a href="#questionarios" className="hover:underline">
                7. Questionários validados e gráficos de evolução
              </a>
            </li>
            <li>
              <a href="#ficha-laudo" className="hover:underline">
                8. Ficha do paciente e emissão de laudo automático
              </a>
            </li>
            <li>
              <a href="#financeiro" className="hover:underline">
                9. Financeiro: meta, horas trabalhadas e relatórios
              </a>
            </li>
            <li>
              <a href="#tabela-resumo" className="hover:underline">
                10. Tabela resumo das funcionalidades
              </a>
            </li>
            <li>
              <a href="#adesao-paciente" className="hover:underline">
                11. O paciente mais informado adere mais ao tratamento
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                12. Perguntas Frequentes (FAQ)
              </a>
            </li>
            <li>
              <a href="#resumo-clinico" className="hover:underline">
                13. Resumo Clínico
              </a>
            </li>
          </ol>
        </nav>

        {/* 6.1 Comece: entrar e instalar o Kynesia */}
        <section id="instalacao" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Comece: entrar e instalar o Kynesia no celular ou no computador
          </h2>
          <p className="leading-relaxed text-gray-700">
            O Kynesia foi desenvolvido com foco em praticidade imediata: ele abre diretamente pelo navegador do seu computador de mesa, notebook, tablet ou smartphone, sem exigir instalações complexas. Além disso, conta com tecnologia Progressive Web App (PWA) para que você possa utilizá-lo como um aplicativo instalado com ícone próprio.
          </p>

          {/* Tela 01: Login */}
          <FeatureStep
            title="Acesso Seguro: Entradas para Profissional e Paciente"
            description="Ao abrir a tela inicial do Kynesia, você encontra duas abas de acesso distintas e objetivas: a entrada Profissional, destinada ao fisioterapeuta com e-mail e senha cadastrados, e a aba Sou Paciente, criada para que o paciente acesse sua própria área com telefone e PIN."
            bullets={[
              "Acesse sua conta profissional digitando seu e-mail e senha cadastrados;",
              "Utilize o link 'Esqueci minha senha' para recuperação rápida de credenciais;",
              "Pacientes entram diretamente pela aba exclusiva 'Sou Paciente' sem precisar criar senhas difíceis.",
            ]}
            tip="Salve a página de login nos favoritos do navegador para começar o expediente com um único clique."
            imgSrc="/blog/guia-funcionalidades/01-login.webp"
            imgAlt="Tela de login do Kynesia, aplicativo de gestão para fisioterapeutas, com acesso Profissional e Sou Paciente"
            caption="Tela inicial de login com abas separadas para o fisioterapeuta e o paciente."
            width={1600}
            height={1040}
            priority
          />

          {/* Tela 02: Instalar como app */}
          <FeatureStep
            reverse
            title="Instale como App (PWA) no Celular ou no Computador"
            description="O Kynesia é um PWA completo. Isso significa que você pode instalá-lo diretamente no seu dispositivo sem depender de lojas de aplicativos. No Mac (via Safari), basta clicar em Compartilhar e selecionar 'Adicionar ao Dock'. No iPhone, toque em Compartilhar e 'Adicionar à Tela de Início'. No Android (Chrome), acesse o menu de três pontinhos e clique em 'Instalar app' ou 'Adicionar à tela inicial'. O app passa a abrir em janela própria e limpa, sem a barra de endereços do navegador."
            bullets={[
              "Adicione ao Dock no Mac ou à barra de tarefas no Windows para acesso imediato;",
              "Crie o ícone nativo na tela inicial do iPhone e Android em poucos segundos;",
              "Navegue em tela cheia com carregamento veloz e sensação de aplicativo nativo.",
            ]}
            tip="Instale no computador do consultório e também no seu celular pessoal: assim você consulta a agenda e os registros clínicos a qualquer momento com apenas um toque."
            imgSrc="/blog/guia-funcionalidades/02-instalar-como-app.webp"
            imgAlt="Menu Compartilhar do navegador com a opção Adicionar ao Dock para instalar o Kynesia como app"
            caption="Instalação rápida do Kynesia como aplicativo PWA a partir do menu do navegador."
            width={446}
            height={868}
          />
        </section>

        {/* 6.2 Agenda */}
        <section id="agenda" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Agenda para fisioterapeuta: mensal, semanal e com ações rápidas
          </h2>
          <p className="leading-relaxed text-gray-700">
            A agenda é o coração da rotina de qualquer fisioterapeuta. No Kynesia, o módulo de agendamento foi desenhado para eliminar conflitos de horários, reduzir o tempo ocioso entre sessões e facilitar o contato direto com o paciente sem burocracias.
          </p>

          {/* Tela 03: Agenda Mensal */}
          <FeatureStep
            title="Visão Mensal: Panorama Completo de Atendimentos"
            description="A visão mensal exibe todo o mês em um layout limpo, com marcadores discretos que indicam os dias com atendimentos agendados. O botão 'Hoje' reposiciona a visualização na data atual em um clique, enquanto o alternador superior permite migrar para o modo semanal com facilidade. O atalho para a 'Agenda fixa semanal' fica logo abaixo do título."
            bullets={[
              "Acompanhe o volume de atendimentos distribuído por todos os dias do mês;",
              "Clique em qualquer dia do calendário para inspecionar os horários específicos;",
              "Alterne facilmente entre o planejamento mensal de longo prazo e a rotina semanal.",
            ]}
            tip="Use a visão mensal no final de cada semana para planejar os próximos dias e identificar períodos com menor ocupação."
            imgSrc="/blog/guia-funcionalidades/03-agenda-mensal.webp"
            imgAlt="Agenda mensal do Kynesia com marcadores nos dias com atendimentos"
            caption="Visão mensal com marcadores nos dias de atendimento e atalho para a grade fixa."
            width={1600}
            height={1002}
          />

          {/* Tela 04: Agenda Semanal */}
          <FeatureStep
            reverse
            title="Visão Semanal: Indicadores e Grade por Cores"
            description="Na visão semanal, cartões rápidos no topo resumem os atendimentos de hoje, horários livres do dia, pacientes confirmados na semana e atendimentos pendentes de confirmação. A grade de segunda a sexta conta com um código de cores claro para cada status: Atendido, Confirmado, Pendente, Faltou e Indisponível. Para agendar, basta clicar em 'Agendar' no horário livre desejado."
            bullets={[
              "Veja em tempo real quantos atendimentos restam no dia e quantos horários estão vagos;",
              "Identifique o status de cada consulta instantaneamente pelas cores da grade;",
              "Clique em qualquer bloco disponível para realizar um novo agendamento com agilidade.",
            ]}
            tip="Comece o expediente conferindo o card de pendentes no topo para realizar as confirmações matinais prioritárias."
            imgSrc="/blog/guia-funcionalidades/04-agenda-semanal.webp"
            imgAlt="Agenda semanal do Kynesia com horários livres, confirmados, pendentes e atendidos"
            caption="Grade semanal com cards de métricas no topo e status identificados por cores."
            width={1600}
            height={906}
          />

          {/* Tela 05: Ações do Paciente */}
          <FeatureStep
            title="Ações Rápidas do Paciente sem Sair da Agenda"
            description="Ao clicar sobre o horário agendado de um paciente, o Kynesia abre um menu flutuante de ações rápidas. Em uma única tela você pode reagendar a consulta, confirmar presença (sinalizando que o paciente avisou que comparecerá), cancelar a sessão, marcar como atendido após a finalização, registrar falta, editar os dados do agendamento ou abrir uma conversa direta no WhatsApp do paciente."
            bullets={[
              "Atualize o status da sessão em um clique (Confirmado, Atendido, Falta ou Cancelado);",
              "Dispare mensagens diretamente para o WhatsApp do paciente cadastrado;",
              "Edite observações do horário sem precisar carregar outra página.",
            ]}
            tip="Confirme a presença dos pacientes na véspera e utilize o botão de WhatsApp direto da agenda para tirar dúvidas de localização ou pontualidade."
            imgSrc="/blog/guia-funcionalidades/05-agenda-acoes-do-paciente.webp"
            imgAlt="Cartão do paciente na agenda com opções de confirmar presença, cancelar, marcar falta, editar e enviar WhatsApp"
            caption="Menu flutuante com ações operacionais completas ao clicar no agendamento."
            width={1600}
            height={537}
          />

          {/* Tela 06: Reagendamento Pontual */}
          <FeatureStep
            reverse
            title="Reagendamento Pontual com Cálculo de Minutos"
            description="Quando o paciente precisa remarcar apenas uma consulta específica, a tela de reagendamento pontual evita retrabalho. Você escolhe a nova data, confere o horário atualmente agendado e define o novo horário desejado. O sistema calcula e exibe de forma automática a diferença em minutos (por exemplo, 120 minutos) antes de você salvar a alteração."
            bullets={[
              "Selecione nova data e novo horário em uma interface clara e sem atritos;",
              "Confira a diferença calculada em minutos entre os horários;",
              "Revise as informações e confirme a remarcação de forma instantânea.",
            ]}
            tip="Utilize o reagendamento pontual quando imprevistos surgirem, garantindo que o histórico de alterações fique registrado de forma transparente."
            imgSrc="/blog/guia-funcionalidades/06-reagendamento-pontual.webp"
            imgAlt="Tela de reagendamento pontual do Kynesia com data, horário agendado e novo horário"
            caption="Interface de remarcação pontual com demonstrativo da diferença de horário em minutos."
            width={1042}
            height={1106}
          />

          {/* Tela 07: Disponibilidade Inteligente */}
          <FeatureStep
            title="Disponibilidade Inteligente: Menos Brechas, Mais Encaixes"
            description="Ao editar o agendamento de um paciente, você tem acesso à Disponibilidade Inteligente. Esse módulo classifica todos os horários do dia entre Disponível, Ocupado e Oportunidade, com filtros dedicados (Todos, Disp, Ocup, Oport). O app analisa a grade e sugere movimentos estratégicos, como 'Antecipar' um paciente (por exemplo, adiantar a sessão das 10h para as 9h) para fechar buracos ociosos e liberar blocos maiores para novos atendimentos."
            bullets={[
              "Visualize horários livres, ocupados e oportunidades de otimização em tempo real;",
              "Filtre os períodos com botões rápidos para encontrar janelas com facilidade;",
              "Aproveite sugestões automáticas de antecipação para consolidar atendimentos.",
            ]}
            tip="Antes de responder a um paciente sobre horários disponíveis, consulte a Disponibilidade Inteligente para preencher lacunas e concentrar seu dia."
            imgSrc="/blog/guia-funcionalidades/07-disponibilidade-inteligente.webp"
            imgAlt="Disponibilidade Inteligente do Kynesia listando horários disponíveis, ocupados e oportunidades, com sugestão de antecipar um paciente"
            caption="Painel de Disponibilidade Inteligente sugerindo otimizações para reduzir intervalos ociosos."
            width={1600}
            height={697}
          />

          {/* Tela 08: Agenda Fixa Semanal */}
          <FeatureStep
            reverse
            title="Agenda Fixa Semanal: Visão de Recorrência"
            description="Para pacientes que possuem planos continuados e frequentam a clínica em horários fixos (como duas ou três vezes por semana), a tela de Agenda Fixa Semanal apresenta uma visão ampla e contínua de quem ocupa cada horário recorrente, de segunda a sexta-feira. Isso simplifica o controle de vagas permanentes e previne conflitos de horários em tratamentos longos."
            bullets={[
              "Mapeie com clareza quais pacientes ocupam cada horário fixo na semana;",
              "Identifique horários nobres que estão permanentemente vagos;",
              "Assegure estabilidade e previsibilidade para a escala semanal da clínica.",
            ]}
            tip="Faça uma revisão da sua agenda fixa mensalmente para liberar horários de pacientes que já entraram na fase de transição de alta."
            imgSrc="/blog/guia-funcionalidades/08-agenda-fixa-semanal.webp"
            imgAlt="Agenda fixa semanal do Kynesia mostrando os pacientes nos horários recorrentes"
            caption="Mapeamento da grade fixa de horários de segunda a sexta-feira."
            width={1600}
            height={586}
          />

          {/* CTA após Agenda */}
          <div className="my-10 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-blue-50 p-6 shadow-sm md:p-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Veja o Kynesia na prática na sua rotina clínica
            </h3>
            <p className="mb-6 leading-relaxed text-gray-700">
              Experimente a agenda inteligente, o controle de presença e todos os recursos do Kynesia por <strong>5 dias grátis</strong>. Você também pode começar pelo nosso plano Start gratuito (para até 3 pacientes ativos), acessando direto do celular, tablet ou computador.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-700"
              >
                <span>Chamar no WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/start-free"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                Começar Teste Grátis
              </Link>
            </div>
          </div>
        </section>

        {/* 6.3 Pacientes */}
        <section id="pacientes" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Pacientes: lista, filtros e acesso rápido
          </h2>
          <p className="leading-relaxed text-gray-700">
            A lista de pacientes foi projetada para que você encontre qualquer cadastro em segundos, mesmo em clínicas com grande fluxo diário de atendimentos.
          </p>

          {/* Tela 09: Lista de Pacientes */}
          <FeatureStep
            title="Gestão de Prontuários com Filtros e Acesso ao PIN"
            description="Na tela de Pacientes, você pode buscar rapidamente por nome ou patologia, filtrar por diagnósticos específicos, ordenar alfabeticamente e alternar entre as abas de pacientes Ativos e Altas. Cada linha da listagem exibe o horário da sessão cadastrada e disponibiliza botões de atalho para enviar mensagem no WhatsApp e para Gerar ou Ver o PIN de acesso do paciente."
            bullets={[
              "Busque pacientes digitando apenas parte do nome ou o diagnóstico clínico;",
              "Filtre por patologia para analisar grupos de casos com facilidade;",
              "Separe com clareza quem está em tratamento ativo de quem já concluiu o ciclo com alta;",
              "Acesse os atalhos diretos de conversa no WhatsApp e geração de PIN em um toque.",
            ]}
            tip="Mantenha o hábito de conceder alta clínica aos pacientes concluídos: isso preserva sua lista limpa e respeita o limite do plano Start (que contempla até 3 pacientes ativos simultâneos)."
            imgSrc="/blog/guia-funcionalidades/09-lista-de-pacientes.webp"
            imgAlt="Lista de pacientes do Kynesia com busca, filtro por patologia, ordenação e abas Ativos e Altas"
            caption="Painel de pacientes com barra de busca, filtros de status e atalhos rápidos."
            width={1600}
            height={474}
          />
        </section>

        {/* 6.4 Avaliação com apoio de evidência e IA */}
        <section id="avaliacao" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Anamnese guiada e análise de exames com IA
          </h2>
          <p className="leading-relaxed text-gray-700">
            Uma avaliação estruturada é a base de qualquer intervenção fisioterapêutica eficaz. No Kynesia, o fisioterapeuta conta com roteiros padronizados e recursos consultivos de inteligência artificial para otimizar o tempo de documentação sem abrir mão do rigor científico.
          </p>

          {/* Tela 10: Guia de Anamnese */}
          <FeatureStep
            title="Guia de Anamnese Clínica: Roteiro Estruturado em Blocos"
            description="O Guia de Anamnese Clínica organiza a primeira consulta em blocos didáticos (como identificação, queixa principal, comportamento dos sintomas, histórico pregresso e fatores psicossociais). Cada bloco apresenta objetivos claros da etapa, itens essenciais a serem investigados durante a entrevista e insights clínicos baseados em evidências. É possível salvar e exportar o guia completo em formato PDF."
            bullets={[
              "Siga uma sequência clínica lógica sem esquecer perguntas fundamentais;",
              "Consulte insights fundamentados para correlacionar bandeiras vermelhas e prognósticos;",
              "Exporte o roteiro preenchido da avaliação em PDF para arquivamento ou impressão.",
            ]}
            tip="Consulte os blocos de insights clínicos durante anamneses desafiadoras para apoiar a formulação de hipóteses diagnósticas com rapidez."
            imgSrc="/blog/guia-funcionalidades/10-guia-de-anamnese.webp"
            imgAlt="Guia de Anamnese Clínica do Kynesia com blocos de identificação, queixa principal e insights clínicos"
            caption="Guia de Anamnese estruturado por blocos temáticos com suporte de diretrizes clínicas."
            width={1554}
            height={1590}
          />

          {/* Tela 11: Anamnese Guiada */}
          <FeatureStep
            reverse
            title="Anamnese Guiada com Modelos Oficiais por Região"
            description="A Anamnese Guiada oferece modelos prontos para agilizar a documentação. Você pode escolher entre os Modelos Oficiais validados da plataforma ou Anamneses Personalizadas criadas por você. O sistema permite definir se o template será anexado ao final do texto ou se substituirá o campo, permitindo selecionar a parte anatômica (por exemplo, coluna lombar) e o diagnóstico clínico (como lombalgia mecânica) para carregar o roteiro específico."
            bullets={[
              "Selecione entre modelos oficiais e templates personalizados do seu consultório;",
              "Filtre por região anatômica e patologia para carregar perguntas focadas;",
              "Escolha se o modelo entra no final das notas ou substitui o texto com total flexibilidade.",
            ]}
            tip="Utilize os templates oficiais como base e adapte os detalhes conforme os achados individuais do paciente para documentar com rapidez e precisão."
            imgSrc="/blog/guia-funcionalidades/11-anamnese-guiada.webp"
            imgAlt="Anamnese Guiada do Kynesia com modelos oficiais, parte anatômica e diagnóstico"
            caption="Seleção de templates anatômicos e diagnósticos na Anamnese Guiada."
            width={1198}
            height={1188}
          />

          {/* Tela 12: Exames complementares IA */}
          <FeatureStep
            title="Exames Complementares: Análise de Suporte com IA"
            description="No campo de exames complementares, você pode anexar imagens e laudos radiológicos diretamente ao prontuário do paciente. O Kynesia conta com um módulo de inteligência artificial que auxilia na leitura e análise dos arquivos anexados, destacando termos e achados para enriquecer a compreensão do caso. Vale lembrar: a IA é uma ferramenta de apoio; a interpretação clínica, correlação mecânica e tomada de decisão são sempre do fisioterapeuta."
            bullets={[
              "Faça upload de fotos, exames de imagem e laudos em formato digital;",
              "Receba apontamentos analíticos da IA para apoiar o entendimento das imagens;",
              "Centralize exames complementares na ficha clínica sem risco de perda de arquivos.",
            ]}
            tip="Lembre-se sempre de correlacionar os achados do exame de imagem com a sintomatologia e os testes físicos do paciente para evitar alarmismos com alterações anatômicas naturais da idade."
            imgSrc="/blog/guia-funcionalidades/12-exames-complementares-ia.webp"
            imgAlt="Campo de exames complementares do Kynesia, em que a IA analisa imagens anexadas"
            caption="Módulo de exames complementares com upload de arquivos e leitura assistida por IA."
            width={1600}
            height={238}
          />

          {/* CTA após Anamnese/IA */}
          <div className="my-8 text-center">
            <Link
              href="/start-free"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-teal-700"
            >
              <span>Testar a IA clínica grátis</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* 6.4b IA na evolução clínica */}
        <section id="evolucao-ia" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Evolução com sugestão clínica baseada em evidências (IA)
          </h2>
          <p className="leading-relaxed text-gray-700">
            A evolução fisioterapêutica é o registro legal mais importante de cada atendimento. No Kynesia, o registro diário é enriquecido por uma tecnologia inteligente que processa as anotações da sessão e gera insights de Prática Baseada em Evidências (PBE) com referências científicas completas.
          </p>

          {/* Tela 21: Evolução gerando insights PBE */}
          <FeatureStep
            title="Registro de Evolução com Processamento PBE em Segundos"
            description="Ao registrar a evolução do atendimento (informando a data e o texto livre com o relato do que foi executado e a resposta do paciente), o Kynesia processa as informações em tempo real. O sistema exibe o aviso 'Gerando Insights PBE...' e, em poucos segundos, anexa uma sugestão clínica estruturada àquela evolução. O bloco conta com botões para editar o texto livre e expandir ou recolher o cartão quando desejar."
            bullets={[
              "Escreva o relato da sessão livremente informando condutas e reações do paciente;",
              "Acompanhe o processamento automático de insights de Prática Baseada em Evidências;",
              "Edite a evolução a qualquer momento ou recolha a visualização para manter a tela limpa.",
            ]}
            tip="Quanto mais completa e descritiva for sua evolução (incluindo queixas, testes aplicados e resposta mecânica), mais contextualizada e assertiva será a sugestão gerada."
            imgSrc="/blog/guia-funcionalidades/21-evolucao-gerando-insights-pbe.webp"
            imgAlt="Registro de evolução do paciente no Kynesia com o aviso Gerando Insights PBE enquanto a IA analisa"
            caption="Processamento automático da evolução gerando sugestões de prática baseada em evidências."
            width={1420}
            height={526}
          />

          {/* Tela 22: Sugestão Clínica PBE */}
          <FeatureStep
            reverse
            title="Cartão de Sugestão Clínica: Objetivos, Conduta e Exercícios"
            description="O cartão 'Sugestão Clínica (PBE)' é um recurso didático e consultivo. Ele apresenta: uma análise sintética do quadro com base na sua anotação; os Objetivos prioritários para a fase do tratamento; a Conduta sugerida com propostas de progressão para as próximas consultas; e sugestões de Exercícios para casa, contendo séries e repetições recomendadas. A tela traz um aviso permanente informando que o conteúdo é de apoio clínico, não substitui o julgamento presencial e deve ser validado pelo fisioterapeuta."
            bullets={[
              "Revise objetivos terapêuticos específicos para o momento atual do paciente;",
              "Receba ideias de progressão de carga e técnicas para a sessão seguinte;",
              "Consulte prescrições de exercícios domiciliares com parâmetros de séries e repetições;",
              "Conte com aviso de segurança explícito reforçando sua autonomia profissional.",
            ]}
            tip="Leia a sugestão com olhar crítico, filtre as recomendações que fazem sentido para a tolerância real daquele indivíduo e ajuste doses antes de prescrever."
            imgSrc="/blog/guia-funcionalidades/22-sugestao-clinica-pbe.webp"
            imgAlt="Sugestão clínica PBE do Kynesia com objetivos, conduta sugerida, exercícios para casa e aviso de apoio clínico"
            caption="Sugestão Clínica PBE estruturada com objetivos, conduta sugerida e exercícios domiciliares."
            width={730}
            height={1568}
          />

          {/* Tela 23: Testes específicos e evidência científica */}
          <FeatureStep
            title="Testes Recomendados e Artigos Científicos com DOI"
            description="Na continuação do cartão de evolução, o sistema exibe duas seções fundamentais: 'Testes específicos recomendados', que sugere manobras e testes ortopédicos para reavaliar o paciente naquele estágio da recuperação; e 'Evidência científica', uma lista com referências bibliográficas reais contendo autor, ano de publicação, título do estudo e link oficial com DOI. Um botão de lupa permite consultar o artigo diretamente na fonte."
            bullets={[
              "Consulte quais testes físicos são mais pertinentes para reavaliação periódica;",
              "Veja de onde vieram as sugestões clínicas com autores, datas e títulos de periódicos;",
              "Abra o DOI de cada referência para ler a evidência científica original.",
            ]}
            tip="Use a lista de testes sugeridos para preparar a reavaliação da próxima consulta e demonstrar fundamentação sólida em seus laudos e pareceres."
            imgSrc="/blog/guia-funcionalidades/23-testes-especificos-e-evidencia-cientifica.webp"
            imgAlt="Testes específicos recomendados e lista de evidência científica com autores, ano e DOI no Kynesia"
            caption="Relação de testes clínicos recomendados e referências científicas com link DOI."
            width={728}
            height={618}
          />

          {/* CTA após Evolução/IA */}
          <div className="my-8 text-center">
            <Link
              href="/start-free"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-teal-700"
            >
              <span>Testar a IA clínica grátis</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* 6.5 Área do paciente */}
        <section id="area-paciente" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Área do paciente: PIN e acompanhamento
          </h2>
          <p className="leading-relaxed text-gray-700">
            A Área do Paciente é um dos grandes diferenciais do Kynesia. Ela transforma o paciente em agente ativo da própria recuperação, disponibilizando informações sobre a consulta, educação em dor e plano de exercícios domiciliares sem a necessidade de baixar aplicativos nas lojas.
          </p>

          {/* Tela 13: PIN de acesso */}
          <FeatureStep
            title="PIN de Acesso: Segurança e Simplicidade"
            description="No perfil de cada paciente cadastrado, o fisioterapeuta pode gerar um código PIN exclusivo em um clique. O paciente utilizará esse PIN junto ao seu telefone para acessar sua área dedicada. O código tem validade padrão de 30 dias e expira automaticamente após o período, assegurando conformidade e proteção aos dados de saúde."
            bullets={[
              "Gere o código PIN individual de forma instantânea na ficha do paciente;",
              "Compartilhe o link e o código facilmente por mensagem no WhatsApp;",
              "Mantenha a privacidade garantida com expiração automática em 30 dias.",
            ]}
            tip="Entregue o PIN logo ao término da primeira sessão ou envie pelo WhatsApp acompanhado de uma breve mensagem de orientação para incentivar o primeiro acesso."
            imgSrc="/blog/guia-funcionalidades/13-pin-acesso-paciente.webp"
            imgAlt="Tela Acesso do Paciente do Kynesia com PIN de acesso e validade"
            caption="Painel de geração do PIN de acesso seguro com prazo de validade de 30 dias."
            width={1380}
            height={904}
          />

          {/* Tela 24: Login área do paciente */}
          <FeatureStep
            reverse
            title="Login Simplificado do Paciente: Sem Senhas Complicadas"
            description="Para entrar no portal, o paciente abre o mesmo endereço do Kynesia no navegador do celular ou computador, clica na aba 'Sou Paciente' e digita seu telefone com DDD e o PIN fornecido pelo profissional. A interface é extremamente limpa e orienta o paciente a solicitar o código caso ainda não o tenha em mãos."
            bullets={[
              "Acesso rápido e sem atrito, dispensando downloads pesados nas lojas de apps;",
              "Autenticação direta por telefone e código PIN numérico;",
              "Design responsivo otimizado para navegação confortável em qualquer smartphone.",
            ]}
            tip="Oriente seus pacientes a salvarem o endereço do portal na tela de início do celular para que consultem seus exercícios diários como se fosse um app."
            imgSrc="/blog/guia-funcionalidades/24-login-area-do-paciente.webp"
            imgAlt="Login da Área do Paciente do Kynesia com telefone e PIN de acesso"
            caption="Tela de entrada do paciente com campos diretos de telefone e PIN."
            width={1600}
            height={970}
          />

          {/* Tela 27: Área do paciente início */}
          <FeatureStep
            title="Início do Paciente: Próxima Sessão e Plano de Casa"
            description="A tela inicial da Área do Paciente reúne as informações mais importantes do tratamento: o horário da próxima sessão com eventuais avisos de reagendamento e botão para mensagem; o resumo do progresso do tratamento (sessões contratadas, realizadas e faltas); o diagnóstico com o atalho 'Entenda sua dor'; e o bloco 'Minha Orientação Atual', com o plano de exercícios domiciliares contendo fotos explicativas e links de vídeo."
            bullets={[
              "O paciente visualiza o dia e o horário do próximo atendimento para não faltar;",
              "Acompanha a barra de progresso das sessões já realizadas no plano contratado;",
              "Acessa o plano de casa com explicações claras, imagens e vídeos demonstrativos.",
            ]}
            tip="Ao cadastrar os exercícios de casa, adicione links de vídeos demonstrativos curtos: o suporte visual diminui erros de execução e reforça a segurança do paciente."
            imgSrc="/blog/guia-funcionalidades/27-area-do-paciente-inicio.webp"
            imgAlt="Área do Paciente do Kynesia com horário da sessão, progresso do tratamento, diagnóstico e plano de casa"
            caption="Página inicial do portal do paciente com agendamento, progresso e plano domiciliar."
            width={1600}
            height={987}
          />

          {/* Tela 28: Entenda sua dor */}
          <FeatureStep
            reverse
            title="Entenda sua Dor: Educação Didática que Reduz o Medo"
            description="O painel 'Entenda sua dor' traduz termos técnicos para uma linguagem simples e acolhedora, estruturada em seções como 'O que é?' e 'O que esperar?'. Ao compreender o mecanismo biológico e biomecânico da sua queixa, o paciente desmistifica crenças negativas, reduz o medo de se movimentar (cinesiofobia) e passa a colaborar de maneira muito mais consistente com a reabilitação."
            bullets={[
              "Apresenta o diagnóstico funcional em formato didático e compreensível;",
              "Alinha expectativas realistas sobre o processo de recuperação e prazos de resposta;",
              "Aplica educação em dor contemporânea para fortalecer a aliança terapêutica.",
            ]}
            tip="Mostre a tela 'Entenda sua dor' junto com o paciente ainda durante a avaliação inicial: isso reforça a autoridade profissional e tranquiliza o paciente desde o primeiro dia."
            imgSrc="/blog/guia-funcionalidades/28-entenda-sua-dor.webp"
            imgAlt="Tela Entenda sua dor do Kynesia explicando o diagnóstico em linguagem simples, com O que é e O que esperar"
            caption="Painel educativo 'Entenda sua dor' traduzindo o quadro clínico em linguagem acessível."
            width={1492}
            height={1724}
          />

          {/* Tela 25: Acompanhamento semanal */}
          <FeatureStep
            title="Acompanhamento Semanal: Check-in Entre as Consultas"
            description="O Acompanhamento Semanal é um questionário rápido que o paciente responde diretamente no celular entre as visitas ao consultório. Ele avalia a dor média sentida nos últimos 7 dias em uma escala de 0 a 10, mede o quanto a condição interferiu nas atividades do cotidiano, compara como se sente em relação ao início do tratamento e registra se conseguiu realizar os exercícios prescritos."
            bullets={[
              "Mantém o monitoramento da evolução do paciente durante o intervalo entre consultas;",
              "Coleta métricas de dor, capacidade funcional percebida e execução dos exercícios;",
              "Estimula o compromisso contínuo do paciente com a rotina de recuperação.",
            ]}
            tip="Incentive o paciente a responder ao check-in na véspera da sessão presencial para que você inicie o atendimento já conhecendo o comportamento da dor durante a semana."
            imgSrc="/blog/guia-funcionalidades/25-acompanhamento-semanal-paciente.webp"
            imgAlt="Acompanhamento Semanal no Kynesia com escala de dor de 0 a 10, interferência nas atividades e comparação com o início do tratamento"
            caption="Formulário semanal de check-in respondido pelo próprio paciente no smartphone."
            width={1274}
            height={1728}
          />

          {/* Tela 26: Resposta registrada */}
          <FeatureStep
            reverse
            title="Confirmação Imediata e Alimentação de Gráficos"
            description="Ao enviar as respostas do acompanhamento semanal, o paciente visualiza uma mensagem de agradecimento confirmando que os dados foram recebidos. Essas informações alimentam instantaneamente a ficha clínica do paciente no prontuário do fisioterapeuta, atualizando os gráficos evolutivos de dor, função e adesão sem necessidade de qualquer digitação manual."
            bullets={[
              "Gera confirmação clara e imediata de envio para o paciente;",
              "Atualiza em tempo real as curvas clínicas no prontuário do fisioterapeuta;",
              "Elimina o trabalho burocrático de tabular formulários manualmente.",
            ]}
            tip="Mencione os dados respondidos no início do atendimento: quando o paciente percebe que suas respostas são realmente lidas, a regularidade de preenchimento aumenta."
            imgSrc="/blog/guia-funcionalidades/26-resposta-registrada.webp"
            imgAlt="Mensagem de confirmação Obrigado pelas suas respostas no Kynesia após o acompanhamento semanal"
            caption="Mensagem de confirmação após o envio das respostas do acompanhamento semanal."
            width={1046}
            height={998}
          />
        </section>

        {/* 6.6 Questionários e evolução */}
        <section id="questionarios" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Questionários validados e gráfico de evolução do tratamento
          </h2>
          <p className="leading-relaxed text-gray-700">
            A mensuração objetiva de desfechos clínicos por meio de questionários validados (PROMs) é um dos pilares mais fortes da Prática Baseada em Evidências. No Kynesia, os instrumentos são aplicados com cálculo automático e geram relatórios visuais de progresso.
          </p>

          {/* Tela 14: Questionários validados */}
          <FeatureStep
            title="Biblioteca de Questionários Validados (PROMs)"
            description="O Kynesia conta com um catálogo completo de questionários de referência internacional: KOOS (avaliação de joelho), MSK-HQ (saúde musculoesquelética geral), NDI (incapacidade cervical), NRS (escala numérica de dor), ODI (índice de incapacidade lombar de Oswestry), QuickDASH (disfunções do membro superior), SF-36 (qualidade de vida) e SPADI (dor e incapacidade no ombro). O fisioterapeuta seleciona o paciente e o instrumento para registrar a aplicação em segundos."
            bullets={[
              "Aplique questionários validados para as principais articulações e regiões corporais;",
              "Obtenha o cálculo automático de escores sem necessidade de fórmulas manuais;",
              "Arquive os resultados diretamente na linha do tempo de evoluções do paciente.",
            ]}
            tip="Aplique o questionário adequado na avaliação inicial (linha de base) e reprograme a aplicação a cada 4 ou 6 semanas para monitorar a eficácia da conduta adotada."
            imgSrc="/blog/guia-funcionalidades/14-questionarios-validados.webp"
            imgAlt="Lista de questionários validados do Kynesia: KOOS, MSK-HQ, NDI, NRS, ODI, QuickDASH, SF-36 e SPADI"
            caption="Lista de escalas e questionários funcionais validados disponíveis na plataforma."
            width={1600}
            height={1350}
          />

          {/* Tela 15: Evolução questionário */}
          <FeatureStep
            reverse
            title="Gráficos de Evolução com Percentual de Melhora"
            description="A cada aplicação de questionário, o sistema plota um gráfico longitudinal de todo o tratamento. A tela destaca o valor inicial de referência, o escore atual mais recente, a melhora conquistada em pontos e em porcentagem, além de um histórico cronológico de cada aplicação com resumo da evolução."
            bullets={[
              "Visualize a trajetória da recuperação em gráficos comparativos claros;",
              "Mostre ao paciente o percentual matemático de melhora obtido no tratamento;",
              "Fundamente relatórios com métricas clínicas padronizadas e auditáveis.",
            ]}
            tip="Compartilhe o gráfico na tela durante as sessões de reavaliação: enxergar o avanço em números fortalece a motivação do paciente para seguir até a alta."
            imgSrc="/blog/guia-funcionalidades/15-evolucao-questionario.webp"
            imgAlt="Gráfico de evolução do questionário de dor NRS no Kynesia com valor inicial, atual e melhora"
            caption="Curva longitudinal de evolução de score com cálculo de melhora em percentual."
            width={1600}
            height={1250}
          />

          {/* Tela 16: Acompanhamento clínico */}
          <FeatureStep
            title="Acompanhamento Clínico Periódico: Dor, Função e Adesão"
            description="O painel de Acompanhamento Clínico Periódico reúne os dados dos check-ins semanais preenchidos pelo paciente. Ele plota gráficos simultâneos de evolução dos níveis de dor, da recuperação funcional e da taxa de adesão aos exercícios domiciliares, permitindo ao fisioterapeuta enxergar claramente o comportamento clínico ao longo do tempo."
            bullets={[
              "Acompanhe curvas cruzadas de níveis de dor versus cumprimento dos exercícios de casa;",
              "Identifique precocemente quedas de engajamento antes que resultem em evasão;",
              "Acesse o histórico completo de respostas semanais em uma única tabela consolidada.",
            ]}
            tip="Caso note uma queda na curva de adesão, aproveite a próxima consulta para conversar sobre possíveis barreiras ou ajustar o volume dos exercícios à rotina do paciente."
            imgSrc="/blog/guia-funcionalidades/16-acompanhamento-clinico.webp"
            imgAlt="Acompanhamento clínico periódico no Kynesia com gráficos de dor, função e adesão respondidos pelo paciente"
            caption="Painel clínico integrado correlacionando níveis de dor, função e adesão aos exercícios."
            width={1600}
            height={1045}
          />
        </section>

        {/* 6.7 Ficha e laudo */}
        <section id="ficha-laudo" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Ficha do paciente e laudo automático
          </h2>
          <p className="leading-relaxed text-gray-700">
            A emissão de relatórios e laudos fisioterapêuticos costuma tomar horas de digitação manual. No Kynesia, os dados registrados ao longo das sessões alimentam um gerador inteligente de laudos em poucos cliques.
          </p>

          {/* Tela 17: Ficha do paciente laudo */}
          <FeatureStep
            title="Ficha Completa e Emissão de Laudo em Um Clique"
            description="A ficha do paciente centraliza em seu cabeçalho o diagnóstico clínico e funcional, o modelo de sessão padrão cadastrado, o nome do profissional responsável, a quantidade total de evoluções acumuladas e a data da avaliação inicial. Com um clique no botão 'Gerar Laudo', a plataforma compila o histórico do prontuário em um laudo estruturado e pronto para conferência, impressão ou exportação."
            bullets={[
              "Consulte rapidamente os dados vitais e a contagem de evoluções do caso clínico;",
              "Gere laudos fisioterapêuticos completos de forma automatizada;",
              "Revise os dados compilados e imprima ou envie em formato digital com agilidade.",
            ]}
            tip="Revise sempre o documento gerado antes de entregar a médicos assistentes ou operadoras de saúde, garantindo que as observações reflitam as últimas condutas."
            imgSrc="/blog/guia-funcionalidades/17-ficha-do-paciente-laudo.webp"
            imgAlt="Ficha do paciente no Kynesia com diagnóstico, sessão padrão, número de evoluções e botão Gerar Laudo"
            caption="Cabeçalho da ficha do paciente com histórico geral e atalho para laudo automático."
            width={1600}
            height={425}
          />
        </section>

        {/* 6.8 Financeiro */}
        <section id="financeiro" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Financeiro: meta, horas trabalhadas e relatórios
          </h2>
          <p className="leading-relaxed text-gray-700">
            Ter clareza sobre os números da clínica é fundamental para a sustentabilidade da carreira do fisioterapeuta. O módulo financeiro do Kynesia foi construído para fornecer métricas estratégicas sem a complexidade de sistemas contábeis pesados.
          </p>

          {/* Tela 18: Financeiro */}
          <FeatureStep
            title="Painel Financeiro: Metas, Fluxo e Horas Trabalhadas"
            description="O painel financeiro exibe o total faturado no mês, a meta mensal personalizada com barra de progresso visual, a taxa de presença dos pacientes, o número total de horas trabalhadas no período, o valor médio cobrado por hora de atendimento e o fluxo de caixa mensal. O botão 'Outros meses' permite consultar períodos anteriores e 'Exportar Relatório' salva as informações do mês de maneira organizada."
            bullets={[
              "Defina sua meta de faturamento e monitore o percentual atingido ao longo do mês;",
              "Acompanhe métricas vitais como taxa de presença e valor médio da hora trabalhada;",
              "Exporte relatórios financeiros consolidados para arquivamento ou controle pessoal.",
            ]}
            tip="Defina sua meta no primeiro dia de cada mês para saber com exatidão quantos atendimentos semanais são necessários para atingir seu objetivo."
            imgSrc="/blog/guia-funcionalidades/18-financeiro.webp"
            imgAlt="Painel financeiro do Kynesia com total faturado, meta mensal, taxa de presença, horas trabalhadas e média por hora"
            caption="Visão financeira estratégica com faturamento, metas, horas trabalhadas e taxa de presença."
            width={1600}
            height={985}
          />

          {/* Tela 19: Resumo por paciente */}
          <FeatureStep
            reverse
            title="Resumo por Paciente: Controle de Sessões e Pagamentos"
            description="A seção 'Resumo por paciente (mês atual)' permite selecionar qualquer paciente cadastrado para visualizar: o valor total já pago, o número de sessões realizadas no mês, quantas sessões ainda restam no plano contratado e a porcentagem de frequência de comparecimento."
            bullets={[
              "Controle pacotes de sessões e pagamentos avulsos de forma transparente;",
              "Saiba exatamente quantas sessões restam antes de propor a renovação do plano;",
              "Monitore a assiduidade individual de cada paciente para prevenir faltas recorrentes.",
            ]}
            tip="Quando restarem 2 sessões para a conclusão do plano contratado, utilize os dados do resumo para planejar a conversa de renovação ou a programação da alta."
            imgSrc="/blog/guia-funcionalidades/19-resumo-por-paciente.webp"
            imgAlt="Resumo financeiro por paciente no Kynesia com valor pago, sessões feitas, sessões a fazer e frequência"
            caption="Demonstrativo financeiro individual com saldo de sessões e taxa de frequência."
            width={1600}
            height={620}
          />

          {/* Tela 20: Relatório de atendimentos */}
          <FeatureStep
            title="Relatório de Atendimentos em PDF: Prestação de Contas Limpa"
            description="O Relatório de atendimentos em PDF consolida os números do mês em um documento formal e organizado. Ele resume a quantidade de atendimentos realizados, faltas gerais, faltas justificadas e a frequência percentual de presença, detalhando a data, o horário e a situação de cada atendimento prestado."
            bullets={[
              "Emita relatórios mensais em PDF com diagramação limpa e profissional;",
              "Consulte a lista detalhada com data, horário e status de cada sessão realizada;",
              "Mantenha registros formais para controle gerencial ou prestação de contas.",
            ]}
            tip="Exporte o relatório em PDF no último dia de cada mês e arquive em sua pasta digital para construir um histórico seguro da sua produtividade."
            imgSrc="/blog/guia-funcionalidades/20-relatorio-de-atendimentos.webp"
            imgAlt="Relatório de atendimentos mensal em PDF gerado pelo Kynesia com atendimentos, faltas e frequência"
            caption="Relatório mensal de atendimentos em formato PDF pronto para conferência e exportação."
            width={745}
            height={526}
          />
        </section>

        {/* 10. Tabela Resumo */}
        <section id="tabela-resumo" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Tabela Resumo: Funcionalidades, Aplicação e Benefícios
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            Veja como cada ferramenta do Kynesia atua na rotina clínica e qual o impacto prático gerado no seu dia a dia profissional:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-800">
                <tr>
                  <th className="p-4">Funcionalidade</th>
                  <th className="p-4">Para que serve</th>
                  <th className="p-4">Benefício para o Fisioterapeuta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 font-semibold text-gray-900">PWA / Instalação</td>
                  <td className="p-4">Acessar direto no navegador e instalar como app no PC ou celular</td>
                  <td className="p-4">Rapidez no acesso sem depender de lojas de aplicativos ou downloads pesados</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Agenda Inteligente</td>
                  <td className="p-4">Organizar horários com código de cores e disponibilidade inteligente</td>
                  <td className="p-4">Menos janelas ociosas, maior taxa de presença e ações rápidas com WhatsApp</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Anamnese Guiada</td>
                  <td className="p-4">Preencher a avaliação com modelos oficiais por região e patologia</td>
                  <td className="p-4">Avaliação padronizada, mais ágil e fundamentada em evidências científicas</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Evolução com IA (PBE)</td>
                  <td className="p-4">Gerar insights clínicos, condutas e testes com links DOI</td>
                  <td className="p-4">Apoio ao raciocínio clínico com transparência e fundamentação teórica</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Área do Paciente & PIN</td>
                  <td className="p-4">Oferecer portal com agendamentos, exercícios e 'Entenda sua dor'</td>
                  <td className="p-4">Maior adesão aos exercícios de casa, redução do medo e aliança terapêutica</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Questionários (PROMs)</td>
                  <td className="p-4">Aplicar KOOS, ODI, NDI, NRS e gerar gráficos de melhora percentual</td>
                  <td className="p-4">Mensuração objetiva de desfechos para respaldar laudos e engajar o paciente</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Painel Financeiro</td>
                  <td className="p-4">Controlar metas, horas trabalhadas, sessões restantes e emitir PDF</td>
                  <td className="p-4">Previsibilidade de faturamento, controle de pacotes e gestão profissional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 11. Argumento Central: Adesão do Paciente */}
        <section id="adesao-paciente" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Como o paciente mais informado e integrado adere mais ao tratamento
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Um dos maiores desafios enfrentados na fisioterapia moderna é o absenteísmo e a evasão precoce do tratamento. Muitas vezes, o paciente não interrompe as sessões por falta de recursos, mas sim porque não compreende a evolução do seu quadro ou não percebe o valor do que está sendo executado.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            A tendência na saúde baseada em valor aponta claramente para o empoderamento do paciente como copartícipe da sua própria reabilitação. No Kynesia, esse princípio é materializado em várias ferramentas:
          </p>
          <ul className="mb-6 space-y-3 pl-5 text-gray-700 list-disc">
            <li>
              <strong>Compreensão clara do diagnóstico:</strong> Com o painel 'Entenda sua dor', o paciente deixa de enxergar sua queixa como uma sentença definitiva e passa a entender que a dor é um sinal modificável por meio de movimento e educação.
            </li>
            <li>
              <strong>Acompanhamento ativo de exercícios:</strong> Ter o plano de casa com fotos e vídeos na tela do celular diminui a insegurança na execução e favorece a prática regular fora do consultório.
            </li>
            <li>
              <strong>Sensação de acompanhamento contínuo:</strong> O check-in semanal mantém o paciente conectado ao terapeuta mesmo nos dias sem consulta presencial.
            </li>
            <li>
              <strong>Visualização gráfica da recuperação:</strong> Quando o paciente vê seu escore de dor caindo e sua funcionalidade aumentando em gráficos objetivos, ele renova a motivação para atingir a alta definitiva.
            </li>
          </ul>
        </section>

        {/* 12. FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            Perguntas Frequentes sobre as Funcionalidades do Kynesia
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  <span>{faq.question}</span>
                  <span className="text-teal-600 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 13. Resumo Clínico */}
        <section id="resumo-clinico" className="scroll-mt-24 border-t border-slate-200 pt-10">
          <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-md">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-teal-400">
              Resumo Clínico: O Kynesia em Diferentes Cenários Profissionais
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="mb-2 text-base font-bold text-white">Para o Autônomo</h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  Centraliza agenda, prontuário e recebimentos em uma única tela no celular. Elimina o papel, reduz faltas com ações rápidas de WhatsApp e profissionaliza o contato com o paciente.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-base font-bold text-white">Para Consultórios e Clínicas</h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  Oferece controle de disponibilidade inteligente, métricas de taxa de presença e acompanhamento de planos de sessões, garantindo previsibilidade de caixa e padronização clínica.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-base font-bold text-white">Para Estudantes e Recém-Formados</h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  Serve como suporte seguro para guiar anamneses estruturadas, consultar roteiros validados e acessar referências científicas reais com links DOI para cada conduta sugerida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leia Também */}
        <section className="my-12 rounded-2xl border border-blue-200 bg-blue-50/70 p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-900">
            📚 Leia também no blog do Kynesia:
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/blog/melhor-app-de-fisioterapia-kynesia"
                className="font-medium text-teal-700 hover:underline"
              >
                → Melhor App de Fisioterapia em 2026? Conheça os Diferenciais do Kynesia
              </Link>
            </li>
            <li>
              <Link
                href="/blog/prontuario-eletronico-fisioterapia-como-escolher-2026"
                className="font-medium text-teal-700 hover:underline"
              >
                → Prontuário Eletrônico para Fisioterapia: Como Escolher o Melhor Sistema em 2026
              </Link>
            </li>
            <li>
              <Link
                href="/blog/melhor-software-para-fisioterapia-2026"
                className="font-medium text-teal-700 hover:underline"
              >
                → Melhor Software para Fisioterapia em 2026: Análise Completa de Recursos
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA do Paciente */}
        <PatientCTA />

        {/* Assinatura da Equipe Kynesia */}
        <div className="mb-12 flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">EQUIPE KYNESIA</p>
            <p className="text-sm text-gray-600">
              Conteúdo clínico e gerencial desenvolvido para fisioterapeutas, clínicas e estudantes que buscam aliar prática baseada em evidências, tecnologia digital e excelência no atendimento.
            </p>
          </div>
        </div>

        {/* Bloco Obrigatório Final de Conversão */}
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl md:p-10">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">
            Comece a transformar sua rotina clínica hoje mesmo
          </h3>
          <p className="mb-4 leading-relaxed text-teal-100">
            Experimente todos os recursos do Kynesia gratuitamente por <strong>5 dias completos</strong>. Tenha acesso à agenda inteligente, anamnese guiada, apoio de inteligência artificial na evolução clínica, portal do paciente e gestão financeira.
          </p>
          <p className="mb-8 text-sm text-teal-200">
            ✓ Sem necessidade de instalação pesada • ✓ Funciona no celular, tablet e computador • ✓ Cancelamento online, sem carência ou fidelidade
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/start-free"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 font-bold text-teal-900 shadow-md transition hover:bg-teal-50"
            >
              Começar Grátis
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-300 bg-teal-700/60 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-700"
            >
              <span>Falar no WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
