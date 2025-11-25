import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "fakestoreapi.com",
      pathname: "/**",
    },], // Allow images from this domain
    unoptimized: true,
  },
};

export default nextConfig;
