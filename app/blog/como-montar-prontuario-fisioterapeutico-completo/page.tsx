import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/como-montar-prontuario-fisioterapeutico-completo";

const faqItems = [
  {
    question: "Quem pode ter acesso ao prontuário fisioterapêutico do paciente?",
    answer:
      "O prontuário é um documento sigiloso. O acesso é exclusivo do paciente, de seus representantes legais e do fisioterapeuta responsável pelo caso. Outros profissionais de saúde da mesma clínica podem acessar para fins de continuidade do cuidado, desde que observada a LGPD e o sigilo profissional.",
  },
  {
    question: "O prontuário fisioterapêutico pode ser digital?",
    answer:
      "Sim, o COFFITO permite o uso de prontuário eletrônico, desde que atenda aos requisitos de segurança física e lógica, garanta o sigilo das informações e utilize certificação digital (padrão ICP-Brasil ou outra forma segura de autenticação) para garantir a autoria e integridade dos registros.",
  },
  {
    question: "O que acontece se eu não registrar a evolução de uma sessão de fisioterapia?",
    answer:
      "A falta de registro diário ou de evolução constitui infração ética perante o COFFITO e expõe o profissional a processos ético-disciplinares e civis. Além disso, compromete a segurança do paciente e impossibilita a demonstração objetiva do progresso terapêutico para convênios ou auditorias.",
  },
  {
    question: "Como preencher a hipótese diagnóstica fisioterapêutica?",
    answer:
      "A hipótese diagnóstica deve ser descrita com base no diagnóstico funcional e fisioterapêutico, apontando os distúrbios cinético-funcionais observados, limitações de atividade e restrições de participação, preferencialmente utilizando a terminologia da CIF (Classificação Internacional de Funcionalidade).",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Montar um Prontuário Fisioterapêutico Completo: O Que Não Pode Faltar na Avaliação Clínica",
  description:
    "Descubra como montar um prontuário fisioterapêutico completo para sua clínica. Veja o que não pode faltar na avaliação clínica e garanta segurança jurídica e eficiência.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  image: "https://kynesia.com.br/blog/como-montar-prontuario-fisioterapeutico-completo.jpg",
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
  title: "Como Montar um Prontuário Fisioterapêutico Completo",
  description:
    "Descubra como montar um prontuário fisioterapêutico completo para sua clínica. Veja o que não pode faltar na avaliação clínica e garanta segurança jurídica e eficiência.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Como Montar um Prontuário Fisioterapêutico Completo",
    description:
      "Descubra como montar um prontuário fisioterapêutico completo para sua clínica. Veja o que não pode faltar na avaliação clínica e garanta segurança jurídica e eficiência.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/como-montar-prontuario-fisioterapeutico-completo.jpg",
        width: 1200,
        height: 630,
        alt: "Como Montar um Prontuário Fisioterapêutico Completo",
      },
    ],
  },
};

export default function ProntuarioFisioterapeuticoCompletoPage() {
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
          <span className="font-medium text-teal-600">Como Montar um Prontuário Fisioterapêutico Completo</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Como Montar um Prontuário Fisioterapêutico Completo: O Que Não Pode Faltar na Avaliação Clínica
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a estruturar um prontuário fisioterapêutico completo e em total conformidade técnica e ética. Evite erros na documentação e eleve o nível da sua prática clínica.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 25 Jun 2026</span>
            <span>⏱ 12 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Featured Image inside the Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/como-montar-prontuario-fisioterapeutico-completo.jpg"
            alt="Fisioterapeuta realizando avaliação clínica e preenchendo o prontuário fisioterapêutico do paciente"
            width={1200}
            height={630}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Resposta Rápida (Featured Snippet) */}
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            Um <strong>prontuário fisioterapêutico completo</strong> deve conter a identificação detalhada do paciente, anamnese profunda, exame físico cinético-funcional estruturado, hipótese diagnóstica, plano terapêutico com metas quantificáveis e o registro de evolução cronológica das sessões. Além de garantir a segurança jurídica ao profissional segundo as normas do COFFITO, ele subsidia o raciocínio clínico baseado em evidências.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A excelência na fisioterapia não se limita ao momento da intervenção direta com o paciente. A forma como documentamos a história clínica, o exame físico e a evolução do tratamento determina não apenas a segurança jurídica da nossa atuação profissional, mas também a eficácia do nosso raciocínio clínico. Um <strong>prontuário fisioterapêutico</strong> incompleto ou negligenciado é uma das maiores vulnerabilidades em clínicas e consultórios de fisioterapia no Brasil.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Mais do que um mero repositório de dados ou uma burocracia administrativa exigida pelos conselhos regionais, o prontuário é o espelho da qualidade do seu serviço. Ele permite que você, ou qualquer outro colega que venha a atender o paciente, compreenda exatamente a linha de raciocínio estabelecida, os desfechos medidos e as barreiras de evolução encontradas. Neste guia completo, detalhamos tudo o que não pode faltar na montagem de um prontuário fisioterapêutico completo e de alto padrão científico.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/anamnese-fisioterapeutica-como-fazer-passo-a-passo" className="text-teal-600 hover:underline">
                → Anamnese fisioterapêutica: como fazer passo a passo
              </Link>
            </li>
            <li>
              <Link href="/blog/modelos-evolucao-prontuario-fisioterapeutica" className="text-teal-600 hover:underline">
                → Modelos de evolução para prontuário fisioterapêutico
              </Link>
            </li>
            <li>
              <Link href="/blog/prontuario-eletronico-na-fisioterapia-vantagens-reais" className="text-teal-600 hover:underline">
                → Prontuário eletrônico na fisioterapia: vantagens reais e como escolher
              </Link>
            </li>
            <li>
              <Link href="/blog/red-flags-na-fisioterapia" className="text-teal-600 hover:underline">
                → Red Flags na Fisioterapia: Quando a Dor Pode Indicar Algo Mais Grave?
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é e qual a importância legal do prontuário fisioterapêutico?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O <strong>prontuário fisioterapêutico</strong> é um documento legal e sigiloso que registra todo o histórico de saúde do paciente sob os cuidados da fisioterapia. Ele está respaldado por resoluções específicas do Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO), em especial a Resolução nº 414/2012, que torna obrigatório o registro em prontuário de todas as ações de assistência fisioterapêutica prestada.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Sob o aspecto legal, a ausência de documentação adequada ou o preenchimento incorreto pode colocar o fisioterapeuta em uma situação de grave vulnerabilidade. Em casos de litígios jurídicos (processos de pacientes alegando imperícia, negligência ou imprudência), a única prova documental robusta de que o atendimento seguiu critérios científicos e de segurança é o prontuário. Registros vagos como "realizado exercícios gerais" ou "aplicado TENS" não oferecem a sustentação jurídica necessária para demonstrar o cumprimento do dever de cuidado.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Do ponto de vista clínico, ele favorece a transição segura de cuidados e a atuação multidisciplinar. Quando o prontuário é completo e bem estruturado, a comunicação entre profissionais torna-se fluida e assertiva, evitando repetições de testes desnecessários e garantindo que o tratamento do paciente não sofra descontinuidade.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que não pode faltar em um prontuário fisioterapêutico completo?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para estruturar um prontuário fisioterapêutico completo e de alta qualidade técnica, é fundamental que a documentação cubra todas as fases da avaliação e conduta clínica. A seguir, detalhamos cada um dos blocos essenciais que compõem essa estrutura.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">1. Dados de Identificação do Paciente</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A primeira seção deve trazer dados pessoais e demográficos atualizados. Isso assegura não apenas a correta identificação, mas também dados de contato e informações de suporte essenciais para a segurança do paciente.
        </p>
        <ul className="mb-5 list-disc pl-6 leading-relaxed text-gray-700">
          <li>Nome completo, data de nascimento e gênero;</li>
          <li>Documentos de identificação (CPF, RG) e dados de contato (telefone, e-mail);</li>
          <li>Profissão e nível de atividade física habitual;</li>
          <li>Contatos de emergência e informações sobre convênios (se aplicável).</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">2. Anamnese Estruturada</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A anamnese é a investigação inicial e detalhada do estado de saúde e da queixa do paciente. Ela deve conter:
        </p>
        <ul className="mb-5 list-disc pl-6 leading-relaxed text-gray-700">
          <li><strong>Queixa Principal (QP):</strong> Descrita em termos funcionais e nas palavras do próprio paciente (ex: "dor na região lombar ao ficar mais de 30 minutos em pé");</li>
          <li><strong>História da Doença Atual (HDA):</strong> Mecanismo de lesão, comportamento temporal dos sintomas, intensidade da dor medida por escalas visuais (EVA) ou numéricas (NRS), e fatores de alívio e piora;</li>
          <li><strong>Histórico Clínico e Comorbidades:</strong> Presença de hipertensão, diabetes, doenças reumatológicas, histórico cirúrgico, uso contínuo de medicamentos e exames de imagem anteriores;</li>
          <li><strong>Sinais de Alerta (Red Flags e Yellow Flags):</strong> Investigação minuciosa de sintomas de alerta sistêmicos que justifiquem encaminhamento médico, bem como fatores psicossociais e crenças limitantes sobre a dor que possam impactar o prognóstico.</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">3. Exame Físico Cinético-Funcional</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O exame físico traduz a queixa subjetiva em achados físicos mensuráveis e objetivos. Um prontuário fisioterapêutico completo deve detalhar:
        </p>
        <ul className="mb-5 list-disc pl-6 leading-relaxed text-gray-700">
          <li><strong>Inspeção e Palpação:</strong> Alinhamento postural dinâmico e estático, assimetrias musculares visíveis, presença de edema, hiperemia ou pontos de dor à palpação profunda;</li>
          <li><strong>Avaliação da Amplitude de Movimento (ADM):</strong> Medidas goniométricas ativas e passivas dos segmentos afetados, identificando padrões de limitação e sensação de final de curso (end-feel);</li>
          <li><strong>Força Muscular e Função Motora:</strong> Graduação de força muscular de acordo com a escala de Oxford (graus de 0 a 5) e avaliação de controle motor;</li>
          <li><strong>Testes Ortopédicos Especiais:</strong> Aplicação de testes ortopédicos estruturados em clusters de testes (visando melhor sensibilidade e especificidade diagnóstica) e descrição exata se o resultado foi positivo ou negativo;</li>
          <li><strong>Escalas e Questionários de Desfecho Validados (PROMs):</strong> Registro de pontuações em questionários funcionais validados (como Oswestry para dor lombar, DASH para membros superiores, ou WOMAC para joelho/quadril).</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">4. Diagnóstico Fisioterapêutico e Objetivos</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Após correlacionar a anamnese e os achados físicos, o fisioterapeuta deve estabelecer o diagnóstico cinesiológico-funcional. O prontuário deve explicitar os distúrbios cinéticos identificados e correlacionar com a Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF).
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em seguida, registre as metas terapêuticas em curto, médio e longo prazo. Essas metas devem ser SMART (específicas, mensuráveis, atingíveis, relevantes e temporais). Por exemplo, em vez de registrar "melhorar amplitude de ombro", prefira: "aumentar a flexão ativa do ombro direito de 120° para 160° em 4 semanas para permitir que o paciente alcance prateleiras altas".
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como estruturar o prontuário fisioterapêutico de acordo com o COFFITO</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para estar em conformidade total com o conselho federal, a estrutura lógica de preenchimento deve seguir padrões que garantam rastreabilidade e integridade das informações clínicas.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A Resolução COFFITO nº 414/2012 e o Código de Ética Profissional determinam que o registro no prontuário deve ser contínuo e cronológico. Cada atendimento realizado deve ser registrado imediatamente após a sessão, constando a data, a descrição da conduta aplicada, as respostas do paciente aos estímulos propostos e quaisquer intercorrências relevantes.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Além disso, toda evolução ou alteração de conduta clínica exige a assinatura digital ou carimbo físico legível do profissional com seu respectivo número de registro do conselho (CREFITO). No caso de prontuários em formato digital, é altamente recomendada a utilização de sistemas que adotem padrões de segurança que impeçam a alteração retroativa de registros de evolução sem a devida trilha de auditoria e assinatura eletrônica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Erros comuns no preenchimento do prontuário fisioterapêutico e como evitá-los</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Identificar e corrigir falhas de preenchimento é um passo crítico para a melhoria da gestão da clínica e da qualidade do cuidado. Veja abaixo os erros mais frequentes e como solucioná-los na prática diária:
        </p>
        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Uso de termos vagos ou descrições genéricas",
              desc: "Evite escrever 'realizado conduta de fisioterapia respiratória' ou 'aplicado protocolo padrão de joelho'. Descreva detalhadamente os parâmetros de carga, número de séries, repetições, velocidade de execução e técnicas específicas empregadas.",
              tip: "Se utilizou um exercício, registre: 'Agachamento livre, 3 séries de 10 repetições com 15kg de carga adicional, mantendo alinhamento patelar adequado.'",
            },
            {
              num: "02",
              title: "Ausência de evolução datada e cronológica",
              desc: "Não acumule anotações para preencher no final da semana ou do mês. A perda de detalhes clínicos finos é alta quando o registro não é feito no mesmo dia da consulta. Isso compromete a precisão da evolução clínica.",
              tip: "Reserve os últimos 5 a 10 minutos de cada atendimento para registrar a evolução em tempo real no sistema.",
            },
            {
              num: "03",
              title: "Não utilizar dados de escalas funcionais validadas",
              desc: "Basear a evolução do paciente apenas em relatos subjetivos do tipo 'o paciente refere que está melhor' fragiliza a base científica do tratamento. É indispensável quantificar essa melhora.",
              tip: "Aplique escalas validadas (como PSFS ou Escala de Dor Numérica) no início da avaliação e repita periodicamente a cada 4 ou 6 sessões.",
            },
            {
              num: "04",
              title: "Falta de assinatura e identificação do profissional",
              desc: "Toda evolução clínica precisa estar vinculada a um profissional identificado. Sem assinatura e CREFITO, o documento perde a validade jurídica perante fiscalizações ou auditorias.",
              tip: "Utilize um sistema de prontuário eletrônico que assine digitalmente os atendimentos de forma automatizada no momento da finalização.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Erro {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Como evitar:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: A importância da digitalização no prontuário fisioterapêutico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A transição de prontuários em papel para sistemas eletrônicos não é mais uma tendência de futuro, mas sim uma necessidade de presente para qualquer profissional que pretenda se manter competitivo e em conformidade ética e jurídica.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Sistemas digitais reduzem erros de legibilidade, evitam perda física de papéis, facilitam a aplicação e cálculo de pontuações de questionários validados e permitem cruzar dados de evolução clínica com métricas financeiras. Isso possibilita uma visão sistêmica sobre a eficiência de cada tratamento aplicado na clínica.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em resumo, a estruturação cuidadosa do <strong>prontuário fisioterapêutico completo</strong> é a espinha dorsal de um atendimento profissional de alto nível. Ela une conformidade jurídica, segurança para o paciente e uma prática baseada em evidências muito mais assertiva e mensurável.
        </p>

        {/* PAA Seção */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As Pessoas Também Perguntam</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">O que o COFFITO exige no prontuário fisioterapêutico?</h3>
              <p className="mt-2 leading-relaxed text-gray-700">
                O COFFITO, por meio da Resolução nº 414/2012, exige a identificação completa do paciente e do profissional, anamnese detalhada, descrição do exame cinético-funcional, hipótese diagnóstica, plano terapêutico definido e o registro cronológico detalhado de cada evolução clínica diária com assinatura do profissional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Qual a diferença entre ficha de avaliação e prontuário fisioterapêutico?</h3>
              <p className="mt-2 leading-relaxed text-gray-700">
                A ficha de avaliação é um componente do prontuário, focada em registrar os achados do exame físico e anamnese inicial do paciente. O prontuário fisioterapêutico é o conjunto documental completo, que engloba a ficha de avaliação inicial, exames complementares, termo de consentimento, termos de alta e todo o histórico de evoluções de cada atendimento realizado.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Por quanto tempo devo guardar o prontuário de fisioterapia?</h3>
              <p className="mt-2 leading-relaxed text-gray-700">
                Em conformidade com a legislação nacional para prontuários de saúde e as diretrizes éticas vigentes, o prontuário fisioterapêutico, seja físico ou digital, deve ser guardado e conservado por um período mínimo de 20 anos a partir do último registro de atendimento do paciente.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Seção */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                <summary className="font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Resumo Clínico */}
        <section className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumo Clínico</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              <strong>Principais achados:</strong> O prontuário fisioterapêutico completo é a base de dados clínicos que sustenta o raciocínio clínico baseado em evidências e garante o cumprimento das normas do COFFITO para a prática da fisioterapia.
            </p>
            <p>
              <strong>Implicações clínicas:</strong> A documentação estruturada e objetiva melhora a transição de cuidados, reduz a probabilidade de erros na conduta clínica, oferece suporte de defesa jurídica e permite mensurar a eficácia real do tratamento com base em desfechos quantificáveis.
            </p>
            <p>
              <strong>Aplicação prática:</strong> Padronize a sua rotina de registros de avaliação e evolução clínica, implementando questionários validados e realizando o preenchimento em tempo real em um sistema eletrônico seguro e auditável.
            </p>
          </div>
        </section>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8 mt-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo desenvolvido pela Equipe Kynesia com foco em prática baseada em evidências, raciocínio clínico, gestão clínica e inovação em fisioterapia. Nosso objetivo é transformar conhecimento científico em aplicação prática para fisioterapeutas, estudantes e gestores de clínicas que buscam excelência clínica e crescimento profissional.</p>
          </div>
        </div>

        {/* Conversão Kynesia */}
        <section className="mt-16 rounded-2xl bg-teal-900 p-8 text-white">
          <h3 className="mb-4 text-2xl font-bold">Como o Kynesia pode ajudar?</h3>
          <p className="mb-6 leading-relaxed">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados, indicadores clínicos e ferramentas para otimizar a rotina da clínica.
          </p>
          <p className="mb-6 leading-relaxed">
            Se você busca mais organização, produtividade e qualidade no atendimento, conheça gratuitamente o Kynesia.
          </p>
          <div className="flex">
            <Link
              href="/cadastro"
              className="inline-block rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-teal-600 active:scale-95"
            >
              Começar Grátis
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
