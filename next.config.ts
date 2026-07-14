import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deploys to any static host (GitHub/Cloudflare Pages, Netlify, cPanel).
  output: "export",
  // Emit each page as folder/index.html so URLs stay clean (/blog/post/, not
  // /blog/post.html) on plain static hosts like cPanel.
  trailingSlash: true,
  // The image optimizer needs a server; exported sites serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
