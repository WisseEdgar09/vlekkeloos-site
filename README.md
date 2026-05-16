# Vlekkeloos · website

A bilingual (NL/EN) marketing site for Schoonmaakbedrijf Vlekkeloos.
Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).
Static-rendered, fast, deployable to Vercel, Netlify, or Cloudflare Pages.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (opens at http://localhost:4321)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires Node 20+.

---

## What's in here

```
.
├── astro.config.mjs        # i18n routing config (NL default, EN at /en/)
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg         # Inline-generated bubble mark
├── src/
│   ├── assets/             # Logo PNGs — wire these in via <Image> when needed
│   │   ├── logo.png        # Full logo (wordmark + bubbles)
│   │   └── icon.png        # Bubbles only
│   ├── components/         # One component per homepage section
│   │   ├── Audiences.astro
│   │   ├── Footer.astro
│   │   ├── Founders.astro
│   │   ├── FinalCTA.astro
│   │   ├── Hero.astro
│   │   ├── LangSwitch.astro
│   │   ├── Motto.astro
│   │   ├── Nav.astro
│   │   └── Work.astro
│   ├── i18n/
│   │   └── ui.ts           # All translation strings — edit here, both langs
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # / (NL homepage)
│   │   ├── contact.astro   # /contact (NL quote form)
│   │   └── en/
│   │       ├── index.astro # /en (EN homepage)
│   │       └── contact.astro
│   └── styles/
│       └── global.css      # Design tokens + base styles
```

---

## Design tokens

Edit `src/styles/global.css` — every color, font, and radius lives in the `@theme` block.

| Token | Value | Where it's used |
|---|---|---|
| `--color-brand-blue` | `#0078B7` | Primary buttons, hero accent, links |
| `--color-brand-ink` | `#0A1929` | Body text, headlines |
| `--color-brand-canvas` | `#FAF7F2` | Page background (warm cream) |
| `--color-brand-tint` | `#E6F3FB` | Founders section background |
| `--color-brand-amber` | `#F4B942` | Final CTA only — used sparingly |

Typography pairing: **Bricolage Grotesque** (display) + **Inter Variable** (body), self-hosted via `@fontsource`.

---

## Editing content

**All copy is in one file:** `src/i18n/ui.ts`. Both languages share the same key shape, so adding a string means adding it to both `nl` and `en`.

To add a new page in both languages:
1. Add the new strings to `ui.ts`.
2. Create `src/pages/foo.astro` (NL — at `/foo`).
3. Create `src/pages/en/foo.astro` (EN — at `/en/foo`).
4. Link to it via `localizedPath(lang, '/foo')` from the i18n helpers.

---

## The contact form

Currently set up for **Netlify Forms** (works automatically when deployed to Netlify — no extra config).

### Switching to Formspree (any host)

If you deploy to Vercel/Cloudflare/elsewhere:

1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. In `src/pages/contact.astro` and `src/pages/en/contact.astro`:
   - Replace `action=""` with `action="https://formspree.io/f/YOUR_ID"`.
   - Remove the `data-netlify="true"` and `netlify-honeypot` attributes.
   - Remove the hidden `form-name` input.

### Switching to a custom backend

For more control (e.g. forwarding to a CRM later), make the form `action` point to a serverless function. Both Vercel and Netlify support these.

---

## Deployment

### Vercel (recommended for simplicity)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework: Astro (auto-detected). Build command: `npm run build`. Output: `dist/`.
4. Add your custom domain in Project Settings → Domains.
5. For the contact form, use Formspree (see above).

### Netlify (recommended if you want zero-config forms)

1. Push this repo to GitHub.
2. Import the repo at [app.netlify.com/start](https://app.netlify.com/start).
3. Build command: `npm run build`. Publish directory: `dist`.
4. The contact form Just Works — submissions appear in Site → Forms.

### Cloudflare Pages

Also works. Build command `npm run build`, output `dist/`. Use Formspree for forms.

---

## What's still to do

The scaffold is a working homepage + contact page. Things you'll want to add as you grow:

- [ ] **Real photos** — replace the founder placeholders in `Founders.astro` with `<Image>` (Astro's optimizer) once the shoot is done.
- [ ] **Real Instagram clips** — replace placeholders in `Work.astro` with `<iframe>` embeds or a lightweight Instagram embed component.
- [ ] **Service detail pages** — `src/pages/diensten/[service].astro` per service category, with deeper SEO copy.
- [ ] **Privacy + terms pages** — the [Algemene Voorwaarden PDF](/Algemene_voorwaarden_Schoonmaakbedrijf_Vlekkeloos.pdf) should be linked from the footer.
- [ ] **Analytics** — Plausible or Vercel Analytics (privacy-friendly, no cookie banner needed).
- [ ] **Google Search Console** — submit your sitemap once live (Astro can generate one via `@astrojs/sitemap`).
- [ ] **Open Graph image** — design a 1200×630 share card with the logo + tagline.

---

## Working with Claude Code

This repo is built to play well with Claude Code on your machine. Useful prompts:

- *"Add a `diensten/glasbewassing` subpage following the pattern of the homepage sections."*
- *"Replace the Instagram placeholders in Work.astro with real embeds — here are the post URLs: ..."*
- *"Add a testimonials section between Founders and Motto using these three quotes: ..."*
- *"Add Plausible analytics to BaseLayout.astro, domain vlekkeloos.nl."*

Claude Code can see this whole tree and the design tokens, so changes stay on-brand.
