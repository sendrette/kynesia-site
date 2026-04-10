import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  showCta?: boolean;
};

export default function SiteHeader({ showCta = true }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Kynesia" className="flex items-center">
          <Image
            src="/kynesia-logo-continuo.svg"
            alt="Kynesia"
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/#funcionalidades" className="hover:text-slate-900">Funcionalidades</Link>
          <Link href="/#ia" className="hover:text-slate-900">IA</Link>
          <Link href="/#planos" className="hover:text-slate-900">Planos</Link>
          <Link href="/#faq" className="hover:text-slate-900">FAQ</Link>
          <Link href="/blog" className="hover:text-slate-900">Blog</Link>
          <Link href="/#contato" className="hover:text-slate-900">Contato</Link>
        </nav>

        {showCta ? (
          <Link
            href="/start-free"
            className="rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            Começar grátis
          </Link>
        ) : null}
      </div>
    </header>
  );
}