import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['fakestoreapi.com'], // Allow images from this domain
    unoptimized: true,
  },
};

export default nextConfig;
