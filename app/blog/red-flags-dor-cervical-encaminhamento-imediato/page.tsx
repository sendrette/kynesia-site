import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/red-flags-dor-cervical-encaminhamento-imediato";

const faqItems = [
  {
    question: "O que são red flags na dor cervical?",
    answer: "Red flags na dor cervical são sinais e sintomas clínicos que indicam a possível existência de patologias graves não mecânicas na coluna cervical, como fraturas, infecções, tumores, mielopatia cervical compressiva ou dissecção arterial cervical, exigindo avaliação e encaminhamento médico imediato."
  },
  {
    question: "Como o fisioterapeuta deve proceder ao identificar uma red flag cervical?",
    answer: "Ao detectar uma red flag cervical, o fisioterapeuta deve interromper imediatamente qualquer intervenção manual de alto risco (como manipulações de alta velocidade ou trações severas), realizar testes neurológicos básicos de triagem, documentar os achados detalhadamente no prontuário e encaminhar o paciente por escrito para o médico especialista ou serviço de urgência."
  },
  {
    question: "Quais sinais indicam risco de dissecção da artéria vertebral?",
    answer: "Os sinais clínicos que sugerem dissecção da artéria vertebral ou carótida incluem dor de cabeça ou no pescoço atípica de início súbito e intensidade severa (\"a pior dor da vida\"), associada aos \"5 Ds e 3 Ns\" (tontura, diplopia, disfagia, disartria, episódios de queda, náusea, nistagmo e dormência perioral)."
  },
  {
    question: "A presença de uma red flag cervical impede todo tipo de fisioterapia?",
    answer: "Sim, para a região cervical. A prioridade imediata do paciente é obter o diagnóstico médico definitivo e a conduta de segurança apropriada. Intervenções físicas na coluna cervical antes da liberação médica podem colocar em risco a integridade medular, neurológica ou vascular do paciente."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Red Flags na Dor Cervical: Quais Sinais Exigem Encaminhamento Imediato?",
  description: "Entenda o que são as red flags dor cervical, aprenda a identificar os 5 principais sinais de alerta clínicos e quando encaminhar o paciente de urgência para o médico.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  image: "https://kynesia.com.br/blog/red-flags-dor-cervical.jpg",
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
  title: "Red Flags na Dor Cervical: Quando Encaminhar com Urgência",
  description: "Identifique as principais red flags dor cervical. Saiba quais sinais de alerta exigem encaminhamento médico imediato e proteja seu paciente. Leia agora!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Red Flags na Dor Cervical: Quando Encaminhar com Urgência",
    description: "Identifique as principais red flags dor cervical. Saiba quais sinais de alerta exigem encaminhamento médico imediato e proteja seu paciente. Leia agora!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/red-flags-dor-cervical.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico detalhado sobre Red Flags na Dor Cervical: Sinais de alerta clínicos e critérios para encaminhamento médico imediato",
      },
    ],
  },
};

export default function RedFlagsDorCervicalPage() {
  return (
    <main className="bg-white text-gray-900 animate-fadeIn">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Avaliação Clínica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Red Flags na Dor Cervical: Quais Sinais Exigem Encaminhamento Imediato?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a rastrear os sinais de alerta clínicos de patologias graves na coluna cervical e saiba quando a conduta de segurança exige o encaminhamento médico de urgência.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 06 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/red-flags-dor-cervical.jpg"
            alt="Infográfico explicativo resumindo as principais red flags dor cervical: dor intensa de início súbito, fraqueza, dormência, tontura, e história de trauma, câncer ou infecção"
            width={1200}
            height={800}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            As <strong>red flags dor cervical</strong> são sinais de alerta clínicos que apontam para a presença de patologias graves subjacentes na região do pescoço, como mielopatia cervical compressiva, dissecção da artéria vertebral, instabilidade ligamentar craniocervical, infecções ativas ou neoplasias. A identificação desses sinais exige a interrupção imediata de terapias manuais e o encaminhamento do paciente por escrito para uma avaliação médica emergencial ou especializada. O rastreio rápido de bandeiras vermelhas é uma habilidade de triagem que previne danos neurológicos permanentes e salva vidas.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A dor cervical (cervicalgia) é um dos sintomas osteomioarticulares mais recorrentes na atenção primária à saúde. Estima-se que até 70% das pessoas sofrerão com desconforto no pescoço em algum momento da vida. Felizmente, na imensa maioria das consultas, a etiologia do quadro clínico é mecânica ou musculoesquelética comum — respondendo de forma rápida e segura a intervenções conservadoras de fisioterapia, como exercícios terapêuticos e educação em dor.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          No entanto, como profissionais de primeiro contato em diversos cenários clínicos, os fisioterapeutas têm a obrigação ética e legal de realizar uma triagem de segurança minuciosa. Uma parcela minoritária, mas de altíssimo impacto clínico, apresenta dores cervicais causadas por condições sistêmicas graves, lesões vasculares ou instabilidade de estruturas críticas da coluna superior.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Para realizar essa triagem, a prática baseada em evidências utiliza os sinais de alerta conhecidos como <strong>red flags dor cervical</strong>. Negligenciar esses marcadores de gravidade pode submeter o paciente a procedimentos contraindicados e atrasar diagnósticos médicos que exigem cirurgia descompressiva imediata ou estabilização arterial.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia e Raciocínio Clínico: Estruturando o Diagnóstico Fisioterapêutico
              </Link>
            </li>
            <li>
              <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">
                → Diagnóstico Diferencial na Prática: Coluna Cervical vs. Articulação do Ombro
              </Link>
            </li>
            <li>
              <Link href="/blog/red-flags-na-fisioterapia" className="text-teal-600 hover:underline">
                → Red Flags na Fisioterapia: Guia Geral de Sinais de Alerta
              </Link>
            </li>
            <li>
              <Link href="/blog/cervical-travada-o-que-fazer-na-hora-e-quando-preocupar" className="text-teal-600 hover:underline">
                → Cervical Travada: O Que Fazer na Crise Aguda e Quando se Preocupar?
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Que São as Red Flags Dor Cervical e Qual a Sua Importância?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          As <strong>red flags dor cervical</strong> compreendem um conjunto de achados na anamnese e exames físicos que elevam a probabilidade clínica de o paciente portar uma afecção sistêmica ou estrutural de alta gravidade. Segundo diretrizes globais da Federação Internacional de Fisioterapeutas Manipulativos Ortopédicos (IFOMPT), o rastreio sistemático dessas bandeiras não visa definir o diagnóstico patológico (que é uma competência médica), mas sim conduzir uma tomada de decisão segura em relação à indicação ou contraindicação da reabilitação física na região afetada.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Na região cervical, o risco clínico é severamente amplificado pela proximidade anatômica da medula espinhal superior, do tronco encefálico, de nervos cranianos e das artérias vertebrais e carótidas internas. A aplicação de força ou a mobilização inapropriada do pescoço em pacientes com instabilidade estrutural ou distúrbios circulatórios ativos pode culminar em acidente vascular cerebral (AVC), paraplegia permanente ou óbito.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">As 5 Principais Red Flags Dor Cervical que Você Precisa Rastrear</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Com base em consensos clínicos e evidências científicas internacionais, organizamos a análise a partir dos cinco pilares fundamentais de sinais de alerta para a dor cervical:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">1. Dor Intensa de Início Súbito</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Um dos sinais mais negligenciados na clínica ortopédica diária é a queixa de dor cervical ou cefaleia occipital de instalação abrupta, frequentemente descrita como \"a pior dor da vida\" ou \"dor em trovão\" (<em>thunderclap headache</em>).
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Dissecção da Artéria Vertebral ou Carótida:</strong> A dor cervical de início súbito unilateral, atípica, é a apresentação mais comum de dissecções vasculares cervicais em adultos jovens antes de um evento isquêmico cerebral definitivo.</li>
              <li><strong>Insuficiência Vertebrobasilar (IVB):</strong> Comprometimento do fluxo sanguíneo para a porção posterior do cérebro. Nesses casos, deve-se aplicar o raciocínio dos \"5 Ds e 3 Ns\": Tontura (<em>Dizziness</em>), Diplopia, Disfagia, Disartria, Episódios de queda (<em>Drop attacks</em>); Náusea, Nistagmo e Dormência (<em>Numbness</em>) facial ou perioral.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">2. Fraqueza ou Perda de Força</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              A fraqueza muscular objetiva deve ser minuciosamente avaliada e diferenciada durante o exame de força segmentar (miótomos) e testes funcionais dos membros.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Radiculopatia Cervical Grave:</strong> Compressão mecânica acentuada de uma raiz nervosa (ex: C5, C6 ou C7) com consequente perda de função motora severa e progressiva (ex: queda da força de pinça, preensão palmar ou incapacidade de realizar abdução do braço).</li>
              <li><strong>Mielopatia Cervical Compressiva:</strong> Compressão da própria medula espinhal. Pacientes com mielopatia cervical desenvolvem fraqueza global nos membros superiores e inferiores, muitas vezes acompanhada de espasticidade e rigidez.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">3. Dormência ou Formigamento</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              As alterações sensoriais (parestesias) de caráter bilateral ou com distribuição que não segue dermátomos anatômicos tradicionais representam um forte sinal de alerta.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Dormência Bilateral ou em Luva e Bota:</strong> Parestesias nas duas mãos e/ou nos pés são indicativos clínicos clássicos de estenose do canal medular cervical com compressão central da medula.</li>
              <li><strong>Dormência Perioral:</strong> A perda de sensibilidade ao redor da boca ou na face sugere comprometimento arterial vertebrobasilar ou grave instabilidade craniocervical afetando vias neurais superiores e pares de nervos cranianos.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">4. Tontura ou Perda de Equilíbrio</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              A queixa de tontura crônica ou episódios de desequilíbrio ao caminhar exige uma distinção rigorosa entre disfunções vestibulares periféricas, proprioceptivas cervicais comuns e comprometimentos neurológicos centrais.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Ataxia da Marcha:</strong> A perda do equilíbrio dinâmico e o caminhar com base alargada (\"marcha ebriosa\") refletem a progressão de uma mielopatia compressiva de coluna cervical.</li>
              <li><strong>Sinais de Neurônio Motor Superior (NMS):</strong> O fisioterapeuta deve realizar testes reflexos. A presença de hiperreflexia profunda generalizada, sinal de Hoffman positivo (flexão involuntária do polegar ao pinçar a unha do dedo médio), sinal de Babinski positivo (extensão do hálux sob estímulo plantar) ou clônus esgotável/inesgotável são indicativos de acometimento da via piramidal medular.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">5. História de Trauma, Câncer ou Infecção</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              O contexto clínico retrospectivo fornece as pistas mais robustas para correlacionar a dor física a patologias estruturais profundas ou sistêmicas.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Trauma de Alta Energia ou Microtraumas em Pacientes com Fragilidade:</strong> Quedas simples em pacientes idosos com osteoporose ou acidentes com chicote cervical (<em>whiplash</em>) aumentam o risco de fraturas do dente da áxis (C2) ou instabilidade ligamentar craniocervical (ligamento transverso e alar). A dor é severa e há relutância em movimentar a cabeça.</li>
              <li><strong>Histórico de Câncer:</strong> Um dos preditores estatísticos mais fortes para lesões tumorais na coluna. A metástase na cervical manifesta-se com dor óssea incessante, dor noturna severa que impede o sono, perda de peso involuntária e inexplicável e falta de resposta a tratamentos conservadores anteriores.</li>
              <li><strong>Sinais de Infecção Ativa (Espondilodiscite/Meningite):</strong> A presença de febre inexplicada, calafrios e suores noturnos associada à dor cervical. Em casos de meningite, o paciente apresentará rigidez de nuca extrema com incapacidade total de fletir a cabeça ao peito (testada pelos sinais de Kernig e Brudzinski). Pacientes imunossupressos ou com histórico de uso recente de cateteres intravenosos possuem alto risco de espondilodiscite cervical.</li>
            </ul>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Dor Cervical Comum (Mecânica) vs. Patologia Grave</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para auxiliar no diagnóstico diferencial de primeiro contato, o quadro clínico geral pode ser sumarizado por características comportamentais da dor. A tabela a seguir estabelece as principais diferenças estruturais:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Parâmetro Clínico</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Dor Cervical Mecânica Comum</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900 text-red-600">Dor por Patologia Grave (Red Flags)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Comportamento da Dor</td>
                <td className="px-6 py-4 text-gray-700">Flutua com o movimento, posições físicas ou repouso. Melhora ao deitar.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Constante, progressiva e implacável. Não se altera com postura ou repouso.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Dor Noturna</td>
                <td className="px-6 py-4 text-gray-700">Ocorre em episódios ao virar na cama, mas alivia ao encontrar posição confortável.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Intensa, perturba o sono de forma grave e exige que o paciente se levante.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Início do Quadro</td>
                <td className="px-6 py-4 text-gray-700">Gradual ou relacionado a esforço físico atípico evidente.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Instalação súbita (\"trovão\") ou pós-trauma de energia moderada/alta.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Sintomas Neurológicos</td>
                <td className="px-6 py-4 text-gray-700">Ausentes ou limitados a parestesia unilateral em dermátomo específico.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Déficit motor progressivo bilateral, ataxia, alteração de marcha ou hiperreflexia.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Sintomas Sistêmicos</td>
                <td className="px-6 py-4 text-gray-700">Ausentes. Paciente com bom estado de saúde geral.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Febre, calafrios, perda de peso inexplicável ou fadiga severa associada.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conduta Recomendada para o Fisioterapeuta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A identificação de uma ou mais **red flags dor cervical** exige que o fisioterapeuta atue pautado em diretrizes rígidas de segurança assistencial:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. Interrupção Imediata:</strong> Suspenda qualquer técnica de terapia manual de alta velocidade (manipulações com impulso/thrust), trações cervicais ou exercícios de alta sobrecarga. Não exponha a coluna fragilizada do paciente a estresses mecânicos desnecessários.
            </li>
            <li>
              <strong>2. Triagem Neurológica e Vascular Rápida:</strong> Se houver sintomas associados ao fluxo arterial posterior ou compressão medular, execute os testes clínicos rápidos de integridade (Hoffmann, Babinski, clonus, reflexos tendinosos e avaliação somatossensorial).
            </li>
            <li>
              <strong>3. Encaminhamento Médico Estruturado:</strong> 
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li><strong>Encaminhamento de Emergência:</strong> Diante de suspeita de dissecção arterial (cefaleia ou cervicalgia de início súbito severo com tontura associada), fraturas pós-trauma recentes ou mielopatia rapidamente progressiva, direcione o paciente imediatamente para o serviço de urgência hospitalar (pronto-socorro).</li>
                <li><strong>Encaminhamento Eletivo de Urgência:</strong> Casos com suspeita de metástase crônica ou espondilodiscite subaguda requerem encaminhamento por escrito para o médico especialista (ortopedista/neurocirurgião), instruindo o paciente a agendar consulta diagnóstica de forma rápida.</li>
              </ul>
            </li>
            <li>
              <strong>4. Registro Legal no Prontuário:</strong> Documente de forma clara a presença dos sinais de alerta, a interrupção da conduta terapêutica direta, a realização do encaminhamento médico e as orientações fornecidas ao paciente. Este registro é crucial para a segurança civil e jurídica do profissional.
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Segurança como Prioridade Clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O rastreio de **red flags dor cervical** consolida o amadurecimento e a autonomia da fisioterapia baseada em evidências. Longe de limitar a atuação do fisioterapeuta, a triagem sistemática de segurança eleva o profissional ao patamar de agente ativo na saúde pública, capaz de identificar quadros que ameaçam a integridade vital do paciente.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Antes de posicionar as mãos no pescoço do seu paciente, pergunte-se: \"Estou diante de um quadro de dor cervical mecânica comum ou há sinais de alerta que exigem encaminhamento?\". Essa resposta diferencia o profissional de excelência de um aplicador comum de técnicas.
        </p>

        {/* As Pessoas Também Perguntam (PAA) */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700 border-t border-gray-100 pt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Resumo Clínico em Destaque */}
        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide">RESUMO CLÍNICO</h2>
          <p className="mb-4 leading-relaxed text-gray-300">
            A triagem de red flags dor cervical é indispensável para todos os fisioterapeutas de primeiro contato, visando descartar patologias sistêmicas ou estruturais graves.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A dor cervical súbita unilateral associada a tonturas exige suspeita imediata de dissecção da artéria vertebral, contraindicando manipulações cervicais de alta velocidade.
          </p>
          <p className="leading-relaxed text-gray-300">
            A identificação de marcadores de neurônio motor superior (como sinal de Hoffmann e Babinski) indica mielopatia compressiva e requer encaminhamento médico urgente.
          </p>
        </div>

        {/* Assinatura da Equipe Kynesia */}
        <PatientCTA />

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

        {/* Bloco de Conversão CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados, indicadores clínicos e ferramentas para otimizar a rotina da clínica.
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
    </main>
  );
}
