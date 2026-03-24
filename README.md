# ACME Website

This is a standard React + Vite project that can be self-hosted on any static hosting provider.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Configure environment variables:

Create a `.env` file in the project root and add:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

4. Open the printed local URL in your browser.

## Production build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploy the generated `dist/` folder to any static host, for example:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Nginx / Apache

## Notes

- Base44-specific auth and build plugin integrations have been removed.
- The app now uses plain React Router routes and standard Vite configuration.
# acme-agencies
