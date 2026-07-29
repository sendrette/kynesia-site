import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/testes-clinicos-manguito-rotador-precisao-diagnostica";

const faqItems = [
  {
    question: "Por que não podemos confiar em um único teste para diagnosticar lesão do manguito rotador?",
    answer: "Nenhum teste físico isolado possui sensibilidade e especificidade perfeitas. Testes isolados geram altas taxas de falso-positivos ou falso-negativos. O diagnóstico preciso baseia-se na combinação lógica de testes (clusters) interpretados em conjunto com a história clínica e os sintomas do paciente."
  },
  {
    question: "Qual a diferença prática entre sensibilidade e especificidade nos testes do ombro?",
    answer: "A sensibilidade indica a capacidade do teste em detectar a lesão quando ela de fato existe (útil para triagem/descarte: se der negativo, afasta a suspeita). A especificidade mostra a capacidade do teste em dar negativo quando o paciente é saudável (útil para confirmação: se der positivo, confirma a lesão)."
  },
  {
    question: "O que é o cluster de Park e como ele ajuda no diagnóstico?",
    answer: "O cluster de Park é um agrupamento de três testes para lesão do manguito rotador: Arco Doloroso, Teste de Queda do Braço (Drop Arm Test) e Teste de Rotação Externa Resistida. Se todos os três forem positivos, a probabilidade pós-teste de haver uma ruptura do manguito rotador sobe para cerca de 98%."
  },
  {
    question: "Quais são as red flags que exigem encaminhamento médico imediato na dor no ombro?",
    answer: "As principais red flags no ombro são: história de trauma importante recente (risco de fraturas/luxações severas), perda de força motora súbita e severa, dor noturna constante e progressiva (suspeita de neoplasias ou infecções articulares) e perda de amplitude de movimento global rápida."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Diagnosticar uma Lesão do Manguito Rotador: Quais Testes Clínicos Têm Maior Precisão?",
  description: "Entenda quais testes clínicos do manguito rotador possuem maior precisão. Aprenda a usar sensibilidade, especificidade e clusters na avaliação física.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  image: "https://kynesia.com.br/blog/testes-clinicos-manguito-rotador.jpg",
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
  title: "Testes Clínicos de Lesão do Manguito Rotador: Guia",
  description: "Descubra quais testes clínicos do manguito rotador têm maior precisão diagnóstica. Veja sensibilidade, especificidade e a combinação certa!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Testes Clínicos de Lesão do Manguito Rotador: Guia",
    description: "Descubra quais testes clínicos do manguito rotador têm maior precisão diagnóstica. Veja sensibilidade, especificidade e a combinação certa!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/testes-clinicos-manguito-rotador.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre a acurácia dos testes clínicos para diagnóstico de lesões do manguito rotador na fisioterapia",
      },
    ],
  },
};

export default function TestesManguitoPage() {
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
          <span className="font-medium text-teal-600">Avaliação Clínicas</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Como Diagnosticar uma Lesão do Manguito Rotador: Quais Testes Clínicos Têm Maior Precisão?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a aplicar a prática baseada em evidências para estruturar a avaliação do ombro utilizando os testes de maior sensibilidade e especificidade para o manguito rotador.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 13 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/testes-clinicos-manguito-rotador.jpg"
            alt="Infográfico resumindo a anatomia e a precisão (sensibilidade e especificidade) dos testes físicos do manguito rotador"
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
            Para diagnosticar uma lesão do manguito rotador com precisão, a avaliação física deve utilizar <strong>clusters (agrupamentos) de testes</strong> em vez de manobras isoladas. Testes com alta sensibilidade, como o Teste de Jobe (88%), servem para descartar a patologia quando negativos. Em contrapartida, testes de alta especificidade, como o Teste de Patte (94%) e o Lift-Off Test (94%), são indispensáveis para confirmar a lesão quando positivos. A acurácia diagnóstica definitiva é alcançada correlacionando esses achados com a história de dor, perda de força funcional e restrição de amplitude do paciente.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A dor no ombro provocada por disfunções do complexo tendinoso do manguito rotador representa uma das afecções ortopédicas de maior incidência na clínica fisioterapêutica. Historicamente, os profissionais dependiam fortemente de exames de imagem, como ressonâncias magnéticas ou ultrassonografias, para basear suas condutas. Contudo, a literatura contemporânea demonstra que achados de imagem estruturais (como rupturas parciais ou degenerações) são comuns em indivíduos assintomáticos, gerando o risco de sobretratamento.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Isso coloca a avaliação física funcional de volta ao papel de destaque. Para realizar um diagnóstico clínico cinético-funcional qualificado, o fisioterapeuta deve dominar as propriedades estatísticas (sensibilidade e especificidade) dos **testes clínicos do manguito rotador**.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Seguindo as premissas da prática baseada em evidências, \"nenhum teste isolado confirma uma lesão. A combinação certa faz toda a diferença\". Ao longo deste guia científico, detalhamos como estruturar o exame físico do ombro correlacionando a acurácia de cada manobra aos componentes anatômicos correspondentes.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/sensibilidade-especificidade-razoes-verossimilhanca-testes-ortopedicos" className="text-teal-600 hover:underline">
                → Sensibilidade e Especificidade: Como Interpretar Testes Ortopédicos na Prática
              </Link>
            </li>
            <li>
              <Link href="/blog/diferenca-manguito-rotador-bursite-capsulite" className="text-teal-600 hover:underline">
                → Manguito Rotador, Bursite e Capsulite Adesiva: Guia de Diferenciação
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no Ombro ao Levantar o Braço: Entenda as Principais Causas Clínicas
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-especial-positivo-significa-diagnostico" className="text-teal-600 hover:underline">
                → Teste Especial Positivo Significa Diagnóstico? O Que a Ciência Mostra
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Anatomia Funcional e Estabilização Dinâmica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O manguito rotador funciona como um estabilizador dinâmico ativo fundamental para manter a cabeça do úmero centralizada na cavidade glenoide rasa durante a mobilidade geral do membro superior. Cada componente muscular desempenha ações motoras precisas avaliadas nos testes específicos:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li><strong>Supraespinhal:</strong> Responsável por iniciar o movimento de abdução do braço (até os primeiros 15°) e exercer a depressão estabilizadora da cabeça umeral contra a tração ascendente do músculo deltoide.</li>
          <li><strong>Infraespinhal:</strong> Atua como o motor primário da rotação externa ativa do úmero, sendo essencial para frear a rotação interna e estabilizar a porção posterior da cápsula glenoumeral.</li>
          <li><strong>Subescapular:</strong> O maior e mais forte músculo do manguito, executa a rotação interna ativa e fornece estabilidade dinâmica anterior crítica.</li>
          <li><strong>Deltoide:</strong> Embora não seja do manguito rotador, atua de forma coordenada na elevação e abdução geral do braço.</li>
          <li><strong>Bíceps Braquial (Cabeça Longa):</strong> O tendão da cabeça longa do bíceps cruza a articulação superiormente, auxiliando na flexão do cotovelo e na estabilização anterior/superior do ombro.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Acurácia dos Testes Estruturados por Músculo</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Durante a avaliação do manguito rotador, aplicamos manobras que isolam isometricamente a ação de cada músculo sob resistência mecânica. Conforme exibido no infográfico de precisão diagnóstica do Kynesia, os valores estatísticos variam consideravelmente:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">Supraespinhal: Teste de Jobe (Empty Can)</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Realizado com o ombro do paciente em abdução de 90° no plano da escápula (aproximadamente 30° de anteriorização) e em rotação interna máxima (polegar apontando para o chão). O terapeuta aplica uma força descendente sobre o braço enquanto o paciente resiste.
            </p>
            <ul className="list-none mt-2 space-y-1 text-sm font-semibold">
              <li className="text-teal-700">✓ Sensibilidade: 88%</li>
              <li className="text-gray-700">✓ Especificidade: 62%</li>
            </ul>
            <p className="leading-relaxed text-gray-700 mt-2 text-xs">
              *Nota Clínica:* Sua altíssima sensibilidade (88%) faz do Teste de Jobe um excelente filtro clínico. Se o teste for **negativo**, há grande probabilidade estatística de que a integridade do supraespinhal esteja preservada (descarte de lesão).
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">Infraespinhal: Teste de Patte</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Avalia a integridade do músculo infraespinhal colocando o paciente com o braço em abdução de 90° e flexão de cotovelo a 90° (posição de abdução no plano frontal). O fisioterapeuta solicita uma rotação externa isométrica resistida.
            </p>
            <ul className="list-none mt-2 space-y-1 text-sm font-semibold">
              <li className="text-teal-700">✓ Sensibilidade: 53%</li>
              <li className="text-gray-700">✓ Especificidade: 94%</li>
            </ul>
            <p className="leading-relaxed text-gray-700 mt-2 text-xs">
              *Nota Clínica:* Com especificidade de 94%, o Teste de Patte é um teste de confirmação. Se for **positivo** (dor forte ou incapacidade de resistir), há altíssima probabilidade pós-teste de envolvimento patológico do infraespinhal.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">Subescapular: Lift-Off Test (Teste de Gerber)</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              O paciente coloca o dorso da mão sobre a região lombar (rotação interna e adução). Ele é instruído a afastar a mão ativamente das costas contra a gravidade ou contra uma resistência leve aplicada pelo terapeuta.
            </p>
            <ul className="list-none mt-2 space-y-1 text-sm font-semibold">
              <li className="text-teal-700">✓ Sensibilidade: 53%</li>
              <li className="text-gray-700">✓ Especificidade: 94%</li>
            </ul>
            <p className="leading-relaxed text-gray-700 mt-2 text-xs">
              *Nota Clínica:* Similar ao Patte, sua altíssima especificidade de 94% confirma com excelente precisão a lesão do subescapular caso o paciente não consiga afastar a mão ou relate dor marcante.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">Bíceps Braquial: Speed Test</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Avalia o tendão da cabeça longa do bíceps. O paciente mantém o ombro em flexão de 90° com o cotovelo estendido e o antebraço em supinação completa. O terapeuta aplica resistência contra a flexão anterior do ombro.
            </p>
            <ul className="list-none mt-2 space-y-1 text-sm font-semibold">
              <li className="text-teal-700">✓ Sensibilidade: 32%</li>
              <li className="text-gray-700">✓ Especificidade: 75%</li>
            </ul>
            <p className="leading-relaxed text-gray-700 mt-2 text-xs">
              *Nota Clínica:* O Speed Test possui baixa sensibilidade isolada (32%), o que significa que um resultado negativo não descarta a tendinopatia bicipital. Sua utilidade reside na integração ao cluster geral de estabilidade anterior.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Testes de Impingement (Impacto Subacromial)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Os testes de impacto visam estreitar o espaço subacromial para provocar sintomas em bursas ou tendões cizalhados. Eles possuem características estatísticas típicas de triagem inicial:
        </p>
        <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700">
          <li><strong>Hawkins-Kennedy (Sensibilidade: 79%, Especificidade: 59%):</strong> Realizado com flexão anterior de ombro a 90° e flexão de cotovelo a 90°, seguido de rotação interna passiva rápida do ombro pelo examinador. Sua boa sensibilidade é útil para rastrear impingement.</li>
          <li><strong>Neer (Sensibilidade: 75%, Especificidade: 53%):</strong> O terapeuta estabiliza a escápula do paciente e eleva passivamente o membro superior estendido em rotação interna máxima. O atrito do tubérculo maior contra o acrômio reproduz a dor familiar do paciente.</li>
        </ul>
        <p className="mb-8 leading-relaxed text-gray-700">
          *Atenção Biomecânica:* Devido à baixa especificidade (abaixo de 60%), um resultado positivo nesses testes não confirma qual estrutura está lesionada, mas aponta que existe um processo inflamatório ou compressivo ativo no espaço subacromial.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">A Regra de Ouro: A Acurácia dos Clusters</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Como indicado no painel do Kynesia, nenhum teste físico isolado é soberano. Na prática clínica baseada em evidências, a tomada de decisão deve basear-se em <strong>clusters de testes</strong> diagnósticos. O cluster mais consolidado para confirmar impacto e lesões do manguito rotador (cluster de Park) combina:
        </p>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li><strong>Presença de Arco Doloroso ativo</strong> durante a abdução do braço.</li>
            <li><strong>Teste de Queda do Braço (Drop Arm Test) positivo</strong> (incapacidade de controlar a descida excêntrica do braço de 90° para 0°).</li>
            <li><strong>Teste de Rotação Externa Resistida positivo</strong> (fraqueza ou dor acentuada).</li>
          </ol>
          <p className="mt-4 text-sm font-semibold text-gray-900">
            ✓ Probabilidade Pós-Teste: Se os 3 testes forem positivos em pacientes com mais de 60 anos, a probabilidade real de haver uma ruptura completa do manguito rotador alcança aproximadamente 98%.
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Red Flags na Avaliação do Ombro</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Antes de qualquer conduta terapêutica direta de carga, o terapeuta deve rastrear os sinais de alerta clínicos de gravidade não mecânica ou de instabilidade grave no ombro:
        </p>
        <ul className="mb-8 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Trauma Importante:</strong> Risco de fraturas corticais ocultas do colo umeral ou luxações com comprometimento da integridade vascular da artéria axilar.</li>
          <li><strong>Perda de Força Súbita:</strong> Ruptura aguda massiva traumática de múltiplos tendões do manguito rotador, necessitando de descompressão ou sutura cirúrgica rápida para evitar retração gordurosa irreversível do tendão.</li>
          <li><strong>Dor Noturna Intensa:</strong> Dor latejante implacável que impede o repouso independente de deitar sobre o braço (suspeita de malignidade primária/metastática ou infecção articular).</li>
          <li><strong>Perda de Amplitude Progressiva:</strong> Instalação rápida de capsulite adesiva severa ou artropatia destrutiva glenoumeral.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tabela de Propriedades Diagnósticas dos Testes Físicos</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tabela a seguir consolida as propriedades psicométricas exatas dos testes apresentados no infográfico:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Teste Clínico</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Estrutura Alvo</th>
                <th className="px-6 py-3 text-center font-bold text-gray-900 text-teal-600">Sensibilidade (%)</th>
                <th className="px-6 py-3 text-center font-bold text-gray-900 text-red-600">Especificidade (%)</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Aplicação Clínica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Jobe (Empty Can)</td>
                <td className="px-6 py-4 text-gray-700">Tendão do Supraespinhal</td>
                <td className="px-6 py-4 text-center font-bold text-teal-600">88%</td>
                <td className="px-6 py-4 text-center font-bold text-red-600">62%</td>
                <td className="px-6 py-4 text-gray-700">Excelente filtro para descarte.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Patte</td>
                <td className="px-6 py-4 text-gray-700">Tendão do Infraespinhal</td>
                <td className="px-6 py-4 text-center font-bold text-teal-600">53%</td>
                <td className="px-6 py-4 text-center font-bold text-red-600">94%</td>
                <td className="px-6 py-4 text-gray-700">Confirmador altamente específico.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Lift-Off (Gerber)</td>
                <td className="px-6 py-4 text-gray-700">Tendão do Subescapular</td>
                <td className="px-6 py-4 text-center font-bold text-teal-600">53%</td>
                <td className="px-6 py-4 text-center font-bold text-red-600">94%</td>
                <td className="px-6 py-4 text-gray-700">Confirmador altamente específico.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Hawkins-Kennedy</td>
                <td className="px-6 py-4 text-gray-700">Espaço Subacromial</td>
                <td className="px-6 py-4 text-center font-bold text-teal-600">79%</td>
                <td className="px-6 py-4 text-center font-bold text-red-600">59%</td>
                <td className="px-6 py-4 text-gray-700">Rastreio e triagem de impacto.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Neer</td>
                <td className="px-6 py-4 text-gray-700">Espaço Subacromial</td>
                <td className="px-6 py-4 text-center font-bold text-teal-600">75%</td>
                <td className="px-6 py-4 text-center font-bold text-red-600">53%</td>
                <td className="px-6 py-4 text-gray-700">Rastreio e triagem de impacto.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Speed Test</td>
                <td className="px-6 py-4 text-gray-700">Tendão da Cabeça Longa do Bíceps</td>
                <td className="px-6 py-4 text-center font-bold text-teal-600">32%</td>
                <td className="px-6 py-4 text-center font-bold text-red-600">75%</td>
                <td className="px-6 py-4 text-gray-700">Avaliação complementar do bíceps.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Raciocínio Clínico Além dos Testes</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Dominar a sensibilidade e especificidade dos testes clínicos do manguito rotador é apenas metade do caminho. A excelência clínica definitiva é obtida quando o fisioterapeuta interpreta os testes de forma integrada com a história clínica do paciente, a queixa subjetiva de dor, a incapacidade funcional e o comportamento dinâmico da escápula.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Ao avaliar com método e embasamento científico, transformamos dados brutos em decisões clínicas seguras e eficazes, acelerando a reabilitação dos pacientes.
        </p>

        {/* As Pessoas Também Perguntam (PAA) */}
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
            A triagem de lesões do manguito rotador deve utilizar clusters de testes diagnósticos lógicos para maximizar a precisão pós-teste no consultório.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            O Teste de Jobe possui a maior sensibilidade (88%) e funciona como filtro clínico de descarte, enquanto Patte (94%) e Lift-Off (94%) confirmam o acometimento do tendão correspondente.
          </p>
          <p className="leading-relaxed text-gray-300">
            O registro completo da acurácia e dos resultados dos testes no prontuário eletrônico resguarda a conduta profissional e atesta o raciocínio clínico do avaliador.
          </p>
        </div>

        {/* Assinatura da Equipe Kynesia */}
        <PatientCTA />

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

        {/* Bloco de Conversão CTA */}
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
