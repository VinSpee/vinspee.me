# vinspee.me (Qwik + Qwik City)

This repository has been migrated from a legacy Gatsby v2/React site to use Qwik and Qwik City.

Why Qwik?
- Instant, resumable hydration for great performance
- File-based routing with Qwik City
- Modern dev experience with Vite

## Getting started

- Install Node.js 18+ (recommended Node 20 LTS)
- Install dependencies

  npm install

- Start dev server

  npm run dev

- Build for production

  npm run build

- Preview production build

  npm run preview

## Branch preview deployments

This repo is preconfigured for Netlify branch previews.

Two options:

1) Connect the repository in Netlify UI (recommended)
   - Netlify will automatically build and create deploy previews for pull requests and branch pushes
   - netlify.toml is set to build with `npm run build` and publish `dist/`

2) Use GitHub Actions Netlify preview workflow
   - Add the following GitHub repository secrets:
     - NETLIFY_AUTH_TOKEN: your Netlify personal access token
     - NETLIFY_SITE_ID: your Netlify Site ID
   - The workflow .github/workflows/netlify-preview.yml will build and deploy previews for PRs and branch pushes

Preview URLs will follow the pattern `<branch>--<site>.netlify.app` when using an alias.

## Project structure

- src/root.tsx – App root with QwikCityProvider
- src/routes/** – File-based routes
  - src/routes/index.tsx – Home page
  - src/routes/writing/index.tsx – Writing placeholder
  - src/routes/experiments/index.tsx – Experiments placeholder
  - src/routes/contact/index.tsx – Contact page
- src/entry.ssr.tsx – Server-side render entry
- src/entry.dev.tsx – Dev client entry
- src/entry.worker.ts – Service worker
- vite.config.ts – Vite + Qwik City configuration (static adapter enabled)
- tsconfig.json – TypeScript configuration

## Notes on the migration

- All Gatsby/React dependencies and scripts have been removed.
- The previous Markdown, Medium, and GitHub data integrations are not carried over in this initial migration. They can be reintroduced using Qwik City loaders and endpoints.
- The existing source files from the old Gatsby project remain in the repository for reference but are no longer used by the build.
