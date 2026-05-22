# Base Layer Labs — Site

Marketing site and portfolio proof layer for [Base Layer Labs](https://github.com/davidlwilson2021/baselayerlabs), deployed on Cloudflare Pages.

**Live:** [baselayerlabs.dev](https://baselayerlabs.dev)  
**Proof layer:** [baselayerlabs.dev/proof](https://baselayerlabs.dev/proof)

Planning docs and QA live in [notion-portfolio-upgrade](https://github.com/davidlwilson2021/notion-portfolio-upgrade).

## Stack

- **Framework:** Astro 6
- **Styling:** Tailwind CSS v4, PostCSS
- **Deployment:** Cloudflare Pages (auto-deploy on push to `main`)
- **CI:** Dependabot for dependency updates

## Routes

| Path | Purpose |
|------|---------|
| `/` | Studio marketing (hero, products, technology, contact) |
| `/proof` | Portfolio proof hub — case studies, metrics, skills |
| `/projects/*` | Deep-dive case studies (GhostStack, TradeFolio, Wk 6 R pipeline) |

## Development

```bash
npm install
npm run dev          # Local dev server at localhost:4321
npm run build        # Production build to ./dist/
npm run preview      # Preview production build locally
```

## Project Structure

```
src/
  components/
    layout/         # Nav, Footer
    sections/       # Homepage sections
    sections/proof/ # Proof page sections
    ui/             # ProjectCard, etc.
  content/projects/ # Case study markdown + frontmatter
  layouts/
  pages/
    proof.astro
    projects/[slug].astro
public/
  og/               # Open Graph SVGs
  proof/            # Proof artifacts (replace SVGs with screenshots)
```
