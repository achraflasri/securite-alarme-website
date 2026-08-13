import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/config/contact";

const FOOTER_LINKS = [
  { href: "/alarme", label: "Systèmes d’alarme" },
  { href: "/videosurveillance", label: "Vidéosurveillance" },
  { href: "/contact", label: "Contact & devis" },
];

const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/brand/ivi-system-logo.png`;

export function Footer() {
  return (
    <footer className="border-t border-blue-900 bg-blue-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-md">
          <div className="relative h-20 w-48 overflow-hidden rounded-xl bg-white">
            <Image
              src={logoSrc}
              alt="IVI SYSTEM"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-blue-200">
            Étude, installation et maintenance de systèmes de sécurité
            électronique pour les professionnels et les particuliers.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Nos solutions</h2>
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
          <h2 className="text-sm font-semibold text-white">Nous contacter</h2>
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
            <span>{CONTACT.city}</span>
          </address>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-blue-300 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} IVI SYSTEM. Tous droits réservés.</p>
          <p>Alarmes et vidéosurveillance à Casablanca.</p>
        </div>
      </div>
    </footer>
  );
}
