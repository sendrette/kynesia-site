import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/red-flags-dor-lombar-quando-suspeitar";

const faqItems = [
  {
    question: "O que são red flags na dor lombar?",
    answer: "Red flags na dor lombar são sinais e sintomas clínicos que sugerem a presença de patologias subjacentes graves e não-mecânicas da coluna, como tumores, infecções, fraturas ou a Síndrome da Cauda Equina, necessitando de encaminhamento médico imediato."
  },
  {
    question: "A presença de uma red flag confirma uma patologia grave?",
    answer: "Não. A presença de uma red flag não significa diagnóstico, mas sim um sinal de alerta de que a probabilidade da patologia aumentou e que o paciente requer uma avaliação médica diagnóstica de urgência."
  },
  {
    question: "Quais são as red flags neurológicas mais críticas na dor lombar?",
    answer: "As mais críticas são as associadas à Síndrome da Cauda Equina e compressões medulares severas: anestesia em sela (perda de sensibilidade na região genital e interna das coxas), disfunção urinária ou intestinal (incontinência ou retenção) e perda de força muscular rápida ou progressiva nos membros inferiores."
  },
  {
    question: "Qual a prevalência de condições graves associadas a red flags na dor lombar?",
    answer: "A prevalência geral é baixa na atenção primária: fraturas espinhais acometem cerca de 0,6%, tumores 0,7%, infecções 0,3% e Síndrome da Cauda Equina 0,2%. Contudo, o impacto clínico tardio é catastrófico, justificando a triagem sistemática."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?",
  description: "Entenda o que são as red flags dor lombar, saiba identificar os principais sinais de alerta clínicos e quando encaminhar o paciente com urgência para o médico.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-30",
  dateModified: "2026-06-30",
  image: "https://kynesia.com.br/blog/red-flags-dor-lombar.jpg",
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
  title: "Red Flags na Dor Lombar: Quando Suspeitar?",
  description: "Entenda o que são as red flags dor lombar, saiba identificar os principais sinais de alerta clínicos e quando encaminhar o paciente com urgência para o médico.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Red Flags na Dor Lombar: Quando Suspeitar?",
    description: "Entenda o que são as red flags dor lombar, saiba identificar os principais sinais de alerta clínicos e quando encaminhar o paciente com urgência para o médico.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/red-flags-dor-lombar.jpg",
        width: 1200,
        height: 800,
        alt: "Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?",
      },
    ],
  },
};

export default function RedFlagsDorLombarPage() {
  return (
    <main className="bg-white text-gray-900 animate-fadeIn">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Avaliação Clínica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a identificar os principais sinais de alerta em pacientes com dor lombar e entenda o papel crítico do fisioterapeuta na triagem clínica baseada em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 30 Jun 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Featured Image inside the Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/red-flags-dor-lombar.jpg"
            alt="Infográfico detalhado sobre identificação, avaliação e conduta baseada em evidências para Red Flags na Fisioterapia e dor lombar"
            width={1200}
            height={800}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            As <strong>red flags dor lombar</strong> são sinais e sintomas clínicos que apontam para a possível existência de patologias graves subjacentes, como tumores, infecções, fraturas ou a Síndrome da Cauda Equina. O papel do fisioterapeuta é triar e identificar esses sinais durante a anamnese e exame físico para encaminhar imediatamente o paciente para a avaliação médica de urgência. A detecção precoce dessas condições salva vidas e previne lesões neurológicas irreversíveis.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Como profissional de primeiro contato, o fisioterapeuta frequentemente atende pacientes que buscam alívio imediato para a dor lombar antes mesmo de passar por uma consulta médica. Na imensa maioria dos casos (cerca de 90% a 95%), a dor na região lombar é classificada como \"dor lombar inespecífica\" ou de origem mecânico-degenerativa comum, que responde de forma excelente ao tratamento fisioterapêutico convencional.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Contudo, existe uma pequena parcela de pacientes cuja dor na coluna esconde condições graves não-mecânicas. Identificar essas patologias de forma ágil e segura é uma das habilidades mais importantes da prática baseada em evidências. É aqui que entram os sinais de alerta conhecidos cientificamente como <strong>red flags dor lombar</strong>.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/red-flags-na-fisioterapia" className="text-teal-600 hover:underline">
                → Red Flags na Fisioterapia: Quando a Dor Pode Indicar Algo Mais Grave?
              </Link>
            </li>
            <li>
              <Link href="/blog/yellow-flags-na-fisioterapia-fatores-psicossociais" className="text-teal-600 hover:underline">
                → Yellow Flags na Fisioterapia: Como Fatores Psicossociais Influenciam a Dor
              </Link>
            </li>
            <li>
              <Link href="/blog/como-montar-prontuario-fisioterapeutico-completo" className="text-teal-600 hover:underline">
                → Como Montar um Prontuário Fisioterapêutico Completo: O Que Não Pode Faltar
              </Link>
            </li>
            <li>
              <Link href="/blog/raciocinio-clinico-na-fisioterapia-avaliacoes-diferentes" className="text-teal-600 hover:underline">
                → Raciocínio Clínico na Fisioterapia: Por que Ocorrem Divergências de Diagnóstico?
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Que São Red Flags e Por Que São Cruciais?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Red flags</strong> (bandeiras vermelhas) são sinais clínicos e sintomas descritos pelo paciente que aumentam significativamente a probabilidade de uma doença grave subjacente. Essas condições exigem uma avaliação médica diagnóstica imediata por meio de exames laboratoriais ou de imagem e não devem ser tratadas de forma isolada com recursos de fisioterapia.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A realização sistemática dessa triagem durante as avaliações clínicas é fundamental pelos seguintes motivos:
        </p>
        <ul className="mb-8 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Aumentam a segurança do paciente:</strong> Evitam intervenções mecânicas contraindicadas (como manipulações articulares em colunas fragilizadas por metástases ou osteoporose).</li>
          <li><strong>Reduzem o risco de complicações graves:</strong> Minimizam sequelas irreversíveis de compressão nervosa ou progressão infecciosa.</li>
          <li><strong>Direcionam o encaminhamento adequado:</strong> Garantem que o paciente receba o suporte médico especialista no momento certo.</li>
          <li><strong>Melhoram o raciocínio clínico:</strong> Aguçam o diagnóstico diferencial e a tomada de decisão do terapeuta.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Classificação das Red Flags na Dor Lombar</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Com base em diretrizes internacionais consagradas (como o framework da <em>IFOMPT 2021</em> e o guia <em>NICE NG59</em>), podemos agrupar os sinais de alerta de <strong>red flags dor lombar</strong> em três principais categorias clínicas:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">1. Red Flags Sistêmicas (Alerta de Infecção ou Neoplasia)</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Sintomas gerais que refletem o envolvimento de sistemas biológicos amplos, sugerindo infecções ativas ou processos tumorais ocultos:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li>Febre inexplicada ou calafrios frequentes.</li>
              <li>Perda de peso não intencional (perda de mais de 10% do peso em poucos meses sem explicação).</li>
              <li>Fadiga constante e debilidade física acentuada.</li>
              <li>Histórico prévio de câncer (um dos fatores preditivos individuais mais fortes para metástase na coluna).</li>
              <li>Imunossupressão (pacientes em quimioterapia, uso crônico de corticoides ou portadores de HIV).</li>
              <li>Infecções urinárias ou de pele recentes.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">2. Red Flags Neurológicas (Risco de Compressão Medular Grave)</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Sinais que demonstram compressão severa de raízes nervosas terminais ou do cone medular, exigindo cirurgia descompressiva de urgência:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li>Déficit neurológico progressivo e severo (perda de reflexos profundos bilateralmente).</li>
              <li>Perda de força rápida ou progressiva nos membros inferiores (dificuldade súbita para andar ou elevar o pé).</li>
              <li><strong>Alterações de sensibilidade em sela:</strong> Dormência ou perda completa de sensibilidade na região perineal, nádegas, genitais e parte interna das coxas.</li>
              <li><strong>Disfunção de bexiga ou intestino:</strong> Incontinência urinária ou fecal súbita, retenção urinária ou incapacidade de controlar esfíncteres.</li>
              <li>Tontura severa ou cefaleia súbita associada a movimentos de flexão da coluna.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">3. Red Flags Músculo-Esqueléticas / Estruturais</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Sintomas mecânicos atípicos que sugerem fraturas por fadiga/osteoporose ou instabilidade mecânica extrema:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li>Dor noturna constante que perturba o sono de forma grave e não se altera ao mudar de posição física.</li>
              <li>Dor lombar com história de trauma recente significativo (quedas de altura, acidentes automobilísticos ou esforço extremo em pacientes com osteoporose).</li>
              <li>Dor que não melhora de forma alguma com o repouso absoluto.</li>
              <li>Rigidez matinal prolongada que persiste por mais de 1 hora (sinal de possíveis espondiloartropatias inflamatórias).</li>
              <li>Idade menor que 20 ou maior que 55 anos com dor lombar nova de início súbito e sem causa evidente.</li>
            </ul>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Prevalência Epidemiológica: Baixa Prevalência, Alto Impacto</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um dos maiores desafios na triagem de <strong>red flags dor lombar</strong> é que a maioria dessas bandeiras vermelhas possui baixa especificidade quando analisadas de forma isolada. Por exemplo, \"dor noturna\" ou \"dor que não melhora com repouso\" são comuns em crises agudas de dor lombar inespecífica.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Estudos epidemiológicos consolidados em dor lombar demonstram que as patologias graves têm taxas de prevalência geral muito baixas na atenção primária:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Condição Patológica Grave</th>
                <th className="px-6 py-3 text-center font-bold text-gray-900 text-red-600">Prevalência Média (%)</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Repercussão Clínica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Neoplasias (Câncer)</td>
                <td className="px-6 py-4 text-center text-red-600 font-bold">0,7%</td>
                <td className="px-6 py-4 text-gray-700">Metástase na coluna decorrente de câncer de mama, próstata ou pulmão.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Fraturas Vertebrais</td>
                <td className="px-6 py-4 text-center text-red-600 font-bold">0,6%</td>
                <td className="px-6 py-4 text-gray-700">Achatamento de corpos vertebrais por fragilidade óssea ou trauma mecânico direto.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Infecções Espinhais (Espondilodiscite)</td>
                <td className="px-6 py-4 text-center text-red-600 font-bold">0,3%</td>
                <td className="px-6 py-4 text-gray-700">Infecção bacteriana ou tuberculosa do disco intervertebral e osso adjacente.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Síndrome da Cauda Equina</td>
                <td className="px-6 py-4 text-center text-red-600 font-bold">0,2%</td>
                <td className="px-6 py-4 text-gray-700">Compressão massiva das raízes nervosas lombossacrais na extremidade inferior da medula.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Outras Condições Graves (ex: Aneurisma)</td>
                <td className="px-6 py-4 text-center text-red-600 font-bold">1,0%</td>
                <td className="px-6 py-4 text-gray-700">Patologias vasculares abdominais ou distúrbios retroperitoneais que simulam lombalgia.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Apesar de a prevalência individual ser baixa, o impacto de deixar passar um diagnóstico como a Síndrome da Cauda Equina é devastador: o atraso de poucas horas na descompressão cirúrgica pode resultar em paraplegia permanente e disfunção urinária irreversível. Portanto, a regra de ouro na prática clínica baseada em evidências é: <strong>a prevalência é baixa, mas o impacto é altíssimo. Nunca ignore as red flags.</strong>
        </p>

        <div className="mb-8 rounded-2xl border-2 border-red-500 bg-red-50/50 p-6">
          <h4 className="mb-2 font-bold text-red-950 text-lg flex items-center gap-2">
            ⚠️ ATENÇÃO
          </h4>
          <p className="text-red-950 text-sm leading-relaxed font-medium">
            A presença isolada ou combinada de red flags não estabelece um diagnóstico definitivo de doença grave. Ela indica simplesmente que a probabilidade clínica aumentou significativamente e exige a realização de exames complementares urgentes conduzidos por equipe médica.
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conduta Recomendada para o Fisioterapeuta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Caso identifique indícios fortes de uma bandeira vermelha durante a sua avaliação, adote uma conduta padronizada de quatro etapas:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. Anamnese Direcionada:</strong> Questione de forma intencional sobre histórico prévio de câncer, alterações de sensibilidade na região genital e infecções bacterianas ativas recentes.
            </li>
            <li>
              <strong>2. Exame Físico Criterioso:</strong> Realize testes neurológicos básicos de triagem (reflexo patelar, aquileu, sensibilidade cutânea no dermátomo de S1-S4 e força de dorsiflexão e extensão do hálux) para confirmar os achados relevantes.
            </li>
            <li>
              <strong>3. Encaminhamento Médico Urgente:</strong> Se houver fortes indícios de Síndrome da Cauda Equina ou déficit neurológico progressivo rápido, encaminhe o paciente imediatamente ao pronto-socorro ortopédico/neurológico. Para outros sinais sistêmicos crônicos (como suspeita de neoplasia decorrente de perda de peso), faça o encaminhamento por escrito ao médico especialista.
            </li>
            <li>
              <strong>4. Registro Detalhado no Prontuário:</strong> Documente detalhadamente no seu prontuário eletrônico quais red flags foram investigadas, quais testaram positivo, a justificativa do encaminhamento e a conduta de segurança realizada. Isso é indispensável para a sua proteção ética e jurídica.
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Rastrear para Proteger</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em resumo, a triagem de <strong>red flags dor lombar</strong> é uma obrigação assistencial em toda avaliação fisioterapêutica da coluna vertebral. Saber filtrar os pacientes que necessitam de intervenção médica diagnóstica urgente antes da reabilitação garante que o tratamento físico seja aplicado de forma segura, eficiente e baseada nas melhores diretrizes de saúde do mundo.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Lembre-se da mensagem-chave científica: **reconhecer red flags é uma habilidade de triagem que salva vidas**.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700 border-t border-gray-100 pt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Resumo Clínico em Destaque */}
        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide">RESUMO CLÍNICO</h2>
          <p className="mb-4 leading-relaxed text-gray-300">
            A triagem de red flags dor lombar é parte integrante do raciocínio clínico de primeiro contato na fisioterapia ortopédica.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Os sinais neurológicos agudos (anestesia em sela, disfunção miccional) exigem encaminhamento emergencial para descompressão cirúrgica imediata da cauda equina.
          </p>
          <p className="leading-relaxed text-gray-300">
            O registro completo e minucioso da ausência ou presença de red flags no prontuário eletrônico consolida o rigor ético-profissional do fisioterapeuta.
          </p>
        </div>

        {/* Equipe Kynesia Signature */}
        <div className="flex items-center gap-4 border-t border-gray-200 pt-8 mb-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700 shrink-0">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">EQUIPE KYNESIA</p>
            <p className="text-sm text-gray-600">
              Conteúdo clínico baseado em evidências desenvolvido para fisioterapeutas, estudantes e gestores que buscam aprimorar sua prática profissional por meio da tecnologia, gestão clínica e atualização científica contínua.
            </p>
          </div>
        </div>

        {/* Bloco de Conversão */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados, indicadores clínicos e ferramentas para otimizar a rotina da clínica.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se você busca mais organização, produtividade e qualidade no atendimento, conheça gratuitamente o Kynesia.
          </p>
          <Link
            href="/start-free"
            className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-teal-900 transition-all hover:bg-teal-50 hover:shadow-md active:scale-95"
          >
            Começar Grátis
          </Link>
        </div>
      </article>
    </main>
  );
}
