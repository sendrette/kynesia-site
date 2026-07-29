import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

export const metadata: Metadata = {
  title: "Marketing para fisioterapeuta: como atrair pacientes sem depender de indicação",
  description:
    "Aprenda estratégias de marketing para fisioterapeuta para atrair pacientes, fortalecer autoridade e melhorar a previsibilidade da clínica.",
  openGraph: {
    title: "Marketing para fisioterapeuta: como atrair pacientes sem depender de indicação",
    description:
      "Guia prático para fisioterapeutas que querem atrair pacientes com autoridade, conteúdo e presença digital consistente.",
    type: "article",
    url: "https://kynesia.com.br/blog/marketing-para-fisioterapeuta-como-atrair-pacientes-sem-depender-de-indicacao",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marketing para fisioterapeuta: como atrair pacientes sem depender de indicação",
  description:
    "Aprenda estratégias de marketing para fisioterapeuta para atrair pacientes, fortalecer autoridade e melhorar a previsibilidade da clínica.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  mainEntityOfPage:
    "https://kynesia.com.br/blog/marketing-para-fisioterapeuta-como-atrair-pacientes-sem-depender-de-indicacao",
};

export default function MarketingParaFisioterapeutaPage() {
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
          <span className="font-medium text-teal-600">Marketing para fisioterapeuta</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Marketing para fisioterapeuta: como atrair pacientes sem depender de indicação
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda estratégias de marketing para fisioterapeuta para atrair pacientes, fortalecer autoridade e melhorar a previsibilidade da clínica.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 7 Mai 2026</span>
            <span>Leitura: 8 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é marketing para fisioterapeuta?</strong> É o conjunto de ações que tornam a clínica mais visível, confiável e lembrada pelo público certo. Quando bem aplicado, o marketing ajuda o fisioterapeuta a atrair pacientes com mais consistência e menos dependência de indicação casual.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Muitos fisioterapeutas ainda dependem exclusivamente de indicações para manter a agenda cheia. O problema é que isso cria instabilidade. Quando a indicação cai, a clínica sente imediatamente no faturamento e na ocupação dos horários.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A solução está em construir presença digital, autoridade clínica e processos simples de captação. Assim, o paciente passa a encontrar a clínica de forma natural quando precisa de ajuda.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">Por que este tema importa</h3>
          <p className="text-sm text-gray-700">
            Marketing bem feito ajuda a gerar previsibilidade, fortalece a marca da clínica e reduz a dependência de um único canal de aquisição.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/gestao-clinica-para-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão clínica para fisioterapia: como organizar a clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
            <li>
              <Link href="/blog/agenda-para-fisioterapeuta-organize-sua-clinica-melhor" className="text-teal-600 hover:underline">
                → Agenda para fisioterapeuta: organize sua clínica melhor
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que o marketing é importante para fisioterapeutas?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O marketing é importante porque ajuda o paciente a entender quem você ajuda, como você trabalha e por que sua clínica é uma boa escolha. Em um mercado competitivo, quem comunica melhor tende a ser lembrado primeiro.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Além disso, o marketing permite educar o público, aumentar confiança e reduzir a barreira de entrada para novos pacientes. Quando a pessoa já chega mais informada, a conversão costuma ser melhor.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como atrair pacientes sem depender só de indicação?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A estratégia mais segura combina três pilares: presença digital, conteúdo educativo e processo de atendimento bem definido. Não basta aparecer; é preciso transmitir clareza e autoridade.
        </p>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-3 font-bold text-gray-900">Pilares práticos de captação</h3>
          <ul className="space-y-2 text-gray-700">
            <li>- Manter perfil profissional atualizado nas redes sociais</li>
            <li>- Publicar conteúdos que respondam dúvidas frequentes dos pacientes</li>
            <li>- Ter uma página clara com serviços, localização e formas de contato</li>
            <li>- Pedir depoimentos e provas sociais de forma ética</li>
            <li>- Facilitar o primeiro contato com resposta rápida</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Que tipo de conteúdo gera mais atenção?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Conteúdos que resolvem dúvidas práticas têm mais chance de atrair pacientes certos. Exemplos incluem explicações sobre dor no ombro, lombalgia, torcicolo, prevenção de lesões e reabilitação pós-operatória.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          O ideal é falar com linguagem simples, mostrar raciocínio clínico e evitar promessas exageradas. Isso aumenta a percepção de autoridade e filtra melhor o público interessado.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como transformar visibilidade em agendamento?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Visibilidade sozinha não gera resultado. É preciso um caminho fácil até o agendamento. Isso inclui botão de contato, resposta rápida, mensagens objetivas e explicação clara do próximo passo.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Quanto menor a fricção, maior a chance de conversão. O paciente deve conseguir sair do conteúdo para a conversa com a clínica sem esforço.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais erros mais atrapalham o marketing da clínica?</h2>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-4 font-bold text-gray-900">Erros comuns</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Falar só com outros fisioterapeutas:</strong> o conteúdo precisa ser entendido pelo paciente.</li>
            <li><strong>Postar sem estratégia:</strong> frequência sem direção gera pouco resultado.</li>
            <li><strong>Não mostrar diferenciais:</strong> o paciente precisa saber por que escolher sua clínica.</li>
            <li><strong>Demorar para responder:</strong> atenção perdida significa paciente perdido.</li>
            <li><strong>Focar apenas em promoção:</strong> autoridade vem de educação e consistência, não só de oferta.</li>
          </ul>
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas frequentes sobre marketing para fisioterapeuta</h2>
        <div className="mb-8 space-y-3">
          {[
            {
              q: "Fisioterapeuta pode fazer marketing de conteúdo?",
              a: "Sim. Conteúdo educativo é uma das formas mais seguras e eficientes de construir autoridade e atrair pacientes de forma ética e consistente.",
            },
            {
              q: "Precisa postar todos os dias para ter resultado?",
              a: "Não necessariamente. O mais importante é consistência com qualidade. Um calendário simples, porém constante, costuma funcionar melhor do que postagens esporádicas.",
            },
            {
              q: "Vale investir em site ou só redes sociais?",
              a: "O ideal é combinar os dois. As redes sociais geram alcance, enquanto o site organiza as informações e ajuda no posicionamento de busca.",
            },
            {
              q: "Marketing resolve agenda vazia sozinho?",
              a: "Não sozinho. Ele precisa estar conectado a uma boa experiência de atendimento, resposta rápida e um processo de agendamento bem definido.",
            },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Marketing forte cria clínica mais previsível</h2>
          <p className="mb-4 leading-relaxed">
            Quando o fisioterapeuta comunica bem sua proposta e responde rápido, a clínica deixa de depender só de indicação. Isso melhora a previsibilidade e fortalece a marca no longo prazo.
          </p>
          <p className="leading-relaxed">
            O melhor marketing é aquele que educa, gera confiança e facilita o primeiro contato com o paciente.
          </p>
        </div>

        <PatientCTA />


        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Sobre o autor</h3>
          <p className="text-gray-700">
            Conteúdo elaborado pela Equipe Kynesia para ajudar fisioterapeutas a ganharem presença digital, atraírem mais pacientes e organizarem melhor sua clínica com estratégia.
          </p>
        </div>
      </article>
    </main>
  );
}
