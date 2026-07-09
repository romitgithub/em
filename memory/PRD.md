# Kamala Muditam — PRD

## Original Problem Statement
Build a compassion-driven nonprofit website for Kamala Muditam (Restore • Rise • Ripple / Rooted • Rise • Reverberate) with the following pages:
Home, Our Journey, The Kamala Muditam Way, Where Our Hearts Lead Us (10 focus areas), How We Walk Alongside, Become Part of the Journey (multi-step onboarding), Ripples (stories), The People Behind the Ripple, Contact, Admin.

## User Choices
- Volunteer submissions: MongoDB only
- Contact submissions: MongoDB only
- Ripples & People pages: placeholder/sample content
- Design direction: warm & editorial — terracotta, sage, cream, Cormorant Garamond + Lora
- Include a simple password-protected admin panel

## Architecture

### Backend — FastAPI + MongoDB
Routes (all under `/api`):
- POST `/volunteers` — create volunteer
- POST `/contact` — create contact message
- POST `/admin/login` — returns bearer token (in-memory session)
- POST `/admin/logout`
- GET `/admin/volunteers` — auth required
- GET `/admin/contacts` — auth required
- GET `/admin/stats` — auth required

Env: `ADMIN_USERNAME`, `ADMIN_PASSWORD` in `/app/backend/.env`.

### Frontend — React + React Router + Tailwind + shadcn UI + framer-motion + sonner
- Routes: `/`, `/our-journey`, `/the-kamala-muditam-way`, `/where-our-hearts-lead-us`, `/where-our-hearts-lead-us/:slug`, `/how-we-walk-alongside`, `/become-part-of-the-journey`, `/ripples`, `/the-people-behind-the-ripple`, `/contact`, `/admin`.
- Global `Nav` + `Footer` (hidden on `/admin`).
- Design tokens defined in `/app/frontend/src/index.css` (Cormorant Garamond + Lora, ivory canvas, terracotta accents, forest primary).
- 10 focus areas defined in `/app/frontend/src/data/focusAreas.js`.

## What's Implemented (2025-12-15 — v1 MVP)
- Full 10-page site with editorial layout, ripple motif, warm palette, poetic typography.
- Multi-step "Journey" onboarding (4 steps, dot progress, celebratory success screen, deep-link `?focus=slug`).
- 10 individual focus area pages (Our Heart / How We Walk Alongside / Join This Journey).
- Ripples page with 9 sample stories + category filter.
- People Behind the Ripple with 7 groups + sample profiles.
- Contact form + confirmation state.
- Admin login → dashboard with stats + volunteer & contact submission lists.
- MongoDB persistence, bearer-token auth on admin endpoints.
- All interactive elements carry `data-testid`.
- Passed 100% of first-iteration backend + frontend tests.

## Test Credentials
See `/app/memory/test_credentials.md` (admin / ripple2025).

## Prioritized Backlog

### P0 — Deferred from MVP
- None. Every requested section is present.

### P1
- Real photography / final CMS for Ripples stories and People profiles.
- Optional email notifications on new volunteer & contact submissions (Resend/SendGrid).
- CSV export of volunteers/contacts from admin.

### P2
- Newsletter subscription block.
- Language toggle (EN/HI/regional).
- Blog/Journal for Ripples with full story pages.
- Analytics + SEO metadata per page.
- Ripple donation / one-time contribution flow (Stripe / Razorpay).
