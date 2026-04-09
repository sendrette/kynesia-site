import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dor Lombar: Avaliação Clínica em 7 Passos | Fisioterapia",
  description:
    "A dor lombar é uma dor nas costas baixas que pode ter origem muscular, articular ou nervosa. Saiba como ela é avaliada e tratada pela fisioterapia em 7 passos.",
  openGraph: {
    title: "Dor Lombar: Avaliação Clínica em 7 Passos | Fisioterapia",
    description:
      "Entenda o que é a dor lombar, como ela é avaliada e como a fisioterapia pode ajudar no seu tratamento de forma objetiva e segura.",
    type: "article",
    url: "https://kynesia.com.br/blog/dor-lombar-avaliacao-clinica",
  },
};

export default function DorLombarPage() {
  return (
    <main className="bg-white text-gray-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-0">
          <div className="flex items-center justify-between gap-4 md:contents">
            <Link href="/" aria-label="Kynesia" className="inline-flex items-center">
              <Image
                src="/kynesia-logo-continuo.svg"
                alt="Kynesia"
                width={180}
                height={48}
                priority
                className="h-auto w-[150px] md:w-[180px]"
              />
            </Link>

            <Link
              href="/start-free"
              className="inline-flex rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:hidden"
            >
              Começar grátis
            </Link>
          </div>

          <nav className="flex w-full flex-nowrap items-center justify-between gap-2 px-1 text-[12px] font-medium text-slate-600 md:gap-8 md:px-0 md:text-base">
            <Link href="/#funcionalidades" className="whitespace-nowrap transition hover:text-slate-900">
              Funcionalidades
            </Link>
            <Link href="/#ia" className="whitespace-nowrap transition hover:text-slate-900">
              IA
            </Link>
            <Link href="/#planos" className="whitespace-nowrap transition hover:text-slate-900">
              Planos
            </Link>
            <Link href="/#faq" className="whitespace-nowrap transition hover:text-slate-900">
              FAQ
            </Link>
            <Link href="/blog" className="whitespace-nowrap transition hover:text-slate-900">
              Blog
            </Link>
            <Link href="/#contato" className="whitespace-nowrap transition hover:text-slate-900">
              Contato
            </Link>
          </nav>

          <Link
            href="/start-free"
            className="hidden rounded-2xl bg-teal-500 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:inline-flex"
          >
            Começar grátis
          </Link>
        </div>
      </header>

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="text-teal-600 font-medium">Dor Lombar: Avaliação Clínica em 7 Passos</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white mb-6">
            Avaliação Clínica
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Dor Lombar na Prática: Avaliação Clínica Objetiva em 7 Passos
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Como estruturar uma avaliação segura e eficiente para diferenciar origem mecânica, irritabilidade e condutas iniciais.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 07 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border-2 border-teal-500 bg-white p-6 mb-8">
          <p className="text-gray-900">
            <strong>O que é a dor lombar?</strong> A dor lombar é uma dor localizada na parte baixa das costas, entre a última costela e as nádegas, que pode ter origem muscular, articular, discal ou nervosa. É uma das queixas mais comuns na clínica ortopédica e, na maioria dos casos, responde muito bem ao tratamento de fisioterapia.
          </p>
        </div>

        <p className="text-gray-700 mb-5 leading-relaxed">
          A <strong>dor lombar</strong> afeta cerca de 80% das pessoas em algum momento da vida. Na prática clínica, ela se apresenta de formas muito variadas — e é justamente por isso que uma <strong>avaliação clínica estruturada</strong> faz toda a diferença entre uma conduta genérica e um plano terapêutico realmente eficiente.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Neste artigo, você vai entender como avaliar a dor lombar em 7 passos objetivos, identificar sinais de alerta, classificar a irritabilidade do tecido e definir a melhor conduta inicial para cada paciente.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                → Dor lombar mecânica: causas, sintomas e tratamento
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                → Hérnia de disco lombar: o que é e como a fisioterapia trata
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                → Exercícios para dor lombar: o que a ciência recomenda
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Por que a avaliação da dor lombar é tão importante?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Não existe tratamento eficiente sem diagnóstico clínico adequado. A dor lombar pode vir de estruturas muito diferentes — músculo, disco, articulação facetária, nervo ou sacroilíaca — e cada uma delas responde melhor a abordagens específicas.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Pense assim: é como um detetive que precisa identificar o suspeito antes de agir. Sem as pistas certas, qualquer técnica pode ser aplicada no lugar errado.
        </p>

        <blockquote className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg italic text-teal-900 mb-8">
          "A avaliação não é burocracia — é o início do tratamento. Cada resposta do paciente é uma pista que direciona a sua conduta."
        </blockquote>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Avaliação da dor lombar: 7 passos objetivos</h2>

        <div className="space-y-6 mb-8">
          {[
            {
              num: "01",
              title: "Triagem de Bandeiras Vermelhas (Red Flags)",
              desc: "O primeiro passo é sempre descartar causas graves que exigem encaminhamento médico imediato — como tumores, fraturas, infecções ou síndrome da cauda equina. Isso protege o paciente e orienta o raciocínio clínico desde o início.",
              tip: "Se o paciente relata perda de força súbita, incontinência urinária ou dor que não melhora com nenhuma posição — acenda o sinal de alerta.",
            },
            {
              num: "02",
              title: "Anamnese: história e comportamento da dor lombar",
              desc: "Investigue quando a dor começou, o que provoca, o que alivia, a intensidade (0 a 10), irradiação para pernas e impacto nas atividades do dia a dia. Inclua perguntas sobre sono, trabalho, estresse e crenças do paciente sobre a dor.",
              tip: "Use o OPQRST: Onset (início), Provocação, Qualidade, Região, Severidade, Time (tempo). Um atalho clínico simples e eficiente.",
            },
            {
              num: "03",
              title: "Inspeção Postural: o que o corpo conta antes de falar",
              desc: "Avalie o paciente em posição ortostática nos planos frontal e sagital. Observe assimetrias, desvios de coluna, posição da pelve e padrões de compensação. A postura não define o tratamento — mas levanta hipóteses importantes.",
              tip: "Postura é informação, não sentença. Uma hiperlordose não é patológica se não gera sintomas.",
            },
            {
              num: "04",
              title: "Amplitude de Movimento: limitações e reprodução dos sintomas",
              desc: "Avalie a ADM ativa da coluna lombar em flexão, extensão, inclinações laterais e rotações. O mais importante não é o quanto o paciente se move — é se o movimento reproduz, alivia ou não interfere na dor.",
              tip: "Dor que aumenta na extensão e alivia na flexão → pensar em componente facetário ou estenose de canal.",
            },
            {
              num: "05",
              title: "Avaliação Neurológica: há comprometimento do nervo?",
              desc: "Sempre que houver irradiação para os membros inferiores, avalie força muscular, reflexos tendinosos (patelar e aquileu) e sensibilidade dermatomal. Essa etapa diferencia uma lombalgia simples de uma radiculopatia — e muda completamente a conduta.",
              tip: "Fraqueza no hálux + hipoestesia em L4/L5 + dor irradiada = possível comprometimento radicular. Registre e comunique ao médico se necessário.",
            },
            {
              num: "06",
              title: "Testes Ortopédicos Específicos para Dor Lombar",
              desc: "Aplique testes para confirmar ou refutar hipóteses: Slump Test, Lasègue (SLR), FABER, compressão sacroilíaca, Spring Test e Kemp. Use clusters de testes — nenhum teste isolado confirma um diagnóstico.",
              tip: "Use os testes para confirmar o que a anamnese já sugeriu. Eles validam a hipótese, não a criam.",
            },
            {
              num: "07",
              title: "Classificação da Irritabilidade e Conduta Inicial",
              desc: "Com todos os dados, classifique a irritabilidade do tecido (baixa, média ou alta) e defina a conduta inicial: quais estruturas priorizar, qual abordagem usar e como progredir o tratamento com segurança.",
              tip: "Alta irritabilidade = menor carga, foco no controle de sintomas. Baixa irritabilidade = progressão de carga para ganho de função.",
            },
          ].map((step) => (
            <div key={step.num} className="border-l-4 border-teal-500 pl-6 pb-6 bg-white p-6 rounded-lg shadow-sm">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Passo {step.num}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{step.desc}</p>
              <div className="bg-teal-50 rounded-lg p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {step.tip}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-red-700 mb-4">⚠ Bandeiras Vermelhas na Dor Lombar: quando encaminhar</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Perda de controle da bexiga ou intestino — possível síndrome da cauda equina (emergência)</li>
            <li>• Dor noturna intensa e progressiva, sem relação com posição ou movimento</li>
            <li>• Perda de peso inexplicada associada à lombalgia</li>
            <li>• Histórico de câncer com dor lombar recente ou progressiva</li>
            <li>• Febre persistente associada à dor nas costas — possível espondilodiscite</li>
            <li>• Trauma de alta energia com suspeita de fratura vertebral</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Qual a diferença entre dor lombar mecânica e inflamatória?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          A <strong>dor lombar mecânica</strong> é a mais comum e tem uma característica clara: ela piora com o movimento e com determinadas posições, e melhora com o repouso ou ao mudar de postura. Está diretamente relacionada a atividades do dia a dia e responde muito bem à fisioterapia.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Já a <strong>dor lombar inflamatória</strong> tem um comportamento diferente: é constante, piora com o repouso prolongado (especialmente de manhã ao acordar), melhora com o movimento leve e frequentemente vem acompanhada de rigidez matinal por mais de 30 minutos. Pode indicar doenças como espondilite anquilosante.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-teal-900 mb-4">🔍 Como diferenciar na prática</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Mecânica:</strong> piora com carga e movimento, melhora com repouso</li>
            <li>✓ <strong>Inflamatória:</strong> piora com repouso, melhora com movimento leve</li>
            <li>✓ <strong>Visceral/referida:</strong> não muda com posição nem movimento — investigar outras causas</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Como classificar a irritabilidade na dor lombar?</h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          A irritabilidade não é sobre a intensidade da dor — é sobre a relação entre o estímulo e a resposta do tecido. Um paciente pode ter dor 5/10, mas que dura horas após uma caminhada curta. Isso é alta irritabilidade.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-teal-900 mb-4">🔍 As 3 perguntas para classificar a irritabilidade</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Qual atividade provoca a dor?</strong> (Mínima, moderada ou intensa?)</li>
            <li>✓ <strong>Qual a intensidade da dor provocada?</strong> (Leve, moderada ou severa?)</li>
            <li>✓ <strong>Quanto tempo a dor leva para retornar ao nível basal?</strong> (Minutos, horas ou dias?)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">A fisioterapia realmente trata a dor lombar?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Sim. A fisioterapia é reconhecida como primeira linha de tratamento para a maioria dos casos de dor lombar — tanto pela Organização Mundial da Saúde quanto pelas principais diretrizes internacionais de saúde musculoesquelética.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          O tratamento pode incluir exercícios terapêuticos, mobilização articular, terapia manual, reeducação postural e orientação sobre hábitos de movimento. A abordagem mais eficaz é aquela individualizada — por isso a avaliação detalhada é o ponto de partida de tudo.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Perguntas frequentes sobre dor lombar</h2>

        <div className="space-y-3 mb-8">
          {[
            {
              q: "Quanto tempo leva para a dor lombar passar com fisioterapia?",
              a: "Depende da causa e da irritabilidade. Casos agudos de lombalgia mecânica simples costumam melhorar entre 2 a 6 semanas. Casos crônicos ou com comprometimento neurológico podem levar de 2 a 4 meses. A consistência nas sessões e a adesão aos exercícios em casa são fatores decisivos na recuperação.",
            },
            {
              q: "É melhor descansar ou se movimentar quando a dor lombar está forte?",
              a: "Em geral, o repouso absoluto não é recomendado para dor lombar — exceto em casos de altíssima irritabilidade nas primeiras 48-72h. Movimentos leves e controlados ajudam a reduzir a inflamação, melhorar a circulação e recuperar a função mais rápido. Seu fisioterapeuta vai indicar os movimentos adequados para a fase em que você está.",
            },
            {
              q: "Dor lombar que irradia para a perna é hérnia de disco?",
              a: "Não necessariamente. A irradiação para perna pode ter diferentes origens: compressão de raiz nervosa (como na hérnia de disco), irritação do nervo ciático, síndrome piriforme ou até disfunção sacroilíaca. Somente a avaliação clínica — com testes específicos e, quando necessário, exame de imagem — consegue diferenciar a causa real.",
            },
            {
              q: "Preciso fazer ressonância magnética para tratar a dor lombar?",
              a: "Na maioria dos casos, não. As diretrizes internacionais recomendam exames de imagem apenas quando há suspeita de red flags ou quando os sintomas não melhoram após 4 a 6 semanas de tratamento conservador. A ressonância é um complemento — o diagnóstico clínico funcional é sempre o ponto de partida.",
            },
          ].map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Avaliação bem feita = tratamento mais eficiente</h2>
          <p className="mb-4 leading-relaxed">
            A dor lombar é comum, mas não é simples. Uma avaliação estruturada em 7 passos — do rastreio de red flags à classificação da irritabilidade — é o que transforma uma consulta genérica em um plano terapêutico realmente direcionado.
          </p>
          <p className="mb-4 leading-relaxed">
            Cada passo revela uma informação que muda a sua conduta. E cada conduta bem embasada é um passo mais rápido para o seu paciente recuperar qualidade de vida.
          </p>
          <p className="leading-relaxed">
            Tem dúvidas sobre dor lombar ou quer saber como a fisioterapia pode te ajudar? Entre em contato com nossa clínica.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 px-6 py-8 mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Kynesia. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gray-900">
              Termos
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Privacidade
            </Link>
            <Link href="/#contato" className="hover:text-gray-900">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
