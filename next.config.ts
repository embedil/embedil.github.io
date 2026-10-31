import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves files, so `next build` exports the whole site to
  // `out/`. `trailingSlash` gives every route an `index.html`, which is what a
  // static host resolves `/route/` to.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // `cacheComponents` implies PPR, and export mode rejects it outright
  // ("PPR cannot be enabled in export mode"), so it stays off — together with
  // `partialPrefetching`, which requires `cacheComponents`. Re-enable both only
  // if this site moves to a host that can run a Next.js server.

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
