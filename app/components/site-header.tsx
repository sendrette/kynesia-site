import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  showCta?: boolean;
};

export default function SiteHeader({ showCta = true }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-3 py-1.5 md:flex-row md:items-center md:justify-between md:gap-3 md:px-6 md:py-1.5">
        <div className="flex items-center justify-between gap-2 md:contents">
          <Link href="/" aria-label="Kynesia" className="inline-flex items-center">
            <Image
              src="/kynesia-logo-continuo.svg"
              alt="Kynesia"
              width={240}
              height={64}
              priority
              className="h-auto w-[145px] md:w-[165px]"
            />
          </Link>

          {showCta ? (
            <Link
              href="/start-free"
              className="inline-flex rounded-md bg-teal-500 px-2 py-1 text-[10px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:hidden"
            >
              Começar grátis
            </Link>
          ) : null}
        </div>

        <nav className="flex w-full flex-nowrap items-center justify-between gap-1 px-0 text-[11px] font-medium text-slate-600 md:gap-5 md:px-0 md:text-[13px]">
          <Link href="/#funcionalidades" className="whitespace-nowrap transition hover:text-slate-900">Funcionalidades</Link>
          <Link href="/#ia" className="whitespace-nowrap transition hover:text-slate-900">IA</Link>
          <Link href="/#planos" className="whitespace-nowrap transition hover:text-slate-900">Planos</Link>
          <Link href="/#faq" className="whitespace-nowrap transition hover:text-slate-900">FAQ</Link>
          <Link href="/blog" className="whitespace-nowrap transition hover:text-slate-900">Blog</Link>
          <Link href="/#contato" className="whitespace-nowrap transition hover:text-slate-900">Contato</Link>
        </nav>

        {showCta ? (
          <Link
            href="/start-free"
            className="hidden rounded-md bg-teal-500 px-2.5 py-1.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:inline-flex"
          >
            Começar grátis
          </Link>
        ) : null}
      </div>
    </header>
  );
}