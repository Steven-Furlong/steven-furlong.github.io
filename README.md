# Steven Furlong — Portfolio

A dark, terminal-inspired personal portfolio built with React + Vite. Sections: Hero, About,
Experience, Projects, Skills, Certifications/Education, and Contact.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Editing content

Almost everything on the site is driven from one file:
[src/data/content.js](src/data/content.js). Update your summary, experience, skills,
certifications, and projects there — the components just render it.

Two things still need a personal touch before this is "done":

1. **GitHub link** — `profile.github` in `content.js` is a placeholder (`https://github.com/`).
   Update it once this repo is live.
2. **Résumé download** — the "Download Résumé" button in the hero links to `/resume.pdf`. Drop
   your résumé PDF into the `public/` folder as `resume.pdf` so the link works.
3. **Projects section** — the four project cards are drafted from your resume experience and
   marked with an amber "Placeholder" badge. Swap in real repo links, screenshots, and demo URLs
   as projects go public, and remove the `placeholder: true` flag on each entry once it's real.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
that builds and deploys automatically on every push to `main`.

To turn it on:

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). The site will publish to
   `https://<your-username>.github.io/<repo-name>/`.

The Vite config uses a relative `base: './'`, so the build works at any subpath without further
changes — no need to rename the repo to match a specific URL pattern.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- Plain CSS (no framework) — theme variables live at the top of [src/index.css](src/index.css)
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts
