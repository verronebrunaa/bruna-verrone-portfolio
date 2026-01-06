import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: {
    root: __dirname,
  },
  images: {
    domains: [
      "www.coursera.org",
      "cursos.alura.com.br",
      "e-certificado.com"
    ],
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;