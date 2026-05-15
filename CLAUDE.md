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

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 6 |
| Styling | Tailwind CSS v4 (PostCSS-based, NOT v3) |
| Language | TypeScript + Astro components |
| Package manager | **pnpm** (do NOT suggest npm or yarn) |
| Deployment | **Cloudflare Pages** (not Workers, not static hosting) |
| Config | `wrangler.jsonc` for Cloudflare settings |

---

## Critical Constraints

### Cloudflare Pages — NOT Workers
This project deploys to **Cloudflare Pages**, not Workers. These are different products with different configuration, routing, and build pipeline behavior. Do not suggest Workers-specific APIs, bindings syntax, or `wrangler deploy` commands — Pages uses `wrangler pages deploy` or Git-connected auto-deploy.

### Tailwind v4 — Different from v3
Tailwind v4 is configured via `postcss.config.mjs` and uses a CSS-first approach. It does NOT use `tailwind.config.js` or `tailwind.config.ts`. Do not suggest adding or modifying a `tailwind.config` file — that is v3 behavior and will break things.

### Astro 6 Output Mode
For Cloudflare Pages, Astro must be configured with `output: 'static'` (default) or `output: 'server'` + the `@astrojs/cloudflare` adapter. Do NOT suggest switching output modes without understanding the current config first. Read `astro.config.mjs` before recommending any output or adapter changes.

### Package Manager
Always use `pnpm`. Never suggest `npm install`, `yarn add`, or similar. Use:
- `pnpm install` — install dependencies
- `pnpm dev` — local dev server at localhost:4321
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview the built output locally
- `pnpm astro add <integration>` — add Astro integrations

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
5. Build output directory: `dist`

**Do not suggest adding GitHub Actions for the build/deploy step** — Cloudflare Pages handles CI/CD via its Git integration. The `.github/` folder may contain other workflows unrelated to deployment.

---

## Known Gotchas (Do Not Repeat These Mistakes)

- **Do not add `@astrojs/cloudflare` adapter unless explicitly asked.** Adding it switches from static to SSR mode, which changes routing behavior and may break the current setup.
- **Do not suggest modifying `wrangler.jsonc` to add Workers bindings** (KV, D1, R2, etc.) unless those features are explicitly requested. Unnecessary bindings will cause deploy errors.
- **Tailwind v4 purge config does not exist** — v4 handles content scanning automatically. Do not suggest adding a `content` array.
- **Astro 6 has changed several APIs from Astro 4/5** — always check current Astro 6 docs before suggesting component or config patterns. Do not assume Astro 4-era syntax is valid.
- **`wrangler pages dev`** is the correct local preview command for Pages, not `wrangler dev` (which is for Workers).

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
| Start dev server | `pnpm dev` |
| Build for production | `pnpm build` |
| Preview build locally | `pnpm preview` |
| Add Astro integration | `pnpm astro add <name>` |
| Deploy (manual) | `wrangler pages deploy dist` |
| Local Pages dev | `wrangler pages dev dist` |
| Check TypeScript | `pnpm astro check` |

---

*Last updated: 2026-05-15*
