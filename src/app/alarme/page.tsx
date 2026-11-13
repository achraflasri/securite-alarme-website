import type { Metadata } from "next";
import Image from "next/image";
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
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Installation d’alarme anti-intrusion au Maroc",
  description:
    "IVI SYSTEME étudie, installe et maintient des systèmes d’alarme pour maisons, commerces et entreprises partout au Maroc.",
  keywords: [
    "installation alarme Maroc",
    "alarme anti-intrusion Maroc",
    "alarme maison Maroc",
    "alarme entreprise Maroc",
    "installation alarme Maroc",
  ],
  openGraph: {
    title: "Installation d’alarme anti-intrusion au Maroc",
    description:
      "Des systèmes d’alarme étudiés selon votre bâtiment, vos usages et vos risques.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Installation de systèmes d’alarme anti-intrusion",
  serviceType: "Installation et maintenance de systèmes d’alarme",
  description:
    "Étude et installation de systèmes d’alarme pour les professionnels et les particuliers partout au Maroc.",
  areaServed: {
    "@type": "Country",
    name: "Maroc",
  },
  provider: {
    "@type": "Organization",
    name: SITE.name,
    employee: {
      "@type": "Person",
      name: SITE.contactPerson,
    },
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

const ALARM_ILLUSTRATIONS = [
  {
    filename: "detecteur-mouvement-illustre.jpg",
    alt: "Détecteur de mouvement infrarouge passif sur fond sombre",
    title: "Détection de mouvement",
    description:
      "Un détecteur PIR surveille les zones définies lors de l’étude technique du site.",
    credit: "Raimond Spekking / Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Busch-Jaeger_Elektro_UP_Sensor_180_Komfort_6132-0527.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    filename: "sirene-exterieure-illustree.jpg",
    alt: "Sirène d’alarme extérieure installée en hauteur sur une maison",
    title: "Alerte extérieure",
    description:
      "La sirène extérieure participe à la dissuasion et signale le déclenchement de l’alarme.",
    credit: "Harrihealey02 / Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Home_Intruder_Alarm_system.JPG",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
];

const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
              Partout au Maroc · Plus de 30 ans d’expérience
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Installation de systèmes d’alarme anti-intrusion au Maroc
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Protégez votre maison, votre commerce ou votre entreprise avec une
              solution étudiée selon vos accès, vos usages et le niveau de
              sécurité recherché.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-700">
              Votre interlocuteur direct : {SITE.contactPerson}
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

        <section aria-labelledby="equipements-alarme">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Équipements en situation
            </p>
            <h2
              id="equipements-alarme"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Les éléments visibles d’un système d’alarme
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Le matériel exact dépend du bâtiment et de l’étude. Ces images
              illustrent trois fonctions courantes d’une installation
              anti-intrusion.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ALARM_ILLUSTRATIONS.map((item) => (
              <article
                key={item.filename}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={`${ASSET_PREFIX}/images/alarme/${item.filename}`}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <p className="mt-5 text-xs leading-5 text-slate-500">
                    Photo :{" "}
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-slate-300 underline-offset-2 transition hover:text-blue-600"
                    >
                      {item.credit}
                    </a>{" "}
                    ·{" "}
                    <a
                      href={item.licenseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-slate-300 underline-offset-2 transition hover:text-blue-600"
                    >
                      {item.license}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Images d’illustration : elles ne présentent pas des réalisations
            d’IVI SYSTEME ni un engagement sur une marque ou un modèle précis.
          </p>
        </section>

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
              Besoin d’un système d’alarme au Maroc ?
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
