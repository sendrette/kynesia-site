import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/teste-de-slump-avaliacao-dor-lombar";

const faqItems = [
  {
    question: "O que é o Teste de Slump e qual sua utilidade na fisioterapia?",
    answer: "O Teste de Slump é uma manobra neurodinâmica de tensão progressiva utilizada para avaliar a mecanossensibilidade do neuroeixo e das raízes nervosas lombossacrais. Ele aplica tração contínua desde a dura-máter cranial e medula espinhal até o nervo isquiático e suas ramificações distais, auxiliando na identificação de radiculopatias lombares e síndromes de dor radicular."
  },
  {
    question: "O que diferencia um Teste de Slump positivo de uma resposta fisiológica normal?",
    answer: "Para ser considerado positivo, o teste deve reproduzir os sintomas concordantes e familiares do paciente (dor radicular referida, parestesia ou queimação) e esses sintomas devem ser modificados manobrando uma articulação à distância (diferenciação estrutural, como alívio ao estender a coluna cervical sem alterar a posição da perna ou piora com dorsiflexão do tornozelo). Tensão na fossa poplítea ou desconforto torácico médio simétrico sem reprodução da queixa habitual é uma resposta fisiológica normal."
  },
  {
    question: "Qual a diferença de sensibilidade e especificidade entre o Teste de Slump e o Teste de Lasègue (SLR)?",
    answer: "Estudos sistemáticos indicam que o Teste de Slump possui maior sensibilidade (aproximadamente 80% a 84%) para detecção de comprometimento radicular lombar quando comparado ao Teste de Elevação da Perna Reta (SLR/Lasègue, cuja sensibilidade varia de 52% a 68%). Por outro lado, o SLR cruzado (Crossed SLR) mantém maior especificidade (cerca de 88% a 92%), tornando a combinação de ambos indispensável na prática clínica."
  },
  {
    question: "Por que a diferenciação estrutural é a etapa mais crítica do Teste de Slump?",
    answer: "Porque o teste coloca sob tensão máxima diversas estruturas simultaneamente: ligamentos posteriores da coluna, cápsulas articulares zigapofisárias, fáscia toracolombar, músculos isquiotibiais e o trato neural. Ao modificar o posicionamento cervical (pedindo para o paciente estender o pescoço mantendo a flexão tóraco-lombar e a extensão do joelho), o examinador altera exclusivamente a tensão mecânica na dura-máter e no neuroeixo. Se os sintomas distais ou na perna diminuírem, confirma-se a fonte neural da disfunção."
  },
  {
    question: "Quais são as contraindicações para a realização do Teste de Slump?",
    answer: "O teste é contraindicado na vigência de Red Flags (bandeiras vermelhas) como suspeita de Síndrome da Cauda Equina (incontinência, retenção urinária ou anestesia em sela), mielopatia cervical ou torácica ativa, fratura vertebral recente, infecção ativa (espondilodiscite), neoplasia espinhal com instabilidade e em quadros de dor radicular hiperaguda e incapacitante onde qualquer mobilização neural desencadeie sofrimento neuropático desproporcional."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teste de Slump: Como Realizar, Interpretar e Aplicar na Avaliação da Dor Lombar",
  description: "Guia completo e científico sobre o Teste de Slump na dor lombar. Aprenda a biomecânica neurodinâmica, diferenciação estrutural, sensibilidade diagnóstica e como evitar erros na avaliação radicular.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  image: "https://kynesia.com.br/blog/teste-de-slump-avaliacao-dor-lombar.jpg",
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
  title: "Teste de Slump: Como Realizar, Interpretar e Avaliar a Dor Lombar",
  description: "Aprenda o passo a passo do Teste de Slump na fisioterapia: biomecânica neurodinâmica, diferenciação estrutural, acurácia diagnóstica e interpretação clínica.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Teste de Slump: Como Realizar, Interpretar e Aplicar na Avaliação da Dor Lombar",
    description: "Guia completo sobre o Teste de Slump na fisioterapia: biomecânica neurodinâmica, precisão diagnóstica, diferenciação estrutural e prescrição clínica.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/teste-de-slump-avaliacao-dor-lombar.jpg",
        width: 1200,
        height: 675,
        alt: "Teste de Slump: Como Realizar, Interpretar e Aplicar na Avaliação da Dor Lombar",
      },
    ],
  },
};

export default function TesteDeSlumpPage() {
  return (
    <main className="k-page kyn-article">
      <SiteHeader showProgress />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Avaliação & Neurodinâmica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Exame Físico Neurodinâmico
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Teste de Slump: Como Realizar, Interpretar e Aplicar na Avaliação da Dor Lombar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a executar o teste neurodinâmico, interpretar a reprodução dos sintomas, realizar a diferenciação estrutural e compreender a precisão diagnóstica na dor radicular lombar.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>09 Nov 2026</span>
            <span>16 min de leitura</span>
            <span>Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem em Destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/teste-de-slump-avaliacao-dor-lombar.jpg"
            alt="Teste de Slump: Como Realizar, Interpretar e Aplicar na Avaliação da Dor Lombar - Kynesia Gestão Clínica"
            width={1200}
            height={675}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Featured Snippet: Resposta Rápida */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            O <strong>Teste de Slump</strong> é a manobra neurodinâmica mais sensível para avaliar a mecanossensibilidade anormal do trato neural lombossacral e das raízes nervosas espinhais. Executado com o paciente sentado em flexão progressiva de tronco, cervical, joelho e tornozelo, o teste só é considerado <strong>positivo</strong> quando reproduz os sintomas concordantes do paciente e esses sintomas são comprovadamente modulados à distância pela diferenciação estrutural (por exemplo, estendendo a coluna cervical).
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A dor lombar acompanhada de irradiação para o membro inferior constitui um dos quadros mais prevalentes e desafiadores da fisioterapia musculoesquelética. Diferenciar se a queixa do paciente decorre de dor nociceptiva somática referida (originada de facetas, discos intervertebrais ou musculatura paravertebral) ou de dor radicular com aumento da mecanossensibilidade neural é fundamental para formular um prognóstico realista e direcionar a intervenção terapêutica.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Nesse cenário, o <strong>teste de slump</strong> destaca-se como uma das ferramentas clínicas mais ricas e detalhadas do exame físico. Desenvolvido no contexto dos conceitos de mobilização do sistema nervoso popularizados por Geoffrey Maitland e aprofundados por pesquisadores como David Butler e Michael Shacklock, o teste impõe estresse biomecânico longitudinal em todo o neuroeixo. No entanto, sua precisão e utilidade clínica dependem inteiramente de um rigor técnico estrito, no qual a diferenciação estrutural e a correlação dos sintomas do paciente assumem papel central.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Bases Biomecânicas e Neurodinâmicas do Teste de Slump</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para compreender a relevância do teste de slump, é essencial enxergar o sistema nervoso não como uma coleção estática de cabos elétricos, mas como um <strong>tecido mecânico contínuo</strong>. Desde as meninges cranianas e o tronco encefálico até os ramos terminais dos nervos digitais plantares, o neuroeixo conecta-se eletricamente, metabolicamente e mecanicamente.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Quando o corpo se movimenta, o trato neural deve ser capaz de se adaptar através de três mecanismos biomecânicos essenciais descritos na neurodinâmica:
        </p>

        <ul className="mb-6 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Deslizamento longitudinal (Excursão):</strong> Capacidade do nervo de escorregar ao longo de sua interface mecânica circundante (músculos, túneis osteofibrosos e fáscias).</li>
          <li><strong>Alongamento elástico (Tensão):</strong> Capacidade das fibras neurais e do epineuro de tolerar aumento de comprimento e deformação sob estresse tracional fisiológico.</li>
          <li><strong>Convergência e complacência à compressão:</strong> Mudança nas pressões intraneurais e adaptação dimensional aos leitos teciduais sem colapso da microcirculação neural (fluxo axoplasmático e perfusão capilar).</li>
        </ul>

        <p className="mb-5 leading-relaxed text-gray-700">
          Durante a manobra clássica do teste de slump, a flexão torácica e lombar puxa a medula espinhal e a dura-máter em sentido caudal e ventral. Em seguida, a flexão cervical traciona todo o tubo dural cranialmente. Por fim, a extensão do joelho associada à dorsiflexão do tornozelo impõe tração máxima retrógrada nos nervos tibial, fibular comum e isquiático, canalizando forças mecânicas diretamente para as raízes nervosas de L4, L5, S1 e S2 nos forames intervertebrais.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Se existir compressão mecânica, edema perineural, inflamação química mediada por citocinas (como em extravasamentos discais na hérnia de disco lombar) ou restrição aderencial na interface, essa tração desencadeará um disparo ectópico e dor familiar no trajeto do nervo.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leituras recomendadas para aprofundamento:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/hernia-de-disco-tem-cura-entenda-o-tratamento" className="text-teal-600 hover:underline">
                Hérnia de Disco Tem Cura? Entenda o Tratamento Baseado em Evidências
              </Link>
            </li>
            <li>
              <Link href="/blog/red-flags-dor-lombar-quando-suspeitar" className="text-teal-600 hover:underline">
                Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-ao-ficar-muito-tempo-sentado-causas-e-tratamento" className="text-teal-600 hover:underline">
                Dor Lombar ao Ficar Muito Tempo Sentado: Causas, Biomecânica e Conduta
              </Link>
            </li>
            <li>
              <Link href="/blog/sensibilidade-especificidade-razoes-verossimilhanca-testes-ortopedicos" className="text-teal-600 hover:underline">
                Sensibilidade, Especificidade e Razões de Verossimilhança na Fisioterapia
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Passo a Passo da Execução Técnica Padronizada</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A execução padronizada é o divisor de águas entre um teste reprodutível e um exame repleto de ruídos clínicos. Qualquer alteração na sequência pode alterar a pré-tensão das estruturas e gerar conclusões equivocadas. A técnica clássica descrita por Maitland e atualizada pela literatura contemporânea divide-se em 6 etapas sucessivas:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">1. Posicionamento Inicial Neutro</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              O paciente posiciona-se sentado na beira da maca de avaliação, com a fossa poplítea encostada na borda da mesa e as coxas totalmente apoiadas. Os braços devem estar relaxados para trás, com as mãos cruzadas atrás das costas (para evitar que o paciente use os membros superiores para compensar ou segurar o tronco). A coluna permanece em posição neutra e ereta.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">2. Colapso Tóraco-Lombar (Slump do Tronco)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Instrua o paciente a "desabar" a coluna torácica e lombar em flexão completa (postura de corcunda ou <em>slump</em>), permitindo a retroversão pélvica, <strong>mas mantendo o pescoço em posição neutra</strong> (olhar voltado para a frente). O fisioterapeuta posiciona uma mão ou o antebraço sobre o dorso/ombros do paciente, aplicando uma sobrepressão suave e mantida para estabilizar a flexão espinhal. Questione se há algum sintoma.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">3. Flexão Ativa e Passiva da Coluna Cervical</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Mantendo a sobrepressão sobre a coluna dorsal, solicite que o paciente encoste o queixo no peito (flexão cervical ativa). O examinador então posiciona a outra mão no occipital do paciente, aplicando uma pressão sutil e controlada no final da amplitude. Pergunte imediatamente ao paciente: <em>"Você sente alguma dor ou sintoma novo? Onde?"</em>.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">4. Extensão Ativa do Joelho</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Com as sobrepressões no dorso e no occipital firmemente mantidas, solicite que o paciente estenda ativamente o joelho do membro a ser avaliado (iniciando preferencialmente pelo membro assintomático para obter linha de base). Observe a amplitude articular de extensão alcançada e registre se surgem queixas.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">5. Sensibilização com Dorsiflexão do Tornozelo</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Se a extensão do joelho não reproduzir a dor familiar ou se o quadro for subclínico, o examinador realiza a dorsiflexão passiva do tornozelo, tracionando o nervo tibial e aumentando a tensão ao longo de todo o trajeto do nervo isquiático.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">6. Manobra de Diferenciação Estrutural (Etapa Decisiva)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Se qualquer sintoma for desencadeado nas etapas 4 ou 5, a mão no occipital libera a pressão e o paciente é instruído a <strong>estender o pescoço e olhar para o teto</strong>, enquanto todas as outras articulações (tronco flexionado, joelho estendido e tornozelo dorsifletido) permanecem rigorosamente na mesma posição. Avalia-se se a dor distal se modificou.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Diferenciação Estrutural: A Chave para Interpretar o Teste de Slump</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O maior erro cometido por profissionais novatos é assumir que qualquer dor posterior na coxa durante o teste de slump é sinônimo de "ciática" ou hérnia discal. Quando uma pessoa senta curvada e estende o joelho com o tornozelo em dorsiflexão, uma imensa carga tênsil é aplicada a diversas estruturas não-neurais:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li>Músculos isquiotibiais e bíceps femoral.</li>
          <li>Músculos gastrocnêmio e sóleo.</li>
          <li>Fáscia toracolombar e ligamentos supraespinhais.</li>
          <li>Cápsula e sinóvia das articulações zigapofisárias lombares.</li>
        </ul>

        <p className="mb-5 leading-relaxed text-gray-700">
          Como determinar com certeza se a dor referida na perna provém do nervo ou de um encurtamento protetor dos isquiotibiais? <strong>Pela diferenciação estrutural</strong>.
        </p>

        <div className="mb-8 rounded-2xl border-l-4 border-teal-600 bg-teal-50/50 p-6">
          <h4 className="font-bold text-teal-900">O Raciocínio da Diferenciação Estrutural:</h4>
          <p className="mt-2 text-sm leading-relaxed text-gray-800">
            A coluna cervical e a cabeça não possuem inserções anatômicas diretas nos isquiotibiais ou no tendão de Aquiles. Portanto, quando o paciente estende a cabeça aliviando a flexão cervical:
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1 text-gray-700">
            <li>O comprimento muscular dos isquiotibiais permanece <strong>rigorosamente inalterado</strong>.</li>
            <li>A tensão intrínseca na medula e na dura-máter diminui, reduzindo a tração que subia em direção cranial pelo neuroeixo.</li>
            <li><strong>Se a dor ou parestesia na perna ou na panturrilha diminuir ou desaparecer</strong>, a fonte geradora dos sintomas é inequivocamente o tecido neural (teste de slump positivo).</li>
            <li>Se a dor na coxa permanecer inalterada mesmo após a extensão cervical completa, o tecido mecânico limitante é de origem musculoesquelética (músculo encurtado ou dor nociceptiva referida articular).</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Acurácia Diagnóstica: Teste de Slump vs. Teste de Lasègue (SLR)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Na prática baseada em evidências, nenhum teste clínico deve ser interpretado no vácuo estatístico. O Teste de Elevação da Perna Reta (Straight Leg Raise - SLR ou Teste de Lasègue) foi tradicionalmente o teste mais prescrito para compressão radicular discal. No entanto, as evidências científicas modernas mostram um panorama muito favorável ao teste de slump.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Diversas revisões sistemáticas e estudos de acurácia diagnóstica (como os conduzidos por van der Windt et al. e Scaia et al.) compararam ambos os testes com achados cirúrgicos e de ressonância magnética para radiculopatia decorrente de hérnia de disco lombar:
        </p>

        <div className="mb-8 overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-gray-900 font-semibold border-b border-gray-200">
              <tr>
                <th className="p-3 md:p-4">Propriedade Diagnóstica</th>
                <th className="p-3 md:p-4">Teste de Slump</th>
                <th className="p-3 md:p-4">Teste de Lasègue (SLR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Sensibilidade (Pooled Sensitivity)</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">80% a 84%</td>
                <td className="p-3 md:p-4 text-gray-600">52% a 68%</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Especificidade (Pooled Specificity)</td>
                <td className="p-3 md:p-4 text-gray-600">83% a 87%</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">84% a 90%</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Razão de Verossimilhança Positiva (LR+)</td>
                <td className="p-3 md:p-4">4,5 a 6,2</td>
                <td className="p-3 md:p-4">3,5 a 4,8</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Razão de Verossimilhança Negativa (LR-)</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">0,18 a 0,24 (Excelente para descartar)</td>
                <td className="p-3 md:p-4">0,40 a 0,55 (Moderada)</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Principal Força Clínica</td>
                <td className="p-3 md:p-4">Sensibilidade superior na detecção de pequenas herniações e alterações mecanossensíveis sutis</td>
                <td className="p-3 md:p-4">Especialmente útil quando positivo no membro oposto (Crossed SLR / Lasègue Contralateral)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Como demonstrado pelos coeficientes de verossimilhança negativa (LR-), um <strong>teste de slump negativo</strong> reduz consideravelmente a probabilidade pós-teste de que o paciente apresente um quadro de radiculopatia com comprometimento mecânico grave. Ele é mais sensível que o SLR porque a flexão simultânea tóraco-lombar e cervical traciona o tubo dural cranialmente, aumentando a pré-tensão basal sobre as raízes antes mesmo de o joelho ser estendido.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Os 5 Erros Mais Frequentes na Aplicação do Teste de Slump</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para que o teste forneça dados fidedignos e seguros, evite os erros mais comuns documentados na prática ambulatorial:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">1. Permitir a Extensão Cervical Involuntária Durante a Extensão do Joelho</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Muitos pacientes, ao sentirem a tensão se acumulando no membro inferior, estendem o pescoço instintivamente para aliviar a tração neural. Se o examinador não mantiver a fixação sutil no occipital, o teste perderá a sensibilidade e poderá resultar em um falso negativo mascarado.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">2. Não Investigar a Sintomatologia Concordante</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Quase toda pessoa assintomática sentirá uma sensação de repuxamento ou formigamento leve na região poplítea ou torácica média ao final da manobra completa. Perguntar apenas "está doendo?" é um erro. A pergunta obrigatória é: <em>"Essa dor ou queimação que você está sentindo agora é exatamente a mesma dor que o trouxe ao consultório?"</em>. Se a dor for discordante, o teste não é clinicamente positivo.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">3. Esquecer a Avaliação Comparativa com o Lado Sadio</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              O teste deve ser realizado bilateralmente, avaliando primeiro o membro assintomático. Isso fornece a linha de base sobre a flexibilidade tecidual e a tolerância fisiológica do indivíduo, além de preparar o paciente para as sensações mecânicas da manobra sem alarme desnecessário.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">4. Forçar a Manobra em Pacientes com Dor Hiperaguda</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              O teste de slump é um teste vigoroso de provocação. Em pacientes em crise inflamatória aguda de radiculopatia com perda de reflexo e parestesia espontânea em repouso, forçar a postura de slump completa pode provocar uma crise álgica severa. Nesses casos, o teste deve ser interrompido assim que os sintomas começarem a emergir, sem necessidade de forçar a amplitude final.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">5. Ignorar Variações de Posicionamento do Tronco (Desvios Antálgicos)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Alguns pacientes com hérnia de disco posterolateral adotam um desvio lateral do tronco para o lado oposto (postura antálgica). Se o examinador forçar um colapso em flexão pura sem notar essa rotação ou inclinação protetora, poderá comprimir agudamente a raiz contra o fragmento herniário.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Contraindicações e Triagem de Red Flags</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Antes de qualquer teste neurodinâmico de tronco, é responsabilidade clínica inegociável do fisioterapeuta rastrear as <strong>red flags na coluna lombar</strong>. A manobra de flexão total da coluna sob tração neural pode colocar o paciente em risco nas seguintes circunstâncias:
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50/70 p-6">
          <h4 className="font-bold text-red-900">Situações de Alerta Máximo (Contraindicação Absoluta):</h4>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-2 text-red-800">
            <li><strong>Suspeita de Síndrome da Cauda Equina:</strong> Parestesia ou anestesia em sela (períneo e genitália), retenção ou incontinência fecal e urinária de início recente, perda súbita do tônus anal.</li>
            <li><strong>Mielopatia Cervical ou Torácica:</strong> Presença de sinais de primeiro neurônio motor (Babinski positivo, hiperreflexia patelar ou aquileia difusa, clonus sustentado, sinal de Hoffman ou Sinal de Lhermitte).</li>
            <li><strong>Instabilidade Vertebral Aguda ou Fratura:</strong> Histórico recente de trauma de alta energia, osteoporose severa em idosos com dor aguda lancinante na percussão de processos espinhosos.</li>
            <li><strong>Processos Infecciosos ou Neoplásicos Espinhais:</strong> Dor noturna persistente não mecânica, febre, histórico oncológico prévio associado à perda inexplicada de peso.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Da Avaliação ao Tratamento: Deslizamento vs. Tensionamento Neurodinâmico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O teste de slump não se limita a confirmar o diagnóstico; ele atua diretamente como <strong>guia para a prescrição terapêutica</strong>. A neurodinâmica clínica oferece duas abordagens intervencionistas principais, moduladas de acordo com o nível de irritabilidade e reatividade do tecido neural:
        </p>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <h3 className="font-bold text-teal-900 text-lg">Técnicas de Deslizamento (Sliders)</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Mecanismo:</strong> Uma extremidade do neuroeixo é colocada em tensão enquanto a extremidade oposta é relaxada simultaneamente. Por exemplo: o paciente estende o joelho enquanto estende a cabeça para trás; em seguida, flexiona o joelho ao mesmo tempo em que flexiona a cabeça.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Indicação:</strong> Fases subagudas, quadros com média a alta irritabilidade, dor mecânica persistente e necessidade de restaurar o fluxo axoplasmático sem aumentar a pressão intraneural.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
            <h3 className="font-bold text-blue-900 text-lg">Técnicas de Tensionamento (Tensioners)</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Mecanismo:</strong> Ambas as extremidades do neuroeixo são tracionadas simultaneamente de forma gradual e controlada, gerando elongação máxima do nervo e estímulo viscoelástico ao conjuntivo perineural.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Indicação:</strong> Fases finais de reabilitação, quadros crônicos com baixa reatividade tecidual, onde o objetivo é melhorar a tolerância física do tecido conjuntivo neural antes do retorno pleno ao esporte.
            </p>
          </div>
        </div>

        {/* Seção As Pessoas Também Perguntam (PAA) */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As Pessoas Também Perguntam</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900 text-base">O Teste de Slump pode ser feito deitado de lado?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Sim. Para pacientes com dor lombar severa ou limitação para sentar na beira da maca, existe a variante em decúbito lateral (<em>Side-Lying Slump Test</em>). O paciente deita-se sobre o lado não afetado, mantém a coluna em flexão e o examinador conduz passivamente a flexão cervical, extensão de joelho e dorsiflexão, proporcionando maior controle da carga em pacientes de alta sensibilidade.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900 text-base">Sentir queimação atrás do joelho significa que o teste deu positivo?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Não necessariamente. Sensações de queimação ou repuxamento na fossa poplítea são respostas fisiológicas normais em indivíduos assintomáticos devido à tensão mecânica no nervo tibial e nos tendões dos isquiotibiais. O teste só é positivo se essa sensação reproduzir a queixa clínica familiar do paciente e melhorar consideravelmente ao estender a coluna cervical.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900 text-base">Qual teste fazer primeiro: Lasègue (SLR) ou Slump?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Recomenda-se iniciar a avaliação pelo Teste de Lasègue (SLR) em decúbito dorsal por ser uma manobra de menor sobrecarga mecânica inicial na coluna lombar. Se o SLR for negativo ou duvidoso e o paciente mantiver queixas radiculares sugestivas ao sentar, progride-se para o Teste de Slump, cuja maior sensibilidade é ideal para detectar disfunções mecânicas sutis.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Raciocínio Clínico Além do Teste Mecânico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>teste de slump</strong> é um exemplo clássico de como a fisioterapia baseada em evidências transforma manobras semiológicas em raciocínio clínico de precisão. Longe de ser apenas um checklist motor, ele exige do profissional escuta atenta, sensibilidade manual para a diferenciação estrutural e respeito biológico à reatividade tecidual do sistema nervoso.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Ao dominar as etapas da manobra, compreender os dados de sensibilidade diagnóstica e utilizar os achados para prescrever condutas terapêuticas adequadas (como mobilizações de deslizamento neural), o fisioterapeuta oferece um atendimento seguro, assertivo e altamente resolutivo para os pacientes acometidos por dor lombar e queixas radiculares.
        </p>

        {/* FAQ com Details/Summary compatível com Schema */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Perguntas Frequentes (FAQ)</h2>
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
            O Teste de Slump avalia a mecanossensibilidade do neuroeixo através da aplicação coordenada de tensão biomecânica longitudinal desde a cabeça até o tornozelo.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Com sensibilidade superior ao Teste de Elevação da Perna Reta (80-84% vs. 52-68%), um Slump negativo possui elevado poder para descartar radiculopatia mecânica por hérnia de disco lombar.
          </p>
          <p className="leading-relaxed text-gray-300">
            A diferenciação estrutural (extensão cervical mantendo a posição dos membros inferiores) é o critério obrigatório para confirmar que a disfunção é de origem neural, descartando encurtamentos musculares dos isquiotibiais e dores articulares lombares.
          </p>
        </div>

        {/* Bloco Obrigatório de Atendimento para o Paciente */}
        <PatientCTA />

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

        {/* Bloco Obrigatório de Conversão */}
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
      <SiteFooter />
    </main>
  );
}

