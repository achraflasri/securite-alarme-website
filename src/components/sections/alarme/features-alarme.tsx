// src/components/sections/alarme/features-alarme.tsx

const FEATURES = [
  {
    title: "Détection de mouvement (PIR)",
    description:
      "Capteurs infrarouges capables de détecter une présence humaine dans la pièce, même sans lumière.",
  },
  {
    title: "Détection d’ouverture",
    description:
      "Capteurs sur portes et fenêtres pour signaler toute ouverture non autorisée, même sans mouvement.",
  },
  {
    title: "Sirène puissante 110–120 dB",
    description:
      "Dissuade immédiatement les intrus et alerte le voisinage en cas d'effraction.",
  },
  {
    title: "Notifications en temps réel",
    description:
      "Alertes instantanées sur votre smartphone : intrusion, panne, batterie faible, armement/désarmement…",
  },
  {
    title: "Mode Nuit / Mode Absence",
    description:
      "Sécurisez uniquement certaines zones pendant que vous dormez, ou toute la maison lorsque vous êtes absent.",
  },
  {
    title: "Backup batterie",
    description:
      "Fonctionne même en cas de coupure de courant grâce à une batterie de secours intégrée.",
  },
  {
    title: "Alarme GSM / 4G",
    description:
      "Continue de vous alerter même si le Wi-Fi tombe : SMS, appels ou notifications via réseau mobile.",
  },
  {
    title: "Journal des événements",
    description:
      "Historique complet : qui a armé, désarmé, à quelle heure et quel capteur a été déclenché.",
  },
  {
    title: "Intégration vidéosurveillance",
    description:
      "Possibilité d’associer chaque alarme à une caméra pour voir immédiatement ce qui se passe.",
  },
];

export function FeaturesAlarmeSection() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-3xl font-semibold">Fonctionnalités d’un système d’alarme</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Une alarme moderne combine plusieurs technologies pour détecter, 
          dissuader, alerter et enregistrer toute tentative d’intrusion, 
          que ce soit dans une maison, un commerce ou une entreprise.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:bg-slate-900/60"
          >
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
