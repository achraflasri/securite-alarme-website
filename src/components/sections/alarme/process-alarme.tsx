// src/components/sections/alarme/process-alarme.tsx

type Step = {
  title: string;
  subtitle: string;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "1. Audit & visite sur site",
    subtitle: "Comprendre vos risques et vos contraintes",
    description:
      "Nous analysons les accès, les zones sensibles, l’environnement et vos habitudes d’utilisation (horaires, personnels, zones ouvertes au public…).",
  },
  {
    title: "2. Proposition de solution",
    subtitle: "Un système d’alarme adapté à votre site",
    description:
      "Nous définissons le type d’alarme (filaire, sans-fil, hybride), le nombre de détecteurs, de sirènes et les éventuelles intégrations vidéosurveillance.",
  },
  {
    title: "3. Installation & câblage",
    subtitle: "Travaux propres, avec le moins de gêne possible",
    description:
      "Nos techniciens installent les équipements, réalisent le câblage si nécessaire et configurent la centrale ainsi que les différents capteurs.",
  },
  {
    title: "4. Tests & scénarios",
    subtitle: "Vérification de chaque zone et chaque capteur",
    description:
      "Nous testons les déclenchements, les sirènes, les notifications, les modes Nuit/Absence, et ajustons les paramètres selon vos attentes.",
  },
  {
    title: "5. Formation des utilisateurs",
    subtitle: "Utilisation simple au quotidien",
    description:
      "Nous expliquons à vos équipes ou à votre famille comment armer/désarmer, gérer les codes utilisateurs, l’application mobile et les procédures en cas d’alarme.",
  },
  {
    title: "6. Maintenance & suivi",
    subtitle: "Contrôles réguliers et assistance",
    description:
      "Nous proposons des contrats de maintenance pour vérifier le bon fonctionnement de l’installation, des batteries et des équipements de sécurité.",
  },
];

export function ProcessAlarmeSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">
          Comment se déroule une installation d’alarme ?
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          De l’audit initial jusqu’à la maintenance, nous vous accompagnons à
          chaque étape pour garantir un système d’alarme efficace, fiable et
          facile à utiliser au quotidien.
        </p>
      </div>

      <ol className="mt-4 space-y-4">
        {STEPS.map((step) => (
          <li
            key={step.title}
            className="relative flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="mt-1 h-8 w-8 flex-shrink-0 rounded-full border border-emerald-500/60 bg-emerald-500/10 text-center text-sm font-semibold leading-8 text-emerald-300">
              {step.title.split(".")[0]}
            </div>
            <div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-emerald-300">{step.subtitle}</p>
              <p className="mt-2 text-sm text-slate-300">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
