import Image from "next/image";
import Link from "next/link";

const WHATSAPP_HREF =
  "https://wa.me/5512996304111?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Kynesia";

const links = [
  { href: "/planos", label: "Planos" },
  { href: "/blog", label: "Blog" },
  { href: "/cancelar-assinatura", label: "Cancelar Assinatura" },
  { href: "#", label: "Termos" },
  { href: "#", label: "Privacidade" },
  { href: "#contato", label: "Contato" },
];

export default function SiteFooter() {
  return (
    <footer id="contato" className="k-footer" style={{ background: "var(--k-deep)", color: "#fff" }}>
      <div className="k-wrap" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-10">
          <div style={{ flex: "1 1 280px", maxWidth: 360 }}>
            <Image
              src="/brand/kynesia-logo-horizontal.svg"
              alt="Kynesia"
              width={1636}
              height={456}
              style={{ display: "block", height: 38, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.95 }}
            />
            <p className="mt-[18px] text-[15px] leading-[1.65]" style={{ color: "#c9e0d9" }}>
              Gerenciamento clínico para fisioterapeutas.
            </p>
          </div>

          <div style={{ flex: "1 1 220px" }}>
            <h2 className="k-eyebrow" style={{ color: "var(--k-mint)" }}>Contato</h2>
            <div className="mt-4 flex flex-col gap-2.5 text-[15px]">
              <a className="k-fl" href="mailto:kynesia.fisio@gmail.com">kynesia.fisio@gmail.com</a>
              <a className="k-fl" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">WhatsApp (12) 99630-4111</a>
              <a
                className="k-fl"
                href="https://www.instagram.com/kynesia.fisio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir perfil do Instagram da Kynesia"
              >
                Instagram @kynesia.fisio
              </a>
              <span style={{ color: "#c9e0d9" }}>Atendimento: seg a sex, 09h às 18h</span>
            </div>
          </div>

          <div style={{ flex: "1 1 200px" }}>
            <h2 className="k-eyebrow" style={{ color: "var(--k-mint)" }}>Links</h2>
            <div className="mt-4 flex flex-col gap-2.5">
              {links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.label} href={link.href} className="k-fl">{link.label}</Link>
                ) : (
                  <a key={link.label} href={link.href} className="k-fl">{link.label}</a>
                ),
              )}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 text-[13.5px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.12)", color: "#9fc0b7" }}
        >
          © {new Date().getFullYear()} Kynesia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
