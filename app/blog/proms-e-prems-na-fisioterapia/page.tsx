import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/proms-e-prems-na-fisioterapia";

const faqItems = [
  {
    question: "O que significa PROMs e PREMs na fisioterapia?",
    answer: "PROMs são Medidas de Desfecho Relatadas pelo Paciente (focadas em dor, funcionalidade e qualidade de vida). PREMs são Medidas de Experiência Relatadas pelo Paciente (focadas no processo assistencial, como empatia, comunicação e infraestrutura)."
  },
  {
    question: "Quais são as escalas PROMs mais utilizadas na reabilitação?",
    answer: "As mais utilizadas variam conforme a região anatômica avaliada. Exemplos incluem o Oswestry (dor lombar), NDI (pescoço), DASH (membros superiores), WOMAC (artrose de joelho/quadril) e a escala LEFS (membros inferiores)."
  },
  {
    question: "Qual a diferença entre PREMs e pesquisas de satisfação tradicionais?",
    answer: "A pesquisa de satisfação mede o sentimento geral do paciente (ex: 'gostou do atendimento?'). O PREM investiga aspectos concretos da jornada assistencial, como se o terapeuta explicou as condutas de forma clara ou se o tempo de espera foi razoável."
  },
  {
    question: "Como o paciente responde a essas avaliações na prática?",
    answer: "Para otimizar o fluxo, o paciente pode responder de forma digital em um link enviado para o WhatsApp ou e-mail antes da avaliação (baseline) e após a alta, ou em um tablet disponibilizado na recepção da clínica."
  },
  {
    question: "É possível coletar PROMs e PREMs de forma automática?",
    answer: "Sim. A melhor forma é integrar as escalas ao prontuário eletrônico no software para fisioterapia da clínica. O próprio sistema automatiza o disparo das réguas de questionários e gera gráficos imediatos de evolução clínica."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "PROMs e PREMs na Fisioterapia: Por Que Você Deveria Medir Resultados dos Seus Pacientes?",
  description: "Descubra o papel dos PROMs e PREMs na fisioterapia. Aprenda a medir a experiência e os desfechos dos pacientes para uma prática baseada em evidências.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
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
  title: "PROMs e PREMs na Fisioterapia: Medindo Resultados",
  description: "Aprenda a aplicar PROMs e PREMs na fisioterapia. Entenda a importância de mensurar resultados de funcionalidade e a experiência do paciente na reabilitação.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "PROMs e PREMs na Fisioterapia: Medindo Resultados",
    description: "Aprenda a aplicar PROMs e PREMs na fisioterapia. Entenda a importância de mensurar resultados de funcionalidade e a experiência do paciente na reabilitação.",
    type: "article",
    url: pageUrl,
  },
};

export default function PromsPremsFisioterapiaPage() {
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
          <span className="font-medium text-teal-600">PROMs e PREMs</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            PROMs e PREMs na Fisioterapia: Por Que Você Deveria Medir Resultados dos Seus Pacientes?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Descubra como o uso conjunto de PROMs e PREMs na fisioterapia revoluciona a mensuração de resultados assistenciais e a percepção de valor dos tratamentos.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 19 Jun 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900 font-medium">
            Adotar os indicadores <strong>PROMs e PREMs na fisioterapia</strong> é um pilar da saúde baseada em valor. Integrar essas ferramentas na **avaliação fisioterapêutica** diária melhora a **mensuração de resultados** clínicos e documenta a real **experiência do paciente**, fortalecendo a **prática baseada em evidências**.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O mercado da saúde global está vivenciando uma mudança paradigmática. O modelo tradicional focado em volume de atendimentos (<em>fee-for-service</em>) está gradualmente perdendo espaço para a Saúde Baseada em Valor (<em>Value-Based Healthcare</em>). Sob essa nova ótica, o sucesso assistencial não é medido por quantas sessões de fisioterapia foram faturadas, mas pela qualidade do desfecho clínico entregue e pela percepção de cuidado do paciente.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Na reabilitação física, essa mensuração exige ferramentas estruturadas e validadas cientificamente. É aqui que entram os PROMs e PREMs. Muito mais do que siglas da literatura acadêmica, eles representam os instrumentos operacionais mais eficientes para justificar condutas, melhorar as taxas de retenção e elevar a autoridade científica da clínica no mercado.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que são PROMs (Patient-Reported Outcome Measures)?</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          PROMs são as <strong>Medidas de Desfecho Relatadas pelo Paciente</strong>. Em termos simples, são escalas e questionários padronizados por meio dos quais o paciente relata seu estado de saúde, intensidade dolorosa, limitações funcionais e qualidade de vida.
        </p>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          A grande vantagem dos PROMs é a ausência de viés clínico. Em vez de o fisioterapeuta registrar que o movimento melhorou, o próprio paciente responde a perguntas que avaliam, por exemplo, o impacto da dor em suas atividades diárias básicas (como calçar sapatos, subir degraus ou dormir).
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Exemplos clássicos de PROMs adaptados para o Brasil incluem o Índice de Incapacidade Oswestry (ODI) para dor lombar crônica, o questionário DASH para membros superiores e o escore WOMAC para osteoartrite de joelho.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/escalas-e-questionarios-validados-na-fisioterapia" className="text-teal-600 hover:underline">
                → Escalas e questionários validados na fisioterapia: quais utilizar
              </Link>
            </li>
            <li>
              <Link href="/blog/desfechos-clinicos-na-fisioterapia" className="text-teal-600 hover:underline">
                → Desfechos clínicos na fisioterapia: como mensurar a eficácia de sua conduta
              </Link>
            </li>
            <li>
              <Link href="/blog/indicadores-clinicos-na-fisioterapia" className="text-teal-600 hover:underline">
                → Indicadores clínicos na fisioterapia: métricas e dados cruciais
              </Link>
            </li>
            <li>
              <Link href="/blog/como-organizar-o-fluxo-de-atendimento-na-fisioterapia" className="text-teal-600 hover:underline">
                → Como organizar o fluxo de atendimento na clínica de fisioterapia
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que são PREMs (Patient-Reported Experience Measures)?</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          PREMs são as <strong>Medidas de Experiência Relatadas pelo Paciente</strong>. Ao contrário dos PROMs, que focam nos desfechos físicos de melhora clínica, os PREMs medem a percepção do paciente a respeito do processo assistencial em si.
        </p>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Não se trata de uma pesquisa de satisfação genérica de pontuação de 0 a 10. Os PREMs avaliam a jornada do paciente de maneira detalhada e estruturada:
        </p>

        <ul className="mb-8 list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Comunicação e Empatia:</strong> O fisioterapeuta ouviu com atenção as queixas e explicou as condutas de reabilitação sem termos técnicos excessivos?
          </li>
          <li>
            <strong>Respeito e Autonomia:</strong> O paciente teve espaço para expressar suas preferências no planejamento das metas do tratamento?
          </li>
          <li>
            <strong>Ambiente e Organização:</strong> O tempo de espera foi aceitável, o agendamento foi fluido e a clínica se mostrou limpa e organizada?
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que você deveria medir PROMs e PREMs em sua clínica?</h2>
        
        <p className="mb-8 leading-relaxed text-gray-700">
          Adotar de forma conjunta essas ferramentas na rotina de atendimentos traz diferenciais estratégicos decisivos para o consultório ou clínica:
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Consolida a Prática Baseada em Evidências",
              desc: "A Prática Baseada em Evidências (PBE) é composta pelo tripé: melhor literatura científica, experiência do clínico e preferências do paciente. Os PROMs fornecem dados estruturados sobre a dor e funcionalidade específicos sob a visão do próprio paciente, alinhando perfeitamente a conduta com as metas reais da pessoa.",
            },
            {
              num: "02",
              title: "Eleva drasticamente as Taxas de Retenção",
              desc: "Muitos pacientes abandonam o tratamento prematuramente ao sentirem os primeiros alívios de dor, embora a reabilitação funcional não esteja concluída. Apresentar gráficos objetivos mostrando que o score funcional ainda está distante da linha de segurança previne abandonos e aumenta a adesão ao plano de tratamento completo.",
            },
            {
              num: "03",
              title: "Facilita a Parceria e Encaminhamento de Médicos",
              desc: "Médicos especialistas valorizam relatórios de alta objetivos baseados em dados numéricos claros (ex: melhora de 38% no Oswestry). Demonstrar a resolutividade de sua reabilitação em dados técnicos diferencia seu atendimento e fortalece a reputação da clínica com médicos parceiros.",
            },
            {
              num: "04",
              title: "Profissionaliza os Indicadores Clínicos de Gestão",
              desc: "Ao compilar esses dados, o gestor de fisioterapia obtém métricas gerais de eficácia clínica da equipe de terapeutas, identifica quais protocolos de tratamento geram melhores desfechos em menos sessões e pode otimizar a infraestrutura operacional da clínica."
            }
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Vantagem {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como implementar a coleta na rotina clínica sem burocracia?</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          A resistência clássica para a não aplicação de escalas e questionários validados é a desorganização operacional. Fazer o cálculo aritmético manual e arquivar papéis de questionários consome tempo valioso de atendimento do fisioterapeuta.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A automação tecnológica por meio de um **software para fisioterapia** especializado remove essa fricção assistencial. O sistema de gestão pode automatizar réguas de e-mails ou mensagens por WhatsApp enviando links de preenchimento dos questionários aos pacientes na véspera da consulta, gerando o cálculo automático dos scores funcionais e plotando gráficos instantâneos diretamente no prontuário eletrônico.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: O Futuro da Reabilitação Focada no Paciente</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Mensurar desfechos clínicos por meio de PROMs e auditar a experiência assistencial com PREMs posiciona seu consultório ou clínica no patamar mais elevado da fisioterapia contemporânea.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Colocar a percepção do paciente de forma mensurável no centro da tomada de decisões clínicas traz segurança assistencial, resolutividade comprovada, atração de parceiros e a certeza científica de que seu trabalho clínico está promovendo saúde e devolvendo autonomia de verdade na vida das pessoas.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
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
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide">RESUMO CLÍNICO</h2>
          <p className="mb-4 leading-relaxed">
            PROMs focam em medir desfechos de saúde (funcionalidade, dor) a partir da percepção do paciente, sem interpretação assistencial intermediária.
          </p>
          <p className="mb-4 leading-relaxed">
            PREMs investigam de maneira detalhada e estruturada a qualidade do processo assistencial (comunicação, tempo de espera, infraestrutura).
          </p>
          <p className="leading-relaxed">
            A integração e automação digital dessas coletas em softwares clínicos reduzem a burocracia manual, gerando gráficos de evolução que aumentam a retenção do paciente.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">EQUIPE KYNESIA</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidências desenvolvido para fisioterapeutas, estudantes e gestores que buscam aprimorar sua prática profissional por meio da tecnologia, gestão clínica e atualização científica contínua.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
