import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves files, so `next build` exports the whole site to
  // `out/`. `trailingSlash` gives every route an `index.html`, which is what a
  // static host resolves `/route/` to.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
