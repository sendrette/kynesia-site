import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/fasciite-plantar-causas-tratamento-e-exercicios";

const faqItems = [
  {
    question: "Fasciite plantar tem cura?",
    answer:
      "Na maioria dos casos, sim. Com manejo de carga, exercícios específicos e progressão adequada, a dor reduz progressivamente em semanas a meses. Casos crônicos podem exigir plano mais longo e ajuste fino de fatores de sobrecarga.",
  },
  {
    question: "Qual exercício tem mais evidência para fasciite plantar?",
    answer:
      "O alongamento específico da fáscia plantar e o fortalecimento progressivo de panturrilha e pé apresentam boa evidência para reduzir dor e melhorar função, especialmente quando associados ao controle de carga.",
  },
  {
    question: "Palmilha resolve fasciite plantar?",
    answer:
      "Palmilhas podem ajudar no curto prazo para analgesia e conforto, mas geralmente funcionam melhor quando combinadas com exercício terapêutico, educação e ajuste de volume de atividade.",
  },
  {
    question: "Quanto tempo dura a recuperação da fasciite plantar?",
    answer:
      "O tempo varia conforme cronicidade, carga diária e adesão ao tratamento. Muitos pacientes melhoram em 6 a 12 semanas; quadros mais persistentes podem levar alguns meses para retorno pleno.",
  },
  {
    question: "Quando devo investigar outras causas de dor no calcanhar?",
    answer:
      "Quando há dor noturna intensa, trauma importante, perda de força progressiva, parestesias persistentes, febre ou ausência total de resposta ao tratamento, é importante reavaliar diagnóstico diferencial.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fasciite plantar: causas, tratamento e exercícios baseados em evidências",
  description:
    "Entenda causas, diagnóstico e tratamento da fasciite plantar com exercícios e condutas baseadas em evidências para reduzir dor no calcanhar.",
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
  title: "Fasciite plantar: causas, tratamento e exercícios baseados em evidências",
  description:
    "Entenda causas, diagnóstico e tratamento da fasciite plantar com exercícios e condutas baseadas em evidências para reduzir dor no calcanhar.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Fasciite plantar: causas, tratamento e exercícios baseados em evidências",
    description:
      "Guia clínico completo de fasciite plantar: sinais, diagnóstico diferencial, tratamento e progressão de exercícios com foco em evidências.",
    type: "article",
    url: pageUrl,
  },
};

export default function FasciitePlantarPage() {
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
          <span className="font-medium text-teal-600">Fasciite plantar: causas, tratamento e exercícios baseados em evidências</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Fasciite plantar: causas, tratamento e exercícios baseados em evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Dor no calcanhar ao dar os primeiros passos do dia? Entenda a fisiopatologia, os critérios clínicos de avaliação e o que realmente funciona no tratamento da fasciite plantar.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 21 Mai 2026</span>
            <span>⏱ 12 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            A <strong>fasciite plantar</strong> é uma das causas mais comuns de dor no calcanhar em adultos ativos e sedentários. A evidência atual sugere que o manejo ideal combina educação, ajuste de carga, exercícios específicos e progressão terapêutica individualizada.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Apesar do nome “fasciite” sugerir processo inflamatório puro, muitos casos apresentam perfil mais degenerativo por sobrecarga repetida. Na prática clínica, isso muda a conduta: não basta “descansar”. O foco deve ser modular carga, recuperar capacidade tecidual e reduzir fatores perpetuadores.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Este guia reúne recomendações usadas em fisioterapia ortopédica baseada em evidências para ajudar na tomada de decisão clínica, especialmente em pacientes com dor persistente matinal e limitação funcional para caminhar, correr ou permanecer em pé por longos períodos.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/quanto-tempo-dura-entorse-de-tornozelo" className="text-teal-600 hover:underline">
                → Quanto tempo dura uma entorse de tornozelo?
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-no-joelho-ao-subir-escada-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no joelho ao subir escada: causas e tratamento
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é fasciite plantar (e por que ela dói)?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A fáscia plantar é uma estrutura fibrosa que ajuda a sustentar o arco do pé e transferir força durante a marcha. Sob excesso de carga sem recuperação adequada, ocorre microlesão repetida, sensibilidade tecidual e queda da tolerância mecânica local.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          O padrão clássico inclui dor na região medial do calcâneo, pior nos primeiros passos da manhã ou após longos períodos sentado. Com movimento leve, pode haver alívio inicial; com sobrecarga acumulada, a dor retorna no fim do dia.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Fatores de risco mais comuns</h2>
        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Aumento abrupto de carga",
              desc: "Subir volume de corrida, caminhada ou tempo em pé sem progressão gradual é gatilho frequente.",
              tip: "Regra prática: progressões semanais pequenas tendem a reduzir risco de piora.",
            },
            {
              num: "02",
              title: "Déficit de capacidade da cadeia posterior",
              desc: "Redução de força de panturrilha e baixa tolerância do complexo tornozelo-pé aumentam estresse na fáscia.",
              tip: "Fortalecimento progressivo de tríceps sural e intrínsecos do pé é pilar terapêutico.",
            },
            {
              num: "03",
              title: "Rigidez de tornozelo",
              desc: "Menor dorsiflexão altera mecânica da marcha e pode elevar carga sobre o retropé e fáscia plantar.",
              tip: "Mobilidade funcional com exercícios ativos costuma ter melhor transferência para função.",
            },
            {
              num: "04",
              title: "Tempo excessivo em superfícies rígidas",
              desc: "Jornadas longas em pé, sem pausas e com calçado inadequado, contribuem para manutenção da dor.",
              tip: "Organizar pausas e escolher calçado adequado melhora tolerância ao longo do dia.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Fator {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Aplicação clínica:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Avaliação clínica baseada em evidências</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O diagnóstico é majoritariamente clínico. Alguns achados aumentam probabilidade diagnóstica: dor à palpação no tubérculo medial do calcâneo, piora nos primeiros passos e dor provocada em dorsiflexão dos dedos (windlass test).
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Na fisioterapia, é essencial avaliar não apenas dor local, mas também exposição à carga, capacidade de força, padrão de marcha, rigidez de tornozelo e fatores comportamentais que influenciam recuperação.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Red flags e diagnóstico diferencial</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Fratura por estresse do calcâneo (dor progressiva com impacto, sensibilidade óssea importante)</li>
            <li>• Síndrome do túnel do tarso (parestesia/queimação com sinais neurais)</li>
            <li>• Doenças inflamatórias sistêmicas (dor bilateral persistente com sinais sistêmicos)</li>
            <li>• Ruptura parcial da fáscia plantar (início súbito após esforço com dor aguda intensa)</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tratamento: o que realmente funciona</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões recentes apontam melhor resposta quando combinamos estratégias ativas com manejo de carga. Intervenções passivas isoladas tendem a gerar alívio curto, mas menor sustentação de resultado no médio prazo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Educação e controle de carga</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Ajustar volume e intensidade das atividades dolorosas é o primeiro passo. Não é “parar tudo”, e sim encontrar a dose que permita recuperação sem agravar sintomas.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Alongamento específico da fáscia plantar</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Alongamento da cadeia posterior pode ajudar, mas o alongamento direcionado da fáscia (dorsiflexão de dedos com tornozelo neutro) costuma ter melhor efeito em dor matinal em muitos pacientes.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Fortalecimento progressivo</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Exercícios de panturrilha, intrínsecos do pé e cadeia cinética inferior aumentam tolerância mecânica do sistema. Carga progressiva é mais efetiva do que protocolos exclusivamente passivos.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">4) Suportes temporários (palmilhas, taping, calçado)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Podem reduzir dor no curto prazo e facilitar adesão ao programa ativo. Funcionam melhor como ponte terapêutica, não como única intervenção.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">5) Terapias adjuvantes em casos selecionados</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Recursos como ondas de choque podem ser considerados em casos persistentes, após falha de tratamento conservador bem estruturado. A indicação deve ser individualizada.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Protocolo prático de progressão (exemplo clínico)</h2>
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Fase</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Objetivo</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Intervenções principais</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Semanas 1-2</td>
                <td className="px-4 py-3 text-gray-700">Analgesia e controle de irritabilidade</td>
                <td className="px-4 py-3 text-gray-700">Educação, ajuste de carga, alongamento específico, taping/palmilha se necessário</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Semanas 3-6</td>
                <td className="px-4 py-3 text-gray-700">Recuperar capacidade tecidual</td>
                <td className="px-4 py-3 text-gray-700">Fortalecimento progressivo de panturrilha e pé, treino funcional, progressão de marcha</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Semanas 7+</td>
                <td className="px-4 py-3 text-gray-700">Retorno pleno à atividade</td>
                <td className="px-4 py-3 text-gray-700">Exercícios de maior demanda, reintrodução gradual de corrida/saltos e prevenção de recidiva</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Erros comuns que atrasam a melhora</h2>
        <ul className="mb-8 ml-6 space-y-2 text-gray-700">
          <li>• Focar apenas em analgesia passiva e ignorar progressão de carga</li>
          <li>• Trocar de estratégia semanalmente sem tempo para adaptação</li>
          <li>• Voltar à corrida/impacto em salto grande de volume</li>
          <li>• Usar palmilha como solução única, sem exercício estruturado</li>
          <li>• Não monitorar resposta de dor de 24 horas após treino</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o fisioterapeuta pode acelerar resultados</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A melhor prática envolve monitorar sintomas, ajustar dose de exercício e educar o paciente sobre variabilidade normal de dor durante reabilitação. Decisões guiadas por dados simples (dor matinal, tolerância de marcha, resposta em 24h) melhoram precisão do plano.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Quando a clínica utiliza prontuário estruturado e indicadores de evolução, fica mais fácil identificar o que funciona para cada perfil e reduzir recidivas.
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
            Fasciite plantar é multifatorial. O tratamento mais consistente combina educação, manejo de carga, exercício progressivo e suporte temporário quando necessário.
          </p>
          <p className="mb-4 leading-relaxed">
            Protocolos ativos, com avaliação contínua e ajustes semanais, tendem a gerar melhor desfecho funcional do que abordagens passivas isoladas.
          </p>
          <p className="leading-relaxed">
            Em resumo: tratar apenas a dor é pouco. É preciso restaurar capacidade para sustentar movimento sem recorrência.
          </p>
        </div>

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
