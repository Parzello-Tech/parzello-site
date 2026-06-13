# Parzello Tech — Design System

A brand & UI design system for **Parzello Tech**, an Indonesian *startup and digital
agency* that builds intuitive, efficient mobile and web applications. The brand's
visual identity is dark, glassmorphic, and purple-gradient — born in its Instagram
content system and extended here to product and web surfaces.

> **Tagline:** *Digital Solutions for Your Business Growth*
> **Promise:** *Powerful Apps. For Everyone.* — Technology should be accessible.
> **Handles:** IG [@parzello.tech](https://instagram.com/parzello.tech) · web [parzello.my.id](https://parzello.my.id) · [github.com/Parzello-Tech](https://github.com/Parzello-Tech)

---

## Sources (provided inputs)

This system was reconstructed from real Parzello assets. If you have access, explore
them to build with higher fidelity:

- **Figma:** *"POST DESIGN.fig"* — the Instagram carousel + reels template system
  (covers, profile slides, end slides, reels, web banners). This is the canonical
  source of the brand's visual language.
- **Brand palette & logos:** `Color Pallete.png`, `Parzello Logo` set (mark, lockup,
  wordmark, black/white variants) — copied into `assets/`.
- **Fonts:** Helvetica Now Display (full weight range) and Plus Jakarta Sans, supplied
  as TTFs and installed in `fonts/`.
- **GitHub:** [`Parzello-Tech/parzello-site`](https://github.com/Parzello-Tech/parzello-site)
  — the live agency website (built on the Once UI *Magic Portfolio* template). Real
  company copy, project list, and team info were lifted from `src/resources/content.tsx`.
  Other Parzello repos worth browsing: `ticzy-web`, `E-Konsul_PNL-Web`, `parzello_canvas`.

> **Note on the website:** the live site ships the *default* Once UI theme (Geist font,
> cyan accent). That is template chrome, **not** the Parzello brand. This system treats
> the **dark / purple / glass** identity from the Figma post system as canonical, and the
> `ui_kits/website` recreation re-skins the real site content in the true brand.

---

## Content Fundamentals — how Parzello writes

- **Bilingual, English-forward.** Marketing headlines and social labels are in **English**
  ("Powerful Apps. For Everyone.", "Who's Behind Parzello?", "Follow for More"). Long-form
  body and product descriptions are often in **Bahasa Indonesia** ("Parzello Tech adalah
  startup sekaligus digital agency..."). Keep this split: punchy English headlines, warm
  Indonesian detail copy.
- **Voice: confident, plain, human.** Short declarative sentences. Benefit-first
  ("Digital Solutions for *Your* Business Growth"). It speaks as **"we"** (a team/agency)
  to **"you"** (the client/audience).
- **Casing.** Headlines are **Title Case** or sentence case, never ALL-CAPS — except
  small **category badges** which are UPPERCASE ("TECH UPDATE", "NEW"). Pills and labels
  use sentence case ("Let's Swipe", "Tech Info").
- **Punctuation.** Curly apostrophes ("Let's", "Who's"). Slashes for compact meta
  ("Founder / CEO", "Page 2 / 6"). The "|" separator in handles ("IG | @parzello.tech").
- **No emoji** in headlines or UI. The brand reads as a serious-but-approachable tech
  studio; iconography is geometric, not emoji. (Avoid the AI-slop emoji-card look.)
- **Vibe:** modern, premium, a little futuristic — "indie studio with startup polish."
  Aspirational without hype. Examples to echo: *"Meet the faces turning ideas into
  reality."*, *"Simple apps that empower your everyday life."*

---

## Visual Foundations

- **Canvas is BLACK.** Everything sits on `#000` (or near-black `#0c0c0c`). The brand is
  dark-first; light surfaces are rare and only appear as photographic/glass insets.
- **Purple is the signature.** A violet→indigo gradient (`#8A38F5 → #6C24FE → #5315FF`)
  carries the logo, CTAs, and accents. **Magenta `#FB04B0`** is a *spark* color — used
  sparingly for a single highlight, never as a fill field.
- **Glassmorphism is the core motif.** Frosted panels: ~1–4% white fill, heavy
  `backdrop-filter: blur(90px)`, a hairline `inset 1px rgba(255,255,255,0.5)` stroke, and
  a large **74px** radius. Most glass cards carry a bright **"top-light" bar** (8px,
  white or purple at 50%) across the upper edge — the brand's most recognizable detail.
- **Type:** **Helvetica Now Display** does everything visual — **Black (900)** for tight,
  −0.02em headlines (up to 96px on a 1080 canvas), **Light (300)** for sublines, labels,
  and footer pills (the signature thin look). **Plus Jakarta Sans** handles web/product
  long-form body. Line-height 1 on headlines, ~1.2–1.5 on body.
- **Backgrounds:** black base + a **purple aurora glow** rising from the bottom
  (radial gradient), or full-bleed photography with a bottom-up **scrim**
  (`rgba(0,0,0,0) → 0.9`) for legibility. Occasional 3D glass-orb renders behind content.
- **Shape language:** capsule **pills** (60px radius) for nav/meta; **badges** (20px
  radius) for categories; **cards** (28px) for media; **glass** (74px) for hero panels.
- **Borders & shadows:** borders are hairline white-alpha strokes (rendered as inset
  box-shadow so they hug the radius). The brand prefers **glow over drop-shadow** — soft
  white/purple radial glows rather than hard elevation. Drop shadows only for floating
  UI off-canvas (e.g. web cards: `0 24px 80px rgba(0,0,0,0.55)`).
- **Transparency & blur:** used constantly — frosted pills (blur 200px on tiny chips,
  60px on badges), glass panels (blur 90px), text frosting (blur 30px). Blur is the
  material, not a one-off effect.
- **Corner radii:** generously rounded everywhere; nothing is sharp-cornered.
- **Imagery vibe:** photographic portraits on clean/neutral backgrounds, or moody 3D
  chrome/glass renders. Cool-to-neutral, high-contrast, premium. No warm grain, no
  hand-drawn illustration.
- **Motion (web/product):** smooth, slightly springy ease-out (`cubic-bezier(0.22,1,0.36,1)`),
  ~140–420ms. Hover = subtle lift (`translateY(-4px)`) + brightening stroke. Press =
  slight scale-down. Fades and rises, never bounces or spins. No infinite decorative loops.

---

## Iconography

Parzello's posts use a **minimal, geometric** icon approach — there is **no custom icon
font** in the brand assets. Social posts rely on a few line glyphs (globe, Instagram
mark) rendered as small white SVGs inside meta rows, and on **text-in-pills** rather than
icon-heavy chrome. **Emoji are not used.**

- For product/web UI in this system, use a single consistent **outline** icon set —
  **[Lucide](https://lucide.dev)** (1.5–2px stroke) is the recommended CDN match: it sits
  on-brand with the thin Helvetica Now Light weight. *(Substitution — flagged: no
  proprietary Parzello icon set was provided.)*
- Keep icons **white or white-alpha** on dark; tint purple only for a deliberate accent.
- The **logo mark** itself (the gradient "P" ribbon) is the one fixed brand glyph — never
  recolor or reconstruct it; always use the supplied raster (`assets/parzello-mark.png`).

---

## Index / Manifest

**Foundations**
- `styles.css` — global entry point (import this one file). `@import`s all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `fonts/` — Helvetica Now Display + Plus Jakarta Sans TTFs.
- `assets/` — logo mark/lockup/wordmark variants, team photo, aurora & reels backgrounds.
- `guidelines/` — specimen cards (colors, type, spacing, glass, logo, pills) for the
  Design System tab.

**Components** (`components/`, bundled to `window.ParzelloTechDesignSystem_*`)
- `core/` — `Logo`, `Pill`, `Badge`, `GlassCard`
- `post/` — `PostCanvas`, `PostHeader`, `PostFooter`

**UI Kits** (`ui_kits/`)
- `social-posts/` — the Instagram **carousel + reels** system (the hero kit).
- `website/` — on-brand recreation of the **parzello.my.id** agency homepage.

**Other**
- `SKILL.md` — portable skill manifest (works as an Agent Skill in Claude Code).

---

*Caveats & open questions are tracked at the bottom of this turn's summary. This system is
a first pass — tell us what to push further.*
