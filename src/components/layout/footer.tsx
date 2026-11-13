import Link from "next/link";
import { CONTACT } from "@/config/contact";
import { PERSON } from "@/config/site";

const FOOTER_LINKS = [
  { href: "/#services", label: "Domaines d’intervention" },
  { href: "/#methode", label: "Méthode de travail" },
  { href: "/#questions", label: "Questions fréquentes" },
  { href: "/#contact", label: "Contact et devis" },
];

export function Footer() {
  return (
    <footer className="border-t border-blue-900 bg-blue-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-wide text-white">
              {PERSON.initials}
            </span>
            <div>
              <p className="font-bold text-white">{PERSON.name}</p>
              <p className="text-sm text-blue-200">{PERSON.profession}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-blue-200">
            Plus de 30 ans d’expérience dans l’étude, l’installation et la
            maintenance de systèmes de sécurité pour particuliers et
            professionnels.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Navigation</h2>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Pied de page">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-blue-200 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact direct</h2>
          <address className="mt-4 flex flex-col gap-3 text-sm not-italic text-blue-200">
            <a
              href={CONTACT.phoneHref}
              className="w-fit transition hover:text-white"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="w-fit break-all transition hover:text-white"
            >
              {CONTACT.email}
            </a>
            {CONTACT.baseLocation ? <span>{CONTACT.baseLocation}</span> : null}
            <span>{CONTACT.serviceArea}</span>
          </address>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-blue-300 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {PERSON.name}. Tous droits réservés.</p>
          <p>Interventions partout au Maroc.</p>
        </div>
      </div>
    </footer>
  );
}
