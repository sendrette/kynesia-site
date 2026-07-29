import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/sensibilidade-especificidade-razoes-verossimilhanca-testes-ortopedicos";

const faqItems = [
  {
    question: "O que é mais importante em um teste ortopédico: sensibilidade ou especificidade?",
    answer: "Ambas as propriedades são importantes, mas servem a objetivos clínicos opostos. A alta sensibilidade é crucial para triagem e descarte de patologias (regra SNOUT: se o teste dá negativo, descarta-se a condição). Já a alta especificidade é fundamental para confirmar um diagnóstico (regra SPIN: se o teste dá positivo, confirma-se a suspeita clínica)."
  },
  {
    question: "Como a razão de verossimilhança positiva (LR+) influencia a probabilidade pós-teste?",
    answer: "O LR+ indica o quanto um resultado positivo aumenta a probabilidade de a doença estar presente. Valores de LR+ superiores a 10 geram grandes aumentos na probabilidade pós-teste (muito úteis para confirmar diagnósticos). Valores entre 5 e 10 geram aumentos moderados, enquanto valores abaixo de 2 têm pouco impacto clínico prático."
  },
  {
    question: "Por que testes ortopédicos não devem ser interpretados de forma isolada?",
    answer: "Nenhum teste físico isolado é perfeitamente acurado devido à continuidade biomecânica do corpo humano. Uma manobra física gera estresse em múltiplos tecidos simultaneamente. Para um diagnóstico seguro, é indispensável integrar os testes à anamnese (probabilidade pré-teste) e utilizar clusters de testes validados."
  },
  {
    question: "Qual o impacto prático de um teste com baixa especificidade?",
    answer: "Testes com baixa especificidade geram uma taxa elevada de falsos-positivos. Na prática, isso significa que muitos indivíduos saudáveis ou com outras condições clínicas apresentarão dor ou resposta positiva ao teste físico, induzindo o profissional a diagnósticos errados se a manobra for usada de forma isolada."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sensibilidade, Especificidade e Razões de Verossimilhança: Como Interpretar Testes Ortopédicos na Prática Clínica",
  description: "Entenda a importância da sensibilidade, especificidade e razões de verossimilhança na interpretação de testes ortopédicos na prática clínica diária de fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  image: "https://kynesia.com.br/blog/sensibilidade-especificidade-razoes-verossimilhanca.jpg",
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
  title: "Sensibilidade e Especificidade nos Testes Ortopédicos",
  description: "Entenda como aplicar sensibilidade, especificidade e razões de verossimilhança para interpretar testes ortopédicos na prática clínica diária de fisioterapia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Sensibilidade e Especificidade nos Testes Ortopédicos",
    description: "Entenda como aplicar sensibilidade, especificidade e razões de verossimilhança para interpretar testes ortopédicos na prática clínica diária de fisioterapia.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/sensibilidade-especificidade-razoes-verossimilhanca.jpg",
        width: 1200,
        height: 800,
        alt: "Sensibilidade, Especificidade e Razões de Verossimilhança nos Testes Ortopédicos",
      },
    ],
  },
};

export default function SensibilidadeEspecificidadePage() {
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
            Sensibilidade, Especificidade e Razões de Verossimilhança: Como Interpretar Testes Ortopédicos na Prática Clínica
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Descubra como ir além do simples binômio \"positivo/negativo\" e domine os conceitos estatísticos essenciais para a tomada de decisão baseada em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 26 Jun 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Featured Image inside the Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/sensibilidade-especificidade-razoes-verossimilhanca.jpg"
            alt="Infográfico explicativo sobre Interpretação de Testes Ortopédicos, cobrando Matriz 2x2, Sensibilidade, Especificidade e Razões de Verossimilhança"
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
            A interpretação de <strong>testes ortopédicos na prática clínica</strong> exige mais do que classificar um resultado em \"positivo\" ou \"negativo\". Para atuar baseado em evidências, o fisioterapeuta deve integrar a <strong>sensibilidade</strong> (capacidade de descartar doenças) e a <strong>especificidade</strong> (capacidade de confirmar doenças) com as <strong>razões de verossimilhança (LR)</strong>. Esse conjunto probabilístico é o que realmente altera a probabilidade pré-teste derivada da anamnese, resultando em um diagnóstico fisioterapêutico seguro e assertivo.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Você já avaliou um paciente com dor no ombro, realizou um teste de Jobe (Empty Can), constatou que ele sentiu dor e imediatamente concluiu que havia uma tendinopatia do supraespinhal? Ou talvez aplicou o teste de gaveta anterior no joelho, percebeu um deslocamento sutil e assumiu com certeza absoluta uma ruptura do ligamento cruzado anterior (LCA)?
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Na rotina de atendimentos de fisioterapia ortopédica, é muito comum que profissionais interpretem os testes ortopédicos especiais como \"sentenças diagnósticas\". Contudo, a ciência da reabilitação tem demonstrado repetidamente que a acurácia diagnóstica dessas manobras físicas é imperfeita. Para não cair em armadilhas clínicas e cometer erros de conduta, todo profissional de elite precisa dominar três pilares matemáticos da prática baseada em evidências: <strong>Sensibilidade, Especificidade e Razões de Verossimilhança</strong>.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-especial-positivo-significa-diagnostico" className="text-teal-600 hover:underline">
                → Teste Especial Positivo Significa Diagnóstico? Entenda as Limitações
              </Link>
            </li>
            <li>
              <Link href="/blog/clusters-de-testes-ortopedicos-o-que-sao-e-como-usar" className="text-teal-600 hover:underline">
                → Clusters de testes ortopédicos: o que são e como aplicar na prática
              </Link>
            </li>
            <li>
              <Link href="/blog/raciocinio-clinico-na-fisioterapia-avaliacoes-diferentes" className="text-teal-600 hover:underline">
                → Raciocínio clínico na fisioterapia: por que ocorrem divergências na avaliação?
              </Link>
            </li>
            <li>
              <Link href="/blog/anamnese-fisioterapeutica-como-fazer-passo-a-passo" className="text-teal-600 hover:underline">
                → Anamnese Fisioterapêutica: Guia completo para guiar seu diagnóstico
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900 animate-fadeIn">1. A Matriz de Confusão 2x2: O Ponto de Partida</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para iniciarmos a compreensão da acurácia diagnóstica, precisamos estruturar os dados clínicos. A ferramenta ideal para isso é a <strong>Matriz 2x2</strong> (ou Tabela de Contingência). Ela cruza duas realidades fundamentais: a presença real da condição clínica (determinada por um padrão-ouro, como a ressonância magnética ou cirurgia) com o resultado do teste físico especial.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Desse cruzamento surgem quatro cenários clínicos possíveis:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Resultado do Teste</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900 bg-teal-50/50">Doença Presente</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900 bg-red-50/50">Doença Ausente</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Teste Positivo (+)</td>
                <td className="px-6 py-4 bg-teal-50/20">
                  <span className="font-bold text-teal-700">Verdadeiro Positivo (TP):</span> O paciente tem a doença e o teste deu positivo.
                </td>
                <td className="px-6 py-4 bg-red-50/20">
                  <span className="font-bold text-red-700">Falso Positivo (FP):</span> O paciente não tem a doença, mas o teste deu positivo.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Teste Negativo (-)</td>
                <td className="px-6 py-4 bg-red-50/20">
                  <span className="font-bold text-red-700">Falso Negativo (FN):</span> O paciente tem a doença, mas o teste deu negativo.
                </td>
                <td className="px-6 py-4 bg-teal-50/20">
                  <span className="font-bold text-teal-700">Verdadeiro Negativo (TN):</span> O paciente não tem a doença e o teste deu negativo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 leading-relaxed text-gray-700">
          Muitos erros no diagnóstico fisioterapêutico acontecem porque os profissionais assumem que todo teste positivo é um <strong>Verdadeiro Positivo</strong> e ignoram as taxas de <strong>Falso Positivo</strong>, ou se tranquilizam com um teste negativo sem atentar para o risco de <strong>Falso Negativo</strong>.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">2. Sensibilidade e Especificidade: As Propriedades do Teste</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A partir dos dados da Matriz 2x2, calculamos as duas principais propriedades intrínsecas de um teste clínico.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">Sensibilidade (SENS)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>sensibilidade</strong> indica a probabilidade de o teste ser positivo quando a doença está presente. Ela foca no grupo de pessoas realmente doentes (Verdadeiros Positivos + Falsos Negativos). Um teste com 87% de sensibilidade significa que de cada 100 pacientes com a lesão estrutural, 87 apresentarão resultado positivo e 13 passarão despercebidos (falso-negativos).
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Regra Clínica (SNOUT):</strong> <em>Sensitivity Rule Out</em>. Se um teste físico has altíssima sensibilidade (próxima a 90% ou mais) e o seu resultado dá <strong>negativo</strong>, você pode descartar com segurança aquela hipótese de diagnóstico. Falsos-negativos são raros nesses testes.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">Especificidade (ESP)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>especificidade</strong> indica a probabilidade de o teste ser negativo quando a doença está ausente. Ela foca no grupo de indivíduos saudáveis (Verdadeiros Negativos + Falsos Positivos). Um teste com 78% de especificidade indica que de cada 100 pacientes sem a doença, 78 testarão negativo e 22 apresentarão um falso-positivo (dor gerada por outras estruturas, por exemplo).
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          <strong>Regra Clínica (SPIN):</strong> <em>Specificity Rule In</em>. Se um teste físico tem altíssima especificidade e o seu resultado dá <strong>positivo</strong>, você tem forte base para confirmar aquela hipótese. Falsos-positivos são muito raros sob essas condições.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">3. Razões de Verossimilhança (Likelihood Ratios): Mudando a Probabilidade</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Embora a sensibilidade e especificidade forneçam dados valiosos, elas não dizem diretamente qual é a probabilidade do seu paciente específico ter a doença pós-teste. Para contornar essa limitação na prática baseada em evidências, a literatura utiliza as <strong>Razões de Verossimilhança (Likelihood Ratios - LR)</strong>.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          As LRs fundem sensibilidade e especificidade em um único número e expressam a força do teste clínico:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h4 className="font-bold text-lg text-gray-900">LR+ (Razão de Verossimilhança Positiva)</h4>
            <p className="text-sm text-teal-700 mb-2">Fórmula: Sensibilidade / (1 - Especificidade)</p>
            <p className="leading-relaxed text-gray-700">
              Indica quantas vezes é mais provável encontrar um teste positivo em pessoas com a doença em comparação com pessoas sem a doença. <strong>Quanto maior, melhor.</strong> Valores de LR+ elevados aumentam drasticamente a probabilidade de a doença estar presente após um teste positivo.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h4 className="font-bold text-lg text-gray-900">LR- (Razão de Verossimilhança Negativa)</h4>
            <p className="text-sm text-teal-700 mb-2">Fórmula: (1 - Sensibilidade) / Especificidade</p>
            <p className="leading-relaxed text-gray-700">
              Indica quantas vezes é mais provável encontrar um teste negativo em pessoas com a doença em comparação com pessoas sem a doença. <strong>Quanto menor, melhor.</strong> Valores próximos de zero reduzem substancialmente a probabilidade de a doença estar presente se o teste der negativo.
            </p>
          </div>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Para aplicar essas medidas no raciocínio clínico diário, siga a classificação clássica de impacto diagnóstico:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-100 bg-teal-50/50 p-6">
          <h4 className="mb-3 font-bold text-gray-900">Escala de Impacto Clínico da Razão de Verossimilhança:</h4>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              🟢 <strong>LR+ &gt; 10:</strong> Excelente poder de confirmação. Aumenta muito a probabilidade de a patologia estar presente.
            </li>
            <li>
              🟡 <strong>LR+ de 5 a 10:</strong> Aumento moderado na probabilidade da doença.
            </li>
            <li>
              🔵 <strong>LR- de 0,1 a 0,2:</strong> Excelente poder de descarte. Reduz significativamente a probabilidade de a doença estar presente.
            </li>
            <li>
              🔵 <strong>LR- &lt; 0,1:</strong> Poder de descarte máximo. Reduz muito a probabilidade da doença.
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">4. Exemplo de Aplicação Clínica: Raciocínio Probabilístico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Vamos entender como isso funciona na prática assistencial de uma clínica de fisioterapia. Imagine que, com base no histórico do paciente (idade de 45 anos, dor ao levantar o braço, início gradual e sem trauma direto), você estabeleça que a <strong>probabilidade pré-teste</strong> de tendinopatia do supraespinhal seja de <strong>30%</strong>.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Você decide realizar um teste que possui um <strong>LR+ de 3,91</strong>.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Ao executar a manobra, o resultado é positivo. Integrando a probabilidade pré-teste de 30% com o LR+ de 3,91 através de um Nomograma de Fagan, a sua <strong>probabilidade pós-teste passa a ser de 72%</strong>. A suspeita diagnóstica tornou-se muito mais robusta, permitindo conduzir o plano terapêutico com maior grau de certeza científica e segurança clínica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">5. Analisando a Acurácia dos Testes Ortopédicos Comuns</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Nem todos os testes que aprendemos na graduação possuem utilidade clínica aceitável. Vamos analisar alguns testes clássicos de diferentes articulações utilizando dados reais da literatura (adaptados de <em>Van den Bekerom MPJ, et al. 2012</em>):
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-900">Teste Ortopédico (Região)</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Sensibilidade (SENS)</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900">Especificidade (ESP)</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900 text-teal-700">LR+</th>
                <th className="px-4 py-3 text-center font-bold text-gray-900 text-blue-700">LR-</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-950">Jobe (Ombro)</td>
                <td className="px-4 py-3 text-center">0,88</td>
                <td className="px-4 py-3 text-center">0,62</td>
                <td className="px-4 py-3 text-center text-teal-700 font-semibold">2,32</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">0,19</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-950">Hawkins-Kennedy (Ombro)</td>
                <td className="px-4 py-3 text-center">0,79</td>
                <td className="px-4 py-3 text-center">0,59</td>
                <td className="px-4 py-3 text-center text-teal-700 font-semibold">1,93</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">0,36</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-950">Neer (Ombro)</td>
                <td className="px-4 py-3 text-center">0,72</td>
                <td className="px-4 py-3 text-center">0,50</td>
                <td className="px-4 py-3 text-center text-teal-700 font-semibold">1,44</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">0,56</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-gray-950">Thessaly (Joelho - Menisco)</td>
                <td className="px-4 py-3 text-center">0,90</td>
                <td className="px-4 py-3 text-center">0,89</td>
                <td className="px-4 py-3 text-center text-teal-700 font-semibold">8,18</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">0,11</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-950">SLR - Straight Leg Raise (Coluna)</td>
                <td className="px-4 py-3 text-center">0,91</td>
                <td className="px-4 py-3 text-center">0,26</td>
                <td className="px-4 py-3 text-center text-teal-700 font-semibold">1,23</td>
                <td className="px-4 py-3 text-center text-blue-700 font-semibold">0,35</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A análise dessa tabela fornece ensinamentos fundamentais para o nosso diagnóstico:
        </p>

        <ul className="mb-8 list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>O Caso do SLR (Elevação da Perna Estendida):</strong> Possui sensibilidade de 91% e especificidade de apenas 26%. Isso significa que ele é um teste excelente para triagem rápida de compressões discais (SNOUT). Se o SLR der negativo, a chance de radiculopatia é extremamente baixa. Contudo, se der positivo, o LR+ é de apenas 1,23 (praticamente nulo). Você <strong>não pode</strong> confirmar a compressão nervosa apenas por ele, pois há muitas taxas de falso-positivo causadas por rigidez de isquiotibiais ou sensibilização neural periférica geral.
          </li>
          <li>
            <strong>O Poder do Thessaly:</strong> O teste de Thessaly a 20º de flexão apresenta alta sensibilidade (90%) e alta especificidade (89%). Seu LR+ de 8,18 aumenta significativamente a probabilidade de lesão meniscal quando positivo, e seu LR- de 0,11 reduz muito a probabilidade quando negativo. Trata-se de um dos testes físicos mais robustos da fisioterapia ortopédica.
          </li>
          <li>
            <strong>Testes de Ombro (Jobe, Hawkins, Neer):</strong> Todos sofrem com especificidades moderadas a baixas (0,50 a 0,62). Os valores de LR+ variam entre 1,44 e 2,32. Esses dados indicam que manobras isoladas de provocação de dor no ombro são péssimas para confirmar patologias mecânicas específicas, sendo mais eficientes quando negativas para descartar instabilidades e lesões extensas de manguito.
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">6. Como Aplicar Esses Dados para Reduzir Erros Clínicos</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para que essa matemática se transforme em melhora na assistência de saúde do seu paciente, estruture a avaliação fisioterapêutica em quatro etapas consecutivas:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. Fortaleça a anamnese:</strong> Nunca comece a avaliação realizando testes físicos diretamente. A anamnese cuidadosa fornece a sua probabilidade pré-teste (a suspeita clínica).
            </li>
            <li>
              <strong>2. Use testes de triagem primeiro:</strong> Utilize os testes de alta sensibilidade (com baixos LR-) para descartar de imediato as hipóteses diagnósticas improváveis.
            </li>
            <li>
              <strong>3. Use testes de confirmação ou clusters:</strong> Para as hipóteses sobreviventes, empregue testes altamente específicos ou agrupamentos de testes validados (clusters) para consolidar a sua hipótese diagnóstica final.
            </li>
            <li>
              <strong>4. Utilize prontuários e softwares estruturados:</strong> Centralizar o registro dessas manobras de forma estruturada em um <strong>software para fisioterapia</strong> de qualidade garante que nenhuma etapa diagnóstica seja pulada por pressa ou esquecimento.
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Raciocínio Clínico é Probabilidade</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O verdadeiro profissional de fisioterapia baseado em evidências não é aquele que conhece e executa dezenas de testes ortopédicos especiais diferentes. É aquele que compreende o impacto estatístico dos poucos testes estruturados que escolhe aplicar.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Conhecer a sensibilidade, especificidade e as razões de verossimilhança de cada ferramenta física eleva o diagnóstico fisioterapêutico de uma opinião subjetiva para uma decisão clínica estruturada e fundamentada cientificamente, garantindo tratamentos focados, rápidos e seguros para os pacientes.
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
            Os testes ortopédicos especiais funcionam como modificadores da probabilidade diagnóstica estabelecida inicialmente na anamnese clínica do paciente.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A aplicação da regra SNOUT (testes sensíveis para descartar patologias) e SPIN (testes específicos para confirmar diagnósticos) é indispensável para evitar falsos diagnósticos.
          </p>
          <p className="leading-relaxed text-gray-300">
            O uso da Razão de Verossimilhança (Likelihood Ratio) permite calcular exatamente a mudança na probabilidade de a hipótese clínica estar correta após os resultados das manobras físicas.
          </p>
        </div>

        {/* Equipe Kynesia Signature */}
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
