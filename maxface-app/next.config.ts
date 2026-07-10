import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deploys to any static host (GitHub/Cloudflare Pages, Netlify, cPanel).
  output: "export",
  // The image optimizer needs a server; exported sites serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
