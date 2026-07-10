import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia";

const faqItems = [
  {
    question: "Qual a diferença de localização da dor entre a tendinopatia patelar e a do quadríceps?",
    answer: "A tendinopatia patelar provoca dor localizada no polo inferior da patela (ou corpo do tendão patelar), enquanto a tendinopatia do quadríceps gera dor no polo superior da patela, na transição miotendínea do quadríceps."
  },
  {
    question: "O que é o sinal do cinema na condropatia patelar?",
    answer: "O sinal do cinema (ou sinal do teatro) é a queixa de dor profunda ou rigidez retropatelar que se manifesta após o indivíduo permanecer sentado com os joelhos flexionados por um período prolongado, aliviando ao esticar a perna."
  },
  {
    question: "Como os testes clínicos diferenciam essas três patologias do joelho?",
    answer: "As tendinopatias são provocadas por carga tensional e palpadas nos respectivos polos da patela (o agachamento declinado a 20° isola o tendão patelar). A condropatia patelar responde a testes de compressão (teste de Clarke), teste de inclinação patelar e agachamento profundo acompanhado de crepitação articular difusa."
  },
  {
    question: "O tratamento para tendinopatias e condropatia patelar é o mesmo?",
    answer: "Não. As tendinopatias exigem um protocolo de carga progressiva (isometria, isotonia lenta e pliometria) para remodelar o colágeno. A condropatia patelar foca no fortalecimento dos estabilizadores do quadril (glúteos) e quadríceps dentro de angulações confortáveis de menor pressão de contato (zona livre de dor)."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diferença entre Tendinopatia Patelar, Tendinopatia do Quadríceps e Condropatia Patelar: Como Diferenciar na Avaliação Fisioterapêutica?",
  description: "Entenda a diferença entre tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar. Aprenda a avaliar, palpar e conduzir o diagnóstico diferencial.",
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
  image: "https://kynesia.com.br/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia.jpg",
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
  title: "Como Diferenciar Tendinopatia Patelar e Condropatia",
  description: "Aprenda a fazer o diagnóstico diferencial entre tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar na avaliação clínica. Leia agora!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como Diferenciar Tendinopatia Patelar e Condropatia",
    description: "Aprenda a fazer o diagnóstico diferencial entre tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar na avaliação clínica. Leia agora!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo comparando a localização da dor e os fatores de piora na tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar",
      },
    ],
  },
};

export default function DiferencaJoelhoPage() {
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
            Diferença entre Tendinopatia Patelar, Tendinopatia do Quadríceps e Condropatia Patelar: Como Diferenciar na Avaliação Fisioterapêutica?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a conduzir o diagnóstico diferencial cinético-funcional das três principais causas de dor anterior no joelho, otimizando o direcionamento do tratamento baseado em evidências.
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
            src="/blog/diferenca-tendinopatia-patelar-quadriceps-condropatia.jpg"
            alt="Infográfico comparativo sobre a diferença entre tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar, detalhando sintomas e locais de palpação"
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
            A diferença clínica entre tendinopatia patelar, tendinopatia do quadríceps e condropatia patelar está na localização exata da dor e nas atividades que desencadeiam os sintomas. A <strong>tendinopatia patelar</strong> apresenta dor localizada no polo inferior da patela que piora com saltos e corridas. A <strong>tendinopatia do quadríceps</strong> manifesta-se com dor no polo superior da patela, agravada por agachamentos e descida de escadas. Por fim, a <strong>condropatia patelar</strong> apresenta dor difusa retropatelar ou ao redor da patela, agravada por permanecer longos períodos sentado e acompanhada de crepitação articular sob carga.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A queixa de dor anterior no joelho é um dos motivos mais frequentes de consulta em clínicas de fisioterapia esportiva e ortopédica. Acometendo desde jovens corredores e praticantes de crossfit até idosos ativos, a dor na face frontal da articulação pode ser altamente limitante. A proximidade anatômica das estruturas do aparelho extensor do joelho frequentemente faz com que diferentes patologias apresentem sintomas sobrepostos.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Muitos profissionais cometem o erro de tratar toda dor anterior de forma genérica, aplicando protocolos padronizados de fortalecimento. No entanto, os tendões patelar e quadricipital respondem a estresses tênseis mecânicos de formas diferentes da cartilagem articular retropatelar. A incapacidade de diferenciar a **tendinopatia patelar** das demais afecções pode retardar a melhora ou agravar a sintomatologia.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, estruturamos um guia prático baseado em evidências científicas para que o fisioterapeuta conduza um diagnóstico diferencial cinético-funcional preciso durante a avaliação física, correlacionando os achados aos principais pilares terapêuticos de cada condição.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Carga Progressiva em Tendinopatias: Como Prescrever com Segurança
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
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação no Pós-Operatório do Joelho: Protocolos de Evolução
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. Tendinopatia Patelar: O Joelho do Saltador</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>tendinopatia patelar</strong> (tradicionalmente chamada de <em>Jumper's Knee</em>) é uma condição degenerativa crônica (tendinose) do tendão que conecta a patela à tuberosidade da tíbia. Ela decorre de uma incapacidade do tendão de tolerar cargas de tração repetitivas de alta velocidade, que excedem sua capacidade regenerativa.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Apresentação Clínica e Avaliação:</h3>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Localização da Dor:</strong> Dor pontual bem delimitada no **polo inferior da patela**, logo na inserção proximal do tendão patelar. Em alguns casos, pode acometer o corpo do tendão.</li>
          <li><strong>Fatores Agravantes:</strong> Atividades que utilizam o ciclo de alongamento-encurtamento (CAE) rápido do tendão, como saltar (<em>jumping</em>), aterrissar, correr em velocidade ou desacelerações abruptas.</li>
          <li><strong>Palpação:</strong> Dor aguda à palpação digital localizada estritamente sobre o polo inferior da patela com o joelho em extensão completa (o relaxamento do quadríceps expõe a inserção).</li>
          <li><strong>Teste Clínico Principal:</strong> O <em>Decline Squat Test</em> (agachamento unilateral declinado a 20°). Esse teste impõe alta carga de cisalhamento e tração no tendão patelar, reproduzindo a dor familiar do paciente se a patologia estiver presente.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Tendinopatia do Quadríceps: A Dor no Polo Superior</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Embora menos frequente que a patelar, a tendinopatia do quadríceps afeta indivíduos expostos a cargas repetitivas de agachamento profundo ou contrações excêntricas severas de desaceleração lenta. É comum em levantadores de peso olímpico, powerlifters e atletas de esportes de quadra.
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Apresentação Clínica e Avaliação:</h3>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Localização da Dor:</strong> Dor localizada no **polo superior da patela**, na junção osteotendínea do tendão quadricipital.</li>
          <li><strong>Fatores Agravantes:</strong> Movimentos que exigem alta demanda de força do quadríceps sob flexão acentuada do joelho, como agachamentos profundos, subida e descida de escadas e saltos em profundidade.</li>
          <li><strong>Palpação:</strong> Dor reprodutível à pressão digital firme sobre o polo superior da patela, na inserção do tendão do quadríceps.</li>
          <li><strong>Teste Clínico Principal:</strong> Agachamento profundo bilateral ou unilateral (com mais de 90° de flexão), que aumenta a tensão tensional no tendão superior contra a tróclea femoral.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Condropatia Patelar: O Desgaste da Cartilagem Articular</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Diferente das tendinopatias que são lesões de sobrecarga tensional em tecidos moles elásticos, a <strong>condropatia patelar</strong> (ou condromalácia) refere-se ao amolecimento, fissuração ou desgaste físico da cartilagem hialina que reveste a face posterior da patela. Está associada ao aumento crônico da pressão de contato na articulação femoropatelar, muitas vezes decorrente de desequilíbrios musculares (fraqueza do glúteo médio e vasto medial) ou desalinhamentos biomecânicos (valgo dinâmico).
        </p>
        <h3 className="font-bold text-lg text-gray-900 mt-6">Apresentação Clínica e Avaliação:</h3>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Localização da Dor:</strong> Dor profunda, difusa e mal localizada, descrita pelo paciente como \"atrás da patela\" (retropatelar) ou \"ao redor da patela\" (peripatelar).</li>
          <li><strong>Fatores Agravantes:</strong> Permanecer sentado por longos períodos com os joelhos flexionados (conhecido como **sinal do cinema** ou sinal do teatro), descer escadas, agachar profundamente e ajoelhar-se.</li>
          <li><strong>Crepitação Articular:</strong> Sensação física de atrito, estalos ou barulho de \"areia\" sob a patela durante movimentos de flexão e extensão sob carga.</li>
          <li><strong>Teste Clínico Principal:</strong> Teste de apreensão patelar, teste de inclinação lateral (tilt) patelar e teste de compressão ativa/passiva da patela contra a tróclea femoral (como o teste de Clarke modificador de sintomas).</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela de Diagnóstico Diferencial Cinético-Funcional</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para guiar o raciocínio rápido no consultório, a tabela abaixo consolida as principais diferenças clínicas entre as três condições anterior-patelares:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Estrutura / Critério</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Tendinopatia Patelar</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Tendinopatia do Quadríceps</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Condropatia Patelar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Local da Dor</td>
                <td className="px-6 py-4 text-gray-700">Polo inferior da patela.</td>
                <td className="px-6 py-4 text-gray-700">Polo superior da patela.</td>
                <td className="px-6 py-4 text-gray-700">Atrás da patela (retropatelar) ou peripatelar.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Fator de Piora Comum</td>
                <td className="px-6 py-4 text-gray-700">Atividades de impacto, saltos e corridas.</td>
                <td className="px-6 py-4 text-gray-700">Agachamento profundo, subir escadas.</td>
                <td className="px-6 py-4 text-gray-700">Ficar sentado com joelho dobrado (sinal do cinema).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Palpação Digital</td>
                <td className="px-6 py-4 text-gray-700">Dor localizada na inserção inferior do tendão.</td>
                <td className="px-6 py-4 text-gray-700">Dor na inserção superior do tendão.</td>
                <td className="px-6 py-4 text-gray-700">Dor difusa sob as bordas medial/lateral da patela.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Crepitação Articular</td>
                <td className="px-6 py-4 text-gray-700">Ausente.</td>
                <td className="px-6 py-4 text-gray-700">Ausente.</td>
                <td className="px-6 py-4 text-gray-700 font-medium text-teal-700">Frequente em agachamentos sob carga.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Abordagem de Tratamento</td>
                <td className="px-6 py-4 text-gray-700">Exercícios isométricos e isotônicos excêntricos/concêntricos lentos.</td>
                <td className="px-6 py-4 text-gray-700">Treinamento de carga lenta pesada do quadríceps.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Fortalecimento do quadril (glúteos) e controle do valgo dinâmico.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Implicações Clínicas na Conduta Fisioterapêutica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Compreender a diferença diagnóstica é fundamental porque os tecidos do joelho respondem a estímulos biomecânicos opostos:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Para as Tendinopatias (Carga é Remédio):</strong> Tendões doentes necessitam de estímulo tensional progressivo para reorganizar sua matriz celular de colágeno. O repouso prolongado é contraindicado, pois enfraquece ainda mais a estrutura do tendão. Iniciamos com isometria sustentada pesada (para analgesia imediata) e evoluímos para treinamento de força lento e progressivo antes de reinserir pliometria.
            </li>
            <li>
              <strong>Para a Condropatia Patelar (Gestão de Estresse de Contato):</strong> A cartilagem desgastada não tolera atrito físico sob alta pressão. A reabilitação deve focar em reduzir a pressão retro-patelar. Isso é alcançado corrigindo o rastreamento patelar por meio do fortalecimento de glúteo médio e vasto medial, além de realizar fortalecimento muscular em angulações livres de dor (cadeia cinética fechada entre 0°-45° e cadeia cinética aberta entre 90°-45°).
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Raciocínio Clínico e Resultados</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A diferenciação precisa entre as tendinopatias patelar e quadricipital e a condropatia patelar é a chave para o sucesso clínico na reabilitação do joelho. Ao analisar criteriosamente o local exato da dor, os fatores de piora mecânica e realizar testes provocativos estruturados, o fisioterapeuta atua com máxima segurança, gerando resultados rápidos, duradouros e baseados na melhor evidência científica contemporânea.
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
            A dor no polo inferior que se agrava com saltos direciona o raciocínio clínico para a tendinopatia patelar, tratada prioritariamente com carga progressiva.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A dor profunda peripatelar com sinal do cinema e presença de crepitação articular aponta para condropatia patelar, exigindo correção do valgo dinâmico e fortalecimento de glúteos.
          </p>
          <p className="leading-relaxed text-gray-300">
            O diagnóstico cinético-funcional qualificado e documentado no prontuário eletrônico resguarda a conduta e acelera os desfechos clínicos positivos do paciente.
          </p>
        </div>

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
