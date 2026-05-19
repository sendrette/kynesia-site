import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/dry-needling-eficacia-riscos-quando-indicar";

const faqItems = [
  {
    question: "O que é dry needling e qual é sua base fisiológica?",
    answer:
      "Dry needling é a inserção de agulhas sólidas de acupuntura em pontos miofasciais hiperirritáveis. Mecanismos propostos incluem: (1) inativação direta de pontos gatilho por meio de respostas locais de contratura muscular, (2) modulação central de dor via estimulação nociceptiva e ativação de vias inibitórias descendentes, (3) liberação local de neurotransmissores como serotonina e noradrenalina, e (4) estímulo à cascata de reparo local com aumento de fatores de crescimento.",
  },
  {
    question: "Como dry needling difere da acupuntura tradicional?",
    answer:
      "Embora ambas usem agulhas, diferem fundamentalmente em base teórica e prática: dry needling fundamenta-se em neurofisiologia ocidental e anatomia de pontos gatilho miofasciais; acupuntura segue paradigma tradicional chinês baseado em meridianos e fluxo de qi. Dry needling é tipicamente superficial a profundo em musculatura, enquanto acupuntura pode ser mais superficial. Dry needling geralmente causa sensações de desperte (local twitch response), enquanto acupuntura busca sensação de deqi.",
  },
  {
    question: "Quais são os riscos e como minimizá-los?",
    answer:
      "Riscos comuns incluem dor local, sangramento leve, hematomas e desconforto transitório. Riscos sérios são raros mas incluem pneumotórax (regiões apicais/torácicas), perfuração de estruturas vitais e infecção. Minimização: (1) treinamento adequado em anatomia, palpação e técnica; (2) consentimento informado; (3) técnica estéril; (4) contraindicações bem definidas; (5) profundo conhecimento de anatomia segura para cada região.",
  },
  {
    question: "Qual é a evidência de eficácia para dor crônica?",
    answer:
      "Revisões sistemáticas (Cochrane, 2020) mostram efeito pequeno a moderado para dor musculoesquelética a curto prazo, especialmente quando combinado com exercício. Eficácia em repouso é limitada. Melhor evidência para síndrome miofascial cervical e dor miofascial em ombro. Para outras condições (LBP simples, OA), evidência é inconsistente.",
  },
  {
    question: "Dry needling substitui outros tratamentos?",
    answer:
      "Não. Dry needling é mais efetivo como adjuvante dentro de programa multimodal que inclui exercício, educação, autocuidado e, quando indicado, outras intervenções. Estudos mostram que exercício isolado frequentemente é tão ou mais efetivo que dry needling isolado.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dry needling: eficácia, riscos e quando indicar",
  description:
    "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
};

export const metadata: Metadata = {
  title: "Dry needling: eficácia, riscos e quando indicar",
  description:
    "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Dry needling: eficácia, riscos e quando indicar",
    description:
      "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
    url: pageUrl,
    type: "article",
  },
};

export default function DryNeedlingPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Dry needling</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Terapias
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dry needling: eficácia, riscos e quando indicar
          </h1>

          <p className="mb-6 text-lg text-gray-600">Uma análise baseada em evidência da eficácia, mecanismos fisiológicos, indicações clínicas e segurança do dry needling na fisioterapia moderna.</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 15 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Resumo:</strong> Dry needling mostra efeito pequeno a moderado para dor miofascial a curto prazo, com melhor evidência quando combinado a exercício. Segurança é excelente com treinamento adequado. Indicação deve ser seletiva dentro de programa multimodal, não como terapia isolada.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Dry needling consiste na inserção de agulhas sólidas em pontos miofasciais hiperirritáveis. Mecanismos propostos incluem redução da atividade de ponto gatilho, modulação da nocicepção e estímulo de mecanismos locais de reparo.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é um ponto gatilho miofascial?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um ponto gatilho é um nódulo hiperirritável dentro de uma banda tensa de músculo esquelético. Quando estimulado, produz dor local ou referida além da área de origem. Clinicamente, existem dois tipos: ativos (que causam dor espontânea) e latentes (que causam dor apenas sob pressão ou estimulação). A teoria de Simons sugere que pontos gatilho resultam de disfunção na junção neuromuscular, levando a contração sustentada.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Base fisiológica do dry needling</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A inserção da agulha causa resposta mecânica local (contratura muscular) que pode interromper o ciclo de contração sustentada. Além disso, estimula uma cascata neurofisiológica:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Nível local:</strong> Liberação de neurotransmissores (serotonina, noradrenalina), aumento de óxido nítrico, mobilização de cálcio intracelular e estímulo à cascata de cicatrização/reparo.</li>
          <li><strong>Nível segmentar:</strong> Estimulação de mecanismos espinhais inibitórios, ativação de interneurônios inibitórios que reduzem transmissão nociceptiva.</li>
          <li><strong>Nível supra-segmentar:</strong> Ativação de vias descendentes inibitórias (núcleos do rafe, locus coeruleus) que promovem analgesia generalizada.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Evidência clínica: o que dizem as revisões sistemáticas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisão Cochrane (Brady et al., 2020) analisou 60+ estudos e concluiu que dry needling produziu redução de dor pequena a moderada a curto prazo (até 4 semanas), com tamanho de efeito clínico questionável quando comparado a placebo agressivo. Achados-chave:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Comparado a placebo:</strong> Efeito pequeno para dor; efeito incerto para função.</li>
          <li><strong>Comparado a exercício:</strong> Exercício isolado geralmente tão ou mais efetivo que dry needling isolado.</li>
          <li><strong>Combinado a exercício:</strong> Efeito aditivo pequeno mas potencialmente relevante clinicamente.</li>
          <li><strong>Efeito prolongado:</strong> Benefício tende a ser de curto prazo (até 1 mês); ganhos em longo prazo não bem estabelecidos.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Condições com melhor suporte de evidência</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Dry needling mostra evidência mais consistente para:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Síndrome miofascial cervical:</strong> Efeito moderado em redução de dor e melhora de mobilidade, especialmente quando combinado com exercício cervical.</li>
          <li><strong>Dor miofascial em ombro:</strong> Evidência moderada para síndrome de dor miofascial; pode ser útil em casos com restrição articular relacionada a tensão muscular.</li>
          <li><strong>Cefaleia tipo tensão:</strong> Estudos sugerem benefício em redução de frequência e intensidade quando há componente miofascial cervical claro.</li>
          <li><strong>Dor lombar com componente miofascial:</strong> Evidência mais fraca; melhor quando há clara identificação de ponto gatilho referindo para baixo.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Indicações clínicas na prática</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Considere dry needling quando:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Paciente apresenta dor muscular referida ou local consistente com ponto gatilho miofascial.</li>
          <li>Há banda tensa palpável e ponto hiperirritável reproduzindo ou exacerbando queixa.</li>
          <li>Resposta inadequada a exercício e educação isolados (após 2-4 semanas de programa estruturado).</li>
          <li>Paciente é receptivo e compreende mecanismos e riscos.</li>
          <li>Está planejado como adjuvante dentro de programa multimodal, não como intervenção isolada.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Contraindicações e precauções</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Contraindicações absolutas:</strong>
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Coagulopatia não controlada ou uso de anticoagulantes em dose terapêutica (discussão caso a caso com médico).</li>
          <li>Infecção ativa local ou sistêmica não tratada.</li>
          <li>Falta de consentimento informado.</li>
          <li>Alergia conhecida a níquel ou material da agulha.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Contraindicações relativas/precauções:</strong>
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Regiões torácicas (apicais):</strong> Risco de pneumotórax; requer anatomia precisa e técnica cuidadosa. Considerar após benefício/risco.</li>
          <li><strong>Pescoço (perto de carótida/jugular):</strong> Exige conhecimento anatômico profundo; técnica é crítica.</li>
          <li><strong>Grávidas:</strong> Dados limitados; discussão caso a caso e evitar certas áreas.</li>
          <li><strong>Pacientes com medo de agulhas:</strong> Suporte emocional e consideração alternativa.</li>
          <li><strong>Lesão de nervo periférico ou incerteza diagnóstica:</strong> Avaliação mais cuidadosa necessária.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Riscos e segurança</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Reações locais (comuns):</strong> Dor durante inserção, eritema local, hematoma (2-5%), sensação residual transitória.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Reações sistêmicas raras:</strong> Sincope vasovagal (particularmente em pacientes ansiosos), dor irradiada transitória.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Complicações sérias (muito raras com treinamento adequado):</strong> Pneumotórax, hemotórax, perfuração de órgão abdominal, infecção (inclusive endocardite em casos raros com manipulação agressiva próximo a articulações), lesão de nervo.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Minimização de riscos:</strong> Treinamento formal em anatomia e técnica, consentimento informado documentado, técnica estéril, conhecimento de anatomia de superfície, profundidade segura para cada região, critérios de contraindicação claros e evitar manipulação excessiva.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como integrar dry needling na prática clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Melhor aplicação ocorre dentro de abordagem multimodal estruturada:
        </p>
        <ol className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Avaliação clara:</strong> Confirme diagnóstico, identifique ponto gatilho, tenha diagnóstico diferencial em mente.</li>
          <li><strong>Educação e consentimento:</strong> Explique mecanismo, riscos e alternativas; obtenha consentimento documentado.</li>
          <li><strong>Programa de exercício:</strong> Estruture programa de exercício ativo paralelo (não deixe paciente passivo).</li>
          <li><strong>Monitore resposta:</strong> Avalie dor, função e padrões de movimento após 2-3 sessões. Se sem resposta, reavalie indicação.</li>
          <li><strong>Integre progressivamente:</strong> Reduza frequência conforme paciente melhora; priorize atividade funcional e autocuidado.</li>
        </ol>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Protocolos baseados em evidência</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para síndrome miofascial cervical com componente referido para ombro:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Frequência: 1-2 vezes por semana, 4-6 sessões; máximo 8 sessões se sem resposta, reavalie.</li>
          <li>Profundidade e técnica: Identifique banda tensa; insira até sensação de desperto local; pode fazer múltiplas penetrações.</li>
          <li>Concomitante: Mobilização cervical (se tolerado), exercício de estabilidade cervical (progressivo), educação postural e de ergonomia.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para cefaleia tipo tensão com componente miofascial:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Foco em trapézio superior, esternocleidomastóideo, suboccipitais se palpação confirma.</li>
          <li>Combinar com relaxamento muscular ativo, exercício cervical e controle postural.</li>
          <li>Considerar após 2-4 semanas de exercício sem resposta.</li>
        </ul>

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
          <h2 className="mb-4 text-2xl font-bold">Conclusão</h2>
          <p className="mb-4 leading-relaxed">
            Dry needling é uma ferramenta clínica validada com suporte de evidência moderada quando bem indicada. A chave para seu uso apropriado é: (1) seleção cuidadosa de casos com claro componente miofascial, (2) treinamento formal em técnica e anatomia segura, (3) consentimento informado documentado, (4) integração em programa multimodal que prioriza exercício e autocuidado, e (5) monitoramento de resposta com critérios claros para descontinuação se sem benefício.
          </p>
          <p className="leading-relaxed">
            Não substitua intervenções com maior suporte de evidência (exercício estruturado, educação). Use como adjuvante seletivo para pacientes que respondem inadequadamente a intervenções ativas isoladas. Mantenha-se atualizado com literatura, respeite contraindicações e sempre coloque segurança do paciente em primeiro lugar.
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
