# Kamala Muditam — Design Document
_Restore • Rise • Ripple_

Version 1.0 · Editorial, warm, compassion-forward nonprofit brand system

---

## 1. Design Philosophy

Kamala Muditam is a compassion-driven movement, not a "product." The design deliberately avoids
generic startup tropes (purple gradients, Inter, uniform card grids, dense marketing energy) and
instead reads like a quiet editorial — unhurried, dignified, humanist.

**Guiding principles**
- Listen before you lead. UI should feel patient, not demanding.
- Every life is unique. Layouts are asymmetric and personal rather than templated.
- Compassion is the loudest voice. Typography, whitespace and imagery do the talking; buttons stay soft.
- The "ripple" motif is a recurring visual thread — concentric circles, gentle scales, staggered reveals.

---

## 2. Theme & Archetype

- **Theme:** LIGHT
- **Archetype:** Organic & Earthy — soft ivory canvas, deep forest text, terracotta and ochre accents, sage supporting tones.
- **Feel:** Editorial, poetic, generous whitespace, subtle asymmetry, cinematic transitions.

---

## 3. Color System

| Token | Hex | Role |
|---|---|---|
| `--ivory` | `#F9F6F0` | Primary canvas — 90% of the site's background |
| `--ivory-2` | `#F3EDE1` | Alternating section background |
| `--forest` | `#2A3B2C` | Primary text + primary button + dark sections |
| `--forest-2` | `#384A3A` | Secondary/muted text and hover states |
| `--sage` | `#9DA993` | Supporting accent for illustrations and dividers |
| `--sage-2` | `#B8C1AE` | Footer eyebrow labels, low-emphasis text on dark |
| `--terracotta` | `#D47A62` | Primary accent — emphasis, eyebrows, active states, primary CTA on dark backgrounds |
| `--terracotta-2` | `#B8624C` | Terracotta hover state |
| `--ochre` | `#DDA77B` | Warm secondary accent — italic emphasis on dark backgrounds |
| `--text-main` | `#2A3B2C` | Body text |
| `--text-muted` | `#5C6B5E` | Captions, eyebrows, metadata |
| `--line` | `rgba(42,59,44,0.14)` | Hairline dividers and input underlines |

**Rules**
- No cool blues, no purples, no gradients on white.
- Deep Forest sits on Ivory. Ivory sits on Forest. Terracotta is the only "loud" accent — use it sparingly.
- Selection color is terracotta on ivory (see `::selection`).

---

## 4. Typography

**Fonts**
- **Headings:** Cormorant Garamond (fallback: Playfair Display, Georgia). Weights 400 / 500 / 600.
- **Body:** Lora (fallback: Georgia). Weights 400 / 500.

Both loaded from Google Fonts via `@import` in `index.css`.

**Rules**
- Headlines > 32px use `tracking-tight`.
- Italic serif is used liberally for poetic, reverent lines ("Restore a life. Rise together. Let hope ripple.").
- Body copy uses `leading-[1.85]` to `leading-[1.95]` — copy must breathe.
- Never use Inter, Roboto, or system-ui.

**Scale**
| Class | Usage |
|---|---|
| `text-5xl md:text-6xl lg:text-7xl` (Cormorant) | Hero H1 |
| `text-4xl md:text-5xl lg:text-6xl` | Section H2 |
| `text-2xl md:text-3xl lg:text-4xl` | Card / subsection H3 |
| `text-xl md:text-2xl` italic serif | "Lead" / poetic paragraph |
| `text-base md:text-lg` (Lora) | Body |
| `text-xs uppercase tracking-[0.25em]` (Lora) | Eyebrows & metadata |

---

## 5. Layout & Spacing

- Container width: `max-w-[1200px]` for content, `max-w-[1300px]` for image grids.
- Vertical section rhythm: `py-24 md:py-32` (never less than `py-20`).
- Prefer 12-column asymmetric layouts (`md:col-span-4` + `md:col-span-7 md:col-start-6`) over centered grids.
- Alternate `bg-ivory` and `bg-[color:var(--ivory-2)]` sections for gentle vertical rhythm.
- Left-align dense copy; center-align short poetic statements (Ripple Promise, hope stanzas).

---

## 6. Components

### Buttons
- Pill-shaped (`rounded-full`), `px-8 py-4`, `text-sm tracking-wide`, custom `.btn-ripple` hover glow.
- **Primary:** Forest bg → Terracotta on hover.
- **Terracotta:** Terracotta bg → deeper Terracotta on hover. Used on dark forest sections.
- **Outline:** Forest border → fills Forest on hover.

### Cards
- **Focus/Story cards:** Borderless, image-first, aspect `4/5`, subtle 0.9s `img-zoom` on hover. Title in Cormorant, eyebrow above.
- **Initiative cards (Restore/Rise/Ripple):** Rounded-2xl, hairline border, terracotta border on hover, lucide icon at top.

### Inputs (`.km-input`)
- No boxes. Underline-only inputs (border-bottom) that transition to terracotta on focus.
- Placeholders are muted forest at 40% alpha.

### Selectable Chips (`.km-checkbox`)
- Pill-tag with rounded border. Active state = soft terracotta background + terracotta border.
- Used in Step 2 (focus areas) and Step 3 (contributions) of the volunteer journey.

### Progress Dots (`.step-dot`)
- 10px circles: empty (border only) → filled (forest) → current (terracotta with soft glow ring).
- Connected by 1px lines that fill in as you progress.

### Ripple Motif (`<RippleMotif />`)
- Reusable component with 5 concentric circles at varying opacities.
- Used decoratively behind hero, in "The Kamala Muditam Way", the Promise section, focus pages, contact.
- Also used as animated `ripple-out` on the volunteer success screen.

### Toasts
- Custom-styled `sonner` toasts: forest background, ivory text, Lora font.

---

## 7. Motion & Interaction

- **Page loads:** `.fade-up` (0.9s ease-out) for the first block; scroll-reveals are subtle, not theatrical.
- **Images:** `.img-zoom` — 0.9s cinematic scale to 1.05x on hover.
- **Text links:** `.link-soft` — underline fades in from 0% to 100% width in 0.4s.
- **Buttons:** `.btn-ripple` — radial ivory highlight fades in over 0.5s.
- **Ripple success animation:** `ripple-out-anim` — 4.5s concentric expansion, infinite, low opacity.

Never use `transition: all` — always specify properties (`opacity, transform, background-color, border-color`).

---

## 8. Imagery Direction

**Palette to source for:** soft daylight, natural tones, real hands, real faces, water surfaces, gentle activity, community moments.

**Do:**
- Water-ripple hero (Pexels 9302825) as the site's opening image.
- Warm maternal imagery (mother-daughter sunsets).
- Community hands, volunteer gatherings, learning moments, gardens.
- Portrait photography for People page — natural light, honest, unposed.

**Don't:**
- Stock "corporate handshake" imagery.
- Blue-graded hospital photography.
- Group photos with staged smiles or over-saturated colors.

All hero and card images use warm compression (`?auto=compress&cs=tinysrgb`) via Pexels or Unsplash `w=1400–1800`.

---

## 9. Page-by-Page Layout

### 9.1 Home (`/`)
Eight-section vertical rhythm:
1. **Hero** — Full-bleed water ripple image at 40% opacity behind ivory gradient; Cormorant hero title with italic Muditam in terracotta; two CTAs; a small italic footnote.
2. **Every Ripple Begins Somewhere** — 12-col asymmetric text layout with poetic short lines.
3. **The Kamala Muditam Way** — Two-column Vision/Mission on `ivory-2`.
4. **Where Our Hearts Lead Us** — 6-of-10 focus-area cards in a 3-column editorial grid.
5. **How We Walk Alongside** — Forest dark section with Restore / Rise / Ripple initiative cards (Heart / Sprout / Waves lucide icons).
6. **Become Part of the Journey** — Left title + right stacked role cards (Ripple Makers / Rise Fellows / Restore Circle).
7. **Ripples preview** — Ivory-2 with poetic stanza + "Read the Stories" CTA.
8. **The Ripple Promise** — Ends quietly. No CTA. Centered italic serif promises with a large ripple motif floating behind.

### 9.2 Our Journey (`/our-journey`)
Three quiet, editorial sections — origin story, philosophy, closing hope stanza with a single "Walk with us" CTA.

### 9.3 The Kamala Muditam Way (`/the-kamala-muditam-way`)
Two mirrored sections: **Vision** (Rooted / Rise / Reverberate) and **Mission** (Restore / Rise / Ripple). Each with 3 terracotta-bordered value blocks.

### 9.4 Where Our Hearts Lead Us (`/where-our-hearts-lead-us`)
Grid of 10 focus areas as 4:5 image cards with numbered eyebrows, titles, tagline, and "Read more →" microlink. Closes with a dark-section quote + Join CTA.

### 9.5 Focus Area Detail (`/where-our-hearts-lead-us/:slug`)
Consistent four-part story pattern per the philosophy:
1. **Hero** — Title, tagline, portrait 4:5 image.
2. **Our Heart** — Why this matters, on `ivory-2` with a ripple motif.
3. **How We Walk Alongside** — Terracotta hairline bullets.
4. **Join This Journey** — Forest section with the list of ways to contribute + deep-link CTA `?focus=slug`.

Bottom shows a "Next Focus Area" link that cycles through all 10.

### 9.6 How We Walk Alongside (`/how-we-walk-alongside`)
Three initiative cards (Restore / Rise / Ripple) — matching the home teaser but with full item lists.

### 9.7 Become Part of the Journey (`/become-part-of-the-journey`)
The virtual onboarding "journey":
- **Landing screen:** Ripple motif backdrop, poetic invitation, "Begin My Journey" terracotta CTA + "~3 min" footnote.
- **Step 1 — About You:** Underlined text inputs (name, email, mobile, city, profession, organization).
- **Step 2 — Your Heart:** 10 focus-area pills + "wherever I'm needed" catch-all.
- **Step 3 — Walk Alongside:** 19 contribution chips + Other.
- **Step 4 — Your Journey:** Freeform textarea + Availability radio pills + consent checkbox to the Ripple pledge.
- **Success screen:** Animated concentric ripple → filled terracotta check → "Welcome to the Journey" title → three poetic lines → "Return Home" + "Read Our Stories" CTAs.

Progress indicator = 4 dot-and-line steps with terracotta glow on the current dot.

### 9.8 Ripples (`/ripples`)
Editorial magazine layout — categorized story cards (4:5 image, category eyebrow, Cormorant title, Lora excerpt). Chip-based category filter row at top.

### 9.9 People Behind the Ripple (`/the-people-behind-the-ripple`)
7 alternating (`ivory` / `ivory-2`) group sections: Founders → Trustees → Advisors → Ripple Makers → Rise Fellows → Restore Circle Partners → Community Partners. Circular portraits, name, role in terracotta uppercase eyebrow, short bio.

### 9.10 Contact (`/contact`)
Underlined inputs on ivory; single "Start a Ripple" primary CTA; ripple motif backdrop. Success state is a serif "Thank you for reaching out" moment with an option to send another.

### 9.11 Admin (`/admin`)
Chrome-free (no site nav/footer). Login card with underlined inputs, then a two-tab dashboard (Volunteers | Contact Messages) with soft `ivory-2` stat cards and expandable submission cards showing all captured info.

---

## 10. Navigation & Chrome

**Top nav (`Nav.jsx`)**
- Fixed. Transparent at top; ivory + backdrop blur + hairline border after 20px scroll.
- Custom logo mark: three concentric shapes ending in a filled terracotta dot (the ripple motif in miniature).
- All 9 nav links use `.link-soft` underline animations; active route = terracotta.
- CTA button "Join The Ripple" pinned right (forest → terracotta on hover).
- Mobile menu = full-panel takeover with 2xl Cormorant links.

**Footer (`Footer.jsx`)**
- Forest background, ivory text.
- 4-column layout: brand + poetic tagline; Quick Links (all 9 pages); Legal; Social (Instagram / Facebook / LinkedIn icons in bordered circles).
- Bottom bar with copyright + italic closing line: _"The ripple you create today may become someone's turning point tomorrow."_

---

## 11. Accessibility & Test IDs

- Every interactive element and every critical informational element carries a kebab-case `data-testid`.
- Naming reflects function, not style: e.g. `hero-cta-join`, `focus-list-children-education`, `admin-login-btn`, `contact-submit`, `step-dot-2`, `person-priya-sharma`.
- Contrast is high everywhere: forest (#2A3B2C) on ivory (#F9F6F0) passes WCAG AA at all text sizes.
- Focus states inherit from browser + underline-input `border-bottom` change to terracotta.
- Ripple motifs and background images use `aria-hidden` / `alt` semantically.

---

## 12. Design Tokens Location

- **CSS variables & utility classes:** `/app/frontend/src/index.css` (`:root` block + custom classes: `.km-input`, `.km-checkbox`, `.step-dot`, `.btn-ripple`, `.img-zoom`, `.link-soft`, `.ripple-bg`, `.ripple-out-anim`).
- **Tailwind config:** `/app/frontend/tailwind.config.js` (shadcn's HSL tokens are mapped to the ivory/forest palette via `--background`, `--foreground`, `--primary`, `--accent` etc.).
- **UI primitives:** `/app/frontend/src/components/UI.jsx` (`Section`, `Eyebrow`, `H1/H2/H3`, `Lead`, `Body`, `Button`).
- **Ripple motif:** `/app/frontend/src/components/RippleMotif.jsx`.
- **Design source-of-truth artifact:** `/app/design_guidelines.json`.

---

## 13. Anti-Patterns (Never Do)

- Purple / violet gradients.
- Cold blue palettes.
- Inter / Roboto / system fonts.
- Uniform bordered card grids with drop shadows.
- Emoji in copy (icons come from lucide-react only).
- `transition: all`.
- Dark text on dark backgrounds.
- Making backgrounds darker for "emphasis" — the forest section is the darkest surface.
- Marketing-style hero flash. Kamala Muditam whispers; it does not shout.

---

_End of design document._
