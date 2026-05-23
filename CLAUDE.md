# CLAUDE.md — baselayerlabs-site

This file is loaded automatically by Claude Code at the start of every session in this repo.
Read it fully before making any suggestions or changes.

---

## Project Identity

**Repo:** `baselayerlabs-site`
**Owner:** David Wilson (@davidlwilson2021)
**Purpose:** Base Layer Labs public landing page — engineering studio showcasing full-stack platforms, applied data systems, and production-grade architecture.
**Status:** Active rebuild — work in progress.

---

## Featured Projects

The site's `/proof` and `/projects/*` routes showcase these projects. Use the correct names when writing content, case studies, or code:

| Project | Repo | In-app / product name | Description |
|---------|------|-----------------------|-------------|
| GhostStack | `davidlwilson2021/ghoststack` | **G6 OPS DISPATCH** | Daily ops platform for IT staff — log tasks by category, AI-generated EOD email, Slack integration, auto-scheduling. Live at `ghoststack.pages.dev`. |
| TradeFolio | `davidlwilson2021/tradefolio-beta-app` | TradeFolio | Skilled trades portfolio + marketplace (LinkedIn × Houzz for tradespeople). React Native + Expo + NestJS + GraphQL. |

**Important:** When writing copy, case study content, or `src/content/projects/` markdown, refer to GhostStack's product as **G6 OPS DISPATCH** — that is the brand shown in the live app UI. "GhostStack" is the repo/project name used in code and config.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 6 |
| Styling | Tailwind CSS v4 (PostCSS-based, NOT v3) |
| Language | TypeScript + Astro components |
| Package manager | **npm** — `package-lock.json` is the lockfile. No pnpm-lock.yaml exists. |
| Deployment | **Cloudflare Pages** (not Workers, not static hosting) |
| Config | `wrangler.jsonc` for Cloudflare settings |
| Site URL | `https://baselayerlabs.dev` |
| Integrations | `@astrojs/sitemap` only |

---

## Critical Constraints

### Cloudflare Pages — NOT Workers
This project deploys to **Cloudflare Pages**, not Workers. These are different products with different configuration, routing, and build pipeline behavior. Do not suggest Workers-specific APIs, bindings syntax, or `wrangler deploy` commands — Pages uses `wrangler pages deploy` or Git-connected auto-deploy.

### Tailwind v4 — Different from v3
Tailwind v4 is configured via `postcss.config.mjs` and uses a CSS-first approach. It does NOT use `tailwind.config.js` or `tailwind.config.ts`. Do not suggest adding or modifying a `tailwind.config` file — that is v3 behavior and will break things.

### Astro Output Mode — STATIC ONLY
This project uses Astro's **default static output** (`output: 'static'` is implied — it is NOT set explicitly in `astro.config.mjs`, which is correct). There is **no `@astrojs/cloudflare` adapter installed**, and none is needed. The build produces pure static HTML/CSS/JS served directly by Cloudflare Pages.

**Do NOT add the `@astrojs/cloudflare` adapter.** This is the #1 rabbit hole — adding it switches Astro to SSR mode, requires `output: 'server'`, changes the entire deployment pipeline, and will break the current working setup. The site does not need SSR. If edge functions or server-side logic are ever needed in the future, that is a deliberate architectural decision to discuss first.

### Package Manager
This repo uses **npm**. There is a `package-lock.json` and no `pnpm-lock.yaml`. Always use npm commands:
- `npm ci` — clean install in CI
- `npm install` — install locally
- `npm run dev` — local dev server at localhost:4321
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the built output locally
- `npm run typecheck` — run TypeScript check (defined in package.json scripts)
- `npx astro add <integration>` — add Astro integrations

Do NOT suggest pnpm or yarn — there is no pnpm lockfile and `pnpm install --frozen-lockfile` will fail.

---

## Project Structure

```
baselayerlabs-site/
├── .github/          # CI/CD workflows (do not modify without asking)
├── .vscode/          # Editor settings
├── public/           # Static assets served as-is
├── src/
│   └── pages/        # File-based routing — each .astro file = a route
├── astro.config.mjs  # ALWAYS READ THIS FIRST before suggesting config changes
├── wrangler.jsonc    # Cloudflare Pages/Wrangler config — handle carefully
├── postcss.config.mjs # Tailwind v4 PostCSS setup
├── tsconfig.json     # TypeScript config
└── package.json      # pnpm project manifest
```

---

## Deployment Workflow

1. Code is pushed to `main` branch on GitHub
2. Cloudflare Pages detects the push via Git integration (auto-deploy)
3. Cloudflare runs `pnpm build` and deploys the `./dist/` output
4. Build command: `pnpm build`
5. Build output directory: `dist` (set in `wrangler.jsonc` as `pages_build_output_dir`)
6. Cloudflare Pages project name: `baselayerlabs`
7. Wrangler compatibility date: `2026-05-15`

**Do not suggest adding GitHub Actions for the build/deploy step** — Cloudflare Pages handles CI/CD via its Git integration. The `.github/` folder contains a separate `ci.yml` for type-checking and build validation only — it does not deploy.

### CI Workflow (`ci.yml`) — Correct Order
```
pnpm/action-setup@v4       # install pnpm
actions/setup-node@v4      # node 20, cache: 'pnpm'
pnpm install --frozen-lockfile
pnpm astro sync            # MUST run before tsc — generates virtual module types
pnpm exec tsc --noEmit     # type check
pnpm build                 # build validation
```
`astro sync` **must** precede `tsc --noEmit`. Without it, TypeScript cannot resolve `astro:content`, `astro:assets`, and other Astro virtual modules, causing TS2307 errors.

### Current `wrangler.jsonc` (exact)
```jsonc
{
  "name": "baselayerlabs",
  "compatibility_date": "2026-05-15",
  "pages_build_output_dir": "./dist"
}
```
This is intentionally minimal. Do not add bindings, routes, or other fields unless explicitly asked.

### Current `astro.config.mjs` (exact)
```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://baselayerlabs.dev',
  integrations: [sitemap()],
});
```
No adapter. No output setting. This is correct for a static Cloudflare Pages deployment.

---

## Known Gotchas — Do Not Repeat These

1. **Do NOT add `@astrojs/cloudflare` adapter.** This is the primary failure mode. The site is static. The adapter is for SSR. Adding it will break deployment and require a full rebuild to undo.
2. **Do NOT add `output: 'server'` to `astro.config.mjs`.** Same reason as above.
3. **Do NOT suggest `tailwind.config.js` or `tailwind.config.ts`.** Tailwind v4 does not use those files. Suggesting them indicates you're thinking of v3.
4. **Do NOT add a `content` array to any Tailwind config.** v4 scans automatically.
5. **Do NOT suggest `wrangler deploy`.** That's for Workers. For Pages, use `wrangler pages deploy dist` or just push to GitHub.
6. **Do NOT add Workers bindings** (KV, D1, R2, Durable Objects, etc.) to `wrangler.jsonc` unless explicitly requested. The current config is intentionally clean.
7. **Do NOT use `pnpm` or `yarn`.** This project uses `npm` — the only lockfile is `package-lock.json`.
8. **Do NOT assume Astro 4/5 patterns work in Astro 6.** API surface has changed — verify against Astro 6 docs.

---

## Style & Code Conventions

- TypeScript preferred over plain JavaScript for any logic files
- Astro components (`.astro`) for pages and layout
- Tailwind utility classes for all styling — no separate CSS files for component styles
- Keep components in `src/components/` (standard Astro convention)
- No CSS-in-JS, no styled-components

---

## What David Needs From You

- **Be specific to this stack.** Generic Astro or generic Cloudflare advice that doesn't account for Tailwind v4 + Pages + Astro 6 together will cause problems.
- **Read before suggesting.** If a config file is relevant to the task, read it first. Don't assume its contents.
- **Stay on the current path.** If a working deployment pattern exists, don't suggest architectural changes unless there's a clear and stated reason.
- **Minimal surface area.** Prefer small, targeted changes over large rewrites. Ask before refactoring anything that isn't directly related to the task.
- **When in doubt, ask.** A one-line clarifying question is better than rebuilding the wrong thing.

---

## Quick Reference

| Task | Command |
|---|---|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview build locally | `npm run preview` |
| Sync Astro types | `npx astro sync` |
| Type check | `npm run typecheck` |
| Add Astro integration | `npx astro add <name>` |
| Deploy (manual) | `wrangler pages deploy dist --project-name baselayerlabs` |
| Local Pages dev | `wrangler pages dev dist` |

---

*Last updated: 2026-05-23*
