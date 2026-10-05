# Maa Uma Events

Edition 02: a complete four-page React website with a warm plum, chalk and pale citron identity. Redesigned with an editorial opening, rounded navigation and a custom MU vector logo.

## Run locally (Windows / macOS / Linux)

Install Node.js 22.13 or newer. Extract this ZIP, open the `maa-uma-events` folder in VS Code, and open a terminal in the folder containing `package.json`.

```bash
npm install
npm run dev
```

Open the local address printed in your terminal (normally http://localhost:5173).

```bash
npm run build
```

## Pages

- `/` — Home: cinematic hero, introduction, event worlds, immersive concert section, process, service highlights and invitation to plan.
- `/about` — About: story, philosophy, planning process, working principles and brand belief.
- `/events` — Events: five interactive categories, all 22 included services, inspiration gallery, process and FAQs.
- `/contact` — Contact: validated downloadable brief, planning steps, checklist, FAQs and inspiration.

## Animation

Lenis smooth scrolling, an interactive three-scene hero with play/pause and manual controls, perspective photo transitions, pointer-responsive 3D tilt, sequential reveals, slow image movement, interactive event-category previews and an animated marquee. Reduced-motion preferences are respected. Mobile uses touch scrolling and responsive layouts.

## Edit your site

- Page content, categories, form and shared layout: `app/site.tsx`
- Theme, typography, responsive design and motion: `app/globals.css`
- Page title and description: `app/layout.tsx`
- Images: `public/images/`

## Before taking enquiries

The form downloads a text brief locally; it does not email, store or submit an enquiry. Add the business's confirmed email/phone/address and a real submission integration before using it to receive enquiries. Never show a success message until submission actually succeeds.

The contact information, team identities, testimonials and performance statistics have deliberately not been fabricated. The brand spelling is currently “Maa Uma Events”.

Reference event images are illustrative, not a portfolio claim. Source pages are listed in `ASSET-SOURCES.md`. Replace them with licensed brand photos before commercial public release. Bricolage Grotesque, Instrument Serif and Manrope fonts are bundled locally, with system fallbacks. Their license files are in public/fonts.

## Validation

TypeScript check and production build passed. Browser visual and interaction testing was not available in this session. The site has not been deployed.

## Stack

React 19, TypeScript, Vinext (React framework with Next-style routes), Lenis, Lucide, Radix UI, Tailwind CSS and custom CSS.

## Temporary logo

Original code-native MU monogram and wordmark: `public/brand/logo-dark.svg` and `public/brand/logo-light.svg`. Both are editable SVGs with transparent backgrounds. Used in the header and footer; a matching favicon is included.

## Edition 02 updates

- Floating three-part rounded navigation, active-page pills and keyboard-dismissible mobile menu.
- Bold display typography, expressive serif accents and readable body copy.
- Wedding, corporate and live-event opening scenes with manual controls and pause.
- Interactive event atlas, detailed service cards and redesigned footer.
- Updated styling across About, Events and Contact.
- All original categories and 22 services retained; no Branding or Invitation Card offering.
- Source remains local-only pending permission to deploy.
