import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/alongamento-previne-lesoes-o-que-dizem-as-evidencias";

const faqItems = [
  {
    question: "Alongamento pré-exercício previne lesões?",
    answer: "As evidências mostram que o alongamento isolado (estático) antes do exercício NÃO reduz consistentemente a incidência de lesões. Programas que combinam aquecimento dinâmico, fortalecimento e manejo de carga têm mais apoio científico para prevenção." 
  },
  {
    question: "Que tipo de alongamento é mais indicado no contexto esportivo?",
    answer: "Alongamento dinâmico é preferível no aquecimento antes da atividade, pois prepara a amplitude de movimento sem reduzir performance; o alongamento estático pode ser reservado para recuperação ou melhora de mobilidade fora do aquecimento ativo." 
  },
  {
    question: "Alongamento após o exercício reduz dor muscular tardia (DOMS)?",
    answer: "Revisões sistemáticas mostram pouco ou nenhum efeito do alongamento isolado para reduzir o DOMS. Estratégias de progressão de carga e recuperação ativa mostram resultados mais consistentes." 
  },
  {
    question: "Devo prescrever alongamento para pacientes com limitação de movimento?",
    answer: "Sim — quando existe limitação de amplitude que prejudica função, alongamento e mobilização articular, combinados com exercício de força e controle motor, são adequados. O plano deve ser individualizado e orientado por avaliação clínica." 
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alongamento Previne Lesões? O Que Dizem as Evidências?",
  description: "Revisão prática e baseada em evidências sobre o papel do alongamento na prevenção de lesões: quando faz sentido, que tipo utilizar e como integrar alongamento a programas de força e controle.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  image: "https://kynesia.com.br/blog/alongamento-previne-lesoes.jpg",
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
  title: "Alongamento Previne Lesões? O Que Dizem as Evidências?",
  description: "Entenda o papel do alongamento na prevenção de lesões: síntese das revisões sistemáticas, recomendações práticas e integração com força e manejo de carga.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Alongamento Previne Lesões? O Que Dizem as Evidências?",
    description: "Entenda o papel do alongamento na prevenção de lesões: síntese das revisões sistemáticas, recomendações práticas e integração com força e manejo de carga.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/alongamento-previne-lesoes.jpg",
        width: 1200,
        height: 800,
        alt: "Alongamento prevenindo lesões? Evidências e recomendações para fisioterapeutas",
      },
    ],
  },
};

export default function AlongamentoPrevineLesoesPage() {
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
          <span className="font-medium text-teal-600">Desempenho e Mobilidade</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Desempenho e Mobilidade
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Alongamento Previne Lesões? O Que Dizem as Evidências?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Síntese crítica das melhores evidências sobre alongamento e prevenção de lesões, com recomendações práticas para fisioterapeutas e estudantes.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 20 Jul 2026</span>
            <span>⏱ 12 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Featured Image inside the Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/alongamento-previne-lesoes.jpg"
            alt="Alongamento previne lesões? Profissional realizando alongamento sentado no chão"
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
            O alongamento isolado <strong>não é uma estratégia comprovada</strong> para reduzir a incidência de lesões. A literatura atual favorece programas que combinam aquecimento dinâmico, fortalecimento, controle motor e progressão adequada de carga como medidas de prevenção mais eficazes.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O alongamento é uma prática amplamente difundida na rotina pré e pós-exercício, mas sua eficácia como medida isolada de prevenção é controversa. Neste artigo, revisamos as principais evidências e traduzimos o conhecimento para recomendações clínicas aplicáveis em consultórios e clínicas de fisioterapia.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Nosso objetivo é oferecer uma visão prática: quando prescrever alongamento, que tipo utilizar, como combinar com programas de força e controle motor, e como comunicar essas decisões aos pacientes de forma baseada em evidências.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e Carga Progressiva: Princípios e Aplicação
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática Baseada em Evidências na Fisioterapia: Como Aplicar
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no Ombro ao Levantar o Braço: Avaliação e Tratamento
              </Link>
            </li>
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação Pós-operatória de Joelho: Diretrizes Práticas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">1. O que as revisões sistemáticas mostram?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões sistemáticas e meta-análises históricas (p.ex., Thacker et al., 2004) e trabalhos mais recentes (Lauersen et al., 2014; Behm et al., 2016) demonstram que o alongamento isolado não reduz de forma consistente o risco global de lesões esportivas. Em síntese:
        </p>

        <ul className="mb-8 list-inside list-disc text-gray-700">
          <li>Meta-análises mostram efeitos nulos ou muito pequenos do alongamento estático na prevenção de lesões.</li>
          <li>Programas que combinam fortalecimento, controle motor e progressão de carga apresentam maiores reduções de lesões.</li>
          <li>Alongamento dinâmico dentro do aquecimento melhora amplitude e pode ter benefícios funcionais imediatos sem prejuízo de performance.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Tipos de alongamento e aplicações clínicas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          É importante distinguir entre modalidades:
        </p>

        <div className="mb-8 space-y-6">
          {[
            { title: "Alongamento Estático", desc: "Sustentação passiva de posição por 15-60s. Pouca evidência de prevenção de lesões; pode reduzir momentoiramente a força se realizado imediatamente antes do esforço máximo." },
            { title: "Alongamento Dinâmico", desc: "Movimentos controlados que levam a articulação por uma amplitude ativa. Recomendado no aquecimento para preparar a amplitude e a ativação neuromuscular." },
            { title: "PNF (Facilitação Neuromuscular Proprioceptiva)", desc: "Técnica com contração e alongamento; útil quando o objetivo é ganho de amplitude em pacientes selecionados, mas exige supervisão e integração com exercícios de força." },
            { title: "Alongamento Pós-exercício", desc: "Pode ser usado para manutenção de mobilidade; evidência limitada para redução de DOMS ou prevenção de lesões quando usado isoladamente." }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">{item.title}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="leading-relaxed text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Tabelas Comparativas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Tabela comparativa rápida entre estratégias frequentemente prescritas como prevenção de lesões.
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Intervenção</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Efeito na prevenção (evidência)</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900 text-teal-700">Recomendação prática</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Alongamento Estático</td>
                <td className="px-6 py-4 text-gray-700">Efeito inconsistente; meta-análises mostram pouca redução de lesões.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Usar fora do aquecimento para mobilidade; combinar com força.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Alongamento Dinâmico (aquecimento)</td>
                <td className="px-6 py-4 text-gray-700">Melhora ROM e pode melhorar prontidão neuromuscular; evidência de prevenção indireta.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Incluir como parte do aquecimento funcional.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Treino de Força (progressivo)</td>
                <td className="px-6 py-4 text-gray-700">Evidência robusta de redução de lesões quando bem dosado.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Priorizar em programas preventivos; integrar força e potência.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Manejo de Carga e Controle Motor</td>
                <td className="px-6 py-4 text-gray-700">Fortemente associado à redução de recidiva e lesões por sobrecarga.</td>
                <td className="px-6 py-4 text-teal-700 font-bold">Individualizar progressão de carga; monitorar volume e intensidade.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">4. Comparações Clínicas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Clinicamente, a decisão entre prescrever alongamento, exercícios de força ou ambos depende de diagnóstico e objetivos:
        </p>

        <ul className="mb-8 list-inside list-decimal text-gray-700">
          <li>
            Paciente com encurtamento funcional e limitação de ROM: priorizar avaliação de causas (tensão muscular vs articular) e usar alongamento progressivo + fortalecimento excêntrico quando indicado.
          </li>
          <li>
            Paciente com história de lesão por sobrecarga: focar em controle de carga e programa de força; o alongamento pode auxiliar na recuperação de amplitude quando necessário.
          </li>
          <li>
            Atleta com necessidade de potência/explosão: evitar alongamento estático imediatamente antes de esforços máximos; preferir aquecimento dinâmico e ativação neuromuscular.
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">5. Links Internos</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Artigos relacionados no blog Kynesia:</p>
        <ul className="mb-8 space-y-2 text-sm">
          <li>
            <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">→ Tendinopatia e Carga Progressiva: Princípios e Aplicação</Link>
          </li>
          <li>
            <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">→ Prática Baseada em Evidências na Fisioterapia</Link>
          </li>
          <li>
            <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">→ Diagnóstico Diferencial: Cervical vs Ombro</Link>
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">6. Seções H2 e H3 (Desenvolvimento)</h2>
        <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-900">6.1. Mecanismos propostos</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          As hipóteses que sustentam o uso do alongamento para prevenção envolvem melhora da amplitude de movimento, redução de rigidez e maior tolerância ao alongamento. No entanto, mudanças estruturais em tendões e músculos exigem estímulos de carga (força) e adaptação ao longo do tempo.
        </p>

        <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-900">6.2. Tradução prática para a clínica</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Na prática, combine avaliações objetivas (goniometria, testes funcionais) com um programa de exercícios que priorize força e progressão de carga. Use alongamento para casos com limitação funcional e como parte da recuperação de mobilidade, nunca como única estratégia preventiva.
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
            Alongamento isolado não é uma estratégia comprovada para prevenção de lesões. Priorize avaliação funcional, controle de carga e programas de força progressiva. Use alongamento dinâmico no aquecimento e alongamento específico para recuperar amplitude quando indicado.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Adapte prescrições ao objetivo do paciente: mobilidade funcional para pacientes com limitação, e fortalecimento e progressão de carga para prevenção de recidiva e lesões por sobrecarga.
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
              Conteúdo clínico e de prática baseado em evidências, destinado a fisioterapeutas, estudantes e profissionais de saúde.
            </p>
          </div>
        </div>

        {/* Bloco de Conversão */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Integre planos de reabilitação, protocolos de exercício e monitoramento de progresso em uma única plataforma. O Kynesia facilita a gestão de programas de prevenção com registros estruturados e ferramentas para acompanhar progressão de carga.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se busca otimizar protocolos baseados em evidências e melhorar resultados clínicos, experimente o Kynesia.
          </p>
          <Link
            href="/start-free"
            className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-teal-900 transition-all hover:bg-teal-50 hover:shadow-md active:scale-95"
          >
            Começar Grátis
          </Link>
        </div>

        {/* Referências Científicas */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Referências Científicas</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
            <li>
              Thacker SB, Gilchrist J, Stroup DF, Kimsey CD Jr. The impact of stretching on sports injury risk: a systematic review of the literature. Med Sci Sports Exerc. 2004 Mar;36(3):371-8. doi: 10.1249/01.mss.0000117134.83018.f7. PMID: 15076777.
            </li>
            <li>
              Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014 Jun;48(11):871-7. doi: 10.1136/bjsports-2013-092538. PMID: 24100287.
            </li>
            <li>
              Behm DG, Blazevich AJ, Kay AD, McHugh M. Acute effects of muscle stretching on physical performance, range of motion, and injury incidence in healthy active individuals: a systematic review. Appl Physiol Nutr Metab. 2016 Jan;41(1):1-11. doi: 10.1139/apnm-2015-0235. PMID: 26642915.
            </li>
            <li>
              Herbert RD, de Noronha M, Kamper SJ. Stretching to prevent or reduce muscle soreness after exercise. Cochrane Database Syst Rev. 2011 Jul 6;(7):CD004577. doi: 10.1002/14651858.CD004577.pub3. PMID: 21735398.
            </li>
            <li>
              McCrary JM, Ackermann BJ, Halaki M. A systematic review of the effects of upper body warm-up on performance and injury. Br J Sports Med. 2015 Jul;49(14):935-42. doi: 10.1136/bjsports-2014-094228. PMID: 25694615.
            </li>
          </ol>
        </section>
      </article>
    </main>
  );
}
