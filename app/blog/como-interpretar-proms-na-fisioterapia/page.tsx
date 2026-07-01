import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/como-interpretar-proms-na-fisioterapia";

const faqItems = [
  {
    question: "O que significa PROMs na fisioterapia?",
    answer: "PROMs (Patient-Reported Outcome Measures) são medidas de resultados relatadas pelo próprio paciente. Elas consistem em questionários ou escalas validadas que avaliam a percepção do paciente sobre sua dor, funcionalidade, qualidade de vida e outros aspectos de saúde, sem a interferência do terapeuta."
  },
  {
    question: "Qual a diferença entre MCID e MDC na interpretação de PROMs?",
    answer: "O MDC (Minimal Detectable Change) indica a menor mudança que excede o erro de medição do instrumento (mudança real). O MCID (Minimal Clinically Important Difference) indica a menor mudança de escore que o paciente percebe como clinicamente importante e benéfica. A melhora é considerada ideal quando atinge ambos os limiares."
  },
  {
    question: "Como aplicar o ODI e o NDI na prática clínica de fisioterapia?",
    answer: "O ODI (Oswestry Disability Index) e o NDI (Neck Disability Index) avaliam a incapacidade física na dor lombar e cervical, respectivamente. Eles são pontuados de 0 a 50 (ou convertidos para %), onde pontuações maiores refletem maior incapacidade. Devem ser coletados na avaliação inicial, reavaliações intermediárias e na alta."
  },
  {
    question: "Por que devemos verificar a confiabilidade de uma escala antes de usá-la?",
    answer: "Para garantir que o PROM seja validado cientificamente para a população e condição específica do paciente. Utilizar um questionário inadequado ou não validado compromete a precisão dos dados coletados e a segurança das decisões clínicas."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Interpretar PROMs na Fisioterapia: Guia Completo para Tomar Decisões Clínicas",
  description: "Aprenda a interpretar PROMs na fisioterapia. Entenda conceitos como MCID e MDC e saiba como analisar questionários como ODI, NDI, TSK e EVA na prática.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  image: "https://kynesia.com.br/blog/como-interpretar-proms-fisioterapia.jpg",
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
  title: "Como Interpretar PROMs na Fisioterapia: Guia Completo",
  description: "Aprenda a interpretar PROMs na fisioterapia. Entenda conceitos como MCID e MDC e saiba como analisar questionários como ODI, NDI, TSK e EVA na prática.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como Interpretar PROMs na Fisioterapia: Guia Completo",
    description: "Aprenda a interpretar PROMs na fisioterapia. Entenda conceitos como MCID e MDC e saiba como analisar questionários como ODI, NDI, TSK e EVA na prática.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/como-interpretar-proms-fisioterapia.jpg",
        width: 1200,
        height: 800,
        alt: "Como Interpretar PROMs na Fisioterapia: Guia Completo",
      },
    ],
  },
};

export default function ComoInterpretarPromsPage() {
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
            Como Interpretar PROMs na Fisioterapia: Guia Completo para Tomar Decisões Clínicas
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Saiba como decifrar a evolução clínica do seu paciente usando questionários padronizados, MCID e MDC, elevando a resolutividade dos seus tratamentos.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 01 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Featured Image inside the Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/como-interpretar-proms-fisioterapia.jpg"
            alt="Mesa de trabalho com documentos clínicos, prancheta de Avaliação Fisioterapêutica e guias visuais para interpretar PROMs na fisioterapia"
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
            Para <strong>interpretar PROMs na fisioterapia</strong> de forma científica, o clínico não deve apenas observar escores brutos. É necessário aplicar as métricas de <strong>MDC (Minimal Detectable Change)</strong>, que atesta se a mudança superou o erro de medição do teste, e <strong>MCID (Minimal Clinically Important Difference)</strong>, que confirma se o paciente realmente sentiu uma melhora importante e benéfica no seu dia a dia. Uma evolução clínica é considerada estatisticamente e clinicamente significativa quando o escore de mudança é superior ao MDC e ao MCID ao mesmo tempo.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Você já aplicou uma escala de dor ou incapacidade na avaliação inicial de um paciente, repetiu o questionário após dez sessões de fisioterapia, notou uma redução sutil de pontos e ficou na dúvida se aquela melhora foi realmente significativa ou apenas fruto do acaso?
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Mensurar resultados clínicos é o primeiro passo para uma prática baseada em evidências. Contudo, coletar dados sem saber interpretá-los clinicamente é um dos maiores gargalos operacionais em consultórios de reabilitação. As medidas de desfecho relatadas pelo paciente, conhecidas internacionalmente como <strong>PROMs (Patient-Reported Outcome Measures)</strong>, oferecem dados valiosos sobre dor, funcionalidade e cinesiofobia. Para extrair valor real dessas escalas e guiar as suas condutas assistenciais com precisão, é necessário entender as propriedades psicométricas que validam a evolução clínica de forma objetiva.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/proms-e-prems-na-fisioterapia" className="text-teal-600 hover:underline">
                → PROMs e PREMs na Fisioterapia: Por que você deve medir resultados?
              </Link>
            </li>
            <li>
              <Link href="/blog/escalas-e-questionarios-validados-na-fisioterapia" className="text-teal-600 hover:underline">
                → Escalas e Questionários Validados na Fisioterapia: Quais utilizar?
              </Link>
            </li>
            <li>
              <Link href="/blog/raciocinio-clinico-na-fisioterapia-avaliacoes-diferentes" className="text-teal-600 hover:underline">
                → Raciocínio Clínico na Fisioterapia: Por que ocorrem divergências na avaliação?
              </Link>
            </li>
            <li>
              <Link href="/blog/como-montar-prontuario-fisioterapeutico-completo" className="text-teal-600 hover:underline">
                → Como Montar um Prontuário Fisioterapêutico Completo: O Que Não Pode Faltar
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Fluxo de Gestão de Resultados: Do Post-it à Alta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A aplicação de PROMs não deve ser um evento isolado na admissão do paciente. Ela representa um processo cíclico e contínuo estruturado em quatro etapas operacionais básicas:
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { step: "1. Coleta", desc: "Aplicação do questionário de forma clara, garantindo que o paciente compreenda as perguntas sem sofrer indução do terapeuta." },
            { step: "2. Interpretação", desc: "Cálculo do escore bruto e análise estatística/clínica comparativa frente aos dados basais de admissão." },
            { step: "3. Decisão", desc: "Determinação de conduta clínica baseada nos resultados (progredir exercícios, manter plano ou reavaliar)." },
            { step: "4. Reavaliação", desc: "Aplicação do PROM em intervalos periódicos planejados para quantificar a taxa de evolução do tratamento." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 border-t-2 border-teal-500 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-1">{item.step}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Os Pilares Científicos da Mudança: MCID vs. MDC</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para que você possa afirmar que o tratamento gerou efeitos reais no paciente, a mudança nos escores dos PROMs precisa superar dois limiares de acurácia estatística:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h4 className="font-bold text-lg text-gray-900">MDC (Minimal Detectable Change - Mínima Mudança Detectável)</h4>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Representa a menor mudança que excede o erro de medição do próprio instrumento (erro gerado pelo paciente ou variações intrínsecas da escala). Superar o MDC significa que a mudança observada é estatisticamente real e não um ruído estatístico de medição.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h4 className="font-bold text-lg text-gray-900">MCID (Minimal Clinically Important Difference - Mínima Diferença Clinicamente Importante)</h4>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Representa a menor mudança no escore que o paciente percebe como clinicamente importante, benéfica e impactante em sua rotina diária. A mudança pode ser estatisticamente real (&gt; MDC), mas se for pequena demais para mudar a vida do paciente, ela não terá alcançado o MCID.
            </p>
          </div>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          <strong>Regra de Ouro:</strong> A melhora clinicamente significativa ocorre de verdade somente quando a mudança do escore observada na reavaliação é <strong>maior que o MCID e também maior que o MDC</strong>.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Análise de Questionários de Exemplo na Prática Clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para estruturar a sua avaliação com base em evidências, vamos analisar como diferentes escalas de dor, incapacidade e cinesiofobia se comportam no acompanhamento clínico dos pacientes:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Escala / Questionário (PROM)</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Escore Típico</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Classificação Clínica</th>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Propósito Clínico Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-950">Oswestry Disability Index (ODI)</td>
                <td className="px-4 py-3 text-center">22 / 50</td>
                <td className="px-4 py-3 text-center text-amber-700 font-bold bg-amber-50">Incapacidade Moderada</td>
                <td className="px-4 py-3 text-gray-700">Avalia incapacidade funcional específica em pacientes com dor lombar crônica ou aguda.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-950">Neck Disability Index (NDI)</td>
                <td className="px-4 py-3 text-center">14 / 50</td>
                <td className="px-4 py-3 text-center text-teal-700 font-bold bg-teal-50">Incapacidade Leve</td>
                <td className="px-4 py-3 text-gray-700">Mede o impacto da dor cervical nas atividades de vida diária (trabalho, sono, leitura).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-950">Quick DASH</td>
                <td className="px-4 py-3 text-center">18 / 100</td>
                <td className="px-4 py-3 text-center text-teal-700 font-bold bg-teal-50">Incapacidade Leve</td>
                <td className="px-4 py-3 text-gray-700">Mede sintomas e incapacidade física nos membros superiores (ombro, cotovelo e mão).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-950">Escala Visual Analógica (EVA)</td>
                <td className="px-4 py-3 text-center">6 / 10</td>
                <td className="px-4 py-3 text-center text-amber-700 font-bold bg-amber-50">Dor Moderada</td>
                <td className="px-4 py-3 text-gray-700">Mede a intensidade da dor percebida de forma visual direta.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-950">Tampa Scale for Kinesiophobia (TSK)</td>
                <td className="px-4 py-3 text-center">32 / 68</td>
                <td className="px-4 py-3 text-center text-amber-700 font-bold bg-amber-50">Cinesiofobia Moderada</td>
                <td className="px-4 py-3 text-gray-700">Mede o medo do movimento ou da relesão decorrente da dor músculo-esquelética crônica.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          Entender a classificação clínica e o escore de cada questionário é crucial. Um paciente com pontuação de 22/50 no ODI, por exemplo, é enquadrado em incapacidade moderada. Para que ele migre para a classificação de incapacidade leve, sua melhora precisa superar os limiares psicométricos específicos do questionário, o que serve de subsídio direto para ajustar as condutas de reabilitação.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Guia de 5 Passos para Interpretar PROMs na Prática</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para que você possa guiar a tomada de decisão com segurança em sua clínica de fisioterapia, siga este passo a passo estruturado baseado em dados:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 space-y-4">
          <ul className="space-y-4 text-gray-700 text-sm">
            <li>
              <strong>1. Verifique a Confiabilidade:</strong> Certifique-se de que a escala utilizada é válida, confiável e adaptada transculturalmente para a condição específica e perfil de dor do paciente.
            </li>
            <li>
              <strong>2. Analise a Mudança do Escore:</strong> Calcule a variação absoluta entre a avaliação inicial (basal) e a reavaliação. Por exemplo: se a EVA do paciente caiu de 6/10 para 3/10, a mudança absoluta foi de 3 pontos.
            </li>
            <li>
              <strong>3. Compare com o MCID:</strong> A mudança do escore superou a diferença clinicamente importante? Na EVA de dor crônica, por exemplo, o MCID gira em torno de 2 pontos. Uma redução de 3 pontos atende a este critério.
            </li>
            <li>
              <strong>4. Compare com o MDC:</strong> A mudança excede o erro intrínseco de medição da escala (MDC)? Se o erro da escala for de 1.5 pontos, sua mudança de 3 pontos superou o MDC com folga, confirmando uma melhora real.
            </li>
            <li>
              <strong>5. Considere o Contexto Clínico:</strong> A evolução quantitativa das escalas faz sentido lógico com a evolução do quadro clínico, com a capacidade física geral e com os objetivos funcionais declarados pelo paciente na anamnese?
            </li>
          </ul>
          <p className="font-bold text-teal-800 text-center border-t border-teal-200 pt-3">
            Dados + Evidências + Clínica = Decisões Melhores
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Ajuste de Conduta Baseado nos Resultados</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Com base na comparação sistemática dos PROMs basais e evolutivos, o fisioterapeuta deve definir e justificar a sua conduta terapêutica imediata no prontuário eletrônico:
        </p>

        <ul className="mb-8 list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Manter o plano terapêutico:</strong> Indicado quando os escores mostram progresso contínuo e consistente, alinhado com as metas temporais.
          </li>
          <li>
            <strong>Progredir exercícios:</strong> Quando os escores funcionais e psicossociais indicam resolução de incapacidade e redução do medo do movimento (MDC e MCID superados), permitindo aplicar mais carga mecânica e desafios funcionais.
          </li>
          <li>
            <strong>Reavaliar a abordagem:</strong> Necessário se o paciente atinge um platô de melhora abaixo do MCID ou apresenta piora nas reavaliações estruturadas, exigindo mudança de conduta terapêutica.
          </li>
          <li>
            <strong>Encaminhar para outro profissional:</strong> Indicado caso a reavaliação identifique a ausência de evolução clínica associada à presença de sinais de alerta (red flags) ou necessidades multidisciplinares adicionais (ex: suporte psicológico).
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Transformando Escores em Resultados Clínicos</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Utilizar e saber <strong>interpretar PROMs na fisioterapia</strong> é a ferramenta ideal para dar visibilidade científica e credibilidade aos tratamentos. Ao integrar o MDC e o MCID nas reavaliações periódicas, você afasta o subjetivismo da evolução baseada em opiniões e assume o controle matemático e assistencial dos tratamentos de reabilitação.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Dessa forma, o diagnóstico fisioterapêutico torna-se preciso, as altas funcionais tornam-se seguras e a sua clínica constrói autoridade de marca respaldada em desfechos clínicos mensuráveis e comprovados.
        </p>

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
            A aplicação sistemática de PROMs na fisioterapia baseada em evidências sustenta a objetividade do processo de evolução clínica do paciente.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A interpretação clínica moderna exige a validação estatística (superando o MDC) e clínica (superando o MCID) das mudanças obtidas nas reavaliações.
          </p>
          <p className="leading-relaxed text-gray-300">
            A adoção dessas ferramentas clínicas apoia o processo de tomada de decisão terapêutica, fornecendo dados claros para progressão, ajuste ou alta segura.
          </p>
        </div>

        {/* Equipe Kynesia Signature */}
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

        {/* Bloco de Conversão */}
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
