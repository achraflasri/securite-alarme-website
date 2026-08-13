import { Icon, type IconName } from "@/components/ui/icon";

type Solution = {
  title: string;
  description: string;
  indication: string;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Alarme filaire",
    description:
      "Une architecture stable qui convient notamment aux sites déjà câblés ou en cours de rénovation.",
    indication: "Bâtiments pré-équipés et projets professionnels",
  },
  {
    title: "Alarme sans fil",
    description:
      "Une solution qui limite les travaux, sous réserve d’une étude correcte de la portée radio.",
    indication: "Logements, commerces et locaux existants",
  },
  {
    title: "Alarme hybride",
    description:
      "L’association d’éléments filaires et radio pour s’adapter aux contraintes de chaque zone.",
    indication: "Extensions et installations évolutives",
  },
  {
    title: "Transmission GSM / 4G",
    description:
      "Un canal mobile pour les alertes ou la continuité de communication, selon le matériel choisi.",
    indication: "Sites nécessitant un canal complémentaire",
  },
  {
    title: "Alarme connectée",
    description:
      "Des fonctions à distance disponibles selon l’application et les services associés à l’équipement.",
    indication: "Utilisateurs recherchant un suivi mobile",
  },
  {
    title: "Système professionnel sur mesure",
    description:
      "Plusieurs zones, droits utilisateurs et scénarios coordonnés selon l’organisation du site.",
    indication: "Entreprises, agences et sites complexes",
  },
];

const AUDIENCES: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Maisons et villas",
    description: "Accès, espaces de vie, dépendances et périmètre extérieur.",
    icon: "home",
  },
  {
    title: "Commerces et magasins",
    description: "Surface de vente, réserve, caisse et accès du personnel.",
    icon: "store",
  },
  {
    title: "Entreprises",
    description: "Bureaux, salles techniques, archives et zones restreintes.",
    icon: "building",
  },
  {
    title: "Banques et agences",
    description: "Protection organisée selon les procédures et contraintes du site.",
    icon: "bank",
  },
  {
    title: "Entrepôts et dépôts",
    description: "Grands volumes, quais, stocks et accès périphériques.",
    icon: "warehouse",
  },
];

export function AlarmSolutionsSection() {
  return (
    <section id="solutions" aria-labelledby="solutions-title">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Des architectures adaptées
        </p>
        <h2
          id="solutions-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          Quel type d’alarme choisir ?
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Le bon choix dépend moins d’une étiquette que de la configuration du
          site, des usages quotidiens et de la maintenance attendue.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((solution) => (
          <article
            key={solution.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-slate-950">
              {solution.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              {solution.description}
            </p>
            <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-medium leading-5 text-blue-600">
              {solution.indication}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AudienceAlarmeSection() {
  return (
    <section id="secteurs" aria-labelledby="secteurs-title">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Résidentiel et professionnel
          </p>
          <h2
            id="secteurs-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            Une étude adaptée à votre activité
          </h2>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AUDIENCES.map((audience) => (
            <li key={audience.title} className="rounded-2xl bg-blue-50 p-5">
              <Icon
                name={audience.icon}
                className="h-6 w-6 text-blue-600"
              />
              <h3 className="mt-4 font-semibold text-slate-950">{audience.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {audience.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
