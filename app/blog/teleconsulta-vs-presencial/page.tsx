import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
  description:
    "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas para a clínica.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
  description:
    "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas para a clínica.",
  author: { "@type": "Person", name: "Equipe Kynesia" },
  datePublished: "2026-05-18",
  image: ["/blog/teleconsulta.jpg"],
  mainEntityOfPage: { "@type": "WebPage", "@id": "/blog/teleconsulta-vs-presencial" },
};

const faqItems = [
  {
    question: "Teleconsulta funciona para fisioterapia?",
    answer:
      "Sim para educação, triagem, acompanhamento e programas de exercício; eficácia depende da condição e da qualidade da interação.",
  },
  {
    question: "Quais são as limitações?",
    answer:
      "Limitações incluem impossibilidade de exame físico completo, dependência tecnológica e barreiras de acesso em populações vulneráveis.",
  },
  {
    question: "Quando preferir presencial?",
    answer:
      "Presencial é preferível quando há necessidade de exame físico detalhado, técnicas manuais, testes específicos ou sinais de alerta.",
  },
];

export default function Post() {
  return (
    <main>
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <p className="text-sm text-teal-600">Prática clínica</p>
          <h1 className="mt-2 text-3xl font-bold">Teleconsulta vs atendimento presencial: resultados, limites e quando usar</h1>
          <p className="mt-3 text-sm text-gray-600">Publicado em 18 Mai 2026 • Equipe Kynesia • 7 min de leitura</p>
        </header>

        <section className="prose max-w-none">
          <p>
            A teleconsulta cresceu muito desde 2020 e se consolidou como opção viável em fisioterapia para
            educação, monitoramento de exercícios e seguimento. Aqui comparamos evidências, benefícios e
            limitações em relação ao atendimento presencial.
          </p>

          <h2>Evidência de eficácia</h2>
          <p>
            Revisões indicam que, para algumas condições musculoesqueléticas, intervenções baseadas em
            exercícios e educação entregues por teleconsulta apresentam efeitos similares ao presencial
            em desfechos de dor e função, especialmente quando há programas estruturados e acompanhamento.
          </p>

          <h2>Vantagens</h2>
          <p>
            Acesso ampliado, redução de deslocamento, melhor aderência em programas de exercício remoto e
            custo reduzido para pacientes são pontos fortes. Teleconsulta permite escalabilidade e triagem
            eficiente em sistemas com demanda alta.
          </p>

          <h2>Limitações</h2>
          <p>
            A limitação mais óbvia é o exame físico hands-on e técnicas que exigem presença. Além disso,
            qualidade da conexão, privacidade e alfabetização digital afetam a experiência e os resultados.
          </p>

          <h2>Modelo híbrido</h2>
          <p>
            Uma prática recomendada é combinar teleconsulta e presencial: avaliação inicial presencial
            quando necessária, com seguimento remoto para programas de exercícios e educação. Esse modelo
            otimiza recursos sem sacrificar qualidade clínica.
          </p>

          <h2>Como implementar com segurança</h2>
          <p>
            Defina protocolos de triagem, critérios para encaminhar ao presencial, documentação clara e
            consentimento informado para teleatendimento. Utilize plataformas seguras e assegure privacidade.
          </p>

          <h2>Conclusão</h2>
          <p>
            Teleconsulta é uma ferramenta valiosa na fisioterapia contemporânea quando aplicada de forma
            criteriosa, com critérios claros para atendimentos presenciais e integração em modelos híbridos.
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
