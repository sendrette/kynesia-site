import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testes de Ombro: Quais Realmente Ajudam na Decisão Clínica",
  description:
    "Aprenda a combinar testes ortopédicos de ombro com histórico e movimento para reduzir falso positivo e melhorar o raciocínio clínico na avaliação.",
  openGraph: {
    title: "Testes de Ombro: Quais Realmente Ajudam na Decisão Clínica",
    description:
      "Guia completo sobre testes ortopédicos de ombro com base em evidência para diagnóstico diferencial na fisioterapia.",
    type: "article",
    url: "https://kynesia.com.br/blog/teste-ortopedico-ombro",
  },
};

export default function TesteOrtopedicoOmbroPage() {
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
          <span className="text-teal-600 font-medium">Testes de Ombro: Quais Realmente Ajudam na Decisão Clínica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white mb-6">
            Ortopedia
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Testes Ortopédicos de Ombro: Quais Realmente Ajudam na Decisão Clínica
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Como combinar testes especiais com histórico e movimento para reduzir falso positivo e melhorar o raciocínio clínico.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 05 Abr 2026</span>
            <span>⏱ 6 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border-2 border-teal-500 bg-white p-6 mb-8">
          <p className="text-gray-900">
            <strong>O que são os testes ortopédicos de ombro?</strong> Testes ortopédicos de ombro são manobras clínicas específicas que ajudam a identificar estruturas lesionadas e diferençar a origem da dor — se vem do impacto subacromial, lesão do manguito rotador, instabilidade, disfunção labral ou referência cervical. Nenhum teste isolado confirma um diagnóstico, mas clusters de testes com alta sensibilidade e especificidade melhoram significativamente a precisão clínica.
          </p>
        </div>

        <p className="text-gray-700 mb-5 leading-relaxed">
          A dor de ombro é uma das queixas mais comuns na clínica ortopédica — apenas a dor lombar a supera em frequência. Mas aqui está o desafio: o ombro tem múltiplas estruturas potencialmente causadoras de dor, e muitos testes podem parecer positivos sem realmente apontar para a lesão verdadeira.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Neste artigo, você vai entender quais testes ortopédicos de ombro têm real valor clínico, como interpretá-los corretamente, como combinar testes para aumentar confiabilidade e, mais importante, como reduzir falsos positivos que levam a diagnósticos e condutas equivocadas.
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
              <a href="#" className="text-teal-600 hover:underline">
                → Tendinopatia do manguito rotador: progressão de carga prática
              </a>
            </li>
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                → Impacto subacromial: diagnóstico diferencial e tratamento
              </a>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Por que usar testes ortopédicos de ombro se há exames de imagem?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Ressonância magnética, ultrassom e radiografia são ferramentas valiosas — mas não são a primeira verdade clínica. Estruturas como pequenas lesões do manguito rotador podem aparecer no exame e ser assintomáticas. Por outro lado, um paciente pode ter dor significativa e o exame pode parecer normal.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          O que realmente importa é a correlação clínico-radiológica: a imagem confirma o que a avaliação clínica já sugeriu. Testes ortopédicos bem executados, interpretados corretamente e combinados em clusters têm sensibilidade e especificidade comparáveis ou superiores a muitos exames de imagem — com a vantagem de serem instantâneos, sem custo, reproduzíveis e dinâmicos.
        </p>

        <blockquote className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg italic text-teal-900 mb-8">
          "Um teste positivo não significa diagnóstico. É apenas uma pista. A verdade clínica emerge quando múltiplas pistas convergem para o mesmo suspeito."
        </blockquote>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Qual a diferença entre sensibilidade e especificidade nos testes de ombro?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Esta é a pergunta mais importante que todo clínico deve fazer antes de usar um teste — porque a resposta determina quando e como aplicá-lo:
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-teal-900 mb-4">🔍 Entendendo Sensibilidade e Especificidade</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Sensibilidade alta (&gt;85%)</strong> = O teste raramente é negativo quando a condição está presente. Bom para "descartar" lesão quando negativo. Use quando quer ter certeza que NÃO há lesão.
            </li>
            <li>
              <strong>Especificidade alta (&gt;85%)</strong> = O teste raramente é positivo quando a lesão está ausente. Bom para "confirmar" lesão quando positivo. Use quando quer ter certeza que HÁ lesão.
            </li>
            <li>
              <strong>Sensibilidade e especificidade equilibradas</strong> = Melhor combinados em clusters com 2-3 testes para aumentar likelihood ratio.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Os 6 testes ortopédicos de ombro com maior valor clínico</h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Existem dezenas de testes descritos na literatura. Vamos focar nos 6 que têm melhor suporte de evidência e maior aplicabilidade clínica real:
        </p>

        <div className="space-y-6 mb-8">
          {[
            {
              num: "01",
              title: "Teste de Jobe (Empty Can Test)",
              desc: "Paciente em abdução 90°, cotovelo estendido, polegar apontando para baixo. Resiste à força do examinador. Positivo se dor ou fraqueza.",
              sensEspec: "Sensibilidade: 72-95% | Especificidade: 94-97%",
              quando: "Melhor para avaliar supraspinhal — especialmente lesões parciais ou inflamação do manguito.",
              tip: "Use este teste para CONFIRMAR quando positivo (alta especificidade). Se negativo, não descarta lesão completamente.",
            },
            {
              num: "02",
              title: "Teste de O'Brien (Active Compression Test)",
              desc: "Adução horizontal 10-15° com rotação interna, cotovelo estendido. Resiste força vertical para baixo. Positivo se dor anterior ou sensação de instabilidade.",
              sensEspec: "Sensibilidade: 50-72% | Especificidade: 97%",
              quando: "Excelente para lesão de LABRO (SLAP). Uma das maiores especificidades dos testes de ombro.",
              tip: "Alta especificidade = quando positivo, há forte suspeita de patologia labral. Combine com Crank Test para melhor sensibilidade.",
            },
            {
              num: "03",
              title: "Teste de Crank (Apprehension Test)",
              desc: "Paciente supino ou sentado, ombro em abdução 90° e rotação externa máxima. Positivo se sensação de instabilidade (apreensão) ou receio de deslocamento.",
              sensEspec: "Sensibilidade: 50-72% | Especificidade: 97-99%",
              quando: "PADRÃO OURO para instabilidade anterior do ombro. Altíssima especificidade = muito difícil ter falso positivo.",
              tip: "Combine com Teste de Relocation (Jobe) para melhorar sensibilidade. Se negativo, descarta bem a instabilidade.",
            },
            {
              num: "04",
              title: "Teste de Relocation (Jobe Relocation Test)",
              desc: "Após teste de Crank positivo, aplicar pressão posterior na cabeça do úmero. Positivo se alivia a sensação de instabilidade.",
              sensEspec: "Sensibilidade: 72% | Especificidade: 98%",
              quando: "Confirma instabilidade anterior quando Crank + Relocation são positivos. Aumenta confiabilidade diagnóstica.",
              tip: "Use como teste complementar do Crank. A combinação Crank POSITIVO + Relocation POSITIVO = altíssima probabilidade de instabilidade.",
            },
            {
              num: "05",
              title: "Teste de Neer (Impingement Test)",
              desc: "Flexão passiva máxima do ombro (mão do paciente tocando orelha oposta). Positivo se dor na região subacromial.",
              sensEspec: "Sensibilidade: 72-89% | Especificidade: 50-59%",
              quando: "Bom para DESCARTAR impacto subacromial quando negativo (alta sensibilidade). Especificidade moderada = muitos falsos positivos.",
              tip: "Teste de screening. Se negativo, reduz bastante a probabilidade de impacto. Se positivo, sempre confirme com Hawkins.",
            },
            {
              num: "06",
              title: "Teste de Hawkins (Hawkins Kennedy Test)",
              desc: "Ombro em flexão 90°, cotovelo 90°, rotação interna máxima. Positivo se dor subacromial.",
              sensEspec: "Sensibilidade: 80-92% | Especificidade: 60-67%",
              quando: "Complementar ao Neer. Ambos negativos reduzem muito a probabilidade de impacto. Combine com testes de manguito.",
              tip: "Use Neer + Hawkins como dupla. Se ambos negativos, impacto é improvável. Se ambos positivos, correlacione com Jobe e imagiologia.",
            },
          ].map((teste) => (
            <div key={teste.num} className="border-l-4 border-teal-500 pl-6 pb-6 bg-white p-6 rounded-lg shadow-sm">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">Teste {teste.num}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{teste.title}</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">{teste.desc}</p>
              <p className="text-xs font-medium text-teal-700 mb-3">{teste.sensEspec}</p>
              <p className="text-sm text-gray-700 mb-3"><strong>Quando usar:</strong> {teste.quando}</p>
              <div className="bg-teal-50 rounded-lg p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {teste.tip}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-red-700 mb-4">⚠ Bandeiras Vermelhas no Ombro: Quando Encaminhar para Médico</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Dor que piora progressivamente apesar de tratamento conservador por 4-6 semanas</li>
            <li>• Instabilidade recorrente com histórico de deslocamento do ombro</li>
            <li>• Perda significativa de força no manguito rotador — especialmente se aguda</li>
            <li>• Dor noturna severa que impede o sono persistentemente</li>
            <li>• Trauma de alta energia com suspeita de fratura proximal do úmero</li>
            <li>• Dor referida do pescoço associada a déficit neurológico radicular (irradiação para braço/mão)</li>
            <li>• Rigidez extrema (movimento significativamente limitado) — possível capsulite adesiva grave</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Como evitar falsos positivos em testes de ombro?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Um dos maiores erros clínicos é usar um único teste positivo como base para diagnóstico. Falsos positivos são comuns — especialmente em pacientes com somatização, ansiedade ou que esperam encontrar uma "etiqueta" de diagnóstico.
        </p>

        <p className="text-gray-700 mb-5 leading-relaxed">
          A estratégia para reduzir falsos positivos é simples: use clusters de testes com lógica clínica clara. Se você suspeita de impacto subacromial, aplique Neer + Hawkins + Jobe. Se todos apontam para a mesma estrutura, você aumenta a confiabilidade. Se os resultados divergem, reavalie sua hipótese.
        </p>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-teal-900 mb-4">🔍 Checklist para Reduzir Falsos Positivos</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Use 2-3 testes com diferentes estruturas alvo para confirmar hipótese</li>
            <li>✓ Correlacione sempre com anamnese: provocação, alívio, padrão de dor</li>
            <li>✓ Observe o comportamento do paciente durante o teste (sinceridade clínica)</li>
            <li>✓ Repita testes durante a mesma sessão para verificar consistência</li>
            <li>✓ Use testes com especificidade alta para CONFIRMAR, sensibilidade alta para DESCARTAR</li>
            <li>✓ Considere sempre diagnóstico diferencial — referência cervical, visceral, psicossocial</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">O que fazer depois que os testes indicam uma hipótese diagnóstica?</h2>

        <p className="text-gray-700 mb-5 leading-relaxed">
          Após executar os testes, você terá uma hipótese forte. O próximo passo é validar essa hipótese com a resposta terapêutica: aplicar um tratamento dirigido para aquela estrutura e observar a evolução.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Se os testes indicam manguito rotador, o tratamento deve focar em controle inflamatório, exercícios excêntricos e progressão de carga. Se indicam impacto subacromial, corrija a postura e mobilidade. Se indicam instabilidade, trabalhe estabilização dinâmica e propriocepção.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          A melhora dentro de 2-3 semanas valida sua hipótese clínica e mostra que o diagnóstico estava correto. Se não houver melhora, reavalie — pode ser diagnóstico incorreto, ou pode ser necessário investigação complementar com exame de imagem ou encaminhamento médico.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Perguntas frequentes sobre testes ortopédicos de ombro</h2>

        <div className="space-y-3 mb-8">
          {[
            {
              q: "Um teste positivo é suficiente para diagnosticar uma lesão de ombro?",
              a: "Não. Nenhum teste isolado é suficiente. Mesmo os testes com maior especificidade (como o Teste de Crank para instabilidade) podem ter falsos positivos em 1-3% dos casos. Use sempre clusters de 2-3 testes que apontam para a mesma estrutura, correlacionados com anamnese e achados de movimento.",
            },
            {
              q: "E se todos os meus testes forem negativos, mas o paciente tem dor?",
              a: "Pode haver várias explicações: a dor pode ser referida do pescoço, visceral, ou relacionada a fatores psicossociais. Reavalie a anamnese cuidadosamente. Se a dor é claramente articular no ombro, considere exame de imagem (ultrassom ou RMN) para excluir patologia estrutural que você não conseguiu diagnosticar clinicamente.",
            },
            {
              q: "Qual é a ordem correta para fazer os testes?",
              a: "Comece com testes menos provocantes (Neer, Hawkins). Depois aplique testes mais específicos conforme sua hipótese clínica se afila. Deixe testes mais agressivos (Crank com abdução/rotação extrema) por último para evitar inflamação desnecessária que pode prejudicar os testes subsequentes.",
            },
            {
              q: "Pacientes com ansiedade ou somatização podem ter testes falsamente positivos?",
              a: "Sim. Pacientes ansiosos podem relatar dor ou sensação de instabilidade mesmo sem patologia estrutural real. Observe o comportamento durante os testes: se o paciente está tenso, respirando rápido ou respondendo de forma inconsistente, use testes de sinceridade clínica (como Teste de Slump para o ombro modificado) e correlacione com achados de ADM ativa vs passiva.",
            },
          ].map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Testes Ortopédicos de Ombro: Arma Poderosa do Diagnóstico Clínico</h2>
          <p className="mb-4 leading-relaxed">
            Os testes ortopédicos de ombro não têm o glamour da ressonância magnética, mas têm algo melhor: eles funcionam. Quando usados corretamente — com compreensão de sensibilidade/especificidade, aplicados em clusters lógicos e correlacionados com anamnese — eles rival com exames de imagem em precisão diagnóstica.
          </p>
          <p className="mb-4 leading-relaxed">
            O que faz a diferença entre um clínico que erra diagnóstico e um que acerta não é sorte — é método. É compreender cada teste, suas limitações e sua força. É combinar informações de múltiplas fontes (anamnese, testes, movimento, palpação) para convergir numa hipótese sólida.
          </p>
          <p className="leading-relaxed">
            Aquele paciente com dor de ombro que não responde a tratamento genérico? Talvez ele só esteja esperando que você use os testes corretos para descobrir o que realmente o machuca — e então dirigir o tratamento especificamente para aquilo.
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
