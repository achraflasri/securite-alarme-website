import Link from "next/link";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/alarme", label: "Alarmes" },
  { href: "/videosurveillance", label: "Vidéosurveillance" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Nom de la société */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/40">
            <span className="text-sm font-bold text-emerald-400">SEC</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">
              Sécurité Casablanca
            </p>
            <p className="text-xs text-slate-400">
              Alarmes & vidéosurveillance
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bouton principal */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-emerald-500/70 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
