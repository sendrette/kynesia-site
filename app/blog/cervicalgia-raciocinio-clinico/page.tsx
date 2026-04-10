import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Cervicalgia: Raciocínio Clínico para Conduta sem Excesso",
  description:
    "Entenda como avaliar cervicalgia com raciocínio clínico, priorizar hipóteses funcionais e definir a melhor conduta com foco em resultado real.",
  openGraph: {
    title: "Cervicalgia: Raciocínio Clínico para Conduta sem Excesso",
    description:
      "Guia prático para avaliação de cervicalgia com hipóteses funcionais, sinais de alerta e conduta individualizada.",
    type: "article",
    url: "https://kynesia.com.br/blog/cervicalgia-raciocinio-clinico",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cervicalgia: raciocínio clínico para escolher conduta sem excesso de protocolos",
  description:
    "Como priorizar hipóteses funcionais, sinais de alerta e intervenções com foco em resultado clínico real.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-03-26",
  dateModified: "2026-04-09",
  mainEntityOfPage: "https://kynesia.com.br/blog/cervicalgia-raciocinio-clinico",
};

export default function CervicalgiaRaciocinioClinicoPage() {
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
          <span className="font-medium text-teal-600">Cervicalgia: raciocínio clínico</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Cervicalgia: raciocínio clínico para escolher conduta sem excesso de protocolos
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Como priorizar hipóteses funcionais, sinais de alerta e intervenções com foco em resultado clínico real.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 26 Mar 2026</span>
            <span>⏱ 7 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é cervicalgia?</strong> Cervicalgia é dor na região do pescoço que pode ter origem muscular, articular, discal ou neural. A melhor conduta não vem de protocolo pronto: vem de avaliação clínica estruturada para identificar a principal fonte de sintomas e o nível de irritabilidade.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>cervicalgia</strong> é uma das queixas mais comuns no consultório de fisioterapia e exige raciocínio clínico preciso para evitar condutas genéricas. Quando o tratamento ignora hipóteses funcionais e sinais de alerta, o paciente tende a cronificar e perder confiança no processo.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste guia, você verá como organizar a avaliação, priorizar hipóteses e definir intervenção com foco em função, segurança e resultado mensurável.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">🔗 URL do artigo</h3>
          <p className="text-sm text-gray-700">/blog/cervicalgia-raciocinio-clinico</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: decisão clínica com menos falso positivo
              </Link>
            </li>
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação de joelho no pós-operatório: progressão por critérios
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como avaliar cervicalgia sem excesso de protocolos?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Comece pelo comportamento dos sintomas: quando piora, quando alivia, presença de irradiação, impacto no sono e gatilhos ocupacionais. Em seguida, avalie mobilidade ativa, controle motor cervical e resposta a movimentos repetidos.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          O objetivo é diferenciar dor predominantemente mecânica de dor com componente neural ou sensibilização aumentada. Esse filtro inicial evita uso de técnicas desconectadas da real necessidade do paciente.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais sinais de alerta exigem encaminhamento na cervicalgia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Nem toda cervicalgia é simples. Você deve investigar red flags como trauma importante, perda de força progressiva, alterações neurológicas, dor noturna sem alívio posicional, febre e perda de peso sem causa aparente.
        </p>
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-3 font-bold text-red-700">⚠ Sinais de alerta principais</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Fraqueza progressiva em membro superior</li>
            <li>• Alteração de sensibilidade persistente e piorando</li>
            <li>• Dor intensa noturna sem melhora com posição</li>
            <li>• Trauma recente de alta energia</li>
            <li>• Febre, perda de peso ou histórico oncológico</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Qual conduta inicial gera melhor resultado clínico?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A conduta mais eficiente combina educação em dor, exposição gradual ao movimento e exercícios específicos para mobilidade e controle cervical/escapular. O plano deve ser progressivo e acompanhado por métricas simples de dor e função.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em casos de alta irritabilidade, inicie com carga baixa e foco em modulação de sintomas. Em baixa irritabilidade, progrida com mais intensidade e metas funcionais claras para retorno às atividades.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">FAQ: cervicalgia e raciocínio clínico</h2>
        <div className="mb-8 space-y-3">
          {[
            {
              q: "Cervicalgia sempre precisa de exame de imagem?",
              a: "Não. Na maioria dos casos, a avaliação clínica é suficiente no início. Exames de imagem são indicados quando há sinais de alerta ou ausência de evolução após período adequado de tratamento.",
            },
            {
              q: "Quanto tempo leva para melhorar uma cervicalgia mecânica?",
              a: "Casos agudos costumam melhorar entre 2 e 6 semanas, dependendo da aderência ao plano e da exposição gradual ao movimento. Em casos persistentes, o tempo pode ser maior.",
            },
            {
              q: "Exercício piora a dor cervical no começo?",
              a: "Pode ocorrer aumento leve e transitório de sintomas, o que é esperado em progressão de carga. O importante é monitorar tendência semanal: dor e função devem evoluir positivamente.",
            },
            {
              q: "Postura ruim é a única causa de cervicalgia?",
              a: "Não. A dor cervical é multifatorial e envolve carga mecânica, estresse, sono, condicionamento e sensibilização. Focar apenas em postura costuma limitar resultado.",
            },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Raciocínio clínico reduz erro e melhora resultado</h2>
          <p className="mb-4 leading-relaxed">
            Em cervicalgia, menos protocolo e mais decisão clínica costuma gerar melhor evolução. Quando você define hipótese dominante, mede resposta e ajusta carga, a conduta fica objetiva e eficiente.
          </p>
          <p className="leading-relaxed">
            Resultado clínico consistente vem de avaliação boa, intervenção progressiva e comunicação clara com o paciente.
          </p>
        </div>
      </article>
    </main>
  );
}
