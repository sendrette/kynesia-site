"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SiteHeader from "../components/site-header";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Dor" | "Ortopedia" | "Avaliação" | "Reabilitação" | "Gestão Clínica";
  image: string;
  readTime: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "18",
    slug: "dor-no-ombro-ao-levantar-o-braco-causas-e-tratamento",
    title: "Dor no ombro ao levantar o braço: causas e tratamento",
    excerpt:
      "Dor no ombro ao levantar o braço? Veja causas, sintomas e quando procurar fisioterapia para aliviar a dor e recuperar o movimento.",
    category: "Dor",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "7 min",
    date: "22 Abr 2026",
  },
  {
    id: "17",
    slug: "fisioterapia-ortopedica-como-se-especializar",
    title: "Fisioterapia ortopédica: como se especializar",
    excerpt:
      "Veja como se especializar em fisioterapia ortopédica, quais estudos são essenciais, livros recomendados e dicas para evoluir na área.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "9 min",
    date: "21 Abr 2026",
  },
  {
    id: "16",
    slug: "software-para-fisioterapia-como-escolher-o-melhor",
    title: "Software para fisioterapia: como escolher o melhor",
    excerpt:
      "Descubra qual o melhor software para fisioterapia, como escolher e como melhorar sua gestão clínica com tecnologia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "9 min",
    date: "20 Abr 2026",
  },
  {
    id: "15",
    slug: "gestao-clinica-em-fisioterapia-guia-completo-2026",
    title: "Gestão clínica em fisioterapia: guia completo 2026",
    excerpt:
      "Entenda como fazer gestão clínica em fisioterapia com eficiência, organização e tecnologia. Veja estratégias e ferramentas essenciais.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "9 min",
    date: "17 Abr 2026",
  },
  {
    id: "14",
    slug: "kinesio-tape-funciona-o-que-dizem-as-evidencias",
    title: "Kinesio Tape funciona? O que dizem as evidências",
    excerpt:
      "Kinesio Tape funciona mesmo? Veja o que a ciência diz sobre seus efeitos, indicações e quando usar na fisioterapia.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "8 min",
    date: "16 Abr 2026",
  },
  {
    id: "13",
    slug: "hernia-de-disco-tem-cura-entenda-o-tratamento",
    title: "Hérnia de disco tem cura? Entenda o tratamento",
    excerpt:
      "Hérnia de disco tem cura? Veja quando melhora, tratamentos mais indicados e quando procurar fisioterapia para aliviar a dor.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "16 Abr 2026",
  },
  {
    id: "12",
    slug: "dor-no-joelho-ao-subir-escada-causas-e-tratamento",
    title: "Dor no joelho ao subir escada: causas e tratamento",
    excerpt:
      "Dor no joelho ao subir escada pode indicar sobrecarga ou lesão. Veja causas, sintomas e quando procurar fisioterapia.",
    category: "Dor",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "8 min",
    date: "15 Abr 2026",
  },
  {
    id: "11",
    slug: "cervical-travada-o-que-fazer-na-hora-e-quando-preocupar",
    title: "Cervical travada: o que fazer na hora e quando preocupar",
    excerpt:
      "Cervical travada? Veja condutas imediatas, causas comuns, quanto tempo dura e sinais de alerta para procurar fisioterapia.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "14 Abr 2026",
  },
  {
    id: "10",
    slug: "quanto-tempo-dura-entorse-de-tornozelo",
    title: "Quanto tempo dura uma entorse de tornozelo?",
    excerpt:
      "Entenda o tempo médio de recuperação da entorse de tornozelo, fatores que aceleram melhora e sinais de alerta para buscar avaliação.",
    category: "Dor",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "8 min",
    date: "13 Abr 2026",
  },
  {
    id: "9",
    slug: "diagnostico-diferencial-cervical-vs-ombro",
    title: "Diagnóstico diferencial: cervical vs ombro na prática clínica",
    excerpt:
      "Veja como diferenciar dor cervical e dor de ombro com uma avaliação objetiva, reduzindo erro clínico e melhorando a conduta desde a primeira sessão.",
    category: "Avaliação",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "9 min",
    date: "11 Abr 2026",
  },
  {
    id: "8",
    slug: "modelos-evolucao-prontuario-fisioterapeutica",
    title: "Modelos de evolução e prontuário fisioterapêutica: guia prático",
    excerpt:
      "Aprenda a estruturar modelos de evolução e prontuário fisioterapêutica com padrão clínico, segurança jurídica e aplicação no dia a dia.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "10 min",
    date: "11 Abr 2026",
  },
  {
    id: "7",
    slug: "dor-lombar-ao-acordar-causas-e-como-aliviar-rapido",
    title: "Dor lombar ao acordar: causas e como aliviar rápido",
    excerpt:
      "Entenda por que a dor lombar ao acordar acontece, quando ela preocupa e quais estratégias práticas ajudam a aliviar já nos primeiros dias.",
    category: "Dor",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "9 min",
    date: "10 Abr 2026",
  },
  {
    id: "1",
    slug: "dor-lombar-avaliacao-clinica",
    title: "Dor lombar na prática: avaliação clínica objetiva em 7 passos",
    excerpt:
      "Como estruturar uma avaliação segura e eficiente para diferenciar origem mecânica, irritabilidade e condutas iniciais.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "8 min",
    date: "07 Abr 2026",
  },
  {
    id: "2",
    slug: "teste-ortopedico-ombro",
    title: "Testes ortopédicos de ombro: quais realmente ajudam na decisão clínica",
    excerpt:
      "Entenda como combinar testes especiais com histórico e movimento para reduzir falso positivo e melhorar o raciocínio.",
    category: "Ortopedia",
    image: "/blog/ortopedia-ombro.svg",
    readTime: "6 min",
    date: "05 Abr 2026",
  },
  {
    id: "3",
    slug: "reabilitacao-pos-operatorio-joelho",
    title: "Reabilitação de joelho no pós-operatório: progressão por critérios",
    excerpt:
      "Um framework prático para avançar fase a fase com critérios funcionais, controle de dor e qualidade de movimento.",
    category: "Reabilitação",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "9 min",
    date: "02 Abr 2026",
  },
  {
    id: "4",
    slug: "gestao-de-agenda-fisioterapia",
    title: "Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade",
    excerpt:
      "Ajustes simples de fluxo e comunicação para reduzir no-show e melhorar aderência ao plano terapêutico.",
    category: "Gestão Clínica",
    image: "/blog/gestao-clinica.svg",
    readTime: "5 min",
    date: "29 Mar 2026",
  },
  {
    id: "5",
    slug: "cervicalgia-raciocinio-clinico",
    title: "Cervicalgia: raciocínio clínico para escolher conduta sem excesso de protocolos",
    excerpt:
      "Como priorizar hipóteses funcionais, sinais de alerta e intervenções com foco em resultado clínico real.",
    category: "Avaliação",
    image: "/blog/avaliacao-clinica.svg",
    readTime: "7 min",
    date: "26 Mar 2026",
  },
  {
    id: "6",
    slug: "tendinopatia-carga-progressiva",
    title: "Tendinopatia e carga progressiva: quando avançar, manter ou regredir",
    excerpt:
      "Parâmetros objetivos de dor e função para conduzir progressão com segurança durante a reabilitação.",
    category: "Reabilitação",
    image: "/blog/reabilitacao-joelho.svg",
    readTime: "8 min",
    date: "24 Mar 2026",
  },
];

const allCategories = ["Todas", ...new Set(blogPosts.map((post) => post.category))] as const;

export default function BlogPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof allCategories)[number]>("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      const matchesCategory = activeCategory === "Todas" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-teal-50 to-blue-50" />
        <div className="pointer-events-none absolute -left-10 top-10 -z-10 h-56 w-56 rounded-full bg-teal-300/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-16 -z-10 h-64 w-64 rounded-full bg-sky-300/35 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-[#122a5a] md:text-6xl">
            Conteúdo clínico para fisioterapeutas que buscam excelência
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 md:text-xl">
            Artigos sobre avaliação, diagnóstico, reabilitação e gestão clínica baseados na prática real da fisioterapia.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-slate-400"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por patologia, teste ou conduta clínica..."
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-6">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-teal-400 hover:text-teal-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  {post.category}
                </p>
                <h2 className="mt-4 text-xl font-semibold leading-snug text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>

                <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime} de leitura</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition group-hover:border-teal-500 group-hover:text-teal-700"
                >
                  Ler artigo
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">
            Nenhum artigo encontrado para sua busca.
          </div>
        ) : null}

        {filteredPosts.length > 0 && totalPages > 1 ? (
          <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center gap-3">
            {currentPage > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
              >
                Página anterior
              </button>
            ) : null}

            <span className="text-sm text-slate-500">
              Página {currentPage} de {totalPages}
            </span>

            {currentPage < totalPages ? (
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
              >
                Próxima página
              </button>
            ) : null}
          </div>
        ) : null}
      </section>

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Kynesia. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Termos</a>
            <a href="#" className="hover:text-gray-900">Privacidade</a>
            <Link href="/#contato" className="hover:text-gray-900">Contato</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
