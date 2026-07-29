import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/sindrome-do-impacto-do-ombro-causas-tratamento-e-exercicios";

const faqItems = [
  {
    question: "Síndrome do impacto do ombro é a mesma coisa que lesão do manguito?",
    answer:
      "Não exatamente. A síndrome do impacto descreve um quadro clínico de dor e limitação, geralmente relacionado à sobrecarga do complexo subacromial. Pode coexistir com alterações do manguito rotador, mas não são sinônimos.",
  },
  {
    question: "Precisa de exame de imagem para confirmar síndrome do impacto?",
    answer:
      "Na maioria dos casos, a avaliação clínica é suficiente para condução inicial. Exames de imagem podem ser úteis em casos persistentes, trauma, suspeita de ruptura importante ou quando o quadro não evolui como esperado.",
  },
  {
    question: "Qual o melhor tratamento para síndrome do impacto do ombro?",
    answer:
      "As melhores evidências apontam para exercício terapêutico progressivo, educação, manejo de carga e reabilitação funcional individualizada. Intervenções passivas isoladas tendem a ter benefício mais curto.",
  },
  {
    question: "Quanto tempo demora para melhorar?",
    answer:
      "Muitos pacientes apresentam melhora relevante em 6 a 12 semanas com adesão adequada. Casos crônicos ou com alta irritabilidade podem exigir período maior, com progressão gradual e monitoramento clínico.",
  },
  {
    question: "Cirurgia é sempre necessária?",
    answer:
      "Não. Em grande parte dos casos, o tratamento conservador bem estruturado oferece bons resultados. Cirurgia costuma ser considerada em casos específicos, após falha de reabilitação adequada ou em rupturas relevantes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Síndrome do impacto do ombro: causas, tratamento e exercícios baseados em evidências",
  description:
    "Entenda causas, avaliação e tratamento da síndrome do impacto do ombro com exercícios e condutas baseadas em evidências.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-21",
  dateModified: "2026-05-21",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
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
  title: "Síndrome do impacto do ombro: causas, tratamento e exercícios baseados em evidências",
  description:
    "Entenda causas, avaliação e tratamento da síndrome do impacto do ombro com exercícios e condutas baseadas em evidências.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Síndrome do impacto do ombro: causas, tratamento e exercícios baseados em evidências",
    description:
      "Guia clínico completo sobre síndrome do impacto do ombro: diagnóstico funcional, tratamento conservador e progressão de exercícios.",
    type: "article",
    url: pageUrl,
  },
};

export default function SindromeImpactoOmbroPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Síndrome do impacto do ombro: causas, tratamento e exercícios baseados em evidências</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Síndrome do impacto do ombro: causas, tratamento e exercícios baseados em evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Dor ao elevar o braço, desconforto no arco doloroso e perda de desempenho funcional? Entenda como avaliar e tratar a síndrome do impacto do ombro com estratégia clínica baseada em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 21 Mai 2026</span>
            <span>⏱ 13 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            A <strong>síndrome do impacto do ombro</strong> representa um conjunto de sinais e sintomas associados à sobrecarga de estruturas subacromiais. Hoje, o foco terapêutico mais efetivo não é “descomprimir” passivamente, e sim restaurar capacidade funcional com exercício progressivo, manejo de carga e reabilitação orientada por função.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Por muitos anos, o raciocínio clínico foi centrado em conflito mecânico estrutural. A literatura recente propõe abordagem mais ampla: dor no ombro costuma ser multifatorial, incluindo capacidade tecidual, exposição à carga, controle motor, padrões de movimento e fatores comportamentais.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Em outras palavras, a conduta mais atual prioriza função e tolerância ao movimento. O objetivo é reduzir dor sem descondicionar o paciente, acelerar retorno às atividades e minimizar recorrência.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos para ombro: como melhorar sua precisão clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no ombro ao levantar o braço: causas e tratamento
              </Link>
            </li>
            <li>
              <Link href="/blog/clusters-de-testes-ortopedicos-o-que-sao-e-como-usar" className="text-teal-600 hover:underline">
                → Clusters de testes ortopédicos: o que são e como usar
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como reconhecer a síndrome do impacto do ombro</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O quadro clínico mais comum inclui dor anterolateral no ombro, piora ao elevar o braço, desconforto em atividades acima da cabeça e queda de desempenho em tarefas como vestir camiseta, pegar objetos em prateleiras ou treinar membros superiores.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          O chamado “arco doloroso” entre aproximadamente 60° e 120° de elevação pode aparecer, mas não deve ser interpretado isoladamente. A interpretação mais confiável envolve conjunto de achados clínicos e resposta funcional ao movimento.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Fatores que contribuem para o quadro</h2>
        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Sobrecarga sem progressão",
              desc: "Aumento rápido de treino, trabalho repetitivo acima da cabeça ou retorno brusco ao esporte elevam irritabilidade do ombro.",
              tip: "Planejar progressão semanal de carga melhora adaptação e reduz recaídas.",
            },
            {
              num: "02",
              title: "Déficit de força do manguito e escápula",
              desc: "Baixa capacidade de estabilização e rotação pode aumentar estresse local em tarefas exigentes.",
              tip: "Fortalecimento progressivo orientado por função costuma trazer melhor transferência clínica.",
            },
            {
              num: "03",
              title: "Baixa tolerância do tendão à demanda",
              desc: "Tendões do manguito com capacidade reduzida respondem mal a picos de esforço, gerando dor e perda de performance.",
              tip: "Exposição gradual e consistente à carga é mais eficaz que repouso prolongado.",
            },
            {
              num: "04",
              title: "Fatores contextuais",
              desc: "Sono ruim, estresse e medo de movimento podem amplificar dor e atrasar recuperação funcional.",
              tip: "Educação e plano claro de progressão aumentam adesão e confiança.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Fator {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Avaliação clínica: o que priorizar</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O diagnóstico é predominantemente clínico e funcional. Testes provocativos podem ajudar, mas o maior valor está em combinar história, padrão de dor, comportamento com carga, avaliação de força e resposta a movimentos repetidos.
        </p>
        <ul className="mb-8 ml-6 space-y-2 text-gray-700">
          <li>• História de sobrecarga e atividades agravantes</li>
          <li>• Dor em elevação e rotação, especialmente em tarefas acima da cabeça</li>
          <li>• Avaliação de força de manguito rotador e controle escapular</li>
          <li>• Observação de movimento funcional e estratégias compensatórias</li>
          <li>• Resposta sintomática em 24h após exposição à carga</li>
        </ul>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta e diagnóstico diferencial</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Suspeita de ruptura aguda importante do manguito (fraqueza súbita marcada)</li>
            <li>• Dor noturna intensa progressiva sem resposta a conduta inicial</li>
            <li>• História de trauma relevante com perda de função</li>
            <li>• Dor cervical referida, radiculopatia ou sinais neurológicos associados</li>
            <li>• Capsulite adesiva, osteoartrite glenoumeral e outras causas intra-articulares</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tratamento baseado em evidências</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A literatura contemporânea favorece programas de reabilitação ativos. O manejo conservador bem dosado apresenta bons resultados para dor e função em grande parte dos pacientes, muitas vezes com desfechos comparáveis a abordagens invasivas em médio prazo para casos selecionados.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Educação e manejo de carga</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Ajustar volume de atividades dolorosas, sem inatividade total, preserva condicionamento e acelera retorno funcional. A regra é manter estímulo em dose tolerável.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Exercício terapêutico progressivo</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Combinar exercícios de manguito, estabilizadores escapulares e cadeia cinética superior/inferior melhora capacidade global. Progressão deve considerar dor, técnica e resposta em 24 horas.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Reintegração funcional</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O programa precisa simular demandas reais: trabalho, esporte e atividades de vida diária. Sem essa fase, há risco maior de recaída ao voltar à rotina.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">4) Adjuvantes (quando necessários)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Recursos analgésicos podem ser úteis para reduzir irritabilidade e facilitar adesão ao exercício. O uso deve ser estratégico, não substituto do tratamento ativo.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplo de progressão clínica por fases</h2>
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Fase</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Objetivo</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Conduta principal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Semanas 1-2</td>
                <td className="px-4 py-3 text-gray-700">Reduzir irritabilidade</td>
                <td className="px-4 py-3 text-gray-700">Educação, ajuste de carga, exercícios isométricos/submáximos e mobilidade tolerável</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Semanas 3-6</td>
                <td className="px-4 py-3 text-gray-700">Ganhar capacidade</td>
                <td className="px-4 py-3 text-gray-700">Fortalecimento progressivo de manguito/escápula, controle motor e endurance local</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Semanas 7+</td>
                <td className="px-4 py-3 text-gray-700">Retorno pleno</td>
                <td className="px-4 py-3 text-gray-700">Treino funcional específico para esporte/trabalho e prevenção de recidiva</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Erros que atrasam a evolução</h2>
        <ul className="mb-8 ml-6 space-y-2 text-gray-700">
          <li>• Prescrever repouso absoluto por longo período</li>
          <li>• Focar só em tratamento passivo, sem progressão ativa</li>
          <li>• Ignorar função e tratar apenas intensidade de dor</li>
          <li>• Retornar abruptamente ao treino acima da cabeça</li>
          <li>• Não acompanhar resposta tardia de sintomas (24h)</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como melhorar resultados na prática clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Protocolos padronizados ajudam, mas a resposta individual deve guiar ajustes. Monitorar dor durante e após exercício, capacidade de função e qualidade de movimento torna o plano mais preciso.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Quando o fisioterapeuta registra evolução de forma estruturada e acompanha indicadores funcionais, a tomada de decisão ganha velocidade e confiabilidade.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2>
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
          <h2 className="mb-4 text-2xl font-bold">Resumo clínico</h2>
          <p className="mb-4 leading-relaxed">
            Síndrome do impacto do ombro não deve ser tratada com lógica única e estrutural. O melhor desfecho costuma vir de abordagem ativa, progressiva e centrada em função.
          </p>
          <p className="mb-4 leading-relaxed">
            Educação, manejo de carga, fortalecimento e reintegração funcional são os pilares com melhor sustentação na prática baseada em evidência.
          </p>
          <p className="leading-relaxed">
            O objetivo final não é apenas “tirar dor”, mas recuperar capacidade para viver, trabalhar e treinar sem limitação relevante.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
