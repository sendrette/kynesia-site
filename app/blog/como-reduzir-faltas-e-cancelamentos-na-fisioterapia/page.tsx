import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/como-reduzir-faltas-e-cancelamentos-na-fisioterapia";

const faqItems = [
  {
    question: "Qual é a taxa de falta aceitável em uma clínica de fisioterapia?",
    answer: "Uma taxa de falta saudável na fisioterapia situa-se abaixo de 7%. Índices entre 10% e 15% já demandam atenção imediata na gestão de agenda, enquanto taxas superiores a 15% indicam sérias falhas operacionais e de alinhamento com o paciente, impactando diretamente a rentabilidade e a resolutividade clínica."
  },
  {
    question: "Como cobrar taxa de cancelamento na fisioterapia sem constranger o paciente?",
    answer: "A cobrança de taxa de cancelamento deve ser previamente estipulada em um 'contrato terapêutico' assinado ou formalizado logo na primeira sessão. O segredo é humanizar o processo: conceda uma primeira isenção como cortesia educacional e deixe claro que a cobrança visa respeitar o tempo reservado pelo profissional e a fila de espera de outros pacientes."
  },
  {
    question: "Qual o melhor canal para enviar lembretes de consultas?",
    answer: "O WhatsApp é o canal mais eficiente na atualidade, apresentando taxas de abertura superiores a 95%. Contudo, para reduzir faltas na fisioterapia, o envio não deve ser manual ou invasivo. Lembretes automáticos e curtos enviados 24 horas antes, com uma pergunta de confirmação direta (Sim/Não), geram os melhores resultados."
  },
  {
    question: "O que é aliança terapêutica e como ela reduz o absenteísmo?",
    answer: "A aliança terapêutica é a relação de parceria e confiança mútua construída entre o fisioterapeuta e o paciente. Quando o paciente compreende os objetivos do tratamento, percebe empatia no atendimento e participa ativamente da tomada de decisão, ele se sente coproprietário do processo de reabilitação, reduzindo drasticamente o risco de faltas e abandonos."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Reduzir Faltas e Cancelamentos na Fisioterapia: Estratégias que Melhoram a Adesão ao Tratamento",
  description: "Descubra estratégias práticas e baseadas em evidências para reduzir faltas na fisioterapia, otimizar a agenda da sua clínica e aumentar a adesão ao tratamento.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
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
  title: "Como Reduzir Faltas na Fisioterapia: Estratégias Práticas",
  description: "Veja estratégias práticas para reduzir faltas na fisioterapia, combater cancelamentos e melhorar a adesão dos pacientes ao tratamento com tecnologia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como Reduzir Faltas na Fisioterapia: Estratégias Práticas",
    description: "Veja estratégias práticas para reduzir faltas na fisioterapia, combater cancelamentos e melhorar a adesão dos pacientes ao tratamento com tecnologia.",
    type: "article",
    url: pageUrl,
  },
};

export default function ReduzirFaltasFisioterapiaPage() {
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
          <span className="font-medium text-teal-600">Reduzir Faltas e Cancelamentos</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Como Reduzir Faltas e Cancelamentos na Fisioterapia: Estratégias que Melhoram a Adesão ao Tratamento
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Faltas de pacientes sabotam a rentabilidade financeira da clínica e atrasam a reabilitação física. Aprenda a estruturar processos e usar a tecnologia a seu favor para reverter esse cenário.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 24 Jun 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900 font-medium">
            <strong>Resumo rápido:</strong> Para reduzir faltas na fisioterapia e mitigar cancelamentos de última hora, clínicas de reabilitação devem estruturar lembretes inteligentes automatizados, desenhar uma política clara de cancelamento pactuada no primeiro dia e incentivar o pagamento recorrente ou por planos de tratamento. Focar no engajamento ativo do paciente e no fortalecimento da aliança terapêutica é o caminho ideal para transformar a adesão clínica em desfechos reais de saúde.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Se você gerencia um consultório ou uma clínica de reabilitação, certamente já enfrentou o desafio de <strong>reduzir faltas na fisioterapia</strong>. O absenteísmo de pacientes — popularmente conhecido como <em>no-show</em> — é um dos problemas mais persistentes e silenciosos na gestão de serviços de saúde. Quando um paciente deixa de comparecer a uma sessão agendada sem aviso prévio relevante, o impacto negativo se propaga em duas frentes vitais: a gestão financeira do negócio e a eficácia terapêutica do plano de cuidado.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Muitos gestores encaram a ausência de pacientes como um fator puramente imprevisto e incontrolável, atribuindo o problema ao trânsito, a imprevistos de trabalho ou ao clima. No entanto, a ciência da gestão clínica moderna e a psicologia do comportamento em saúde mostram o oposto. As faltas repetidas e os cancelamentos recorrentes são, na grande maioria dos casos, reflexo de falhas nos processos internos de agendamento, na ausência de uma política operacional clara e na falta de engajamento ativo do paciente no próprio tratamento.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Neste guia, você irá aprender:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Como quantificar e entender o custo real do absenteísmo na sua clínica.</li>
            <li>• As causas fundamentais por trás dos cancelamentos (do esquecimento à ausência de percepção de valor).</li>
            <li>• Estratégias práticas e imediatas para reestruturar sua agenda de atendimentos.</li>
            <li>• Práticas baseadas em evidências para engajar o paciente e garantir a continuidade da terapia.</li>
            <li>• Como um software especializado elimina a burocracia de lembretes e otimiza o fluxo de encaixes.</li>
          </ul>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
            <li>
              <Link href="/blog/como-organizar-o-fluxo-de-atendimento-na-fisioterapia" className="text-teal-600 hover:underline">
                → Como Organizar o Fluxo de Atendimento na Fisioterapia: Do Primeiro Contato à Alta do Paciente
              </Link>
            </li>
            <li>
              <Link href="/blog/por-que-bons-fisioterapeutas-fracassam-na-gestao-da-clinica" className="text-teal-600 hover:underline">
                → Por que bons fisioterapeutas fracassam na gestão da clínica? Os 7 erros mais comuns
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Custo Oculto: O Impacto Financeiro e Clínico do Absenteísmo</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Para que possamos desenhar soluções com foco em <strong>reduzir faltas na fisioterapia</strong>, é imprescindível mensurar o tamanho do problema. Em média, clínicas brasileiras de reabilitação enfrentam taxas de no-show que variam entre 15% e 25% da agenda mensal. Se um consultório realiza cerca de 200 atendimentos previstos por mês a um valor hipotético de R$ 150 por sessão, uma taxa de absenteísmo de 20% significa 40 sessões vazias. Isso representa um prejuízo direto de R$ 6.000 mensais em receita que simplesmente deixou de existir, enquanto os custos fixos da clínica (aluguel, secretária, energia, impostos) continuam os mesmos.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Sob a ótica da gestão financeira, a sessão de fisioterapia perdida é um "produto perecível". Se o horário passou, a vaga ociosa não pode ser guardada no estoque para ser vendida depois; o espaço de tempo clínico do profissional foi consumido sem remuneração correspondente.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Contudo, o impacto clínico do absenteísmo é ainda mais devastador. O processo de reabilitação fisioterapêutica, seja no pós-operatório ortopédico, no manejo de dores crônicas ou na reeducação postural, baseia-se fortemente em adaptações fisiológicas crônicas (como ganho de força, remodelamento tecidual e neuroplasticidade). Quando o paciente falta com frequência ou interrompe o tratamento recorrentemente, a curva de progressão do tratamento é quebrada. O resultado é o atraso no alcance das metas de alta funcional, maior índice de recidivas da dor, piora do prognóstico e frustração mútua. Paradoxalmente, o próprio paciente que falta costuma culpar o terapeuta por achar que a fisioterapia "não está surtindo efeito".
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que os Pacientes Faltam? Compreendendo as Causas para Reduzir Faltas na Fisioterapia</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Antes de impor penalidades ou desenhar lembretes, a gestão da clínica precisa segmentar e compreender os motivos reais do absenteísmo. Na fisioterapia, os principais fatores que geram cancelamentos e faltas incluem:
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Esquecimento Puro e Simples",
              desc: "A rotina corrida faz com que consultas agendadas com dias de antecedência caiam no esquecimento. Pacientes não organizam suas agendas digitais com disciplina e dependem de auxílio externo para lembrar de seus compromissos médicos.",
            },
            {
              num: "02",
              title: "Melhora Parcial dos Sintomas (Falsa Cura)",
              desc: "Este é um viés clássico no tratamento fisioterapêutico. O paciente inicia o tratamento com dor aguda intensa. Após 3 ou 4 sessões, a dor diminui substancialmente ou desaparece temporariamente. Como o alívio imediato foi atingido, ele assume intuitivamente que está 'curado', ignorando que a estabilização articular, o equilíbrio de forças e a prevenção de recidivas exigem a continuidade das fases seguintes da reabilitação.",
            },
            {
              num: "03",
              title: "Falta de Percepção de Valor sobre a Sessão",
              desc: "Se o paciente enxerga a fisioterapia como uma obrigação maçante ou apenas 'ir até a clínica fazer choquinho e alongamento', ele colocará qualquer outro compromisso de trabalho ou lazer à frente da consulta. Quando a terapia não faz sentido prático para os objetivos de vida do paciente, o absenteísmo torna-se quase inevitável.",
            },
            {
              num: "04",
              title: "Barreiras de Acesso e Logística",
              desc: "Problemas recorrentes com vagas de estacionamento, distâncias excessivas, horários comerciais inflexíveis e falhas de transporte público aumentam a resistência mental do paciente em comparecer às consultas, sobretudo nos dias chuvosos ou de trânsito intenso.",
            }
          ].map((item) => (
            <div key={item.num} className="flex gap-4 items-start">
              <span className="text-2xl font-bold text-teal-500 bg-teal-50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                {item.num}
              </span>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Estratégias Práticas de Gestão para Reduzir Faltas na Fisioterapia</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Para estruturar um ecossistema que incentive a pontualidade e combata a ociosidade da sua agenda, quatro pilares operacionais devem ser implementados de forma consistente:
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">1. Lembretes e Confirmações Inteligentes e Automatizados</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Mandar mensagens manuais de confirmação via WhatsApp consome horas do trabalho da recepção e gera respostas desordenadas. A melhor prática é adotar confirmações automatizadas programadas para horários específicos. 
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          O lembrete ideal deve ser enviado exatamente 24 horas antes do atendimento. Se o paciente responder confirmando, a agenda atualiza automaticamente. Caso informe que não poderá comparecer, a recepção tem uma janela de tempo viável para acionar a lista de espera e preencher a vaga ociosa com um encaixe.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">2. Estabeleça uma Política de Cancelamento Humanizada e Clara</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Regras não ditas não são cumpridas. Logo no primeiro dia de atendimento, apresente e peça a assinatura de um Termo de Consentimento Informado que inclua as normas da clínica para remarcações e cancelamentos.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Uma política padrão recomendada exige aviso de cancelamento com o mínimo de 4 a 12 horas de antecedência. Em caso de descumprimento injustificado (ausência sem aviso), estipule que a sessão será contabilizada como realizada no plano do paciente ou que haverá cobrança de taxa de no-show para sessões avulsas. Lembre-se: conceda uma primeira tolerância educativa (isenção didática) no primeiro deslize, mas seja firme e profissional nas ocorrências seguintes.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">3. Transicione do Modelo Avulso para Planos de Tratamento e Recorrência</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Cobrar por sessão avulsa (pagamento no fim de cada atendimento) cria um gatilho mental negativo de desembolso financeiro contínuo e facilita a evasão. Quando o paciente paga de forma unitária, a decisão de ir ou não à fisioterapia passa a ser ponderada financeiramente a cada dia de consulta.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Substitua esse modelo pela venda de planos mensais de reabilitação ou pacotes fechados baseados no prognóstico da avaliação clínica. O ideal é estruturar a cobrança recorrente automatizada via cartão de crédito (sem consumir o limite do paciente), similar a um serviço de assinatura. Quando o paciente já realizou o investimento antecipadamente, o valor monetário da vaga passa a pertencer a ele, gerando um poderoso compromisso mental com o comparecimento.
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-3 font-bold text-gray-900">Comparativo Operacional: Avulso vs. Recorrente</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>❌ <strong>Pagamento Avulso:</strong> Incerteza de fluxo de caixa, maior resistência para comparecer nos dias de indisposição, e altas taxas de cancelamento de última hora.</li>
            <li>✅ <strong>Planos Recorrentes (Pacotes):</strong> Previsibilidade financeira para o negócio, maior compromisso terapêutico, vaga reservada com exclusividade e diminuição drástica do absenteísmo.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Adesão ao Tratamento Baseada em Evidências: O Papel do Engajamento Ativo</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Embora os processos administrativos sejam importantes, a barreira definitiva contra as faltas reside no valor clínico que o paciente percebe no seu trabalho. Para <strong>reduzir faltas na fisioterapia</strong> de forma sustentável no longo prazo, é essencial elevar o nível do engajamento clínico do paciente:
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">Educação em Dor e Alinhamento de Metas Reais</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A educação em neurofisiologia da dor e a explicação simplificada da fisiopatologia ajudam a desmistificar medos e crenças do paciente. Além disso, as metas de reabilitação não devem ser definidas unicamente pelo fisioterapeuta de forma técnica isolada. 
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Alinhe os objetivos do tratamento com as paixões e necessidades práticas do paciente. Em vez de registrar apenas "ganho de ADM de joelho de 90° para 110°", registre a meta compartilhada com o paciente: "conseguir brincar no chão com a neta sem sentir dor lombar" ou "voltar a correr 5 km sem falseio no joelho". Vincular o comparecimento clínico ao retorno de suas atividades prazerosas aumenta exponencialmente a relevância pessoal da consulta.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-bold text-gray-900">Demonstração Visual de Evolução Objetiva</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Os pacientes se sentem desmotivados quando sentem que "estão na mesma" sessão após sessão. Utilize questionários de desfechos relatados pelos pacientes (PROMs), como o questionário SF-36, DASH ou Roland-Morris para dores lombares, além de testes ortopédicos e avaliações biomecânicas periódicas.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Apresente gráficos simples mostrando a curva de evolução da amplitude de movimento, a redução nos níveis de dor (EVA) e o aumento da força muscular. Quando o paciente enxerga os dados comprovando que o seu tratamento está funcionando, o estímulo mental para a manutenção da assiduidade na clínica se solidifica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como a Tecnologia Ajuda a Reduzir Faltas na Fisioterapia</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          O gerenciamento manual de confirmações de consulta, preenchimento de vagas ociosas e acompanhamento de adesão é exaustivo para a recepção da clínica e altamente suscetível a falhas humanas. A tecnologia desempenha papel transformador na padronização desse fluxo:
        </p>

        <ul className="mb-8 list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Disponibilização de Agendamento Online:</strong> Permite que o paciente agende ou altere horários autonomamente em tempo real, sem necessidade de telefonar na clínica em horários comerciais limitados.
          </li>
          <li>
            <strong>Painel e Lista de Espera Inteligente:</strong> Ao detectar uma desistência confirmada com antecedência, o sistema pode alertar instantaneamente os pacientes de uma fila de espera interna, preenchendo automaticamente a janela ociosa na agenda do fisioterapeuta.
          </li>
          <li>
            <strong>Prescrição Digital de Exercícios Domiciliares:</strong> Enviar vídeos e orientações detalhadas de exercícios terapêuticos para o smartphone do paciente mantém o vínculo terapêutico ativo mesmo nos dias entre as consultas presenciais.
          </li>
          <li>
            <strong>Histórico de Faltas e Dashboards de Ocupação:</strong> O cruzamento de dados automatizados sinaliza antecipadamente se determinado paciente está apresentando um padrão recorrente de no-shows, permitindo que o profissional faça um contato preventivo para renegociar o plano de tratamento antes da evasão final.
          </li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Ações Consistentes para Reduzir Faltas na Fisioterapia</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          Controlar o absenteísmo de pacientes não é uma tarefa mágica e pontual, mas o resultado de um conjunto coordenado de boas práticas clínicas e administrativas. A implementação de lembretes automatizados de confirmação reduz o esquecimento imediato, enquanto políticas claras de cancelamento e a transição para pacotes recorrentes organizam a previsibilidade financeira e a seriedade com os horários agendados.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Ao mesmo tempo, investir em educação em dor, metas funcionais individualizadas e relatórios objetivos de evolução baseados em dados garante que o paciente perceba o valor do tempo despendido em sua reabilitação. Adotando essas estratégias coordenadas, sua clínica deixará de sofrer com as ociosidades desestruturantes da agenda, assegurando a resolutividade terapêutica que os pacientes merecem e a rentabilidade essencial para o crescimento do seu negócio.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As pessoas também perguntam</h2>
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
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide">RESUMO CLÍNICO</h2>
          <p className="mb-4 leading-relaxed">
            Faltas de pacientes na fisioterapia comprometem diretamente a evolução fisiológica da reabilitação e geram grandes perdas financeiras irrecuperáveis devido à ociosidade do tempo clínico.
          </p>
          <p className="mb-4 leading-relaxed">
            As principais causas do absenteísmo vão além de imprevistos do dia a dia, abrangendo a falta de percepção de valor sobre o tratamento e a ilusão de cura com o alívio precoce da dor aguda.
          </p>
          <p className="leading-relaxed">
            A redução sustentável das taxas de no-show exige uma gestão ativa apoiada em tecnologia: lembretes automáticos integrados, políticas de cancelamento acordadas formalmente e adoção de cobranças recorrentes.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900 uppercase">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo desenvolvido pela Equipe Kynesia com foco em prática baseada em evidências, raciocínio clínico, gestão clínica e inovação em fisioterapia. Nosso objetivo é transformar conhecimento científico em aplicação prática para fisioterapeutas, estudantes e gestores de clínicas que buscam excelência clínica e crescimento profissional.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 leading-relaxed text-gray-700">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados, indicadores clínicos e ferramentas para otimizar a rotina da clínica.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            Se você busca mais organização, produtividade e qualidade no atendimento, conheça gratuitamente o Kynesia.
          </p>
          <div className="flex">
            <Link
              href="/start-free"
              className="rounded-2xl bg-teal-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-600"
            >
              Começar grátis
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
