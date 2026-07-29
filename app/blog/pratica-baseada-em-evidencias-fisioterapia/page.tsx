import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/pratica-baseada-em-evidencias-fisioterapia";

const faqItems = [
  {
    question: "Todo tratamento fisioterapêutico precisa ter evidência científica?",
    answer:
      "Nem toda intervenção precisa ter o mesmo nível de evidência, mas a escolha clínica deve ser guiada pelo melhor conhecimento disponível, pela experiência do profissional e pelo contexto do paciente. Quando a evidência é limitada, o raciocínio clínico se torna ainda mais importante.",
  },
  {
    question: "Como saber se um artigo científico é confiável?",
    answer:
      "Observe o tipo de estudo, o tamanho da amostra, a clareza dos métodos, a consistência dos resultados e o risco de viés. Revisões sistemáticas, ensaios clínicos bem conduzidos e diretrizes de sociedades científicas costumam ter maior peso na decisão clínica.",
  },
  {
    question: "Protocolos prontos servem para todos os pacientes?",
    answer:
      "Não. Protocolos são úteis como referência, mas não substituem a avaliação individual. O mesmo diagnóstico pode exigir condutas diferentes conforme dor, função, comorbidades, expectativas e contexto de vida do paciente.",
  },
  {
    question: "A tecnologia pode ajudar na prática baseada em evidências?",
    answer:
      "Sim. Sistemas digitais ajudam a organizar informações, registrar evolução, aplicar questionários validados e acompanhar resultados. Isso facilita a tomada de decisão baseada em dados e reduz perdas de informação na rotina clínica.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prática baseada em evidências na fisioterapia: como aplicar na rotina clínica",
  description:
    "Entenda a prática baseada em evidências na fisioterapia e veja como aplicar o método na rotina clínica com mais segurança e clareza.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  image: "https://kynesia.com.br/blog/avaliacao-clinica.svg",
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
  title: "Prática baseada em evidências na fisioterapia | Kynesia",
  description:
    "Entenda a prática baseada em evidências na fisioterapia e veja como aplicar o método na rotina clínica com mais segurança e clareza.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Prática baseada em evidências na fisioterapia | Kynesia",
    description:
      "Veja como aplicar a prática baseada em evidências na fisioterapia com raciocínio clínico, tecnologia e tomada de decisão mais segura.",
    type: "article",
    url: pageUrl,
  },
};

export default function PraticaBaseadaEmEvidenciasPage() {
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
          <span className="font-medium text-teal-600">Prática baseada em evidências na fisioterapia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Raciocínio clínico
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Prática baseada em evidências na fisioterapia: como aplicar na rotina clínica
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda como transformar evidência científica em decisão clínica, com mais segurança, contexto e qualidade no atendimento.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 26 Mai 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Prática baseada em evidências na fisioterapia</strong> é a integração entre a melhor evidência científica disponível, a experiência clínica do fisioterapeuta e os valores e preferências do paciente.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>prática baseada em evidências na fisioterapia</strong> não é um conceito teórico distante da rotina. Ela está presente nas decisões que o fisioterapeuta toma todos os dias: quando escolhe um teste, quando define um exercício, quando reavalia uma resposta ao tratamento e quando explica ao paciente o que faz sentido para o caso. Aplicar esse raciocínio de forma consistente melhora a qualidade do atendimento e reduz condutas guiadas apenas por hábito ou repetição.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Na prática, falar em <strong>fisioterapia baseada em evidências</strong> é assumir que nenhuma decisão clínica deve depender de um único elemento. A literatura científica orienta, a experiência clínica filtra o que é viável e o paciente ajuda a definir o que é realmente aplicável naquele contexto. É essa combinação que sustenta uma tomada de decisão clínica mais sólida.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/pratica-baseada-em-evidencias-fisioterapia</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/ia-na-fisioterapia-como-a-tecnologia-esta-mudando-clinicas" className="text-teal-600 hover:underline">
                → IA na fisioterapia: como a tecnologia está mudando clínicas
              </Link>
            </li>
            <li>
              <Link href="/blog/evolucao-fisioterapica-como-fazer-corretamente" className="text-teal-600 hover:underline">
                → Evolução fisioterapêutica: como fazer corretamente
              </Link>
            </li>
            <li>
              <Link href="/blog/prontuario-eletronico-na-fisioterapia-vantagens-reais" className="text-teal-600 hover:underline">
                → Prontuário eletrônico na fisioterapia: vantagens reais
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-clinica-em-fisioterapia-guia-completo-2026" className="text-teal-600 hover:underline">
                → Gestão clínica em fisioterapia: guia completo 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/sistema-para-fisioterapeutas-como-escolher-o-ideal" className="text-teal-600 hover:underline">
                → Sistema para fisioterapeutas: como escolher o ideal
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é prática baseada em evidências na fisioterapia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O conceito surgiu para reduzir decisões arbitrárias e aproximar a clínica do conhecimento científico confiável. Na fisioterapia, isso significa escolher intervenções com base em estudos relevantes, mas sem perder a leitura do caso individual. Não se trata de seguir publicações de forma mecânica. Trata-se de usar a melhor informação disponível para orientar a conduta com responsabilidade.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando o profissional entende esse princípio, consegue diferenciar opinião pessoal, tradição de serviço e evidência com valor real. Isso ajuda a evitar exageros, modismos e interpretações simplistas de resultados científicos.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que a fisioterapia baseada em evidências é importante?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A importância é prática. Uma atuação orientada por evidências melhora a segurança clínica, fortalece a justificativa das condutas e reduz o risco de intervenções sem fundamento. Também favorece comunicação mais clara com o paciente, porque o raciocínio deixa de ser baseado apenas em autoridade e passa a ser explicado com critérios.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em ambientes com muitos atendimentos, a <strong>tomada de decisão clínica fisioterapia</strong> precisa ser ágil e consistente. Quando o profissional sabe buscar e interpretar evidências, ele decide melhor sob pressão, documenta melhor o que fez e acompanha o resultado com mais precisão. Isso fortalece a gestão clínica fisioterapia e melhora a qualidade do serviço.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Os três pilares da prática baseada em evidências</h2>
        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Melhor evidência científica disponível</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O primeiro pilar é o conhecimento científico. Aqui entram revisões sistemáticas, ensaios clínicos, diretrizes e estudos observacionais quando for o caso. O ponto central não é acumular artigos, mas identificar qual evidência responde melhor à pergunta clínica formulada. Nem todo estudo tem o mesmo peso, e isso muda completamente a interpretação.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Experiência clínica do fisioterapeuta</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A experiência clínica não é opinião solta. Ela representa a capacidade de reconhecer padrões, perceber respostas ao tratamento e fazer ajustes com base no que acontece na consulta. Um fisioterapeuta experiente consegue interpretar a evidência com mais nuance, porque sabe o que faz sentido na rotina real e o que não se sustenta na prática.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Preferências, contexto e valores do paciente</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O terceiro pilar é frequentemente subestimado. O paciente não é um receptor passivo de protocolo. Sua rotina, medo, expectativa, condição social, adesão e objetivo terapêutico influenciam a escolha da conduta. Quando esse contexto é ignorado, mesmo uma intervenção bem sustentada pode fracassar por baixa adesão ou desalinhamento de expectativas.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como aplicar a prática baseada em evidências na rotina clínica</h2>
        <div className="mb-6 space-y-5">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">1. Formular uma pergunta clínica</h3>
            <p className="leading-relaxed text-gray-700">
              Tudo começa com uma dúvida bem construída. Em vez de procurar evidência de forma ampla e desorganizada, o fisioterapeuta deve transformar o caso em pergunta objetiva. Isso pode ser feito mentalmente ou com modelos como PICO, que ajudam a definir população, intervenção, comparação e desfecho.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">2. Buscar evidências confiáveis</h3>
            <p className="leading-relaxed text-gray-700">
              A busca deve privilegiar bases confiáveis e fontes secundárias de boa qualidade. Revisões sistemáticas e diretrizes clínicas costumam ser mais úteis para consulta rápida, enquanto estudos primários ajudam quando a pergunta é muito específica.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">3. Avaliar a qualidade dos estudos</h3>
            <p className="leading-relaxed text-gray-700">
              Ler um artigo não é o mesmo que avaliar sua confiabilidade. É preciso observar método, risco de viés, consistência dos resultados e aplicabilidade. Um estudo elegante, mas fraco metodologicamente, não deve orientar uma conduta sozinho.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">4. Aplicar ao contexto do paciente</h3>
            <p className="leading-relaxed text-gray-700">
              Mesmo uma evidência robusta precisa ser filtrada pela realidade clínica. Idade, dor, função, fase da condição, comorbidades e preferências alteram a decisão. É aqui que a tomada de decisão clínica fisioterapia se torna realmente individualizada.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">5. Monitorar resultados</h3>
            <p className="leading-relaxed text-gray-700">
              A conduta só se completa quando é acompanhada de reavaliação. Escalas, questionários, testes funcionais e registros de evolução ajudam a verificar se a intervenção produziu o efeito esperado. Sem monitoramento, não há aprendizado clínico consistente.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Erros comuns na interpretação de evidências</h2>
        <ul className="mb-5 space-y-3 leading-relaxed text-gray-700">
          <li>• Usar apenas experiência pessoal e desconsiderar a literatura disponível.</li>
          <li>• Tratar qualquer estudo como se fosse evidência forte, sem olhar método e contexto.</li>
          <li>• Ignorar a individualidade do paciente em nome de uma aplicação padronizada.</li>
          <li>• Seguir modismos terapêuticos sem análise crítica.</li>
          <li>• Confundir evidência com protocolo rígido e imutável.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Esses erros enfraquecem a prática e podem produzir uma falsa sensação de segurança. A evidência precisa ser lida com maturidade, e não como argumento de autoridade.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Prática baseada em evidências e raciocínio clínico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A evidência científica não substitui o raciocínio clínico fisioterapia. Ela o qualifica. Isso significa que a decisão final continua dependendo da capacidade de analisar sinais, interpretar dados, construir hipóteses e adaptar a conduta à resposta do paciente. A literatura indica caminhos; o raciocínio clínico escolhe qual caminho faz sentido naquele caso.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Na rotina real, essa combinação evita dois extremos igualmente problemáticos: o excesso de improviso e a aplicação cega de protocolo. O melhor cuidado costuma surgir no meio do caminho, onde ciência e contexto se encontram.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tecnologia e inteligência artificial na fisioterapia baseada em evidências</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tecnologia na fisioterapia pode facilitar a aplicação desse modelo quando ajuda o profissional a registrar dados, organizar a evolução e recuperar informações com rapidez. Plataformas digitais também podem apoiar o uso de questionários validados, acompanhar desfechos e estruturar o prontuário de forma mais útil para análise clínica.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Nesse ponto, soluções como o Kynesia funcionam como exemplo de gestão clínica voltada ao trabalho do fisioterapeuta. Ao centralizar prontuário, agenda, evolução e recursos de apoio, a plataforma reduz ruído operacional e melhora a leitura do caso ao longo do tempo. Quando bem usada, a tecnologia não substitui o julgamento profissional; ela ajuda a organizá-lo.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A inteligência artificial na fisioterapia também pode contribuir quando é aplicada como suporte à organização das informações e à identificação de padrões, sempre com supervisão humana. O ganho real está em liberar tempo para o que exige interpretação clínica, contato com o paciente e decisão cuidadosa.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">1. O que significa fisioterapia baseada em evidências?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Significa tomar decisões clínicas com base na melhor evidência científica disponível, na experiência do fisioterapeuta e nos valores do paciente. É uma forma de alinhar ciência, contexto e prática real.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">2. Como o fisioterapeuta pode aplicar evidências na prática?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                O caminho mais eficiente é formular uma pergunta clínica, buscar fontes confiáveis, interpretar a qualidade dos estudos, adaptar a informação ao caso e reavaliar os resultados ao longo do tratamento.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">3. A evidência científica substitui a experiência clínica?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Não. A experiência clínica continua essencial para interpretar a literatura e ajustar a conduta ao paciente. A evidência orienta; a experiência ajuda a decidir como aplicar.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
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
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Conclusão</h2>
          <p className="mb-5 leading-relaxed text-gray-700">
            A prática baseada em evidências melhora a qualidade da fisioterapia porque reduz achismos, fortalece o raciocínio clínico e organiza a tomada de decisão. Na prática cotidiana, ela ajuda o fisioterapeuta a agir com mais segurança, justificar melhor suas escolhas e oferecer um cuidado mais alinhado às necessidades reais do paciente.
          </p>
          <p className="leading-relaxed text-gray-700">
            Em um cenário que exige precisão, documentação e atualização constante, adotar a prática baseada em evidências na fisioterapia é um passo importante para atuar de forma mais ética, segura e profissional.
          </p>
        </section>
      <PatientCTA />

      </article>
    </main>
  );
}
