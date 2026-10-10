# Dax Patel Portfolio

A personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Motion for React.

Website Link - https://daxbuilds.vercel.app/

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

When `SITE_URL` is not set in development, metadata uses the local origin at `http://localhost:3000` (or the configured `PORT`). Set `SITE_URL` locally only if you need to test a different local HTTPS origin.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

There is currently no automated test suite configured.

## Deployment and search metadata

The project uses Next.js defaults for Vercel deployment; no custom deployment configuration is required.

Before deploying to production, set the server-side `SITE_URL` environment variable in the deployment platform to the confirmed canonical HTTPS origin (origin only, without a path, query, or fragment). Do not commit this value or add it to client-side environment variables.

In development, the site safely falls back to localhost. In production, if `SITE_URL` is missing, the app omits canonical and absolute social URLs and returns an empty sitemap rather than publishing an invented domain. The `robots.txt` route only references a sitemap when the origin is configured. Vercel preview deployments are marked `noindex` and disallowed in `robots.txt`.

The sitemap includes the homepage, portfolio index, public project detail pages, research, writing, about, and contact routes. It excludes not-found routes and preview deployments.
