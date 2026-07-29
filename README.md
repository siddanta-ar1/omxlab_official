# omxlab_official

The OMX Lab marketing site — Next.js App Router, TypeScript, Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Configuration

Copy `.env.example` to `.env.local` and fill in what you need:

- `NEXT_PUBLIC_CONTACT_ENDPOINT` — where the contact form POSTs its JSON body
  (Formspree, Web3Forms, or your own handler). Leave it unset and the form
  falls back to opening the visitor's mail client with the message prefilled,
  so a fresh checkout still does something useful.

## Layout

```
src/
  app/          App Router routes, layout, and metadata
  components/
    common/     Icons, mascot, smooth scroll, transitions
    layout/     Navbar, Footer, scroll restoration
    sections/   Page sections (hero, grids, process, CTA…)
  data/         Site content: services, projects, research, initiatives, team
  lib/          Contact form validation and submission
  views/        Larger page bodies imported by app routes
```

Content lives in `src/data`. Adding a service, project, publication, or
initiative there is enough — the index pages, detail routes, and their static
paths are all generated from those files.

### Routing notes

- Detail routes (`/services/[id]`, `/projects/[id]`, `/initiatives/[id]`,
  `/research/[id]`) are prerendered via `generateStaticParams` and carry
  per-item metadata.
- The three index pages read their filter (`?topic`, `?type`, `?focus`) from
  `searchParams` on the server, so the filtered list is in the HTML rather than
  appearing only after hydration. That makes those routes server-rendered on
  demand.

## Assets

Logos and mascot images in `public/` are carried over from the previous site
and still need replacing with OMX Lab artwork.
