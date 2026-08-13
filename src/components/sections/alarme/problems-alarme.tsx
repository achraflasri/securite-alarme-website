const PROBLEMS = [
  {
    title: "Risque d’intrusion",
    description:
      "Une porte forcée ou une fenêtre fracturée peut suffire lorsqu’un logement ou un local reste sans surveillance.",
  },
  {
    title: "Locaux vides la nuit",
    description:
      "Magasins, bureaux, entrepôts et agences peuvent rester plusieurs heures sans présence humaine.",
  },
  {
    title: "Biens et données sensibles",
    description:
      "Stocks, matériel informatique, documents et équipements professionnels nécessitent une protection adaptée.",
  },
  {
    title: "Accès difficiles à surveiller",
    description:
      "Parkings, accès de service, terrasses et zones périphériques demandent une stratégie de détection cohérente.",
  },
  {
    title: "Absences fréquentes",
    description:
      "Déplacements, fermetures et résidences inoccupées augmentent le besoin de détection et d’alerte à distance.",
  },
  {
    title: "Réaction trop tardive",
    description:
      "Une alerte configurée selon le site aide à identifier plus tôt un événement et à appliquer la procédure prévue.",
  },
];

export function ProblemsAlarmeSection() {
  return (
    <section id="risques" aria-labelledby="risques-title">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Anticiper les risques
        </p>
        <h2
          id="risques-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          Quels problèmes une alarme résout-elle ?
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Un système anti-intrusion associe détection, dissuasion et transmission
          d’alertes. Son efficacité dépend surtout d’une étude sérieuse des accès,
          des usages et des zones sensibles.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem, index) => (
          <article
            key={problem.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-950">
              {problem.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {problem.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
