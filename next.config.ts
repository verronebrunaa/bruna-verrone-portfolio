import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
