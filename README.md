# Matpol

A simple one-page website for Matpol, offering in-person Polish and mathematics tutoring in Szczecin.

## Local development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Content configuration

Edit the main page in `src/pages/index.astro`. Before publishing, add the contact details and, if available, the tutors’ names. Phone numbers are currently text placeholders; when the real numbers are available, add `tel:` links as well. You can also change the lesson address (currently Szczecin, UL. SMOLAŃSKA 4) and lesson length (currently 60 minutes) in the same file.

The SEO title and description are defined in `src/consts.ts`. The header logo is `public/matpol-logo-montserrat-web.svg`, with a transparent background, editable text, and an embedded Montserrat SemiBold font. The default Open Graph image is its PNG counterpart, `public/matpol-logo-montserrat.png`; update both assets when changing the logo.

## Build and deployment

```bash
npm run build
npm run deploy
```

The canonical URL and absolute Open Graph URLs are generated only when `SITE_URL` is set during the build, for example:

```bash
SITE_URL=https://matpol.example npm run build
```

The project uses the Cloudflare adapter and can be deployed as a static site on Cloudflare Workers.
