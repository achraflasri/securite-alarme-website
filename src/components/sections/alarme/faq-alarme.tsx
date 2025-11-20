// src/components/sections/alarme/faq-alarme.tsx

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Est-ce que l’alarme fonctionne en cas de coupure de courant ?",
    answer:
      "Oui. La centrale d’alarme est équipée d’une batterie de secours qui prend le relais en cas de coupure. Les détecteurs sans-fil disposent également de leurs propres batteries.",
  },
  {
    question: "Ai-je besoin d’internet pour que l’alarme fonctionne ?",
    answer:
      "Non, l’alarme peut fonctionner sans connexion internet. En revanche, pour recevoir des notifications sur votre smartphone ou utiliser certaines fonctions à distance, une connexion internet ou GSM/4G est nécessaire.",
  },
  {
    question: "L’alarme peut-elle déranger le voisinage pour rien ?",
    answer:
      "Lors de l’installation, nous réglons la sensibilité des détecteurs et définissons des scénarios adaptés à votre usage (animaux, passages fréquents, zones à sécuriser uniquement la nuit…). L’objectif est de limiter au maximum les fausses alarmes.",
  },
  {
    question: "Est-ce que vous intervenez uniquement à Casablanca ?",
    answer:
      "Notre équipe est basée à Casablanca, mais nous pouvons intervenir sur d’autres villes au Maroc en fonction des projets (Rabat, Mohammedia, autres régions sur demande).",
  },
  {
    question: "Combien coûte un système d’alarme complet ?",
    answer:
      "Le prix dépend de la taille du site, du nombre de détecteurs, du type d’alarme (filaire, sans-fil, hybride) et des options choisies (GSM, application mobile, vidéosurveillance…). Nous proposons un devis détaillé après un premier échange ou une visite sur site.",
  },
  {
    question: "Pouvez-vous reprendre une installation d’alarme existante ?",
    answer:
      "Oui, dans de nombreux cas nous pouvons diagnostiquer et remettre en état une installation existante, ajouter des détecteurs ou moderniser la centrale si nécessaire.",
  },
];

export function FaqAlarmeSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Questions fréquentes sur les alarmes</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Voici les réponses aux questions que nos clients nous posent le plus
          souvent avant d’installer un système d’alarme dans leur maison, leur
          commerce ou leur entreprise.
        </p>
      </div>

      <dl className="mt-4 space-y-4">
        {FAQ_ITEMS.map((item) => (
          <div
            key={item.question}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <dt className="text-sm font-semibold text-emerald-400">
              {item.question}
            </dt>
            <dd className="mt-2 text-sm text-slate-300">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
