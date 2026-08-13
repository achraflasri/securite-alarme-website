import { Icon } from "@/components/ui/icon";

const FEATURES = [
  {
    title: "Détection de mouvement",
    description:
      "Des détecteurs adaptés aux volumes et aux usages identifient une présence dans les zones protégées.",
  },
  {
    title: "Détection d’ouverture",
    description:
      "Les portes, fenêtres et accès sensibles peuvent être surveillés dès leur ouverture.",
  },
  {
    title: "Alerte sonore",
    description:
      "Une sirène compatible avec le site participe à la dissuasion et signale le déclenchement sur place.",
  },
  {
    title: "Alertes à distance",
    description:
      "Selon la solution et la connectivité disponibles, des événements peuvent être transmis aux utilisateurs autorisés.",
  },
  {
    title: "Modes nuit et absence",
    description:
      "Les scénarios d’armement peuvent protéger tout le site ou seulement certaines zones selon les horaires.",
  },
  {
    title: "Alimentation de secours",
    description:
      "Une batterie peut maintenir les fonctions essentielles pendant une coupure, avec une autonomie variable selon l’équipement.",
  },
  {
    title: "Communication GSM / 4G",
    description:
      "Une liaison mobile peut compléter la connexion principale selon le matériel, la couverture réseau et la configuration retenue.",
  },
  {
    title: "Historique des événements",
    description:
      "Les solutions compatibles enregistrent les armements, désarmements et déclenchements pour faciliter le suivi.",
  },
  {
    title: "Intégration vidéo",
    description:
      "Alarme et vidéosurveillance peuvent être coordonnées lorsque les équipements et le besoin du projet le permettent.",
  },
];

export function FeaturesAlarmeSection() {
  return (
    <section id="fonctionnalites" aria-labelledby="fonctionnalites-title">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Une protection cohérente
        </p>
        <h2
          id="fonctionnalites-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          Les fonctions essentielles d’un système d’alarme
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Chaque fonction est sélectionnée et configurée selon le niveau de
          risque, le bâtiment et les habitudes des utilisateurs.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
