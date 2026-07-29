import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/como-precificar-sessoes-de-fisioterapia";

const faqItems = [
  {
    question: "É errado cobrar mais caro que outros profissionais?",
    answer:
      "Não. O preço deve refletir estrutura de custos, complexidade do serviço, posicionamento profissional e proposta de valor. Cobrar menos do que o necessário para manter qualidade e sustentabilidade tende a comprometer o cuidado no médio prazo.",
  },
  {
    question: "Devo oferecer pacotes de sessões?",
    answer:
      "Pacotes podem ser úteis quando há indicação clínica e planejamento terapêutico claro. O ideal é evitar descontos sem critério e estruturar condições que preservem margem, adesão e previsibilidade de fluxo de caixa.",
  },
  {
    question: "Quanto da receita deve ser reinvestida no consultório?",
    answer:
      "Não existe um percentual universal, mas reinvestir parte da receita em atualização profissional, estrutura, processos e tecnologia é essencial para manter competitividade. O percentual deve ser definido com base no estágio do consultório e nos objetivos financeiros.",
  },
  {
    question: "Um software de gestão ajuda na organização financeira?",
    answer:
      "Sim. Sistemas de gestão ajudam a acompanhar recebimentos, inadimplência, custos, produtividade e indicadores clínico-financeiros. Isso facilita decisões de precificação e melhora o controle do negócio de forma integrada à rotina assistencial.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como precificar sessões de fisioterapia: fatores que todo fisioterapeuta deve considerar",
  description:
    "Aprenda como precificar sessões de fisioterapia considerando custos, margem e posicionamento profissional para crescimento sustentável.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  image: "https://kynesia.com.br/blog/gestao-clinica.svg",
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
  title: "Como precificar sessões de fisioterapia: guia estratégico",
  description:
    "Veja como precificar sessões de fisioterapia com base em custos, margem e posicionamento. Leia e organize sua gestão financeira clínica.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como precificar sessões de fisioterapia: guia estratégico",
    description:
      "Entenda como definir preço com método: custos, margem, especialidade e gestão financeira para fisioterapeutas.",
    type: "article",
    url: pageUrl,
  },
};

export default function ComoPrecificarSessoesPage() {
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
          <span className="font-medium text-teal-600">Como precificar sessões de fisioterapia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Financeira
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Como precificar sessões de fisioterapia: fatores que todo fisioterapeuta deve considerar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda os fatores que influenciam o preço da sessão, evite erros comuns e organize uma estratégia de precificação sustentável para sua prática clínica.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>29 Mai 2026</span>
            <span>14 min de leitura</span>
            <span>Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Como precificar sessões de fisioterapia?</strong> O caminho mais seguro é calcular custos fixos e variáveis, definir margem saudável e ajustar o preço ao posicionamento clínico e ao público atendido.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Entender <strong>como precificar sessões de fisioterapia</strong> é um dos pontos mais críticos para quem busca estabilidade e crescimento na profissão. Muitos colegas ainda definem preço olhando apenas a tabela de concorrentes da região. Esse atalho parece simples no início, mas costuma gerar insegurança financeira, desvalorização do trabalho e dificuldade para manter a qualidade assistencial no longo prazo.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Em gestão clínica, preço não é apenas um número comercial. Ele traduz a viabilidade da operação, a estrutura do atendimento, o investimento em atualização e a capacidade de entregar resultado com consistência. Uma precificação fisioterapia bem construída protege o consultório, melhora a tomada de decisão e evita que o fisioterapeuta autônomo trabalhe muito sem transformar volume em sustentabilidade.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/como-precificar-sessoes-de-fisioterapia</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/gestao-clinica-em-fisioterapia-guia-completo-2026" className="text-teal-600 hover:underline">
                → Gestão clínica em fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/agenda-para-fisioterapeuta-organize-sua-clinica-melhor" className="text-teal-600 hover:underline">
                → Agenda para fisioterapeutas
              </Link>
            </li>
            <li>
              <Link href="/blog/prontuario-eletronico-na-fisioterapia-vantagens-reais" className="text-teal-600 hover:underline">
                → Prontuário eletrônico na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/indicadores-clinicos-na-fisioterapia" className="text-teal-600 hover:underline">
                → Indicadores clínicos na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/sistema-para-fisioterapeutas-como-escolher-o-ideal" className="text-teal-600 hover:underline">
                → Sistema para fisioterapeutas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que a precificação correta é importante?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A primeira razão é financeira: sem preço adequado, o consultório perde capacidade de pagar custos, investir em estrutura e remunerar o próprio profissional com justiça. Quando o valor da consulta fisioterapia é definido abaixo do necessário, o fisioterapeuta passa a depender de volume excessivo de atendimentos para manter a receita, o que tende a reduzir qualidade de avaliação, planejamento e acompanhamento.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A segunda razão é de posicionamento. Preço comunica proposta de valor, nível de especialização e modelo de atendimento. Isso não significa cobrar caro por princípio, mas alinhar preço ao que é entregue em termos de tempo clínico, organização, monitoramento de resultados e experiência do paciente.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A terceira razão é estratégica. Consultórios que dominam gestão financeira fisioterapia conseguem planejar expansão, contratar apoio, investir em educação continuada e adotar tecnologia com menor risco. Em resumo, precificar corretamente não é só sobreviver no mês; é construir capacidade de crescimento com consistência.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Erros mais comuns na precificação da fisioterapia</h2>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Copiar preços dos concorrentes</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Comparar mercado é útil, mas copiar tabela sem entender a própria estrutura é um erro recorrente. Dois consultórios na mesma rua podem ter custos, público e proposta assistencial completamente diferentes.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Não calcular custos fixos</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Custos fixos existem mesmo sem atendimento: aluguel, internet, energia mínima, sistema de gestão, contabilidade e despesas administrativas. Ignorar esse bloco leva a preço artificialmente baixo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Ignorar custos variáveis</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Materiais de consumo, taxas de pagamento, deslocamento em atendimento domiciliar e reposições de baixo valor, quando não somados, corroem margem mês após mês.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Não considerar horas administrativas</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O fisioterapeuta não trabalha só durante a sessão. Há tempo de planejamento, evolução fisioterapêutica, contato com paciente, organização de agenda e gestão. Esse tempo precisa entrar no cálculo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Trabalhar com margem insuficiente</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Sem margem mínima, qualquer oscilação de agenda ou custo inesperado compromete o caixa. A operação vira reativa e perde capacidade de investir em melhorias.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais custos o fisioterapeuta deve considerar?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Uma boa precificação começa com mapeamento completo de custos. Muitos profissionais sabem quanto gostariam de receber, mas não sabem quanto custa operar o consultório por mês. O resultado costuma ser distorção no preço final.
        </p>
        <ul className="mb-5 space-y-3 leading-relaxed text-gray-700">
          <li><strong>Aluguel e condomínio:</strong> custo de ocupação do espaço clínico.</li>
          <li><strong>Internet e energia:</strong> despesas essenciais para operação diária.</li>
          <li><strong>Materiais:</strong> itens de consumo, higiene e reposição periódica.</li>
          <li><strong>Softwares:</strong> prontuário eletrônico, agenda, financeiro e ferramentas administrativas.</li>
          <li><strong>Marketing:</strong> investimento em aquisição e relacionamento com pacientes.</li>
          <li><strong>Impostos e contabilidade:</strong> tributos, honorários contábeis e obrigações legais.</li>
          <li><strong>Taxas bancárias e meios de pagamento:</strong> custos por transação, antecipação e inadimplência.</li>
          <li><strong>Cursos e atualização profissional:</strong> formação contínua para manter qualidade técnica e diferenciação.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando esses elementos são registrados mensalmente, o valor da consulta fisioterapia deixa de ser estimativa e passa a ser decisão gerencial. Isso reduz ansiedade em torno de quanto cobrar fisioterapia e melhora previsibilidade de receita.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como calcular o valor ideal da sessão</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Não existe preço universal. Existe método. Um modelo simples e útil para fisioterapeuta autônomo é: custo mensal total + pró-labore desejado + margem de segurança, dividido pelo número de sessões efetivamente disponíveis no mês.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-slate-900">Exemplo prático de cálculo</h3>
          <p className="mb-3 text-slate-700">
            Imagine o seguinte cenário mensal:
          </p>
          <ul className="mb-4 space-y-2 text-slate-700">
            <li>• Custos fixos e variáveis totais: R$ 8.000</li>
            <li>• Pró-labore desejado: R$ 10.000</li>
            <li>• Reserva/margem de segurança: R$ 2.000</li>
            <li>• Necessidade de faturamento: R$ 20.000</li>
            <li>• Sessões efetivas/mês (já considerando faltas e ociosidade): 160</li>
          </ul>
          <p className="text-slate-700">
            Valor de referência por sessão = R$ 20.000 ÷ 160 = <strong>R$ 125</strong>. Esse número é um ponto de partida técnico, que depois pode ser ajustado conforme posicionamento, especialidade, complexidade do atendimento e estratégia comercial.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O principal aprendizado desse cálculo é simples: se o preço praticado estiver abaixo do valor de referência sem uma estratégia compensatória clara, a sustentabilidade do consultório fica comprometida.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O valor da sessão deve mudar conforme a especialidade?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em muitos casos, sim. Especialidades com maior complexidade clínica, maior tempo de avaliação, maior demanda de atualização ou custos operacionais específicos tendem a exigir precificação diferenciada.
        </p>
        <ul className="mb-5 space-y-3 leading-relaxed text-gray-700">
          <li><strong>Fisioterapia esportiva:</strong> pode envolver monitoramento de desempenho e retorno ao esporte com alta exigência funcional.</li>
          <li><strong>Fisioterapia ortopédica:</strong> frequentemente demanda raciocínio clínico detalhado e planejamento progressivo por fases.</li>
          <li><strong>Atendimento domiciliar:</strong> inclui deslocamento, logística e menor densidade de agenda por turno.</li>
          <li><strong>Neurologia:</strong> costuma requerer sessões mais longas, abordagem interdisciplinar e alta intensidade de acompanhamento.</li>
          <li><strong>Pilates clínico:</strong> incorpora estrutura, equipamentos e modelo de condução específico.</li>
          <li><strong>Fisioterapia especializada:</strong> nichos avançados exigem formação contínua e diferenciam a entrega clínica.</li>
        </ul>
        <p className="mb-5 leading-relaxed text-gray-700">
          Diferenciar preço por especialidade não é arbitrariedade; é coerência entre custo, competência e proposta terapêutica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O paciente compra apenas uma sessão?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Do ponto de vista econômico, o paciente não avalia só o preço unitário. Ele avalia confiança, clareza de plano terapêutico, qualidade da experiência, consistência na comunicação e percepção de resultado. Quando esses elementos estão presentes, a sensibilidade ao preço tende a reduzir.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Por isso, discutir quanto cobrar fisioterapia sem discutir jornada do paciente é uma análise incompleta. A sessão inclui avaliação, interpretação clínica, tomada de decisão e acompanhamento estruturado. Quanto mais claro isso estiver no processo, maior a percepção de valor.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Gestão financeira e tecnologia na fisioterapia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A qualidade da precificação depende da qualidade dos dados. Sem registros consistentes de custos, produtividade, taxa de comparecimento e inadimplência, decisões financeiras tendem a ser baseadas em sensação. É aqui que gestão clínica fisioterapia e gestão financeira se conectam.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Sistemas de gestão ajudam a organizar agenda, prontuário, evolução e indicadores de receita em um fluxo único. Com isso, o profissional acompanha o desempenho real da operação e consegue revisar preço com mais segurança. O Kynesia é um exemplo de plataforma voltada para essa organização integrada da prática clínica e financeira, sem separar assistência de gestão.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Quanto cobrar por uma sessão de fisioterapia?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                O valor deve ser definido por cálculo de custo total, capacidade de agenda, margem desejada e posicionamento clínico. Não existe número único válido para todos os contextos.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Como calcular o preço de um atendimento fisioterapêutico?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Some custos fixos e variáveis, inclua pró-labore e reserva, e divida pela quantidade real de sessões mensais. Depois ajuste conforme complexidade clínica e estratégia de posicionamento.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">O valor da consulta deve ser igual ao da concorrência?</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Não necessariamente. Concorrência é referência de mercado, mas o preço correto precisa refletir estrutura de custos, qualidade de entrega e proposta de valor do próprio consultório.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                <summary className="font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Conclusão</h2>
          <p className="mb-5 leading-relaxed text-gray-700">
            Precificar com método é uma decisão clínica e empresarial ao mesmo tempo. Quando o profissional domina custos, margem, capacidade de agenda e posicionamento, ele consegue crescer com previsibilidade, investir na qualidade do cuidado e sustentar a operação sem comprometer a assistência.
          </p>
          <p className="leading-relaxed text-gray-700">
            Em um cenário de alta concorrência e custos crescentes, aprender como precificar sessões de fisioterapia de forma técnica é um passo essencial para valorização profissional e desenvolvimento sustentável da prática clínica.
          </p>
        </section>
      <PatientCTA />

      </article>
    </main>
  );
}
