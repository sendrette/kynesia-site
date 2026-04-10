import Link from "next/link";

type SiteHeaderProps = {
  showCta?: boolean;
};

export default function SiteHeader({ showCta = true }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-2 md:px-6">
        <div className="flex h-12 items-center justify-between">
          <Link href="/" aria-label="Kynesia" className="text-sm font-semibold tracking-wide text-slate-800 md:text-base">
            Kynesia
          </Link>

          {showCta ? (
            <Link
              href="/start-free"
              className="rounded-md bg-teal-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-600 md:px-4 md:py-2 md:text-sm"
            >
              Começar grátis
            </Link>
          ) : null}
        </div>

        <nav className="-mx-1 mt-1 flex gap-4 overflow-x-auto px-1 pb-1 text-[13px] font-medium text-slate-600 md:mx-0 md:mt-0 md:justify-center md:gap-7 md:px-0 md:pb-0 md:text-sm">
          <Link href="/#funcionalidades" className="whitespace-nowrap hover:text-slate-900">Funcionalidades</Link>
          <Link href="/#ia" className="whitespace-nowrap hover:text-slate-900">IA</Link>
          <Link href="/#planos" className="whitespace-nowrap hover:text-slate-900">Planos</Link>
          <Link href="/#faq" className="whitespace-nowrap hover:text-slate-900">FAQ</Link>
          <Link href="/blog" className="whitespace-nowrap hover:text-slate-900">Blog</Link>
          <Link href="/#contato" className="whitespace-nowrap hover:text-slate-900">Contato</Link>
        </nav>
      </div>
    </header>
  );
}