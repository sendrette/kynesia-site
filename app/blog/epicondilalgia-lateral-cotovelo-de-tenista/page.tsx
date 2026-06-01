import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/epicondilalgia-lateral-cotovelo-de-tenista";

const faqItems = [
  {
    question: "Epicondilite lateral tem cura?",
    answer:
      "A maioria dos pacientes melhora com tratamento conservador individualizado; a recuperação funcional é alcançável com manejo adequado de carga.",
  },
  {
    question: "Quanto tempo demora para melhorar?",
    answer:
      "Muitos respondem em semanas a meses; programas bem estruturados apresentam melhora em 6–12 semanas, com progressão contínua.",
  },
  {
    question: "Posso continuar treinando com dor no cotovelo?",
    answer:
      "Depende da intensidade; ajustar carga e modificar exercícios que provocam dor é preferível; planeje retorno com um fisioterapeuta.",
  },
  {
    question: "Quando indicar imagem?",
    answer:
      "Imagem está indicada em casos atípicos, suspeita de lesão associada ou falta de resposta após tratamento bem conduzido.",
  },
  {
    question: "Qual teste clínico é mais confiável?",
    answer:
      "Não existe um teste isolado definitivo. Cozen, Mill e Maudsley ajudam, mas a interpretação conjunta com história e função costuma ser mais útil.",
  },
  {
    question: "O que costuma piorar a dor?",
    answer:
      "Preensão sustentada, extensão repetida do punho, rotação do antebraço e atividades com carga aumentam os sintomas com frequência.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Epicondilalgia lateral (cotovelo de tenista): avaliação e tratamento baseado em evidências",
  description:
    "Epicondilalgia lateral: avaliação, diagnóstico e tratamento baseado em evidências para fisioterapeutas e pacientes.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  image: "https://kynesia.com.br/blog/epicondilalgia-lateral-cover.svg",
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
  title: "Epicondilalgia lateral: avaliação e tratamento baseado em evidências",
  description:
    "Epicondilalgia lateral: avaliação, diagnóstico e tratamento baseado em evidências para fisioterapeutas e pacientes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Epicondilalgia lateral: avaliação e tratamento baseado em evidências",
    description:
      "Entenda causas, diagnóstico e orientações de tratamento da epicondilalgia lateral com abordagem baseada em evidências.",
    type: "article",
    url: pageUrl,
  },
};

export default function EpicondilalgiaPage() {
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
          <span className="font-medium text-teal-600">Epicondilalgia lateral (cotovelo de tenista)</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Epicondilalgia lateral (cotovelo de tenista): avaliação e tratamento baseado em evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Dor lateral no cotovelo, perda de força de preensão e limitação funcional — entenda como avaliar e conduzir a reabilitação baseada em carga.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 01 Jun 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            A <strong>epicondilalgia lateral</strong> caracteriza-se por dor focal na região lateral do cotovelo relacionada à sobrecarga dos tendões extensores do antebraço. O manejo atual prioriza educação, controle de carga e programas de exercício progressivo para restaurar função.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A epicondilalgia lateral, frequentemente chamada de "cotovelo de tenista", não depende exclusivamente da prática esportiva: é mais comumente associada a padrões repetitivos de uso e sobrecarga mecânica. O objetivo principal da reabilitação é recuperar capacidade e função, não apenas suprimir dor.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Na prática clínica, o quadro costuma surgir de forma gradual. O paciente relata desconforto ao segurar objetos, abrir potes, digitar por longos períodos, usar ferramentas ou realizar tarefas domésticas repetitivas. Em muitos casos, o sintoma é inicialmente intermitente e passa a se tornar mais frequente à medida que a demanda ultrapassa a capacidade do tecido.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é a epicondilalgia lateral?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Refere-se a dor e sensibilidade na região do epicôndilo lateral, com envolvimento dos tendões extensores, especialmente o extensor radial curto do carpo (ECRB).
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Embora o termo popular "epicondilite" ainda seja muito utilizado, a evidência atual sugere que, em muitos casos, não estamos diante de um processo predominantemente inflamatório agudo. Há frequentemente alteração da organização colágena, aumento da sensibilidade à carga e menor tolerância do tendão a esforços repetidos. Isso explica por que o tratamento mais efetivo tende a ser progressivo e ativo, e não apenas anti-inflamatório ou passivo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Anatomia envolvida</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          O epicôndilo lateral é a origem comum de vários músculos extensores do antebraço. Entre eles, o ECRB costuma receber maior atenção por ser constantemente recrutado em atividades de preensão, estabilização do punho e controle fino de força. Quando essa região é submetida a picos de carga repetidos, a capacidade de adaptação do tendão pode ser excedida.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Por que a dor aparece durante a preensão?</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          A preensão exige coativação dos flexores e extensores do antebraço para estabilizar punho e dedos. Se os extensores laterais já estão irritados, a simples sustentação de um copo, mochila ou ferramenta pode gerar dor. Em termos funcionais, o problema não é apenas força, mas também tolerância tecidual ao tempo sob carga.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Fatores contribuintes</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A epicondilalgia lateral é multifatorial. Em vez de buscar uma única causa, o raciocínio clínico deve considerar volume de exposição, tipo de tarefa, técnica, recuperação entre esforços, sintomas prévios e capacidade do paciente em lidar com a carga cotidiana.
        </p>
        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">01</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Sobrecarga mecânica</h3>
            <p className="mb-4 leading-relaxed text-gray-700">Movimentos repetitivos com punho em extensão e carga excessiva aumentam irritabilidade tendínea.</p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> Modulação de atividades e progressão adequada de carga reduzem recidiva.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">02</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Capacidade tendínea reduzida</h3>
            <p className="mb-4 leading-relaxed text-gray-700">Tendões com menor tolerância à carga respondem mal a picos de esforço; exposição gradual é a chave.</p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> Fortalecimento progressivo melhora resistência tendínea.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">03</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Fatores ocupacionais e esportivos</h3>
            <p className="mb-4 leading-relaxed text-gray-700">Profissionais que trabalham com ferramentas, movimentos repetitivos ou posições sustentadas de punho em extensão tendem a apresentar maior irritabilidade. O mesmo vale para praticantes de musculação ou esportes de raquete sem progressão adequada.</p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> Reduzir volume e reorganizar o treino costuma ser tão importante quanto tratar a dor.</div>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Avaliação clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">O diagnóstico é clínico: história, padrão de dor, resposta a testes provocativos e avaliação funcional guiam a conduta.</p>
        <p className="mb-5 leading-relaxed text-gray-700">
          A dor costuma ser localizada no epicôndilo lateral ou ligeiramente distal à região de origem dos extensores. O paciente pode referir piora ao torcer panos, virar maçanetas, carregar sacolas ou usar o mouse por muito tempo. Perguntas sobre início, duração, irritabilidade, capacidade de realizar tarefas e resposta nas 24 horas seguintes à carga ajudam muito no raciocínio.
        </p>
        <ul className="mb-8 ml-6 space-y-2 text-gray-700">
          <li>• Coleta de história com foco em atividades agravantes</li>
          <li>• Avaliação de força de preensão e resistência ao movimento</li>
          <li>• Testes provocativos (Cozen, Mill, Maudsley) como auxiliares</li>
          <li>• Excluir neuropatia radial e causas cervicais quando necessário</li>
        </ul>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Testes clínicos e limites diagnósticos</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          Cozen, Mill e Maudsley são amplamente usados, mas não devem ser interpretados isoladamente. Um teste positivo reforça a hipótese clínica, porém a decisão final depende da combinação entre história, exame físico, resposta à palpação e impacto funcional. Em outras palavras, o teste ajuda a sustentar o diagnóstico, mas não substitui o raciocínio clínico.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Diagnóstico diferencial</h3>
        <p className="mb-5 leading-relaxed text-gray-700">
          É importante diferenciar epicondilalgia lateral de neuropatia do nervo radial, dor referida de origem cervical, artrose do cotovelo, lesões intra-articulares e até quadros inflamatórios sistêmicos menos comuns. Sinais neurológicos, dor irradiada atípica ou falha terapêutica persistente devem ampliar a investigação.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos mais usados e como interpretá-los
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática baseada em evidências na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/como-precificar-sessoes-de-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão e organização clínica para fisioterapeutas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tratamento e condutas práticas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">A melhor evidência favorece programas ativos: educação, manejo de carga e exercício progressivo direcionado aos extensores do punho.</p>
        <p className="mb-5 leading-relaxed text-gray-700">
          O tratamento raramente depende de uma única intervenção. Na prática, os melhores resultados costumam vir de um plano que combina redução temporária de sobrecarga, exercícios de baixa irritabilidade, progressão gradual de força e retorno funcional planejado. O paciente precisa entender que melhora não significa imobilidade; significa encontrar uma dose de movimento que o tendão tolere e, a partir dela, avançar.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Exercício progressivo e fortalecimento</h3>
        <p className="mb-4 leading-relaxed text-gray-700">Programas com progressão de carga (isométricos, excêntricos e concêntricos) melhoram dor e função a médio prazo.</p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Em fases iniciais, isométricos podem ser úteis para reduzir dor e permitir retomada da ativação muscular com menor irritabilidade. Em seguida, exercícios excêntricos e concêntricos, com foco em extensão do punho, pronação/supinação e preensão gradual, ajudam a reconstruir capacidade. O ponto central não é escolher uma modalidade "mágica", mas dosar adequadamente a carga e acompanhar a resposta do paciente.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Manejo de carga</h3>
        <p className="mb-4 leading-relaxed text-gray-700">Reduzir picos de demanda, adaptar atividades e planejar retorno gradual são estratégias fundamentais.</p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Manejo de carga não significa proibir tudo o que dói imediatamente. O raciocínio mais atual considera a intensidade da dor, duração, resposta tardia e objetivos do paciente. Em casos moderados, é possível ajustar tempo, amplitude, pegada, velocidade e número de repetições para manter estímulo sem ultrapassar a tolerância tecidual.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Adjuvantes</h3>
        <p className="mb-4 leading-relaxed text-gray-700">Bandagens, órteses e recursos analgésicos podem ser úteis temporariamente, mas não substituem reabilitação ativa.</p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Esses recursos podem ser úteis para facilitar tarefas específicas e reduzir irritabilidade no início do tratamento. Porém, o benefício tende a ser adjuvante e transitório. O foco principal deve continuar sendo a reabilitação baseada em função, com evolução mensurável ao longo das semanas.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplo de progressão clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um modelo prático pode ser dividido em fases: primeiro controlar irritabilidade, depois aumentar capacidade de carga e, por fim, reintegrar o paciente às tarefas reais. Esse tipo de progressão ajuda a evitar dois erros comuns: insistir em exercício demais cedo demais ou, no outro extremo, manter o paciente sem estímulo por tempo excessivo.
        </p>
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Fase</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Objetivo</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Conduta</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Inicial</td>
                <td className="px-4 py-3 text-gray-700">Reduzir irritabilidade</td>
                <td className="px-4 py-3 text-gray-700">Educação, modificação de atividades, isometria e analgesia adjuvante</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Intermediária</td>
                <td className="px-4 py-3 text-gray-700">Ganhar capacidade</td>
                <td className="px-4 py-3 text-gray-700">Fortalecimento progressivo, treino de preensão e tolerância à carga</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Final</td>
                <td className="px-4 py-3 text-gray-700">Retorno à função</td>
                <td className="px-4 py-3 text-gray-700">Exposição às tarefas específicas do trabalho, treino ou lazer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando pedir exames de imagem?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A maioria dos casos não exige imagem no início. Ultrassonografia ou ressonância podem ser úteis quando há dúvida diagnóstica, suspeita de lesão associada, sintomas fora do padrão, trauma relevante ou falta de evolução após um tratamento bem conduzido. Mesmo assim, o exame deve complementar e não substituir a avaliação clínica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Prognóstico e retorno às atividades</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O prognóstico costuma ser bom, especialmente quando o paciente entende o processo e participa ativamente da reabilitação. Melhorar não é apenas reduzir dor em repouso; é voltar a sustentar carga, trabalhar e treinar com segurança. Casos crônicos podem demorar mais, mas ainda assim respondem bem quando há progressão consistente e monitoramento de sintomas.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Na reabilitação, a meta deve ser devolver função com o menor risco de recidiva possível. Isso exige alinhamento entre fisioterapeuta e paciente, clareza de objetivos e ajustes periódicos conforme a resposta clínica.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2>
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
          <h2 className="mb-4 text-2xl font-bold">Resumo clínico</h2>
          <p className="mb-4 leading-relaxed">
            Epicondilalgia lateral é uma condição associada à sobrecarga dos tendões extensores do punho, com impacto funcional significativo em atividades de preensão.
          </p>
          <p className="mb-4 leading-relaxed">
            Educação, manejo de carga e fortalecimento progressivo compõem o núcleo do tratamento com melhor sustentação de evidência.
          </p>
          <p className="leading-relaxed">O objetivo clínico é recuperar capacidade e função, não apenas alívio sintomático temporário.</p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para profissionais da saúde.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
