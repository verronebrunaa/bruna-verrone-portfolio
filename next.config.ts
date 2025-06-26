import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.coursera.org",
      "cursos.alura.com.br",
      "e-certificado.com"
    ],
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true, // Habilita apenas se necessário
  },
  eslint: {
    ignoreDuringBuilds: true, // Opcional para builds urgentes
  },
};

export default nextConfig;