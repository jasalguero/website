# Jose Salguero — personal site

A portable static personal site built with semantic HTML, CSS, JavaScript, and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable static site is generated in `dist/` and can be hosted on any static provider.

## Design

The site uses a single responsive Swiss Grid design with bold typography, precise structure, restrained color fields, and subtle motion.

## Contact form

The form uses a `mailto:` link so the site remains fully static and provider-independent. Submitting it opens the visitor's configured email app with a message addressed to `contact@jasalguero.com`; the visitor reviews and sends the email from there.
