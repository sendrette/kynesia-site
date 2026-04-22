import { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/site-header";

const pageUrl =
  "https://kynesia.com.br/blog/dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento";

export const metadata: Metadata = {
  title: "Dor no ombro ao levantar o braço: causas e tratamento",
  description:
    "Dor no ombro ao levantar o braço? Veja causas, sintomas e quando procurar fisioterapia para aliviar a dor e recuperar o movimento.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor no ombro ao levantar o braço: causas e tratamento",
    description:
      "Dor no ombro ao levantar o braço? Veja causas, sintomas e quando procurar fisioterapia para aliviar a dor e recuperar o movimento.",
    url: pageUrl,
    type: "article",
    images: [
      {
        url: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
        width: 1200,
        height: 630,
        alt: "Dor no ombro ao levantar o braço",
      },
    ],
  },
};

const faqItems = [
  {
    question: "O que causa dor ao levantar o braço?",
    answer:
      "A dor ao levantar o braço pode ser causada por impacto subacromial, tendinopatia do manguito rotador, bursite subacromial, frouxidão glenoumeral, disfunção neuromuscular ou até problemas de origem cervical. Uma avaliação clínica adequada é essencial para diagnóstico diferencial.",
  },
  {
    question: "Quanto tempo leva para melhorar dor no ombro?",
    answer:
      "Depende da causa. Casos leves de tendinite podem melhorar em 2-4 semanas com repouso e fisioterapia. Casos mais complexos podem levar 6-12 semanas. Aderência ao programa de reabilitação e progressão de carga adequada aceleram a recuperação.",
  },
  {
    question: "Como saber se é problema no ombro ou na cervical?",
    answer:
      "Problemas cervicais geralmente causam dor que irradia para o braço, com possível dormência/formigamento. Problemas locais do ombro causam dor focal no pico do ombro ou região anterior. Um fisioterapeuta pode diferenciar através de testes ortopédicos específicos.",
  },
  {
    question: "Dor ao levantar o braço é grave?",
    answer:
      "Nem sempre. Pode variar de uma simples inflamação temporária até lesões mais significativas. O importante é não ignorar o sintoma. Se a dor persistir por mais de 2-3 semanas ou piorar, procure avaliação profissional para evitar cronificação.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor no ombro ao levantar o braço: causas e tratamento",
  description:
    "Dor no ombro ao levantar o braço? Veja causas, sintomas e quando procurar fisioterapia para aliviar a dor e recuperar o movimento.",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
  author: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-04-22",
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

export default function DorOmbroBracoPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Dor
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Dor no ombro ao levantar o braço: causas e tratamento
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            A dor no ombro ao levantar o braço é um dos problemas mais frequentes no consultório de fisioterapia. Neste guia, exploraremos as principais causas, como identificá-las e quais estratégias de tratamento são mais eficazes para recuperar a mobilidade e eliminar a dor.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>22 de Abril de 2026</span>
            <span>•</span>
            <span>7 min de leitura</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">
              Dor no ombro ao levantar o braço
            </span>
          </nav>
        </div>
      </section>

      {/* Featured Snippet */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-teal-500 bg-teal-50 p-6 rounded-r-lg">
            <p className="text-gray-900 font-semibold mb-3">Resumo rápido:</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Causas comuns:</strong> impacto subacromial, tendinopatia do manguito rotador, bursite e instabilidade glenoumeral
              </li>
              <li>
                <strong>Quando procurar fisioterapia:</strong> se a dor persistir mais de 2-3 semanas ou piorar progressivamente
              </li>
              <li>
                <strong>Tempo de recuperação:</strong> de 4 a 12 semanas dependendo da gravidade e aderência ao tratamento
              </li>
              <li>
                <strong>Tratamento eficaz:</strong> avaliação específica, exercícios progressivos e readaptação funcional
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Internal Links Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-blue-900 mb-3">
              📚 Leia também:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/teste-ortopedico-ombro"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Testes ortopédicos do ombro: protocolo completo
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/tendinopatia-carga-progressiva"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Tendinopatia e carga progressiva: como reabilitar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que dói ao levantar o braço?
            </h2>
            <p className="text-gray-700 mb-4">
              A dor no ombro ao levantar o braço ocorre porque o movimento de elevação (abdução) reduz o espaço subacromial. Os músculos e tendões do manguito rotador precisam atravessar um espaço limitado entre o úmero e a articulação acromioclavicular.
            </p>
            <p className="text-gray-700 mb-4">
              Quando há inflamação, edema ou alterações na biomecânica do ombro, esse espaço fica ainda mais restrito, gerando atrito e dor. Esse mecanismo é chamado de impacto subacromial.
            </p>
            <p className="text-gray-700">
              Além do impacto, outras estruturas podem estar envolvidas: tendões lesionados, bursa inflamada, articulação instável ou até problemas originários da coluna cervical que irradiam para o ombro.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Principais causas de dor ao levantar o braço
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  🔴 Impacto Subacromial
                </h3>
                <p className="text-gray-700">
                  Compressão das estruturas (manguito rotador e bursa) entre o acrômio e a cabeça do úmero. Muito comum em pessoas com postura cifótica.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  🔴 Tendinopatia do Manguito Rotador
                </h3>
                <p className="text-gray-700">
                  Lesão ou degeneração dos tendões estabilizadores do ombro. Causada por sobrecarga, falta de força ou movimentos repetitivos.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  🔴 Bursite Subacromial
                </h3>
                <p className="text-gray-700">
                  Inflamação da bursa que amortece o atrito entre as estruturas. Causa dor principalmente na abdução de 60-120 graus.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  🔴 Instabilidade Glenoumeral
                </h3>
                <p className="text-gray-700">
                  Frouxidão da articulação do ombro que causa instabilidade e compensações. Comum em pessoas hipermóveis ou que sofreram luxações.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  🔴 Síndrome do Manguito Doloroso
                </h3>
                <p className="text-gray-700">
                  Combinação de fraqueza, encurtamento e dor nos músculos estabilizadores. Resulta em padrão motor alterado.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  🔴 Dor de Origem Cervical
                </h3>
                <p className="text-gray-700">
                  Problemas na cervical (hérnias, artrose) que irradiam dor para o ombro. Requer avaliação diferencial específica.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como é feito o diagnóstico?
            </h2>
            <p className="text-gray-700 mb-4">
              Um bom diagnóstico começa com uma avaliação clínica estruturada. O fisioterapeuta deve:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>1. Anamnese detalhada:</strong> quando começou, fatores agravantes/aliviadores, histórico de traumas, profissão e hobbies
              </li>
              <li>
                <strong>2. Avaliação postural:</strong> observar cifose, protração de ombro e simetria
              </li>
              <li>
                <strong>3. Testes de movimento:</strong> amplitude, força e padrão motor durante abdução
              </li>
              <li>
                <strong>4. Testes ortopédicos específicos:</strong> teste de impacto (Neer), teste de Hawkins, teste de resistência
              </li>
              <li>
                <strong>5. Palpação:</strong> identificar áreas dolorosas e estruturas comprometidas
              </li>
              <li>
                <strong>6. Testes de diferenciação:</strong> provocar dor no ombro vs. origem cervical
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Imagens (raio-X, ultrassom, RMN) podem complementar o diagnóstico, mas a clínica é essencial. Muitos achados de imagem não correlacionam com sintomas.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estratégias de tratamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-900 mb-3">
                  ✓ Fase Aguda (0-2 semanas)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Repouso relativo e proteção</li>
                  <li>• Controle da inflamação (gelo)</li>
                  <li>• Exercícios isométricos sem dor</li>
                  <li>• Mobilização suave da articulação</li>
                  <li>• Educação postural</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-blue-900 mb-3">
                  ✓ Fase Subaguda (2-6 semanas)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Progressão para exercícios dinâmicos</li>
                  <li>• Ganho de força muscular</li>
                  <li>• Trabalho de estabilidade</li>
                  <li>• Manutenção e aumento de amplitude</li>
                  <li>• Readaptação funcional</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-lg p-4">
                <h3 className="font-bold text-purple-900 mb-3">
                  ✓ Fase Crônica ({`>`}6 semanas)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Exercícios de força avançados</li>
                  <li>• Treino de potência e velocidade</li>
                  <li>• Retorno ao esporte/atividades</li>
                  <li>• Prevenção de recidiva</li>
                  <li>• Otimização biomecânica</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-lg p-4">
                <h3 className="font-bold text-orange-900 mb-3">
                  ✓ Recursos Complementares
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Terapia manual e mobilizações</li>
                  <li>• Liberação miofascial</li>
                  <li>• Acupuntura (se indicada)</li>
                  <li>• Bandagem funcional (tape)</li>
                  <li>• Recursos como laser, US (evidência moderada)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A importância da carga progressiva
            </h2>
            <p className="text-gray-700 mb-4">
              Um dos princípios fundamentais na reabilitação do ombro é a progressão gradual de carga. Isso significa aumentar a intensidade, volume ou complexidade do exercício de forma controlada.
            </p>
            <p className="text-gray-700 mb-4">
              Quando feito corretamente, a carga progressiva promove adaptação neuromuscular, fortalecimento e prevenção de recidivas. O erro comum é progredir muito rápido ou manter o mesmo exercício por tempo demais.
            </p>
            <p className="text-gray-700">
              Uma ferramenta como o Kynesia ajuda a registrar a evolução do paciente, monitorar a progressão e tomar decisões baseadas em dados. Cada sessão fica documentada, facilitando ajustes na carga conforme necessário.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quando procurar fisioterapia?
            </h2>
            <p className="text-gray-700 mb-4">
              Procure avaliação profissional se:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ A dor persiste por mais de 2-3 semanas</li>
              <li>✓ A dor está piorando progressivamente</li>
              <li>✓ A amplitude de movimento está diminuindo</li>
              <li>✓ Há limitação funcional (dificuldade para pegar objetos, se arrumar)</li>
              <li>✓ A dor está afetando suas atividades de trabalho ou lazer</li>
              <li>✓ Houve trauma ou queda que antecedeu o sintoma</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                >
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    <span>{item.question}</span>
                    <span className="text-gray-500">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Otimize o acompanhamento de seus pacientes
            </h2>
            <p className="text-blue-100 mb-6">
              O Kynesia oferece prontuário eletrônico, inteligência clínica e recursos de gestão para estruturar melhor suas avaliações e evoluções. Acompanhe a progressão de cada sessão com dados precisos.
            </p>
            <Link
              href="https://app.kynesia.com.br"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 inline-block"
            >
              Conhecer o Kynesia
            </Link>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold text-gray-900">Kynesia</p>
              <p className="text-gray-600 text-sm">
                Sistema de gestão clínica para fisioterapeutas com inteligência clínica baseada em evidências.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
