import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Dry needling: eficácia, riscos e quando indicar",
  description:
    "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dry needling: eficácia, riscos e quando indicar",
  description:
    "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
  author: { "@type": "Person", name: "Equipe Kynesia" },
  datePublished: "2026-05-18",
  image: ["/blog/dry-needling.jpg"],
  mainEntityOfPage: { "@type": "WebPage", "@id": "/blog/dry-needling-eficacia-riscos-quando-indicar" },
};

const faqItems = [
  {
    question: "O que é dry needling?",
    answer:
      "Dry needling é uma técnica invasiva que utiliza agulhas sólidas para estimular pontos miofasciais com objetivo analgésico e neuromodulador.",
  },
  {
    question: "Dry needling é igual à acupuntura?",
    answer:
      "Apesar de usar agulhas, dry needling tem fundamentação moderna em neurofisiologia e pontos gatilho miofasciais, diferente da teoria tradicional chinesa da acupuntura.",
  },
  {
    question: "Quais são os riscos?",
    answer:
      "Riscos incluem dor local, sangramento, hematoma e, raramente, lesão ou pneumotórax (em regiões torácicas). A técnica exige treinamento e precaução.",
  },
  {
    question: "Quando indicar?",
    answer:
      "Indicar quando há pontos gatilho miofasciais que contribuem para dor e disfunção, como parte de um plano multimodal com exercícios e educação.",
  },
];

export default function Post() {
  return (
    <main>
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <p className="text-sm text-teal-600">Terapias</p>
          <h1 className="mt-2 text-3xl font-bold">Dry needling: eficácia, riscos e quando indicar</h1>
          <p className="mt-3 text-sm text-gray-600">Publicado em 18 Mai 2026 • Equipe Kynesia • 6 min de leitura</p>
        </header>

        <section className="prose max-w-none">
          <p>
            O dry needling se consolidou como ferramenta na prática fisioterapêutica para manejo da dor
            miofascial. Neste artigo resumimos o que a evidência científica atual mostra, os riscos
            envolvidos e como tomar decisões clínicas seguras sobre sua indicação.
          </p>

          <h2>O que é e como funciona</h2>
          <p>
            Dry needling utiliza agulhas sólidas (sem injeção de substância) inseridas em pontos
            musculares hiperirritáveis (pontos gatilho) para provocar relaxamento local, reduzir
            sensibilidade nociceptiva e modificar a excitabilidade do sistema nervoso. Os possíveis
            mecanismos incluem interrupção da atividade eletromiográfica anormal, incremento do fluxo
            local e ativação de mecanismos descendentes de analgesia.
          </p>

          <h2>Evidência: o que os estudos mostram</h2>
          <p>
            Revisões sistemáticas e metanálises mostram efeitos pequenos a moderados do dry needling na
            redução da dor a curto prazo quando comparado a cuidados convencionais ou placebo. A
            qualidade das evidências varia por condição (ex.: dor cervical, lombar, ombro) e por
            diferenças metodológicas entre estudos. Resultados funcionais (força, movimento) são menos
            consistentes e o efeito tende a ser melhor quando integrado a exercícios terapêuticos.
          </p>

          <h2>Indicações e contexto clínico</h2>
          <p>
            Indique dry needling como parte de um plano multimodal quando houver suspeita razoável de
            contribuição de pontos gatilho para a dor e a limitação funcional. Exemplos: dor cervical
            com padrões miofasciais, ombro doloroso com pontos locais ativos, e síndromes miofasciais
            persistentes que respondem mal apenas a exercícios. Nunca use como única abordagem isolada
            se houver sinais de alerta ou origem estrutural que exija investigação.
          </p>

          <h2>Contraindicações e precauções</h2>
          <p>
            Contraindicações incluem coagulopatias não controladas, uso de anticoagulantes sem avaliação,
            infecção ativa na área e aversão grave do paciente à técnica. Precaução especial na região
            torácica (risco raro de pneumotórax) e em pacientes imunossuprimidos. Documente consentimento
            informado e ofereça explicação clara sobre benefícios esperados e possíveis efeitos adversos.
          </p>

          <h2>Riscos e manejo de complicações</h2>
          <p>
            Efeitos adversos mais comuns são dor local, sangramento ou hematoma. Pneumotórax é raro,
            mas crítico; técnica adequada, conhecimento anatômico e agulhamento superficial quando
            indicado reduzem o risco. Tenha protocolos para manejo de eventos adversos e registre tudo
            no prontuário.
          </p>

          <h2>Como integrar na prática</h2>
          <p>
            Use dry needling dentro de um plano que inclua avaliação objetiva, exercícios terapêuticos,
            educação e estratégias de autocuidado. Avalie desfechos relevantes (dor, função, satisfação)
            e ajuste a frequência e intensidade da intervenção conforme resposta.
          </p>

          <h2>Conclusão</h2>
          <p>
            Dry needling é uma ferramenta válida para manejo da dor miofascial com evidência de benefício
            sintomático a curto prazo. Sua melhor utilização é quando integrado a um plano clínico
            fundamentado em avaliação, exercícios e educação. Treinamento e protocolos de segurança são
            essenciais para minimizar riscos.
          </p>
        </section>

        <aside className="mt-10">
          <h3 className="text-lg font-semibold">Perguntas frequentes</h3>
          <div className="mt-3 space-y-3">
            {faqItems.map((f) => (
              <details key={f.question} className="rounded border p-3">
                <summary className="font-medium">{f.question}</summary>
                <p className="mt-2 text-sm text-gray-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </aside>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </article>
    </main>
  );
}
