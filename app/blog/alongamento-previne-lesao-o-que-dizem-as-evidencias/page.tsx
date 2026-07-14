import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/alongamento-previne-lesao-o-que-dizem-as-evidencias";

const faqItems = [
  {
    question: "Alongamento sozinho previne lesões?",
    answer:
      "Não de forma consistente. As revisões mais usadas na literatura mostram que alongamento isolado não reduz lesões de maneira confiável. A prevenção depende mais de força, controle motor, progressão de carga, histórico de lesão e contexto da atividade.",
  },
  {
    question: "Pessoas muito encurtadas lesionam mais?",
    answer:
      "Às vezes, mas não como regra universal. Restrição de movimento pode aumentar compensações em alguns esportes e tarefas, mas a relação entre flexibilidade e lesão é inconsistente e depende da articulação, da demanda funcional e do caso clínico.",
  },
  {
    question: "Ter mais mobilidade reduz o risco de lesão?",
    answer:
      "Não necessariamente. Mais amplitude pode ser útil quando existe limitação funcional, mas amplitude excessiva sem controle ou força suficiente não protege por si só e, em alguns cenários, pode até coexistir com instabilidade.",
  },
  {
    question: "Quando o alongamento faz sentido na prática?",
    answer:
      "Como parte de um plano individualizado para ganho de amplitude, alívio de rigidez percebida, preparo específico para a sessão ou manejo de sintomas. Ele funciona melhor como complemento do que como estratégia única de prevenção.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alongamento previne lesão? O que dizem as evidências",
  description:
    "Entenda o que a ciência mostra sobre alongamento, flexibilidade, mobilidade e prevenção de lesões. Veja o que realmente importa na prática clínica.",
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
  image: "https://kynesia.com.br/blog/alongamento-previne-lesao-o-que-dizem-as-evidencias.svg",
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
  title: "Alongamento previne lesão? O que dizem as evidências",
  description:
    "Veja o que a ciência diz sobre alongamento, flexibilidade e prevenção de lesões, com foco em artigos recentes e aplicação clínica.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Alongamento previne lesão? O que dizem as evidências",
    description:
      "Um resumo clínico e baseado em evidências sobre alongamento, encurtamento, mobilidade e risco de lesão.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/alongamento-previne-lesao-o-que-dizem-as-evidencias.svg",
        width: 1200,
        height: 800,
        alt: "Capa editorial do post sobre alongamento, com título em destaque e visual clínico em tons de verde e branco.",
      },
    ],
  },
};

export default function AlongamentoPrevineLesaoPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Evidência científica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Alongamento e prevenção
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Alongamento previne lesão? O que dizem as evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Uma leitura clínica e atual sobre o que realmente sabemos a respeito de alongamento, flexibilidade, mobilidade e risco de lesão.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 14 Jul 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/blog/alongamento-previne-lesao-o-que-dizem-as-evidencias.svg"
            alt="Capa do artigo com layout editorial em tons de verde e branco, título Alongamento previne lesão? e mensagem sobre evidências científicas"
            width={1200}
            height={800}
            className="w-full object-cover"
            priority
          />
        </div>

        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta curta</h2>
          <p className="leading-relaxed text-gray-900">
            <strong>Alongamento isolado não é uma estratégia confiável para prevenir lesões.</strong> A literatura recente mostra que o risco de lesão é multifatorial e depende muito mais de força, controle motor, progressão de carga, histórico de lesão, sono, fadiga e contexto da atividade do que de apenas “ser encurtado” ou “ser flexível”.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A pergunta “<strong>alongamento previne lesão?</strong>” aparece com frequência em consultório, academia e ambiente esportivo. A resposta curta é mais complexa do que um sim ou não. A ideia de que uma pessoa lesionará menos simplesmente por fazer mais alongamento não se sustenta bem quando olhamos as revisões sistemáticas. O que existe é uma associação indireta e variável entre amplitude de movimento, demandas da tarefa e tipo de lesão.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Em termos práticos, alongar pode ser útil para ganhar amplitude específica, reduzir sensação de rigidez e preparar o corpo para tarefas que exigem mobilidade. Mas isso é diferente de afirmar que o alongamento, sozinho, “blindará” o corpo contra lesões. A ciência recente aponta mais para programas multicomponentes do que para uma solução única.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">O que a evidência favorece mais</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
            <li>• Exercício preventivo com força, estabilidade e controle costuma ter melhor efeito do que alongamento isolado.</li>
            <li>• A relação entre flexibilidade e lesão é inconsistente e depende da articulação e da tarefa.</li>
            <li>• Ganhar mobilidade sem força ou controle não resolve o problema de prevenção.</li>
            <li>• O histórico de lesão anterior segue sendo um dos fatores clínicos mais relevantes.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que os artigos e revisões mostram</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Uma das revisões mais citadas sobre prevenção de lesões analisou intervenções por exercício e encontrou que <strong>alongamento, sozinho, não trouxe benefício claro para prevenir lesões</strong> em comparação com outras estratégias. Em outras palavras, o corpo de evidência disponível não dá suporte para vender o alongamento como o principal escudo contra lesões <span className="whitespace-nowrap">[1]</span>.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões posteriores reforçam uma visão parecida: o papel da flexibilidade existe, mas é menor e menos consistente do que muita gente imagina. Em alguns cenários, ter pouca amplitude pode atrapalhar a execução do movimento e aumentar compensações; em outros, isso não se traduz diretamente em maior risco de lesão. Por isso, a pergunta correta não é “a pessoa é encurtada?”, e sim “esse encurtamento realmente limita a função e aumenta a carga em uma região específica?” <span className="whitespace-nowrap">[2]</span>
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Uma revisão e meta-análise mais recente sobre programas de prevenção em jovens atletas observou que intervenções com componentes de força, flexibilidade e estabilidade podem reduzir lesões quando fazem parte de um programa estruturado. O ponto importante é esse: <strong>flexibilidade ajuda dentro de um pacote maior</strong>, mas não aparece como solução única e universal <span className="whitespace-nowrap">[3]</span>.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Pessoas muito encurtadas têm mais chance de se lesionar?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Às vezes sim, mas não como regra geral. Uma pessoa com pouca dorsiflexão de tornozelo, pouca extensão de quadril ou limitação importante de ombro pode compensar o gesto e sobrecarregar outra estrutura. Isso faz sentido clinicamente. Porém, transformar essa observação em uma lei universal é um erro. Muitos indivíduos “encurtados” não se lesionam, e muitos lesionados não apresentam limitação de flexibilidade relevante.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          O que costuma aumentar o risco não é a amplitude reduzida em si, mas o conjunto formado por <strong>restrição funcional + alta demanda + baixa capacidade tecidual + controle ruim + carga mal dosada</strong>. Em resumo: encurtamento pode ser um fator, mas raramente é o fator principal.
        </p>

        <div className="mb-8 rounded-2xl bg-slate-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Quando a limitação de mobilidade merece atenção clínica</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
            <li>• Quando reduz a execução de um gesto esportivo ou funcional.</li>
            <li>• Quando gera compensações visíveis em outras articulações.</li>
            <li>• Quando há dor associada ao movimento limitado.</li>
            <li>• Quando o paciente precisa daquela amplitude para a tarefa que executa.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Mais mobilidade significa menos lesão?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Também não necessariamente. Ganhar mobilidade pode ser ótimo quando havia limitação funcional real. Mas mobilidade por si só não garante proteção. Se a pessoa tem amplitude grande, porém força insuficiente, baixa estabilidade ou péssima progressão de carga, o risco pode continuar alto. Em outras palavras, <strong>mais movimento não substitui capacidade de sustentar esse movimento</strong>.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Esse ponto é importante porque muita gente trata “ser flexível” como sinônimo de “ser protegido”. Não é. A prevenção eficiente precisa considerar capacidade de gerar força, absorver carga, coordenar o movimento e tolerar o volume do esporte ou da rotina.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em alguns contextos, grande mobilidade sem estabilidade pode até coexistir com lesões de repetição ou sensação de instabilidade articular. Portanto, o alvo não é apenas aumentar amplitude: é encontrar a amplitude suficiente para a função com segurança e controle.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando o alongamento faz sentido</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O alongamento continua tendo lugar na fisioterapia e no esporte. Ele faz sentido quando existe limitação de movimento que interfere na função, quando o objetivo é recuperar amplitude específica ou quando ele entra como parte do aquecimento e da preparação para tarefas que exigem mobilidade. O erro não é alongar; o erro é achar que isso basta.
        </p>

        <div className="mb-8 space-y-4">
          {[
            {
              title: "1. Se houver limitação funcional real",
              text: "Se o paciente não alcança a amplitude necessária para agachar, correr, saltar, pedalar ou levantar o braço, o alongamento pode compor o plano para melhorar a tarefa.",
            },
            {
              title: "2. Se a rigidez percebida for relevante para o sintoma",
              text: "Em alguns quadros, reduzir a sensação de rigidez ajuda na aderência ao exercício e na tolerância ao movimento.",
            },
            {
              title: "3. Se entrar dentro de um programa maior",
              text: "O melhor cenário costuma ser combinar mobilidade com força, controle motor, técnica e progressão de carga.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="leading-relaxed text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como traduzir isso para a prática clínica</h2>
        <ul className="mb-5 space-y-3 leading-relaxed text-gray-700">
          <li>• Não prescreva alongamento como única estratégia de prevenção.</li>
          <li>• Avalie se a falta de amplitude realmente interfere na função do paciente.</li>
          <li>• Priorize força, estabilidade, controle e progressão de carga como pilares centrais.</li>
          <li>• Use o alongamento como ferramenta específica, não como solução universal.</li>
          <li>• Reavalie função, dor e tolerância ao movimento em vez de perseguir apenas graus de amplitude.</li>
        </ul>

        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">Resumo clínico</h3>
          <p className="leading-relaxed text-gray-700">
            O melhor resumo é este: <strong>alongamento pode ajudar, mas não previne lesão sozinho</strong>. Pessoas muito encurtadas podem ter mais risco em tarefas específicas, porém isso não é automático. E pessoas muito flexíveis não estão protegidas apenas por terem mais mobilidade. A prevenção real aparece quando amplitude, força, controle e carga trabalham juntos.
          </p>
        </div>

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

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Referências</h2>
          <ol className="space-y-4 text-sm leading-relaxed text-gray-700">
            <li>
              <strong>[1]</strong> Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: systematic review and meta-analysis of randomised controlled trials. <em>Br J Sports Med</em>. 2014;48(11):871-877.{' '}
              <a className="text-teal-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/24100287/" target="_blank" rel="noreferrer">
                PubMed
              </a>{' '}
              <a className="text-teal-600 hover:underline" href="https://doi.org/10.1136/bjsports-2013-092538" target="_blank" rel="noreferrer">
                DOI
              </a>
            </li>
            <li>
              <strong>[2]</strong> de la Motte SJ, et al. Systematic Review of the Association Between Physical Fitness and Musculoskeletal Injury Risk: Part 3-Flexibility, Power, Speed, Balance, and Agility. <em>J Strength Cond Res</em>. 2019.{' '}
              <a className="text-teal-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/29239989/" target="_blank" rel="noreferrer">
                PubMed
              </a>
            </li>
            <li>
              <strong>[3]</strong> Robles-Palazón FJ, Blázquez-Rincón D, López-Valenciano A, et al. A systematic review and network meta-analysis on the effectiveness of exercise-based interventions for reducing the injury incidence in youth team-sport players. Part 1: an analysis by classical training components. <em>Ann Med</em>. 2024.{' '}
              <a className="text-teal-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/39351708/" target="_blank" rel="noreferrer">
                PubMed
              </a>{' '}
              <a className="text-teal-600 hover:underline" href="https://doi.org/10.1080/07853890.2024.2408457" target="_blank" rel="noreferrer">
                DOI
              </a>
            </li>
            <li>
              <strong>[4]</strong> Behm DG, Blazevich AJ, Kay AD, McHugh M. Acute effects of muscle stretching on physical performance, range of motion, and injury incidence in healthy active individuals: a systematic review. <em>Appl Physiol Nutr Metab</em>. 2016;41(1):1-11.{' '}
              <a className="text-teal-600 hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/26642915/" target="_blank" rel="noreferrer">
                PubMed
              </a>
            </li>
          </ol>
        </section>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Conclusão</h2>
          <p className="mb-4 leading-relaxed">
            Alongamento continua sendo uma ferramenta válida, mas não deve ser vendido como proteção universal contra lesão. A prevenção real depende do conjunto entre amplitude útil, força, controle e carga bem administrada.
          </p>
          <p className="leading-relaxed">
            Se o objetivo é reduzir lesão, o foco deve sair da ideia de “sou encurtado, então preciso apenas alongar” e ir para a pergunta certa: “o que esse paciente precisa para mover melhor, suportar melhor e tolerar melhor sua demanda?”
          </p>
        </div>
      </article>
    </main>
+  );
+}
