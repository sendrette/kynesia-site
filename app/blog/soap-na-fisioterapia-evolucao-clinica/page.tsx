import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/soap-na-fisioterapia-evolucao-clinica";

const faqItems = [
  {
    question: "O que significa a sigla SOAP na fisioterapia?",
    answer: "A sigla SOAP significa Subjetivo (S), Objetivo (O), Avaliação (A) e Plano (P). É uma estrutura de registro clínico padronizada mundialmente para organizar as informações coletadas durante o atendimento ao paciente, facilitando a tomada de decisão clínica e garantindo a continuidade da assistência."
  },
  {
    question: "Qual a diferença entre a parte de Objetivo (O) e Avaliação (A) no SOAP?",
    answer: "A parte de Objetivo (O) registra apenas fatos e medições coletadas, como amplitude de movimento em graus ou escores brutos de testes funcionais. A parte de Avaliação (A) é a interpretação clínica do terapeuta sobre esses dados, ou seja, o raciocínio clínico que define se o paciente melhorou, piorou ou manteve o quadro cinético-funcional."
  },
  {
    question: "O COFFITO exige o uso do método SOAP na evolução clínica?",
    answer: "Não. O COFFITO exige por lei que as evoluções sejam diárias, legíveis e completas no prontuário. A metodologia utilizada para estruturar a escrita é de escolha do fisioterapeuta, sendo o método SOAP a estrutura de registro mais recomendada internacionalmente por sua segurança jurídica, clareza científica e facilidade de auditoria."
  },
  {
    question: "Como o SOAP ajuda na segurança jurídica do fisioterapeuta?",
    answer: "O método SOAP organiza as informações de maneira cronológica, detalhada e quantitativa. Em casos de auditoria, processos judiciais ou solicitações de convênios, um prontuário estruturado em SOAP prova a linha de raciocínio clínico do profissional e a justificativa científica para cada conduta tomada."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SOAP na Fisioterapia: Como Fazer uma Evolução Clínica Completa (com Exemplo Prático)",
  description: "Aprenda como aplicar o método SOAP na fisioterapia para estruturar evoluções clínicas completas e eficientes. Veja exemplos práticos para sua rotina.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  image: "https://kynesia.com.br/blog/soap-na-fisioterapia-evolucao-clinica.jpg",
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
  title: "SOAP na Fisioterapia: Como Fazer Evolução Completa",
  description: "Aprenda como aplicar o método SOAP na fisioterapia para estruturar evoluções clínicas completas e eficientes. Veja exemplos práticos para sua rotina.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "SOAP na Fisioterapia: Como Fazer Evolução Completa",
    description: "Aprenda como aplicar o método SOAP na fisioterapia para estruturar evoluções clínicas completas e eficientes. Veja exemplos práticos para sua rotina.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/soap-na-fisioterapia-evolucao-clinica.jpg",
        width: 1200,
        height: 800,
        alt: "Prancheta contendo o modelo de evolução clínica SOAP na fisioterapia, cercado por um livro de prontuário fisioterapêutico e um caderno espiral com anotações de evolução",
      },
    ],
  },
};

export default function SOAPNaFisioterapiaPage() {
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
            Metodologia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            SOAP na Fisioterapia: Como Fazer uma Evolução Clínica Completa (com Exemplo Prático)
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Domine o método SOAP para estruturar as evoluções clínicas dos seus pacientes com facilidade, unindo o raciocínio cinético-funcional à máxima segurança jurídica para sua carreira.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 03 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem em Destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/soap-na-fisioterapia-evolucao-clinica.jpg"
            alt="Mesa de trabalho clínica com prancheta ilustrando a divisão do método SOAP (Subjetivo, Objetivo, Avaliação, Plano) na fisioterapia, livros sobre prontuário e caderno de metas de evolução"
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
            O método <strong>SOAP na fisioterapia</strong> é um formato padronizado de registro clínico dividido em quatro etapas sucessivas: **S (Subjetivo)**, onde o terapeuta anota os sintomas e relatos descritos verbalmente pelo paciente; **O (Objetivo)**, dedicado ao registro de dados mensuráveis coletados em testes de amplitude de movimento, força ou dor; **A (Avaliação)**, que representa a interpretação dos dados coletados sob o raciocínio cinético-funcional; e **P (Plano)**, onde se descreve a progressão dos exercícios e as condutas para as sessões futuras. A adoção desse método assegura clareza técnica e total proteção legal à rotina de reabilitação.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Aplicar o método <strong>SOAP na fisioterapia</strong> representa o divisor de águas entre um prontuário confuso e desorganizado e um histórico clínico que exala profissionalismo e validade científica. Diariamente, fisioterapeutas se deparam com a obrigação de documentar seus atendimentos, mas muitos ainda realizam esses registros sem um modelo definido, gerando textos difíceis de interpretar em reconsultas ou auditorias de saúde.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          O registro clínico não deve ser visto apenas como uma obrigação legal do conselho profissional, mas sim como a espinha dorsal de um raciocínio clínico estruturado. O SOAP (Subjetivo, Objetivo, Avaliação e Plano) é o padrão de escrita clínica mais adotado no mundo. Ele fornece um mapa mental preciso, permitindo ao fisioterapeuta organizar dados subjetivos e objetivos e traduzi-los em metas terapêuticas consistentes para cada sessão.
        </p>

        {/* Links Internos (Leia também) */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/como-montar-prontuario-fisioterapeutico-completo" className="text-teal-600 hover:underline">
                → Como Montar um Prontuário Fisioterapêutico Completo: O Que Não Pode Faltar
              </Link>
            </li>
            <li>
              <Link href="/blog/como-reduzir-tempo-documentacao-fisioterapia" className="text-teal-600 hover:underline">
                → Como Reduzir o Tempo Gasto com Documentação na Fisioterapia Sem Perder Qualidade
              </Link>
            </li>
            <li>
              <Link href="/blog/modelos-evolucao-prontuario-fisioterapeutica" className="text-teal-600 hover:underline">
                → Modelos de Evolução Fisioterapêutica: Exemplos Práticos de Escrita Clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/prontuario-eletronico-na-fisioterapia-vantagens-reais" className="text-teal-600 hover:underline">
                → Prontuário Eletrônico na Fisioterapia: Vantagens Reais de Abandonar o Papel
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por Que Adotar o Método SOAP na Fisioterapia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Adotar um padrão estruturado de escrita melhora substancialmente a governança de uma clínica de reabilitação. Como realçado pelas anotações no caderno da nossa imagem de referência: <em>"Evolução completa é mais que registro."</em> O uso rigoroso do **SOAP na fisioterapia** impacta diretamente cinco dimensões cruciais do cuidado à saúde:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "1. Comunicação Eficaz", desc: "Permite que qualquer colega de equipe ou outro profissional de saúde leia o prontuário e compreenda com facilidade o status de evolução do paciente." },
            { title: "2. Segurança Assistencial", desc: "Evita erros na progressão ou regressão de cargas e condutas por documentar rigorosamente os limites e intercorrências de cada sessão." },
            { title: "3. Continuidade do Cuidado", desc: "Mantém uma linha do tempo clara dos progressos do paciente, permitindo comparar achados ao longo de semanas ou meses." },
            { title: "4. Registro de Evidências", desc: "Atua como validador científico das melhoras do paciente por vincular desfechos subjetivos a testes funcionais mensuráveis." },
            { title: "5. Responsabilidade Legal", desc: "Garante proteção total perante auditorias de planos de saúde, solicitações e eventuais questionamentos periciais." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 border-l-4 border-teal-500 rounded-r-xl p-4 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-gray-650 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Desvendando a Estrutura do SOAP na Fisioterapia Passo a Passo</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para implementar este sistema em sua rotina clínica, é necessário destrinchar o que deve constar em cada uma das quatro letras da sigla:
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">S — Subjetivo (Relato Verbal e Percepção do Paciente)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Este quadrante destina-se às informações declaradas pelo próprio paciente ou seu acompanhante. Não entram medições nem observações do fisioterapeuta. Deve incluir:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>A queixa principal trazida no início da sessão.</li>
          <li>Histórico rápido da condição atual (ex.: <em>"dor piorou ao levantar peso ontem"</em>).</li>
          <li>Nível de dor relatado em escalas analógicas, como a Escala Visual Analógica (EVA).</li>
          <li>Relatos sobre a melhora da funcionalidade nas atividades de vida diária (AVDs).</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">O — Objetivo (Dados Mensuráveis, Sinais e Testes Físicos)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A seção objetiva reúne os dados científicos, replicáveis e observáveis coletados pelo terapeuta durante a sessão. É aqui que documentamos os fatos brutos:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Parâmetros goniométricos de amplitude de movimento (ADM).</li>
          <li>Resultados de testes ortopédicos especiais (ex.: Teste de Gaveta Anterior, Jobe, Hawkins-Kennedy).</li>
          <li>Sinais clínicos macroscópicos (edema quantificado em cruzes, calor local, hiperemia).</li>
          <li>Dados de força muscular coletados por dinamometria ou testes manuais de graduação.</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">A — Avaliação (Raciocínio Clínico e Interpretação do Terapeuta)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Este é o espaço onde o fisioterapeuta demonstra sua expertise clínica. Na seção de Avaliação (Assessment), você correlaciona as informações do Subjetivo e do Objetivo. Deve conter:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>A interpretação clínica dos achados (ex.: <em>"a dor na flexão lombar diminuiu porque houve centralização dos sintomas na extensão"</em>).</li>
          <li>Atualização do diagnóstico cinético-funcional.</li>
          <li>Avaliação da resposta e adesão do paciente frente às condutas adotadas.</li>
          <li>Descrição clara de progressos ou eventuais restrições/tolerâncias a cargas.</li>
        </ul>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">P — Plano (Metas e Direcionamento do Tratamento)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          No Plano, você detalha o direcionamento terapêutico imediato e os objetivos para as próximas sessões. O plano evita o improviso clínico e garante clareza nas intervenções:
        </p>
        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700 text-sm">
          <li>Metas específicas de curto prazo.</li>
          <li>Condutas que serão adotadas nas próximas intervenções de reabilitação.</li>
          <li>Orientações de autocuidado passadas ao paciente para execução domiciliar.</li>
          <li>Planejamento de encaminhamentos ou reavaliações com exames adicionais.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplo Prático Completo de Evolução SOAP</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para consolidar como o método **SOAP na fisioterapia** é aplicado no dia a dia, preparamos uma evolução clínica realista de um paciente simulado em fase intermediária de reabilitação para tendinopatia patelar:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-slate-50/70 p-6 space-y-4 text-sm leading-relaxed text-gray-700">
          <div>
            <span className="inline-block rounded-md bg-teal-600 px-2 py-0.5 text-xs font-bold text-white mr-2">S (Subjetivo)</span>
            <span>Paciente relata melhora sutil da dor anterior no joelho direito após a última sessão. Refere que conseguiu subir escadas no trabalho sem dor importante. Avaliação de dor atual: EVA 2/10 na queixa subjetiva.</span>
          </div>
          <div>
            <span className="inline-block rounded-md bg-teal-600 px-2 py-0.5 text-xs font-bold text-white mr-2">O (Objetivo)</span>
            <span>Goniometria de flexão ativa de joelho direito em 135° sem dor. Teste de agachamento unipodal provocou dor leve (EVA 3/10) a partir de 80° de flexão. Força de extensão mantida em grau 4+ de MRC. Ausência de edema ou calor local na palpação da patela.</span>
          </div>
          <div>
            <span className="inline-block rounded-md bg-teal-600 px-2 py-0.5 text-xs font-bold text-white mr-2">A (Avaliação)</span>
            <span>Paciente apresenta evolução cinético-funcional positiva, com aumento de 10° na amplitude de flexão de joelho ativa e aumento da tolerância à carga excêntrica submáxima. Quadro clínico compatível com tendinopatia patelar em fase de remodelamento de colágeno. Resposta positiva à progressão de carga de agachamento em cadeia cinética fechada (CCF).</span>
          </div>
          <div>
            <span className="inline-block rounded-md bg-teal-600 px-2 py-0.5 text-xs font-bold text-white mr-2">P (Plano)</span>
            <span>Manter plano de fortalecimento isométrico e excêntrico do quadríceps na próxima sessão. Progredir agachamento unipodal para 90° de flexão com carga adicional de 5kg, monitorando limiar de dor. Reforçar orientações de gelo pós-atividade e autocuidado no domicílio.</span>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Boas Práticas e Responsabilidade no Prontuário Fisioterapêutico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Conforme discutido no livro <em>"Prontuário Fisioterapêutico: Boas práticas e responsabilidade clínica"</em>, a evolução diária deve primar pela precisão. Evite termos vagos como <em>"paciente melhor"</em> ou <em>"tratamento padrão realizado"</em>. A evolução clínica de qualidade utiliza valores quantificáveis (EVA, graus de amplitude, repetições realizadas) para atestar a evolução real do quadro clínico.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          A transição dos registros manuais em papel para plataformas eletrônicas modernas é o passo definitivo para a eficiência. Com o prontuário eletrônico do Kynesia, o fisioterapeuta consegue salvar e duplicar evoluções SOAP completas em menos de 2 minutos, inserindo apenas as modificações do dia, aliando máxima agilidade clínica à total responsabilidade e conformidade com o COFFITO e a LGPD.
        </p>

        {/* Links Internos Adicionais */}
        <div className="mb-8 rounded-2xl border border-teal-100 bg-teal-50/40 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">🔗 Continue se capacitando em nosso blog:</h3>
          <ul className="space-y-2 text-sm text-teal-700">
            <li>
              <Link href="/blog/como-reduzir-tempo-documentacao-fisioterapia" className="text-teal-600 hover:underline">
                → Como Reduzir o Tempo Gasto com Documentação na Fisioterapia Sem Perder Qualidade
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-clinica-em-fisioterapia-guia-completo-2026" className="text-teal-600 hover:underline">
                → Gestão Clínica em Fisioterapia: Guia Completo para Fisioterapeutas
              </Link>
            </li>
            <li>
              <Link href="/blog/como-precificar-sessoes-de-fisioterapia" className="text-teal-600 hover:underline">
                → Como Precificar Sessões de Fisioterapia: Guia de Precificação
              </Link>
            </li>
          </ul>
        </div>

        {/* Perguntas Frequentes (FAQ) */}
        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Perguntas Frequentes sobre Evolução SOAP</h2>
        <div className="mt-6 space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h4 className="text-lg font-medium text-gray-900">{item.question}</h4>
              <p className="mt-2 text-gray-600 leading-relaxed text-sm">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Bloco de Resumo de Gestão */}
        <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="mb-4 text-xl font-bold text-teal-400">Resumo de Gestão: O Uso do Método SOAP na Clínica</h3>
          <p className="text-sm leading-relaxed text-slate-300">
            A estruturação da evolução diária com o método <strong>SOAP na fisioterapia</strong> organiza a tomada de decisão do terapeuta e blinda a clínica juridicamente. Com registros objetivos divididos em Subjetivo, Objetivo, Avaliação e Plano, o clínico elimina a prolixidade e foca na coleta de indicadores clínicos reais de melhora do paciente. Esta padronização resulta em economia de tempo de escrita, redução de glosas por planos de saúde e uma comunicação clara entre toda a equipe assistencial da clínica.
          </p>
        </div>

        {/* Assinatura do Autor */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
            K
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Escrito por Equipe Kynesia</p>
            <p className="text-xs text-gray-500">Criando tecnologias que simplificam a rotina e a gestão de fisioterapeutas de alta performance.</p>
          </div>
        </div>

        {/* Bloco de Conversão */}
        <div className="mt-16 rounded-3xl border border-teal-200 bg-gradient-to-b from-teal-50/70 to-white p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Padronize suas evoluções e prontuários com o método SOAP no Kynesia!</h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
            Utilize nosso prontuário eletrônico completo com suporte nativo à evolução SOAP e preencha suas condutas diárias em menos de 2 minutos.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/start-free"
              className="inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Começar Grátis (3 dias)
            </Link>
            <Link
              href="/planos"
              className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Conhecer Planos
            </Link>
          </div>
        </div>
      <PatientCTA />

      </article>
    </main>
  );
}
