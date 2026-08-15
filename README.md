# Portofolio website
This is a website specifically made for personal use in order to showcase technical skills and web skills.

## Technologies used

For this project the following tech-stack was used:
* React 19
* Vite
* TailwindCSS 4
* Express
* Docker (backend)

## Project layout

* `portofolio-app/` — the React frontend, deployed to GitHub Pages.
* `backend/` — Express API (contact form → email via Nodemailer). Runs in Docker, exposed publicly at `https://portofolio-backend.selfhaven.eu` (reverse-proxied through Caddy).

## Updating the GitHub Pages site

1. Make your changes in `portofolio-app/`.
2. Test locally: `npm run startlocal` from the repo root (frontend on :5173, backend on :8080 via Docker).
3. Deploy: `npm run deploy --prefix portofolio-app` — this builds the app (Vite → `dist/`) and pushes `dist/` to the `gh-pages` branch. Push the source changes too (`git push origin main`); the `gh-pages` branch carries only the compiled site.

## Local backend (Docker)

```bash
cd backend
cp .env.example .env   # fill in SENDER / PASSWORD / RECIPIENT (Hotmail app password)
docker compose up -d --build   # serves on http://localhost:8080
```

To point the frontend at the local backend instead of the public one, create `portofolio-app/.env` with `VITE_BACKEND_URL=http://localhost:8080` and restart the frontend.
