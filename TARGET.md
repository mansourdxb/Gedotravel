# Target Website

## URL

https://travco.com/en/

## Project Context

This is a **rebrand clone**. We have written permission from the source owner to base the new site on the travco.com structure, content, and visual language. The deliverable is a fully rebranded site for our company.

- **New company name (English):** Gedotravel
- **New company name (Arabic):** جدو ترافيل
- **Source-of-truth rebrand spec:** `BRAND.md`

Because we have permission, builder agents may retain travco.com's layout, copy structure, imagery references, and visual design language. The required swap is the **identity layer only** — every occurrence of the Travco name, logo, wordmark, and contact details becomes Gedotravel.

## Scope

### Pages to Replicate

The full Travco English site at `travco.com/en/`. The recon phase should crawl the top navigation and footer to enumerate the complete page set, then list it back for confirmation before dispatching builders. Expected minimum:

- Home
- About / company overview
- Services / business units (as structured on the source — DMC, transportation, MICE, etc.)
- Destinations (Egypt-focused: Cairo, Luxor, Aswan, Red Sea, etc., per the source navigation)
- Tours / packages listing + at least one detail template
- Contact (form with mock submit handler)
- Any additional pages discovered during recon (news, careers, terms, privacy)

### Fidelity Level

**High fidelity** — same layout, component structure, spacing patterns, and overall feel as travco.com. Minor visual deviations acceptable so the Gedotravel identity layers cleanly. Not strict pixel-perfect — that would over-constrain the rebrand.

### Localization

Bilingual: **English + Arabic with RTL**.

- Default locale: `en`
- Second locale: `ar` with `dir="rtl"` on `<html>` for AR routes
- Recommended i18n stack: `next-intl` (clean App Router integration). Confirm compatibility with Next.js 16 conventions in the foundation phase.
- Tailwind: prefer CSS logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) and `rtl:` variants over hard-coded `ml-*` / `mr-*` where directionality matters.
- Fonts: pair the Latin display/body fonts with a quality Arabic web font during foundation. Suggested fallbacks for AR: Cairo, IBM Plex Arabic, Noto Sans Arabic. Final choice goes in `BRAND.md`.
- Numerals: Western Arabic (0–9) by default.
- Routes available at `/en/...` and `/ar/...`. Root `/` redirects to user's preferred locale (Accept-Language header, fallback `en`).

### In Scope

- Visual layout, structure, and component behavior matching travco.com at high fidelity
- Responsive design across mobile, tablet, and desktop breakpoints from the source
- Full bilingual EN/AR with working RTL
- Mock data for tours, destinations, testimonials, news
- Mock contact form (no real backend)
- SEO meta structure under the Gedotravel brand (titles, descriptions, OG tags, sitemap)

### Out of Scope

- Real backend, booking engine, payments
- Authentication / customer portal
- Live availability or pricing feeds
- Real email delivery from contact form
- CMS integration
- Full accessibility audit (basic semantics only — agents should still use proper landmarks, alt text, focus order)

## Why

Standing up the Gedotravel brand presence as a working, deployable site. The Travco structure is our reference under owner permission; the Gedotravel identity, contact details, legal pages, and ongoing content are ours.

## Customization Plans (post-clone)

After the base clone passes visual diff against the source:

1. **Identity swap** — Gedotravel logo, wordmark, brand colors, typography per `BRAND.md`
2. **Contact details** — Gedotravel address, phone, email, social handles (PM to provide)
3. **Legal pages** — fresh Privacy, Terms, Cookie notices written for Gedotravel jurisdiction
4. **Footer** — "© {YEAR} Gedotravel" / "© {YEAR} جدو ترافيل"; no Travco copyright line
5. **Meta + SEO** — Gedotravel-specific titles, descriptions, OG images, robots, sitemap, favicon set
6. **Locale polish** — native Arabic writer reviews `messages/ar.json` end-to-end; no machine-translated copy ships
