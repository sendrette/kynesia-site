import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/crepitacao-no-joelho-quando-estalos-sao-normais-e-quando-devem-preocupar";

const faqItems = [
  {
    question: "O que é a crepitação no joelho e qual a sua causa principal?",
    answer: "A crepitação no joelho refere-se aos estalos, ruídos ou sensação de atrito áspero na articulação durante o movimento. A causa principal varia desde a cavitação fisiológica (gases no líquido sinovial) até fatores patológicos como desgaste da cartilagem (artrose), condropatia patelar, plicas sinoviais ou lesões de menisco."
  },
  {
    question: "Estalos frequentes ao agachar são perigosos?",
    answer: "Se ocorrerem de forma totalmente isolada (sem dor, inchaço ou limitação), os estalos ao agachar geralmente são benignos (fisiológicos). No entanto, se vierem acompanhados de desconforto na região frontal do joelho, podem indicar condropatia patelar ou sobrecarga femoropatelar."
  },
  {
    question: "A crepitação sem dor pode evoluir para artrose?",
    answer: "Não necessariamente. Estudos clínicos e diretrizes internacionais mostram que a crepitação isolada não é um fator preditor confiável para o desenvolvimento de osteoartrose grave ou de perda de função em pessoas sem sintomas de dor."
  },
  {
    question: "Como o fortalecimento muscular ajuda na crepitação do joelho?",
    answer: "O fortalecimento de músculos como o quadríceps e os abdutores do quadril melhora o alinhamento e o rastreamento da patela no sulco troclear. Isso diminui o atrito assimétrico na cartilagem, reduzindo os sintomas e estabilizando a articulação dinamicamente."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Crepitação no Joelho: Quando os Estalos São Preocupantes?",
  description: "Entenda o que é a crepitação no joelho. Conheça as causas fisiológicas e patológicas, os sinais de alerta e o que a ciência diz sobre os estalos articulares.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  image: "https://kynesia.com.br/blog/crepitacao-joelho-estalos-normais-preocupar.jpg",
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
  title: "Crepitação no Joelho: Quando os Estalos São Preocupantes?",
  description: "O estalo ou crepitação no joelho é normal? Conheça as causas fisiológicas e patológicas, os sinais de alerta e quando procurar tratamento. Leia mais!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Crepitação no Joelho: Quando os Estalos São Preocupantes?",
    description: "O estalo ou crepitação no joelho é normal? Conheça as causas fisiológicas e patológicas, os sinais de alerta e quando procurar tratamento. Leia mais!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/crepitacao-joelho-estalos-normais-preocupar.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre crepitação no joelho, detalhando causas comuns (fisiológica, condropatia, menisco, artrose, corpos livres) e sinais de alerta.",
      },
    ],
  },
};

export default function CrepitacaoNoJoelhoPage() {
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
            Crepitação no Joelho: Quando Estalos São Normais e Quando Devem Preocupar?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Ouvir estalos ou sentir uma sensação de &ldquo;areia&rdquo; dentro do joelho é uma queixa extremamente comum. Descubra o que a ciência diz sobre a crepitação e aprenda a identificar os sinais de alerta.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 22 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/crepitacao-joelho-estalos-normais-preocupar.jpg"
            alt="Infográfico da Kynesia com o título 'Crepitação no Joelho: Quando estalos são normais e quando devem preocupar?' mostrando a anatomia do joelho inflamado, causas comuns e sinais de alerta."
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
            A <strong>crepitação no joelho</strong> (estalos articulares) é considerada normal e inofensiva quando ocorre de forma isolada, sem dor, inchaço ou travamento. No entanto, se os ruídos vierem acompanhados de dor ao se movimentar, episódios de bloqueio articular, edema local ou perda de função nas atividades diárias, eles representam sinais de alerta que exigem avaliação profissional.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Sentir ou ouvir o joelho estalar ao levantar da cadeira, agachar para pegar um objeto ou subir degraus de escada é uma experiência compartilhada por uma enorme parcela da população. Para muitos pacientes, esse barulho gera uma ansiedade imediata, frequentemente associada à falsa ideia de que suas articulações estão &ldquo;desgastadas&rdquo; ou que a atividade física está causando danos irreversíveis.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Clinicamente, chamamos esses ruídos e sensações de fricção de **crepitação articular**. Na fisioterapia moderna, a abordagem desses sinais mudou drasticamente. Graças a pesquisas científicas recentes, sabemos que a **crepitação no joelho** na ausência de sintomas clínicos adicionais não deve ser motivo de pânico e não impede a prática de exercícios físicos. 
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, detalhamos as principais causas por trás dos estalos no joelho, diferenciamos o que é um ruído fisiológico normal de uma alteração patológica preocupante e discutimos as condutas preventivas e terapêuticas recomendadas pela ciência.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-no-joelho-ao-subir-escada-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no Joelho ao Subir Escada: Causas, Biomecânica e Intervenções
              </Link>
            </li>
            <li>
              <Link href="/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia" className="text-teal-600 hover:underline">
                → Diferença entre Tendinopatia Patelar, Quadríceps e Condropatia Patelar
              </Link>
            </li>
            <li>
              <Link href="/blog/estalo-no-joelho-e-normal-entenda-quando-preocupar" className="text-teal-600 hover:underline">
                → Estalo no Joelho é Normal? Entenda Quando se Preocupar na Prática Clínica
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. O que a Ciência Diz sobre a Crepitação no Joelho?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Durante anos, a crepitação foi considerada um sinal precoce inevitável de osteoartrose de joelho. No entanto, estudos epidemiológicos de larga escala começaram a desmistificar essa relação linear. Revisões sistemáticas e consensos internacionais de ortopedia apontam que a presença de crepitação patelofemoral isolada é extremamente prevalente em joelhos assintomáticos e saudáveis.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um estudo seminal publicado no <i>Arthritis Care & Research</i> monitorou participantes sem dor no joelho por anos e concluiu que a presença de estalos articulares sem dor não foi um preditor confiável para o desenvolvimento de danos estruturais severos ou limitação funcional futura.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          O maior perigo da **crepitação no joelho** desinformada é psicológico: a **cinesiofobia** (medo de se movimentar). Quando o paciente acredita que o estalo significa que a articulação está se deteriorando, ele passa a evitar agachamentos, escadas e atividades físicas. Esse desuso muscular leva à atrofia do quadríceps, sobrecarregando ainda mais a articulação femoropatelar e, paradoxalmente, gerando a dor que o paciente tanto tentava evitar.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Causas Mais Comuns de Crepitação no Joelho</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Conforme ilustrado no infográfico da Kynesia, os ruídos articulares possuem origens biomecânicas e estruturais variadas. Podemos classificar as causas em cinco categorias principais:
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">A. Crepitação Fisiológica (Sem Dor)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Representa estalos benignos e comuns. O mecanismo mais frequente é a **cavitação**, que ocorre quando há rápidas mudanças de pressão no líquido sinovial (o lubrificante natural da articulação). Essa oscilação de pressão faz com que bolhas de gás (como dióxido de carbono) se formem e colapsem rapidamente na articulação, gerando um estalo nítido e indolor. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Outro fator fisiológico comum é o ressalto de tendões ou ligamentos sobre proeminências ósseas durante a flexoextensão rápida. Esse tipo de estalo costuma ser intermitente e não causa prejuízos à saúde da cartilagem.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">B. Condropatia Patelar (Dor Anterior)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A condropatia (ou condromalácia) patelar refere-se ao amolecimento, fissura ou desgaste da cartilagem na parte de trás da patela. Quando o alinhamento da patela no sulco troclear do fêmur está ligeiramente alterado (por fraqueza do quadríceps ou desalinhamento dinâmico), ocorre um aumento de atrito na região anterior do joelho. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Esse aumento de fricção mecânica gera uma crepitação contínua, muitas vezes descrita como a sensação de &ldquo;areia&rdquo; ou de &ldquo;vidro moído&rdquo; ao agachar, subir ou descer escadas, frequentemente acompanhada de dor difusa ao redor da patela.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">C. Lesão de Menisco (Estalos e Bloqueio)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Os meniscos são fibrocartilagens em formato de meia-lua localizadas entre o fêmur e a tíbia, atuando como amortecedores de impacto. Quando ocorre uma ruptura meniscal (seja por trauma rotacional ou por desgaste degenerativo), uma aba ou fragmento rompido do menisco pode se deslocar e ficar presa temporariamente entre as superfícies ósseas durante a movimentação.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Isso provoca estalos secos e bem localizados na lateral interna ou externa do joelho, frequentemente associados a dor aguda e episódios de bloqueio mecânico temporário (incapacidade de estender ou fletir completamente a articulação).
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">D. Artrose (Desgaste da Cartilagem)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A osteoartrose (ou osteoartrite) de joelho é uma patologia degenerativa crônica caracterizada pela perda progressiva da cartilagem articular, remodelação do osso subcondral e formação de osteófitos (bicos de papagaio). 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Sem a cobertura lisa da cartilagem, as superfícies ósseas desgastadas entram em contato direto. O atrito direto osso-com-osso produz uma crepitação áspera, persistente e audível durante quase todos os movimentos sob carga, associada a dor mecânica progressiva, rigidez matinal e perda de amplitude de movimento.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">E. Corpos Livres (Presença de Fragmentos Intra-articulares)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Refere-se à presença de pequenos pedaços soltos de osso ou cartilagem flutuando livremente no líquido sinovial (geralmente resultantes de fraturas osteocondrais, lesões graves ou artrose avançada). Esses fragmentos móveis podem migrar e ficar presos entre as superfícies de contato articular, gerando estalos agudos repentinos, dor súbita incapacitante e episódios erráticos de travamento articular.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Quando os Estalos no Joelho Devem Preocupar? (Sinais de Alerta)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A avaliação clínica criteriosa deve focar no conjunto de sintomas que acompanham o ruído. Os quatro sinais de alerta clássicos (Red Flags funcionais do joelho) que exigem intervenção clínica imediata são:
        </p>
        
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5">
            <h4 className="mb-2 font-bold text-red-800">⚡ 1. Dor Associada</h4>
            <p className="text-sm text-gray-700">
              A presença de dor local (aguda ou surda) ocorrendo especificamente no momento ou logo após o estalo sugere sobrecarga excessiva ou irritação inflamatória de tecidos moles ou cartilagem.
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5">
            <h4 className="mb-2 font-bold text-red-800">🔒 2. Bloqueio Mecânico</h4>
            <p className="text-sm text-gray-700">
              Sensação de que o joelho está &ldquo;travado&rdquo; ou impedido fisicamente de esticar ou dobrar. Indica tipicamente interferência física na mecânica da articulação (como lesões de menisco em alça de balde ou corpos livres).
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5">
            <h4 className="mb-2 font-bold text-red-800">💧 3. Inchaço (Edema)</h4>
            <p className="text-sm text-gray-700">
              Aumento perceptível do volume articular (derrame sinovial ou &ldquo;água no joelho&rdquo;). É um sinal claro de processo inflamatório ativo provocado por sobrecarga tecidual ou trauma interno.
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5">
            <h4 className="mb-2 font-bold text-red-800">📉 4. Perda de Função</h4>
            <p className="text-sm text-gray-700">
              Dificuldade significativa para realizar atividades cotidianas como agachar, caminhar distâncias curtas, levantar de superfícies baixas ou subir e descer escadas devido à instabilidade ou dor.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">4. Conduta Fisioterapêutica Baseada em Evidências para Crepitação</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando a crepitação no joelho está associada a sintomas dolorosos ou desequilíbrios biomecânicos, a fisioterapia baseada em evidências atua na otimização da distribuição de forças na articulação por meio de três pilares:
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Fortalecimento e Ativação do Quadríceps</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O quadríceps é o principal estabilizador dinâmico da patela. O fortalecimento progressivo do músculo quadríceps (especialmente focando em amplitudes confortáveis) melhora o controle e o direcionamento da patela dentro do sulco femoral. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Estudos clínicos mostram que o ganho de trofismo muscular do quadríceps reduz drasticamente a dor na síndrome da dor patelofemoral e na artrose, mesmo que o ruído articular residual permaneça, pois a cartilagem passa a sofrer menos compressão assimétrica.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Estabilização Posterolateral do Quadril</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O controle do joelho depende muito do quadril. Se os músculos abdutores e rotadores externos do quadril (principalmente o glúteo médio) estiverem fracos, o fêmur tende a realizar uma rotação interna excessiva durante atividades de apoio unipodal (passadas, saltos). 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Esse desalinhamento dinâmico (conhecido como valgo dinâmico) altera severamente o rastreamento patelar, aumentando o atrito lateral da patela. Fortalecer os glúteos reposiciona o membro inferior e alivia a pressão mecânica anterior.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Treino Neuromuscular e Exposição Gradual</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Corrigir a biomecânica em movimentos funcionais (agachamento, corrida) e dessensibilizar a crença de dor do paciente são fundamentais. A educação em neurociência da dor auxilia o paciente a compreender que o joelho estalar sem dor é seguro, promovendo uma exposição gradual ao exercício e quebrando o ciclo prejudicial do medo do movimento.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela de Critérios Clínicos de Decisão</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tabela a seguir orienta a tomada de decisão clínica rápida no consultório do fisioterapeuta ao avaliar pacientes com queixas de crepitação:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Tipo de Ruído</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Sintomas Associados</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Diagnóstico Provável</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Conduta Recomendada</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Estalo Único Rápido</td>
                <td className="px-6 py-4 text-gray-700">Ausência total de dor, inchaço ou desconforto.</td>
                <td className="px-6 py-4 text-teal-700 font-medium">Cavitação Fisiológica (Benigna)</td>
                <td className="px-6 py-4 text-gray-700">Tranquilizar o paciente, orientar sobre cinesiofobia e incentivar exercícios normais.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Fricção Áspera (&ldquo;Areia&rdquo;)</td>
                <td className="px-6 py-4 text-gray-700">Dor anterior difusa que piora ao descer escadas ou ficar muito tempo sentado.</td>
                <td className="px-6 py-4 text-teal-700 font-medium">Condropatia Patelar / DPF</td>
                <td className="px-6 py-4 text-gray-700">Fortalecimento de quadríceps, glúteos e controle dinâmico do valgo.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Estalo Seco com Travamento</td>
                <td className="px-6 py-4 text-gray-700">Dor localizada na linha articular interna/externa, falseio ou bloqueio ativo.</td>
                <td className="px-6 py-4 text-red-600 font-bold">Lesão de Menisco ou Corpo Livre</td>
                <td className="px-6 py-4 text-gray-700">Avaliação ortopédica, controle inflamatório inicial e reabilitação específica.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Crepitação Áspera Contínua</td>
                <td className="px-6 py-4 text-gray-700">Dor progressiva sob carga, rigidez articular matinal e perda de flexão/extensão.</td>
                <td className="px-6 py-4 text-teal-700 font-medium">Osteoartrose de Joelho</td>
                <td className="px-6 py-4 text-gray-700">Fortalecimento progressivo, mobilidade articular de baixa carga e gestão de impacto.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: A Importância da Avaliação Diferencial</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Concluímos que a ideia de que a **crepitação no joelho** sempre representa lesão grave é um mito que deve ser combatido. O papel do fisioterapeuta é guiar o paciente por meio de uma avaliação diagnóstica diferencial detalhada, desmistificando o ruído quando inofensivo e estruturando uma conduta terapêutica baseada no manejo de carga e no reequilíbrio muscular quando houver repercussões clínicas reais.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A articulação do joelho é resiliente e adaptável. Proporcionar informações de qualidade e incentivar o movimento ativo e seguro são os melhores caminhos para promover a saúde articular a longo prazo.
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
            A crepitação patelofemoral isolada é uma queixa articular comum e majoritariamente benigna, resultante de processos fisiológicos como cavitação gasosa e não deve ser associada a dano articular precoce na ausência de sintomas clínicos.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A presença de sinais de alerta concomitantes — dor ao movimento, travamento ou bloqueio mecânico, edema recorrente e limitação funcional — exige conduta profissional para diagnosticar condropatia patelar, rupturas de menisco ou osteoartrose.
          </p>
          <p className="leading-relaxed text-gray-300">
            A conduta fisioterapêutica recomendada prioriza o fortalecimento do quadríceps e abdutores do quadril para otimizar o rastreamento da patela, associada à educação em neurociência da dor para atenuar a cinesiofobia do paciente.
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
