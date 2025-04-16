import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
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