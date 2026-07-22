import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/alongamento-previne-lesao-o-que-dizem-as-evidencias";

const faqItems = [
  {
    question: "O alongamento antes do exercício previne lesões?",
    answer: "Não. A evidência científica atual, incluindo grandes revisões sistemáticas, demonstra que o alongamento estático ou dinâmico realizado antes da atividade física não reduz a incidência de lesões musculoesqueléticas gerais."
  },
  {
    question: "O alongamento reduz a dor muscular tardia (DOMS)?",
    answer: "Estudos clínicos mostram que alongar antes ou depois do treino produz um efeito clinicamente insignificante na dor muscular pós-exercício (redução de menos de 1 a 2 pontos em uma escala de 0 a 100)."
  },
  {
    question: "O alongamento dinâmico é melhor do que o estático no aquecimento?",
    answer: "Sim. Embora nenhum dos dois previna lesões diretamente, o alongamento dinâmico é preferível antes do treino porque prepara a musculatura de forma ativa sem causar a perda temporária de força e potência associada ao alongamento estático prolongado."
  },
  {
    question: "Quais estratégias realmente funcionam para prevenir lesões?",
    answer: "As estratégias com maior suporte científico são o treinamento de força muscular progressivo (que melhora a tolerância tecidual), o controle neuromuscular/equilíbrio e uma gestão adequada da carga de treino (evitando picos de volume ou intensidade)."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alongamento Previne Lesão? O Que Dizem as Evidências?",
  description: "Descubra se o alongamento realmente previne lesões. Veja o que dizem as evidências científicas atuais sobre flexibilidade, força e prevenção no esporte.",
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
  image: "https://kynesia.com.br/blog/alongamento-previne-lesoes.jpg",
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
  title: "Alongamento Previne Lesão? O Que Dizem as Evidências?",
  description: "O alongamento previne lesão no esporte e na clínica? Descubra o que dizem as evidências científicas atuais sobre flexibilidade, força e prevenção. Leia mais!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Alongamento Previne Lesão? O Que Dizem as Evidências?",
    description: "O alongamento previne lesão no esporte e na clínica? Descubra o que dizem as evidências científicas atuais sobre flexibilidade, força e prevenção. Leia mais!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/alongamento-previne-lesoes.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre alongamento e prevenção de lesões, destacando a importância da força, controle e carga bem gerenciada sobre o alongamento isolado.",
      },
    ],
  },
};

export default function AlongamentoPrevencaoPage() {
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
            Alongamento Previne Lesão? O Que Dizem as Evidências Científicas
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            A recomendação tradicional de alongar antes dos exercícios físicos é amplamente aceita no senso comum. Mas será que essa prática resiste ao escrutínio da ciência moderna?
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 22 Jul 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/alongamento-previne-lesoes.jpg"
            alt="Infográfico da Kynesia com o título 'Alongamento Previne Lesão? O que as evidências dizem sobre?' ilustrado por um atleta se alongando."
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
            A evidência científica atual demonstra que o <strong>alongamento isolado não previne lesões</strong> musculoesqueléticas de forma significativa no esporte ou na clínica. Revisões sistemáticas robustas indicam que intervenções focadas no fortalecimento muscular, no controle motor/propriocepção e no gerenciamento inteligente da carga de treino são consideravelmente mais eficazes para reduzir o risco de lesões.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Por décadas, a rotina de preparação para qualquer atividade física parecia inquestionável: realizar alguns minutos de alongamentos estáticos para &ldquo;aquecer&rdquo; os músculos, melhorar a flexibilidade e evitar estiramentos ou entorses. Essa prática foi defendida por técnicos, professores de educação física e até profissionais de saúde sob o argumento lógico de que tecidos mais flexíveis suportam maiores deformações sem sofrer danos.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          No entanto, com a consolidação da Prática Baseada em Evidências (PBE) na fisioterapia e na medicina esportiva, pesquisadores passaram a testar essa premissa em grandes ensaios clínicos controlados e revisões sistemáticas. O resultado foi um choque de realidade para o senso comum. Afinal, a ciência comprova se o <strong>alongamento previne lesão</strong> ou se essa recomendação histórica não passa de um mito bem consolidado?
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, analisamos o que a literatura científica atual realmente diz sobre o impacto do alongamento no risco de lesões, a fisiologia por trás dessa prática e quais intervenções preventivas são verdadeiramente amparadas por evidências de alta qualidade.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática Baseada em Evidências na Fisioterapia: Como Aplicar na Rotina Clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Carga Progressiva em Tendinopatias: Como Prescrever com Segurança
              </Link>
            </li>
            <li>
              <Link href="/blog/kinesio-tape-funciona-o-que-dizem-as-evidencias" className="text-teal-600 hover:underline">
                → Kinesio Tape Funciona? O que Dizem as Evidências Científicas Atuais
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. A Crença de que o Alongamento Previne Lesão: O que Dizem as Evidências?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para responder a essa pergunta com rigor científico, precisamos olhar para as maiores e mais respeitadas revisões da literatura médica. O estudo de referência clássico nesse campo é a metanálise conduzida por <strong>Lauersen et al. (2014)</strong>, publicada no <i>British Journal of Sports Medicine (BJSM)</i>. Os autores analisaram 25 ensaios clínicos controlados e randomizados que totalizaram mais de 26.600 participantes, avaliando diferentes tipos de intervenções preventivas.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Os resultados foram categóricos: o treinamento de força muscular reduziu o risco de lesões esportivas em mais de <strong>68%</strong>. O treinamento proprioceptivo e de coordenação reduziu as lesões em cerca de <strong>45%</strong>. No entanto, o alongamento de forma isolada apresentou uma redução de risco estatisticamente nula (sem qualquer efeito clínico ou relevância estatística na prevenção).
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Outras grandes revisões apontam na mesma direção:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Herbert & Gabriel (2002):</strong> Publicada no <i>British Medical Journal (BMJ)</i>, concluiu que o alongamento realizado antes ou depois do exercício oferece um efeito protetor mínimo sobre a dor muscular pós-treino ou sobre o risco de lesões.</li>
          <li><strong>Small et al. (2008):</strong> Avaliou o alongamento estático antes da atividade física e determinou que a prática não preveniu lesões musculares agudas (estiramentos) ou lesões articulares (entorses).</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Portanto, afirmar de forma absoluta que o **alongamento previne lesão** contraria o consenso da literatura científica atual. O alongamento passivo convencional simplesmente não altera os fatores desencadeantes mais comuns de lesões durante a atividade física.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Por que o Alongamento Isolado Não Previne Lesões?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para compreender a ineficácia do alongamento como barreira preventiva, precisamos analisar o comportamento biomecânico e fisiológico dos tecidos musculoesqueléticos. Existem três motivos principais pelos quais a flexibilidade passiva obtida pelo alongamento não se traduz em proteção mecânica ativa:
        </p>
        
        <h3 className="font-bold text-lg text-gray-900 mt-6">A Mecânica das Lesões Musculares</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A grande maioria das lesões musculares agudas (como o estiramento de isquiotibiais ou do tríceps sural) ocorre durante a fase excêntrica do movimento em alta velocidade. Nesse momento, o músculo está tentando frear ativamente um segmento corporal enquanto é alongado sob carga. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          O alongamento passivo estático apenas treina a tolerância do sistema nervoso à tensão passiva em uma amplitude lenta e sem carga. Ele não desenvolve a capacidade contrátil ativa do músculo para absorver energia biomecânica e desacelerar o movimento de forma controlada.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">O Efeito do &ldquo;Déficit de Força Induzido pelo Alongamento&rdquo;</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O alongamento estático mantido por períodos prolongados (acima de 45 a 60 segundos por grupo muscular) imediatamente antes do exercício provoca uma diminuição temporária da capacidade de gerar força, velocidade e potência muscular. Este fenômeno é conhecido na literatura científica como <i>stretch-induced force deficit</i>. 
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Ao reduzir transitoriamente a rigidez musculotendínea (stiffness) e dessensibilizar os fusos musculares, o músculo torna-se menos reativo e menos capaz de gerar torque rápido. Em esportes explosivos (sprints, saltos, mudas de direção), essa redução na capacidade de resposta neuromuscular pode, teoricamente, aumentar a instabilidade articular e elevar o risco de lesões agudas, além de prejudicar a performance física.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Os Quatro Pilares do Raciocínio Clínico na Prevenção de Lesões</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A prevenção de lesões na fisioterapia moderna exige a substituição de protocolos obsoletos por estratégias baseadas em evidências científicas sólidas. O infográfico da Kynesia destaca os quatro fatores fundamentais que superam e complementam a flexibilidade na proteção do atleta ou paciente:
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Pilar 1: Flexibilidade Importa, mas Mobilidade com Controle Protege</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Ter boa flexibilidade passiva significa apenas que uma articulação pode ser movida passivamente a amplitudes extremas. Contudo, na prática esportiva, o que protege o sistema musculoesquelético é a **mobilidade com controle**. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          A mobilidade funcional refere-se à habilidade de mover-se ativamente por meio dessas amplitudes com estabilidade dinâmica, controle motor e coordenação intrínseca. Alongar sem treinar a musculatura estabilizadora para controlar essa nova amplitude cria um tecido flexível, porém vulnerável.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Pilar 2: A Força é Fundamental</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Conforme demonstrado na metanálise de Lauersen, o treinamento de força é o método preventivo mais poderoso. Músculos fortes e hipertrofiados possuem maior capacidade de absorção de energia (trabalho mecânico). Além disso, o exercício resistido promove adaptações estruturais nos tendões (aumento da síntese de colágeno e rigidez tendínea) e no tecido conjuntivo adjacente. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          O treinamento excêntrico de força, em particular, altera o comprimento ótimo do sarcômero, permitindo que a musculatura suporte maiores tensões excêntricas sem sofrer danos estruturais.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Pilar 3: Carga Bem Gerenciada</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A maioria das lesões crônicas ou por sobrecarga (overuse), como tendinopatias, fraturas por estresse e dores patelofemorais, decorre de erros de planejamento no volume, intensidade e frequência dos treinos. 
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          O uso de métricas de monitoramento de carga, como a Razão de Carga de Trabalho Aguda-Crônica (ACWR - Acute-to-Chronic Workload Ratio), permite que fisioterapeutas e preparadores evitem aumentos bruscos de carga (picos de treino) que superam a capacidade de resiliência biológica dos tecidos. Uma progressão gradual e bem estruturada é a chave preventiva.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mt-6">Pilar 4: Controle Neuromuscular e Estabilidade</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A instabilidade articular é um forte preditor de entorses ligamentares e estiramentos musculares repetitivos. O treinamento proprioceptivo, focado em equilíbrio, coordenação intermuscular e agilidade, melhora o tempo de reação muscular reflexa. Um exemplo prático consagrado é o programa de aquecimento *FIFA 11+*, amplamente validado em pesquisas por reduzir drasticamente a incidência de lesões no futebol ao integrar controle neuromuscular com exercícios de estabilização.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">4. Quando o Alongamento Deve Ser Utilizado pelo Fisioterapeuta?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A constatação de que o alongamento não previne lesões esportivas de forma direta não significa que a técnica deva ser completamente abolida da prática fisioterapêutica ou da rotina de treinos. O alongamento possui aplicações clínicas relevantes e deve ser prescrito com objetivos claros:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-3 text-gray-700">
          <li>
            <strong>Reabilitação de Encurtamentos Estruturais:</strong> Em pacientes que sofreram imobilizações prolongadas ou pós-operatórios complexos, o alongamento (especialmente o alongamento estático prolongado e técnicas de facilitação neuromuscular proprioceptiva - FNP) é vital para restabelecer a amplitude de movimento (ADM) articular e remodelar o colágeno tecidual.
          </li>
          <li>
            <strong>Modulação de Dor e Rigidez Percebida:</strong> O alongamento promove uma resposta de relaxamento por estimulação de mecanorrecetores e redução do tônus simpático periférico. Para pacientes com dores crônicas ou percepção de rigidez (como na lombalgia crônica), a prática gera alívio sintomático temporário e melhora a percepção subjetiva de bem-estar.
          </li>
          <li>
            <strong>Demandas Esportivas Específicas:</strong> Esportes que necessitam de amplitudes de movimento extremas para a realização de gestos técnicos (ginástica artística, ballet, artes marciais) demandam níveis de flexibilidade que exigem rotinas dedicadas de alongamento.
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela Comparativa de Estratégias na Prevenção de Lesões</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tabela a seguir apresenta uma comparação prática das intervenções comumente associadas à prevenção de lesões e o respectivo nível de suporte científico:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Estratégia Preventiva</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Mecanismo de Ação Principal</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Eficácia na Prevenção</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Recomendação de Prática</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Treinamento de Força</td>
                <td className="px-6 py-4 text-gray-700">Melhora a resiliência tecidual, tolerância à carga e coordenação contrátil.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Excelente (~68% de redução)</td>
                <td className="px-6 py-4 text-gray-700">Treinamento resistido progressivo, com ênfase em cargas excêntricas.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Controle Motor / Propriocepção</td>
                <td className="px-6 py-4 text-gray-700">Otimiza a estabilização ativa das articulações e o tempo de reação reflexa.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Muito Alta (~45% de redução)</td>
                <td className="px-6 py-4 text-gray-700">Exercícios de equilíbrio instável, aterrissagens e agilidade neuromuscular.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Gestão de Carga (ACWR)</td>
                <td className="px-6 py-4 text-gray-700">Evita sobrecargas cumulativas e picos inadequados de volume/intensidade.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Muito Alta (Prevenção de Overuse)</td>
                <td className="px-6 py-4 text-gray-700">Planejamento individualizado da carga aguda em relação à carga histórica acumulada.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Alongamento Isolado</td>
                <td className="px-6 py-4 text-gray-700">Aumenta a complacência passiva do tecido musculoesquelético.</td>
                <td className="px-6 py-4 text-red-600 font-bold">Nula / Insignificante</td>
                <td className="px-6 py-4 text-gray-700">Prescrever apenas para ganho estrutural de ADM em amplitudes específicas.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">5. Como Estruturar um Aquecimento Baseado em Evidências?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Se o alongamento estático clássico antes dos treinos deve ser evitado ou rebaixado na hierarquia preventiva, qual deve ser a conduta na preparação do paciente ou atleta para o esforço físico?
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A recomendação atual aponta para o **aquecimento dinâmico ativo**. Um programa preventivo de aquecimento ideal deve conter:
        </p>
        <ul className="list-decimal pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Ativação Cardiovascular Inicial:</strong> 5 a 10 minutos de atividade aeróbica leve (trote, bicicleta estática) para elevar a temperatura corporal e o fluxo sanguíneo local.</li>
          <li><strong>Alongamento Dinâmico Ativo:</strong> Movimentar os membros ao longo da amplitude disponível de forma dinâmica e controlada (por exemplo, passadas com rotação de tronco, chutes controlados para frente e para trás). Isso melhora o deslizamento dos tecidos sem inibir a força contrátil.</li>
          <li><strong>Ativação Neuromuscular Específica:</strong> Exercícios de estabilização do core (pontes, pranchas rápidas) e recrutamento de glúteos para preparar os estabilizadores dinâmicos.</li>
          <li><strong>Potencialização Pós-Ativação (PAP):</strong> Movimentos rápidos ou pliométricos leves semelhantes ao esporte para sinalizar ao sistema nervoso central a prontidão contrátil das fibras rápidas.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: O Alongamento Previne Lesão na Fisioterapia Moderna?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em resumo, a alegação histórica de que o **alongamento previne lesão** de forma isolada foi refutada pela ciência contemporânea. A prevenção de lesões musculoesqueléticas é um processo complexo, multifatorial e individualizado, que não pode ser resolvido com uma simples rotina de flexibilidade passiva.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para o fisioterapeuta, o foco deve mudar do &ldquo;alongar tecidos&rdquo; para o &ldquo;preparar estruturas&rdquo;. Construir tecidos capazes de tolerar cargas elevadas por meio do fortalecimento progressivo, treinar o controle motor dinâmico e monitorar de perto a distribuição do estresse mecânico no corpo do paciente são as bases de uma atuação verdadeiramente eficaz e baseada em evidências.
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
            Diferente da crença popular, o alongamento isolado (estático ou dinâmico) não apresenta relevância estatística ou clínica na redução global do risco de lesões musculoesqueléticas em esportistas ou pacientes clínicos.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A prevenção eficaz é predominantemente dependente do aumento da capacidade mecânica do tissue (treinamento de força), melhoria do recrutamento neuromuscular (propriocepção e estabilidade) e da contenção de erros de sobrecarga (gerenciamento de carga de treino).
          </p>
          <p className="leading-relaxed text-gray-300">
            O fisioterapeuta baseado em evidências deve prescrever alongamento com objetivos específicos — como a recuperação de limitação estrutural de amplitude de movimento ou a facilitação do relaxamento do paciente —, substituindo o alongamento estático pré-treino por estratégias ativas de aquecimento e preparação física.
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
