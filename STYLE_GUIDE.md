# Ohaeng Style Guide

The design system for Ohaeng, as of the "design roadmap" pass. This is the
reference for any new UI — when in doubt, match what's documented here
instead of inventing a new value.

## Color

Defined as CSS custom properties in `src/styles/global.css`, with a light
palette on `:root` and a dark override under `html[data-theme='dark']`.

| Token | Role |
|---|---|
| `--bg` | Page background — flat neutral gray/near-black, no color wash. Revised in the "clean background" pass: an earlier version tinted this with `--accent` via a radial gradient, which read as busy/dated rather than premium. Backgrounds stay neutral; `--accent` is reserved for interactive/highlighted elements only. |
| `--surface` | Card / pill background (translucent, blurs the background behind it) |
| `--text` / `--text-muted` | Primary and secondary text |
| `--accent` | The one brand color — buttons, links, headings, focus states |
| `--accent-contrast` | Text color placed on top of `--accent` |
| `--border` / `--shadow` | Hairlines and drop shadows |
| `--el-wood` / `--el-fire` / `--el-earth` / `--el-metal` / `--el-water` | Five Element colors, used anywhere an element needs to be color-coded (badges, gradients, share cards) |

Rule: **one accent color**, not a rainbow of brand colors. Element colors
are the only place we intentionally break that rule, because the whole
product is about the five elements being visually distinct from each other.

## Typography

**Font: [Pretendard](https://github.com/orioncactus/pretendard)** (SIL OFL,
free), loaded via `@import 'pretendard/dist/web/static/pretendard-dynamic-subset.css'`
in `global.css`. It was chosen over the previous system-font stack
(`Segoe UI` / `Malgun Gothic` / `Apple SD Gothic Neo`) because it renders
both Latin and Hangul well in the same typeface — relevant since the app is
English-first but the product itself (saju, 오행) is Korean. The dynamic
subset only downloads the glyph ranges actually used on a given page, so an
English-only screen stays cheap.

Type scale (`--text-*` tokens in `global.css`):

| Token | Size | Typical use |
|---|---|---|
| `--text-xs` | 12px | Disclaimers, fine print |
| `--text-sm` | 13px | Labels, subtitle, header nav links |
| `--text-base` | 15px | Body copy inside cards |
| `--text-md` | 16px | Buttons |
| `--text-lg` | 18px | Card section headings (`h2`) |
| `--text-xl` | 20px | Icon buttons |
| `--text-2xl` | 26px | Page `h1` |

`h1` is weight 800; section headings inside cards are weight 700 (set
per-component, since they're not a shared class yet — see Scope note below).

## Spacing

`--space-1` through `--space-7` = 4px, 8px, 12px, 16px, 24px, 32px, 48px.
Everything is a multiple of 4px. Prefer the token closest to the gap you
want rather than a one-off pixel value.

## Icons: the Four Symbols language

`public/icons/elements/{wood,fire,earth,metal,water}.png` are the five
element icons, illustrated in the 사신도 (Four Symbols) style: 청룡 (Wood),
주작 (Fire), 황룡 (Earth), 백호 (Metal), 현무 (Water). Any future graphic
representing an element — a new badge, a decorative watermark, a pattern —
should either reuse these exact assets or match their visual language:

- Flat vector, rounded shapes, no photorealism
- A single circular frame with a thin light border
- Character/creature centered and facing forward

`ElementPattern.jsx` (added in the design pass) extends this language into
abstract line-art motifs (see below) for places a full illustration would
be too busy — like a small avatar.

## Brand direction: 사신도 for data, clean neutral chrome everywhere else

Revised in the "clean background" pass — the earlier version of this section
said to scatter Four Symbols icons as ambient background texture on
prominent screens (`FourSymbolsBackdrop.jsx`, a large faded icon collage
behind Landing's content). User feedback: it read as cluttered, not premium.
That component is deleted; the current rule is narrower:

- The Four Symbols icons appear **only where they represent real computed
  oheng data** — the element badge on a result, `MemberAvatar.jsx` +
  `ElementPattern.jsx` avatars, and share-card watermarks
  (`ShareCardWatermark.jsx`, which stays — it's a small flourish on a
  shareable image, not a page background).
- They do **not** appear as decoration on plain page backgrounds, and not
  as the icon for a generic UI element like a home-screen menu row —
  `MenuIcon.jsx` uses simple single-color line icons for that instead (see
  below), reserving the illustrated animal icons for moments that are
  actually "this is your element."
- Page backgrounds are flat and neutral (see Color, `--bg`). Don't add a
  colored gradient or a background icon/texture to a new screen — that's
  the exact busy, in-between tone this revision moved away from.
- Don't introduce a second illustration style (e.g. cutesy mascot
  characters) alongside the Four Symbols for data — pick one visual
  language for "this is an oheng element" and keep extending it.

## Menu icons

`MenuIcon.jsx` — plain single-color (`currentColor`) line icons, 24x24
viewBox, ~1.7px stroke, no fill except the star/heart marks. Sits in a flat
`--accent`-tinted circle (`color-mix(in srgb, var(--accent) 12%,
transparent)`), not a gradient ring. Used for home-screen menu rows only.
When adding a new menu row, add a new icon here rather than reusing a Four
Symbols element icon — see Brand direction above for why.

## Accessibility: touch targets

Primary buttons (`.button`) land close to 44px tall by design (padding +
line-height). `.icon-button` (the theme toggle) was bumped from 40px to
44px explicitly to meet that minimum. Header nav pills (`.header-link`)
are intentionally left smaller (~32px) — they're secondary navigation on an
already-tight mobile header (3 pills + logo + toggle at ~390px width), and
widening them further to hit 44px would force wrapping or overflow. If the
header nav grows again, that trade-off should be revisited (e.g. collapsing
into a menu) rather than just padding everything out.

## Where this is actually applied (scope note)

The tokens above are wired into the shared rules in `global.css` — `body`,
`.page`, `.site-header`, `.header-link`, `h1`, `.subtitle`, `.card`,
`.button` — which covers most of the app's visual surface. Per-component
inline styles in JSX (there are a fair number, mostly in the share card
components and result pages) were **not** all rewritten to reference these
tokens; that's a larger follow-up if it's ever worth doing. New components
should use the tokens directly rather than hardcoding new pixel values.
