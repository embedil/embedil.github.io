This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

The site is a static export, deployed to GitHub Pages at <https://embedil.github.io>.

`next build` writes the whole site to `out/` (see `output: "export"` in `next.config.ts`), and [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publishes it on every push to `main`.

One-time setup: open **Settings → Pages** in the repository and set **Source** to **GitHub Actions**. After that, pushes to `main` deploy automatically, and the workflow can also be run manually from the Actions tab.

To preview the export locally:

```bash
npm run build
npx serve out
```
