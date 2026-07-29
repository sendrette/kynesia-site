import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/prontuario-eletronico-fisioterapia";

export const metadata: Metadata = {
  title: "Prontuário eletrônico na fisioterapia: benefícios e segurança",
  description:
    "Entenda os benefícios do prontuário eletrônico na fisioterapia, segurança dos dados e impacto na gestão clínica.",
  alternates: { canonical: pageUrl },
};

export default function ProntuarioEletronicoPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold">
            Prontuário eletrônico na fisioterapia: benefícios, segurança e impacto na prática clínica
          </h1>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p>
            O prontuário eletrônico na fisioterapia é uma ferramenta digital utilizada para registrar avaliações,
            evoluções, reavaliações e informações clínicas dos pacientes de forma organizada, segura e acessível.
          </p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold">O que é um prontuário eletrônico?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Substitui registros em papel e centraliza informações clínicas em ambiente digital seguro.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold">Benefícios para a prática clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Organização, rastreabilidade, acesso rápido às informações e melhor acompanhamento da evolução dos pacientes.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold">Segurança dos dados e LGPD</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Sistemas modernos utilizam controle de acesso, criptografia e mecanismos de auditoria para proteção das informações.
        </p>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Resumo clínico</h2>
          <p>
            O prontuário eletrônico tornou-se uma das ferramentas mais importantes da prática fisioterapêutica moderna.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">
              Conteúdo clínico baseado em evidência para fisioterapeutas e gestores.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
