import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/estalido-no-ombro-quando-e-normal";

const faqItems = [
  {
    question: "O estalido no ombro sem dor é perigoso?",
    answer: "Não. Na grande maioria dos casos, o estalido no ombro que não é acompanhado por dor, fraqueza, instabilidade ou limitação de movimento é inofensivo. Ele é causado por processos fisiológicos normais, como a cavitação (liberação de bolhas de gás no líquido sinovial) ou o deslizamento natural de tendões sobre as estruturas ósseas."
  },
  {
    question: "Quais são as principais causas de estalos no ombro?",
    answer: "As causas variam de fisiológicas a patológicas. As mais comuns incluem a cavitação fisiológica, o movimento dos tendões sobre proeminências ósseas, tendinopatias ou lesões do manguito rotador, lesões labrais (como a lesão SLAP), artrose (desgaste da cartilagem) e bursite ou impacto subacromial."
  },
  {
    question: "Quando devo me preocupar com o estalido no ombro?",
    answer: "Você deve procurar uma avaliação profissional se o estalo vier acompanhado de sinais de alerta (red flags), tais como: dor persistente durante ou após os movimentos, fraqueza muscular para realizar tarefas diárias, sensação de instabilidade (como se o ombro estivesse saindo do lugar), limitação da amplitude de movimento ou rigidez articular."
  },
  {
    question: "Como a fisioterapia trata o estalido no ombro doloroso?",
    answer: "O tratamento fisioterapêutico baseado em evidências foca no diagnóstico funcional correto, no fortalecimento direcionado da musculatura do manguito rotador e estabilizadores da escápula, na terapia manual para alívio da dor, no controle neuromuscular e no gerenciamento progressivo da carga de exercícios."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Estalido no Ombro: Quando é Normal e Quando Deve Preocupar?",
  description: "Entenda o que causa o estalido no ombro. Conheça as principais causas fisiológicas e patológicas, os sinais de alerta e o que dizem as evidências científicas.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  image: "https://kynesia.com.br/blog/estalido-no-ombro-quando-e-normal.jpg",
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
  title: "Estalido no Ombro: Quando é Normal e Quando Deve Preocupar?",
  description: "O estalido no ombro é normal ou sinal de lesão? Descubra as causas comuns (manguito rotador, cavitação, impacto) e os sinais de alerta. Leia o artigo!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Estalido no Ombro: Quando é Normal e Quando Deve Preocupar?",
    description: "O estalido no ombro é normal ou sinal de lesão? Descubra as causas comuns (manguito rotador, cavitação, impacto) e os sinais de alerta. Leia o artigo!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/estalido-no-ombro-quando-e-normal.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre estalido no ombro, detalhando causas mais comuns (cavitação, movimento dos tendões, manguito rotador, lesões labrais, artrose e bursite) e sinais de alerta.",
      },
    ],
  },
};

export default function EstalidoNoOmbroPage() {
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
          <span className="font-medium text-teal-600">Ortopedia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Estalido no Ombro: Quando é Normal e Quando Deve Preocupar?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Sentir ou ouvir ruídos na articulação glenoesquelética é uma queixa extremamente frequente. Entenda o que a ciência diz sobre os estalos e quando eles exigem tratamento.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 23 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/estalido-no-ombro-quando-e-normal.jpg"
            alt="Infográfico da Kynesia com o título 'Estalido no Ombro: Quando é Normal e Quando Deve Preocupar?' ilustrando a anatomia do ombro, causas mais comuns e sinais de alerta."
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
            O <strong>estalido no ombro</strong> é considerado normal e benigno quando ocorre sem dor, perda de força, travamento ou sensação de instabilidade articular. Na ausência desses sintomas clínicos, o barulho costuma decorrer de processos fisiológicos inofensivos, como a cavitação ou o deslizamento normal de tendões. No entanto, estalos acompanhados de dor aguda ou disfunção requerem investigação profissional.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Ouvir um &ldquo;clique&rdquo; ou sentir um ressalto profundo na articulação do ombro ao levantar o braço para alcançar uma prateleira, durante um treino de musculação ou ao realizar movimentos circulares é uma experiência comum para muitas pessoas. Essa manifestação clínica frequentemente gera apreensão e ansiedade, induzindo o indivíduo a acreditar que sua articulação está sofrendo desgaste prematuro ou que há uma lesão grave em amargor.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          No entanto, na fisioterapia moderna baseada em evidências, a presença isolada de ruídos articulares não é sinônimo de patologia. O **estalido no ombro** pode ser perfeitamente normal. O grande desafio clínico consiste em diferenciar os barulhos puramente fisiológicos e benignos daqueles que de fato apontam para disfunções musculoesqueléticas subjacentes e necessitam de intervenção especializada.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, abordaremos de forma detalhada o que a ciência diz sobre o **estalido no ombro**, as principais causas estruturais e fisiológicas por trás desse sintoma, quais sinais de alerta devem disparar a necessidade de uma avaliação clínica minuciosa e como conduzir o tratamento de forma segura e eficaz.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/red-flags-dor-no-ombro-quando-encaminhar" className="text-teal-600 hover:underline">
                → Red Flags na Dor no Ombro: Quando a Dor Não É Apenas uma Lesão Musculoesquelética?
              </Link>
            </li>
            <li>
              <Link href="/blog/diferenca-manguito-rotador-bursite-capsulite" className="text-teal-600 hover:underline">
                → Como Diferenciar Tendinopatia do Manguito Rotador, Bursite Subacromial e Capsulite Adesiva
              </Link>
            </li>
            <li>
              <Link href="/blog/testes-clinicos-manguito-rotador-precisao-diagnostica" className="text-teal-600 hover:underline">
                → Como Diagnosticar uma Lesão do Manguito Rotador: Quais Testes Clínicos Têm Maior Precisão?
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. O Estalido no Ombro sob a Ótica da Evidência Científica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Por muito tempo, o modelo biomecânico tradicional encarava qualquer ruído articular como um sinal de desalinhamento ou desgaste iminente. Essa visão simplista, no entanto, tem sido sistematicamente refutada por estudos epidemiológicos robustos. Estudos publicados em periódicos de prestígio, como o <i>Journal of Orthopaedic & Sports Physical Therapy (JOSPT)</i> e o <i>British Journal of Sports Medicine (BJSM)</i>, demonstram de forma consistente que estalos e crepitações são extremamente frequentes em articulações saudáveis e assintomáticas.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A literatura científica ressalta que o foco excessivo no barulho articular pode desencadear a **cinesiofobia** (medo irracional do movimento). Quando um paciente associa o **estalido no ombro** a um suposto dano tecidual, sua resposta imediata é restringir o uso do braço. Esse comportamento gera um ciclo prejudicial de descondicionamento físico, atrofia muscular e rigidez articular secundária, que paradoxalmente acaba provocando dor e limitação funcional real.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Portanto, o consenso científico é claro: na ausência de manifestações como dor, fraqueza ou bloqueio mecânico, os estalos não devem limitar a prática de exercícios físicos nem ser alvo de intervenções médicas ou fisioterapêuticas invasivas.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Causas Mais Comuns do Estalido no Ombro</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Como ilustrado didaticamente no infográfico da Kynesia, os estalos no ombro podem ter diversas origens, divididas entre processos fisiológicos naturais e condições que demandam atenção clínica. A seguir, detalhamos cada uma dessas causas:
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Cavitação Fisiológica</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Este é o mecanismo mais comum para estalos que ocorrem de forma súbita e indolor. A articulação do ombro é envolta por uma cápsula contendo líquido sinovial, que atua como lubrificante. Quando a articulação é movida rapidamente ou esticada, ocorrem mudanças repentinas na pressão interna desse líquido. Essas variações de pressão favorecem a liberação e o rápido colapso de microbolhas de gases (como o dióxido de carbono) dissolvidos no líquido. Esse colapso das bolhas gera o estalo característico, que é totalmente inofensivo.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Movimento dos Tendões</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A anatomia do ombro é caracterizada por múltiplos tendões que cruzam a articulação em espaços estreitos. Conforme movimentamos o braço, é natural que certos tendões (como o tendão da cabeça longa do bíceps ou partes dos tendões do manguito rotador) sofram pequenos desvios de sua trajetória e deslizem sobre proeminências ósseas próximas. Esse fenômeno mecânico gera um som de ressalto sutil, comum e benigno na maioria das vezes.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Manguito Rotador (Tendinopatias e Lesões Parciais)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O manguito rotador é o grupo de quatro músculos (supraespinhal, infraespinhal, redondo menor e subescapular) responsável pela estabilização da cabeça do úmero na cavidade glenoide. Processos degenerativos ou sobrecargas crônicas podem levar a tendinopatias, espessamentos ou lesões parciais desses tendões. Quando a superfície do tendão perde sua regularidade, o movimento sob tensão pode gerar estalos de atrito áspero acompanhados de dor local.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Lesões Labrais (Lesão SLAP e Instabilidade)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O labrum é um anel de fibrocartilagem que circunda a cavidade glenoide, aumentando a profundidade da articulação e sua estabilidade. Lesões na porção superior do labrum (conhecidas como lesões SLAP - <i>Superior Labrum from Anterior to Posterior</i>) ou em outras partes da fibrocartilagem podem gerar fragmentos soltos ou instabilidade física. Nesses casos, o estalo costuma ser acompanhado de uma sensação nítida de clique doloroso ou bloqueio, frequentemente associado a movimentos acima da linha da cabeça.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Artrose (Desgaste Articular)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A osteoartrose glenoesquelética envolve a perda progressiva da cartilagem que reveste as superfícies ósseas do úmero e da glenoide. Com a diminuição dessa camada protetora, as superfícies ósseas irregulares entram em contato direto. O atrito decorrente gera estalos de aspecto áspero (crepitação), frequentemente contínuos ao longo de todo o arco de movimento, acompanhados de rigidez matinal e dor mecânica profunda.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Bursite e Impacto Subacromial</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O espaço subacromial abriga a bursa subacromial e os tendões do manguito rotador. Em quadros de síndrome do impacto subacromial, ocorre uma redução desse espaço, o que leva à compressão repetida dessas estruturas. A inflamação resultante na bursa (bursite) ou o espessamento dos tendões gera atrito mecânico acentuado sob o acrômio durante a elevação lateral do braço, produzindo estalos dolorosos na região lateral do ombro.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Sinais de Alerta: Quando o Estalido no Ombro Deve Preocupar?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Embora a maioria dos estalos seja benigna, a presença de sintomas associados atua como sinalizador de que existe um distúrbio funcional ou estrutural que requer atenção. O infográfico do Kynesia destaca os cinco principais **sinais de alerta** (red flags clínicas) que indicam a necessidade de buscar uma avaliação especializada de um fisioterapeuta ou ortopedista:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
          <li>
            <strong>Dor Persistente:</strong> Ruídos articulares que ocorrem em conjunto ou são seguidos de dor persistente local, mesmo que seja de intensidade leve a moderada, sugerem um quadro inflamatório ou sobrecarga tendínea ativa.
          </li>
          <li>
            <strong>Fraqueza Muscular:</strong> A dificuldade evidente para realizar atividades rotineiras simples (como pentear o cabelo, vestir uma blusa ou carregar compras) aponta para possíveis lesões significativas de tendões do manguito rotador ou inibição reflexa induzida por dor.
          </li>
          <li>
            <strong>Instabilidade Articular:</strong> A sensação subjetiva de que a articulação &ldquo;sai do lugar&rdquo; ou &ldquo;desencaixa&rdquo; durante movimentos bruscos sugere frouxidão capsuloligamentar, lesões labrais extensas ou instabilidade glenoesquelética crônica.
          </li>
          <li>
            <strong>Limitação dos Movimentos:</strong> A perda perceptível de amplitude de movimento ativa ou passiva, manifestada como rigidez severa ao tentar mover o braço em direções específicas, pode indicar capsulite adesiva (ombro congelado) ou artrose avançada.
          </li>
          <li>
            <strong>Estalos Dolorosos:</strong> Barulhos articulares que vêm acompanhados de uma dor aguda e pontual a cada repetição do estalo denunciam um atrito mecânico inadequado ou pinçamento de estruturas sob carga.
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela Comparativa: Classificação dos Estalidos no Ombro</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para facilitar o raciocínio clínico na prática profissional, a tabela abaixo sintetiza a diferenciação entre as apresentações clínicas mais frequentes:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Tipo de Estalo</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Mecanismo Provável</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Relevância Clinica</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Conduta Recomendada</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Fisiológico Isolado</td>
                <td className="px-6 py-4 text-gray-700">Cavitação ou acomodação natural de tendões.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Totalmente Benigno</td>
                <td className="px-6 py-4 text-gray-700">Educação do paciente, evitar cinesiofobia e manter treinos.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Associado a Dor Aguda</td>
                <td className="px-6 py-4 text-gray-700">Impacto subacromial, tendinopatia do manguito ou bursite.</td>
                <td className="px-6 py-4 text-amber-600 font-bold">Moderada (Requer Cuidado)</td>
                <td className="px-6 py-4 text-gray-700">Modulação de carga, fortalecimento direcionado e controle motor.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Associado a Bloqueio/Falseio</td>
                <td className="px-6 py-4 text-gray-700">Lesão labral (SLAP) ou instabilidade mecânica.</td>
                <td className="px-6 py-4 text-red-600 font-bold">Alta (Preocupante)</td>
                <td className="px-6 py-4 text-gray-700">Avaliação física criteriosa, testes de instabilidade e reabilitação neuromuscular.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Crepitação Áspera + Rigidez</td>
                <td className="px-6 py-4 text-gray-700">Desgaste da cartilagem articular (artrose glenoesquelética).</td>
                <td className="px-6 py-4 text-amber-700 font-bold">Moderada a Alta</td>
                <td className="px-6 py-4 text-gray-700">Fortalecimento progressivo, analgesia e ganho de ADM funcional.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">4. O Papel da Fisioterapia Baseada em Evidências no Tratamento</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando o **estalido no ombro** é patológico (acompanhado por dor ou perda de função), a fisioterapia desempenha um papel central e de primeira linha no manejo clínico. O tratamento contemporâneo distancia-se do repouso prolongado ou de recursos puramente passivos (como ultrassom e calor) e foca em uma abordagem ativa e estruturada, centrada em três pilares:
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Fortalecimento e Estabilização Escapulotorácica</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A estabilidade do ombro depende de um sincronismo preciso entre a escápula e o úmero (ritmo escapuloumeral). O fortalecimento direcionado dos rotadores externos do ombro (infraespinhal e redondo menor) melhora a capacidade do manguito de centrar a cabeça do úmero na glenoide durante o movimento. Adicionalmente, reabilitar músculos que controlam a escápula, como o trapézio (porções média e inferior) e o serrátil anterior, restaura a biomecânica correta e reduz o atrito subacromial.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Controle Neuromuscular e Propriocepção</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Em pacientes com queixas de instabilidade ou lesões labrais, o treinamento proprioceptivo é vital. A utilização de exercícios em cadeia cinética fechada (como apoios em prancha e flexões modificadas) e estímulos de perturbação externa otimiza os reflexos musculares de proteção, ensinando o sistema nervoso a recrutar os estabilizadores dinâmicos de forma rápida perante cargas inesperadas.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Gerenciamento Inteligente de Carga</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Evitar picos bruscos de volume ou intensidade na atividade física é fundamental para permitir a cicatrização e a adaptação do tecido tendíneo. O fisioterapeuta deve auxiliar o paciente a dosar suas atividades, promovendo uma progressão gradual de carga que estimule a síntese de colágeno nos tendões sem desencadear processos inflamatórios.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Avaliação é Fundamental</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em resumo, o **estalido no ombro** é uma queixa extremamente comum que, em grande parte das vezes, reflete apenas o funcionamento mecânico normal e inofensivo da articulação. Desmistificar a crepitação e afastar crenças limitantes é a primeira etapa para garantir a saúde articular e psicológica do paciente.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Contudo, quando os ruídos vêm acompanhados de dor, fraqueza, instabilidade ou perda de amplitude de movimento, a conduta ideal não é o repouso absoluto ou a automedicação, mas sim a busca por uma avaliação clínica qualificada. Um diagnóstico funcional preciso permite traçar um plano de reabilitação individualizado e baseado em evidências científicas, devolvendo força, mobilidade e qualidade de vida ao paciente de forma segura e sustentável.
        </p>

        {/* As Pessoas Também Perguntam (PAA) */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
          <div className="mt-6 space-y-3">
            {faqItems.slice(0, 3).map((faq) => (
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
            Diferente do raciocínio puramente estruturalista que associa ruídos articulares a patologias, as evidências científicas atuais indicam que o estalido no ombro assintomático é uma manifestação benigna, muito prevalente e sem impacto prognóstico negativo direto na função mecânica articular.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A presença de sinais clínicos concomitantes como dor persistente, déficit de força, instabilidade subjetiva e limitação de ADM (amplitude de movimento) configura red flags clínicas que justificam uma avaliação funcional imediata.
          </p>
          <p className="leading-relaxed text-gray-300">
            A abordagem baseada em evidências foca no combate à cinesiofobia por meio da educação em saúde, no fortalecimento sinérgico do manguito rotador e estabilizadores escapulares, e no controle de carga, evitando tratamentos passivos obsoletos ou intervenções cirúrgicas desnecessárias.
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
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados (incluindo escalas funcionais para avaliação do ombro como o SPADI e DASH), indicadores de evolução clínica e ferramentas para otimizar a rotina da sua clínica ou consultório.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se você busca mais organização, produtividade e qualidade no atendimento baseado em dados, conheça gratuitamente o Kynesia.
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
