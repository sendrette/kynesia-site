import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/dor-na-coluna-mitos-crencas-o-que-fazer";

const paaItems = [
  {
    question: "O que não se deve fazer quando está com dor na coluna?",
    answer:
      "Durante um episódio de dor na coluna, deve-se evitar o repouso absoluto prolongado no leito, alongamentos forçados no limite da dor aguda, automedicação sem supervisão médica e a imobilização contínua com cintas rígidas sem prescrição. O repouso excessivo enfraquece a musculatura paravertebral, aumenta a rigidez articular e eleva a sensibilidade do sistema nervoso central à dor.",
  },
  {
    question: "Quando a coluna trava, é melhor ficar de repouso?",
    answer:
      "Não. O repouso total na cama por dias piora o prognóstico de recuperação. Nas primeiras 24 horas de travamento intenso, pequenos intervalos em posições antálgicas (como deitar de lado com um travesseiro entre os joelhos ou de costas com pernas elevadas) são aceitáveis para aliviar o espasmo protetor agudo, mas a retomada de movimentos leves e caminhadas curtas deve ocorrer o mais breve possível.",
  },
  {
    question: "Quem tem hérnia de disco pode fazer musculação?",
    answer:
      "Sim, pode e deve. A musculação orientada é uma das intervenções mais eficazes e respaldadas pela literatura para fortalecer a musculatura estabilizadora do tronco, glúteos e membros inferiores, além de estimular a remodelação tecidual discal por meio de cargas progressivas bem dosadas, desde que os movimentos respeitem a tolerância individual do paciente.",
  },
];

const faqItems = [
  {
    question: "Estalar a coluna pode causar uma lesão?",
    answer:
      "Não há evidências de que o som de estalo habitual cause danos ou desgaste nas estruturas da coluna. O ruído característico resulta do fenômeno de cavitação articular — a rápida formação e colapso de microbolhas de gás no líquido sinovial articular sob variação de pressão. Contudo, tentar forçar a coluna a estalar repetidas vezes de forma agressiva pode irritar tecidos ligamentares e musculares já sensíveis.",
  },
  {
    question: "Dor ao se movimentar significa que estou piorando?",
    answer:
      "Nem sempre. Em quadros agudos e subagudos, o sistema nervoso central pode estar em estado de hiperalgesia e hipersensibilização de proteção (guarda protetora). Sentir um leve desconforto ou dor tolerável durante o movimento geralmente não indica dano ou ruptura tecidual, mas sim que o sistema de alarme corporal está hipervigilante. A regra clínica é manter o desconforto dentro de limites aceitáveis e monitorar a resposta nas 24 horas seguintes.",
  },
  {
    question: "A postura errada é a causa da dor lombar?",
    answer:
      "Estudos sistemáticos contemporâneos demonstram que não existe uma postura ideal estática capaz de prevenir ou causar dor lombar isoladamente. O corpo humano foi projetado para se movimentar e suportar variadas posições. A principal vilã não é a postura que você adota temporariamente, mas sim a manutenção prolongada e sem pausas da mesma posição ao longo do dia e o sedentarismo geral.",
  },
  {
    question: "A dor na coluna pode voltar mesmo depois do tratamento?",
    answer:
      "Episódios de recidiva são comuns ao longo da vida, pois a coluna é solicitada em todas as atividades diárias. No entanto, uma reabilitação baseada em fortalecimento muscular, educação em neurociência da dor e perda do medo do movimento reduz drasticamente a intensidade e a frequência dessas crises. Quando o paciente compreende o processo, uma nova crise é encarada sem pânico e resolvida com muito mais rapidez e autonomia.",
  },
];

const allStructuredFaqs = [...paaItems, ...faqItems];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor na Coluna: Mitos, Crenças e o Que Você Pode Fazer",
  description:
    "Descubra o que a ciência diz sobre dor na coluna: mitos comuns, o que fazer quando a coluna trava, exercícios para hérnia de disco, cinesiofobia e como recuperar o movimento.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  image: "https://kynesia.com.br/blog/dor-na-coluna-mitos-crencas-o-que-fazer.jpg",
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
  title: "Dor na Coluna: Mitos, Crenças e o Que Você Pode Fazer | Kynesia",
  description:
    "Mitos sobre dor na coluna, o que fazer quando trava, exercícios para hérnia de disco e como a fisioterapia devolve a confiança no movimento sem repouso excessivo.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor na Coluna: Mitos, Crenças e o Que Você Pode Fazer",
    description:
      "O que as evidências científicas revelam sobre movimento, repouso, crises de dor, catastrofização e cinesiofobia.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/dor-na-coluna-mitos-crencas-o-que-fazer.jpg",
        width: 1024,
        height: 575,
        alt: "Infográfico explicativo sobre dor na coluna, mitos, crenças e orientações baseadas em evidências",
      },
    ],
  },
};

export default function DorNaColunaMitosCrencasPage() {
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
          <span className="font-medium text-teal-600">Dor na Coluna: Mitos, Crenças e o Que Fazer</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor e Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor na Coluna: Mitos, Crenças e o Que Você Pode Fazer
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            O que as evidências científicas revelam sobre movimento, repouso, crises de dor, catastrofização e cinesiofobia.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 26 Out 2026</span>
            <span>⏱ 16 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      {/* Artigo */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/dor-na-coluna-mitos-crencas-o-que-fazer.jpg"
            alt="Dor na Coluna: Mitos, Crenças e o Que Você Pode Fazer - Guia Clínico Kynesia"
            width={1024}
            height={575}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">Resposta Rápida — Featured Snippet</h2>
          <p className="text-gray-900 leading-relaxed font-medium">
            Dor na coluna não significa necessariamente que exista uma lesão grave ou que todos os movimentos devam ser evitados. Na maioria dos casos, manter atividades toleráveis, adaptar temporariamente os esforços e retomar os movimentos de forma progressiva pode fazer parte da recuperação, após considerar os sinais de alerta e as características de cada pessoa.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700 text-lg">
          A dor na coluna vertebral — e em especial a <strong>dor lombar</strong> — é uma das condições de saúde mais prevalentes no planeta, figurando como a principal causa de anos vividos com incapacidade funcional em todo o mundo. No entanto, poucas áreas da saúde acumularam tantos equívocos, mitos paralisantes e crenças iatrogênicas quanto o cuidado com as costas.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          Por décadas, perpetuou-se a falsa noção de que a coluna humana seria uma estrutura frágil, suscetível a desgastes catastróficos por qualquer esforço mecânico, e que o repouso absoluto em uma cama dura seria o remédio soberano. As diretrizes científicas contemporâneas — incluindo a marcante série sobre dor lombar do periódico <em>The Lancet</em> e consensos internacionais de fisioterapia musculoesquelética — demonstraram exatamente o oposto: a coluna é forte, adaptável e necessita de movimento e carga dosada para se manter saudável.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste guia clínico detalhado, examinaremos com rigor técnico o que as pesquisas de ponta afirmam sobre mitos frequentes, condutas durante crises agudas, exercícios com hérnia de disco, o papel psicológico da catastrofização e cinesiofobia, e como a fisioterapia baseada em evidências atua para resgatar a capacidade funcional e a confiança de cada pessoa.
        </p>

        {/* Bloco Leia Também */}
        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também no Blog Kynesia:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-na-lombar-posso-correr" className="text-teal-600 hover:underline">
                → Dor na Lombar: Posso Correr? O Que Dizem as Evidências Científicas
              </Link>
            </li>
            <li>
              <Link href="/blog/hernia-de-disco-tem-cura-entenda-o-tratamento" className="text-teal-600 hover:underline">
                → Hérnia de Disco Tem Cura? Entenda o Tratamento Baseado em Evidências
              </Link>
            </li>
            <li>
              <Link href="/blog/red-flags-dor-lombar-quando-suspeitar" className="text-teal-600 hover:underline">
                → Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves
              </Link>
            </li>
            <li>
              <Link href="/blog/yellow-flags-na-fisioterapia-fatores-psicossociais" className="text-teal-600 hover:underline">
                → Yellow Flags na Fisioterapia: Identificando Fatores Psicossociais de Risco
              </Link>
            </li>
            <li>
              <Link href="/blog/abordagem-biopsicossocial-dor-cronica" className="text-teal-600 hover:underline">
                → Abordagem Biopsicossocial da Dor Crônica: Superando o Modelo Biomédico
              </Link>
            </li>
          </ul>
        </div>

        {/* H2 - Mitos mais comuns */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          Quais são os mitos mais comuns sobre dor na coluna?
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Muitas pessoas chegam aos consultórios de fisioterapia carregando crenças profundamente arraigadas que, além de não terem suporte na literatura científica, atuam como barreiras psicológicas ativas contra a reabilitação. A seguir, desmistificamos os principais dogmas sobre a dor na coluna:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-red-500 font-extrabold text-xl">✕</span> Mito 1: Dor na coluna sempre indica dano tecidual ou lesão grave
            </h3>
            <p className="leading-relaxed text-gray-700">
              <strong>O que diz a ciência:</strong> A dor é um mecanismo neurofisiológico complexo de alarme e proteção, não um medidor direto de lesão física. Estudos clássicos (como os de <em>Brinjikji et al., 2015</em>) avaliaram ressonâncias magnéticas em milhares de pessoas completamente assintomáticas (sem nenhuma dor nas costas) e encontraram achados frequentes: mais de 80% das pessoas de 50 anos apresentavam degeneração discal e protusão discal sem sentir absolutamente nada. A imagem não dita seu destino, e dor não equivale à destruição estrutural.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-red-500 font-extrabold text-xl">✕</span> Mito 2: Repouso absoluto na cama é a melhor forma de se recuperar
            </h3>
            <p className="leading-relaxed text-gray-700">
              <strong>O que diz a ciência:</strong> O repouso prolongado no leito é uma das recomendações mais prejudiciais para a coluna. A imobilização reduz a circulação de fluidos nos discos intervertebrais, atrofia rapidamente a musculatura estabilizadora e amplia a sensibilização do sistema nervoso central à dor. Ensaios clínicos randomizados comprovam que pacientes que mantêm atividade física diária tolerada se recuperam significativamente mais rápido e têm menos chance de cronificação.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-red-500 font-extrabold text-xl">✕</span> Mito 3: A coluna vertebral é frágil e &ldquo;sai do lugar&rdquo; facilmente
            </h3>
            <p className="leading-relaxed text-gray-700">
              <strong>O que diz a ciência:</strong> A coluna vertebral humana é uma obra-prima de engenharia biológica. Composta por vértebras ósseas maciças, discos intervertebrais com anéis fibrosos entrelaçados extremamente resistentes e uma densa rede de ligamentos e músculos potentes, a coluna não &ldquo;sai do lugar&rdquo; com movimentos habituais ou estalos cotidianos. A metáfora mecânica de peças desalinhadas alimenta o medo e não reflete a realidade anátomo-fisiológica.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-red-500 font-extrabold text-xl">✕</span> Mito 4: Existe uma &ldquo;postura perfeita&rdquo; e desvios causam dor
            </h3>
            <p className="leading-relaxed text-gray-700">
              <strong>O que diz a ciência:</strong> Revisões sistemáticas não encontraram correlação causal direta entre graus de curvatura da coluna, hiperlordose ou posturas sentadas e a presença de dor lombar. Pessoas com diferentes tipos de alinhamento corporal vivem sem dor, enquanto pessoas com posturas teoricamente &ldquo;ideais&rdquo; também desenvolvem crises. O fator determinante não é a postura estática, mas a falta de variação e movimentação contínua. Como se diz na biomecânica contemporânea: <em>a sua melhor postura é a próxima postura</em>.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-2 text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="text-red-500 font-extrabold text-xl">✕</span> Mito 5: Ressonância magnética imediata é essencial para tratar a dor
            </h3>
            <p className="leading-relaxed text-gray-700">
              <strong>O que diz a ciência:</strong> Diretrizes médicas mundiais desaconselham exames de imagem de rotina nas primeiras 4 a 6 semanas de dor lombar comum na ausência de bandeiras vermelhas (red flags). Exames precoces e desnecessários costumam gerar alarmismo com laudos repletos de termos anatômicos assustadores (como &ldquo;artrose&rdquo;, &ldquo;desidratação&rdquo; ou &ldquo;bicos de papagaio&rdquo;), aumentando o estresse psicológico e cirurgias invasivas sem benefício clínico real.
            </p>
          </div>
        </div>

        {/* H2 - O que fazer quando a coluna trava */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          O que fazer quando a coluna trava?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A expressão popular &ldquo;minha coluna travou&rdquo; descreve um episódio agudo e incapacitante no qual qualquer tentativa de flexionar, estender ou girar o tronco provoca dor aguda e sensação de bloqueio mecânico. No entanto, do ponto de vista fisiopatológico, na grande maioria das vezes não há vértebras deslocadas, mas sim um <strong>espasmo muscular reflexo de proteção intensa</strong> (a chamada <em>guarda muscular</em> ou <em>muscle guarding</em>).
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          O sistema nervoso central, ao interpretar uma ameaça aos tecidos adjacentes, envia comandos maciços para contrair a musculatura paravertebral profunda e superficial simultaneamente, com o objetivo de imobilizar a região como uma cinta biológica temporária. Saber conduzir as primeiras 48 horas evita que esse estado protetor se perpetue:
        </p>

        <div className="mb-8 space-y-4">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Adote posições de alívio temporário (Posições Antálgicas)</h3>
            <p className="leading-relaxed text-gray-700 mb-3">
              No ápice da dor aguda, procure posições que descarreguem a compressão axial na coluna lombar. Duas posições altamente eficazes são:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
              <li><strong>Posição 90/90 no chão:</strong> Deite-se de costas no chão sobre um colchonete ou tapete macio e repouse as pernas flexionadas a 90 graus sobre o assento de uma cadeira ou sofá. Essa posição relaxa a musculatura do psoas e eretores da espinha.</li>
              <li><strong>Decúbito lateral com travesseiro:</strong> Deite-se de lado com os joelhos semiflexionados e coloque um travesseiro entre eles para nivelar a pelve e reduzir a rotação lombar.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Aplique calor local superficial</h3>
            <p className="leading-relaxed text-gray-700">
              Bolsas de água morna ou compressas térmicas na região lombar por 15 a 20 minutos promovem vasodilatação, reduzem a excitabilidade dos fusos neuromusculares e aliviam a rigidez decorrente do espasmo protetor. O calor atua modulando a percepção da dor através da teoria dos portões espinhais.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Realize respiração diafragmática ritmada</h3>
            <p className="leading-relaxed text-gray-700">
              Durante o travamento, o estresse eleva o tônus simpático e a frequência respiratória, retesando a caixa torácica e a fáscia toracolombar. Puxe o ar profundamente pelo nariz expandindo a barriga e expire lentamente pela boca. A ativação do sistema nervoso parassimpático ajuda a quebrar o reflexo de contração involuntária.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Introduza micro-movimentos toleráveis</h3>
            <p className="leading-relaxed text-gray-700">
              Assim que a dor atenuar um pouco, inicie movimentos pélvicos mínimos, como a retroversão e anteversão da pelve (bascular suavemente o quadril enquanto deitado), movimentando os pés e os tornozelos. Movimentos de amplitude curta sem forçar a dor informam o cérebro de que a articulação continua funcional e segura.
            </p>
          </div>
        </div>

        {/* H2 - Hérnia de disco pode se exercitar */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          Quem tem hérnia de disco pode se exercitar?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A resposta científica categórica é: <strong>sim, quem tem hérnia de disco não apenas pode, como deve se exercitar</strong>. O diagnóstico de protrusão ou hérnia de disco não é uma sentença de inatividade ou fragilidade corporal.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Durante muitos anos, o paciente com hérnia de disco recebia a instrução equivocada de que nunca mais deveria carregar peso, correr ou praticar esportes de impacto. Hoje, sabemos que os discos intervertebrais são estruturas avasculares no adulto — ou seja, dependem essencialmente da <em>difusão de nutrientes e água por embebição</em>. O ciclo alternado de carga e descarga mecânica proporcionado pelo exercício físico ativo funciona como uma verdadeira esponja biológica que nutre, reidrata e estimula o metabolismo celular discal.
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
          <h3 className="mb-3 text-lg font-bold text-teal-900">O fenômeno da reabsorção espontânea da hérnia de disco</h3>
          <p className="leading-relaxed text-teal-950 mb-3 text-sm">
            Um dos achados mais fascinantes da medicina moderna é que <strong>a grande maioria das hérnias de disco regride espontaneamente com o passar do tempo</strong>. Meta-análises internacionais demonstram que:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-teal-950 text-sm">
            <li>Hérnias extrusas e sequestradas (aquelas que ultrapassam o ligamento vertebral posterior) têm as maiores taxas de reabsorção biológica espontânea — chegando a mais de 70% a 90% dos casos.</li>
            <li>O sistema imunológico reconhece o material gelatinoso do núcleo pulposo no espaço peridural como tecido vascularmente exposto, enviando macrófagos para fagocitar e reabsorver o fragmento herniado naturalmente.</li>
            <li>Portanto, o foco primário do tratamento fisioterapêutico é controlar os sintomas, modular a dor e restaurar a função motora enquanto o organismo realiza sua cicatrização biológica.</li>
          </ul>
        </div>

        <p className="mb-6 leading-relaxed text-gray-700">
          A progressão dos exercícios deve seguir o princípio do manejo gradual de carga:
        </p>
        <ul className="mb-8 space-y-3 pl-6 list-disc text-gray-700">
          <li><strong>Fase inicial:</strong> Caminhadas em piso plano, exercícios de controle motor do transverso do abdômen, multífidos e glúteos, com posições que centralizem os sintomas dolorosos.</li>
          <li><strong>Fase intermediária:</strong> Exercícios de cadeia cinética fechada com peso corporal (pontes de glúteo, agachamentos parciais, remadas adaptadas).</li>
          <li><strong>Fase avançada e retorno ao esporte:</strong> Treino de força resistida (musculação com carga progressiva), levantamento terra adaptado, corrida e exercícios funcionais específicos para o trabalho e lazer.</li>
        </ul>

        {/* H2 - O que são catastrofização e cinesiofobia */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          O que são catastrofização e cinesiofobia?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Na abordagem biopsicossocial da dor, compreendemos que o sofrimento físico não decorre apenas de fatores anatômicos, mas da integração de aspectos biológicos, psicológicos e contextuais. Dois fatores cognitivo-comportamentais fundamentais no prognóstico da dor lombar são a <strong>catastrofização</strong> e a <strong>cinesiofobia</strong>:
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Catastrofização da Dor</h3>
            <p className="mb-3 text-sm font-medium text-teal-600">Ruminação, Ampliação e Desamparo</p>
            <p className="leading-relaxed text-gray-700 text-sm mb-3">
              A catastrofização é um conjunto de respostas cognitivas e emocionais negativas exageradas a estímulos dolorosos reais ou previstos. A pessoa catastrofizadora frequentemente manifesta:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li>Pensamentos obsessivos constantes sobre a dor (&ldquo;não consigo parar de pensar nisso&rdquo;);</li>
              <li>Magnificação da ameaça (&ldquo;minha coluna está desgastada e nunca mais serei a mesma pessoa&rdquo;);</li>
              <li>Sentimento de desamparo e impotência (&ldquo;nada no mundo é capaz de aliviar minha dor&rdquo;).</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Cinesiofobia</h3>
            <p className="mb-3 text-sm font-medium text-teal-600">Medo Irracional do Movimento e Relesão</p>
            <p className="leading-relaxed text-gray-700 text-sm mb-3">
              Descrita por Kori e Miller, a cinesiofobia é o medo excessivo, irracional e debilitante de realizar movimentos corporais e atividades físicas, impulsionado pela crença de que qualquer movimento resultará em relesão física ou dor intolerável.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li>Evitação de movimentos cotidianos (inclinar o corpo à frente, amarrar os sapatos);</li>
              <li>Adoção de padrões de movimento rígidos e &ldquo;robóticos&rdquo;;</li>
              <li>Desistência precoce de caminhadas, trabalho e convívio social.</li>
            </ul>
          </div>
        </div>

        <p className="mb-6 leading-relaxed text-gray-700">
          Ambas as variáveis podem ser mensuradas com precisão na avaliação clínica por meio de instrumentos validados internacionalmente, como a <em>Escala de Catastrofização da Dor (Pain Catastrophizing Scale - PCS)</em> e a <em>Escala de Cinesiofobia de Tampa (Tampa Scale for Kinesiophobia - TSK)</em>.
        </p>

        {/* H2 - Como o medo de movimento influencia a recuperação */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          Como o medo de movimento pode influenciar a recuperação?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O medo de movimento não é apenas uma reação psicológica abstrata; ele provoca alterações neurofisiológicas e biomecânicas profundas que alimentam diretamente o ciclo da dor crônica. Esse fenômeno é elucidado pelo clássico <strong>Modelo de Medo-Evitação (Fear-Avoidance Model)</strong>, proposto por Vlaeyen e Linton:
        </p>

        <div className="mb-8 rounded-2xl bg-slate-900 p-6 text-white">
          <h3 className="text-lg font-bold text-teal-400 mb-4">O Ciclo Vicioso da Dor Crônica por Medo-Evitação</h3>
          <div className="space-y-3 text-sm text-slate-200">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">1</span>
              <p><strong>Estímulo Doloroso Agudo:</strong> Ocorre um episódio agudo de dor nas costas (por sobrecarga mecânica ou estresse somado).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">2</span>
              <p><strong>Interpretação Catastrófica:</strong> O paciente interpreta a dor como sinal de que algo na sua coluna quebrou ou rompeu permanentemente.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">3</span>
              <p><strong>Cinesiofobia e Hipervigilância:</strong> O indivíduo passa a vigiar cada sensação corporal com ansiedade e medo desmedido.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">4</span>
              <p><strong>Evitação do Movimento e Repouso:</strong> O paciente para de se exercitar, interrompe tarefas domésticas e passa horas deitado.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-slate-950">5</span>
              <p><strong>Descondicionamento, Depressão e Incapacidade:</strong> A musculatura perde força e resistência, o isolamento social aumenta o estresse emocional e o sistema nervoso central entra em sensibilização central — perpetuando a dor mesmo sem lesão ativa.</p>
            </div>
          </div>
        </div>

        <p className="mb-6 leading-relaxed text-gray-700">
          Além disso, o medo altera a dinâmica motora: para evitar que a coluna se mova, o paciente contrai excessivamente os músculos abdominais e eretores do tronco de forma contínua (co-contração). Essa rigidez motora sustentada gera uma carga compressiva articular muito maior nos discos e articulações facetárias do que um movimento natural e relaxado, gerando mais dor e reforçando a crença de fragilidade.
        </p>

        {/* H2 - O que posso e não posso fazer na crise */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          O que posso e não posso fazer durante uma crise de dor lombar?
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Ter clareza sobre quais condutas auxiliam a recuperação e quais atitudes retardam a melhora oferece segurança e autonomia durante o momento de crise. A tabela comparativa a seguir sintetiza o que deve e o que não deve ser feito:
        </p>

        <div className="mb-10 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-emerald-800">✓ O QUE FAZER (Recomendado)</th>
                <th className="px-6 py-4 text-left font-bold text-rose-800">✕ O QUE NÃO FAZER (Evitar)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Manter-se em movimento tolerável:</strong> Realizar pequenas caminhadas intermitentes e manter atividades rotineiras que não gerem dor exacerbada.
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Repouso absoluto na cama:</strong> Ficar acamado por dias seguidos, o que eleva a rigidez e atrofia a musculatura estabilizadora.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Utilizar calor local superficial:</strong> Aplicar bolsas mornas por 15 a 20 minutos para acalmar o espasmo protetor e induzir relaxamento.
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Alongamentos violentos:</strong> Tentar &ldquo;puxar&rdquo; o tronco no pico da dor, o que dispara reflexos miotáticos protetores e piora o travamento.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Adaptar temporariamente o volume:</strong> Reduzir cargas pesadas e pausas no trabalho para descarregar a pressão sem paralisação total.
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Automedicação indiscriminada:</strong> Tomar anti-inflamatórios e opioides fortes sem prescrição e acompanhamento profissional.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Reconhecer a natureza benigna:</strong> Entender que a dor lombar inespecífica é autolimitada e tem altíssima probabilidade de melhora em semanas.
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Buscar exames de imagem urgentes sem indicação:</strong> Fazer ressonâncias precoces que só revelam alterações normais da idade e alimentam medo.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Consultar um fisioterapeuta:</strong> Realizar uma avaliação clínica minuciosa com testes direcionados e plano de movimento personalizado.
                </td>
                <td className="px-6 py-4 text-gray-800">
                  <strong>Usar cintas lombares rígidas por semanas:</strong> O uso contínuo de cintas gera dependência psicológica e desativa a musculatura do core.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* H2 - Quando a dor na coluna é sinal de alerta */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          Quando a dor na coluna é um sinal de alerta?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Aproximadamente 90% a 95% dos episódios de dor na coluna são classificados como <strong>dor lombar inespecífica</strong> — quadros mecânico-posturais autolimitados e sem risco orgânico grave. No entanto, em uma minoria dos casos (1% a 5%), a dor lombar pode ser a manifestação inicial de uma condição patológica severa que requer diagnóstico médico urgente. Na fisioterapia, esses sinais são chamados de <strong>Red Flags (Bandeiras Vermelhas)</strong>:
        </p>

        <div className="mb-8 rounded-2xl border border-red-300 bg-red-50/70 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-900 flex items-center gap-2">
            <span>⚠</span> Principais Red Flags na Dor Lombar e Espinhal
          </h3>
          <div className="space-y-4 text-sm text-red-950">
            <div>
              <p className="font-semibold text-red-900">1. Suspeita de Síndrome da Cauda Equina (Emergência Cirúrgica):</p>
              <p>Perda de sensibilidade na região genital e anal (&ldquo;anestesia em sela&rdquo;), incontinência ou retenção urinária súbita, perda do controle do esfíncter anal e fraqueza motora bilateral progressiva nas pernas.</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">2. Déficit Neurológico Motor Rápido e Severo:</p>
              <p>Perda nítida de força muscular que impede o paciente de elevar a ponta do pé (queda do pé / foot drop), impossibilidade de ficar na ponta dos pés ou calcanhares, ou perda de reflexos com piora rápida.</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">3. Suspeita de Malignidade / Câncer:</p>
              <p>Histórico pessoal prévio de neoplasia, idade superior a 50 anos, dor noturna incessante e constante que não melhora em nenhuma posição de alívio e perda de peso inexplicada.</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">4. Infecção Espinhal (Espondilodiscite ou Abscesso Epidural):</p>
              <p>Dor espinhal severa e localizada acompanhada de febre alta, calafrios, sudorese noturna, ou início após procedimentos invasivos, cirurgias recentes ou histórico de imunossupressão.</p>
            </div>
            <div>
              <p className="font-semibold text-red-900">5. Fratura Vertebral por Trauma ou Osteoporose:</p>
              <p>Início súbito após acidente automobilístico, queda de altura, ou trauma menor em idosos com histórico de osteoporose e uso prolongado de corticosteroides.</p>
            </div>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-red-800">
            Na presença de qualquer um desses sinais associados à dor na coluna, procure atendimento médico hospitalar imediato.
          </p>
        </div>

        {/* H2 - Como a fisioterapia ajuda */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          Como a fisioterapia pode ajudar a recuperar a confiança no movimento?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A fisioterapia musculoesquelética contemporânea vai muito além de aparelhos passivos ou terapias de repouso. O papel do fisioterapeuta de excelência é atuar como um facilitador da recuperação funcional, restaurando a capacidade de carga dos tecidos e quebrando as barreiras cognitivas de medo e incapacidade:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-teal-800 mb-2">1. Avaliação Clínica Biopsicossocial e Individualizada</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              O fisioterapeuta examina não apenas as articulações e músculos, mas investiga a história do paciente, crenças errôneas, hábitos de vida, sono, níveis de estresse e expectativas de recuperação. O uso de questionários validados (como o ODI - Oswestry Disability Index, TSK e PCS) permite mapear riscos e monitorar a evolução com objetividade.
            </p>
          </div>

          <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-teal-800 mb-2">2. Educação em Neurociência da Dor (Pain Neuroscience Education - PNE)</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              Explicar de forma clara e acessível que a dor não reflete diretamente fragilidade da coluna altera os mapas neurais somatossensoriais no cérebro. Pacientes que entendem a fisiologia da dor sentem menos medo, relaxam a musculatura tensa e colaboram mais ativamente com os exercícios.
            </p>
          </div>

          <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-teal-800 mb-2">3. Terapia de Exposição Gradual (Graded Exposure)</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              Se a pessoa tem pavor de se inclinar para pegar algo no chão, o fisioterapeuta desconstrói esse movimento em etapas acessíveis. Começa-se com flexões parciais com apoio, evoluindo para agachamentos dinâmicos e, finalmente, levantamento de peso do chão em ambiente controlado. Ao comprovar empiricamente que o movimento não causa a temida lesão, a confiança é restabelecida.
            </p>
          </div>

          <div className="rounded-xl border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-teal-800 mb-2">4. Fortalecimento Muscular e Carga Progressiva</h3>
            <p className="leading-relaxed text-gray-700 text-sm">
              O fortalecimento sistemático dos extensores do tronco, glúteos e abdômen gera aumento da tolerância tecidual mecânica. Músculos fortes e com boa resistência distribuem melhor as forças cinéticas das atividades diárias e laborais, blindando a coluna contra futuras crises.
            </p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes sobre Dor na Coluna</h2>
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

        {/* Conclusão */}
        <div className="mb-8 mt-12 rounded-2xl bg-slate-800 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Conclusão: Resgatando o Movimento com Segurança</h2>
          <p className="mb-4 leading-relaxed text-slate-200">
            A dor na coluna vertebral, embora desconfortável e por vezes assustadora durante as crises agudas, não deve ser sinônimo de incapacidade ou de fragilidade permanente. O corpo humano foi moldado pela evolução para suportar cargas, movimentar-se livremente e adaptar-se constantemente.
          </p>
          <p className="mb-4 leading-relaxed text-slate-200">
            Romper com crenças ultrapassadas sobre repouso obrigatório e posturas perfeitas é o primeiro passo para assumir o controle da sua saúde. Ao aliar desmistificação, escuta ativa dos sinais de alerta e um programa estruturado de exercícios e fisioterapia, você ganha a segurança necessária para voltar a viver sem medo de se movimentar.
          </p>
        </div>

        {/* Resumo Clínico em Destaque */}
        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-teal-400">RESUMO CLÍNICO</h2>
          <p className="mb-4 leading-relaxed text-gray-300">
            A dor na coluna vertebral inespecífica acomete a maior parte da população e não tem correlação anatomoclínica linear com alterações degenerativas comuns visualizadas em exames de ressonância ou raio-X.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            O repouso absoluto no leito retarda a recuperação e aumenta a probabilidade de cronificação. Em episódios de travamento agudo, a guarda protetora muscular deve ser manejada com calor superficial, respiração diafragmática e retomada gradual de micro-movimentos e caminhadas toleráveis.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Hérnias discais apresentam altas taxas de reabsorção biológica espontânea (superiores a 70% nas extrusões) e se beneficiam de carga e movimentação progressiva. Cinesiofobia e catastrofização devem ser avaliadas e tratadas via Educação em Neurociência da Dor e Terapia de Exposição Gradual.
          </p>
          <p className="leading-relaxed text-gray-300">
            A investigação médica urgente (Red Flags) é reservada para suspeitas de síndrome da cauda equina, déficits neurológicos motores rápidos, neoplasias, infecções vertebrais ou fraturas traumáticas agudas.
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
              Conteúdo clínico desenvolvido por fisioterapeutas pesquisadores com foco em prática baseada em evidências, raciocínio clínico, gestão de clínicas e inovação em fisioterapia.
            </p>
          </div>
        </div>

        {/* Bloco Obrigatório de Conversão CTA do Kynesia */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico completo, agenda inteligente e gestão financeira integrada, o sistema conta com recursos de inteligência artificial baseados em evidências, escalas e questionários validados pré-configurados (como o Oswestry Disability Index - ODI, Tampa Scale for Kinesiophobia - TSK e Pain Catastrophizing Scale - PCS), gráficos de evolução clínica de desfechos e ferramentas avançadas para otimizar o fluxo de atendimento da sua clínica ou consultório.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se você busca mais organização, produtividade e atendimento clínico de excelência respaldado em dados científicos, conheça gratuitamente o Kynesia.
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
