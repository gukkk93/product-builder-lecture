# Ohaeng

Korean saju (four pillars) and daily fortune, built for a global K-pop fandom
audience. Users pick a birth date/time, get their dominant Five Element
(오행) and a today's-fortune reading, then can download a 9:16 share card.

## Stack

- Vite + React, `react-router-dom`
- [`lunar-javascript`](https://github.com/6tail/lunar-javascript) for the
  actual saju/ganzhi/five-element calculation (real manseryeok data, not an
  approximation)
- `react-i18next` for UI copy (`src/i18n/locales/en.json`); only English
  ships so far, structure is ready for more locales
- `html-to-image` to render the share card to a downloadable PNG

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Deploying (Cloudflare Pages)

This project now needs a build step. In the Cloudflare Pages project
settings (Builds & deployments):

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
