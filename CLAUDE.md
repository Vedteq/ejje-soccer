@AGENTS.md

# EJJE Soccer Academy

Next.js 16 nonprofit soccer academy site.

## Dev server

Always runs on **port 3200**:

```bash
npm run dev   # http://localhost:3200
npm run start # http://localhost:3200
```

Do not change the port. Do not use `next dev` directly without `--port 3200`.

## Stack

- Next.js 16.2.4 (Turbopack) · React 19.2 · TypeScript 5
- Tailwind CSS v4 (`@import "tailwindcss"` in globals.css — no tailwind.config)
- Fonts via `next/font/google`: Fraunces, Inter, Caveat, JetBrains Mono
- CSS variables: `--font-fraunces`, `--font-inter`, `--font-caveat`, `--font-jetbrains-mono`

## Structure

Multi-page App Router site. Shared chrome (donate bar, nav, footer, float
donate) lives in `app/layout.tsx` via `SiteHeader`, so every route inherits it.

```
app/
  globals.css              — all design CSS (bespoke, no shadcn)
  layout.tsx               — fonts + metadata + SiteHeader/Footer/FloatDonate
  page.tsx                 — Home (server); composes Hero…GetInvolved sections
  leadership/page.tsx      — Leadership & Governance (bios grid)
  impact/domestic/page.tsx — Domestic Pipeline (U.S.) — uses <PipelinePage>
  impact/international/page.tsx — International Pipeline (Africa) — <PipelinePage>
components/
  SiteHeader.tsx  — client wrapper: DonateBar state + Nav (used by layout)
  Nav.tsx         — dropdown nav (About Us / Our Impact), mobile drawer,
                    cross-page dark detection via [data-section][data-dark="1"]
  Hero.tsx        — hero + FloatDonate + ValuesStrip + About + Stats
  Pipelines.tsx   — home "two pipelines" overview cards → the two impact pages
  Programs.tsx    — 4-tab program switcher
  Impact.tsx      — kid/parent/coach stories
  Donate.tsx      — donation calculator + zero-fee note + cost-to-impact grid
  GetInvolved.tsx — ways to help + partners + form
  Join.tsx        — GetInvolvedForm (mailto)
  PipelinePage.tsx— shared layout for the two impact pipeline pages
  Footer.tsx      — site footer (501(c)(3) legal disclosure)
  DonateBar.tsx / Polaroid.tsx / Arrow.tsx — small shared pieces
```

### Nav dark-mode

The fixed nav flips to light/dark text based on the section under it. Any
section that sits behind the nav and has a dark background must carry
`data-section="…" data-dark="1"`; light sections use `data-section` with no
`data-dark`. Pages with no `[data-section]` above the fold default to dark.

## Images

All photos are CSS polaroid placeholders. To replace: put real images inside `.polaroid .photo` divs in the relevant component.
