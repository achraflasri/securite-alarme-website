// src/components/sections/alarme/problems-alarme.tsx

const PROBLEMS = [
  {
    title: "Risque de cambriolage",
    description:
      "Portes forcées, fenêtres fracturées, intrusion en quelques minutes lorsque le logement ou le local est vide.",
  },
  {
    title: "Locaux vides la nuit",
    description:
      "Magasins, bureaux, entrepôts ou agences bancaires laissés sans présence humaine plusieurs heures par jour.",
  },
  {
    title: "Présence de biens de valeur",
    description:
      "Stock marchandises, matériel informatique, coffres, produits sensibles… une cible idéale sans protection.",
  },
  {
    title: "Zones difficiles à surveiller",
    description:
      "Parkings, arrières de bâtiments, accès de service, toits ou murs mitoyens utilisés pour pénétrer discrètement.",
  },
  {
    title: "Absence ou déplacements fréquents",
    description:
      "Voyages, résidences secondaires, fermeture annuelle… le site reste vulnérable si aucune alarme n’est en place.",
  },
  {
    title: "Réaction trop tardive",
    description:
      "Sans détection ni sirène, l’intrusion est souvent découverte plusieurs heures après, quand les dégâts sont déjà faits.",
  },
];

export function ProblemsAlarmeSection() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-3xl font-semibold">
          Quels problèmes une alarme résout-elle ?
        </h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Un système d’alarme anti-intrusion ne se limite pas à faire du bruit :
          il permet de détecter rapidement une tentative d’accès, de dissuader
          l’intrus et de vous alerter instantanément, où que vous soyez.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {PROBLEMS.map((problem) => (
          <div
            key={problem.title}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="mb-2 text-xs font-semibold uppercase text-emerald-400">
              Problème fréquent
            </div>
            <h3 className="text-lg font-semibold">{problem.title}</h3>
            <p className="mt-2 text-sm text-slate-300">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
