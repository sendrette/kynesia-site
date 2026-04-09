import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reabilitação de Joelho Pós-Operatório: Progressão por Critérios",
  description:
    "Framework prático para avanço de fase em reabilitação de joelho pós-operatório com critérios funcionais, controle de dor e qualidade de movimento.",
  openGraph: {
    title: "Reabilitação de Joelho Pós-Operatório: Progressão por Critérios",
    description:
      "Aprenda como estruturar a progressão da reabilitação de joelho fase a fase com critérios objetivos e seguros.",
    type: "article",
    url: "https://kynesia.com.br/blog/reabilitacao-pos-operatorio-joelho",
  },
};

export default function ReabilitacaoPosOperatorioJoelhoPage() {
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
            href="/start-free"            className="inline-flex rounded-lg bg-teal-500 px-3 py-2 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:hidden"
          >
            Começar grátis
          </Link>

          <Link
            href="/start-free"            className="hidden rounded-2xl bg-teal-500 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:inline-flex"
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
          <span className="text-teal-600 font-medium">Reabilitação de Joelho Pós-Operatório: Progressão por Critérios</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white mb-6">
            Reabilitação
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Reabilitação de Joelho no Pós-Operatório: Progressão por Critérios
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Um framework prático para avançar fase a fase com critérios funcionais, controle de dor e qualidade de movimento.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 02 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border-2 border-teal-500 bg-white p-6 mb-8">
          <p className="text-gray-900">
            <strong>O que é reabilitação de joelho no pós-operatório?</strong> Reabilitação de joelho pós-operatório é um processo estruturado de recuperação funcional após cirurgia — seja reconstrução de ligamento cruzado, meniscectomia ou artroplastia. Sua estrutura é dividida em fases (aguda, subaguda, funcional) onde cada fase tem critérios objetivos de progressão baseados em dor, amplitude de movimento, força e funcionalidade.
          </p>
        </div>

        <p className="text-gray-700 mb-5 leading-relaxed">
          A reabilitação de joelho pós-operatório é onde a fisioterapia realmente faz a diferença. Não é apenas sobre melhorar a dor ou recuperar amplitude — é sobre restaurar a confiança do paciente em seu próprio corpo, reabilitar estruturas lesionadas e devolvê-lo para o seu nível funcional prévio ou melhor.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Mas aqui está o desafio: cada paciente é diferente. O tempo de progressão varia não apenas pelo tipo de cirurgia, mas também pela idade, composição tecidual, aderência e resposta individual ao tratamento. Por isso, usar apenas cronograma rígido (6 semanas, 12 semanas, etc.) é insuficiente. O que funciona é usar critérios funcionais objetivos para orientar cada progressão.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: quais realmente ajudam na decisão clínica
              </Link>
            </li>
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Por que progressão por critérios e não por tempo?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Cronogramas fixos (ACL em 12 semanas, meniscectomia em 6 semanas) existem — mas são apenas aproximações estatísticas. Dois pacientes operados de ACL no mesmo dia podem ter recuperações radicalmente diferentes:
        </p>

        <ul className="space-y-3 text-gray-700 mb-8">
          <li>• <strong>Paciente A:</strong> 30 anos, atleta, aderiu 100% aos exercícios em casa → pronto para retomar atividades em 10 semanas</li>
          <li>• <strong>Paciente B:</strong> 55 anos, sedentário, desenvolveu rigidez importante → precisará de 14-16 semanas mesmo com tratamento consistente</li>
        </ul>

        <p className="text-gray-700 mb-8 leading-relaxed">
          O que diferencia esses dois cenários não é sorte — é progressão baseada em critérios reais: ADM ativa, força funcional, teste de estabilidade dinâmica, confiança do paciente e capacidade de realizar atividades cotidianas sem dor ou inflamação.
        </p>

        <blockquote className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg italic text-teal-900 mb-8">
          "Reabilitação por critérios não é mais rápida ou mais lenta — é mais segura e mais eficiente. Você progride apenas quando o tecido está pronto."
        </blockquote>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Qual o timeline de recuperação na reabilitação pós-operatória?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          O timeline varia bastante dependendo do tipo de cirurgia. Mas em termos gerais, pense em três fases:
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-teal-900 mb-4">⏱ Timeline Típico de Reabilitação Pós-Operatória</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Fase Aguda (0-4 semanas):</strong> Foco em controle inflamatório, ganho de ADM, proteção do enxerto/reparo. Geralmente com restrições de descarga ou carga parcial.
            </li>
            <li>
              <strong>Fase Subaguda (4-12 semanas):</strong> Progressão para carga completa, ganho de força muscular, treino neuromuscular. Retorno às atividades cotidianas básicas.
            </li>
            <li>
              <strong>Fase Funcional (12+ semanas):</strong> Retorno ao esporte ou atividade de alta demanda. Progressão de intensidade, velocidade e complexidade de movimento.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Os 5 Critérios Principais para Progressão de Fase</h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Estes são os critérios que você deve usar para decidir se o paciente pode passar de uma fase para a próxima. Nenhum critério isolado determina progressão — todos devem ser preenchidos simultaneamente.
        </p>

        <div className="space-y-6 mb-8">
          {[
            {
              num: "01",
              title: "Amplitude de Movimento Adequada (ADM Ativa)",
              desc: "O paciente consegue realizar a ADM exigida pela fase sem compensação e com qualidade de movimento. Para joelho pós-operatório, isso significa extensão completa e flexão progressiva conforme a fase.",
              criterio: "Fase 1: Extensão 0°, Flexão &gt;90°. Fase 2: Extensão 0°, Flexão &gt;120°. Fase 3: Extensão 0°, Flexão &gt;135°",
              tip: "Use goniômetro e avalie ADM ativa CONTRA GRAVIDADE. ADM passiva pode mascarar limitações reais.",
            },
            {
              num: "02",
              title: "Controle de Dor e Inflamação",
              desc: "Dor em repouso deve estar controlada, e não deve haver aumento de inflamação (edema) 2 horas após o exercício. O paciente não deve relatar dor durante atividades cotidianas da fase.",
              criterio: "Dor em repouso &lt;3/10. Dor funcional &lt;4/10 durante atividade. Edema não aumenta após exercício.",
              tip: "Edema aumentado APÓS exercício é sinal de progressão rápida demais. Reduza volume, mantenha fase atual.",
            },
            {
              num: "03",
              title: "Força Muscular Funcional (Não apenas Teste Isométrico)",
              desc: "O paciente consegue realizar movimentos contra resistência sem compensação. Teste não apenas força estática, mas força dinâmica em movimento funcional — como subir degrau ou agachar.",
              criterio: "Fase 1: Contração voluntária ativa do quadríceps. Fase 2: Quadríceps 3-4/5 (Manual Muscle Test). Fase 3: Quadríceps 4-5/5",
              tip: "Assimetria &gt;20% entre joelhos é critério para não progredir. Verifique sempre bilateral.",
            },
            {
              num: "04",
              title: "Teste Funcional de Estabilidade Dinâmica",
              desc: "O paciente consegue fazer transferências, marcha, mudança de posição sem instabilidade. Isso valida que o neuromotor está integrado, não apenas músculos isolados têm força.",
              criterio: "Teste de Timed Up and Go &lt;14 segundos para adulto. Teste de Descida de Degrau sem tremor. Marcha sem claudicação.",
              tip: "Paciente que tem força mas não consegue marchar bem ainda não está pronto para fase seguinte.",
            },
            {
              num: "05",
              title: "Confiança Funcional e Prontidão Psicológica",
              desc: "Paciente relata confiança em realizar as atividades da fase sem receio de novas lesões. Sua percepção de estabilidade e segurança deve estar alinhada com capacidade objetiva.",
              criterio: "Escala de Tampa para Cinesiofobia &lt;37 pontos. Paciente relata confiança verbalmente. Sem comportamento de proteção excessiva.",
              tip: "Catastrofização e medo excessivo podem bloquear progressão mesmo com critérios objetivos preenchidos. Aborde psicosocial.",
            },
          ].map((criterio) => (
            <div key={criterio.num} className="border-l-4 border-teal-500 pl-6 pb-6 bg-white p-6 rounded-lg shadow-sm">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Critério {criterio.num}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{criterio.title}</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">{criterio.desc}</p>
              <p className="text-sm font-medium text-teal-700 mb-3"><strong>Benchmark:</strong> {criterio.criterio}</p>
              <div className="bg-teal-50 rounded-lg p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {criterio.tip}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-red-700 mb-4">⚠ Sinais de Alerta: Quando PAUSAR ou REGREDIR</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Inchaço persistente ou aumentando dias após sessão (possível irritação mecânica)</li>
            <li>• Dor que não melhora com gelo/repouso (possível complicação infecciosa — informe cirurgião)</li>
            <li>• Sensação de instabilidade ou "joelho cedendo" durante atividades cotidianas</li>
            <li>• Perda de ADM — regressão de flexão/extensão comparada à sessão anterior</li>
            <li>• Tremor muscular importante durante exercício — sinal de sobrecarga neuromuscular</li>
            <li>• Dor noturna progressiva ou acordar com joelho travado</li>
            <li>• Deiscência de sutura ou sinais de infecção (rubor, calor, drenagem) — emergência médica</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Como estruturar a carga progressiva na reabilitação?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Progressão de carga não significa apenas "mais repetições" ou "mais peso". É uma progressão estruturada que leva em conta volume, intensidade, frequência e complexidade de movimento. Uma estratégia comum é variar um parâmetro por semana mantendo os outros constantes.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Por exemplo: Semana 1 — 3 séries × 10 reps de movimento simples. Semana 2 — 3 séries × 12 reps (aumento de volume). Semana 3 — 4 séries × 10 reps em movimento mais complexo (aumento de complexidade). Semana 4 — adicionar resistência leve (aumento de intensidade).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">O papel do paciente na aderência ao programa de reabilitação</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          A reabilitação pós-operatória é 20% sessão clínica e 80% aderência em casa. Se o paciente faz apenas 2 sessões por semana mas não faz exercícios em casa, sua progressão será lenta e incompleta. Pesquisa mostra que pacientes que realizam exercícios em casa progridem até 40% mais rápido.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Sua responsabilidade como fisioterapeuta é não apenas prescrever, mas educar o paciente sobre a importância da aderência, simplificar os exercícios para facilitar adesão, e usar ferramentas como vídeos, aplicativos ou lembretes para aumentar compliance. Um paciente informado e motivado progride mais rápido e com melhores resultados.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Perguntas frequentes sobre reabilitação pós-operatória de joelho</h2>

        <div className="space-y-3 mb-8">
          {[
            {
              q: "Quanto tempo até voltar a correr após cirurgia de joelho?",
              a: "Depende do tipo de cirurgia. ACL reconstruída: 16-24 semanas. Meniscectomia: 6-12 semanas. Artroplastia de joelho: 3-4 meses. Mas estes são timelines — o que importa é preencher os critérios: força adequada, ADM completa, teste de salto simétrico &gt;90% bilateral e confiança funcional. Voltar a correr antes desses critérios aumenta risco de nova lesão.",
            },
            {
              q: "É normal ter dor na reabilitação de joelho pós-operatório?",
              a: "Sim, mas com ressalvas. Dor leve durante exercício é normal — músculo fadigado vai doer. Mas dor aguda, dor que piora progressivamente ou dor noturna NÃO é normal. Também não é normal ter dor que não melhora com gelo/repouso. Se houver dor desse tipo, comunique ao cirurgião — pode indicar complicação.",
            },
            {
              q: "Como saber se estou progredindo bem na reabilitação?",
              a: "Compare semana com semana: sua ADM aumentou? Sua força está melhorando? Consegue fazer atividades que não conseguia antes? A inflamação está reduzindo? O edema diminuiu? Se a resposta a essas perguntas for 'sim', você está no caminho certo. Se estiver estagnado por &gt;4 semanas, reavalie com seu fisioterapeuta — pode ser necessário mudar a estratégia.",
            },
            {
              q: "Posso fazer reabilitação sozinho em casa sem fisioterapeuta?",
              a: "Não recomendado nas primeiras 4-8 semanas pós-operatório. Você precisa de alguém para guiar progressão correta, corrigir movimento, diferenciar dor normal de dor prejudicial e adaptar conforme resposta. Após isso, sim — com exercícios bem ensinados você consegue manutenção e progressão com segurança. Mas fisioterapeuta deve fazer acompanhamento periódico.",
            },
          ].map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Reabilitação Pós-Operatória: Ciência Encontra Prática</h2>
          <p className="mb-4 leading-relaxed">
            A reabilitação de joelho pós-operatório não é apenas seguir um protocolo. É uma conversa contínua entre você (fisioterapeuta), o paciente e seu joelho. Cada sessão traz informações — ADM melhorou? Força está simétrica? Edema está controlado? Confiança está crescendo?
          </p>
          <p className="mb-4 leading-relaxed">
            Quando você usa critérios funcionais como bússola, não fica preso a cronogramas rígidos que não refletem a realidade individual. E quando você segue a resposta do tecido, não apenas progride mais rápido — progride com segurança.
          </p>
          <p className="leading-relaxed">
            Aquele paciente que volta a correr sem medo, que retoma seu esporte ou atividade funcional? Não é sorte. É resultado de reabilitação bem estruturada, baseada em critérios, adaptada ao indivíduo. Isso é reabilitação por excelência.
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
