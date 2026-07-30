import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/dor-na-lombar-posso-correr";

const faqItems = [
  {
    question: "Posso correr com dor na lombar se eu tiver hérnia de disco?",
    answer:
      "Sim. A presença de hérnia de disco em exames de imagem não impede a corrida. Se a dor for tolerável, sem sintomas de compressão nervosa progressiva (como perda de força na perna), e com controle adequado de volume e intensidade, correr pode até ajudar na recuperação através da estimulação da circulação e nutrição discal.",
  },
  {
    question: "Qual o melhor tipo de tênis para quem tem dor na lombar?",
    answer:
      "Não existe um tênis específico comprovado cientificamente para tratar ou prevenir a dor lombar. O calçado ideal é aquele que o corredor considera mais confortável. O ajuste da carga de treino (intensidade, volume e frequência) é infinitamente mais importante para o controle da dor do que o tipo de amortecimento do tênis.",
  },
  {
    question: "Correr no asfalto é pior para a coluna do que na terra ou grama?",
    answer:
      "Não há evidências de que correr no asfalto aumente a dor na lombar ou o desgaste da coluna em comparação com superfícies mais macias. O corpo humano possui excelente capacidade de adaptação e ajusta a rigidez das pernas e a mecânica da corrida de acordo com a superfície para manter o nível de impacto sob controle.",
  },
  {
    question: "Devo alongar a lombar antes de começar a correr?",
    answer:
      "Alongamentos estáticos e prolongados antes da corrida não previnem lesões nem aliviam a dor lombar de forma eficaz, podendo até reduzir temporariamente a força muscular. O aquecimento ideal deve priorizar a mobilidade ativa (como movimentos suaves do tronco e quadril) e um início de corrida leve e progressivo.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor na Lombar: Posso Correr? O Que Dizem as Evidências Científicas",
  description:
    "Descubra se correr com dor na lombar é seguro. Entenda o que as evidências científicas mostram sobre o impacto da corrida na coluna e como reabilitar com segurança.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  image: "https://kynesia.com.br/blog/dor-na-lombar-posso-correr.png",
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
  title: "Dor na Lombar: Posso Correr? O Que Dizem as Evidências",
  description:
    "Descubra se correr com dor na lombar é seguro. Entenda o que as evidências científicas mostram sobre o impacto da corrida na coluna e como reabilitar com segurança.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor na Lombar: Posso Correr? O Que Dizem as Evidências",
    description:
      "Descubra se correr com dor na lombar é seguro. Entenda o que as evidências científicas mostram sobre o impacto da corrida na coluna e como reabilitar com segurança.",
    type: "article",
    url: pageUrl,
    images: [
      {
        url: "/blog/dor-na-lombar-posso-correr.png",
        width: 1200,
        height: 630,
        alt: "Homem correndo no parque mostrando a coluna lombar destacada",
      },
    ],
  },
};

export default function DorLombarCorridaPage() {
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
          <span className="font-medium text-teal-600">Dor na Lombar: Posso Correr?</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor na Lombar: Posso Correr? O Que Dizem as Evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            A corrida destrói a coluna ou pode ser um estímulo benéfico? Entenda o que a ciência diz sobre correr com dor na lombar e como reabilitar com segurança.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 29 Jul 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Imagem de Destaque no Post */}
        <div className="mb-10 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
          <Image
            src="/blog/dor-na-lombar-posso-correr.png"
            alt="Infográfico com o título 'Dor na Lombar: Posso Correr?' com um homem correndo no parque mostrando a coluna lombar destacada."
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
            Sim, na grande maioria dos casos de dor lombar inespecífica, você pode e deve continuar correndo, desde que a dor seja tolerável e monitorada. A corrida não é prejudicial para a coluna; pelo contrário, estudos mostram que ela fortalece e hidrata os discos intervertebrais através de adaptações mecânicas cíclicas. O segredo está em ajustar temporariamente a carga de treino (volume e intensidade) em vez de repousar totalmente.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A dor na coluna lombar é uma das queixas de saúde mais comuns no mundo, afetando cerca de 80% da população adulta em algum momento da vida. Para os praticantes de corrida, o surgimento desse desconforto costuma vir acompanhado de uma dúvida angustiante: <em>"Eu preciso parar de correr para proteger a minha coluna?"</em>.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Historicamente, existia a crença popular — compartilhada até por alguns profissionais de saúde desatualizados — de que o impacto repetitivo da corrida causaria desgaste acelerado nos discos intervertebrais e articulações da coluna. No entanto, as evidências científicas modernas mostram um cenário completamente oposto. Entender essa relação é fundamental para evitar o medo do movimento (cinesiofobia) e planejar uma recuperação eficiente.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O Impacto da Corrida na Coluna: O que a ciência realmente diz?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Longe de ser uma atividade destrutiva, a corrida de impacto moderado parece ter um efeito protetor sobre a coluna vertebral. Um estudo clássico publicado no periódico científico de prestígio <em>Scientific Reports</em> (Belavý et al., 2017) investigou a saúde dos discos intervertebrais (DIV) de corredores frequentes em comparação com pessoas sedentárias.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Os resultados foram surpreendentes: os corredores de longa data apresentavam discos intervertebrais significativamente mais saudáveis, mais hidratados e maiores (hipertrofia discal). Os cientistas concluíram que o estímulo cíclico de carga axial imposto pela corrida atua de forma análoga ao fortalecimento de um músculo na academia. Ou seja, o disco intervertebral responde à carga mecânica adaptando-se e tornando-se mais forte e resistente.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Além disso, o movimento estimula o fluxo sanguíneo local e a troca de fluidos, o que ajuda na nutrição dos tecidos da coluna que não possuem suprimento de sangue próprio direto. Portanto, para a saúde dos seus discos, correr pode ser extremamente benéfico.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Desmistificando o medo de correr com dor na lombar</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Para a grande maioria dos corredores, a dor lombar se enquadra na classificação de <strong>dor lombar inespecífica</strong>. Isso significa que o desconforto não é causado por uma lesão estrutural grave ou por uma doença sistêmica grave, mas sim por uma complexa interação de fatores musculares, biomecânicos, psicossociais (como estresse e sono inadequado) e flutuações na tolerância à carga.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Um dos maiores erros na reabilitação é o foco excessivo em exames de imagem, como ressonâncias magnéticas. Estudos epidemiológicos mostram que protrusões discais, desidratação discal e até hérnias de disco são achados extremamente comuns em pessoas perfeitamente saudáveis e sem nenhuma dor nas costas. Portanto, ter uma hérnia de disco em um exame não significa necessariamente que esse seja o motivo da dor, nem que você deva parar de <strong>correr com dor na lombar</strong> de forma absoluta.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          O repouso absoluto, no passado muito prescrito, hoje é considerado prejudicial. Ele leva à perda de força, rigidez tecidual e aumento do medo do movimento, o que perpetua o ciclo de dor. Manter-se ativo, ajustando a dose de esforço, é a conduta com melhor suporte científico atualmente.
        </p>

        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">01</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Adaptação do Tecido</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              Assim como os ossos e os músculos, os discos intervertebrais precisam de carga para se manterem saudáveis e hidratados. A falta de carga mecânica acelera a degeneração discal.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Evidência:</strong> Correr estimula o anabolismo e a hidratação dos discos da coluna vertebral.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">02</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Analgesia induzida pelo exercício</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              A corrida de intensidade moderada promove a liberação de endorfinas, serotonina e endocanabinoides pelo sistema nervoso central. Essas substâncias atuam como analgésicos naturais poderosos, ajudando a diminuir a percepção da dor.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Evidência:</strong> A corrida atua regulando a sensibilidade central e diminuindo o limiar de dor.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">03</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">A importância do controle de carga</h3>
            <p className="mb-4 leading-relaxed text-gray-700">
              A dor geralmente surge não porque correr faz mal, mas porque a dose de treino (volume, intensidade ou frequência) excedeu a capacidade de adaptação momentânea do tecido.
            </p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Evidência:</strong> Ajustar as variáveis de treino permite manter o estímulo mecânico benéfico sem irritar a coluna.</div>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Sinais de Alerta: When NÃO correr (Red Flags)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Embora a corrida seja amplamente encorajada, existem raras situações em que ela deve ser interrompida temporariamente até que se faça uma consulta com um profissional especializado (fisioterapeuta ou médico). Fique atento aos seguintes sinais de alerta clínico:
        </p>
        <ul className="mb-8 ml-6 space-y-2 text-gray-700 list-disc">
          <li><strong>Dor irradiada limitante</strong>: Dor forte que desce pelas pernas (abaixo do joelho), especialmente se vier acompanhada de dormência ou formigamento progressivo.</li>
          <li><strong>Perda de força muscular</strong>: Dificuldade súbita de realizar movimentos simples com a perna ou pé, como a incapacidade de apoiar os calcanhares no chão ao caminhar (pé caído).</li>
          <li><strong>Disfunção esfincteriana</strong>: Perda de controle da bexiga ou do intestino de início recente (característico da Síndrome da Cauda Equina).</li>
          <li><strong>Anestesia em sela</strong>: Perda de sensibilidade na região genital e interna das coxas.</li>
          <li><strong>Sintomas sistêmicos associados</strong>: Dor lombar acompanhada de febre inexplicada, perda de peso repentina e sem causa aparente, ou histórico recente de câncer.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como planejar o retorno e correr com dor na lombar com segurança</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Se você não apresenta nenhuma das Red Flags acima, a corrida é segura. No entanto, para <strong>correr com dor na lombar</strong> de forma confortável, é preciso adotar estratégias inteligentes de modulação de treino.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1. A Regra das 24 Horas e Escala de Dor</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Durante a corrida, sua dor deve ser leve e tolerável (idealmente até 3 ou 4 em uma escala de 0 a 10). Se a dor aumentar muito durante o percurso, reduza o ritmo ou caminhe. O indicador mais confiável de que a carga foi adequada é a resposta nas 24 horas seguintes: a dor lombar não deve estar pior no dia seguinte e deve retornar ao patamar inicial antes do treino.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2. Modificações de Volume, Intensidade e Terreno</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Antes de parar completamente, experimente fazer ajustes na sua planilha de treinos:
        </p>
        <ul className="mb-4 ml-6 space-y-2 text-gray-700 list-disc">
          <li><strong>Fracione a corrida:</strong> Intercale corrida com caminhada. Por exemplo: 3 minutos correndo e 1 minuto caminhando. Isso quebra o impacto contínuo e dá tempo de recuperação para a musculatura estabilizadora.</li>
          <li><strong>Diminua a velocidade:</strong> Corridas mais lentas diminuem o pico de força de reação do solo transmitido para a coluna.</li>
          <li><strong>Evite declives acentuados:</strong> Correr ladeira abaixo aumenta significativamente o impacto vertical sobre a lombar. Prefira percursos planos.</li>
          <li><strong>Aumente a cadência:</strong> Tente dar passos ligeiramente mais curtos e rápidos. Aumentar a cadência em 5% a 10% ajuda a reduzir as cargas transmitidas para o quadril e coluna por passada.</li>
        </ul>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3. Fortalecimento Geral Complementar</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Um bom corredor precisa de uma estrutura muscular que dê suporte ao impacto. Exercícios de fortalecimento de membros inferiores (como agachamentos, passadas e levantamento terra) e exercícios focados no tronco (pranchas, pontes e abdominais) são ótimos aliados. O objetivo não é travar a coluna no lugar (o tronco precisa se mover naturalmente durante a corrida), mas sim aumentar a resistência à fadiga de toda a cadeia muscular.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/red-flags-dor-lombar-quando-suspeitar" className="text-teal-600 hover:underline">
                → Red Flags na Dor Lombar: Quando Suspeitar de Condições Graves?
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-ao-ficar-muito-tempo-sentado-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor Lombar ao Ficar Muito Tempo Sentado: Causas e Tratamento
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido" className="text-teal-600 hover:underline">
                → Dor Lombar ao Acordar: Causas e Como Aliviar Rápido
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática Baseada em Evidências na Fisioterapia: Guia Definitivo
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplo Prático de Modulação de Treino</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Veja abaixo um guia simplificado de tomada de decisão para adaptar seus treinos de corrida com base na irritabilidade da dor lombar:
        </p>
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Nível de Dor (0-10)</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Classificação</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Conduta Recomendada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">0 a 3</td>
                <td className="px-4 py-3 text-green-700 font-medium">Tolerável / Seguro</td>
                <td className="px-4 py-3 text-gray-700">Manter treino planejado. Monitorar resposta de dor no dia seguinte (regra das 24h).</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">4 a 6</td>
                <td className="px-4 py-3 text-yellow-700 font-medium">Moderado / Limite</td>
                <td className="px-4 py-3 text-gray-700">Reduzir volume semanal em 30-50%, correr em ritmos leves e fracionar o treino (intercalando caminhadas).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">7 a 10</td>
                <td className="px-4 py-3 text-red-700 font-medium">Forte / Irritativo</td>
                <td className="px-4 py-3 text-gray-700">Suspender corrida temporariamente. Substituir por caminhadas leves ou atividades sem impacto (como elíptico) e iniciar fortalecimento.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">As Pessoas Também Perguntam (PAA)</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Quem tem dor lombar pode correr na esteira ou na rua?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                Ambos os locais são seguros. A esteira pode oferecer um impacto ligeiramente menor e controle total sobre a inclinação e velocidade, sendo ótima para fases iniciais de reabilitação. A corrida na rua apresenta maior variação de terreno, demandando maior estabilização ativa. A escolha depende da preferência pessoal do corredor e de onde ele sente mais conforto.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">A corrida de rua pode causar ou agravar uma hérnia de disco?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                Não há estudos que correlacionem a prática regular de corrida de rua com o desenvolvimento de hérnia de disco. Os discos se adaptam ao estímulo mecânico do esporte. Se o corredor já tem uma hérnia, a corrida só deve ser evitada temporariamente se houver sintomas neurológicos associados importantes. Em quadros leves, o controle inteligente de carga não agrava a hérnia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Como deve ser o aquecimento ideal para corredores com dor lombar?</h3>
              <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                O aquecimento ideal deve ativar os músculos estabilizadores e lubrificar as articulações. Indicam-se exercícios de mobilidade ativa de quadril e coluna (como rotações de tronco suaves e o exercício do 'gato e camelo'), seguidos de uma caminhada rápida ou trote bem leve antes de iniciar o ritmo regular da planilha.
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
            A dor lombar inespecífica acomete a maior parte da população e não tem relação causal direta com a degeneração estrutural da coluna observada em exames.
          </p>
          <p className="mb-4 leading-relaxed">
            Evidências de alto nível demonstram que a corrida atua de forma anabólica nos discos intervertebrais, melhorando sua hidratação e volume por adaptação mecânica.
          </p>
          <p className="leading-relaxed">
            O repouso prolongado deve ser evitado. A reabilitação deve ser baseada em movimento ativo, fortalecimento geral e controle de volume e intensidade sob a regra de tolerância de 24 horas.
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
            O Kynesia é uma plataforma de gestão clínica desenvolvida exclusivamente para fisioterapeutas. Além de prontuário eletrônico, agenda inteligente e gestão financeira, o sistema conta com recursos de inteligência artificial baseados em evidências, questionários validados (incluindo escalas funcionais renomadas para avaliação lombar como o Oswestry Disability Index - ODI e o Roland-Morris Disability Questionnaire), indicadores de evolução clínica e ferramentas para otimizar a rotina da sua clínica ou consultório.
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
