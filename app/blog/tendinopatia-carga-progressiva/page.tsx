import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

export const metadata: Metadata = {
  title: "Tendinopatia e Carga Progressiva: Quando Avançar ou Regredir",
  description:
    "Descubra como ajustar carga na tendinopatia com critérios objetivos de dor e função para evoluir com segurança e melhores resultados clínicos.",
  openGraph: {
    title: "Tendinopatia e Carga Progressiva: Quando Avançar ou Regredir",
    description:
      "Guia prático para decidir quando avançar, manter ou regredir carga no tratamento da tendinopatia.",
    type: "article",
    url: "https://kynesia.com.br/blog/tendinopatia-carga-progressiva",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tendinopatia e carga progressiva: quando avançar, manter ou regredir",
  description:
    "Parâmetros objetivos de dor e função para conduzir progressão com segurança durante a reabilitação.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-04-09",
  mainEntityOfPage: "https://kynesia.com.br/blog/tendinopatia-carga-progressiva",
};

export default function TendinopatiaCargaProgressivaPage() {
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
          <span className="font-medium text-teal-600">Tendinopatia e carga progressiva</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Reabilitação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Tendinopatia e carga progressiva: quando avançar, manter ou regredir
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Parâmetros objetivos de dor e função para conduzir progressão com segurança durante a reabilitação.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 24 Mar 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é carga progressiva na tendinopatia?</strong> Carga progressiva na tendinopatia é o ajuste planejado de intensidade, volume e frequência dos exercícios para estimular adaptação do tendão sem agravar os sintomas. A progressão correta reduz dor, melhora função e acelera retorno seguro à atividade.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>tendinopatia e carga progressiva</strong> andam juntas: sem dose adequada de carga, o tendão não se adapta; com excesso, os sintomas pioram e o paciente perde confiança. O segredo está em decisões semanais baseadas em critérios objetivos, não em achismo.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste artigo, você vai ver como decidir quando avançar, manter ou regredir carga com uma lógica clínica simples e aplicável na rotina.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">🔗 URL do artigo</h3>
          <p className="text-sm text-gray-700">/blog/tendinopatia-carga-progressiva</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação de joelho no pós-operatório: progressão por critérios
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico para conduta sem excesso
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: quais ajudam na decisão clínica
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como saber quando avançar carga na tendinopatia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Avance quando há boa resposta em 24 horas: dor durante o exercício em nível tolerável, sem piora relevante no dia seguinte, e melhora funcional progressiva. O critério-chave é tendência semanal positiva, não ausência total de dor.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Na prática, use escala de dor ($0$ a $10$), percepção de rigidez matinal e desempenho funcional (salto, degrau, corrida, preensão, conforme o caso). Se esses marcadores evoluem, a progressão é segura.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando manter a mesma carga em vez de progredir?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Mantenha carga quando o paciente está estável, mas sem progresso claro. Isso costuma ocorrer em semanas de maior estresse, sono ruim ou mudança de rotina. Nessas fases, manter já é ganho: evita flare-up e sustenta adaptação.
        </p>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-3 font-bold text-teal-900">Critérios práticos para manter carga</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Dor estável, sem aumento relevante em 24h</li>
            <li>• Função sem piora, mas sem avanço</li>
            <li>• Tendão sensível à palpação igual à semana anterior</li>
            <li>• Fatores externos (sono/estresse) desfavoráveis</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais sinais indicam regredir carga na reabilitação?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Regredir é decisão estratégica, não retrocesso. Se houver piora persistente da dor, rigidez matinal maior por vários dias, queda de desempenho funcional ou dor tardia intensa, reduza volume e/ou intensidade para recuperar tolerância.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Uma regra útil: se o sintoma sobe e não volta ao basal em até 24-48 horas, a dose ficou acima da capacidade do tendão naquela semana.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Checklist de decisão semanal (avançar, manter, regredir)</h2>
        <div className="mb-8 space-y-4">
          {[
            "Dor durante exercício ≤ 4/10 e sem piora no dia seguinte",
            "Rigidez matinal estável ou reduzindo",
            "Função específica melhorando (força, salto, corrida, tarefa-alvo)",
            "Sem aumento de sensibilidade residual no tendão",
            "Carga da vida real (trabalho/esporte) controlada na semana",
            "Paciente confiante e aderente ao plano",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
              ✓ {item}
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">FAQ: tendinopatia e progressão de carga</h2>
        <div className="mb-8 space-y-3">
          {[
            {
              q: "É normal sentir dor durante exercício para tendinopatia?",
              a: "Sim, dor leve e tolerável pode ser esperada. O importante é não haver piora relevante no dia seguinte e manter tendência funcional de melhora.",
            },
            {
              q: "Quanto aumentar a carga por semana?",
              a: "Como referência clínica, aumentos graduais de 5% a 15% podem funcionar, desde que os critérios de dor e função permaneçam estáveis.",
            },
            {
              q: "Se a dor piorou, devo parar tudo?",
              a: "Geralmente não. Em vez de parar totalmente, ajuste a dose (volume, intensidade ou frequência) para um nível tolerável e retome progressão após estabilização.",
            },
            {
              q: "Alongamento sozinho resolve tendinopatia?",
              a: "Não. Alongamento pode ajudar sintomas, mas a base do tratamento é carga progressiva bem dosada com objetivo funcional claro.",
            },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Progressão inteligente é o centro da reabilitação</h2>
          <p className="mb-4 leading-relaxed">
            Em tendinopatia, o resultado vem da dose certa no momento certo. Avançar cedo demais irrita; avançar tarde demais estagna. O equilíbrio está na leitura semanal dos sinais clínicos.
          </p>
          <p className="leading-relaxed">
            Com critérios objetivos, você decide melhor e acelera o retorno funcional com segurança.
          </p>
        </div>
      <PatientCTA />

      </article>
    </main>
  );
}
