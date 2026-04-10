import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido";

const faqItems = [
  {
    question: "Quanto tempo pode durar a dor lombar ao acordar?",
    answer:
      "Em quadros leves, a dor lombar ao acordar costuma reduzir entre alguns dias e 2 semanas com ajustes de sono, mobilidade e carga diária. Se durar mais de 4 a 6 semanas, vale avaliação profissional.",
  },
  {
    question: "Colchão firme sempre é melhor para dor lombar ao acordar?",
    answer:
      "Nem sempre. O melhor colchão é o que mantém alinhamento e conforto para o seu corpo. Muito duro ou muito macio pode piorar a dor lombar ao acordar em algumas pessoas.",
  },
  {
    question: "Dor lombar ao acordar melhora só com alongamento?",
    answer:
      "Alongar ajuda, mas o melhor resultado costuma vir da combinação entre mobilidade, fortalecimento progressivo e ajustes de rotina (posição para dormir, pausas e gestão de carga).",
  },
  {
    question: "Quando procurar fisioterapia para dor lombar ao acordar?",
    answer:
      "Procure fisioterapia se a dor se repete por semanas, limita tarefas diárias, irradia para a perna ou volta sempre ao acordar, mesmo com mudanças básicas de hábito.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor lombar ao acordar: causas e como aliviar rápido",
  description:
    "Dor lombar ao acordar pode indicar tensão muscular, colchão inadequado ou problemas na coluna. Veja causas, quando se preocupar e como aliviar.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
    logo: {
      "@type": "ImageObject",
      url: "https://kynesia.com.br/kynesia-logo-continuo.svg",
    },
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
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
  title: "Dor lombar ao acordar: causas e como aliviar rápido",
  description:
    "Dor lombar ao acordar pode indicar tensão muscular, colchão inadequado ou problemas na coluna. Veja causas, quando se preocupar e como aliviar.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor lombar ao acordar: causas e como aliviar rápido",
    description:
      "Dor lombar ao acordar pode indicar tensão muscular, colchão inadequado ou problemas na coluna. Veja causas, quando se preocupar e como aliviar.",
    type: "article",
    url: pageUrl,
  },
};

export default function DorLombarAoAcordarPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-5xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Dor lombar ao acordar: causas e como aliviar rápido</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor Lombar ao Acordar: Causas e Como Aliviar Rápido
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda por que a dor aparece ao levantar da cama e como organizar uma estratégia prática para aliviar sintomas e evitar recorrência.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 10 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é dor lombar ao acordar?</strong> É o desconforto na região baixa das costas que aparece ao levantar da cama e tende a melhorar com movimento leve ao longo da manhã. Na maioria dos casos, está relacionado a sobrecarga mecânica, rigidez muscular, posição de sono e hábitos diários acumulados.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>dor lombar ao acordar</strong> é uma queixa frequente na prática clínica e costuma gerar preocupação, principalmente quando se repete por vários dias. Apesar do incômodo, grande parte dos casos não está associada a condição grave e responde muito bem a manejo fisioterapêutico estruturado.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          O ponto-chave é avaliar o comportamento da dor: quando começa, o que piora, o que alivia e como ela interfere nas atividades do dia. Com isso, é possível definir intervenções mais assertivas e acelerar recuperação sem depender apenas de medicação.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que a dor lombar piora ao acordar?</h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          Durante a noite, ficamos em baixa variação de movimento por horas. Em quem já apresenta rigidez articular, fadiga muscular, baixa tolerância de carga ou postura sustentada no dia anterior, essa imobilidade noturna pode aumentar percepção de dor ao levantar.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Além disso, fatores como colchão inadequado, estresse, sono ruim e falta de recuperação entre treinos podem elevar a sensibilidade dolorosa e deixar a lombar mais reativa no início do dia.
        </p>

        <blockquote className="mb-8 rounded-r-lg border-l-4 border-teal-500 bg-teal-50 py-4 pl-6 italic text-teal-900">
          "Dor ao acordar não significa necessariamente lesão grave. Na prática, muitas vezes é um sinal de que sua lombar está com baixa tolerância à carga e precisa de ajuste progressivo."
        </blockquote>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">As 5 causas mais comuns de dor lombar ao acordar</h2>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Rigidez muscular matinal",
              desc: "Paravertebrais, glúteos e flexores de quadril podem amanhecer mais rígidos após longos períodos sem movimento.",
              tip: "Mobilidade leve por 5 a 8 minutos ao acordar já costuma reduzir sintomas.",
            },
            {
              num: "02",
              title: "Colchão ou travesseiro incompatíveis",
              desc: "Quando o suporte não respeita alinhamento e conforto, a coluna permanece em estresse contínuo durante o sono.",
              tip: "Ajuste de suporte por 2 semanas ajuda a testar resposta real do corpo.",
            },
            {
              num: "03",
              title: "Sobrecarga no dia anterior",
              desc: "Longos períodos sentado, treino acima da capacidade atual ou tarefas repetitivas elevam a irritabilidade tecidual.",
              tip: "Progressão de carga gradual reduz picos inflamatórios no dia seguinte.",
            },
            {
              num: "04",
              title: "Baixo condicionamento e controle lombo-pélvico",
              desc: "Quando a musculatura estabilizadora tem pouca resistência, a lombar compensa e fica mais sensível.",
              tip: "Fortalecimento progressivo com foco em técnica gera melhora sustentada.",
            },
            {
              num: "05",
              title: "Sono ruim e estresse crônico",
              desc: "Privação de sono e estresse aumentam percepção de dor e reduzem recuperação tecidual.",
              tip: "Higiene do sono e rotina de recuperação impactam diretamente a dor matinal.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Causa {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta: quando investigar com prioridade</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Perda de força progressiva em uma ou nas duas pernas</li>
            <li>• Alteração urinária ou intestinal associada à dor lombar</li>
            <li>• Febre, perda de peso inexplicada ou dor noturna intensa contínua</li>
            <li>• Dor após trauma significativo (queda, acidente, impacto)</li>
            <li>• Dor irradiada persistente com formigamento intenso e incapacitante</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como aliviar dor lombar ao acordar de forma rápida e segura?</h2>

        <p className="mb-5 leading-relaxed text-gray-700">
          O alívio rápido vem da combinação entre redução de irritabilidade e melhora de movimento. Foque em ações simples, repetíveis e progressivas ao longo dos dias.
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-4 font-bold text-teal-900">✔ Plano prático para os primeiros 7 dias</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Levantar da cama com transição lateral (evitar flexão brusca)</li>
            <li>✓ Mobilidade leve de coluna e quadril por 5 a 8 minutos</li>
            <li>✓ Caminhada curta matinal para reduzir rigidez</li>
            <li>✓ Pausas a cada 45-60 minutos se trabalha sentado</li>
            <li>✓ Ajuste de posição de sono com suporte entre/baixo dos joelhos</li>
          </ul>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas frequentes sobre dor lombar ao acordar</h2>

        <div className="mb-8 space-y-3">
          {faqItems.map((faq, i) => (
            <details key={i} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.question}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Dor lombar ao acordar: trate a causa, não só o sintoma</h2>
          <p className="mb-4 leading-relaxed">
            A dor matinal na lombar pode melhorar rápido, desde que você ajuste carga, rotina de sono e estratégia de movimento. O erro mais comum é buscar apenas alívio imediato sem corrigir os fatores que mantêm a dor ativa.
          </p>
          <p className="mb-4 leading-relaxed">
            Quando a avaliação identifica o padrão do seu caso, o tratamento deixa de ser tentativa e erro. Você passa a ter um plano progressivo, seguro e com critérios reais de evolução.
          </p>
          <p className="leading-relaxed">
            Se a dor lombar ao acordar está limitando sua rotina, procure avaliação fisioterapêutica para montar um protocolo personalizado.
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

      <footer className="mt-16 border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Kynesia. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gray-900">
              Termos
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Privacidade
            </Link>
            <Link href="/#contato" className="hover:text-gray-900">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
