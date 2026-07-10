import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/red-flags-dor-no-ombro-quando-encaminhar";

const faqItems = [
  {
    question: "O que são red flags na dor no ombro?",
    answer: "Red flags na dor no ombro são sinais e sintomas clínicos de alerta que sugerem que a causa subjacente da dor não é uma disfunção musculoesquelética mecânica comum (como tendinopatia ou impacto), mas sim uma patologia sistêmica grave (câncer, infecção articular), um trauma agudo severo ou dor referida de órgãos viscerais (coração, pulmões), exigindo encaminhamento médico urgente."
  },
  {
    question: "Como um problema cardíaco ou pulmonar pode causar dor no ombro?",
    answer: "O ombro é um local frequente de dor referida devido à inervação compartilhada. A irritação do diafragma (irritação do nervo frênico) por patologias pulmonares, bem como a isquemia miocárdica (infarto), envia sinais nociceptivos que o cérebro interpreta como dor no ombro (geralmente esquerdo no infarto e ombro/pescoço na irritação diafragmática, conhecido como sinal de Kehr)."
  },
  {
    question: "O que é o tumor de Pancoast e como ele se manifesta no ombro?",
    answer: "O tumor de Pancoast é um tipo de câncer de pulmão localizado no ápice pulmonar. Ao crescer, ele pode comprimir diretamente o plexo braquial inferior, mimetizando uma dor crônica intensa no ombro e braço, frequentemente acompanhada de perda de peso inexplicada e sintomas neurológicos."
  },
  {
    question: "Qual a conduta imediata se o fisioterapeuta suspeitar de uma red flag no ombro?",
    answer: "O fisioterapeuta deve interromper imediatamente qualquer teste provocativo de alta carga ou mobilizações articulares extremas, conduzir uma triagem neurológica básica, documentar detalhadamente os achados no prontuário e encaminhar o paciente por escrito para o pronto-socorro (se houver dor no peito ou déficit agudo) ou para o médico especialista."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Red Flags na Dor no Ombro: Quando a Dor Não É Apenas uma Lesão Musculoesquelética?",
  description: "Entenda o que são as red flags dor no ombro, saiba identificar os principais sinais de alerta clínicos de gravidade e quando encaminhar o paciente com urgência.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  image: "https://kynesia.com.br/blog/red-flags-dor-ombro.jpg",
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
  title: "Red Flags na Dor no Ombro: Sinais de Alerta e Gravidade",
  description: "Identifique as principais red flags dor no ombro. Saiba quais sinais clínicos de alerta exigem encaminhamento médico imediato. Leia agora!",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Red Flags na Dor no Ombro: Sinais de Alerta e Gravidade",
    description: "Identifique as principais red flags dor no ombro. Saiba quais sinais clínicos de alerta exigem encaminhamento médico imediato. Leia agora!",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/red-flags-dor-ombro.jpg",
        width: 1200,
        height: 800,
        alt: "Infográfico explicativo sobre Red Flags na Dor no Ombro detalhando sinais de alerta clínicos para fisioterapeutas",
      },
    ],
  },
};

export default function RedFlagsDorOmbroPage() {
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
            Red Flags na Dor no Ombro: Quando a Dor Não É Apenas uma Lesão Musculoesquelética?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Aprenda a reconhecer os sinais de alerta que apontam para causas cardíacas, pulmonares, infecciosas e tumorais na dor no ombro e entenda quando encaminhar o paciente imediatamente.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 10 Jul 2026</span>
            <span>⏱ 11 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Featured Image inside the Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/red-flags-dor-ombro.jpg"
            alt="Infográfico detalhado sobre Red Flags na Dor no Ombro mostrando os 8 sinais de alerta clínicos importantes"
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
            As <strong>red flags dor no ombro</strong> são indicadores clínicos que sugerem a presença de patologias graves não-mecânicas locais, como dor referida visceral (infarto miocárdico, embolia pulmonar), neoplasias ocultas (incluindo o tumor de Pancoast), infecções articulares severas (artrite séptica) ou fraturas estruturais. A identificação de sintomas sistêmicos (febre, perda de peso involuntária, dor noturna implacável) ou cardiorrespiratórios (dor no peito, falta de ar) exige a paralisação imediata dos testes físicos e o encaminhamento médico de urgência. O rastreamento rápido dessas bandeiras vermelhas garante a segurança do paciente e pode salvar vidas.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          O ombro é a articulação com maior amplitude de movimento do corpo humano, o que o torna biomecanicamente complexo e suscetível a sobrecargas. Na rotina da fisioterapia traumato-ortopédica, a imensa maioria das queixas clínicas de dor no ombro decorre de condições mecânicas locais bem mapeadas, tais como tendinopatias do manguito rotador, bursite subacromial, capsulite adesiva (ombro congelado) ou instabilidades articulares benignas.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          No entanto, por ser uma região de forte convergência neurológica, o complexo do ombro é um dos locais mais comuns de manifestação de dor referida de origem visceral (cardíaca, pulmonar ou hepática) e de dores decorrentes de patologias sistêmicas severas. Como profissionais de saúde de primeiro contato, os fisioterapeutas desempenham um papel crítico de triagem.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Saber diferenciar uma lesão mecânica local de uma disfunção de gravidade sistêmica é vital. Para guiar essa tomada de decisão clínica segura, as diretrizes baseadas em evidências dependem do reconhecimento preciso das **red flags dor no ombro**. Negligenciar esses sinais pode resultar em manipulações prejudiciais em tecidos fragilizados ou em atrasos catastróficos no encaminhamento médico.
        </p>

        {/* Links Internos */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leituras recomendadas para se aprofundar:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">
                → Diagnóstico Diferencial na Prática: Coluna Cervical vs. Articulação do Ombro
              </Link>
            </li>
            <li>
              <Link href="/blog/sindrome-do-impacto-do-ombro-causas-tratamento-e-exercicios" className="text-teal-600 hover:underline">
                → Síndrome do Impacto do Ombro: Diagnóstico Baseado em Evidências e Exercícios
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes Ortopédicos para Ombro: Sensibilidade, Especificidade e Interpretação
              </Link>
            </li>
            <li>
              <Link href="/blog/red-flags-na-fisioterapia" className="text-teal-600 hover:underline">
                → Red Flags na Fisioterapia: Identificando Sinais de Gravidade Sistêmica
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Que São as Red Flags na Dor no Ombro?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          As <strong>red flags dor no ombro</strong> são sinais clínicos objetivos ou relatos subjetivos de histórico de saúde que aumentam significativamente a probabilidade de o paciente apresentar uma condição médica séria não mecânica sob a forma de dor no ombro. Tais sinais determinam que o fisioterapeuta não deve prosseguir com intervenções locais sem uma autorização médica esclarecida.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          A triagem dessas bandeiras vermelhas não é um método de diagnóstico médico de patologia, mas um filtro de segurança para triagem clínica. O ombro compartilha rotas somáticas e autonômicas com vários sistemas corporais, de modo que dores relatadas na região anterior, lateral ou na região escapular podem mimetizar perfeitamente lesões ortopédicas típicas.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">As 8 Red Flags Críticas na Dor no Ombro (Detalhamento Clínico)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A imagem clínica de triagem do Kynesia sintetiza os oito marcadores fundamentais que exigem a atenção do terapeuta. Analisamos detalhadamente cada uma dessas red flags a seguir:
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">1. Dor no Peito ou Falta de Ar</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              A manifestação simultânea de dor na região torácica, palpitações ou dispneia (falta de ar) ao lado da dor no ombro aponta diretamente para o envolvimento visceral de sistemas cardiopulmonares.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Isquemia Miocárdica / Infarto:</strong> O infarto agudo do miocárdio (IAM) frequentemente irradia dor referida para o membro superior esquerdo e região do ombro/mandíbula, devido a conexões sensoriais autonômicas compartilhadas em nível espinhal (T1-T4).</li>
              <li><strong>Patologia Pulmonar Aguda:</strong> Embolia pulmonar, pneumonia ou pneumotórax. A irritação do peritônio ou da pleura diafragmática (inervados pelo nervo frênico, C3-C5) irradia dor diretamente para o ápice do ombro correspondente, um fenômeno clínico clássico conhecido como <strong>sinal de Kehr</strong>.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">2. Perda de Peso Inexplicada</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              A redução involuntária e inexplicada de peso corporal (por exemplo, mais de 5 a 10% do peso corporal em menos de 6 meses sem dieta ou atividade física direcionada) é um indicador sistêmico crítico.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Neoplasia (Malignidade):</strong> A perda de peso reflete a caquexia tumoral associada ao desenvolvimento metastático primário ou secundário.</li>
              <li><strong>Tumor de Pancoast:</strong> Um tumor localizado no ápice pulmonar que cresce silenciosamente e invade a parede torácica, comprimindo a porção inferior do plexo braquial (C8-T1). Isso simula uma dor crônica severa no ombro e irradia para o braço, comumente confundida com distúrbios da coluna cervical ou manguito rotador.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">3. Febre ou Calafrios</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Sintomas sistêmicos de hipertermia e tremores musculares concomitantes com dor aguda na articulação do ombro sugerem um processo infeccioso local ou sistêmico severo.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Artrite Séptica Glenoumeral:</strong> Uma infecção bacteriana direta na articulação, capaz de destruir a cartilagem articular e tecidos moles de forma irreversível em poucos dias se não tratada cirurgicamente com lavagem e antibioticoterapia.</li>
              <li><strong>Osteomielite no Úmero Proximal:</strong> Infecção do canal ósseo medular.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">4. Dor Noturna Intensa</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Pacientes com tendinopatias e capsulite adesiva frequentemente reclamam de dor ao se deitar sobre o ombro afetado. No entanto, a **dor noturna intensa de caráter red flag** possui comportamento distinto.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Dor Não-Mecânica / Malignidade:</strong> Dor noturna implacável, latejante, que se manifesta de forma agressiva independentemente de deitar sobre o braço ou mudar de posição, impedindo totalmente o repouso. É um sinal comum de invasão tumoral intrínseca ou metástase óssea local, que tipicamente possui comportamento constante e piora em repouso.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">5. Trauma Importante</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Histórico recente de quedas com impacto direto sobre o acrômio, acidentes automobilísticos ou forças extremas de tração e torção no membro superior.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Fraturas Estruturais:</strong> Fratura do úmero proximal, da clavícula ou do colo da escápula.</li>
              <li><strong>Luxação Glenoumeral Traumática / Risco Vascular:</strong> O deslocamento anterior agudo do úmero pode comprometer a integridade da artéria axilar ou gerar neuropraxia do nervo axilar (avaliada pela perda de sensibilidade tátil sobre o músculo deltoide e incapacidade de contração isométrica do mesmo).</li>
              <li><strong>Ruptura Aguda Massiva do Manguito Rotador:</strong> Ruptura de múltiplos tendões pós-trauma, resultando em \"pseudoparesia\" (perda motora súbita de elevação do braço sem causa neurológica direta).</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">6. Fraqueza ou Déficit Neurológico</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Perda objetiva de sensibilidade na região do dermátomo ou fraqueza severa em grupos musculares específicos do membro superior que se instalam de forma rápida.
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Radiculopatia Cervical Grave (C5-C6):</strong> Hérnia de disco cervical ou estenose foraminal volumosa gerando compressão severa de raiz nervosa e comprometendo os reflexos bicipital e estilorradial, associado à perda real de força de flexão de cotovelo e abdução de ombro.</li>
              <li><strong>Neuropatia Compressiva / Lesão do Plexo Braquial:</strong> Lesão dos nervos axilar, supraescapular ou do nervo torácico longo. A paralisia do nervo torácico longo gera a inativação do músculo serrátil anterior, manifestando-se fisicamente pelo sinal da **escápula alada** ao empurrar uma parede.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">7. História de Câncer</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              Um histórico pessoal prévio de neoplasias malignas (especialmente câncer de mama, pulmão, tireoide, próstata ou rins, conhecidos por sua forte propensão metastática óssea).
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Metástase Óssea Secundária:</strong> O úmero proximal é um dos sítios periféricos mais comuns para implante de células cancerígenas secundárias, o que fragiliza estruturalmente o osso cortical e expõe o paciente ao risco de fratura patológica sob manobras mecânicas ou exercícios resistidos.</li>
            </ul>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-slate-50 p-6">
            <h3 className="font-bold text-lg text-gray-900">8. Infecção ou Uso de Imunossupressores</h3>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm">
              O uso crônico de medicamentos imunossupressores (corticosteroides, quimioterápicos, imunobiológicos para doenças autoimunes) ou histórico de infecções recentes em outros órgãos (ex: infecção urinária).
            </p>
            <p className="leading-relaxed text-gray-700 mt-2 text-sm font-semibold">
              O que pode indicar:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-gray-700">
              <li><strong>Suscetibilidade Infecciosa Local:</strong> A imunossupressão reduz os mecanismos de defesa teciduais normais da articulação glenoumeral, aumentando o risco de disseminação hematogênica de patógenos bacterianos que se instalam na bolsa sinovial ou na bainha bicipital.</li>
            </ul>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Diferenciando a Dor Musculoesquelética Comum de Patologias Graves</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para refinar o raciocínio clínico durante a avaliação e triagem de segurança do ombro, observe a tabela comparativa de sinais clínicos comportamentais:
        </p>

        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Apresentação Clínica</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Dor Mecânica no Ombro</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900 text-red-600">Dor Referida Visceral ou Sistêmica (Alerta)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Relação com Movimentos</td>
                <td className="px-6 py-4 text-gray-700">Aumenta claramente com movimentos específicos (elevação, rotações) ou testes de força.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Movimentos do ombro não reproduzem, não alteram e não aliviam a queixa.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Sintomas Cardiorrespiratórios</td>
                <td className="px-6 py-4 text-gray-700">Ausentes. Respiração normal e ritmo cardíaco sem alteração no repouso.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Associado a palpitações, aperto no peito, suor frio, náusea ou dispneia.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Comportamento ao Repouso</td>
                <td className="px-6 py-4 text-gray-700">Alivia significativamente ao posicionar o braço em suporte ou repouso mecânico.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Implacável. Permanece idêntica mesmo com o braço apoiado.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Sensibilidade Local</td>
                <td className="px-6 py-4 text-gray-700">Dor pontual à palpação sobre tendões, tubérculo maior ou espaço subacromial.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Ausência de sensibilidade dolorosa local palpável no ombro. A dor é difusa.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-950">Sintomas Sistêmicos adicionais</td>
                <td className="px-6 py-4 text-gray-700">Nenhum sintoma geral.</td>
                <td className="px-6 py-4 text-gray-700 font-medium">Febre, calafrios recorrentes ou perda acentuada de peso sem explicação.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conduta Clínica e Roteiro de Encaminhamento</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Caso o fisioterapeuta encontre indícios de **red flags dor no ombro** na sua triagem, a conduta deve ser imediata e seguir três pilares de segurança:
        </p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>1. Suspensão de Técnicas Provocativas:</strong> Cancele a execução de testes de impacto de alta carga (como testes de Neer, Hawkins-Kennedy com resistência exacerbada), mobilizações articulares vigorosas ou exercícios resistidos de membro superior até a liberação médica diagnóstica.
            </li>
            <li>
              <strong>2. Direcionamento Adequado da Urgência:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                <li><strong>Encaminhamento Hospitalar de Emergência (Pronto-Socorro):</strong> Se o paciente manifestar dor no peito, falta de ar inexplicada, dor intensa no ombro esquerdo com suor frio, ou perda súbita de força neurológica, direcione-o imediatamente ao serviço de emergência.</li>
                <li><strong>Encaminhamento Médico Especializado (Eletivo com Urgência):</strong> Em caso de suspeita de processos tumorais ou artrite séptica em estágio inicial/infecção, forneça uma carta de encaminhamento detalhada descrevendo os achados e direcione o paciente para uma consulta ortopédica/oncológica diagnóstica rápida.</li>
              </ul>
            </li>
            <li>
              <strong>3. Registro Assistencial Legal:</strong> Documente detalhadamente no prontuário eletrônico as red flags investigadas, a justificativa de segurança para a paralisação do tratamento e a emissão do documento de encaminhamento ao médico. Esta é a proteção ética e jurídica indispensável do fisioterapeuta.
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-2xl border-2 border-red-500 bg-red-50/50 p-6">
          <h4 className="mb-2 font-bold text-red-950 text-lg flex items-center gap-2">
            ⚠️ ATENÇÃO
          </h4>
          <p className="text-red-950 text-sm leading-relaxed font-medium">
            Avaliar, identificar e encaminhar são etapas indispensáveis da boa prática fisioterapêutica. Lembre-se: sua tomada de decisão clínica diante de um sinal de alerta pode salvar vidas e prevenir lesões irreparáveis no paciente.
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Conclusão: Raciocínio Clínico Além do Tecido Local</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A atuação do fisioterapeuta baseada em evidências científicas requer um olhar atento para além da dor local musculoesquelética. O ombro é uma articulação maravilhosa, mas que pode funcionar como o espelho de patologias cardíacas, pulmonares e tumorais silenciosas. Rastrear sistematicamente as **red flags dor no ombro** é a melhor demonstração de rigor técnico, ética profissional e compromisso com a integridade vital dos pacientes.
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
            A triagem de red flags na dor no ombro afasta o risco de tratamento inadequado em colunas ou articulações fragilizadas por neoplasias, metástases ou infecções ocultas.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            A ocorrência de dor referida de origem diafragmática (sinal de Kehr) ou cardíaca (IAM) manifestada no ombro esquerdo necessita de detecção imediata para encaminhamento à emergência.
          </p>
          <p className="leading-relaxed text-gray-300">
            O registro completo da triagem no prontuário eletrônico atesta o amparo ético, profissional e a excelência clínica do fisioterapeuta de primeiro contato.
          </p>
        </div>

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
