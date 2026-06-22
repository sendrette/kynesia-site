import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Yellow Flags na Fisioterapia: Fatores Psicossociais e Dor",
  description:
    "Entenda o papel das Yellow Flags na fisioterapia. Aprenda a identificar fatores psicossociais, crenças sobre a dor e como eles afetam a reabilitação clínica.",
  openGraph: {
    title: "Yellow Flags na Fisioterapia: Fatores Psicossociais e Dor",
    description:
      "Descubra como cinesiofobia, catastrofização e fatores psicossociais atuam como barreiras na reabilitação física e saiba como abordá-los com sucesso.",
    type: "article",
    url: "https://kynesia.com.br/blog/yellow-flags-na-fisioterapia-fatores-psicossociais",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Yellow Flags na Fisioterapia: Como Fatores Psicossociais Influenciam a Dor e a Reabilitação",
  description:
    "Entenda o papel das Yellow Flags na fisioterapia. Aprenda a identificar fatores psicossociais, crenças sobre a dor e como eles afetam a reabilitação clínica.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  mainEntityOfPage: "https://kynesia.com.br/blog/yellow-flags-na-fisioterapia-fatores-psicossociais",
};

export default function YellowFlagsPage() {
  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLdJson) }} />

      <SiteHeader />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Yellow Flags na Fisioterapia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Yellow Flags na Fisioterapia: Como Fatores Psicossociais Influenciam a Dor e a Reabilitação
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Muito além do dano tecidual, crenças, medos e o contexto social moldam a experiência dolorosa de um paciente. Descubra o que são as Yellow Flags e como intervir nelas de forma estratégica.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 22 Jun 2026</span>
            <span>Leitura: 9 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que são Yellow Flags na fisioterapia?</strong> São indicadores psicossociais, cognitivos e comportamentais que apontam para um maior risco de cronificação da dor, maior incapacidade funcional e pior prognóstico de recuperação. Ao contrário das Red Flags (sinais de patologias graves), as Yellow Flags representam barreiras psicológicas e sociais à reabilitação.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A transição de uma dor aguda para uma dor crônica persistente raramente é explicada apenas por fatores puramente biomecânicos ou estruturais. Cada vez mais, a neurociência da dor apoia a necessidade de um modelo biopsicossocial, onde o estado mental e o contexto do paciente exercem influência direta na modulação da dor.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          No centro desse raciocínio estão as chamadas <strong>Yellow Flags (Bandeiras Amarelas)</strong>. Identificar estes sinais logo na primeira consulta é crucial para traçar um plano de tratamento assertivo, evitando a prescrição de exercícios inadequados e mitigando a frustração do paciente.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">Leia este artigo se você quer</h3>
          <p className="text-sm text-gray-700">
            Aprender a reconhecer os principais fatores psicossociais limitantes, utilizar questionários clínicos validados para triagem e aplicar estratégias práticas de educação em dor e exposição gradual.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/biopsicossocial-vs-biomecanico-o-que-vale-na-pratica" className="text-teal-600 hover:underline">
                → Biopsicossocial vs modelo biomecânico: o que vale na prática?
              </Link>
            </li>
            <li>
              <Link href="/blog/vies-cognitivo-na-fisioterapia-erros-de-julgamento" className="text-teal-600 hover:underline">
                → Viés Cognitivo na Fisioterapia: Como Erros de Julgamento Podem Afetar o Diagnóstico Clínico
              </Link>
            </li>
            <li>
              <Link href="/blog/red-flags-na-fisioterapia" className="text-teal-600 hover:underline">
                → Red Flags na Fisioterapia: Quando a Dor Pode Indicar Algo Mais Grave?
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">As 5 Principais Yellow Flags na Fisioterapia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          As bandeiras amarelas podem se manifestar de diversas maneiras durante a anamnese e a avaliação física. Abaixo estão as cinco formas mais comuns encontradas na prática clínica:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-gray-950">1. Catastrofização da Dor (Pain Catastrophizing)</h3>
            <p className="mt-2 text-gray-700">
              Trata-se de uma resposta cognitiva e emocional negativa diante da dor, na qual o paciente amplifica a gravidade do sintoma, rumina excessivamente sobre o problema e sente-se totalmente desamparado.
            </p>
            <p className="mt-2 text-sm text-teal-700 font-medium">
              <strong>Manifestação na clínica:</strong> Pacientes que usam expressões exageradas como &quot;minha coluna está totalmente destruída&quot;, &quot;nunca mais vou conseguir andar sem dor&quot; ou &quot;esta dor está me matando por dentro&quot;.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-gray-950">2. Cinesiofobia (Medo do Movimento)</h3>
            <p className="mt-2 text-gray-700">
              É o medo irracional, excessivo e debilitante de realizar movimentos físicos ou exercícios, impulsionado pela crença de que mover-se causará novas lesões ou reativará o foco doloroso.
            </p>
            <p className="mt-2 text-sm text-teal-700 font-medium">
              <strong>Manifestação na clínica:</strong> Evitação extrema de flexionar o tronco ou levantar pequenos pesos, mesmo quando a estrutura biológica já está cicatrizada ou estável o suficiente para suportar a carga.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-gray-950">3. Crenças Inadequadas sobre Dor e Reabilitação</h3>
            <p className="mt-2 text-gray-700">
              O paciente acredita que a dor é sempre um indicador direto de dano estrutural progressivo e que repouso absoluto é a única forma de curar-se. Há também uma dependência excessiva de tratamentos puramente passivos (como massagens ou aparelhos de eletroterapia).
            </p>
            <p className="mt-2 text-sm text-teal-700 font-medium">
              <strong>Manifestação na clínica:</strong> O paciente recusa-se a realizar exercícios ativos porque acha que &quot;se está doendo, significa que o exercício está piorando a lesão estrutural&quot;.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-gray-950">4. Distress Emocional (Ansiedade e Depressão)</h3>
            <p className="mt-2 text-gray-700">
              A presença de níveis elevados de ansiedade generalizada, tristeza profunda ou depressão clínica altera significativamente o limiar de dor através do sistema nervoso central, resultando em hiperalgesia.
            </p>
            <p className="mt-2 text-sm text-teal-700 font-medium">
              <strong>Manifestação na clínica:</strong> Sintomas generalizados de dor difusa, distúrbios de sono frequentes, baixa adesão ao plano de tratamento doméstico e sensação constante de fadiga crônica.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-gray-950">5. Fatores Ocupacionais e Sociais</h3>
            <p className="mt-2 text-gray-700">
              A insatisfação com o ambiente de trabalho, conflitos familiares, litígios jurídicos pendentes (como processos de indenização de acidentes de trabalho) e a falta de uma rede de suporte social atuam como fortes moduladores da incapacidade funcional.
            </p>
            <p className="mt-2 text-sm text-teal-700 font-medium">
              <strong>Manifestação na clínica:</strong> Relutância em receber alta ou melhora lenta que coincide temporalmente com negociações trabalhistas ou disputas com companhias de seguro.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Questionários de Triagem Validados</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para evitar o viés subjetivo de simplesmente achar se o paciente possui ou não bandeiras amarelas, o fisioterapeuta deve utilizar ferramentas psicométricas validadas na literatura científica:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-3 font-bold text-gray-900">Instrumentos recomendados para avaliação</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>STarT Back Screening Tool:</strong> Divide pacientes com dor lombar em baixo, médio e alto risco de cronificação com base em apenas 9 perguntas (sendo 5 psicossociais).</li>
            <li><strong>Örebro Musculoskeletal Pain Questionnaire:</strong> Avalia o risco de afastamento de trabalho e cronificação de dores musculoesqueléticas gerais de forma abrangente.</li>
            <li><strong>Escala de Cinesiofobia de Tampa (TSK):</strong> Mede o nível de medo do movimento e de relesão por meio de questionário estruturado.</li>
            <li><strong>Escala de Catastrofização da Dor (PCS):</strong> Avalia aspectos como ruminação, ampliação e desesperança relacionados à experiência de dor.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Estratégias de Intervenção para o Clínico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Identificar as Yellow Flags é apenas metade do trabalho. Uma vez detectadas, a conduta clínica deve ser adaptada para além do tratamento mecânico convencional:
        </p>

        <div className="mb-8 space-y-4">
          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">1</span>
            <div>
              <strong className="text-gray-950">Educação em Neurociência da Dor (END):</strong> Explique ao paciente de forma didática que a dor é um sistema de alarme do corpo e nem sempre reflete dano tecidual ativo. Use metáforas claras para reduzir a ameaça percebida.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">2</span>
            <div>
              <strong className="text-gray-950">Exposição Gradual ao Movimento:</strong> Introduza movimentos temidos em posições confortáveis e seguras. Aumente progressivamente a amplitude e a carga para recondicionar o sistema nervoso e quebrar o ciclo de medo-evitação.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">3</span>
            <div>
              <strong className="text-gray-950">Foco em Autoeficácia e Autonomia:</strong> Reduza gradativamente as condutas passivas e delegue tarefas ativas de reabilitação doméstica para que o paciente retome a confiança no controle da própria saúde.
            </div>
          </div>
          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">4</span>
            <div>
              <strong className="text-gray-950">Encaminhamento Multidisciplinar:</strong> Pacientes identificados com alto risco (elevada ansiedade, depressão crônica ou catafalismo severo) devem ter acompanhamento compartilhado com psicólogos de abordagem cognitivo-comportamental.
            </div>
          </div>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas Frequentes sobre Yellow Flags</h2>
        <div className="mb-8 space-y-3">
          {[
            {
              q: "Qual a diferença real entre Red Flags e Yellow Flags?",
              a: "Red Flags (Bandeiras Vermelhas) são sinais de alerta para patologias médicas graves subjacentes (como fraturas, tumores, infecções ou síndromes neurológicas graves) que exigem encaminhamento médico imediato. Yellow Flags (Bandeiras Amarelas) representam barreiras psicossociais à recuperação e cronificação, indicando a necessidade de uma abordagem biopsicossocial do próprio fisioterapeuta.",
            },
            {
              q: "Como explicar os fatores psicossociais ao paciente sem que ele ache que estou invalidando a dor dele?",
              a: "Valide a dor do paciente desde o início, assegurando que ela é 100% real. Em seguida, use a analogia de que o cérebro funciona como um amplificador de som. Fatores como estresse, medo e noites mal dormidas funcionam como o botão de volume do amplificador, tornando o mesmo sinal elétrico físico muito mais barulhento e doloroso.",
            },
            {
              q: "Fisioterapeutas têm permissão legal/técnica para aplicar intervenções comportamentais?",
              a: "Sim. Abordagens baseadas em aconselhamento cognitivo, reasseguramento, exposição gradual e educação em dor fazem parte do escopo técnico da fisioterapia moderna baseada em evidências, não se confundindo com a prática exclusiva de psicoterapia clínica reservada aos psicólogos.",
            },
            {
              q: "Quando devo encaminhar o paciente a um profissional de saúde mental?",
              a: "O encaminhamento deve ocorrer quando a triagem por escalas específicas (como HAD ou PHQ-9) sugerir depressão clínica de moderada a grave, transtornos de ansiedade estruturados que impedem qualquer avanço funcional ou comportamento severo de automutilação ou ideação suicida.",
            },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Otimize a Avaliação Biopsicossocial dos Seus Pacientes</h2>
          <p className="mb-4 leading-relaxed">
            Identificar barreiras psicossociais de maneira sistemática e armazenar a evolução de questionários de dor e cinesiofobia é o que separa clínicas de alta performance das demais.
          </p>
          <p className="leading-relaxed">
            Com os prontuários customizáveis e centralizados da Kynesia, você pode registrar escalas de cinesiofobia, triagens do STarT Back e desfechos clínicos com poucos cliques. Tenha todo o histórico do paciente documentado de forma clara e profissional.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Sobre o autor</h3>
          <p className="text-gray-700">
            Este conteúdo foi produzido pela Equipe Kynesia, com foco em fornecer informações científicas, melhores práticas em raciocínio clínico e soluções de gestão digital para fisioterapeutas comprometidos com a evolução da profissão.
          </p>
        </div>
      </article>
    </main>
  );
}
