import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/tratamento-dor-lombar-nao-especifica-evidencias";

const faqItems = [
  {
    question: "O que é considerado dor lombar não específica?",
    answer:
      "A dor lombar não específica (ou inespecífica) é aquela dor localizada entre a margem costal inferior e as pregas glúteas na qual não é possível identificar uma patologia espinhal específica subjacente (como fratura, infecção, tumor, espondilite anquilosante ou compressão radicular franca com déficit neurológico). Ela responde por mais de 90% dos casos de lombalgia na atenção primária.",
  },
  {
    question: "Qual é o tratamento mais eficaz para dor lombar segundo as diretrizes?",
    answer:
      "Não existe uma técnica mágica isolada. As diretrizes internacionais de maior impacto (como The Lancet, NICE e ACP) apontam que o tratamento mais eficaz combina educação em neurociência da dor, manutenção das atividades cotidianas sem repouso no leito e a prática regular de exercício terapêutico ativo e individualizado.",
  },
  {
    question: "Quais exercícios são indicados para dor lombar?",
    answer:
      "A evidência científica demonstra que não há uma modalidade de exercício superior a todas as outras. Exercícios de controle motor, fortalecimento muscular geral, Pilates, caminhada e treinamento resistido progressivo apresentam desfechos semelhantes a médio e longo prazo. A melhor modalidade é aquela que o paciente tolera bem, gosta de praticar e consegue manter com consistência.",
  },
  {
    question: "A terapia manual funciona para dor lombar?",
    answer:
      "A terapia manual (manipulações articulares e mobilizações vertebrais) atua promovendo alívio neurofisiológico transitório de curto prazo e redução momentânea do espasmo muscular. No entanto, ela não 'coloca ossos ou vértebras no lugar' e não deve ser utilizada como tratamento isolado, mas sim como coadjuvante para abrir uma janela de alívio e viabilizar o exercício ativo.",
  },
  {
    question: "Recursos como calor, ultrassom e TENS são recomendados?",
    answer:
      "O calor superficial pode ser utilizado de forma domiciliar na fase aguda para conforto sintomático temporário. No entanto, eletroterapia (como TENS), ultrassom terapêutico, laser e tração são classificados pelas diretrizes internacionais como intervenções de baixo valor clínico (low-value care) por não alterarem o prognóstico ou a incapacidade a médio e longo prazo.",
  },
  {
    question: "Quando o paciente com dor lombar deve realizar ressonância magnética?",
    answer:
      "Exames de imagem só são indicados na presença de sinais de alerta (red flags) — como perda involuntária de peso, histórico oncológico, febre inexplicada, trauma grave, anestesia em sela ou perda motora progressiva nos membros inferiores. Na dor lombar não específica, ressonâncias de rotina aumentam o medo, a catastrofização e não modificam a conduta clínica.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor Lombar: Como Tratar Segundo as Evidências?",
  description:
    "Descubra as evidências científicas para o tratamento da dor lombar: o papel real dos exercícios, educação em dor, terapia manual e cuidados passivos.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  image: "https://kynesia.com.br/blog/tratamento-dor-lombar-nao-especifica-evidencias.jpg",
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
  title: "Dor Lombar: Como Tratar Segundo as Evidências? | Kynesia",
  description:
    "Descubra as evidências científicas para o tratamento da dor lombar: o papel real dos exercícios, educação em dor, terapia manual e cuidados passivos.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor Lombar: Como Tratar Segundo as Evidências?",
    description:
      "O que a ciência atual mostra sobre exercícios terapêuticos, educação em dor, terapia manual e estratégias para recuperar a função e reduzir a incapacidade na lombalgia.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/tratamento-dor-lombar-nao-especifica-evidencias.jpg",
        width: 1024,
        height: 576,
        alt: "Dor Lombar Não Específica: Como Tratar Segundo as Evidências? - Kynesia",
      },
    ],
  },
};

export default function TratamentoDorLombarNaoEspecificaPage() {
  return (
    <main className="k-page kyn-article">
      <SiteHeader showProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Prática Baseada em Evidências</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Coluna Vertebral & Prática Baseada em Evidências
          </span>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor Lombar Não Específica: Como Tratar Segundo as Evidências?
          </h1>

          <p className="mb-6 text-lg text-gray-600 md:text-xl leading-relaxed">
            O que a ciência atual mostra sobre exercícios terapêuticos, educação em dor, terapia manual e estratégias para recuperar a função e reduzir a incapacidade.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 18 Nov 2026</span>
            <span>⏱ 17 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      {/* Artigo */}
      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Imagem em Destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/tratamento-dor-lombar-nao-especifica-evidencias.jpg"
            alt="Dor Lombar Inespecífica: Como Tratar? O que as evidências atuais nos mostram."
            width={1024}
            height={576}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-10 rounded-2xl border-2 border-teal-500 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">
            Resposta Rápida
          </h2>
          <p className="font-medium leading-relaxed text-gray-900">
            O <strong>tratamento da dor lombar</strong> não específica baseado em evidências tem como pilares centrais a educação em dor (para desmistificar crenças e combater a cinesiofobia), a manutenção das atividades cotidianas e o exercício terapêutico ativo e individualizado. As principais diretrizes internacionais (como NICE e a série The Lancet) desaconselham o repouso em cama, exames de imagem de rotina e o uso isolado de modalidades passivas, reforçando que nenhuma técnica de exercício é universalmente superior: a chave clínica é a adesão, preferência do paciente e progressão de carga gradativa.
          </p>
        </div>

        {/* Introdução */}
        <p className="mb-5 text-lg leading-relaxed text-gray-700">
          A dor lombar é a principal causa de incapacidade física em todo o planeta, impondo uma sobrecarga imensa aos sistemas de saúde e à vida produtiva das pessoas. Diante de um paciente com queixa na coluna, a reação intuitiva de muitos profissionais e dos próprios pacientes ainda é buscar uma "causa anatômica exata" por meio de exames de ressonância magnética, prescrever repouso ou aplicar pacotes de terapias exclusivamente passivas.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Entretanto, as publicações científicas de maior rigor metodológico da última década — como a clássica série sobre dor lombar do periódico <em>The Lancet</em>, as diretrizes do <em>National Institute for Health and Care Excellence (NICE)</em> e os consensos da <em>Organização Mundial da Saúde (OMS)</em> — revelam um abismo entre o que a ciência recomenda e o que frequentemente é feito nos consultórios. Compreender as evidências contemporâneas para o <strong>tratamento da dor lombar</strong> é indispensável para todo fisioterapeuta que busca resultados consistentes, segurança ética e resolutividade clínica.
        </p>

        {/* Bloco Leituras Recomendadas */}
        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas sobre coluna e evidências:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/red-flags-dor-lombar-quando-suspeitar" className="text-teal-600 hover:underline">
                → Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?
              </Link>
            </li>
            <li>
              <Link href="/blog/hernia-de-disco-tem-cura-entenda-o-tratamento" className="text-teal-600 hover:underline">
                → Hérnia de Disco Tem Cura? Entenda o Tratamento Baseado em Evidências
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-de-slump-avaliacao-dor-lombar" className="text-teal-600 hover:underline">
                → Teste de Slump: Como Realizar, Interpretar e Avaliar a Dor Lombar
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-na-coluna-mitos-crencas-o-que-fazer" className="text-teal-600 hover:underline">
                → Dor na Coluna: Mitos, Crenças e o Que as Evidências Realmente Recomendam
              </Link>
            </li>
          </ul>
        </div>

        {/* 1. O que é dor lombar não específica */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          1. O que é dor lombar não específica e por que isso importa para o tratamento?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>dor lombar não específica</strong> (frequentemente chamada de inespecífica ou idiopática) é definida como um sintoma doloroso compreendido entre o rebordo costal inferior e a prega glútea inferior, com ou sem dor referida no membro inferior, cuja origem patoanatômica estrutural específica não pode ser determinada com precisão.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Isso não significa que a dor seja imaginária ou irrelevante. Pelo contrário: a dor é absolutamente real e neurofisiologicamente complexa. Ocorre que, em aproximadamente <strong>90% a 95% dos pacientes</strong> que procuram atendimento primário por dor nas costas, o quadro decorre de uma interação multifatorial de estresse mecânico, inflamação tecidual subclínica, sensibilidade no neuroeixo e fatores biopsicossociais (como privação crônica de sono, estresse laboral, medo do movimento e sedentarismo), e não de uma lesão estrutural destrutiva isolada.
        </p>

        <div className="mb-8 rounded-2xl border-l-4 border-teal-600 bg-teal-50/60 p-6">
          <h4 className="font-bold text-teal-900">Por que o diagnóstico de "inespecífica" muda toda a conduta?</h4>
          <p className="mt-2 text-sm leading-relaxed text-gray-800">
            Quando o fisioterapeuta tenta a todo custo encontrar um único "tecido culpado" (culpabilizando uma faceta milimétrica, um ligamento ou um disco levemente desidratado visto na ressonância), ele cai na armadilha do modelo biomédico tradicional. Essa abordagem gera iatrogenia: o paciente passa a acreditar que sua coluna é frágil, instável ou degenerada. Entender que a condição é não específica desloca o foco terapêutico da "cura de um defeito mecânico estrutural" para a <strong>restauração da função, desensibilização do sistema nervoso e recondicionamento físico</strong>.
          </p>
        </div>

        {/* 2. O exercício terapêutico */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          2. O exercício terapêutico é realmente a principal intervenção no tratamento da dor lombar?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A resposta direta e inequívoca da literatura é: <strong>sim</strong>. O exercício físico terapêutico é a intervenção não farmacológica com o mais sólido nível de evidência (Nível 1A) e grau de recomendação A em todas as diretrizes clínicas globais contemporâneas para o <strong>tratamento da dor lombar</strong> crônica e subaguda.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Enquanto a maioria das intervenções passivas demonstra efeitos fugazes e clinicamente triviais, o exercício terapêutico atua através de múltiplos mecanismos biológicos complementares:
        </p>

        <ul className="mb-6 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Hipoalgesia Induzida pelo Exercício (EIH):</strong> A contração muscular ritmada e o estresse mecânico controlado desencadeiam a liberação central de opioides endógenos, endocanabinoides e serotonina, ativando as vias descendentes inibitórias da dor a partir da substância cinzenta periaquedutal.</li>
          <li><strong>Nutrição e Homeostase Discal:</strong> Os discos intervertebrais são tecidos avasculares que dependem do gradiente osmótico promovido pela carga e descompressão axial dinâmica (como caminhar ou agachar) para a troca de metabólitos e água com as placas terminais vertebrais.</li>
          <li><strong>Restauração da Tolerância Mecânica Tecidual:</strong> Músculos, ligamentos e fáscias sofrem atrofia e descondicionamento quando poupados pelo repouso excessivo; o exercício restabelece a capacidade de suportar demandas diárias sem alarme doloroso precoce.</li>
          <li><strong>Redução da Cinesiofobia e Exposição Gradativa:</strong> Movimentar a coluna de forma guiada reconfigura o mapa somatossensorial cerebral, demonstrando ao paciente que dobrar, estender ou carregar peso não é perigoso nem sinônimo de destruição tecidual.</li>
        </ul>

        {/* 3. Modalidades de exercício */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          3. Quais modalidades de exercício apresentam melhores evidências?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Durante décadas, a fisioterapia esteve polarizada em disputas teóricas sobre qual método seria superior: estabilização segmentar (exercícios de controle motor focados em transverso abdominal e multífidos), método Pilates, treinamento de força com pesos livres, Yoga ou caminhada aeróbica.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões sistemáticas robustas da Cochrane e metanálises de redes comparando diretamente essas intervenções chegaram a uma conclusão de grande impacto clínico: <strong>nenhuma modalidade isolada de exercício é clinicamente superior a outra a médio e longo prazo</strong>. Veja a comparação das principais abordagens:
        </p>

        <div className="mb-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-gray-900 font-semibold border-b border-gray-200">
              <tr>
                <th className="p-3 md:p-4">Modalidade de Exercício</th>
                <th className="p-3 md:p-4">Foco Principal</th>
                <th className="p-3 md:p-4">Nível de Evidência</th>
                <th className="p-3 md:p-4">Indicação Clínica Preferencial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Controle Motor (Estabilização Segmentar)</td>
                <td className="p-3 md:p-4">Coordenação, ativação antecipatória de multífidos e transverso</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">Moderada a Alta</td>
                <td className="p-3 md:p-4">Pacientes com instabilidade funcional subjetiva e dificuldades de coordenação postural</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Fortalecimento Geral e Carga Progressiva</td>
                <td className="p-3 md:p-4">Capacidade de carga, força isométrica e dinâmica de eretores e glúteos</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">Alta</td>
                <td className="p-3 md:p-4">Indivíduos sedentários ou que necessitam retornar a exigências físicas no trabalho ou esporte</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Pilates e Yoga</td>
                <td className="p-3 md:p-4">Flexibilidade, respiração, consciência corporal e amplitude de movimento</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">Moderada a Alta</td>
                <td className="p-3 md:p-4">Pacientes com rigidez subjetiva, estresse associado e que preferem aulas estruturadas</td>
              </tr>
              <tr>
                <td className="p-3 md:p-4 font-medium text-gray-900">Exercício Aeróbio e Caminhada</td>
                <td className="p-3 md:p-4">Aptidão cardiorrespiratória, circulação, regulação neuroquímica e do sono</td>
                <td className="p-3 md:p-4 text-teal-700 font-semibold">Alta</td>
                <td className="p-3 md:p-4">Intervenção de fácil acesso, baixo custo e sustentável em longo prazo para todos os perfis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          A mensagem clínica definitiva da literatura contemporânea é libertadora: em vez de impor um protocolo rígido que o paciente detesta, o fisioterapeuta deve identificar as <strong>preferências individuais, barreiras de tempo, custos e experiências prévias</strong> do paciente. O exercício mais eficaz é aquele que o paciente de fato executa com consistência.
        </p>

        {/* 4. Educação em dor */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          4. Educação em dor: como orientar o paciente sem gerar medo ou catastrofização?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A comunicação clínica não é um adorno: ela é uma intervenção biológica com efeitos mensuráveis no cérebro. Estudos clássicos em neuroimagem funcional mostram que palavras com carga nociceptiva negativa ativam áreas da matriz da dor antes mesmo de qualquer toque físico.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Na abordagem de <strong>dor lombar não específica</strong>, a Educação em Neurociência da Dor (Pain Neuroscience Education - PNE) tem como objetivo redefinir a crença de que "dor significa lesão tecidual". Veja as comparações entre a linguagem biomédica obsoleta e a linguagem baseada em evidências:
        </p>

        <div className="mb-8 space-y-4">
          <div className="rounded-xl border border-red-200 bg-red-50/60 p-4">
            <h4 className="font-semibold text-red-900 text-sm uppercase">❌ O que NÃO dizer (Linguagem que gera medo e cinesiofobia):</h4>
            <p className="mt-1 text-sm text-red-800">
              "Sua coluna está gasta como pneu careca", "seu disco está desidratado e esmagado", "sua coluna é fraca e instável", "nunca dobre a coluna para pegar peso", "repouse na cama até a dor passar completamente".
            </p>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-4">
            <h4 className="font-semibold text-teal-900 text-sm uppercase">✅ O que DIZER (Linguagem que empodera e constrói resiliência):</h4>
            <p className="mt-1 text-sm text-teal-900">
              "Sua coluna é uma das estruturas mais fortes e resistentes do corpo humano", "as alterações no exame são como cabelos brancos da coluna: sinais naturais de vivência que a maioria das pessoas sem dor também tem", "sua dor é como um alarme sensível de carro que disparou com o vento, e nosso objetivo com o movimento é recalibrar esse alarme".
            </p>
          </div>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          Educar o paciente significa validar sua dor sem desmerecer seu sofrimento, encorajando-o a retomar o trabalho e suas atividades de lazer o mais cedo possível, desconstruindo o mito do repouso curativo.
        </p>

        {/* 5. Terapia manual */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          5. Terapia manual: quando utilizar e quais são suas limitações no tratamento da dor lombar?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A terapia manual ortopédica (mobilizações articulares com oscilações graduadas e manipulações de alta velocidade e baixa amplitude - HVLA) possui indicação clínica respaldada pelas diretrizes, contudo com <strong>papel estritamente coadjuvante e delimitado</strong>.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          A ciência contemporânea desmistificou o antigo modelo biomecânico da terapia manual: as manobras articulares não realinham vértebras que estariam "fora do lugar" e não reposicionam núcleos pulposos discais. O mecanismo de ação é primariamente <strong>neurofisiológico</strong>:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li>Estímulo mecânico maciço nos mecanorreceptores capsulares e musculares (corpúsculos de Ruffini e fusos neuromusculares);</li>
          <li>Inibição reflexa da hipertonia e dos espasmos dos músculos paravertebrais locais;</li>
          <li>Modulação autonômica simpática transitória e alívio álgico imediato por teoria das comportas medulares e vias descendentes.</li>
        </ul>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="font-bold text-gray-900">A Janela Terapêutica da Terapia Manual</h4>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            A terapia manual deve ser vista como uma <strong>ferramenta de abertura de janela</strong>. Quando um paciente chega em fase aguda ou subaguda com espasmo muscular incapacitante e dor elevada que inviabiliza o movimento ativo, a terapia manual pode atenuar a dor temporariamente para que o paciente consiga sentar, levantar e iniciar os exercícios ativos. Utilizar a terapia manual isoladamente, sessão após sessão, sem progressão para o movimento ativo gera dependência terapêutica e contradiz as evidências científicas.
          </p>
        </div>

        {/* 6. Calor e recursos passivos */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          6. Calor, eletroterapia, ultrassom e outros recursos passivos: o que dizem as evidências?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um dos pontos mais enfáticos das diretrizes clínicas do <em>NICE (National Institute for Health and Care Excellence)</em> e da <em>Organização Mundial da Saúde (OMS, 2023)</em> é a recomendação formal de <strong>não utilizar rotineiramente intervenções eletrofísicas passivas</strong> na dor lombar não específica.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Recursos consagrados na tradição fisioterapêutica do século passado foram exaustivamente testados contra placebos (sham) em ensaios clínicos randomizados de alto poder estatístico:
        </p>

        <div className="mb-8 space-y-4">
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5">
            <h4 className="font-bold text-amber-900">Eletroterapia (TENS e Correntes Analgésicas)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              O TENS produz alívio sensorial transitório mediado pela teoria das comportas medulares apenas durante a sua aplicação. No entanto, metanálises da Cochrane confirmam que ele não altera o tempo de recuperação, não reduz a incapacidade funcional e não previne recidivas a médio e longo prazo.
            </p>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50/70 p-5">
            <h4 className="font-bold text-red-900">Ultrassom Terapêutico e Laser de Baixa Potência</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              O ultrassom terapêutico não demonstra benefício superior ao placebo na dor lombar inespecífica. A profundidade anatômica da coluna e das estruturas vertebrais inviabiliza qualquer efeito térmico ou mecânico clinicamente relevante a partir dessas modalidades no tecido profundo.
            </p>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-5">
            <h4 className="font-bold text-teal-900">Calor Superficial (Bolsa de Água Quente)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Diferente dos aparelhos de consultório, a aplicação domiciliar de calor superficial na fase aguda possui evidência moderada de alívio sintomático de curto prazo, além de ser um recurso barato, seguro e de autocuidado que incentiva a autonomia do paciente.
            </p>
          </div>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          O consumo de tempo da sessão com aparelhos passivos rouba a oportunidade de ensinar movimento, dosar carga e desenvolver autoconfiança física. Na moderna prática baseada em evidências, o tempo clínico do fisioterapeuta é ativo.
        </p>

        {/* 7. Perfil do paciente e fases */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          7. Como escolher o tratamento de acordo com o perfil do paciente?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>tratamento da dor lombar</strong> não pode ser pautado por um "protocolo de gaveta" padronizado. A conduta clínica mais assertiva deve levar em consideração o estágio temporal da dor e a estratificação de risco prognóstico do indivíduo.
        </p>

        <h3 className="mb-3 text-xl font-bold text-gray-900">Estratificação por Fases Temporais</h3>
        <div className="mb-8 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-teal-700">Fase Aguda (menos de 6 semanas de duração)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Características:</strong> O curso natural da dor aguda é favorável na grande maioria dos pacientes. A dor tende a reduzir de forma expressiva nas primeiras 4 a 6 semanas.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Objetivo Clínico:</strong> Acalmar o paciente, rastrear Red Flags, desencorajar repouso em cama, prescrever manutenção das atividades diárias toleradas e exercícios leves (caminhadas, mobilizações ativas suaves). Terapia manual pontual pode ser usada para alívio imediato.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-blue-700">Fase Subaguda (6 a 12 semanas de duração)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Características:</strong> Pacientes que não apresentaram a melhora esperada na fase inicial e começam a correr risco de cronificação.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Objetivo Clínico:</strong> Rastrear barreiras psicossociais (Yellow Flags), introduzir exercícios resistidos progressivos, trabalhar a exposição gradual a movimentos temidos e reforçar a autogestão.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-purple-700">Fase Crônica (mais de 12 semanas de duração)</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Características:</strong> Mecanismos de sensibilização central e plasticidade neural desadaptativa, com dissociação entre intensidade da dor e dano tecidual periférico.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              <strong>Objetivo Clínico:</strong> Foco prioritário na redução da incapacidade e na retomada de funções vitais (trabalho, lazer, vida social), e não na promessa irreal de erradicar toda e qualquer dor do dia para a noite. Abordagem biopsicossocial com exercícios regulares, higiene do sono e educação em dor.
            </p>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-bold text-gray-900">Estratificação de Risco com o STarT Back Screening Tool</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O instrumento validado <strong>STarT Back</strong> divide os pacientes com dor lombar em três grupos de risco prognóstico para cronificação:
        </p>

        <ul className="mb-8 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Baixo Risco:</strong> Pacientes com bom prognóstico, sem sofrimento psicológico relevante. Conduta: intervenção mínima (1 a 2 consultas), orientação educativa, desmistificação e encorajamento para seguir ativo. Intervenções excessivas neste grupo podem piorar o prognóstico.</li>
          <li><strong>Médio Risco:</strong> Apresentam incapacidade funcional importante, mas sem distúrbios psicossociais severos. Conduta: fisioterapia ativa supervisionada, exercícios de fortalecimento, controle motor e retorno gradual às funções.</li>
          <li><strong>Alto Risco:</strong> Presença acentuada de crenças de medo-evitação, catastrofização, ansiedade ou sintomas depressivos. Conduta: fisioterapia baseada em intervenção biopsicossocial intensiva combinando educação em dor, exposição graduada ao movimento e apoio multidisciplinar.</li>
        </ul>

        {/* 8. Escalas e medidas funcionais */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          8. Como acompanhar a evolução com escalas e medidas funcionais?
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Avaliar a evolução do paciente apenas perguntando <em>"como você está se sentindo hoje?"</em> é insuficiente para respaldar a prática baseada em evidências. Mensurar desfechos clínicos por meio de Questionários Relatados pelo Paciente (PROMs) permite auditar a eficácia do plano de tratamento e demonstrar ao paciente sua própria melhora quantificada.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">Índice de Incapacidade de Oswestry (ODI)</h4>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              O padrão-ouro internacional para medir o impacto da dor lombar nas atividades diárias (cuidado pessoal, erguer peso, caminhar, sentar, dormir e vida social). Uma redução de pelo menos 10 a 12 pontos no escore percentual representa a Diferença Clinicamente Importante Mínima (MCID).
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">Questionário Roland-Morris (RMDQ)</h4>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Questionário ágil composto por 24 afirmações simples (sim/não) focado na incapacidade funcional provocada pela lombalgia. Uma redução de 4 a 5 pontos indica melhora clinicamente perceptível.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">Escala Numérica de Dor (NRS 0–10)</h4>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Mede a intensidade percebida da dor na última semana e no momento presente. A MCID costuma ser de 2 pontos (ou cerca de 30% de redução em relação à avaliação inicial).
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="font-bold text-gray-900">Escala Específica do Paciente (PSFS)</h4>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              O paciente elege de 3 a 5 atividades concretas que ele não consegue realizar devido à dor (ex.: brincar com o filho no chão, dirigir por 40 minutos) e pontua sua capacidade de 0 a 10. Excelente para metas centradas no paciente.
            </p>
          </div>
        </div>

        {/* PAA: As Pessoas Também Perguntam */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As Pessoas Também Perguntam</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900 text-base">Qual é o tratamento mais eficaz para dor lombar?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                As evidências científicas comprovam que não existe uma técnica isolada definitiva. O tratamento mais eficaz é a combinação de <strong>educação em dor</strong> (para eliminar crenças limitantes e o medo do movimento), a <strong>manutenção de uma vida ativa</strong> sem repouso no leito e a prática regular de <strong>exercício terapêutico individualizado</strong> (como fortalecimento, controle motor ou caminhadas progressivas).
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900 text-base">Quais exercícios são indicados para dor lombar?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Revisões sistemáticas mostram que exercícios de fortalecimento geral, controle motor (estabilização), Pilates, Yoga, hidroginástica e caminhada apresentam benefícios muito semelhantes na redução de dor e incapacidade. A modalidade ideal deve ser escolhida de acordo com a preferência pessoal do paciente, sua rotina e a tolerância de carga, garantindo que ele mantenha a prática a longo prazo.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="font-semibold text-gray-900 text-base">A terapia manual funciona para dor lombar?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Sim, mas com limitações importantes. A terapia manual (mobilizações e manipulações articulares) é eficaz para proporcionar <strong>alívio temporário de curto prazo</strong> e diminuir espasmos musculares. Contudo, ela não reposiciona vértebras ou discos e deve sempre ser utilizada como coadjuvante nos estágios agudos para preparar o paciente para o exercício ativo, que é o verdadeiro responsável pela recuperação duradoura.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 md:text-3xl">
          Conclusão: Da Fragmentação à Prática Baseada em Evidências
        </h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>tratamento da dor lombar</strong> não específica exige do fisioterapeuta a coragem clínica de abandonar modelos passivos ultrapassados e abraçar a ciência moderna. Ao entender que mais de 90% dos casos não demandam cirurgias, ressonâncias de rotina ou repouso no leito, o profissional ganha clareza sobre o verdadeiro valor da fisioterapia: <strong>capacitar o paciente através do movimento, da educação e da autogestão</strong>.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Não existe um protocolo único impresso que sirva para todas as pessoas. O melhor fisioterapeuta não é aquele que aplica a técnica mais complexa na maca, mas sim o profissional que sabe escutar, estratificar riscos, desmistificar medos e construir junto ao paciente um programa sustentável de reabilitação ativa e funcional.
        </p>

        {/* FAQ com Details/Summary compatível com Schema */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Perguntas Frequentes (FAQ)</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
              >
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
            A dor lombar não específica corresponde a mais de 90% dos casos clínicos e não deve ser tratada como uma lesão estrutural destrutiva isolada, mas como uma condição biopsicossocial com múltiplos fatores contribuintes.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            O exercício terapêutico ativo associado à educação em dor constitui a intervenção de primeira linha com o mais alto nível de recomendação científica. Nenhuma modalidade de exercício (Pilates, controle motor, musculação ou caminhada) é superior a outra a longo prazo: o fator primordial é a adesão consistente do paciente.
          </p>
          <p className="leading-relaxed text-gray-300">
            Terapias passivas (TENS, ultrassom, laser e tração) são condutas de baixo valor clínico e não devem ser usadas de forma isolada. A terapia manual tem valor como coadjuvante de curto prazo para viabilizar o início do movimento ativo.
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
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados (como Oswestry, Roland-Morris e NRS), indicadores clínicos e ferramentas para otimizar a rotina da clínica.
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
