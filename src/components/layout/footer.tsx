export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Sécurité Casablanca. Tous droits réservés.
        </p>
        <p className="text-xs md:text-sm">
          Installation de systèmes d’alarme et de vidéosurveillance à Casablanca
          et partout au Maroc.
        </p>
      </div>
    </footer>
  );
}
