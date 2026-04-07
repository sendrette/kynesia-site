import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Kynesia Blog | Conteúdo para Fisioterapeutas",
  description:
    "Artigos sobre fisioterapia, avaliação clínica, testes ortopédicos e reabilitação. Conteúdo profissional para fisioterapeutas.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
