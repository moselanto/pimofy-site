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


## Performance, accessibility & SEO built in

- **Performance:** no frameworks; single CSS + single deferred JS; font preconnect; lazy-friendly images. Animations are CSS-based and respect `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, skip link, visible focus states, ARIA on nav/dropdown/FAQ, keyboard-operable menus, labelled form fields.
- **SEO:** unique title + meta description + canonical per page; Open Graph on Home; Organization schema (Home) and FAQ schema (Data Operations) as JSON-LD.


## Browser support

Tested patterns work in current Chrome, Safari, Firefox, and Edge. IntersectionObserver has a graceful fallback (content shows even if unsupported).
