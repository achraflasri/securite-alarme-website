type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "L’alarme fonctionne-t-elle pendant une coupure de courant ?",
    answer:
      "La plupart des centrales professionnelles prévoient une alimentation de secours. L’autonomie réelle dépend toutefois de la batterie, du nombre d’équipements et de leur consommation ; elle doit être vérifiée pour chaque installation.",
  },
  {
    question: "Une connexion internet est-elle indispensable ?",
    answer:
      "La détection locale peut fonctionner sans internet. La consultation à distance et certaines notifications nécessitent en revanche un canal disponible, par exemple internet ou une liaison GSM/4G selon l’équipement.",
  },
  {
    question: "Comment limiter les fausses alarmes ?",
    answer:
      "Le placement des détecteurs, leur technologie et leur réglage sont essentiels. L’audit prend notamment en compte les animaux, les courants d’air, les sources de chaleur et les passages habituels.",
  },
  {
    question: "Intervenez-vous en dehors de Casablanca ?",
    answer:
      "Casablanca est notre zone principale. Les projets situés dans d’autres villes sont étudiés au cas par cas selon leur nature, leur calendrier et les conditions de suivi.",
  },
  {
    question: "Combien coûte un système d’alarme ?",
    answer:
      "Le budget dépend de la surface, des accès, du nombre de zones, de la technologie et des options de transmission. Un échange initial puis, si nécessaire, une visite permettent d’établir un devis cohérent.",
  },
  {
    question: "Une installation existante peut-elle être conservée ?",
    answer:
      "Un diagnostic permet de contrôler la centrale, les détecteurs, le câblage et les batteries. La réutilisation ou le remplacement des éléments est ensuite proposé selon leur état et leur compatibilité.",
  },
];

export function FaqAlarmeSection() {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          Questions fréquentes
        </p>
        <h2
          id="faq-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          Bien préparer votre projet d’alarme
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Ces réponses donnent un cadre général. Les caractéristiques finales
          restent celles des équipements retenus dans votre proposition.
        </p>
      </div>

      <dl className="mt-8 grid gap-4 md:grid-cols-2">
        {FAQ_ITEMS.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <dt className="font-semibold leading-6 text-slate-950">
              {item.question}
            </dt>
            <dd className="mt-3 text-sm leading-6 text-slate-500">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
