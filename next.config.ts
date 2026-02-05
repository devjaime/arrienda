import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized for Vercel deployment
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
