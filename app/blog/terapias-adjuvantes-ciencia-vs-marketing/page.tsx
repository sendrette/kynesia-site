import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/terapias-adjuvantes-ciencia-vs-marketing";

const faqItems = [
  {
    question: "Ultrassom terapêutico tem evidência científica?",
    answer:
      "Evidência moderna é mista e limitada. Cochrane (2020) e outras revisões mostram efeitos pequenos ou inconsistentes para maioria das condições. Mecanismos teóricos são promissores (aquecimento, microstreaming, cavitação), mas tradução clínica é fraca. Pode ter papel limitado em casos específicos, mas não deve ser primeira linha.",
  },
  {
    question: "Ondas de choque (ESWT) funcionam para tendinopatia?",
    answer:
      "Sim, com caveatas. Ondas de choque extracorpóreas mostram evidência moderada para calcificação do ombro e tendinopatia aquiliana crônica refratária quando protocolos são respeitados (energia, frequência, sessões). Não é cura mágica; melhor indicado para casos crônicos que falharam em reabilitação padrão. Mecanismo envolve estímulo inflamatório controlado e angiogênese.",
  },
  {
    question: "Como cientistas avaliam nova terapia?",
    answer:
      "Hierarquia de evidência: (1) opinião de especialista, (2) séries de casos, (3) estudos observacionais, (4) RCTs não-cegos, (5) RCTs cegos e controlados, (6) revisões sistemáticas, (7) metanálises. Terapias com suporte apenas de níveis 1-2 são suspeitas. Desconfie de promessas baseadas em mecanismo teórico sem RCT ou com RCT de qualidade baixa.",
  },
  {
    question: "Por que há tantas falsas promessas em fisioterapia?",
    answer:
      "Fisioterapia é campo multidisciplinar com heterogeneidade de profissionais. Marketing exagerado ocorre porque: (1) placebos são poderosos (esperança, toque terapêutico genuíno); (2) viés de publicação (estudos positivos publicados mais); (3) conflito de interesse (profissional vende equipamento); (4) pacientes buscam soluções rápidas; (5) falta de regulação consistente. Educação crítica contínua é antídoto.",
  },
  {
    question: "Como separar evidência legítima de marketing predatório?",
    answer:
      "Critérios: (1) procure por revisões sistemáticas em Cochrane ou PubMed, não apenas artigos únicos; (2) busque RCTs cegos, não apenas observacionais; (3) avalie tamanho de efeito (pequeno vs clinicamente relevante); (4) veja se há orientações de organizações confiáveis (APTA, Cochrane, sociedades profissionais); (5) desconfie de 'milagres' ou 'curas rápidas'; (6) pergunte: preciso desta terapia ou seria igualmente efetivo fazer exercício estruturado?",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
  description:
    "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
};

export const metadata: Metadata = {
  title: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
  description:
    "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
    description:
      "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
    url: pageUrl,
    type: "article",
  },
};

export default function TerapiasAdjuvantesPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Terapias adjuvantes</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Tratamentos</span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing</h1>

          <p className="mb-6 text-lg text-gray-600">Uma análise crítica baseada em evidência: o que funciona, mecanismos teóricos vs resultados clínicos, indicações legítimas e como identificar marketing exagerado.</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 14 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900"><strong>Resumo:</strong> Ultrassom tem evidência limitada e não é recomendado como primeira linha. Ondas de choque mostram eficácia moderada para tendinopatia crônica específica. Exercício estruturado permanece gold standard. Ao avaliar terapia nova, procure por RCTs de qualidade, não apenas mecanismo teórico.</p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">Consultório de fisioterapia brasileiro está repleto de equipamentos: ultrassom, laser, radiofrequência, magnetoterapia, ondas de choque. Promessas abound: "Remove cicatriz", "regenera tendão", "cura dor crônica". Realidade? Muitos carecem de evidência robusta. Profissional que busca melhor servir paciente deve aprender a separar potencial terapêutico real de marketing.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é uma terapia adjuvante?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Terapia adjuvante é intervenção complementar, não principal, dentro de programa de tratamento multimodal. Em fisioterapia, adjuvante ideal seria:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Baseado em mecanismo fisiológico claro e testado.</li>
          <li>Suportado por múltiplos RCTs de qualidade moderada a alta.</li>
          <li>Produz efeito aditivo significativo ao lado de intervenções principais (exercício, educação).</li>
          <li>Tem indicações claras e contraindicações definidas.</li>
          <li>Custo-benefício justificado (não é caro para pequeno benefício).</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Muitas "terapias" vendidas não atendem estes critérios.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Ultrassom terapêutico: mecanismo vs realidade</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Mecanismo teórico:</strong> Ondas ultrassônicas penetram tecido e causam vibração molecular, gerando calor (aquecimento profundo) e efeitos não-térmicos (microstreaming, cavitação, estimulação celular). Teoricamente, isso poderia acelerar cicatrização.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Evidência clínica:</strong> Cochrane (2020) revisou 52 estudos de ultrassom para dor musculoesquelética. Conclusão: "Evidência de muito baixa qualidade" de pequeno benefício para dor; "improvável clinicamente importante". Para cicatrização, estudos são heterogêneos; maioria não mostra vantagem clara. Ultrassom contínuo (aquecimento) caiu em desuso em favor de pulsado (menos efeito térmico).
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Razões para fraco desempenho:</strong>
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Penetração é limitada; muita energia é absorvida superficialmente.</li>
          <li>Efeitos não-térmicos propostos dependem de parâmetros específicos (frequência, intensidade, duração); variabilidade em equipamentos e protocolos.</li>
          <li>Placebos são potentes em dor musculoesquelética; difícil fazer RCT cego verdadeiro com ultrassom.</li>
          <li>Estudos com tamanho amostral pequeno e qualidade variável.</li>
          <li>Exercício isolado frequentemente tão ou mais efetivo.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Posição atual de organizações:</strong> APTA (American Physical Therapy Association) não recomenda ultrassom como tratamento primeira linha; Cochrane classifica como "improvável". Em alguns contextos (ex. calcificação ombro com ondas de choque), ultrassom diagnóstico é usado, mas terapêutico continua questionável.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Ondas de choque (ESWT): história de reabilitação</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Origem:</strong> Originalmente desenvolvido para litotripsia renal (quebrar cálculos). Médicos ortopédicos observaram que ondas de choque periosteal causavam resposta inflamatória controlada e melhora de cicatrização.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Mecanismo fisiológico:</strong> Ondas de choque (pressão de 0.4-0.6 bar) aplicadas a tendão causam:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>Micro-lesão controlada que dispara resposta inflamatória e reparo.</li>
          <li>Estímulo a angiogênese (neovascularização).</li>
          <li>Aumento de fatores de crescimento (VEGF, BMP).</li>
          <li>Modulação de nociceptores (dessensibilização).</li>
          <li>Reabsorção de calcificação em alguns casos.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Evidência clínica:</strong>
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Calcificação do ombro:</strong> Revisão Cochrane (2019) mostra evidência de alta qualidade que ondas de choque aceleram reabsorção de calcificação e melhora de dor/função. Recomendado para casos refratários.</li>
          <li><strong>Tendinopatia aquiliana crônica:</strong> Revisão (Mani-Babu et al., 2015) mostra efeito moderado quando protocolos são respeitados, especialmente para casos refratários após 6+ meses.</li>
          <li><strong>Epicondilite lateral (cotovelo de tenista):</strong> Estudos mostram eficácia variável; melhor quando crônica (&gt;6 meses) refratária.</li>
          <li><strong>Fascite plantar:</strong> Evidência moderada; melhora em casos crônicos refratários.</li>
          <li><strong>Outras condições:</strong> Evidência limitada; extrapolação é difícil.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Importante:</strong> ESWT não é cura mágica. Eficácia depende muito de: (1) seleção correta de caso (crônico, refratário), (2) protocolo rigoroso (número correto de ondas, energia, sessões - não improvisar), (3) combinação com reabilitação (exercício continua necessário), (4) expectativas realistas.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Outras terapias adjuvantes: o que diz evidência?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Laser (LLLT/fotobiomodulação):</strong> Mecanismo teórico é atraente (estimula mitocôndria). Evidência? Cochrane (2015) conclui: "Efeito pequeno inconsistente para dor; qualidade de estudos é fraca". Não recomendado como primeira linha.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Radiofrequência/eletroporação:</strong> Marketing agressivo em estética e lesão ortopédica. Estudos? Heterogêneos e qualidade baixa. Mecanismo promissor (estímulo colagênio) mas tradução clínica fraca.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Magnetoterapia:</strong> Popular em alguns países. Evidência? Cochrane (2009) diz não há suporte robusto.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Injeções (PRP, célula-tronco):</strong> Fora do escopo de fisioterapia (médico), mas relevante. PRP tem evidência moderada para osteoartrite e tendinopatia; céula-tronco é experimental com evidência ainda em evolução. Alto custo, reembolso incerto.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Hierarquia de evidência: como avaliar terapia nova</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando paciente ou colega propõe "terapia milagrosa", pergunte-se:
        </p>
        <ol className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Há mecanismo fisiológico plausível?</strong> Sim, mas mecanismo solo não é suficiente. Muitos mecanismos não traduzem clinicamente.</li>
          <li><strong>Há estudos controlados?</strong> Procure por RCTs (randomized controlled trials), não apenas série de casos. RCT é padrão-ouro.</li>
          <li><strong>RCT é cego?</strong> Cegamento reduz viés. Cego duplo (paciente + avaliador não sabem tratamento) é melhor que cego único.</li>
          <li><strong>RCT tem controle apropriado?</strong> Comparado com placebo ou com tratamento padrão? Placebo de aparência semelhante?</li>
          <li><strong>Tamanho de efeito é clinicamente relevante?</strong> Redução de 10% em dor é estatisticamente significante mas não clinicamente importante. Procure por NNT (number needed to treat): se NNT &gt; 10, benefício marginal.</li>
          <li><strong>Há revisão sistemática ou metanálise?</strong> Síntese de múltiplos estudos é mais robusta que estudo único.</li>
          <li><strong>Há orientação de organização confiável?</strong> APTA, Cochrane, sociedade profissional reconhecida têm peso.</li>
          <li><strong>Qual é o custo-benefício?</strong> Terapia cara com pequeno benefício não justifica uso.</li>
        </ol>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Red flags de marketing predatório</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Promessas de "cura" em condição crônica:</strong> Desonesto. Dor crônica não tem cura; objetivo é reduzir dor e melhorar função.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>"Testimunhos" de pacientes que melhoraram:</strong> Anedotas não são evidência. Placebos, seleção de viés (sucesso publicado, fracasso escondido) e regressão à média causam "melhora".
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Única fonte de evidência é revista ou jornal obscuro:</strong> Busque Cochrane, PubMed, diretrizes de organizações reconhecidas. Se só há uma pequena série não-revisada, desconfie.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Profissional vende equipamento/produto:</strong> Conflito de interesse óbvio. Incentivo financeiro distorce julgamento.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>"Tecnologia revolucionária":</strong> Genuína inovação é rara. Maioria é refinamento incremental. Desconfie de linguagem inflamada.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como usar adjuvantes corretamente</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Se decide usar terapia adjuvante (ex. ESWT para calcificação ombro refratária):
        </p>
        <ol className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Diagnóstico claro:</strong> Confirme com imaging se necessário. Não use ESWT genericamente para "dor ombro".</li>
          <li><strong>Critérios de elegibilidade definidos:</strong> ex. ESWT para calcificação ombro &gt;6 meses refratária a 3+ meses reabilitação estruturada.</li>
          <li><strong>Consentimento informado:</strong> Explique mecanismo, expectativas realistas (melhora, não cura), possíveis efeitos colaterais, custo.</li>
          <li><strong>Protocolo estruturado:</strong> Siga protocolo que foi estudado (não improvise intensidade/sessões). ex. ESWT para calcificação: 3-4 sessões de ~1500-2500 ondas.</li>
          <li><strong>Monitoramento:</strong> Avalie resposta após 2-3 sessões. Se sem benefício, descontinue (não continue esperando "milagre").</li>
          <li><strong>Reabilitação contínua:</strong> Não deixe paciente passivo. Adjuvante é complemento, não substituição de exercício.</li>
          <li><strong>Documentação:</strong> Registre indicação clara, resultado esperado, resultado real. Isso refina sua prática.</li>
        </ol>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que realmente funciona em fisioterapia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Se você quer melhor resultado clínico, estudos robustos mostram que investir em:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Exercício estruturado, progressivo, desafiador:</strong> Maior corpo de evidência. Resultado dura. Autocuidado.</li>
          <li><strong>Educação do paciente:</strong> Sobre mecanismo dor, automanejo, confiança. Reduz catastrofismo.</li>
          <li><strong>Relacionamento terapêutico:</strong> Empatia, escuta, suporte. Placebo genuíno (esperança + confiança) é poderoso.</li>
          <li><strong>Avaliação e reavaliação frequente:</strong> Dados orientam ajustes. Trial-and-error inteligente.</li>
          <li><strong>Integração com outros profissionais:</strong> Quando necessário, psicologia, medicina, terapia ocupacional.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Adjuvantes bem-escolhidos podem adicionar pequeno benefício. Mas não espere que "máquina milagrosa" faça trabalho pesado que exercício deve fazer.</p>

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
            Terapias adjuvantes têm lugar legítimo em fisioterapia quando: (1) há evidência de qualidade adequada, (2) indicação é clara e específica, (3) usadas como complemento a exercício/educação (não substituto), (4) custo-benefício é justificado.
          </p>
          <p className="mb-4 leading-relaxed">
            Como profissional responsável, sua missão é separar ciência genuína de marketing. Leia sistematicamente: Cochrane Reviews, metanálises, RCTs. Questione mecanismo teórico sem suporte clínico. Seja cético de "soluções milagrosas". Implemente adjuvantes com protocolo estruturado, critérios de resposta claros e documentação rigorosa.
          </p>
          <p className="leading-relaxed">
            Seus pacientes merecem intervenções baseadas em evidência. Não pior: aquelas que realmente funcionam.
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
