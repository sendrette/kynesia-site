import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/sistema-para-fisioterapeutas-como-escolher-o-ideal";

const faqItems = [
  {
    question: "O que é um sistema para fisioterapeutas?",
    answer:
      "É uma plataforma que centraliza prontuário eletrônico, agenda, evolução clínica, controle financeiro e indicadores em um único ambiente, reduzindo burocracia e aumentando qualidade assistencial.",
  },
  {
    question: "Qual a diferença entre software de agenda e prontuário integrado?",
    answer:
      "Software de agenda só organiza horários. Um sistema integrado conecta agenda, prontuário, evolução e financeiro, permitindo visão completa da operação e melhor tomada de decisão clínica.",
  },
  {
    question: "Um sistema para fisioterapeutas realmente melhora produtividade?",
    answer:
      "Sim. Estudos mostram que profissionais que usam prontuário eletrônico integrado perdem menos tempo com tarefas administrativas e aumentam tempo clínico em até 25%, além de melhorar documentação e conformidade.",
  },
  {
    question: "Como escolher entre vários sistemas disponíveis?",
    answer:
      "Avalie: 1) Integração entre funcionalidades (agenda, prontuário, financeiro), 2) Conformidade LGPD e COFFITO, 3) Suporte e treinamento, 4) Facilidade de uso, 5) Escalabilidade, 6) Inteligência clínica e baseada em evidências.",
  },
  {
    question: "Vale a pena investir em um sistema profissional?",
    answer:
      "Sim. Além de economizar tempo, um sistema profissional reduz erros, melhora conformidade legal, facilita análise de resultados e oferece vantagem competitiva real frente a concorrentes que usam apenas planilhas.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sistema para fisioterapeutas: como escolher o ideal",
  description:
    "Veja como escolher um sistema para fisioterapeutas com agenda, prontuário, financeiro e gestão clínica integrada.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  image: "https://kynesia.com.br/blog/sistema-fisioterapeutas.svg",
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
  title: "Sistema para fisioterapeutas: como escolher o ideal",
  description:
    "Veja como escolher um sistema para fisioterapeutas com agenda, prontuário, financeiro e gestão clínica integrada.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Sistema para fisioterapeutas: como escolher o ideal",
    description:
      "Veja como escolher um sistema para fisioterapeutas com agenda, prontuário, financeiro e gestão clínica integrada.",
    type: "article",
    url: pageUrl,
  },
};

export default function SistemaFisioterapeutasPage() {
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
          <span className="font-medium text-teal-600">Sistema para fisioterapeutas: como escolher o ideal</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica & Tecnologia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Sistema para fisioterapeutas: como escolher o ideal
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda os critérios essenciais para escolher um sistema que realmente melhore sua prática clínica, integre agenda, prontuário, financeiro e ofereça suporte à tomada de decisão baseada em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 20 Mai 2026</span>
            <span>⏱ 12 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Escolher um sistema para fisioterapeutas é decisão que impacta produtividade, qualidade clínica e conformidade legal. Um bom sistema integra agenda, prontuário, evolução e financeiro em uma plataforma única, reduzindo burocracia e aumentando eficiência sem comprometer raciocínio clínico.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Muitos fisioterapeutas ainda trabalham com múltiplas ferramentas desconectadas: agenda em um aplicativo, prontuário em planilhas, financeiro em outro programa. Isso gera retrabalho, aumenta risco de erros e reduz qualidade de dados.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A escolha de um sistema adequado não é apenas operacional: é estratégica. A tecnologia certa libera tempo para o que realmente importa: raciocínio clínico, evolução do paciente e relação terapêutica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que um sistema integrado é melhor que múltiplas ferramentas?</h2>
        
        <p className="mb-5 leading-relaxed text-gray-700">
          A fragmentação de sistemas gera custos ocultos: tempo perdido em digitação repetida, inconsistência de dados, falta de visão integrada da operação e risco maior de erros clínicos e administrativos.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Redução de tempo administrativo",
              desc: "Um sistema integrado centraliza dados, eliminando reentrada de informações. Estudos mostram que profissionais ganham até 2 horas por semana de trabalho clínico direto.",
              stats: "Economia: ~25% do tempo administrativo por semana",
            },
            {
              num: "02",
              title: "Consistência e qualidade de dados",
              desc: "Quando agenda, prontuário e financeiro compartilham a mesma base de dados, erros diminuem drasticamente e a integridade das informações fica garantida.",
              stats: "Redução de erros: até 80% em sistemas bem configurados",
            },
            {
              num: "03",
              title: "Visão integrada da operação",
              desc: "Um único sistema permite visualizar simultaneamente: qual paciente está agendado, histórico clínico, evolução do tratamento, faturamento e indicadores de desempenho.",
              stats: "Melhoria em decisões: 3x mais baseadas em dados",
            },
            {
              num: "04",
              title: "Conformidade legal e conformidade clínica",
              desc: "Sistemas profissionais garantem conformidade com LGPD, COFFITO, boas práticas de documentação e segurança de dados clínicos sensíveis.",
              stats: "Risco de multa/problema legal: reduz de significativo para mínimo",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Benefício {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                📊 <strong>{item.stats}</strong>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Critérios essenciais para escolher um sistema</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Nem todos os sistemas são iguais. A qualidade varia muito em funcionalidades, usabilidade, suporte e custo. Aqui estão os critérios que realmente importam na hora da decisão.
        </p>

        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900">1) Integração completa (agenda + prontuário + financeiro)</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Isso parece óbvio, mas muitos sistemas apenas juntam ferramentas sem de fato integrá-las. Procure por:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>Agenda conectada ao prontuário:</strong> clicar em um paciente agendado abre automaticamente o histórico clínico.</li>
          <li>• <strong>Prontuário integrado ao financeiro:</strong> uma consulta realizada aparece automaticamente na cobrança.</li>
          <li>• <strong>Base de dados unificada:</strong> alterações em um módulo refletem em tempo real nos outros.</li>
          <li>• <strong>Sem redundância:</strong> dados do paciente cadastrados uma única vez, acessíveis em toda plataforma.</li>
        </ul>

        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900">2) Prontuário eletrônico com estrutura clínica clara</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O prontuário é o coração de um sistema clínico. Deve oferecer:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>Anamnese estruturada:</strong> com campos clínicos relevantes e inteligência de sugestão.</li>
          <li>• <strong>Modelos de evolução personalizáveis:</strong> que permitam raciocínio clínico, não apenas checklist.</li>
          <li>• <strong>Histórico acessível:</strong> comparar sessão atual com sessões anteriores rapidamente.</li>
          <li>• <strong>Segurança e privacidade:</strong> criptografia, acesso controlado, conformidade LGPD/COFFITO.</li>
          <li>• <strong>Suporte a upload:</strong> exames, imagens, laudos e documentos clínicos integrados.</li>
        </ul>

        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900">3) Agenda inteligente com automação de fluxo</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Uma boa agenda reduz no-show e aumenta eficiência. Busque por:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>Confirmação automática de presença:</strong> envio de lembretes via SMS ou WhatsApp.</li>
          <li>• <strong>Regras de agendamento:</strong> respeitar intervalos mínimos entre sessões, tempo de consulta configurável.</li>
          <li>• <strong>Gerenciamento de cancelamentos:</strong> histórico de faltas, políticas de reagendamento claras.</li>
          <li>• <strong>Relatórios de ocupação:</strong> taxa de aproveitamento, gap de horários, previsibilidade.</li>
          <li>• <strong>Acesso multiplataforma:</strong> paciente pode agendar pelo app/web, você gerencia pelo desktop.</li>
        </ul>

        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900">4) Controle financeiro integrado</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A operação clínica e financeira devem conversar. Procure por:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>Cobrança automática:</strong> sesão realizada gera faturamento sem reentrada manual.</li>
          <li>• <strong>Integração com gateways de pagamento:</strong> Asaas, PagSeguro, Stripe para recebimentos múltiplos.</li>
          <li>• <strong>Relatórios financeiros completos:</strong> receita por período, taxa de conversão, ticket médio.</li>
          <li>• <strong>Gestão de créditos e planos:</strong> possibilidade de ofertar pacotes, créditos pré-pagos, assinaturas.</li>
          <li>• <strong>Previsibilidade:</strong> saber quantas sessões foram faturadas, qual é a receita esperada no mês.</li>
        </ul>

        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900">5) Inteligência clínica baseada em evidências</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Este é um diferencial que ainda poucos sistemas oferecem. Um bom sistema deve:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>Sugerir testes e condutas:</strong> baseado em diagnóstico, estrutura de evidências e protocolos.</li>
          <li>• <strong>Suportar evolução com IA:</strong> permitir ditado de voz ou IA para auxiliar redação de evoluções.</li>
          <li>• <strong>Acompanhar resultados:</strong> métricas de melhora funcional, retorno à atividade.</li>
          <li>• <strong>Indicadores de qualidade:</strong> tempo de alta, reincidência, satisfação do paciente.</li>
        </ul>

        <h3 className="mb-4 mt-6 text-xl font-semibold text-gray-900">6) Segurança, conformidade e suporte técnico</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A segurança é não-negociável em saúde. Avalie:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>Certificações:</strong> ISO 27001, conformidade LGPD, validação COFFITO.</li>
          <li>• <strong>Backup automático e redundância:</strong> seus dados estão seguros mesmo em caso de falha.</li>
          <li>• <strong>Suporte ativo:</strong> equipe disponível para dúvidas, treinamento e resolução de problemas.</li>
          <li>• <strong>Atualizações constantes:</strong> o sistema evolui com a legislação e melhores práticas.</li>
          <li>• <strong>Transparência de dados:</strong> você sabe onde seus dados estão armazenados e como são protegidos.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que não fazer ao escolher um sistema</h2>
        
        <div className="mb-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-red-900">❌ Erros comuns na escolha</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>• Comprar só por preço:</strong> um sistema ruim no longo prazo custa muito mais em produtividade perdida e erros.</li>
            <li><strong>• Escolher por ferramenta isolada:</strong> por exemplo, "melhor agenda" mas sem integração com prontuário. Isso não resolve o problema real.</li>
            <li><strong>• Ignorar conformidade legal:</strong> trabalhar com sistema não-conforme gera risco de multa, processo e perda de credibilidade.</li>
            <li><strong>• Não testar antes de contratar:</strong> exija período de teste gratuito. Se a empresa recusa, é sinal de alerta.</li>
            <li><strong>• Subestimar suporte técnico:</strong> quando algo quebra durante atendimento, você precisa de ajuda rápida e competente.</li>
            <li><strong>• Escolher por interface bonita apenas:</strong> usabilidade é importante, mas funcionalidade e confiabilidade vêm em primeiro lugar.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Comparação rápida: planilhas vs. sistema profissional</h2>
        
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full text-sm">
            <thead className="bg-teal-50">
              <tr>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Critério</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Planilhas</th>
                <th className="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sistema Profissional</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Tempo administrativo</td>
                <td className="px-4 py-3 text-gray-700">Alto (digitação repetida)</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Baixo (automação)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Qualidade de dados</td>
                <td className="px-4 py-3 text-gray-700">Variável (erro manual)</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Consistente (validação)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Segurança</td>
                <td className="px-4 py-3 text-gray-700">Baixa (dados não criptografados)</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Alta (criptografia, backup)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Conformidade legal</td>
                <td className="px-4 py-3 text-gray-700">Baixa (risco de multa)</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Alta (LGPD, COFFITO)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Relatórios e insights</td>
                <td className="px-4 py-3 text-gray-700">Limitados e manuais</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Automáticos e em tempo real</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3 font-medium text-gray-900">Escalabilidade</td>
                <td className="px-4 py-3 text-gray-700">Muito limitada</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Cresce com seu negócio</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Custo real (tempo + risco)</td>
                <td className="px-4 py-3 text-red-700 font-semibold">Alto (oculto)</td>
                <td className="px-4 py-3 text-teal-700 font-semibold">Baixo (previsível e rentável)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quanto custa um sistema para fisioterapeutas?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O preço varia bastante, mas a maioria dos sistemas profissionais custa entre R$ 200 e R$ 800 por mês. Ao avaliar custo, considere:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li>• <strong>ROI (retorno sobre investimento):</strong> um bom sistema economiza ao menos 5 horas/semana, que se traduzem em receita ou qualidade do atendimento.</li>
          <li>• <strong>Custo oculto de não ter sistema:</strong> erros clínicos, retrabalho, não-conformidade legal, perda de pacientes por falta de organização.</li>
          <li>• <strong>Escalabilidade:</strong> um sistema que cresce com você é melhor que trocar de sistema a cada crescimento.</li>
          <li>• <strong>Investimento em qualidade:</strong> quanto melhor a inteligência clínica e suporte, mais valor agregado à sua prática.</li>
        </ul>

        <p className="mb-8 leading-relaxed text-gray-700">
          <strong>A regra de ouro:</strong> se o sistema economiza mais tempo/erros do que custam, é um investimento rentável.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como começar: roteiro de decisão</h2>
        
        <div className="mb-8 space-y-4">
          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-5">
            <p className="font-semibold text-teal-900">Passo 1: Mapeie suas necessidades</p>
            <p className="mt-2 text-sm text-gray-700">Qual é seu maior gargalo hoje? Agenda? Documentação? Controle financeiro? Começo por resolver o maior problema.</p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-5">
            <p className="font-semibold text-teal-900">Passo 2: Procure por 3-5 sistemas que atendam seus critérios</p>
            <p className="mt-2 text-sm text-gray-700">Leia reviews, converse com outros fisioterapeutas, verifique se o sistema é conforme com LGPD/COFFITO.</p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-5">
            <p className="font-semibold text-teal-900">Passo 3: Teste pelo menos 2 sistemas</p>
            <p className="mt-2 text-sm text-gray-700">Exija período de teste gratuito ou freemium. Use por alguns dias antes de decidir. A usabilidade vai se revelar rapidamente.</p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-5">
            <p className="font-semibold text-teal-900">Passo 4: Converse com o suporte técnico</p>
            <p className="mt-2 text-sm text-gray-700">Faça perguntas, tire dúvidas. A qualidade do suporte já deixa claro se você pode confiar na empresa.</p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-5">
            <p className="font-semibold text-teal-900">Passo 5: Implemente com cuidado</p>
            <p className="mt-2 text-sm text-gray-700">Não mude tudo de uma vez. Configure devagar, treine sua equipe, valide dados antes de migrar completamente.</p>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o Kynesia se diferencia</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O Kynesia foi construído especificamente para a realidade da fisioterapia. Não é um sistema genérico adaptado: é pensado desde o início para integrar raciocínio clínico, qualidade assistencial e eficiência operacional.
        </p>

        <div className="mb-8 space-y-4">
          <div className="rounded-lg bg-blue-50 p-5 border border-blue-200">
            <h4 className="font-semibold text-blue-900">✓ Inteligência clínica baseada em evidências</h4>
            <p className="mt-2 text-sm text-gray-700">Sugestões de testes, condutas e documentação alinhadas com protocolos e melhores práticas. IA para evoluções mais rápidas, sem perder qualidade.</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-5 border border-blue-200">
            <h4 className="font-semibold text-blue-900">✓ Prontuário eletrônico conformado com COFFITO</h4>
            <p className="mt-2 text-sm text-gray-700">Padrão de documentação que respeita normas de fisioterapia, segurança de dados com LGPD, e rastreabilidade completa.</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-5 border border-blue-200">
            <h4 className="font-semibold text-blue-900">✓ Agenda + Prontuário + Financeiro integrados</h4>
            <p className="mt-2 text-sm text-gray-700">Uma única plataforma que conecta todas essas funcionalidades, eliminando retrabalho e inconsistência de dados.</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-5 border border-blue-200">
            <h4 className="font-semibold text-blue-900">✓ Dashboard de indicadores para gestão clínica</h4>
            <p className="mt-2 text-sm text-gray-700">Acompanhamento de taxa de comparecimento, tempo de sessão, resultados de pacientes, previsibilidade de receita.</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-5 border border-blue-200">
            <h4 className="font-semibold text-blue-900">✓ Suporte especializado em fisioterapia</h4>
            <p className="mt-2 text-sm text-gray-700">Equipe que entende de clinica, gestão e operação de fisioterapeuta. Não é suporte genérico: é suporte que fala sua língua.</p>
          </div>
        </div>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Sistema ideal é aquele que desaparece do seu dia a dia</h2>
          <p className="mb-4 leading-relaxed">
            Um bom sistema não deve ser obstáculo: deve ser facilitador. Quando bem escolhido e implantado, libera tempo, melhora qualidade clínica e oferece visão clara da sua operação.
          </p>
          <p className="mb-4 leading-relaxed">
            Em 2026, escolher um sistema profissional não é luxo: é base mínima para praticar fisioterapia de qualidade e com previsibilidade de resultado.
          </p>
          <p className="leading-relaxed">
            O investimento se paga em poucos meses, em produtividade, conformidade e tranquilidade.
          </p>
        </div>

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

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8 mt-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca qualidade na fisioterapia.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
