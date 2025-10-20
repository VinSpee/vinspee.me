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
- vite.config.ts – Vite + Qwik City configuration
- tsconfig.json – TypeScript configuration

## Notes on the migration

- All Gatsby/React dependencies and scripts have been removed.
- The previous Markdown, Medium, and GitHub data integrations are not carried over in this initial migration. They can be reintroduced using Qwik City loaders and endpoints.
- The existing source files from the old Gatsby project remain in the repository for reference but are no longer used by the build.
