import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/alarme", label: "Alarmes" },
  { href: "/videosurveillance", label: "Vidéosurveillance" },
  { href: "/contact", label: "Contact" },
];

const navLinkClasses =
  "rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:text-blue-600";

const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/brand/ivi-system-logo.png`;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group -ml-2 flex items-center rounded-lg"
          aria-label="IVI SYSTEM — Accueil"
        >
          <span className="relative block h-14 w-36 overflow-hidden sm:h-16 sm:w-44">
            <Image
              src={logoSrc}
              alt="IVI SYSTEM"
              fill
              priority
              sizes="(min-width: 640px) 176px, 144px"
              className="object-cover"
            />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-3 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
        >
          Demander un devis
        </Link>

        <details className="group relative md:hidden">
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 transition hover:border-blue-400 hover:text-blue-600 [&::-webkit-details-marker]:hidden"
            aria-label="Afficher ou masquer le menu"
          >
            <Icon name="menu" className="h-6 w-6 group-open:hidden" />
            <Icon name="close" className="hidden h-6 w-6 group-open:block" />
          </summary>

          <div className="absolute right-0 top-14 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-300 bg-white p-3 shadow-2xl shadow-blue-900/10">
            <nav className="flex flex-col" aria-label="Navigation mobile">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Demander un devis
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
