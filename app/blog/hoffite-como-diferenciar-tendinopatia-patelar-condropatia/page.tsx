import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/hoffite-como-diferenciar-tendinopatia-patelar-condropatia";

const faqItems = [
  {
    question: "O que é a Hoffite e qual a sua causa principal?",
    answer: "A Hoffite, ou Síndrome de Hoffa, é a inflamação do coxim adiposo infrapatelar (uma gordura localizada atrás do tendão patelar). Sua causa principal é o microtrauma repetitivo ou pinçamento mecânico desse coxim entre a patela e o fêmur, frequentemente desencadeado por hiperextensão do joelho ou traumas diretos."
  },
  {
    question: "Como diferenciar a dor da Hoffite da tendinopatia patelar?",
    answer: "A dor da tendinopatia patelar é superficial e localizada estritamente sobre o tendão patelar, piorando com cargas tensionais de impacto (saltos). Na Hoffite, a dor é profunda, localizada nas laterais do tendão patelar, e piora na extensão máxima (hiperextensão) do joelho ou sob compressão direta do coxim."
  },
  {
    question: "O sinal do cinema é comum na Hoffite?",
    answer: "Não, o sinal do cinema (dor após longos períodos sentado) é um sintoma clássico da condropatia patelar devido à pressão contínua na cartilagem. Pacientes com Hoffite costumam sentir mais alívio ao fletir levemente o joelho, pois isso reduz a compressão no coxim adiposo infrapatelar."
  },
  {
    question: "Qual é o melhor tratamento fisioterapêutico para a Hoffite?",
    answer: "O tratamento baseado em evidências envolve o controle inicial da inflamação através de taping (bandagem) para descarregar o coxim adiposo, evitar atividades em hiperextensão do joelho, e realizar o fortalecimento progressivo do quadríceps e estabilizadores do quadril em amplitudes livres de dor."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hoffite: Como Diferenciar da Tendinopatia Patelar e Condropatia",
  description: "Entenda o que é a Hoffite (Síndrome de Hoffa) e aprenda a realizar o diagnóstico diferencial em relação à tendinopatia patelar e condropatia na prática clínica.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
  image: "https://kynesia.com.br/blog/hoffite-como-diferenciar-tendinopatia-patelar-condropatia.png",
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
  title: "Hoffite: Como Diferenciar da Tendinopatia Patelar e Condropatia",
  description: "Entenda o que é a Hoffite e aprenda a diferenciá-la da tendinopatia patelar e condropatia na avaliação clínica do joelho com foco em evidências. Leia agora!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Hoffite: Como Diferenciar da Tendinopatia Patelar e Condropatia",
    description: "Entenda o que é a Hoffite e aprenda a diferenciá-la da tendinopatia patelar e condropatia na avaliação clínica do joelho com foco em evidências. Leia agora!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/hoffite-como-diferenciar-tendinopatia-patelar-condropatia.png",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre a Síndrome de Hoffa (Hoffite), ilustrando a dor abaixo da patela e a diferenciação da tendinopatia patelar e condropatia patelar",
      },
    ],
  },
};

export default function HoffitePage() {
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
            Hoffite: Como Diferenciar da Tendinopatia Patelar e Condropatia na Avaliação Fisioterapêutica
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            A dor anterior no joelho é uma queixa extremamente comum. Descubra como diagnosticar clinicamente a inflamação do coxim adiposo infrapatelar (Síndrome de Hoffa) e evitar erros diagnósticos.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 14 Jul 2026</span>
            <span>⏱ 12 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/hoffite-como-diferenciar-tendinopatia-patelar-condropatia.png"
            alt="Infográfico explicativo sobre a Síndrome de Hoffa (Hoffite), ilustrando a dor abaixo da patela e a diferenciação da tendinopatia patelar e condropatia patelar"
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
            A <strong>Hoffite</strong> (síndrome de Hoffa) diferencia-se da tendinopatia patelar e da condropatia pela localização exata da dor e pelo comportamento mecânico dos sintomas. A Hoffite é uma inflamação do coxim adiposo infrapatelar, apresentando dor profunda logo abaixo da patela que piora na extensão completa do joelho. Já a tendinopatia patelar dói pontualmente no tendão ao realizar saltos ou desacelerações, e a condropatia gera dor retropatelar difusa ao permanecer sentado ou descer escadas.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A articulação do joelho é frequentemente o centro de sobrecargas cinético-funcionais. Dentre as queixas de dor na região frontal, a dor anterior de joelho lidera os atendimentos ortopédicos. Contudo, classificar toda dor infrapatelar como "tendinite" ou toda dor profunda como "condropatia" é um erro que compromete a evolução terapêutica e pode cronificar a queixa do paciente.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Uma patologia frequentemente subdiagnosticada é a **Hoffite**, também conhecida como **Síndrome de Hoffa** ou inflamação do coxim adiposo infrapatelar. Devido à sua estreita proximidade anatômica com o tendão patelar e a articulação femoropatelar, ela é frequentemente confundida com tendinopatia patelar e condropatia patelar. Como as condutas e o comportamento de carga desses tecidos são drasticamente distintos, o diagnóstico diferencial baseado em evidências torna-se imperativo.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, detalhamos a anatomia e a fisiopatologia do coxim adiposo infrapatelar, os critérios objetivos para diferenciá-lo de outras causas comuns de dor anterior do joelho e as estratégias de reabilitação mais adequadas.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia" className="text-teal-600 hover:underline">
                → Diferença entre Tendinopatia Patelar, Quadríceps e Condropatia
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-no-joelho-ao-subir-escada-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no Joelho ao Subir Escada: Causas, Biomecânica e Intervenções
              </Link>
            </li>
            <li>
              <Link href="/blog/estalo-no-joelho-e-normal-entenda-quando-preocupar" className="text-teal-600 hover:underline">
                → Estalo no Joelho é Normal? Quando a Crepitação Merece Investigação
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Carga Progressiva em Tendinopatias: Como Prescrever com Segurança
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. O que é a Hoffite (Síndrome de Hoffa)?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A Hoffite consiste na inflamação aguda ou crônica do <strong>coxim adiposo infrapatelar (IPFP - Infrapatellar Fat Pad)</strong>. Esta estrutura é um depósito de gordura intracapsular, porém extrassinovial, localizado no espaço anterior do joelho, preenchendo o vão anatômico situado profundamente ao tendão patelar e imediatamente abaixo do polo inferior da patela.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Diferente da cartilagem patelar (que é avascular e aneural) e do próprio tendão (que possui inervação restrita), o coxim adiposo infrapatelar é <strong>altamente vascularizado e densamente inervado</strong>. Ele é rico em fibras nociceptivas tipo IV e substância P. Clinicamente, isso significa que o coxim é uma das estruturas mais sensíveis a estímulos dolorosos em todo o joelho. Qualquer alteração compressiva ou inflamatória nessa região gera um quadro de dor intensa, profunda e de difícil localização exata pelo paciente.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Além da função de amortecimento e preenchimento anatômico, estudos recentes demonstram que o coxim atua ativamente na modulação inflamatória e metabólica da articulação, sendo considerado um órgão endócrino local que pode reagir a estresses sistêmicos e biomecânicos.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Mecanismos de Lesão e Fisiopatologia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O principal fator gerador da Hoffite é o <strong>pinçamento mecânico repetitivo</strong> do coxim adiposo infrapatelar. Durante os movimentos normais do joelho, a gordura se deforma e se move para evitar compressões excessivas. No entanto, algumas condições mecânicas alteram essa dinâmica:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Hiperextensão do Joelho (Genu Recurvatum):</strong> Na extensão máxima ou hiperextensão, o espaço anterior é severamente reduzido. O coxim acaba sendo espremido entre o fêmur (tróclea femoral), a patela e a tíbia.</li>
          <li><strong>Trauma Direto:</strong> Pancadas na região anterior do joelho (quedas, colisões esportivas) podem inflamar diretamente as células adiposas do coxim.</li>
          <li><strong>Hipermobilidade e Instabilidade Patelar:</strong> Rastreamentos patelares alterados (como lateralização patelar excessiva) aplicam forças de cisalhamento assimétricas no coxim.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Uma vez inflamado, o coxim adiposo infrapatelar sofre hipertrofia (aumento de tamanho). Isso gera um ciclo vicioso problemático: o tecido hipertrofiado ocupa mais espaço e, por consequência, é pinçado com ainda maior frequência durante as atividades do cotidiano.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Hoffite vs. Tendinopatia Patelar: O Diagnóstico Diferencial</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A diferenciação entre a Hoffite e a tendinopatia patelar (conhecida como "joelho do saltador") é um dos pontos críticos do exame físico, visto que ambas as patologias compartilham localizações de dor muito próximas na região anterior e inferior da patela.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Comportamento Biomecânico de Carga:</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A tendinopatia patelar é uma lesão decorrente de <strong>sobrecarga tensional</strong>. A dor é desencadeada por atividades que envolvem alta velocidade de armazenamento e liberação de energia elástica (ciclo de alongamento-encurtamento), como saltos, desacelerações bruscas e sprints. Por outro lado, a Hoffite é essencialmente uma patologia de <strong>sobrecarga compressiva</strong>. A dor ocorre na extensão máxima (onde o coxim é comprimido) e durante posturas estáticas ou compressão manual direta.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Diferenças na Palpação:</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para diferenciar na palpação, realizamos a manobra com o joelho em extensão completa e quadríceps relaxado. Na tendinopatia patelar, a dor é provocada pressionando o polo inferior da patela exatamente sobre a linha média do tendão. Na Hoffite, a sensibilidade dolorosa máxima é encontrada ao pressionar lateralmente e profundamente ao tendão, comprimindo as abas laterais do coxim de Hoffa.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">4. Hoffite vs. Condropatia Patelar: Como Distinguir?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A condropatia patelar refere-se à degradação ou amolecimento da cartilagem articular na face posterior da patela, associada ao aumento de estresse de contato na articulação femoropatelar.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Sintomatologia e Sinal do Cinema:</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Pacientes com condropatia patelar queixam-se tipicamente do <strong>sinal do cinema</strong>: dor profunda retropatelar que se intensifica após permanecer longos períodos sentado com os joelhos flexionados a 90°. Essa flexão contínua aumenta a força de reação da articulação femoropatelar. Na Hoffite, ocorre o oposto: a flexão do joelho alivia os sintomas porque afasta a patela da área anterior, descompressando o coxim. A dor da Hoffite piora na extensão total.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Crepitação Articular:</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A presença de crepitação articular áspera sob carga (sensação de "areia" ou estalos durante o agachamento) é um achado clínico clássico da condropatia. Na Hoffite pura, a crepitação está ausente. O que pode ocorrer na Hoffite crônica é uma leve sensação de bloqueio mecânico devido ao edema ou hipertrofia fibrosa do coxim, mas sem o atrito característico da cartilagem patelar danificada.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">5. Testes Provocativos Clínicos Essenciais</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O exame físico ortopédico deve utilizar testes provocativos baseados na biomecânica para isolar as estruturas. Os seguintes testes são fundamentais:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-3 text-gray-700">
          <li>
            <strong>Teste de Hoffa (Hoffa's Test):</strong> Com o paciente em decúbito dorsal e o joelho fletido a 90°, o examinador pressiona com ambos os polegares a região imediatamente lateral e medial ao tendão patelar (logo abaixo da patela). Em seguida, solicita-se ao paciente que realize a extensão ativa do joelho. O teste é positivo para Hoffite se o paciente relatar dor aguda e súbita ou apreensão quando o joelho atinge a extensão máxima, momento no qual os dedos do examinador pressionam o coxim ativo contra as estruturas ósseas.
          </li>
          <li>
            <strong>Teste de Extensão Passiva Forçada (Bounce Home):</strong> O examinador flexiona passivamente o joelho do paciente e o deixa estender rapidamente. A dor referida no final da extensão na região anterior e profunda sugere conflito no coxim adiposo.
          </li>
          <li>
            <strong>Teste de Agachamento Declinado (Decline Squat):</strong> Utilizado principalmente para provocar a tendinopatia patelar. Se o agachamento declinado provocar dor puramente no tendão em si e não for afetado pela descarga de extensão, indica envolvimento do tendão patelar.
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela de Diagnóstico Diferencial Cinético-Funcional</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tabela abaixo resume os critérios clínicos fundamentais para a diferenciação rápida no consultório:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Critério Clínico</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Hoffite (Síndrome de Hoffa)</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Tendinopatia Patelar</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Condropatia Patelar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Localização Primária</td>
                <td className="px-6 py-4 text-gray-700">Profunda e infrapatelar (laterais do tendão).</td>
                <td className="px-6 py-4 text-gray-700">Localizada estritamente no corpo ou polo inferior do tendão.</td>
                <td className="px-6 py-4 text-gray-700">Retropatelar profunda ou difusa (peripatelar).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Posição de Piora</td>
                <td className="px-6 py-4 text-gray-700 font-medium text-teal-700">Extensão completa ou hiperextensão do joelho.</td>
                <td className="px-6 py-4 text-gray-700">Flexão sob carga excêntrica rápida (saltos/aterrissagem).</td>
                <td className="px-6 py-4 text-gray-700 font-medium text-teal-700">Flexão prolongada (sinal do cinema) e agachamento profundo.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Palpação Clinica</td>
                <td className="px-6 py-4 text-gray-700">Sensibilidade nas bordas laterais do coxim em extensão.</td>
                <td className="px-6 py-4 text-gray-700">Dor pontual na inserção do tendão no polo inferior patelar.</td>
                <td className="px-6 py-4 text-gray-700">Sensibilidade na compressão patelar ou palpação das facetas.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Crepitação Sob Carga</td>
                <td className="px-6 py-4 text-gray-700">Ausente.</td>
                <td className="px-6 py-4 text-gray-700">Ausente.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Comum, associada a atrito articular.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Foco Principal de Conduta</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Taping de descarga, controle de hiperextensão e reequilíbrio motor.</td>
                <td className="px-6 py-4 text-gray-700">Protocolo de carga progressiva (isometria a pliometria).</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Fortalecimento de glúteos e controle do valgo dinâmico.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">6. Conduta Fisioterapêutica Baseada em Evidências para Hoffite</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A abordagem terapêutica para a Hoffite difere radicalmente do tratamento das outras patologias do joelho. Se aplicarmos o protocolo de carga progressiva pesada (adequado para tendinopatias) ou o agachamento profundo precoce (utilizado na condropatia), podemos exacerbar a inflamação do coxim adiposo. O tratamento ideal foca em três fases principais:
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Fase 1: Alívio da Compressão Mecânica (Descarga do Coxim)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O primeiro objetivo é interromper o ciclo de pinçamento mecânico. Para isso, utilizamos a técnica de <strong>taping (bandagem rígida ou funcional) para inclinação ou elevação patelar (Hoffa Taping)</strong>. A bandagem puxa o polo inferior da patela anteriormente e superiormente, abrindo espaço no compartimento anterior e aliviando a pressão direta sobre o coxim durante a deambulação.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Nesta fase, é vital educar o paciente a evitar a postura de pé com os joelhos travados em hiperextensão (bloqueio articular estático), o que espreme continuamente o tecido gorduroso.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Fase 2: Fortalecimento em Amplitude Livre de Dor (CCF Controlada)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Iniciamos o fortalecimento muscular do quadríceps e dos estabilizadores posterolaterais do quadril (glúteos). Contudo, os exercícios de cadeia cinética fechada (CCF), como agachamentos e leg press, devem ser limitados em amplitude de movimento (tipicamente entre 0° e 45° de flexão) para evitar compressão patelar excessiva e pinçamentos basais. Os exercícios de cadeia cinética aberta (extensora) devem evitar os últimos 10° de extensão completa na fase aguda.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Fase 3: Controle Neuromuscular e Retorno ao Impacto</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Conforme a inflamação cede (indicado por teste de Hoffa negativo e ausência de dor nas atividades cotidianas), introduzimos progressivamente o controle motor de saltos e corridas. O foco é corrigir padrões de aterrissagem em valgo dinâmico e treinar a ativação excêntrica controlada do quadríceps, prevenindo que o joelho entre em hiperextensão brusca durante a desaceleração.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: O Papel do Raciocínio Clínico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O sucesso clínico no tratamento da dor anterior do joelho reside inteiramente na acurácia diagnóstica do fisioterapeuta. A Hoffite é uma condição que responde de maneira rápida e altamente satisfatória quando o raciocínio clínico correto é implementado: removendo a carga compressiva nociva precocemente e restabelecendo o alinhamento cinético-funcional. Registrar detalhadamente esses achados e monitorar a evolução clínica do paciente são os pilares para garantir desfechos de excelência.
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
            A Hoffite decorre da inflamação do coxim adiposo infrapatelar por pinçamento ou microtraumas repetitivos, apresentando dor profunda e sensibilidade anterior agravada pela extensão máxima ou compressão direta.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            O diagnóstico diferencial clínico permite afastar a tendinopatia patelar (caracterizada por dor tensional sob impacto) e a condropatia patelar (típica dor retropatelar agravada por flexão prolongada).
          </p>
          <p className="leading-relaxed text-gray-300">
            A conduta fisioterapêutica adequada prioriza o controle inicial da compressão mecânica com uso de bandagem de descarga (Hoffa taping), reequilíbrio neuromuscular e fortalecimento progressivo em amplitudes livres de compressão.
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
