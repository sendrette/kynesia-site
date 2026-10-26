import Image from "next/image";
import Link from "next/link";
import ReadingProgress from "./reading-progress";

type SiteHeaderProps = {
  showCta?: boolean;
  showProgress?: boolean;
};

const navItems = [
  { href: "/#funcionalidades", label: "Funcionalidades" },
  { href: "/#ia", label: "IA" },
  { href: "/#planos", label: "Planos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteHeader({ showCta = true, showProgress = false }: SiteHeaderProps) {
  return (
    <header className="k-hdr">
      <div className="k-wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-4 md:gap-x-8">
        <Link href="/" aria-label="Kynesia, início" className="block">
          <Image
            src="/brand/kynesia-logo-horizontal.svg"
            alt="Kynesia"
            width={1636}
            height={456}
            priority
            style={{ display: "block", height: 40, width: "auto" }}
          />
        </Link>

        <nav aria-label="Principal" className="order-3 flex w-full flex-wrap items-center gap-x-6 gap-y-1 md:order-none md:w-auto md:gap-x-7">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="k-nl py-1">
              {item.label}
            </Link>
          ))}
        </nav>

        {showCta ? (
          <Link href="/start-free" className="k-btn k-btn-p" style={{ minHeight: 44, padding: "0 22px", fontSize: 15 }}>
            Começar grátis
          </Link>
        ) : null}
      </div>
      {showProgress ? <ReadingProgress /> : null}
    </header>
  );
}
