import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/diferenca-manguito-rotador-bursite-capsulite";

const faqItems = [
  {
    question: "Como a ADM passiva diferencia a capsulite adesiva das lesões do manguito rotador?",
    answer: "Na tendinopatia do manguito rotador (ou mesmo em rupturas parciais), a Amplitude de Movimento (ADM) passiva está completamente preservada, pois a limitação é por fraqueza ou dor sob contração ativa. Já na capsulite adesiva, há rigidez mecânica capsular estrutural, bloqueando tanto a ADM ativa quanto a passiva de forma global e severa."
  },
  {
    question: "O que é o arco doloroso e o que ele sugere na avaliação do ombro?",
    answer: "O arco doloroso é a presença de dor no ombro durante a abdução ativa do braço entre 60° e 120°. Esse sinal sugere compressão ou irritação de estruturas no espaço subacromial, como o tendão do supraespinhal (tendinopatia do manguito rotador) ou a bursa subacromial (bursite)."
  },
  {
    question: "Qual o tratamento fisioterapêutico inicial para a bursite subacromial?",
    answer: "O tratamento inicial para a bursite subacromial envolve controle álgico e inflamatório, modificação temporária de atividades acima da cabeça (evitando o pinçamento mecânico) e terapia manual suave para restabelecer a cinemática da escápula e da articulação glenoumeral."
  },
  {
    question: "Posso alongar agressivamente um ombro com capsulite adesiva na fase inicial?",
    answer: "Não. Na fase inicial (hiperálgica/inflamatória) da capsulite adesiva, alongamentos vigorosos ou mobilizações articulares agressivas são altamente contraindicados, pois perpetuam o processo inflamatório sinovial e pioram a dor. O foco inicial deve ser analgesia, educação do paciente e exercícios pendulares suaves."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Diferenciar Tendinopatia do Manguito Rotador, Bursite Subacromial e Capsulite Adesiva na Avaliação Fisioterapêutica",
  description: "Entenda como diferenciar a tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva. Guia de avaliação física, testes e conduta.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  image: "https://kynesia.com.br/blog/diferenca-manguito-bursite-capsulite.jpg",
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
  title: "Como Diferenciar Tendinopatia do Manguito e Bursite",
  description: "Aprenda a fazer o diagnóstico diferencial entre tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva na avaliação. Leia agora!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como Diferenciar Tendinopatia do Manguito e Bursite",
    description: "Aprenda a fazer o diagnóstico diferencial entre tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva na avaliação. Leia agora!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/diferenca-manguito-bursite-capsulite.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre a diferença clínica entre tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva",
      },
    ],
  },
};

export default function DiferencaOmbroPage() {
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
            Como Diferenciar Tendinopatia do Manguito Rotador, Bursite Subacromial e Capsulite Adesiva na Avaliação Fisioterapêutica
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a estruturar o diagnóstico diferencial cinético-funcional das três patologias mais comuns do ombro e direcione suas condutas de forma assertiva e baseada em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 10 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/diferenca-manguito-bursite-capsulite.jpg"
            alt="Infográfico explicativo resumindo a diferenciação entre tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva"
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
            A diferenciação entre tendinopatia do manguito rotador, bursite subacromial e capsulite adesiva reside principalmente na integridade da Amplitude de Movimento (ADM) passiva e na reatividade aos testes específicos. A <strong>tendinopatia do manguito</strong> e a <strong>bursite subacromial</strong> preservam a ADM passiva completa, apresentando dor no arco de movimento ativo (60°-120°). Por outro lado, a <strong>capsulite adesiva</strong> provoca uma perda global e rígida de ADM (tanto ativa quanto passiva), com restrição severa de rotação externa e abdução, evoluindo tipicamente em fases inflamatórias e fibróticas bem marcadas.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A dor no ombro é a segunda maior queixa musculoesquelética nos consultórios de fisioterapia, atrás apenas da dor lombar. Devido à sua ampla mobilidade tridimensional, a articulação glenoumeral depende fortemente de estabilizadores dinâmicos (músculos do manguito rotador) e estáticos (cápsula articular e ligamentos) que operam em um espaço subacromial milimétrico.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          O grande desafio clínico enfrentado pelos profissionais é a sobreposição de sintomas. Pacientes com tendinopatia do manguito, bursite aguda ou capsulite em fase inicial frequentemente apresentam queixas semelhantes: dor na face lateral do ombro, dor que piora à noite ao deitar sobre o braço e dificuldade para elevar o membro superior.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Tratar todas essas condições sob um mesmo protocolo genérico de reabilitação é um erro grave. Forçar amplitude de movimento de forma agressiva em uma capsulite na fase inflamatória pode exacerbar os sintomas de forma catastrófica, enquanto o repouso absoluto em uma tendinopatia acelera a atrofia e a desorganização de colágeno. Neste guia, apresentamos o roteiro detalhado para conduzir o **diagnóstico diferencial** na prática clínica baseada em evidências.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no Ombro ao Levantar o Braço: Entenda as Causas e Tratamento Eficaz
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes Ortopédicos para Ombro: Sensibilidade, Especificidade e Interpretação
              </Link>
            </li>
            <li>
              <Link href="/blog/sindrome-do-impacto-do-ombro-causas-tratamento-e-exercicios" className="text-teal-600 hover:underline">
                → Síndrome do Impacto do Ombro: Diagnóstico Baseado em Evidências e Exercícios
              </Link>
            </li>
            <li>
              <Link href="/blog/biopsicossocial-vs-biomecanico-o-que-vale-na-pratica" className="text-teal-600 hover:underline">
                → Modelo Biopsicossocial vs. Biomecânico na Fisioterapia Ortopédica
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. Tendinopatia do Manguito Rotador: Sobrecarga e Disfunção Ativa</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>tendinopatia do manguito rotador</strong> envolve alterações degenerativas e falhas regenerativas microestruturais nos tendões do supraespinhal, infraespinhal, redondo menor ou subescapular. É comumente causada por sobrecargas cumulativas de tração, compressão contra o arco coracoacromial e desequilíbrios biomecânicos da escápula.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Apresentação Clínica na Avaliação:</h3>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Localização da Dor:</strong> Dor lateral no ombro, com frequência referida na região de inserção do músculo deltoide.</li>
          <li><strong>Evolução:</strong> Instalação gradual e insidiosa, associada a aumentos súbitos de carga física ou movimentos repetitivos.</li>
          <li><strong>Amplitude de Movimento (ADM) Passiva:</strong> Completamente preservada. Se o fisioterapeuta mover passivamente o braço relaxado do paciente, a amplitude estará normal (embora possa ocorrer dor no final da amplitude devido à compressão passiva).</li>
          <li><strong>Arco Doloroso:</strong> Presença de dor característica na abdução ativa entre 60° e 120° (quando o espaço subacromial atinge seu menor volume).</li>
          <li><strong>Testes de Força:</strong> Fraqueza muscular objetiva ou dor intensa sob contração resistida em testes específicos (ex: teste de Jobe para o supraespinhal, teste de Patte para o infraespinhal e teste de Gerber/<em>lift-off</em> para o subescapular).</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Bursite Subacromial: O Processo Inflamatório Agudo</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>bursite subacromial</strong> (frequentemente associada à bursite subdeltoidea) é a inflamação da bolsa serosa que reduz o atrito entre o manguito rotador e o acrômio. Embora raramente ocorra de forma isolada (estando associada à tendinopatia subjacente), o quadro inflamatório da bursa dita o comportamento clínico de alta reatividade.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Apresentação Clínica na Avaliação:</h3>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Localização da Dor:</strong> Dor lateral aguda, intensa e altamente reativa, por vezes irradiada para o braço.</li>
          <li><strong>Comportamento da Dor:</strong> Dor forte e imediata ao elevar o braço de forma ativa.</li>
          <li><strong>Testes de Impacto:</strong> Altamente positivos. Manobras de Neer, Hawkins-Kennedy e Yocum reproduzem uma dor aguda imediata devido ao pinçamento direto da bursa inflamada contra as estruturas ósseas superiores.</li>
          <li><strong>Amplitude de Movimento (ADM):</strong> ADM passiva quase normal, porém severamente limitada nos graus finais de flexão e abdução pela dor mecânica aguda (bloqueio por dor, não por rigidez física estrutural).</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Capsulite Adesiva: A Rigidez Estrutural Global</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>capsulite adesiva</strong> (comumente conhecida como <em>ombro congelado</em>) é uma condição caracterizada por inflamação sinovial e subsequente fibrose densa e encurtamento da cápsula articular glenoumeral, afetando principalmente o recesso axilar e o intervalo dos rotadores. Ela reduz drasticamente o volume e a complacência da articulação.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Apresentação Clínica na Avaliação:</h3>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Localização da Dor:</strong> Dor profunda, difusa e constante no ombro, severa na fase inicial.</li>
          <li><strong>Amplitude de Movimento (ADM) Ativa e Passiva Reduzidas:</strong> Este é o marcador clínico definitivo. Há uma **perda global de mobilidade passiva e ativa**, com destaque para uma restrição mecânica marcante da **rotação externa** (com o cotovelo ao lado do corpo) e abdução. O fisioterapeuta encontra um bloqueio mecânico rígido de fim de curso (end-feel rígido/capsular).</li>
          <li><strong>Evolução em Fases:</strong> A patologia progride classicamente em três fases:
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-600">
              <li>*Fase Inflamatória/Dor (1 a 4 meses):* Dor severa constante, mesmo em repouso e à noite. A rigidez começa a se desenvolver.</li>
              <li>*Fase de Rigidez/Congelamento (4 a 12 meses):* A dor em repouso diminui gradualmente, mas a restrição de movimento atinge seu ápice (ombro congelado).</li>
              <li>*Fase de Resolução/Descongelamento (12 a 24 meses):* Restauração gradual e espontânea da amplitude de movimento.</li>
            </ul>
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela de Diagnóstico Diferencial Cinético-Funcional</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tabela a seguir consolida as características comportamentais e os testes diagnósticos fundamentais exibidos no infográfico clínico do Kynesia:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Critério Clínico</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Tendinopatia do Manguito</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Bursite Subacromial</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Capsulite Adesiva</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Início dos Sintomas</td>
                <td className="px-6 py-4 text-gray-700">Gradual e insidioso.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Agudo e súbito.</td>
                <td className="px-6 py-4 text-gray-700">Lento, passando por fases clínicas.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Tipo de Dor</td>
                <td className="px-6 py-4 text-gray-700">Dor lateral relacionada à força/movimento.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Dor lateral aguda altamente inflamatória.</td>
                <td className="px-6 py-4 text-gray-700">Dor profunda, difusa e constante.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">ADM Passiva</td>
                <td className="px-6 py-4 text-gray-700 font-semibold text-teal-700">Normal (preservada).</td>
                <td className="px-6 py-4 text-gray-700">Quase normal (limitação final por dor).</td>
                <td className="px-6 py-4 text-gray-700 font-semibold text-red-600">Severamente reduzida (bloqueio rígido).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Arco Doloroso Ativo</td>
                <td className="px-6 py-4 text-gray-700">Presente (principalmente 60°-120°).</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Dor intensa em todo o arco de elevação.</td>
                <td className="px-6 py-4 text-gray-700">Ausente (restrição bloqueia antes do arco).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Testes Clínicos</td>
                <td className="px-6 py-4 text-gray-700">Testes de força resistida positivos.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Testes de impacto (Neer/Hawkins) positivos.</td>
                <td className="px-6 py-4 text-gray-700">Restrição mecânica de rotação externa passiva.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Implicações Clínicas na Prescrição da Conduta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A distinção clara entre essas três condições altera radicalmente a estratégia terapêutica:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Conduta para o Manguito Rotador (Estímulo de Carga):</strong> Os tendões degenerados precisam de carga tensional progressiva e controlada para estimular a síntese de colágeno e aumentar a tolerância mecânica. O fortalecimento isométrico e isotônico lento dos rotadores externos e estabilizadores da escápula é o padrão-ouro de tratamento.
            </li>
            <li>
              <strong>Conduta para a Bursite Subacromial (Controle de Impacto):</strong> A prioridade inicial é acalmar a bursa inflamada. Isso envolve a suspensão temporária de movimentos repetitivos acima da cabeça, terapia manual para abrir espaço subacromial e técnicas analgésicas. À medida que a inflamação regride, progride-se para o fortalecimento do manguito.
            </li>
            <li>
              <strong>Conduta para a Capsulite Adesiva (Respeito às Fases):</strong> Na fase inicial dolorosa, alongamentos agressivos são prejudiciais. Deve-se focar em analgesia, calor, mobilizações de baixa amplitude (grau I e II) e exercícios ativos suaves de baixa irritabilidade. Na fase de rigidez crônica, a conduta muda para mobilizações de alta amplitude (grau III e IV) e alongamentos sustentados para remodelar o tecido capsular fibrótico.
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Raciocínio Clínico que Transforma Vidas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O diagnóstico cinético-funcional preciso é o primeiro passo para a excelência terapêutica. A habilidade de diferenciar a tendinopatia do manguito rotador, a bursite subacromial e a capsulite adesiva protege o paciente contra intervenções inadequadas, otimiza o tempo de recuperação e consolida o fisioterapeuta como uma autoridade em prática baseada em evidências.
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
            A preservação da ADM passiva associada a dor e fraqueza na força resistida direciona a conduta para a tendinopatia do manguito rotador.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A dor aguda intensa com testes de compressão e impacto positivos sem perda estrutural de ADM passiva sugere bursite subacromial.
          </p>
          <p className="leading-relaxed text-gray-300">
            A perda global e rígida da ADM ativa e passiva (bloqueio capsular), com destaque para a rotação externa, caracteriza a capsulite adesiva.
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
