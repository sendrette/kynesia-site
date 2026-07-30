import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/seu-teste-clinico-pode-estar-errado";

const faqItems = [
  {
    question: "Um teste clínico positivo na fisioterapia sempre indica necessidade de cirurgia ou tratamento invasivo?",
    answer:
      "Absolutamente não. A maioria dos testes clínicos positivos reflete irritabilidade tecidual ou sensibilidade mecânica temporária, e não uma falha estrutural catastrófica. O tratamento de primeira linha para a grande maioria das disfunções musculoesqueléticas com testes positivos é a fisioterapia ativa baseada em exercícios e controle de carga.",
  },
  {
    question: "Por que sinto dor durante o teste clínico se o meu exame de imagem está normal?",
    answer:
      "A dor é uma experiência complexa regulada pelo sistema nervoso e influenciada por fatores inflamatórios químicos locais, estresse, fadiga e sensibilidade dos nervos periféricos. Um tecido pode estar perfeitamente íntegro na imagem (sem rasgos ou rupturas), mas sensibilizado o suficiente para gerar dor quando submetido à compressão ou estiramento provocados pelo teste.",
  },
  {
    question: "O que é probabilidade pré-teste e como ela afeta o resultado?",
    answer:
      "A probabilidade pré-teste é a chance estimada do paciente ter uma determinada condição antes mesmo de aplicarmos qualquer teste físico. Ela é construída com base na história clínica, idade, profissão e tipo de início dos sintomas. Se a probabilidade pré-teste for muito baixa, mesmo um teste positivo tem chances elevadas de ser um falso positivo.",
  },
  {
    question: "O que é um cluster de testes clínicos?",
    answer:
      "Um cluster é um grupo de testes diagnósticos validados que, quando combinados, oferecem uma precisão diagnóstica muito maior do que qualquer teste individual. Por exemplo, o cluster de Laslett para dor sacroilíaca exige que pelo menos 3 de 5 testes específicos sejam positivos para confirmar a articulação como fonte da dor, reduzindo drasticamente os falsos positivos.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Seu Teste Clínico Pode Estar Errado? Entenda os Falsos Positivos e Falsos Negativos na Fisioterapia",
  description:
    "Será que o teste clínico na fisioterapia é 100% confiável? Entenda os falsos positivos e negativos na avaliação física e como evitar diagnósticos errados.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
  image: "https://kynesia.com.br/blog/seu-teste-clinico-pode-estar-errado.png",
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
  title: "Seu Teste Clínico Pode Estar Errado? Falsos Positivos e Negativos",
  description:
    "Será que o teste clínico na fisioterapia é 100% confiável? Entenda os falsos positivos e negativos na avaliação física e como evitar diagnósticos errados.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Seu Teste Clínico Pode Estar Errado? Falsos Positivos e Negativos",
    description:
      "Será que o teste clínico na fisioterapia é 100% confiável? Entenda os falsos positivos e negativos na avaliação física e como evitar diagnósticos errados.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/seu-teste-clinico-pode-estar-errado.png",
        width: 1200,
        height: 800,
        alt: "Infográfico da Kynesia sobre falsos positivos e falsos negativos em diagnósticos fisioterapêuticos",
      },
    ],
  },
};

export default function FalsosPositivosNegativosPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Seu Teste Clínico Pode Estar Errado?</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Seu Teste Clínico Pode Estar Errado? Entenda os Falsos Positivos e Falsos Negativos na Fisioterapia
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Nenhum teste ortopédico ou neurológico é 100% preciso. Aprenda a interpretar a sensibilidade, especificidade e a evitar erros diagnósticos na sua avaliação.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 30 Jul 2026</span>
            <span>⏱ 10 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post (object-contain para não cortar informações) */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/seu-teste-clinico-pode-estar-errado.png"
            alt="Infográfico explicativo da Kynesia desmistificando os falsos positivos e falsos negativos nos diagnósticos fisioterapêuticos"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            Nenhum teste clínico isolado é 100% preciso; todos apresentam margens de falsos positivos e falsos negativos. Falsos positivos ocorrem quando o teste sugere uma lesão que o paciente não possui, enquanto falsos negativos deixam de identificar uma condição real. Para evitar erros diagnósticos, a fisioterapia baseada em evidências preconiza a interpretação dos testes em conjunto com a história do paciente, o exame físico geral e o uso de clusters (grupos) de testes com boas razões de verossimilhança.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Na prática clínica diária, os testes ortopédicos especiais são amplamente utilizados para guiar decisões de tratamento e refinar hipóteses diagnósticas. Se um paciente se apresenta com dor no ombro, logo executamos testes como Neer ou Hawkins-Kennedy. Se a suspeita é de lesão ligamentar no joelho, recorremos ao teste de gaveta anterior ou ao teste de Lachman.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          No entanto, existe uma armadilha comum na qual muitos profissionais e pacientes caem: acreditar que um teste positivo é uma confirmação matemática de uma lesão estrutural específica, ou que um teste negativo exclui completamente um problema. Compreender a falibilidade inerente de qualquer <strong>teste clínico na fisioterapia</strong> é um passo crucial para uma prática baseada em evidências que preze pela segurança e resolutividade clínica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que são Falsos Positivos e Falsos Negativos?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Ao realizar um exame clínico ou teste provocativo, o objetivo é determinar a presença ou ausência de uma disfunção ou patologia estrutural. No entanto, o resultado obtido nem sempre reflete a realidade biológica do paciente. Existem quatro cenários possíveis:
        </p>

        <ul className="mb-6 ml-6 space-y-3 text-gray-700 list-disc">
          <li><strong>Verdadeiro Positivo:</strong> O teste dá positivo e o paciente realmente tem a lesão suspeitada (ex: Teste de Lachman positivo em um paciente com LCA rompido).</li>
          <li><strong>Verdadeiro Negativo:</strong> O teste dá negativo e o paciente não possui a lesão (ex: Teste de Phalen negativo em alguém livre da Síndrome do Túnel do Carpo).</li>
          <li><strong>Falso Positivo:</strong> O teste dá positivo, sugerindo uma lesão que o paciente <strong>não</strong> possui. A dor ou sinal observado se deve a outras causas, como hiperalgesia local, dor referida de outra estrutura ou erro de execução.</li>
          <li><strong>Falso Negativo:</strong> O teste dá negativo, mas o paciente <strong>realmente possui</strong> a lesão. O teste falha em reproduzir o sintoma ou sinal, muitas vezes devido à estabilização muscular involuntária do paciente, rigidez crônica ou baixa intensidade do estímulo provocativo.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que nenhum teste clínico na fisioterapia é infalível?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A variabilidade biológica humana impede que qualquer manobra física tenha 100% de acurácia diagnóstica. Diversos fatores explicam a presença de falsos positivos e negativos na avaliação física:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">01</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Complexidade da Dor e Sensibilização Nervosa</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              A dor musculoesquelética raramente tem uma causa puramente anatômica. Pacientes com dor persistente desenvolvem sensibilização periférica e central. Isso significa que o sistema nervoso deles amplifica estímulos mecânicos normais. Quando você realiza um teste compressivo ou de estiramento, a dor gerada pode ser apenas um reflexo dessa hiperalgesia generalizada e não um sinal de lesão na estrutura testada (causando um falso positivo).
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Exemplo:</strong> Um teste de provocação de dor na articulação sacroilíaca pode ser positivo devido à sensibilidade lombar adjacente ou tensão muscular reativa.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">02</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Tensão Muscular de Defesa (Guarding)</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              Quando um paciente está com dor aguda ou medo do movimento, sua musculatura ao redor da articulação se contrai de forma involuntária e protetiva. Essa contração estabiliza a articulação durante manobras como o teste de gaveta ou gaveta rotatória, impedindo a translação óssea que o examinador procura detectar. Isso pode mascarar uma frouxidão ligamentar real (causando um falso negativo).
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Exemplo:</strong> Espasmos protetores nos isquiotibiais podem mascarar uma ruptura do LCA em testes de gaveta anterior do joelho.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">03</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Fatores Técnicos do Examinador</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              A direção da força aplicada, o posicionamento exato das mãos, a velocidade da manobra e o relaxamento do paciente variam significativamente entre os fisioterapeutas. A falta de padronização na aplicação mecânica é um grande gerador de variações e resultados incorretos.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Exemplo:</strong> Um teste de Lasègue feito com pressa ou elevação excessivamente rápida pode estirar músculos isquiotibiais encurtados, mimetizando uma compressão discal nervosa falsa.</div>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Sensibilidade vs. Especificidade: A Matemática da Avaliação</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para não depender apenas do "achismo", a ciência quantifica a precisão de um <strong>teste clínico na fisioterapia</strong> através de dois conceitos estatísticos principais comparados a um "padrão-ouro" (geralmente exames de imagem avançados ou cirurgias exploratórias):
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Sensibilidade:</strong> Refere-se à capacidade do teste de identificar corretamente as pessoas que realmente têm a patologia (taxa de verdadeiros positivos). Testes altamente sensíveis são excelentes para triagem. Se um teste com 95% de sensibilidade dá negativo, você pode descartar a patologia com enorme confiança, pois as chances de um falso negativo são de apenas 5% (regra do <em>SnNout - Sensitivity High, Negative rule out</em>).
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Especificidade:</strong> Refere-se à capacidade do teste de identificar corretamente quem está saudável (taxa de verdadeiros negativos). Testes altamente específicos são ótimos para confirmação diagnóstica. Se um teste com 95% de especificidade dá positivo, você pode confirmar o diagnóstico com segurança, pois a chance de ser um falso positivo é de apenas 5% (regra do <em>SpPin - Specificity High, Positive rule in</em>).
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como reduzir a taxa de erro do teste clínico na fisioterapia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Fisioterapeutas baseados em evidências não eliminam os testes físicos especiais, mas mudam a forma como os interpretam e aplicam. Abaixo estão as três principais diretrizes científicas para aumentar a precisão de sua avaliação física:
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1. Valorize a História Clínica (Probabilidade Pré-Teste)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A anamnese bem estruturada fornece a probabilidade pré-teste. Se um paciente jovem relata que torceu o joelho jogando futebol com um mecanismo clássico de entorse (pivô com estalido audível e inchaço imediato), a probabilidade dele ter rompido o LCA é altíssima. Nesse cenário, o teste físico serve apenas para confirmar a hipótese. Se um paciente relata dor difusa no joelho sem trauma mecânico, a probabilidade de lesão estrutural do LCA é muito baixa; um teste de Lachman positivo nesse caso deve ser visto com extrema suspeita de ser um falso positivo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2. Utilize Clusters de Testes</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Estudos mostram que aplicar testes de forma isolada fornece uma acurácia muito baixa. A melhor estratégia é usar grupos de testes (clusters). Quando vários testes provocativos diferentes, com mecânicas ligeiramente distintas, apontam para a mesma direção, a chance de erro diagnóstico cai exponencialmente.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Por exemplo, na avaliação de impacto subacromial ou lesão de manguito rotador, o cluster de Park combina os testes de Hawkins-Kennedy, arco doloroso e teste de força de rotação externa. Se os três forem positivos, a probabilidade pós-teste de lesão do manguito sobe para mais de 90%.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3. Aplique as Razões de Verossimilhança (Likelihood Ratios)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          As Razões de Verossimilhança (LR+ e LR-) indicam o quanto um resultado de teste altera a probabilidade pré-teste. Um LR+ maior que 5 ou 10 desloca de forma muito robusta a probabilidade a favor do diagnóstico. Já um LR- menor que 0.2 ou 0.1 descarta a hipótese clínica quase que inteiramente. Conhecer e memorizar as LRs dos testes mais comuns otimiza o raciocínio diagnóstico.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-especial-positivo-significa-diagnostico" className="text-teal-600 hover:underline">
                → Teste Especial Positivo Significa Diagnóstico? O Que a Ciência Mostra
              </Link>
            </li>
            <li>
              <Link href="/blog/sensibilidade-especificidade-razoes-verossimilhanca-testes-ortopedicos" className="text-teal-600 hover:underline">
                → Como Interpretar Sensibilidade, Especificidade e LRs na Prática Clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/clusters-de-testes-ortopedicos-o-que-sao-e-como-usar" className="text-teal-600 hover:underline">
                → Clusters de Testes Ortopédicos: O Que São e Como Aplicar na Avaliação
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-ev-fisioterapia" className="text-teal-600 hover:underline">
                → O Guia Prático da Prática Baseada em Evidências para Fisioterapeutas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplos de Acurácia de Testes Comuns</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Veja abaixo como alguns testes diagnósticos amplamente ensinados na graduação se comportam em termos de sensibilidade e especificidade, e qual a sua verdadeira força diagnóstica:
        </p>
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Teste Clínico</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Suspeita Clínica</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sensibilidade</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Especificidade</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Força Diagnóstica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Lachman</td>
                <td className="px-4 py-3 text-gray-700">Ruptura do LCA</td>
                <td className="px-4 py-3 text-gray-700">~85%</td>
                <td className="px-4 py-3 text-gray-700">~94%</td>
                <td className="px-4 py-3 text-green-700 font-semibold">Excelente (Útil para confirmar e excluir)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Hawkins-Kennedy</td>
                <td className="px-4 py-3 text-gray-700">Impacto Subacromial</td>
                <td className="px-4 py-3 text-gray-700">~80%</td>
                <td className="px-4 py-3 text-gray-700">~56%</td>
                <td className="px-4 py-3 text-yellow-700 font-semibold">Moderada (Bom para triagem, ruim para confirmar)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Lasègue (SLR)</td>
                <td className="px-4 py-3 text-gray-700">Radiculopatia Lombar</td>
                <td className="px-4 py-3 text-gray-700">~91%</td>
                <td className="px-4 py-3 text-gray-700">~26%</td>
                <td className="px-4 py-3 text-yellow-700 font-semibold">Excelente para excluir (Alto índice de falsos positivos)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Lasègue Cruzado</td>
                <td className="px-4 py-3 text-gray-700">Radiculopatia Lombar</td>
                <td className="px-4 py-3 text-gray-700">~29%</td>
                <td className="px-4 py-3 text-gray-700">~88%</td>
                <td className="px-4 py-3 text-green-700 font-semibold">Excelente para confirmar (Alto índice de falsos negativos)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As Pessoas Também Perguntam (PAA)</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">O que fazer quando o teste físico dá positivo mas a ressonância é normal?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                Na prática baseada em evidências, a clínica é soberana. Se o paciente apresenta sintomas reais e dor provocada por testes mecânicos, a conduta deve focar na reabilitação funcional desse movimento e controle de sensibilidade local. A ressonância normal descarta apenas lesões estruturais graves ou macroscópicas, mas não invalida a dor ou a disfunção do paciente.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Diferenças na força aplicada pelo fisioterapeuta causam falsos positivos?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                Sim, a força excessiva durante manobras provocativas é uma causa frequente de falsos positivos. Se o avaliador pressionar uma estrutura com força excessiva, ele gerará dor nociceptiva normal decorrente da pressão tecidual direta, e não uma dor patológica. O teste deve ser executado de forma controlada e padronizada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Qual a diferença de um teste clínico de triagem para um confirmatório?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                Um teste de triagem possui alta sensibilidade: serve para descartar a patologia caso dê negativo (reduz falsos negativos). Um teste confirmatório possui alta especificidade: serve para dar certeza diagnóstica caso dê positivo (reduz falsos positivos). Na avaliação ideal, aplicam-se primeiro testes sensíveis e, em seguida, os específicos.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas Frequentes (FAQ)</h2>
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
          <h2 className="mb-4 text-2xl font-bold">Resumo Clínico</h2>
          <p className="mb-4 leading-relaxed">
            Testes clínicos ortopédicos e neurológicos especiais possuem limitações estatísticas e não devem ser interpretados como sentenças definitivas de lesões mecânicas.
          </p>
          <p className="mb-4 leading-relaxed">
            Falsos positivos são comuns em sistemas nervosos sensibilizados, enquanto falsos negativos podem ocorrer devido ao espasmo muscular protetor do paciente ou variações técnicas.
          </p>
          <p className="leading-relaxed">
            Aumentamos a acurácia diagnóstica combinando a probabilidade pré-teste (anamnese), a aplicação de clusters de testes clínicos e a análise das Razões de Verossimilhança (LRs).
          </p>
        </div>

        {/* CTA para o Paciente */}
        <PatientCTA />

        {/* Assinatura da Equipe Kynesia */}
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

        {/* Bloco de Conversão CTA do Kynesia */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 p-8 text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 text-teal-100 leading-relaxed">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados (incluindo escalas funcionais renomadas para avaliação de quadril, joelho, coluna e ombro), indicadores de evolução clínica e ferramentas para registrar seus testes de forma padronizada.
          </p>
          <p className="mb-6 text-teal-100 leading-relaxed">
            Se você busca mais organização, produtividade e qualidade no atendimento baseado em dados, conheça gratuitamente o Kynesia.
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
