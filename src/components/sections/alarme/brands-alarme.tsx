// src/components/sections/alarme/brands-alarme.tsx

type Brand = {
  name: string;
  type: string;
  description: string;
};

const BRANDS: Brand[] = [
  {
    name: "Hikvision",
    type: "Caméras & enregistreurs",
    description:
      "Leader mondial en vidéosurveillance : caméras IP, enregistreurs NVR/DVR, solutions pour commerces, banques et entreprises.",
  },
  {
    name: "Dahua",
    type: "Caméras & enregistreurs",
    description:
      "Solutions complètes pour la vidéosurveillance professionnelle : haute définition, vision nocturne, analyse intelligente.",
  },
  {
    name: "AJAX",
    type: "Systèmes d’alarme sans-fil",
    description:
      "Systèmes d’alarme radio haut de gamme, design moderne, application mobile intuitive et grande fiabilité.",
  },
  {
    name: "Paradox",
    type: "Systèmes d’alarme",
    description:
      "Alarmes reconnues pour leur robustesse, utilisées depuis des années dans les commerces et entreprises.",
  },
  {
    name: "DSC",
    type: "Systèmes d’alarme",
    description:
      "Solutions d’alarme filaires et hybrides pour les projets résidentiels et professionnels.",
  },
  {
    name: "Autres marques",
    type: "Selon le projet",
    description:
      "Nous sélectionnons les technologies en fonction de vos besoins, de votre budget et du niveau de sécurité souhaité.",
  },
];

export function BrandsAlarmeSection() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-3xl font-semibold">
          Technologies & marques que nous installons
        </h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Nous travaillons avec des marques reconnues dans le domaine de la
          sécurité électronique pour garantir la fiabilité, la durabilité et la
          compatibilité de vos systèmes d’alarme et de vidéosurveillance.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{brand.name}</h3>
              <span className="text-xs font-medium uppercase text-emerald-400">
                {brand.type}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              {brand.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
