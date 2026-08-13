import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // GitHub Pages sert uniquement des fichiers statiques : aucun serveur
    // Next.js n'est disponible pour optimiser les images à la demande.
    unoptimized: true,
  },
};

export default nextConfig;
