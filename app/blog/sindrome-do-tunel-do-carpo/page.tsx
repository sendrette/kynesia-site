import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/sindrome-do-tunel-do-carpo";

const faqItems = [
  {
    question: "É possível tratar síndrome do túnel do carpo sem cirurgia?",
    answer:
      "Sim. Muitos casos leves a moderados respondem bem a tratamento conservador, que inclui educação, modificação de atividades, órteses e fisioterapia. A cirurgia costuma ser considerada quando há déficit persistente, piora clínica ou sinais de compressão importante.",
  },
  {
    question: "Síndrome do túnel do carpo sempre causa dor no punho?",
    answer:
      "Não necessariamente. Alguns pacientes relatam mais formigamento nas mãos, dormência noturna e perda de força do que dor localizada. O quadro pode variar bastante conforme gravidade e tempo de evolução.",
  },
  {
    question: "Qual exame confirma o diagnóstico?",
    answer:
      "A eletroneuromiografia é o exame complementar mais usado para confirmar a compressão do nervo mediano e graduar a gravidade. Ainda assim, o diagnóstico começa pela avaliação clínica e pela história do paciente.",
  },
  {
    question: "Fisioterapia para túnel do carpo funciona?",
    answer:
      "Sim. A fisioterapia pode ajudar no controle da dor, melhora da função, redução de sintomas e retomada de atividades, principalmente quando integrada a educação, ajuste de carga, órteses e exercícios bem indicados.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Síndrome do Túnel do Carpo: sintomas, diagnóstico e tratamento baseado em evidências",
  description:
    "Entenda a síndrome do túnel do carpo, seus sintomas, diagnóstico e tratamento baseado em evidências na fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
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
  title: "Síndrome do túnel do carpo: sintomas e tratamento",
  description:
    "Entenda a síndrome do túnel do carpo, seus sintomas, diagnóstico e tratamento baseado em evidências na fisioterapia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Síndrome do túnel do carpo: sintomas e tratamento",
    description:
      "Guia clínico sobre síndrome do túnel do carpo: sintomas, diagnóstico, testes clínicos e tratamento baseado em evidências.",
    type: "article",
    url: pageUrl,
  },
};

export default function SindromeDoTunelDoCarpoPage() {
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
          <span className="font-medium text-teal-600">Síndrome do túnel do carpo</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia e neurologia periférica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Síndrome do Túnel do Carpo: sintomas, diagnóstico e tratamento baseado em evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda como reconhecer a compressão do nervo mediano, interpretar os principais testes e conduzir o tratamento com base em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>29 Mai 2026</span>
            <span>⏱ 14 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é a síndrome do túnel do carpo?</strong> É a compressão do nervo mediano ao passar pelo túnel do carpo, no punho, causando formigamento nas mãos, dor e redução funcional.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>síndrome do túnel do carpo</strong> é uma das causas mais frequentes de <strong>dor no punho</strong>, formigamento nas mãos e perda de destreza manual. Na prática clínica, ela aparece tanto em pacientes com sobrecarga ocupacional quanto em pessoas com condições metabólicas ou alterações estruturais que favorecem a compressão do nervo mediano. Por isso, reconhecer o quadro cedo faz diferença para definir o melhor <strong>tratamento síndrome do túnel do carpo</strong> e evitar progressão dos sintomas.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Para o fisioterapeuta, compreender o mecanismo da lesão, o valor dos testes clínicos e o papel da eletroneuromiografia é essencial para uma decisão mais segura. Já para o paciente, entender o quadro ajuda a interpretar os sintomas e a participar de forma mais ativa do tratamento.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/sindrome-do-tunel-do-carpo</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática baseada em evidências na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/indicadores-clinicos-na-fisioterapia" className="text-teal-600 hover:underline">
                → Indicadores clínicos na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/prontuario-eletronico-na-fisioterapia-vantagens-reais" className="text-teal-600 hover:underline">
                → Prontuário eletrônico na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-clinica-em-fisioterapia-guia-completo-2026" className="text-teal-600 hover:underline">
                → Gestão clínica em fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/sistema-para-fisioterapeutas-como-escolher-o-ideal" className="text-teal-600 hover:underline">
                → Sistema para fisioterapeutas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é a síndrome do túnel do carpo?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O túnel do carpo é um canal anatômico estreito localizado na face palmar do punho. Ele é formado pelos ossos do carpo e pelo ligamento transverso do carpo. Dentro desse espaço passam os tendões flexores dos dedos e o nervo mediano. Quando a pressão interna aumenta, o nervo perde capacidade de deslizamento e condução, gerando parestesia, dor e piora funcional.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          O nervo mediano é responsável por sensibilidade do polegar, indicador, dedo médio e metade radial do anelar, além de participação motora em músculos da eminência tenar. Essa distribuição ajuda a explicar por que o paciente costuma relatar <strong>formigamento nas mãos</strong>, especialmente à noite ou em atividades com punho mantido em flexão ou extensão prolongadas.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Principais sintomas</h2>
        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Formigamento</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O sintoma mais clássico é parestesia nos três primeiros dedos e metade radial do anelar. Esse formigamento costuma piorar à noite, ao dirigir, segurar telefone ou manter o punho em posição sustentada.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Dormência nos dedos</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A dormência pode ocorrer de forma intermitente no início e tornar-se mais persistente com a evolução do quadro. Quando o sintoma é frequente, o paciente pode acordar para movimentar a mão em busca de alívio.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Dor no punho</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A <strong>dor no punho</strong> nem sempre é intensa, mas pode aparecer como desconforto difuso na face volar da mão, irradiando para antebraço e dificultando tarefas repetitivas. A dor costuma coexistir com queixas sensitivas.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Fraqueza de preensão</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Com a progressão da compressão do nervo mediano, pode haver redução de força de pinça e preensão, especialmente em atividades finas, como abotoar roupa, segurar objetos pequenos ou abrir potes.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Perda funcional</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A perda funcional é consequência da dor, da parestesia e da fraqueza. Em estágios mais avançados, a atrofia tenar pode surgir, indicando compressão mais importante e maior necessidade de avaliação aprofundada.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais fatores aumentam o risco?</h2>
        <ul className="mb-5 space-y-3 leading-relaxed text-gray-700">
          <li>• Trabalho repetitivo com as mãos e punhos</li>
          <li>• Uso prolongado de computador ou atividades manuais intensas</li>
          <li>• Condições metabólicas, como diabetes e hipotireoidismo</li>
          <li>• Alterações hormonais, especialmente em algumas fases da vida adulta</li>
          <li>• Obesidade</li>
          <li>• Idade mais avançada</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Esses fatores não agem isoladamente. Muitas vezes, o quadro surge da combinação de susceptibilidade individual, carga mecânica repetida e períodos prolongados sem recuperação adequada.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como é realizado o diagnóstico?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O diagnóstico começa pela história do paciente. Horário de piora, distribuição dos sintomas, tarefas que desencadeiam a queixa e impacto funcional já fornecem pistas importantes. Em seguida, o exame físico ajuda a confirmar a suspeita e a diferenciar de outras causas de parestesia, como radiculopatias cervicais e neuropatias periféricas distintas.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A avaliação clínica inclui inspeção, teste de sensibilidade, força muscular e provocação de sintomas com manobras específicas. Quando há dúvida diagnóstica, sintomas persistentes ou sinais de maior gravidade, a eletroneuromiografia é útil para confirmar a <strong>compressão do nervo mediano</strong> e graduar sua intensidade.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais testes clínicos possuem melhor utilidade?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Os testes especiais não devem ser usados isoladamente. Sua utilidade cresce quando interpretados em conjunto com a história clínica e com a observação da resposta funcional do paciente.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Teste de Phalen</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O paciente mantém os punhos em flexão por cerca de 60 segundos. A reprodução de formigamento nos territórios do nervo mediano sugere irritação compatível com a síndrome.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Teste de Phalen reverso</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Nesse caso, o punho permanece em extensão. A manutenção da posição pode provocar os sintomas em pacientes sensíveis à compressão do túnel do carpo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Teste de Tinel</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A percussão sobre o trajeto do nervo mediano pode gerar parestesia em pacientes com maior irritabilidade neural. Embora simples, o teste sozinho não confirma o diagnóstico.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Teste de compressão carpal</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A compressão direta sobre o túnel do carpo também pode reproduzir sintomas. Em muitos casos, esse teste complementa melhor a avaliação quando combinado com outros achados.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          A melhor prática é usar clusters diagnósticos. Quando sinais e testes convergem, a probabilidade clínica aumenta. Esse raciocínio é mais seguro do que confiar em uma única manobra provocativa.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que as evidências científicas mostram sobre o tratamento?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>tratamento síndrome do túnel do carpo</strong> deve considerar gravidade, tempo de sintomas e impacto funcional. Em quadros leves e moderados, a literatura apoia estratégias conservadoras antes de avançar para intervenções invasivas.
        </p>
        <ul className="mb-5 space-y-3 leading-relaxed text-gray-700">
          <li><strong>Educação do paciente:</strong> explicar a condição, os fatores que agravam os sintomas e a lógica do tratamento melhora adesão.</li>
          <li><strong>Controle de carga:</strong> ajustar tempo, intensidade e postura das atividades reduz irritação do nervo.</li>
          <li><strong>Órteses:</strong> especialmente em uso noturno, podem reduzir a flexão sustentada do punho e aliviar sintomas.</li>
          <li><strong>Exercícios terapêuticos:</strong> devem ser individualizados e progressivos, com foco funcional e tolerância tecidual.</li>
          <li><strong>Mobilização neural:</strong> pode ser útil em alguns casos, desde que aplicada com critério e sem exacerbar a dor.</li>
          <li><strong>Modificações ergonômicas:</strong> ajudam a reduzir exposição à carga repetitiva e sustentada.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          A cirurgia costuma ser considerada quando há falha do tratamento conservador, déficit motor importante, perda funcional progressiva ou sinais de compressão significativa confirmada por avaliação clínica e exames complementares. Não se trata de primeira escolha para todos os pacientes.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O papel da fisioterapia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>fisioterapia para túnel do carpo</strong> tem papel importante no manejo da dor, da função e do retorno às atividades. O atendimento não se limita a recursos analgésicos. Ele envolve raciocínio clínico, reeducação de uso da mão, ajuste de carga e acompanhamento da resposta ao tratamento.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em muitos casos, o fisioterapeuta ajuda o paciente a reduzir comportamentos que pioram a compressão, melhorar o uso do punho nas tarefas diárias e retomar função com progressão segura. A evolução precisa ser monitorada de forma objetiva, porque sintomas sensitivos podem oscilar mesmo quando a função já está melhorando.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Síndrome do túnel do carpo tem cura?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Em muitos casos, os sintomas podem melhorar bastante com tratamento conservador e ajuste de fatores agravantes. O desfecho depende da gravidade, do tempo de evolução e da resposta individual ao cuidado.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Como saber se tenho túnel do carpo?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Formigamento nos dedos inervados pelo nervo mediano, dormência noturna, dor no punho e perda de força são sinais sugestivos. A confirmação exige avaliação clínica profissional e, em alguns casos, exame complementar.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Qual exame confirma o diagnóstico?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                A eletroneuromiografia é o exame mais utilizado para confirmar e graduar a compressão do nervo mediano. Ela complementa, mas não substitui, a avaliação clínica.
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
            A síndrome do túnel do carpo exige avaliação individualizada, raciocínio clínico e uma leitura cuidadosa dos sintomas, testes e fatores de risco. O tratamento baseado em evidências costuma priorizar educação, ajuste de carga, órteses e fisioterapia, reservando a cirurgia para situações específicas.
          </p>
          <p className="leading-relaxed text-gray-700">
            Quando a decisão clínica é guiada por evidência e contexto, o manejo do paciente se torna mais seguro, consistente e funcional. Esse é o ponto central para lidar bem com a síndrome do túnel do carpo.
          </p>
        </section>
      <PatientCTA />

      </article>
    </main>
  );
}
