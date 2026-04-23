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

```
app/
  globals.css   — all design CSS (bespoke, no shadcn)
  layout.tsx    — font setup + metadata
  page.tsx      — single page, imports all sections ("use client")
components/
  Arrow.tsx     — SVG arrow icon
  Polaroid.tsx  — photo placeholder component
  DonateBar.tsx — sticky top bar
  Nav.tsx       — scroll-aware fixed nav
  Hero.tsx      — hero + FloatDonate + ValuesStrip + Letter + Stats
  Programs.tsx  — 5-tab program switcher
  Impact.tsx    — kid/parent/coach stories
  Events.tsx    — event list with RSVP state
  Donate.tsx    — donation calculator + recent feed
  Coaches.tsx   — coach grid
  DonorWall.tsx — 4-tier donor wall
  Join.tsx      — registration form
  Footer.tsx    — site footer
```

## Images

All photos are CSS polaroid placeholders. To replace: put real images inside `.polaroid .photo` divs in the relevant component.
