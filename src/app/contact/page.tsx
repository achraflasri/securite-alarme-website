import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/forms/quote-form";
import { Icon } from "@/components/ui/icon";
import { CONTACT } from "@/config/contact";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact et demande de devis",
  description:
    "Demandez un devis pour votre projet de sécurité électronique partout au Maroc : alarme, vidéosurveillance, incendie, réseau informatique ou maintenance.",
  robots: {
    index: false,
    follow: false,
  },
};

const PROJECT_DETAILS = [
  "Type de bâtiment et ville",
  "Zones ou accès à protéger",
  "Installation existante ou nouveau projet",
  "Service recherché et contraintes particulières",
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-white px-4 py-16 text-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-0 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.14),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <nav
          className="mb-8 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Fil d’Ariane"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Accueil
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">Contact et devis</span>
        </nav>

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Contact et devis
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Demandez une étude pour votre projet de sécurité
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Décrivez le bâtiment, les accès à protéger et le service recherché.
            Nous disposerons ainsi des informations nécessaires pour préparer un
            premier échange utile.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon name="building" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">
                {SITE.contactPerson}, votre interlocuteur
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Échangez directement avec la personne qui étudiera votre besoin
                et vous accompagnera dans les prochaines étapes.
              </p>
              <address className="mt-6 space-y-5 not-italic">
                <div>
                  <p className="text-sm text-slate-500">Téléphone</p>
                  <a
                    href={CONTACT.phoneHref}
                    className="mt-1 block w-fit font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block w-fit font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Écrire sur WhatsApp
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href={CONTACT.emailHref}
                    className="mt-1 block w-fit break-all font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Zone d’intervention</p>
                  {CONTACT.baseLocation ? (
                    <p className="mt-1 font-medium text-slate-700">
                      {CONTACT.baseLocation}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-slate-600">
                    {CONTACT.serviceArea}
                  </p>
                </div>
              </address>
            </section>

            <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-xl font-semibold text-slate-950">
                Avant de nous écrire
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Ces informations rendent le premier échange plus précis :
              </p>
              <ul className="mt-5 space-y-4">
                {PROJECT_DETAILS.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm text-slate-700">
                    <Icon
                      name="check"
                      className="h-5 w-5 shrink-0 text-blue-600"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
