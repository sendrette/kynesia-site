import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/teste-de-lachman-como-fazer-interpretar-evitar-erros-lca";

const faqItems = [
  {
    question: "O que é o Teste de Lachman e para que serve na fisioterapia?",
    answer: "O Teste de Lachman é uma manobra ortopédica considerada o padrão-ouro clínico para avaliar a integridade do Ligamento Cruzado Anterior (LCA). Ele avalia a translação anterior da tíbia em relação ao fêmur com o joelho posicionado entre 20 e 30 graus de flexão."
  },
  {
    question: "Qual a diferença entre o Teste de Lachman e o Teste da Gaveta Anterior?",
    answer: "No Teste de Lachman, o joelho é flexionado a 20°-30°, o que minimiza o bloqueio mecânico exercido pelos meniscos e a tensão reflexa dos músculos isquiotibiais. Na Gaveta Anterior (joelho a 90° de flexão), as estruturas posteriores e a contração muscular frequentemente geram falsos negativos, tornando o Lachman estatisticamente mais sensível e confiável."
  },
  {
    question: "O que significa um Teste de Lachman com end-feel suave ou ausente?",
    answer: "O end-feel (sensação final de parada) firme indica um ligamento íntegro que bloqueia bruscamente o avanço da tíbia. Um end-feel suave, esponjoso ou ausente é o principal indicativo de ruptura completa ou frouxidão funcional grave do Ligamento Cruzado Anterior."
  },
  {
    question: "Como graduar a frouxidão ligamentar no Teste de Lachman?",
    answer: "A graduação clínica compara a translação com o membro contralateral saudável: Grau I (leve, 3 a 5 mm de translação anterior), Grau II (moderada, 6 a 10 mm de translação) e Grau III (grave, translação superior a 10 mm, geralmente associada à perda completa do end-feel)."
  },
  {
    question: "Como evitar falso negativo no Teste de Lachman em fase aguda com muita dor?",
    answer: "Para evitar falsos negativos por espasmo dos isquiotibiais, é crucial apoiar a coxa do paciente (usando a coxa do avaliador ou um coxim), garantir o relaxamento total da musculatura posterior e palpar o tendão do bíceps femoral e semitendíneo para confirmar que não há contração ativa durante a tração."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teste de Lachman: Como Fazer, Interpretar e Evitar Erros na Avaliação do LCA",
  description: "Guia completo e científico sobre o Teste de Lachman. Aprenda o passo a passo, precisão diagnóstica, graduação da translação e como evitar erros na avaliação do LCA.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-10-08",
  dateModified: "2026-10-08",
  image: "https://kynesia.com.br/blog/teste-de-lachman-avaliacao-lca.png",
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
  title: "Teste de Lachman: Como Fazer, Interpretar e Avaliar o LCA",
  description: "Guia completo sobre o Teste de Lachman na fisioterapia: biomecânica, acurácia diagnóstica, graduação de frouxidão e prevenção de falsos positivos e negativos.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Teste de Lachman: Como Fazer, Interpretar e Evitar Erros na Avaliação do LCA",
    description: "Guia completo sobre o Teste de Lachman na fisioterapia: biomecânica, acurácia diagnóstica, graduação de frouxidão e prevenção de falsos positivos e negativos.",
    type: "article",
    url: pageUrl,
  },
};

export default function TesteLachmanPage() {
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
          <span className="font-medium text-teal-600">Avaliação & Ortopedia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Exame Físico Ortopédico
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Teste de Lachman: Como Fazer, Interpretar e Evitar Erros na Avaliação do LCA
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Compreenda os fundamentos biomecânicos, a precisão estatística e os refinamentos técnicos necessários para executar com maestria o teste padrão-ouro na ruptura do Ligamento Cruzado Anterior.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>08 Out 2026</span>
            <span>13 min de leitura</span>
            <span>Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem em Destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/teste-de-lachman-avaliacao-lca.png"
            alt="Teste de Lachman - Como fazer, interpretar e avaliar o LCA na fisioterapia"
            width={1200}
            height={800}
            className="w-full object-contain"
            priority
          />
        </div>

        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            O <strong>Teste de Lachman</strong> é a manobra clínica padrão-ouro para o diagnóstico de lesão do Ligamento Cruzado Anterior (LCA). Realizado com o paciente em decúbito dorsal e o joelho flexionado entre 20° e 30°, o teste avalia o deslocamento anterior da tíbia sobre o fêmur. O achado patológico consiste no aumento da translação anterior em relação ao membro oposto associado à perda da sensação final de parada firme (<em>end-feel</em> rígido substituído por parada suave ou ausente).
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A lesão do Ligamento Cruzado Anterior (LCA) representa um dos episódios traumáticos mais frequentes e debilitantes na prática esportiva e na rotina ortopédica. A identificação precoce e precisa dessa disfunção é determinante para a tomada de decisão terapêutica, seja ela conservadora ou cirúrgica. Dentre os testes ortopédicos especiais descritos na literatura, o <strong>Teste de Lachman</strong> consolidou-se indiscutivelmente como a manobra com melhor acurácia diagnóstica à beira do leito ou no consultório.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Apesar de sua ampla popularidade acadêmica, a execução inadequada do teste é responsável por elevados índices de falsos negativos na prática clínica diária. Erros sutis de posicionamento articular, falha na estabilização femoral ou a incapacidade de controlar o espasmo protetor dos músculos isquiotibiais mascaram a frouxidão articular. Compreender os detalhes técnicos e biomecânicos do teste é essencial para todo fisioterapeuta que busca excelência diagnóstica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Fundamentos Biomecânicos do Teste de Lachman</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O Ligamento Cruzado Anterior é composto principalmente por duas bandas funcionais: a banda anteromedial (AM) e a banda posterolateral (PL). Juntas, elas respondem por aproximadamente 85% da restrição primária passiva contra a translação anterior da tíbia em relação ao fêmur, além de auxiliarem no controle da rotação tibial interna.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Quando o joelho é flexionado a 90 graus (como no clássico Teste da Gaveta Anterior), a anatomia do corno posterior dos meniscos (especialmente o menisco medial) atua como uma cunha contra os côndilos femorais, bloqueando mecanicamente o deslocamento da tíbia mesmo na presença de ruptura ligamentar. Além disso, a flexão em 90 graus favorece a coativação reflexa vigorosa dos músculos isquiotibiais.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Ao posicionar a articulação em <strong>20 a 30 graus de flexão</strong>, a banda posterolateral do LCA atinge seu ponto de maior relevância restritiva e os estabilizadores secundários (meniscos e cápsula posterior) encontram-se relaxados. Esse posicionamento anatômico isola o LCA, permitindo que a força de translação aplicada pelo examinador teste diretamente a integridade do ligamento.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leituras recomendadas para aprofundamento:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/clusters-de-testes-ortopedicos-o-que-sao-e-como-usar" className="text-teal-600 hover:underline">
                Clusters de Testes Ortopédicos: O Que São e Como Usar na Avaliação
              </Link>
            </li>
            <li>
              <Link href="/blog/sensibilidade-especificidade-razoes-verossimilhanca-testes-ortopedicos" className="text-teal-600 hover:underline">
                Sensibilidade, Especificidade e Razões de Verossimilhança na Fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                Reabilitação Pós-Operatória de Joelho: Diretrizes e Protocolos Atuais
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Precisão Diagnóstica e Evidências Científicas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões sistemáticas e meta-análises de referência (como os estudos de Benjaminse et al. e van Eck et al.) comparam repetidamente o Teste de Lachman a outros testes clínicos de joelho. Os números demonstram a superioridade estatística do teste:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Sensibilidade:</strong> Varia entre <strong>85% e 96%</strong> (capacidade de positivar quando há ruptura real do LCA).</li>
          <li><strong>Especificidade:</strong> Varia entre <strong>94% e 99%</strong> (capacidade de ser negativo quando o ligamento está preservado).</li>
          <li><strong>Razão de Verossimilhança Positiva (LR+):</strong> Frequentemente superior a <strong>15.0</strong>, o que eleva drasticamente a probabilidade pós-teste de diagnóstico positivo.</li>
          <li><strong>Razão de Verossimilhança Negativa (LR-):</strong> Em torno de <strong>0.10</strong>, tornando o teste muito eficiente para descartar a lesão quando realizado com técnica adequada.</li>
        </ul>

        <p className="mb-5 leading-relaxed text-gray-700">
          Em comparação direta, o Teste da Gaveta Anterior apresenta sensibilidade média em torno de apenas 45% a 70% em quadros agudos, enquanto o Teste do <em>Pivot Shift</em> apresenta altíssima especificidade (98%), porém baixa sensibilidade (em torno de 24% a 50%) em pacientes acordados devido à apreensão e dor. Por esses motivos, o Lachman permanece como o teste isolado mais confiável no exame físico do joelho.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Passo a Passo da Execução Técnica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A precisão do exame depende estritamente do posicionamento rigoroso e do relaxamento muscular do paciente. Siga o protocolo recomendado:
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">1. Posicionamento do Paciente</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O paciente deve estar posicionado em decúbito dorsal completo sobre a maca de avaliação. O membro a ser avaliado deve estar relaxado, com a pelve alinhada. O joelho é flexionado passivamente em um ângulo de <strong>20 a 30 graus</strong>, mantendo leve rotação externa fisiológica da tíbia.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">2. Posicionamento das Mãos do Examinador</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O examinador se posiciona lateralmente ao membro avaliado:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Mão Estabilizadora (Cranial):</strong> Posicionada na face anterior e lateral da coxa, imediatamente acima dos côndilos femorais, com o polegar anterior e os quatro dedos envolvendo a face posterior para fixar firmemente o fêmur contra a maca.</li>
          <li><strong>Mão Mobilizadora (Caudal):</strong> Posicionada na face posteromedial da tíbia proximal, na altura da tuberosidade da tíbia, envolvendo o ventre muscular superior da panturrilha com os dedos posteriores e o polegar repousando suavemente sobre a linha articular anterior.</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">3. Aplicação da Força de Translação</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Mantendo o fêmur absolutamente estático contra a maca, o terapeuta aplica um vetor de força rápido e firme no sentido anterior e ligeiramente medial sobre a tíbia proximal. O objetivo é tracionar a tíbia para frente e sentir o ponto de interrupção mecânica do movimento.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">4. Variação para Examinadores com Mãos Pequenas (Lachman Modificado)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando o paciente possui uma coxa volumosa ou o avaliador possui mãos menores, segurar simultaneamente o fêmur e a tíbia pode comprometer a alavanca. Nessa situação, o terapeuta deve apoiar a coxa do paciente sobre a sua própria coxa (com o examinador sentado à beira da maca ou colocando a coxa sob o joelho do paciente). Isso fixa o fêmur passivamente a 25° e permite que o fisioterapeuta utilize as duas mãos na tíbia proximal para tracioná-la com estabilidade total.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como Interpretar Corretamente os Resultados</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A interpretação diagnóstica do Teste de Lachman é fundamentada em dois parâmetros clínicos complementares: a <strong>sensação final (end-feel)</strong> e a <strong>magnitude da translação anterior</strong>.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">Avaliação do End-Feel (Ponto Final)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O end-feel é o critério mais sensível e determinante do teste:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>End-Feel Firme / Rígido (Normal):</strong> A tíbia avança alguns milímetros e atinge uma parada abrupta e sólida, sem elasticidade excessiva. Indica integridade do ligamento.</li>
          <li><strong>End-Feel Suave / Esponjoso / Ausente (Patológico):</strong> Não há ponto de parada definido. A tíbia desliza anteriormente de forma contínua e amolecida, sensação descrita como esponjosa. Indica ruptura completa do LCA.</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">Graduação da Translação Anterior (IKDC)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A graduação padronizada pelo <em>International Knee Documentation Committee</em> (IKDC) compara o deslocamento anterior com o membro contralateral assintomático:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Grau 1 (Leve / +):</strong> Translação aumentada de 3 a 5 mm em relação ao lado são, geralmente com parada firme preservada (sugestivo de estiramento ou lesão parcial).</li>
          <li><strong>Grau 2 (Moderado / ++):</strong> Translação aumentada de 6 a 10 mm, frequentemente com parada amolecida (sugestivo de lesão subtotal ou total).</li>
          <li><strong>Grau 3 (Grave / +++):</strong> Translação superior a 10 mm, sem ponto final de parada rígido e com evidente subluxação anterior visível do platô tibial.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Os 5 Erros Mais Comuns que Geram Falsos Diagnósticos</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Identificar e corrigir vícios de execução técnica é primordial para assegurar a confiabilidade dos registros fisioterapêuticos:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">1. Não Controlar o Espasmo dos Isquiotibiais (Hamstring Guarding)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Em traumas agudos com derrame articular ou apreensão, os músculos isquiotibiais contraem-se reflexamente para proteger a articulação. Como os isquiotibiais tracionam a tíbia posteriormente, essa contração anula a manobra do examinador, simulando um end-feel firme falso. Sempre palpe os tendões flexores antes de tracionar para garantir relaxamento total.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">2. Angulação Incorreta da Articulação (Flexão Exagerada ou Extensão Completa)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Flexionar o joelho além de 35° começa a engajar as estruturas capsuloligamentares secundárias e os cornos meniscais posteriores, reduzindo a sensibilidade do teste. Já testar em extensão quase completa (0° a 10°) tensiona a cápsula posterior e o ligamento colateral medial, impedindo a translação. Mantenha rigorosamente entre 20° e 30°.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">3. Não Reconhecer a Queda Posterior da Tíbia por Lesão do LCP (Falsa Gaveta Anterior)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Em pacientes com lesão do Ligamento Cruzado Posterior (LCP), a tíbia encontra-se subluxada posteriormente em repouso (sinal do <em>sag sign</em>). Ao tracioná-la no teste de Lachman, o avaliador desloca a tíbia da posição posterior até a posição anatômica neutra e interpreta erroneamente esse movimento como frouxidão do LCA. Verifique o alinhamento inicial do tubérculo anterior antes de iniciar a tração.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">4. Falha na Estabilização do Fêmur</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Se a mão proximal não comprimir o fêmur de maneira eficaz contra a maca, toda a coxa se movimentará em bloco durante a tração da tíbia. Isso impede a avaliação da translação articular relativa e gera dúvidas diagnósticas desnecessárias.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">5. Omissão da Comparação Contralateral Obrigatória</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Muitos indivíduos apresentam hiperfrouxidão ligamentar constitucional (escore de Beighton positivo). Nesses pacientes, uma translação de 6 mm pode ser absolutamente fisiológica e bilateral. O teste só é considerado patológico quando há assimetria biomecânica e alteração qualitativa da sensação final em relação ao membro saudável.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Cluster Diagnóstico para Lesão do LCA</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A prática baseada em evidências desaconselha tomar decisões clínicas complexas baseadas em um único teste isolado. Para maximizar a probabilidade diagnóstica, recomenda-se combinar o Teste de Lachman em um cluster clínico estruturado:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>História Clínica Típica:</strong> Mecanismo de desaceleração ou rotação com pé fixo (valgo dinâmico), relato de estalo audível ou perceptível (<em>pop</em>) e incapacidade imediata de continuar a atividade esportiva.</li>
          <li><strong>Hemartrose / Derrame Rápido:</strong> Edema articular volumoso instalado nas primeiras 2 a 6 horas pós-trauma.</li>
          <li><strong>Teste de Lachman Positivo:</strong> Translação assimétrica com perda do end-feel firme.</li>
          <li><strong>Teste de Pivot Shift Positivo:</strong> Subluxação e redução súbita do platô tibial lateral durante flexão sob estresse em valgo e rotação interna (confirmador de instabilidade rotatória).</li>
          <li><strong>Teste de Lever (Lelli Test):</strong> Ausência de elevação do calcâneo ao aplicar pressão para baixo no terço distal do fêmur com punho cerrado sob a panturrilha.</li>
        </ul>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Perguntas Frequentes (FAQ)</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                <summary className="font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide">RESUMO DE PRÁTICA CLÍNICA</h2>
          <p className="mb-4 leading-relaxed">
            O Teste de Lachman é o padrão-ouro físico para a identificação de lesões do LCA, apresentando sensibilidade e especificidade superiores a 90% quando executado entre 20° e 30° de flexão articular. A avaliação qualitativa do <em>end-feel</em> sobrepõe-se à simples medida milimétrica da translação.
          </p>
          <p className="leading-relaxed">
            Para garantir acurácia diagnóstica, o fisioterapeuta deve palpar os isquiotibiais para descartar espasmos musculares protetores, estabilizar rigorosamente o fêmur contra a maca e sempre comparar os achados com o joelho contralateral. A integração do Lachman ao cluster clínico de trauma confere segurança máxima à conduta terapêutica.
          </p>
        </div>

        {/* Bloco de Conversão */}
        <div className="mt-16 rounded-3xl border border-teal-200 bg-gradient-to-b from-teal-50/70 to-white p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Eleve o nível da sua avaliação ortopédica com tecnologia</h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
            Tenha acesso a mais de 80 testes ortopédicos validados, clusters com sensibilidade e especificidade calculadas e IA clínica para acelerar seus diagnósticos no prontuário eletrônico do Kynesia.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/start-free"
              className="inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Começar Teste Gratuito
            </Link>
            <Link
              href="/planos"
              className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Conhecer Funcionalidades
            </Link>
          </div>
        </div>

        <PatientCTA />
      </article>
    </main>
  );
}
