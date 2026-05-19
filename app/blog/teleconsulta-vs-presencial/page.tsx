import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/teleconsulta-vs-presencial";

const faqItems = [
  {
    question: "Teleconsulta produz resultados comparáveis ao presencial em fisioterapia?",
    answer:
      "Sim, em condições selecionadas e com estruturação adequada. Estudos de comparação (RCTs e coortes) mostram equivalência ou não-inferioridade para programas de exercício domiciliar supervisionado remotamente, acompanhamento de reabilitação ortopédica e triagem. No entanto, teleatendimento é limitado para avaliação inicial complexa e técnicas manuais. A qualidade depende de protocolos estruturados, capacitação do terapeuta, qualidade da conexão e engajamento do paciente.",
  },
  {
    question: "Quais populações se beneficiam mais de teleconsulta?",
    answer:
      "Principalmente: (1) pacientes com mobilidade limitada ou distância geográfica; (2) acompanhamento de programa já estabelecido; (3) educação e treinamento de exercício; (4) população idosa com dificuldade de transporte; (5) casos de retorno/seguimento em reabilitação. Menos indicado para: primeira avaliação de diagnóstico incerto, pacientes com múltiplas comorbidades complexas, ou quando exame manual detalhado é crítico.",
  },
  {
    question: "Como garantir eficácia em teleconsulta?",
    answer:
      "Protocolo estruturado: (1) avaliação presencial inicial quando possível; (2) programa de exercício claro, com progressão e feedback específico; (3) comunicação bidirecional regular (videochamada estruturada, não apenas WhatsApp); (4) recursos educacionais visuais (vídeos demonstrativos, fotos de posicionamento); (5) ferramenta de monitoramento de adesão e sintomas; (6) critérios claros de encaminhamento para presencial se necessário.",
  },
  {
    question: "Teleconsulta reduz custos e melhora acesso?",
    answer:
      "Sim. Remove barreiras de transporte e tempo, potencialmente reduzindo custos do paciente. Permite reavaliar com mais frequência (curta duração, sem tempo de transporte). No entanto, requer investimento em tecnologia e capacitação profissional. Modelo híbrido (presencial inicial + teleacompanhamento) maximiza acesso sem perder qualidade diagnóstica.",
  },
  {
    question: "Existem desvantagens ou limitações de teleconsulta em fisioterapia?",
    answer:
      "Sim: (1) impossibilidade de exame físico direto e palpação; (2) avaliação de mobilidade articular pode ser imprecisa via vídeo; (3) dificuldade em corrigir postura em tempo real; (4) dependência de tecnologia e conexão estável; (5) barreira comunicativa em alguns pacientes (idosos, limitação cognitiva); (6) falta de regulação clara em alguns países; (7) registro/privacidade de dados.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
  description:
    "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/gestao-clinica.svg",
};

export const metadata: Metadata = {
  title: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
  description:
    "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
    description:
      "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
    url: pageUrl,
    type: "article",
  },
};

export default function TeleconsultaPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Teleconsulta vs presencial</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Prática clínica</span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Teleconsulta vs atendimento presencial: resultados, limites e quando usar</h1>

          <p className="mb-6 text-lg text-gray-600">Comparação baseada em evidência: eficácia, limitações, indicações e modelo híbrido para otimizar acesso sem comprometer qualidade clínica.</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 12 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900"><strong>Resumo:</strong> Teleconsulta é eficaz para programas de exercício estruturado e educação em muitas condições crônicas. Atendimento presencial permanece essencial para avaliação inicial complexa, exame físico detalhado e técnicas manuais. Modelo híbrido (presencial inicial + teleacompanhamento) otimiza acesso, reduz custos e mantém qualidade clínica.</p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">A pandemia de COVID-19 acelerou adoção de teleconsulta exponencialmente, forçando profissionais de saúde a inovar. Fisioterapeutas, inicialmente reticentes, descobriram que teleacompanhamento estruturado poderia manter qualidade em muitas situações. Hoje, evidência robusta sustenta uso seletivo de teleconsulta como parte de estratégia multimodal.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Evidência de eficácia: o que dizem os estudos</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões sistemáticas (Cottrell et al., 2021; Karunanithi et al., 2021) indicam:
        </p>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Programas de exercício supervisionado:</strong> Não-inferioridade ou equivalência comparado a presencial em dor lombar, lesão de joelho, osteoartrose e reabilitação pós-operatória. Qualidade superior quando com feedback visual e verbal estruturado.</li>
          <li><strong>Educação e aconselhamento:</strong> Efetivo por telemedicina, podendo inclusive ter maior engajamento (privacidade, conveniência).</li>
          <li><strong>Acompanhamento de rotina:</strong> Não-inferior; pode até aumentar frequência de contato sem custo adicional de tempo de transporte.</li>
          <li><strong>Triagem e reavaliação:</strong> Adequado; reduz necessidade de presencial desnecessário.</li>
          <li><strong>Avaliação inicial complexa:</strong> Inferior ao presencial; deve ser evitada ou combinada com presencial quando diagnóstico é incerto.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Condições com melhor suporte de evidência para teleconsulta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Reabilitação pós-operatória (joelho, ombro):</strong> Múltiplos RCTs mostram equivalência; protocolo estruturado com exercício progressivo supervisionado remotamente.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Dor lombar crônica:</strong> Programas baseados em exercício e educação por teleacompanhamento equipararam-se a presencial; chave é progressão estruturada e feedback adaptado.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Osteoartrose (joelho, quadril):</strong> Exercício supervisionado remotamente efetivo para dor e função; melhor quando paciente já tem base anatômica clara de diagnóstico.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Reabilitação neurológica leve (AVE, Parkinson inicial):</strong> Programas domiciliares estruturados com cues visuais e feedback remoto mostram aderência e efetividade.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Acompanhamento e progressão:</strong> Pacientes em fase avançada de reabilitação (movimentação independente, sem sinais de alerta) podem progredir completamente por teleconsulta.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando presencial é obrigatório</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Avaliação inicial com diagnóstico incerto:</strong> Exame físico direto, palpação, testes ortopédicos e progressão de sinais são necessários.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Sinais de alerta ou complicação:</strong> Piora abrupta, edema significativo, alteração sensorial, fraqueza progressiva, sinais neurológicos.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Técnicas manuais são centrais ao tratamento:</strong> Mobilização articular, técnicas miofasciais, manipulação requerem contato direto.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Pacientes com comorbidades complexas ou polimedicação:</strong> Maior vigilância necessária; requer exame físico direto periódico.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>População vulnerável:</strong> Idosos com múltiplas comorbidades, pacientes com déficit cognitivo ou limitação severa de mobilidade.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Vantagens de teleconsulta</h2>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Acesso ampliado:</strong> Remove barreiras geográficas e de mobilidade; pacientes em localidades remotas acessam especialista.</li>
          <li><strong>Custo reduzido:</strong> Elimina transporte, estacionamento, perda de tempo no trânsito; reduz custos paciente e clínica.</li>
          <li><strong>Frequência aumentada:</strong> Sessões curtas frequentes (check-ins semanais) viáveis sem sobrecarga de tempo; melhora adesão.</li>
          <li><strong>Documentação natural:</strong> Vídeo facilita resenha e documentação (consentimento importante); paciente pode rever exercícios.</li>
          <li><strong>Privacidade:</strong> Alguns pacientes preferem ambiente familiar; reduz constrangimento em certos tópicos.</li>
          <li><strong>Flexibilidade horária:</strong> Facilita agendamento em horários não convencionais.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Limitações e desvantagens de teleconsulta</h2>
        <ul className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Impossibilidade de exame físico direto:</strong> Palpação, testes de resistência manual, avaliação de simetria, ROM preciso limitado.</li>
          <li><strong>Avaliação de biomecânica imprecisa:</strong> Ângulos, alinhamento, qualidade de movimento podem ser subestimados via câmera.</li>
          <li><strong>Impossibilidade de técnicas manuais:</strong> Mobilização, manipulação, técnicas miofasciais profundas não viáveis.</li>
          <li><strong>Dependência de tecnologia:</strong> Conexão ruim compromete comunicação e feedback; paciente deve ter câmera/dispositivo adequado.</li>
          <li><strong>Barreiras em populações específicas:</strong> Idosos com pouca familiaridade digital, analfabetismo digital, limitação sensorial (visão/audição).</li>
          <li><strong>Privacidade/confidencialidade:</strong> Ambientes compartilhados podem comprometer privacidade; requer educação em segurança digital.</li>
          <li><strong>Perda de componente social:</strong> Alguns pacientes (especialmente idosos isolados) perdem contato social que clínica oferecia.</li>
          <li><strong>Falta de regulação e reembolso:</strong> Em alguns contextos, teleconsulta não é regulada ou reembolsada.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Modelo híbrido: otimizando acesso sem perder qualidade</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Protocolo recomendado:</strong>
        </p>
        <ol className="mb-6 ml-6 space-y-2 text-gray-700">
          <li><strong>Avaliação inicial (presencial):</strong> Avaliação clínica completa, exame físico detalhado, testes, diagnóstico, planejamento de tratamento.</li>
          <li><strong>Sessões presenciais iniciais (2-3):</strong> Ensino de exercício, técnicas manuais se indicadas, consolidação de confiança e rapport.</li>
          <li><strong>Transição progressiva a teleacompanhamento:</strong> Conforme paciente compreende programa e independência em exercício melhora, reduzir frequência presencial e aumentar teleacompanhamento.</li>
          <li><strong>Teleacompanhamento estruturado:</strong> Sessões semanais/quinzenais via vídeo com duração 15-20 min, feedback visual, progressão de exercício, monitoramento de adesão.</li>
          <li><strong>Reavaliação presencial periódica:</strong> A cada 4-6 semanas (ou conforme necessário), sessão presencial para re-exame, ajuste de técnica, detecção de complicações.</li>
          <li><strong>Critérios de encaminhamento:</strong> Se paciente não progride, surge sinal de alerta ou há mudança clínica, voltar a presencial ou encaminhar para re-avaliação.</li>
        </ol>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Recomendações práticas para implementar teleconsulta efetiva</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Tecnologia:</strong> Plataforma segura (HIPAA/LGPD compliant), boa qualidade de vídeo, capacidade de compartilhar tela/imagens, registro seguro. Exemplos: Zoom (configurado para saúde), Whereby, PlataformaS próprias.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Protocolos e padrões:</strong> Defina critérios de elegibilidade (quem pode fazer teleconsulta), roteiros de consulta (agenda estruturada), avaliação de progressão, critérios de encaminhamento.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Educação do paciente:</strong> Antes da primeira sessão, envie: (1) guia de configuração técnica, (2) espaço adequado (mínimo 2m²), (3) consentimento informado, (4) privacidade e LGPD, (5) comunicação de expectativas.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Consentimento e documentação:</strong> Registro de que teleconsulta foi oferecida, paciente compreendeu limitações, consentimento documentado, documentação de exame visual, impressão clínica, plano de tratamento.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Feedback e progressão:</strong> Forneça exercícios por escrito com fotos/vídeos, feedback específico durante sessão, instrumentos de adesão/escala de dor entre sessões, progressão clara e mensurável.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          <strong>Continuidade:</strong> Mantenha contato entre sessões se possível (WhatsApp, email para dúvidas simples; não substitua teleconsulta). Isso melhora adesão e relacionamento.</p>

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
          <h2 className="mb-4 text-2xl font-bold">Conclusão</h2>
          <p className="mb-4 leading-relaxed">
            Teleconsulta não é substituto universal para atendimento presencial, mas é ferramenta poderosa quando bem aplicada. A melhor prática é modelo híbrido estruturado: presencial para avaliação inicial e consolidação de técnica, teleacompanhamento para progressão e educação. Critérios claros de elegibilidade, protocolos estruturados e comunicação transparente com paciente sobre limitações são essenciais.
          </p>
          <p className="leading-relaxed">
            Profissionais que adotam teleconsulta estrategicamente ampliam acesso, melhoram adesão, reduzem barreiras e mantêm qualidade clínica. O futuro é híbrido: sincronize sua prática para oferecer melhor valor aos pacientes.
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
