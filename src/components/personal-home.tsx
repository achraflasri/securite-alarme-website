import Image from "next/image";
import { QuoteForm } from "@/components/forms/quote-form";
import { Icon, type IconName } from "@/components/ui/icon";
import { CONTACT } from "@/config/contact";
import { PERSON } from "@/config/site";

type Service = {
  title: string;
  description: string;
  details: string;
  icon: IconName;
};

const SERVICES: Service[] = [
  {
    title: "Alarmes anti-intrusion",
    description:
      "Étude et installation de systèmes filaires, radio ou hybrides pour maisons, commerces et entreprises.",
    details: "Détection, sirènes, transmission IP ou GSM et scénarios adaptés.",
    icon: "shield",
  },
  {
    title: "Caméras de surveillance",
    description:
      "Installation de caméras IP, enregistreurs NVR/DVR et accès à distance selon les besoins du site.",
    details: "Vidéosurveillance intérieure, extérieure et consultation sécurisée.",
    icon: "camera",
  },
  {
    title: "Contrôle d’accès",
    description:
      "Organisation des entrées et des droits d’accès pour mieux maîtriser les zones sensibles.",
    details: "Badges, claviers, lecteurs et gestion des autorisations.",
    icon: "key",
  },
  {
    title: "Détection incendie",
    description:
      "Systèmes de détection incendie adressables ou conventionnels étudiés selon la configuration du bâtiment.",
    details: "Détection, signalisation et organisation des équipements.",
    icon: "fire",
  },
  {
    title: "Réseaux informatiques",
    description:
      "Câblage réseau, prises RJ45, baies et organisation des connexions pour une infrastructure fiable.",
    details: "Installation et mise en ordre des équipements réseau.",
    icon: "network",
  },
  {
    title: "Diagnostic et maintenance",
    description:
      "Contrôle d’une installation existante, recherche de panne et recommandations d’évolution.",
    details: "Vérification, entretien et accompagnement après installation.",
    icon: "tools",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Échange direct",
    description:
      "Vous présentez le bâtiment, les accès à protéger et vos principales préoccupations.",
  },
  {
    number: "02",
    title: "Visite technique",
    description:
      "J’analyse les zones sensibles, les contraintes de pose et l’installation déjà présente.",
  },
  {
    number: "03",
    title: "Solution proposée",
    description:
      "Vous recevez une proposition claire avec les équipements et le périmètre d’intervention.",
  },
  {
    number: "04",
    title: "Installation et suivi",
    description:
      "La pose, la configuration, les tests et la prise en main sont réalisés avec vous.",
  },
];

const SECTORS = [
  { title: "Maisons et villas", icon: "home" as IconName },
  { title: "Commerces et magasins", icon: "store" as IconName },
  { title: "Bureaux et entreprises", icon: "building" as IconName },
  { title: "Entrepôts et dépôts", icon: "warehouse" as IconName },
];

const FAQ = [
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "J’étudie des projets partout au Maroc selon la nature de l’installation, le calendrier et les conditions de suivi.",
  },
  {
    question: "Travaillez-vous avec les particuliers et les petites entreprises ?",
    answer:
      "Oui. J’interviens aussi bien pour une maison ou une villa que pour un commerce, des bureaux, un dépôt ou une petite entreprise.",
  },
  {
    question: "Peut-on installer une alarme et des caméras ensemble ?",
    answer:
      "Oui, lorsque l’étude confirme que les équipements et les usages sont compatibles. L’objectif est d’obtenir un ensemble simple à utiliser et cohérent.",
  },
  {
    question: "Pouvez-vous examiner une ancienne installation ?",
    answer:
      "Oui. Un diagnostic permet de vérifier l’état du système, de rechercher une panne et d’identifier les possibilités de maintenance ou d’évolution.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Vous pouvez appeler, écrire sur WhatsApp ou remplir le formulaire. Indiquez la ville, le type de bâtiment et le service recherché pour préparer un premier échange utile.",
  },
];

const ALARM_IMAGES = [
  {
    filename: "detecteur-mouvement-illustre.jpg",
    alt: "Détecteur de mouvement infrarouge passif",
    title: "Détection de mouvement",
    credit: "Raimond Spekking / CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Busch-Jaeger_Elektro_UP_Sensor_180_Komfort_6132-0527.jpg",
  },
  {
    filename: "sirene-exterieure-illustree.jpg",
    alt: "Sirène d’alarme extérieure installée sur une maison",
    title: "Alerte extérieure",
    credit: "Harrihealey02 / CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Home_Intruder_Alarm_system.JPG",
  },
];

const ASSET_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${PERSON.siteUrl}/#said-lasri`,
      name: PERSON.name,
      url: PERSON.siteUrl,
      jobTitle: PERSON.profession,
      telephone: CONTACT.phoneDisplay,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "MA",
      },
      knowsAbout: [
        "Alarmes anti-intrusion",
        "Caméras de surveillance",
        "Vidéosurveillance",
        "Contrôle d’accès",
        "Détection incendie",
        "Réseaux informatiques",
        "Maintenance de systèmes de sécurité",
      ],
    },
    {
      "@type": "Service",
      "@id": `${PERSON.siteUrl}/#securite-electronique`,
      name: "Installation et maintenance de systèmes de sécurité électronique",
      serviceType:
        "Alarmes, caméras de surveillance, contrôle d’accès, incendie et réseaux",
      provider: {
        "@id": `${PERSON.siteUrl}/#said-lasri`,
      },
      areaServed: {
        "@type": "Country",
        name: "Maroc",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Particuliers et professionnels",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export function PersonalHomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
        }}
      />

      <section id="accueil" className="relative isolate border-b border-slate-200">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(96,165,250,0.12),transparent_30%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(37,99,235,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Said Lasri · Intervention partout au Maroc
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Installation d’alarmes et de caméras de surveillance au Maroc
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Je mets plus de 30 ans d’expérience au service des particuliers,
              commerces et entreprises pour étudier, installer et maintenir
              leurs systèmes de sécurité électronique.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Discuter sur WhatsApp
                <Icon name="arrow-right" className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:border-blue-400 hover:text-blue-700"
              >
                Appeler le {CONTACT.phoneDisplay}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {[
                "Plus de 30 ans d’expérience",
                "Interlocuteur unique",
                "Particuliers et professionnels",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-8 -z-10 rounded-full bg-blue-100 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-blue-900 bg-blue-950 text-white shadow-2xl shadow-blue-950/25">
              <div className="flex min-h-72 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_58%)] p-8">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-blue-400/50 bg-blue-900 shadow-2xl">
                  <span className="text-5xl font-bold tracking-tight">SL</span>
                </div>
              </div>
              <div className="border-t border-blue-900 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  Expérience de terrain
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Said Lasri</h2>
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  Un contact direct pour analyser votre besoin, expliquer les
                  choix techniques et suivre l’installation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50/70" aria-label="Repères">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          <div className="py-7 sm:px-6 sm:first:pl-0">
            <p className="text-2xl font-bold text-slate-950">30+ ans</p>
            <p className="mt-1 text-sm text-slate-500">d’expérience métier</p>
          </div>
          <div className="py-7 sm:px-6">
            <p className="text-2xl font-bold text-slate-950">Tout le Maroc</p>
            <p className="mt-1 text-sm text-slate-500">selon la nature du projet</p>
          </div>
          <div className="py-7 sm:px-6 sm:last:pr-0">
            <p className="text-2xl font-bold text-slate-950">Un seul contact</p>
            <p className="mt-1 text-sm text-slate-500">de l’étude au suivi</p>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-8 lg:py-32"
      >
        <div className="rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Une expérience personnelle
          </p>
          <p className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">30+</p>
          <p className="mt-2 text-lg text-blue-100">années dans la sécurité électronique</p>
          <div className="mt-8 h-px bg-blue-800" />
          <p className="mt-7 text-sm leading-7 text-blue-100">
            Chaque projet est étudié selon le bâtiment, les accès, les usages et
            les contraintes techniques — pas à partir d’une solution standard
            imposée.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            À propos de Said Lasri
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            L’expérience d’un professionnel, avec la simplicité d’un contact direct
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            J’accompagne les particuliers et les professionnels dans leurs
            projets d’alarme, de vidéosurveillance, de contrôle d’accès, de
            détection incendie et de réseau informatique. Mon rôle commence par
            l’écoute du besoin et continue jusqu’aux tests et à la prise en main.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Pour une maison, une villa, un commerce, des bureaux ou un entrepôt,
            l’objectif reste le même : proposer une installation cohérente,
            compréhensible et adaptée au site.
          </p>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-blue-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Domaines d’intervention
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Des solutions de sécurité étudiées pour votre bâtiment
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Les services peuvent être installés séparément ou intégrés dans
              une solution globale lorsque le projet le justifie.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
                  {service.details}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={`${ASSET_PREFIX}/images/alarme/sirene-exterieure-illustree.jpg`}
                alt="Sirène d’alarme extérieure installée sur la façade d’une maison"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Alarme anti-intrusion
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Détecter rapidement et organiser une réaction claire
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Une installation d’alarme efficace tient compte des ouvertures,
                des zones de passage, des horaires et des habitudes des
                utilisateurs. Le système peut être filaire, sans fil ou hybride.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Home_Intruder_Alarm_system.JPG"
                target="_blank"
                rel="noreferrer"
                className="mt-5 block text-xs text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-blue-700"
              >
                Photo : Harrihealey02 / CC BY-SA 3.0
              </a>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={`${ASSET_PREFIX}/images/services/camera-maison-mur.jpg`}
                alt="Caméra de surveillance fixée sur le mur extérieur d’un bâtiment résidentiel"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Caméras de surveillance
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Voir les zones utiles et retrouver les événements importants
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Une solution Hikvision ou Dahua peut associer caméras IP,
                enregistreur et consultation à distance. Le modèle est choisi
                selon le bâtiment et l’usage attendu.
              </p>
              <a
                href="https://www.pexels.com/photo/cctv-camera-mounted-on-the-wall-13072973/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 block text-xs text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-blue-700"
              >
                Photo : Towfiqu barbhuiya / Pexels
              </a>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="relative aspect-[4/3] bg-white">
              <Image
                src={`${ASSET_PREFIX}/images/services/centrale-incendie-licence-libre.jpg`}
                alt="Centrale de détection et d’alarme incendie installée dans un bâtiment"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="border-t border-slate-100 p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Détection incendie
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Systèmes adressables et conventionnels
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                La centrale de détection pilote les zones, les alertes et les
                équipements d’un système incendie étudié selon l’organisation
                du bâtiment.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Fire_alarm_panel_in_a_apartment.jpg"
                target="_blank"
                rel="noreferrer"
                className="mt-5 block text-xs text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-blue-700"
              >
                Photo : Dquai / CC BY-SA 4.0
              </a>
            </div>
          </article>
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">
          Marques et modèles présentés à titre d’exemple, sans affiliation ni
          engagement sur l’équipement définitif du projet.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Équipements d’alarme
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Deux fonctions visibles d’une installation anti-intrusion
            </h2>
          </div>

          <div className="mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {ALARM_IMAGES.map((item) => (
              <figure
                key={item.filename}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={`${ASSET_PREFIX}/images/alarme/${item.filename}`}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-xs leading-5 text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-blue-700"
                  >
                    Photo : {item.credit}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Images d’illustration : le matériel définitif dépend de l’étude et
            ne constitue pas un engagement sur une marque ou un modèle précis.
          </p>
        </div>
      </section>

      <section id="methode" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Méthode de travail
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un projet suivi personnellement, étape par étape
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Vous échangez avec la même personne pour comprendre le besoin,
              préparer la solution et suivre l’installation.
            </p>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {PROCESS.map((step) => (
              <li key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-sm font-bold tracking-[0.16em] text-blue-700">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((sector) => (
            <div key={sector.title} className="rounded-2xl bg-blue-50 p-6">
              <Icon name={sector.icon} className="h-6 w-6 text-blue-700" />
              <p className="mt-4 font-semibold text-slate-950">{sector.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="questions" className="border-y border-slate-200 bg-blue-50/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Avant de parler de votre projet
            </h2>
          </div>

          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQ.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="font-semibold text-slate-950">{item.question}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Contact et devis
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Parlez directement de votre projet avec Said Lasri
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Indiquez le type de bâtiment, la ville et les zones à protéger pour
            préparer un premier échange utile.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl bg-blue-950 p-7 text-white sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold">
                SL
              </span>
              <h3 className="mt-6 text-2xl font-semibold">Contact direct</h3>
              <address className="mt-6 space-y-5 not-italic">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-300">Téléphone</p>
                  <a href={CONTACT.phoneHref} className="mt-1 block w-fit font-semibold hover:text-blue-200">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-300">Email</p>
                  <a href={CONTACT.emailHref} className="mt-1 block w-fit break-all font-semibold hover:text-blue-200">
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-300">Zone</p>
                  <p className="mt-1 text-blue-100">Interventions partout au Maroc</p>
                </div>
              </address>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-7">
              <h3 className="font-semibold text-slate-950">Informations utiles</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {["Ville et type de bâtiment", "Service recherché", "Installation existante ou nouveau projet", "Zones ou accès à protéger"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
