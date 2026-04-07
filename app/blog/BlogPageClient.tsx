"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Ortopedia" | "Avaliação" | "Reabilitação" | "Gestão Clínica";
  image: string;
  readTime: string;
  date: string;
};

const blogPosts: BlogPost[] = [
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

  return (
    <main className="bg-white text-gray-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-21 w-full max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Kynesia
          </Link>

          <nav className="hidden items-center gap-8 text-base font-medium text-slate-600 lg:flex">
            <Link href="/#funcionalidades" className="transition hover:text-slate-900">Funcionalidades</Link>
            <Link href="/#ia" className="transition hover:text-slate-900">IA</Link>
            <Link href="/#planos" className="transition hover:text-slate-900">Planos</Link>
            <Link href="/#faq" className="transition hover:text-slate-900">FAQ</Link>
            <Link href="/#contato" className="transition hover:text-slate-900">Contato</Link>
          </nav>

          <Link
            href="/checkout?plan=start"
            className="rounded-2xl bg-teal-500 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600"
          >
            Começar grátis
          </Link>
        </div>
      </header>

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
          {filteredPosts.map((post) => (
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
