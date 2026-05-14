# Gedotravel Brand Notes

Source of truth for the rebrand layer applied on top of the travco.com clone. Builder agents read this before assembling final components. Assembly + QA phase verifies every rule here.

## Identity

| Field | Value |
| --- | --- |
| English name | Gedotravel |
| Arabic name | جدو ترافيل |
| Pronunciation cue | "geddo-travel" — جَدّو is Egyptian colloquial for "grandpa", evoking familial warmth and trusted guidance |
| Tagline | TBD — leave a visible `TODO: tagline` placeholder, do not invent |
| Working domain | gedotravel.com (assumed; PM to confirm before launch) |

## Voice

- Warm, familial, Egyptian-rooted — the "جدو" prefix evokes a trusted family elder showing you around
- Professional enough for B2B work (DMC, MICE, corporate travel) — not childish
- Bilingual-native — Arabic copy is a first-class write, never a translation of the English

## Visual Direction

Builder agents must NOT guess these. Fill in during the foundation phase with PM input.

| Token | Value | Notes |
| --- | --- | --- |
| Primary color | `TODO` | Gedotravel-specific; need not match Travco |
| Accent color | `TODO` |  |
| Neutral scale | `TODO` | 50–950 oklch scale |
| Body font (Latin) | `TODO` |  |
| Body font (Arabic) | `TODO` | Suggested: Cairo, IBM Plex Arabic, Noto Sans Arabic |
| Display font | `TODO` |  |
| Logo | `TODO` — placeholder SVG until designed | Drop in `public/brand/logo.svg` and `logo-ar.svg` |

## Rebrand Rules for Builder Agents

We have content/structure permission from the source owner, so retention rules are intentionally light. The mandatory swap is identity:

1. **Replace every occurrence of "Travco" with "Gedotravel"** (EN routes) or "جدو ترافيل" (AR routes) in copy, meta, alt text, and component data. Search recon output before merging any worktree.
2. **Replace the Travco logo/wordmark** with the Gedotravel logo placeholder in every header, footer, favicon, OG image, loader, and email-style mock.
3. **Replace the brand color tokens** with the Gedotravel palette from the table above. Update `globals.css` design tokens during the foundation phase.
4. **Replace contact data** with Gedotravel placeholders until PM provides real values:
   - Address: `TODO: Gedotravel address`
   - Phone: `TODO: Gedotravel phone`
   - Email: `info@gedotravel.com` (working assumption)
   - Social handles: `TODO`
5. **Footer copyright:** `© {currentYear} Gedotravel. All rights reserved.` / `© {currentYear} جدو ترافيل. جميع الحقوق محفوظة.`
6. **OG / meta:** Open Graph site_name, Twitter title/handle, JSON-LD organization name all read "Gedotravel".

Layout, component structure, hero compositions, destination card patterns, testimonial slider behavior, navigation IA, mock copy patterns, and reference imagery — all OK to retain from recon output.

## Localization Rules

- Every text node must source from `messages/en.json` and `messages/ar.json` — zero hardcoded strings in either locale.
- Component directionality is driven by `dir` on `<html>`, not per-component logic. Tailwind `rtl:` variants and CSS logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) instead of hard-coded `ml-*`/`mr-*` where direction matters.
- Test every page in AR/RTL before marking a worktree ready to merge. Common breakage: sliders, carousels, breadcrumbs, paginations, form-field icon alignment, animation directions.
- Direction-implying icons (chevrons, arrows, "next/back", play buttons) mirror in RTL via `rtl:rotate-180` or symmetric variants.
- The Arabic mark `جدو ترافيل` is primary on AR routes. Never transliterate "Gedotravel" into Arabic letters in body text.
- Date and number formatting goes through `Intl.DateTimeFormat` / `Intl.NumberFormat` with the active locale.

## QA Checklist (assembly phase must pass all)

- [ ] No string "Travco" appears anywhere in `src/`, `public/`, `messages/`, or built output
- [ ] No Travco logo or original brand asset remains in `public/`
- [ ] Logo, favicon, apple-touch-icon, OG images use Gedotravel placeholders or final brand assets
- [ ] AR routes render correctly with `dir="rtl"` and mirrored directional icons
- [ ] Footer copyright reads Gedotravel / جدو ترافيل
- [ ] Meta titles, descriptions, OG site_name, Twitter handles reference Gedotravel
- [ ] All hardcoded EN/AR strings extracted into `messages/{en,ar}.json`
- [ ] `next.config.ts` i18n routing wired to `en` and `ar`
- [ ] Native AR review of `messages/ar.json` complete (or flagged for follow-up)
