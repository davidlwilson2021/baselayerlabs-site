# Base Layer Labs — Landing Page

Marketing and landing page for [Base Layer Labs](https://github.com/davidlwilson2021/baselayerlabs), deployed on Cloudflare Pages.

**Live:** [baselayerlabs](https://baselayerlabs.dev)

## Stack

- **Framework:** Astro 6
- **Styling:** Tailwind CSS v4, PostCSS
- **Deployment:** Cloudflare Pages (auto-deploy on push to `main`)
- **CI:** Dependabot for dependency updates

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
  components/       # Astro components
  content/          # Content collections
  layouts/          # Page layouts
  pages/            # File-based routing
  styles/           # Global styles
public/             # Static assets
```
