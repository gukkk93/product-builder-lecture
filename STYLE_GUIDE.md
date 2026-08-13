# Ohaeng Style Guide

The design system for Ohaeng, as of the "design roadmap" pass. This is the
reference for any new UI — when in doubt, match what's documented here
instead of inventing a new value.

## Color

Defined as CSS custom properties in `src/styles/global.css`, with a light
palette on `:root` and a dark override under `html[data-theme='dark']`.

| Token | Role |
|---|---|
| `--bg` | Page background (used inside a radial gradient with `--accent`) |
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

## Where this is actually applied (scope note)

The tokens above are wired into the shared rules in `global.css` — `body`,
`.page`, `.site-header`, `.header-link`, `h1`, `.subtitle`, `.card`,
`.button` — which covers most of the app's visual surface. Per-component
inline styles in JSX (there are a fair number, mostly in the share card
components and result pages) were **not** all rewritten to reference these
tokens; that's a larger follow-up if it's ever worth doing. New components
should use the tokens directly rather than hardcoding new pixel values.
