import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/site-footer";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/abordagem-biopsicossocial-dor-cronica";

const faqItems = [
  {
    question: "O que é a abordagem biopsicossocial da dor na fisioterapia?",
    answer: "A abordagem biopsicossocial da dor é um modelo clínico integrativo que reconhece a dor crônica como uma experiência complexa influenciada pela interação dinâmica entre fatores biológicos (nocicepção, sensibilização neural), fatores psicológicos (crenças, catastrofização, medo do movimento) e fatores sociais (ambiente familiar, trabalho, suporte socioeconômico)."
  },
  {
    question: "Por que o modelo biomédico tradicional falha na dor crônica?",
    answer: "O modelo puramente biomédico pressupõe uma relação direta e linear entre lesão tecidual anatômica e intensidade dolorosa. Em quadros crônicos, os tecidos biológicos já concluíram seu ciclo natural de cicatrização, mas o sistema nervoso central permanece hipersensibilizado e hiperprotetor, tornando exames de imagem incapazes de explicar o sofrimento do paciente."
  },
  {
    question: "Qual o papel da educação em dor no tratamento da dor crônica?",
    answer: "A educação em neurociência da dor (PNE) tem como objetivo ressignificar a percepção de perigo do cérebro. Ao compreender que a dor crônica funciona como um alarme hipersensível e não como sinal de dano tecidual ativo, o paciente reduz a ansiedade, a catastrofização e o medo de se movimentar, facilitando a adesão aos exercícios terapêuticos."
  },
  {
    question: "Quais são os principais fatores psicossociais que perpetuam a dor crônica?",
    answer: "Os fatores psicossociais mais prevalentes (conhecidos como Yellow Flags) incluem pensamentos catastrofizantes sobre a dor, cinesiofobia (medo excessivo do movimento), expectativa negativa de recuperação, estresse emocional prolongado, isolamento social e comunicação médica iatrogênica que gera nocebo."
  },
  {
    question: "Como implementar a exposição gradual na fisioterapia para pacientes com cinesiofobia?",
    answer: "A exposição gradual consiste em identificar os movimentos ou atividades temidas pelo paciente e reintroduzi-los progressivamente em doses submáximas e seguras. Essa abordagem promove dessensibilização sistemática do sistema nervoso e reconfiguração cortical, demonstrando ao cérebro que o movimento é seguro."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Abordagem Biopsicossocial da Dor Crônica na Fisioterapia",
  description: "Entenda a abordagem biopsicossocial da dor na fisioterapia. Aprenda a integrar fatores biológicos, psicológicos e sociais no tratamento da dor crônica com base em evidências.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  image: "https://kynesia.com.br/blog/abordagem-biopsicossocial-dor-cronica.png",
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
  title: "Abordagem Biopsicossocial da Dor: Guia na Fisioterapia",
  description: "Descubra como aplicar a abordagem biopsicossocial da dor na fisioterapia para otimizar o tratamento da dor crônica com base em evidências científicas e empatia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Abordagem Biopsicossocial da Dor Crônica na Fisioterapia",
    description: "Descubra como aplicar a abordagem biopsicossocial da dor na fisioterapia para otimizar o tratamento da dor crônica com base em evidências científicas e empatia.",
    type: "article",
    url: pageUrl,
  },
};

export default function AbordagemBiopsicossocialDorPage() {
  return (
    <main className="k-page kyn-article">
      <SiteHeader showProgress />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Prática Baseada em Evidências</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Neurociência & Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Abordagem Biopsicossocial da Dor Crônica na Fisioterapia: Guia Clínico Completo
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Compreenda como integrar neurobiologia, crenças, comportamento motor e contexto socioambiental no manejo assertivo de pacientes com dor persistente.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>14 Out 2026</span>
            <span>15 min de leitura</span>
            <span>Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem em Destaque */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/abordagem-biopsicossocial-dor-cronica.png"
            alt="Abordagem Biopsicossocial da Dor Crônica - Como integrar fatores biológicos, psicológicos e sociais na fisioterapia"
            width={1200}
            height={800}
            className="w-full object-contain"
            priority
          />
        </div>

        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Resposta Rápida</h2>
          <p className="text-gray-900 font-medium leading-relaxed">
            A <strong>abordagem biopsicossocial da dor</strong> compreende que a dor crônica não é um reflexo direto de lesão tecidual, mas sim uma resposta protetora do sistema nervoso central gerada pela confluência de fatores biológicos (sensibilização central), psicológicos (medo do movimento, hipervigilância, catastrofização) e sociais (contexto laboral, estresse ambiental). Na fisioterapia baseada em evidências, o tratamento envolve educação em neurociência da dor, exposição gradual ao movimento e reconstrução da autoeficácia funcional.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Durante décadas, a formação em fisioterapia ortopédica esteve fundamentada predominantemente no modelo biomédico cartesiano. Segundo essa visão mecanicista tradicional, o corpo humano assemelha-se a uma máquina: se há dor, necessariamente há uma estrutura danificada, desalinhada ou inflamada emitindo sinais de alerta. Embora essa premissa seja válida e indispensável no trauma agudo, ela se torna ineficaz e até prejudicial quando aplicada a quadros de dor persistente.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Com a evolução da neurociência contemporânea e a redefinição conceitual da dor pela Associação Internacional para o Estudo da Dor (IASP), consolidou-se a <strong>abordagem biopsicossocial da dor</strong>. Reconhecer a dor crônica como uma entidade multidimensional transforma o raciocínio clínico do fisioterapeuta, substituindo condutas puramente passivas e focadas na lesão por intervenções ativas focadas na pessoa e na sua funcionalidade global.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Que é o Modelo Biopsicossocial da Dor?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Proposto inicialmente pelo psiquiatra George Engel na década de 1970 e posteriormente adaptado para as ciências da reabilitação por pesquisadores como Gordon Waddell e Lorimer Moseley, o <strong>modelo biopsicossocial da dor</strong> postula que a experiência dolorosa resulta da interação inseparável entre três domínios fundamentais:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Biológico:</strong> Nocicepção periférica, integridade anatômica, neuroquímica dorsal medular, plasticidade cortical e processos inflamatórios sistêmicos.</li>
          <li><strong>Psicológico:</strong> Emoções, memórias de traumas prévios, crenças de incapacidade, cinesiofobia, hipervigilância somatosensorial e estratégias de enfrentamento (<em>coping</em>).</li>
          <li><strong>Social:</strong> Rede de apoio interpessoal, demandas profissionais, conflitos familiares, nível socioeconômico e mensagens comunicadas por profissionais de saúde (fatores iatrogênicos).</li>
        </ul>

        <p className="mb-5 leading-relaxed text-gray-700">
          No contexto da <strong>dor crônica na fisioterapia</strong>, essa perspectiva desmistifica a crença de que a dor persistente é de natureza exclusivamente física ou psicológica. Toda dor é biologicamente real e processada no córtex encefálico, mas a sensibilidade do sistema nervoso é modulada continuamente pelo significado emocional e contextual que o indivíduo atribui ao estímulo.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leituras complementares recomendadas:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/biopsicossocial-vs-biomecanico-o-que-vale-na-pratica" className="text-teal-600 hover:underline">
                Biopsicossocial vs. Biomecânico na Fisioterapia: O Que Vale na Prática Clínica?
              </Link>
            </li>
            <li>
              <Link href="/blog/yellow-flags-na-fisioterapia-fatores-psicossociais" className="text-teal-600 hover:underline">
                Yellow Flags na Fisioterapia: Identificação Precoce de Fatores Psicossociais
              </Link>
            </li>
            <li>
              <Link href="/blog/escalas-e-questionarios-validados-na-fisioterapia" className="text-teal-600 hover:underline">
                Escalas e Questionários Validados na Avaliação Fisioterapêutica
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                Prática Baseada em Evidências: Princípios e Aplicação Clínica Real
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">A Neurobiologia da Cronificação e Sensibilização Central</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Compreender a <strong>abordagem biopsicossocial da dor</strong> requer o domínio dos mecanismos neurobiológicos da cronificação. A dor aguda cumpre uma função evolutiva indispensável de proteção imediata diante de um dano real. Já a dor crônica (aquela que persiste além do período esperado de cicatrização tecidual, habitualmente convencionado em três meses) reflete uma desregulação do sistema de alarme corporal.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          O principal fenômeno biológico envolvido nesse processo é a <strong>sensibilização central</strong>. Trata-se de um estado de hiperexcitabilidade dos neurônios no corno posterior da medula espinhal e em estruturas supraespinhais do encéfalo. Como resultado, ocorre a amplificação da neurotransmissão facilitatória e a perda da inibição descendente fisiológica mediada por vias noradrenérgicas e serotoninérgicas.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Na prática clínica, o paciente com sensibilização central manifesta:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Alodinia:</strong> Percepção de dor em resposta a estímulos mecânicos que normalmente não provocam dor, como o toque suave ou movimentos corporais leves.</li>
          <li><strong>Hiperalgesia Secundária:</strong> Resposta dolorosa desproporcional e exagerada em áreas anatômicas distantes do foco inicial da queixa.</li>
          <li><strong>Somatório Temporal:</strong> Aumento progressivo da intensidade dolorosa diante da repetição de um mesmo estímulo de baixa intensidade (fenômeno de <em>wind-up</em>).</li>
        </ul>

        <p className="mb-5 leading-relaxed text-gray-700">
          Diante desse cenário, tentar tratar a dor crônica exclusivamente com terapias passivas locais (como termoterapia, ultrassom ou liberação miofascial isolada) gera frustração terapêutica, pois a fonte do problema não reside na integridade celular do tecido periférico, mas no processamento central de ameaça.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Identificação de Fatores Psicossociais na Dor (Yellow Flags)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          No <strong>tratamento da dor crônica</strong>, a triagem sistemática de fatores psicossociais é tão indispensável quanto o exame físico ortopédico tradicional. As chamadas <em>Yellow Flags</em> representam barreiras psicológicas e comportamentais que predizem a cronificação, a incapacidade prolongada e a má adesão terapêutica.
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-gray-900">1. Catastrofização da Dor</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Consiste na tendência cognitiva de magnificar o valor de ameaça do sintoma doloroso, ruminar pensamentos pessimistas e sentir-se completamente desamparado diante do quadro. Pacientes com alto escore na Escala de Catastrofização da Dor (PCS) apresentam maior ativação na matriz da dor cerebral e menor limiar nociceptivo.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-gray-900">2. Cinesiofobia e o Modelo de Evitação do Medo</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              O modelo de medo e evitação (<em>Fear-Avoidance Model</em> de Vlaeyen) descreve o ciclo vicioso no qual a dor é interpretada como sinal de dano estrutural iminente. Essa crença gera medo irracional do movimento (cinesiofobia), levando à hipervigilância, repouso prolongado, atrofia por desuso, isolamento e maior sensibilidade dolorosa reflexa.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-gray-900">3. Iatrogenia e Crenças Desadaptativas Induzidas</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Muitos pacientes crônicos trazem laudos de exames radiológicos com terminologias alarmantes (“degeneração discal”, “bico de papagaio”, “desgaste ósseo irreversível”). Frases iatrogênicas proferidas por profissionais de saúde atuam como nocebo potente, fixando na mente do paciente a falsa ideia de que sua coluna ou articulação é frágil e incapaz de tolerar carga.
            </p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como Tratar Dor Crônica: Pilares Práticos da Intervenção</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A transição do modelo biomédico para a prática clínica biopsicossocial não significa abandonar o corpo, mas contextualizar o movimento. O fisioterapeuta experiente estrutura a intervenção em três pilares sinérgicos:
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">1. Educação em Neurociência da Dor (PNE)</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>educação em dor</strong> não é uma simples conversa informal; trata-se de uma intervenção terapêutica estruturada com alto nível de evidência (Grau A de recomendação em diretrizes internacionais). O objetivo é reconceituar a dor de um indicador de dano tecidual para um indicador de proteção neural.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          O terapeuta utiliza metáforas validadas, como a do alarme residencial com defeito: quando o alarme está hipersensível, o simples pouso de uma folha faz a sirene tocar em volume máximo, embora a casa não esteja sendo invadida. Do mesmo modo, na dor crônica, o sistema nervoso dispara alarmes de dor em tarefas cotidianas inofensivas, sem que haja qualquer lesão anatômica em andamento. Essa desmistificação reduz o alarme biológico de perigo e reabre a janela de tolerância para o exercício.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">2. Exposição Gradual ao Movimento e Dessensibilização</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O exercício físico estruturado é a ferramenta biológica mais potente para a modulação da dor crônica. Ele estimula a analgesia induzida pelo exercício (EIA), mediada pela liberação de opioides endógenos, endocanabinoides e citocinas anti-inflamatórias.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Entretanto, para pacientes com cinesiofobia severa, prescrever exercícios pesados precocemente acentua a aversão protetora. A estratégia de <strong>exposição gradual</strong> (<em>graded exposure</em>) consiste em hierarquizar as atividades temidas pelo paciente e executá-las em doses fracionadas, permitindo que o cérebro vivencie o movimento sem a confirmação do desastre catastrófico antecipado.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">3. Fortalecimento da Aliança Terapêutica e Autoeficácia</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A aliança terapêutica — caracterizada pelo vínculo de confiança, empatia, escuta ativa e acordo mútuo sobre os objetivos clínicos — responde por expressiva parcela dos desfechos clínicos favoráveis em dor crônica.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Em vez de adotar uma postura paternalista na qual o fisioterapeuta “cura” o paciente com manobras manuais passivas, a abordagem biopsicossocial fomenta a autoeficácia: o paciente torna-se o agente ativo do seu processo de reabilitação, compreendendo estratégias de automanejo para lidar com eventuais crises (<em>flare-ups</em>) sem recorrer ao pânico.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Estruturação da Avaliação Biopsicossocial no Consultório</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para que a <strong>abordagem biopsicossocial da dor</strong> seja verdadeiramente viável na rotina clínica corrida, a anamnese precisa ser padronizada por meio de instrumentos clínicos objetivos e validados:
        </p>

        <ul className="mb-5 list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Questionário STarT Back:</strong> Estratifica pacientes com dor lombar em baixo, médio e alto risco de cronificação psicossocial, direcionando intervenções personalizadas.</li>
          <li><strong>Escala de Catastrofização da Dor (PCS):</strong> Mensura a ruminação, magnificação e desespero, norteando a dosagem de educação em dor.</li>
          <li><strong>Escala Tampa de Cinesiofobia (TSK):</strong> Quantifica o medo excessivo do movimento físico e de novas lesões.</li>
          <li><strong>Escala de Incapacidade Específica do Paciente (PSFS):</strong> Permite ao próprio paciente elencar de três a cinco tarefas cotidianas cruciais para sua qualidade de vida que estão limitadas pela dor.</li>
        </ul>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">As Pessoas Também Perguntam</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-gray-900">Qual a diferença entre abordagem biomédica e biopsicossocial?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                A abordagem biomédica foca exclusivamente em encontrar e reparar uma falha anatômica periférica isolada. A abordagem biopsicossocial reconhece que a dor é influenciada pelo estado do sistema nervoso, histórico emocional, expectativas, contexto de vida e sono do paciente, integrando a biologia com a psicologia e as relações sociais.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-gray-900">A abordagem biopsicossocial substitui o exercício físico?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                De forma alguma. O exercício físico ativo e a terapia manual criteriosa continuam sendo pilares centrais da fisioterapia. O modelo biopsicossocial altera a maneira como prescrevemos o exercício, respeitando a sensibilidade do sistema nervoso, ressignificando o desconforto e capacitando o paciente para a independência motora.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-gray-900">O que fazer quando o paciente insiste que sua dor é apenas mecânica?</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Valide a dor do paciente sem confrontá-lo diretamente. Explique que sua dor é 100% real e que o corpo não está quebrado, mas com o sistema de proteção em alerta máximo. Utilize analogias neurofisiológicas e mostre na prática como o movimento seguro em pequenas doses é capaz de reprogramar essa sensibilidade.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Perguntas Frequentes (FAQ)</h2>
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
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide">RESUMO DE PRÁTICA CLÍNICA</h2>
          <p className="mb-4 leading-relaxed">
            A dor crônica não é um defeito mecânico estático, mas uma resposta neurobiológica plástica e altamente sensível aos contextos de ameaça. A abordagem biopsicossocial da dor constitui o padrão-ouro contemporâneo na reabilitação ortopédica e reumatológica, integrando a neurobiologia da sensibilização central à regulação do comportamento motor e emocional.
          </p>
          <p className="leading-relaxed">
            O fisioterapeuta que domina esse modelo avalia rotineiramente crenças e cinesiofobia por meio de PROMs validados, elimina mensagens iatrogênicas de nocebo, aplica educação em neurociência da dor e conduz o paciente através da exposição gradual com segurança biológica. Essa sinergia restaura a confiança física, alivia a sobrecarga neural e devolve a autonomia funcional.
          </p>
        </div>

        {/* Bloco de Conversão Kynesia */}
        <div className="mt-16 rounded-3xl border border-teal-200 bg-gradient-to-b from-teal-50/70 to-white p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Como o Kynesia pode ajudar?</h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico inteligente, agenda e gestão financeira, o sistema conta com questionários validados integrados (STarT Back, Tampa, PCS), indicadores clínicos e apoio de inteligência artificial baseada em evidências para estruturar planos terapêuticos biopsicossociais com máxima agilidade.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/start-free"
              className="inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Começar Grátis
            </Link>
            <Link
              href="/planos"
              className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Ver Planos
            </Link>
          </div>
        </div>

        <PatientCTA />
      </article>
      <SiteFooter />
    </main>
  );
}
