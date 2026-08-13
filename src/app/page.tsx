import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Alarmes anti-intrusion",
    description:
      "Systèmes filaires, radio ou hybrides étudiés selon les accès, les usages et le niveau de risque.",
    href: "/alarme",
    icon: "shield",
    featured: true,
  },
  {
    title: "Vidéosurveillance",
    description:
      "Caméras IP, enregistrement et consultation à distance selon les besoins du site.",
    href: "/videosurveillance",
    icon: "camera",
  },
  {
    title: "Contrôle d’accès",
    description:
      "Organisation des accès et des droits pour mieux maîtriser les zones sensibles.",
    href: "/contact",
    icon: "key",
  },
  {
    title: "Diagnostic et maintenance",
    description:
      "Contrôle d’une installation existante, recherche de panne et plan de suivi adapté.",
    href: "/contact",
    icon: "tools",
  },
];

const SECTORS: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Entreprises",
    description: "Bureaux, locaux techniques et zones à accès limité.",
    icon: "building",
  },
  {
    title: "Commerces",
    description: "Surfaces de vente, réserves, caisses et accès secondaires.",
    icon: "store",
  },
  {
    title: "Banques et agences",
    description: "Solutions étudiées selon les procédures et contraintes du site.",
    icon: "bank",
  },
  {
    title: "Entrepôts",
    description: "Grands volumes, stocks, quais et périmètres extérieurs.",
    icon: "warehouse",
  },
  {
    title: "Maisons et villas",
    description: "Accès, espaces de vie, dépendances et abords du logement.",
    icon: "home",
  },
];

const BENEFITS = [
  {
    number: "01",
    title: "Une étude avant le matériel",
    description:
      "Les accès, les habitudes et les contraintes sont analysés avant de sélectionner une technologie.",
  },
  {
    number: "02",
    title: "Une solution compréhensible",
    description:
      "Le rôle des équipements et les scénarios d’utilisation sont expliqués clairement aux utilisateurs.",
  },
  {
    number: "03",
    title: "Une installation évolutive",
    description:
      "Le système est pensé pour pouvoir accompagner les besoins futurs lorsque la technologie le permet.",
  },
  {
    number: "04",
    title: "Un suivi prévu dès le départ",
    description:
      "Les besoins de contrôle, de batterie et de maintenance sont intégrés à la réflexion initiale.",
  },
];

const PROCESS = [
  {
    number: "1",
    title: "Échange initial",
    description: "Votre site, vos usages et vos principales préoccupations.",
  },
  {
    number: "2",
    title: "Visite technique",
    description: "Repérage des accès, des contraintes et des zones sensibles.",
  },
  {
    number: "3",
    title: "Proposition",
    description: "Architecture, équipements et périmètre d’intervention détaillés.",
  },
  {
    number: "4",
    title: "Installation",
    description: "Pose, configuration, tests et prise en main du système.",
  },
];

const HOME_FAQ = [
  {
    question: "Travaillez-vous avec les particuliers et les professionnels ?",
    answer:
      "Oui. L’étude est adaptée au bâtiment et à l’usage : maison, commerce, bureaux, agence ou entrepôt.",
  },
  {
    question: "Peut-on combiner alarme et vidéosurveillance ?",
    answer:
      "Oui, lorsque les équipements sont compatibles et que cette intégration répond à un besoin concret du projet.",
  },
  {
    question: "Pouvez-vous examiner un système déjà installé ?",
    answer:
      "Un diagnostic permet d’évaluer l’état, la compatibilité et les possibilités d’évolution de l’installation existante.",
  },
  {
    question: "Quelle est votre zone d’intervention ?",
    answer:
      "Casablanca est la zone principale. Les autres demandes sont étudiées au cas par cas selon le projet et les conditions de suivi.",
  },
];

const HERO_STEPS = [
  {
    label: "Détecter",
    text: "Identifier rapidement un événement dans une zone protégée.",
  },
  {
    label: "Vérifier",
    text: "Recouper les informations selon les équipements disponibles.",
  },
  {
    label: "Réagir",
    text: "Appliquer une procédure claire avec les utilisateurs concernés.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative isolate border-b border-slate-200">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(96,165,250,0.10),transparent_28%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(37,99,235,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.35)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Sécurité électronique · Casablanca
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Sécurisez l’essentiel avec un système pensé pour votre site.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              IVI SYSTEM étudie, installe et maintient des solutions d’alarme
              anti-intrusion et de vidéosurveillance pour les professionnels et
              les particuliers à Casablanca.
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
                href="/alarme"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:border-blue-400 hover:text-blue-600"
              >
                Découvrir nos alarmes
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {[
                "Plus de 20 ans d’expérience",
                "Professionnels et particuliers",
                "Étude adaptée au site",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-blue-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-6 -z-10 rounded-full bg-blue-50 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/10">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                    Approche globale
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-slate-950">
                    De l’événement à la réaction
                  </h2>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon name="shield" className="h-6 w-6" />
                </span>
              </div>

              <ol className="space-y-1 p-4 sm:p-6">
                {HERO_STEPS.map((step, index) => (
                  <li
                    key={step.label}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl p-3 transition hover:bg-blue-50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-sm font-bold text-blue-600">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-950">{step.label}</h3>
                      <p className="mt-1 text-sm leading-5 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="border-t border-slate-200 bg-blue-50 px-6 py-4 text-xs text-slate-500">
                La configuration finale dépend de l’étude et des équipements
                retenus.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50/70" aria-label="Repères">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          <div className="py-7 sm:px-6 sm:first:pl-0">
            <p className="text-2xl font-bold text-slate-950">20+ ans</p>
            <p className="mt-1 text-sm text-slate-500">d’expérience métier</p>
          </div>
          <div className="py-7 sm:px-6">
            <p className="text-2xl font-bold text-slate-950">Casablanca</p>
            <p className="mt-1 text-sm text-slate-500">zone d’intervention principale</p>
          </div>
          <div className="py-7 sm:px-6 sm:last:pr-0">
            <p className="text-2xl font-bold text-slate-950">Sur mesure</p>
            <p className="mt-1 text-sm text-slate-500">selon le risque et le bâtiment</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-32">
        <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-100 to-white p-7 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Icon name="shield" className="h-8 w-8" />
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Service principal
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            L’alarme constitue le premier niveau de protection active.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Elle détecte un événement, déclenche les actions configurées et aide
            les utilisateurs à réagir selon une procédure préparée.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Priorité anti-intrusion
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Une alarme efficace commence par une bonne analyse.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Chaque bâtiment présente des accès, des horaires et des contraintes
            différentes. L’étude permet de définir les zones à protéger, les
            technologies adaptées et les moyens d’alerte pertinents.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Filaire, sans fil ou hybride",
              "Transmission IP ou GSM/4G",
              "Scénarios nuit et absence",
              "Intégration vidéo si compatible",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-600">
                <Icon name="check" className="h-5 w-5 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/alarme"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Explorer les systèmes d’alarme
            <Icon name="arrow-right" className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Nos domaines d’intervention
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une sécurité électronique coordonnée
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Les services peuvent être étudiés séparément ou intégrés dans une
              architecture commune lorsque le projet le justifie.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className={`group flex flex-col rounded-3xl border p-7 transition hover:-translate-y-1 ${
                  service.featured
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
                >
                  En savoir plus
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Secteurs protégés
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              La solution suit les contraintes de votre activité.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Un commerce, un entrepôt et une villa n’ont ni les mêmes accès ni
              les mêmes usages. Le périmètre de sécurité doit refléter cette
              réalité.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {SECTORS.map((sector, index) => (
              <li
                key={sector.title}
                className={`rounded-2xl border border-slate-200 bg-white p-6 ${
                  index === SECTORS.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <Icon name={sector.icon} className="h-6 w-6 text-blue-600" />
                <h3 className="mt-4 font-semibold text-slate-950">{sector.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {sector.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Pourquoi IVI SYSTEM
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une approche technique, lisible et durable
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <article key={benefit.number} className="bg-white p-7 sm:p-8">
                <span className="text-sm font-bold tracking-[0.16em] text-blue-600">
                  {benefit.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Un projet cadré
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Quatre étapes pour passer du besoin à l’installation
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-slate-200 bg-blue-50/70">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Zone d’intervention
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Une présence principale à Casablanca
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Cette proximité facilite les visites techniques et le suivi. Une
              demande située hors de Casablanca peut être évaluée selon sa
              nature et ses conditions d’intervention.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Présenter votre projet
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-950">
              Questions fréquentes
            </h2>
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {HOME_FAQ.map((item) => (
                <div key={item.question} className="py-6">
                  <dt className="font-semibold text-slate-950">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-500">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 px-6 py-14 text-center sm:px-10 lg:py-20">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Votre projet commence ici
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Parlons des zones que vous souhaitez protéger.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Quelques informations sur le bâtiment et vos contraintes suffisent
              pour préparer un premier échange utile.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Demander un devis
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
