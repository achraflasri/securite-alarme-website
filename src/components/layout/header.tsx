import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { CONTACT } from "@/config/contact";
import { PERSON } from "@/config/site";

const NAV_ITEMS = [
  { href: "/#expertise", label: "À propos" },
  { href: "/#services", label: "Services" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#contact", label: "Contact" },
];

const navLinkClasses =
  "rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:text-blue-600";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl"
          aria-label={`${PERSON.name} — Accueil`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-900/15">
            {PERSON.initials}
          </span>
          <span>
            <span className="block font-bold leading-tight text-slate-950">
              {PERSON.name}
            </span>
            <span className="hidden text-xs leading-tight text-slate-500 sm:block">
              {PERSON.profession}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-3 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 lg:inline-flex"
        >
          Écrire sur WhatsApp
        </a>

        <details className="group relative lg:hidden">
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
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Écrire sur WhatsApp
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
