const TECHNOLOGIES = [
  {
    title: "Architecture filaire ou hybride",
    description:
      "Une base pertinente pour les bâtiments pré-équipés, les rénovations et les sites professionnels exigeants.",
  },
  {
    title: "Équipements radio",
    description:
      "Une installation avec moins de câblage, étudiée en tenant compte des distances, obstacles et interférences.",
  },
  {
    title: "Transmission IP et mobile",
    description:
      "Les canaux de communication sont choisis selon la disponibilité d’internet, la couverture mobile et le niveau de continuité recherché.",
  },
  {
    title: "Gestion des utilisateurs",
    description:
      "Codes, droits et plages horaires peuvent être organisés selon les fonctions disponibles et la structure de l’équipe.",
  },
  {
    title: "Continuité électrique",
    description:
      "L’alimentation et les batteries sont dimensionnées en fonction du système retenu et des contraintes du site.",
  },
  {
    title: "Intégration à la vidéosurveillance",
    description:
      "La compatibilité entre alarme, caméras et enregistreurs est vérifiée avant toute proposition d’intégration.",
  },
];

export function TechnologiesAlarmeSection() {
  return (
    <section id="technologies" aria-labelledby="technologies-title">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Choix techniques
          </p>
          <h2
            id="technologies-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            La technologie vient après l’analyse du besoin
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Nous ne présentons pas une marque comme une réponse universelle. Le
            choix final doit tenir compte du bâtiment, du risque, de la
            maintenance et du budget. Les références réellement proposées sont
            précisées dans le devis.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TECHNOLOGIES.map((technology) => (
            <article
              key={technology.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-950">{technology.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {technology.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
