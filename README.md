# Pimofy Digital — Website (HTML / CSS / JS)

A fast, responsive, accessible marketing site for Pimofy Digital, built to match the approved mockups. No build step, no frameworks — plain HTML, one stylesheet, one script.

## File structure

```
pimofy-site/
├── index.html            # Home
├── solutions.html        # Solutions overview
├── data-operations.html  # The Data Operations Pod™ (service detail, incl. FAQ)
├── capacity-audit.html   # Free Operations Capacity Audit™
├── industries.html       # Industries (SaaS / Ecommerce)
├── resources.html        # Resources / blog hub
├── about.html            # About
├── contact.html          # Book a Call / Contact (Calendly + fallback form)
├── styles.css            # Global design system + responsive + animations
├── script.js             # Nav, dropdown, mobile menu, FAQ, scroll-reveal, form
└── assets/
    ├── logo.png          # Brand logo
    ├── hero.jpg          # Homepage hero image
    └── team.jpg          # About page team image
```

## Brand & design

- **Primary purple:** `#5b1fe0` (from logo) · **Conversion accent orange:** `#ff5a1f` (logo dot, used for primary buttons)
- **Font:** Inter (Google Fonts)
- All colors, spacing, and shape live as CSS variables at the top of `styles.css` (`:root`) — change them once to re-theme the whole site.

## How to run locally

It's a static site, so any of these works:

**Option A — open directly:** double-click `index.html`. (Calendly embed and some browsers prefer a server; use B for full fidelity.)

**Option B — local server (recommended):**
```bash
# Python 3
cd pimofy-site
python3 -m http.server 8000
# then visit http://localhost:8000
```
```bash
# Node (if you prefer)
npx serve pimofy-site
```

## Before you go live — 3 quick edits

1. **Calendly:** in `contact.html`, replace the placeholder div's `data-url` with your real link, and uncomment the Calendly widget script (instructions are in the HTML comment there).
2. **Email address:** swap `hello@pimofydigital.com` (footer + contact page) for your real address.
3. **Contact form:** in `script.js` (section 6), POST the form to your provider (Formspree, Netlify Forms, or your CRM). Right now it validates and shows a success message client-side only.

## How to deploy

Pick whichever you prefer — all are free for a static site:

- **Netlify (drag & drop):** go to app.netlify.com → "Add new site" → "Deploy manually" → drag the `pimofy-site` folder. Point your domain at it in Site settings → Domain.
- **Vercel:** `npm i -g vercel` → `vercel` from the folder, follow prompts.
- **GitHub Pages:** push the folder to a repo → Settings → Pages → deploy from `main`.
- **Existing WordPress host / cPanel:** upload the files to `public_html` via FTP. (Note: this is a standalone static site, not a WordPress theme — host it on a subdomain or replace the current site.)

## Performance, accessibility & SEO built in

- **Performance:** no frameworks; single CSS + single deferred JS; font preconnect; lazy-friendly images. Animations are CSS-based and respect `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, skip link, visible focus states, ARIA on nav/dropdown/FAQ, keyboard-operable menus, labelled form fields.
- **SEO:** unique title + meta description + canonical per page; Open Graph on Home; Organization schema (Home) and FAQ schema (Data Operations) as JSON-LD.

## Recommended next steps (optional)

- Add `sitemap.xml` and `robots.txt`, submit to Google Search Console.
- Replace the AI-generated hero/team images with real client/team photos when available.
- Optimize/serve images as WebP for an extra speed gain.
- Add real article pages behind the Resources cards.

## Browser support

Tested patterns work in current Chrome, Safari, Firefox, and Edge. IntersectionObserver has a graceful fallback (content shows even if unsupported).
