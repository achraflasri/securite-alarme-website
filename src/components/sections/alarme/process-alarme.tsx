type Step = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Audit et visite sur site",
    subtitle: "Comprendre les risques et les contraintes",
    description:
      "Analyse des accès, des zones sensibles, de l’environnement et des habitudes d’utilisation du site.",
  },
  {
    number: "02",
    title: "Proposition de solution",
    subtitle: "Définir un système adapté",
    description:
      "Choix de l’architecture, des zones de détection, des moyens d’alerte et des intégrations pertinentes.",
  },
  {
    number: "03",
    title: "Installation et configuration",
    subtitle: "Mettre en place les équipements",
    description:
      "Pose, câblage lorsque nécessaire, programmation de la centrale et configuration des différents capteurs.",
  },
  {
    number: "04",
    title: "Tests et scénarios",
    subtitle: "Vérifier chaque zone",
    description:
      "Contrôle des déclenchements, des alertes, des modes d’armement et ajustement des paramètres convenus.",
  },
  {
    number: "05",
    title: "Prise en main",
    subtitle: "Rendre l’utilisation simple",
    description:
      "Présentation des commandes, des codes utilisateurs et des procédures à suivre en cas d’événement.",
  },
  {
    number: "06",
    title: "Maintenance et suivi",
    subtitle: "Préserver la fiabilité",
    description:
      "Un programme de contrôle peut être défini selon les équipements, les contraintes du site et le niveau de suivi souhaité.",
  },
];

export function ProcessAlarmeSection() {
  return (
    <section id="installation" aria-labelledby="installation-title">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          De l’étude au suivi
        </p>
        <h2
          id="installation-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          Comment se déroule une installation d’alarme ?
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Une méthode claire réduit les angles morts, simplifie l’utilisation et
          facilite la maintenance future.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="relative rounded-2xl border border-slate-200 bg-white p-6"
          >
            <span className="text-sm font-bold tracking-[0.16em] text-blue-600">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              {step.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-700">
              {step.subtitle}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
