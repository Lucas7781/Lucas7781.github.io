# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website (https://lucas7781.github.io/). Monorepo with two independent npm packages:

- `portofolio-app/` — React 19 frontend on Vite, styled with TailwindCSS 4 (CSS-first config, no `tailwind.config.js`). Deployed to GitHub Pages via `gh-pages` (output `dist/`).
- `backend/` — minimal Express server (single file, `index.js`) that relays contact-form messages via Nodemailer (Hotmail). Runs in Docker on loopback host port 8080, exposed publicly at `https://portofolio-backend.selfhaven.eu` via the Caddy stack at `~/Desktop/server/caddy`.

There is no root build step or shared tooling beyond `concurrently`.

## Commands

Run from the repo root; the packages are not hoisted, so use `--prefix` (or `cd` into the package).

| Task | Command |
|---|---|
| Run frontend dev server (port 5173) | `npm start --prefix portofolio-app` |
| Run backend (port 3001) | `npm start --prefix backend` |
| Run backend in Docker (loopback port 8080, needs `backend/.env` for mail creds; public traffic goes through Caddy) | `docker compose up -d --build` (from `backend/`) |
| Run both together | `npm run startlocal` |
| Production build (outputs `portofolio-app/dist/`) | `npm run build --prefix portofolio-app` |
| Deploy to GitHub Pages | push to `main` (workflow builds + deploys; Pages source must be "GitHub Actions") |
| Run tests | `npm test --prefix portofolio-app` (vitest, non-watch) |
| Run tests in watch mode | `npm run test:watch --prefix portofolio-app` |
| Run a single test file | `npm test --prefix portofolio-app -- src/App.test.jsx` |

There is no standalone lint script.

## Backend

- Requires a `.env` file in `backend/` (gitignored) with `SENDER`, `PASSWORD` (Hotmail credentials), and `RECIPIENT`. Without it, `/email` fails at send time.
- `POST /email` accepts `{ email, message }` JSON, returns 400 if either is missing, 201 on success, 500 on send failure.
- Port from `PORT` env, default 3001.
- Root `npm start` runs only the backend (used on the hosting platform).
- The Caddy stack must be edited in place (its bind-mounted Caddyfile follows the inode — a rename breaks the mount until restart).

## Frontend architecture

- Vite project: entry `index.html` → `src/index.jsx`. All JSX files use the `.jsx` extension (JSX in `.js` is not transformed).
- `src/App.jsx` — fixed header (`NavigationBar`) plus a router (react-router v7) with a single index route rendering `MainPage`. All content lives on one page.
- `src/MainPage/` — the one-page layout, composed of section components: `Intro`, `AboutMe`, `Projects`, `Contact`, `Bottom`. Section content is defined inline in each component (Tailwind utility classes throughout).
- `src/MainPage/Modals/` — modal components per project (`DiscordBotModal`, `PortofolioModal`), opened from `Projects.jsx`.
- `src/MainPage/Contact.jsx` — posts the contact form to `BACKEND_URL` (default `https://portofolio-backend.selfhaven.eu`, Caddy reverse proxy to the Dockerized backend). Override for local dev via `VITE_BACKEND_URL` in `portofolio-app/.env`. Uses `XMLHttpRequest`, not fetch.
- Import react-router APIs from `react-router` (v7 convention), not `react-router-dom` — mixing the two breaks router context under test.
- Design tokens (colors `ink`/`surface`/`edge`/`accent`, fonts Inter + JetBrains Mono, `blink`/`marquee` animations) live in `src/index.css` under `@theme`; the hero grid background is the `.hero-grid` class there too.
- Section scroll-reveal animations come from `useScrollReveal` in `src/hooks.js` (GSAP ScrollTrigger, respects `prefers-reduced-motion`); add `data-reveal` to elements to animate them. jsdom lacks `matchMedia`/`IntersectionObserver` — mocks live in `src/setupTests.js`.
