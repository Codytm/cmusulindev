# Resume Site

A personal resume/portfolio site built with React, TypeScript, and Vite.

## Running it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Editing your content

Everything on the page — your name, bio, jobs, projects, skills, and
education — comes from one file:

```
src/data/resume.ts
```

Edit that file and the site updates automatically while `npm run dev` is
running. You shouldn't need to touch any component files just to update
content.

## Project structure

```
src/
  data/resume.ts             ← your content lives here
  components/                ← one component per section (Hero, Experience, etc.)
  hooks/useActiveSection.ts  ← highlights the current section in the nav
  App.tsx                    ← assembles the page
  index.css                  ← all styling, using CSS variables at the top
```

## Navigation

The sidebar links are anchors (`#about`, `#projects`, etc.) that smooth-scroll
to each section on the same page. As you scroll, the current section is
highlighted in the sidebar automatically.

## Building for production

```bash
npm run build
```

This outputs a static site into `dist/`. That folder is all you need to
deploy anywhere (Vercel, Netlify, GitHub Pages, Cloudflare Pages, or your
own server) — plug in your `.dev` domain once it's registered.

## Adding a downloadable PDF resume

Drop a PDF into `public/resume.pdf` and it'll be served at `/resume.pdf`.
`profile.resumePdf` in the data file already points there — link to it
from the Contact section whenever you're ready.
