import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

export const metadata: Metadata = {
  title: "Torcicolo: fisiopatologia e tratamento na fisioterapia",
  description:
    "Entenda a fisiopatologia do torcicolo, avaliação clínica e tratamento baseado em evidências na fisioterapia.",
  openGraph: {
    title: "Torcicolo: fisiopatologia e tratamento na fisioterapia",
    description:
      "Guia prático sobre fisiopatologia do torcicolo, avaliação clínica e intervenção eficaz em fisioterapia.",
    type: "article",
    url: "https://kynesia.com.br/blog/torcicolo-fisiopatologia-e-tratamento-na-fisioterapia",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Torcicolo: fisiopatologia e tratamento na fisioterapia",
  description:
    "Entenda a fisiopatologia do torcicolo, avaliação clínica e tratamento baseado em evidências na fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-05-04",
  dateModified: "2026-05-04",
  mainEntityOfPage: "https://kynesia.com.br/blog/torcicolo-fisiopatologia-e-tratamento-na-fisioterapia",
};

export default function TorcicoloPage() {
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
          <span className="font-medium text-teal-600">Torcicolo: fisiopatologia e tratamento</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Torcicolo: fisiopatologia e tratamento na fisioterapia
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a avaliar e tratar torcicolo de forma eficiente, compreendendo os mecanismos envolvidos e aplicando intervenções baseadas em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 4 Mai 2026</span>
            <span>Leitura: 8 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é torcicolo?</strong> Torcicolo é uma condição de contração muscular involuntária ou prolongada que causa flexão lateral, rotação ou extensão forçada da cabeça e pescoço. Pode ser agudo, intermitente ou crônico, resultando em limitação de movimento e desconforto significativo.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>torcicolo</strong> afeta grande parte da população em algum momento da vida e representa um desafio clínico frequente. Quando não tratado adequadamente, pode evoluir para padrão de proteção muscular que perpetua a disfunção e prolonga a recuperação.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste guia você entenderá a fisiopatologia, identificará os tipos e aprenderá estratégias de avaliação e tratamento com foco em restaurar mobilidade funcional e prevenir recorrências.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">Estrutura do artigo</h3>
          <p className="text-sm text-gray-700">Este conteúdo cobre: fisiopatologia, tipos de torcicolo, avaliação clínica prática, estratégias de tratamento e FAQ com perguntas comuns.</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-no-pescoco-e-dor-de-cabeca-entenda-a-relacao" className="text-teal-600 hover:underline">
                → Dor no pescoço e dor de cabeça: entenda a relação
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico para conduta sem excesso
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Qual é a fisiopatologia do torcicolo?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O torcicolo ocorre quando há contração sustentada ou involuntária dos músculos cervicais, particularmente esternocleidomastoideo, trapézio superior, levantador da escápula ou escalenos. Essa contração pode ter origem neuromuscular, postural ou resultado de proteção após trauma.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          A fisiopatologia envolve: espasmo muscular como resposta de proteção, encurtamento progressivo de fibras, limitação de mobilidade articular, irritação de raízes nervosas adjacentes e alteração do padrão de recrutamento muscular. Quando o padrão persiste, a plasticidade neuromuscular consolida a disfunção.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais são os tipos de torcicolo e quando ocorrem?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Existem diferentes apresentações clínicas que guiam sua avaliação e tratamento. Conhecer o tipo é essencial para direcionar a intervenção correta.
        </p>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-4 font-bold text-gray-900">Tipos principais de torcicolo</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Torcicolo agudo:</strong> Surge abruptamente, frequentemente após posição prolongada inadequada, movimento brusco ou trauma menor. Duração: dias a semanas.</li>
            <li><strong>Torcicolo postural:</strong> Resultante de padrão postural repetitivo, como trabalho em computador ou posição de leitura. Desenvolve-se gradualmente.</li>
            <li><strong>Torcicolo espasmódico:</strong> Contrações involuntárias recorrentes, pode ter componente neuromotor mais acentuado. Tendência a recorrências.</li>
            <li><strong>Torcicolo congênito:</strong> Presente desde nascimento, menos frequente, requer abordagem precoce para melhor prognóstico.</li>
            <li><strong>Torcicolo secundário:</strong> Consequência de outras condições como hérnia de disco, artrite ou problemas vestibulares. Requer investigação adicional.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como avaliar torcicolo de forma objetiva e eficiente?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Uma avaliação completa combina histórico clínico, testes de amplitude de movimento, testes especiais e análise postural. O objetivo é identificar a estrutura primária envolvida, o grau de limitação funcional e sinais que exigem encaminhamento.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Comece sempre com perguntas sobre: data de início, fator precipitante, qualidade da dor, presença de irradiação, fatores que aliviam ou pioram, impacto no sono e no trabalho. Em seguida, proceda com observação, palpação e testes funcionais.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Qual conduta gera melhor resultado no tratamento de torcicolo?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O tratamento eficaz combina alívio de sintomas inicial com progressão para restauração de mobilidade e padrão neuromuscular normal. Em fase aguda, foco em modulação de espasmo; em fase subaguda, trabalho ativo e progressivo.
        </p>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-4 font-bold text-gray-900">Estratégias de tratamento progressivo</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Fase 1 - Alívio (dias 1-3):</strong> Repouso relativo, termoterapia superficial, alongamentos suaves e posicionamento antálgico. Objetivo: reduzir espasmo.</li>
            <li><strong>Fase 2 - Transição (dias 4-10):</strong> Mobilidade ativa assistida progredindo para ativa, terapia manual moderada, exercícios de estabilização cervical.</li>
            <li><strong>Fase 3 - Fortalecimento (semana 2+):</strong> Exercícios resistidos para musculatura cervical e escapular, padrões de movimento funcional, correção postural.</li>
            <li><strong>Fase 4 - Prevenção (manutenção):</strong> Programa de exercício domiciliar, conscientização de fatores de risco ocupacionais, orientação ergonômica.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais sinais indicam encaminhamento para avaliação adicional?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Nem todo torcicolo é simples mecânico. Existem condições que requerem investigação adicional e encaminhamento apropriado antes de iniciar tratamento fisioterapêutico.
        </p>
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-3 font-bold text-red-700">Sinais de alerta para encaminhamento</h3>
          <ul className="space-y-2 text-gray-700">
            <li>- Torcicolo associado a febre alta ou cefaleia intensa</li>
            <li>- Presença de déficit neurológico progressivo (fraqueza, alteração sensória)</li>
            <li>- Trauma importante associado ao início do quadro</li>
            <li>- Restrição severa de movimento sem melhora após 1 semana de tratamento</li>
            <li>- Presença de sintomas sistêmicos ou perda de peso sem causa aparente</li>
            <li>- História de malignidade prévia</li>
          </ul>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas frequentes sobre torcicolo</h2>
        <div className="mb-8 space-y-3">
          {[
            {
              q: "Quanto tempo leva para passar um torcicolo agudo?",
              a: "Na maioria dos casos, torcicolo agudo melhora entre 3 a 10 dias com tratamento apropriado. Casos mais severos podem levar até 2-3 semanas. O fator crítico é iniciar mobilização adequada assim que a fase mais aguda passar.",
            },
            {
              q: "Torcicolo agudo precisa ficar totalmente imóvel?",
              a: "Não. Repouso total prolonga a recuperação. O ideal é repouso relativo com mobilidade suave nas primeiras 24-48 horas, seguido de progressão ativa conforme tolerância do paciente.",
            },
            {
              q: "Qual é a diferença entre torcicolo e cervicalgia comum?",
              a: "Torcicolo envolve contração muscular involuntária visível, com posicionamento anormal da cabeça. Cervicalgia é dor no pescoço sem necessariamente haver deformidade. O torcicolo é um subtipo mais específico de apresentação.",
            },
            {
              q: "Exercício pode piorar o torcicolo no começo?",
              a: "Pode haver aumento leve e transitório se o exercício for muito intenso muito cedo. Por isso a progressão é importante: comece com mobilidade passiva e ativa-assistida antes de adicionar resistência.",
            },
            {
              q: "Torcicolo tende a recorrer?",
              a: "Torcicolo agudo bem tratado dificilmente recorre. No entanto, se fatores causais (postura, ergonomia, flexibilidade) não forem corrigidos, pode haver episódios recorrentes.",
            },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Tratamento bem planejado resolve torcicolo em dias</h2>
          <p className="mb-4 leading-relaxed">
            Quando você compreende a fisiopatologia e aplica progressão adequada do tratamento, torcicolo agudo tem excelente prognóstico. O ponto crítico é evitar padrões de proteção prolongados que cronificam o quadro.
          </p>
          <p className="leading-relaxed">
            Educação do paciente, progressão prudente de exercício e correção de fatores de risco ocupacionais são tão importantes quanto a intervenção manual inicial. Com essa abordagem integrada, a recuperação funcional é consistente.
          </p>
        </div>

        <PatientCTA />


        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Sobre o autor</h3>
          <p className="text-gray-700">
            Este conteúdo foi desenvolvido pela Equipe Kynesia com base em evidências científicas atuais e experiência clínica. Se você é um profissional de fisioterapia, use este conhecimento para estruturar sua avaliação e otimizar seus resultados clínicos em casos de torcicolo.
          </p>
        </div>
      </article>
    </main>
  );
}
