import type { Metadata } from "next";
import Link from "next/link";
import { ProblemsAlarmeSection } from "@/components/sections/alarme/problems-alarme";
import { FeaturesAlarmeSection } from "@/components/sections/alarme/features-alarme";
import { TechnologiesAlarmeSection } from "@/components/sections/alarme/technologies-alarme";
import { ProcessAlarmeSection } from "@/components/sections/alarme/process-alarme";
import { FaqAlarmeSection } from "@/components/sections/alarme/faq-alarme";
import {
  AlarmSolutionsSection,
  AudienceAlarmeSection,
} from "@/components/sections/alarme/solutions-alarme";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Installation d’alarme anti-intrusion à Casablanca",
  description:
    "Étude, installation et maintenance de systèmes d’alarme anti-intrusion pour maisons, commerces et entreprises à Casablanca.",
  keywords: [
    "installation alarme Casablanca",
    "alarme anti-intrusion Casablanca",
    "alarme maison Casablanca",
    "alarme entreprise Casablanca",
  ],
  openGraph: {
    title: "Installation d’alarme anti-intrusion à Casablanca",
    description:
      "Des systèmes d’alarme étudiés selon votre bâtiment, vos usages et vos risques.",
  },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Installation de systèmes d’alarme anti-intrusion",
  serviceType: "Installation et maintenance de systèmes d’alarme",
  description:
    "Étude et installation de systèmes d’alarme pour les professionnels et les particuliers à Casablanca.",
  areaServed: {
    "@type": "City",
    name: "Casablanca",
  },
  provider: {
    "@type": "Organization",
    name: "IVI SYSTEM",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Entreprises, commerces et particuliers",
  },
};

const HERO_POINTS = [
  "Architecture adaptée au bâtiment",
  "Scénarios définis selon vos usages",
  "Prise en main et suivi de l’installation",
];

export default function AlarmePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SERVICE_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate border-b border-slate-200">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.16),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(96,165,250,0.10),transparent_30%)]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <nav
              className="mb-8 flex items-center gap-2 text-sm text-slate-500"
              aria-label="Fil d’Ariane"
            >
              <Link href="/" className="transition hover:text-blue-600">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-700">Alarmes</span>
            </nav>

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Casablanca · Plus de 20 ans d’expérience
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Installation de systèmes d’alarme anti-intrusion à Casablanca
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Protégez votre maison, votre commerce ou votre entreprise avec une
              solution étudiée selon vos accès, vos usages et le niveau de
              sécurité recherché.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Demander un devis
                <Icon name="arrow-right" className="h-5 w-5" />
              </Link>
              <Link
                href="#installation"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-600"
              >
                Voir notre méthode
              </Link>
            </div>
          </div>

          <aside className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Icon name="shield" className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">
              Une protection pensée pour votre site
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              La proposition technique est construite après analyse, pas à
              partir d’un kit standard imposé.
            </p>
            <ul className="mt-6 space-y-4">
              {HERO_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 sm:py-24 lg:space-y-32 lg:px-8 lg:py-32">
        <ProblemsAlarmeSection />
        <AlarmSolutionsSection />
        <FeaturesAlarmeSection />
        <TechnologiesAlarmeSection />
        <ProcessAlarmeSection />
        <AudienceAlarmeSection />
        <FaqAlarmeSection />

        <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 px-6 py-12 text-center sm:px-10 lg:py-16">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Étudions votre besoin
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Besoin d’un système d’alarme à Casablanca ?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Décrivez votre bâtiment, vos contraintes et les zones à protéger.
              Nous pourrons préparer un premier cadrage de votre projet.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Obtenir un devis
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
