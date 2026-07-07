# Columbia Undergraduate Wealth Management Club Website

The CUWMC website, built with Next.js 14, React 18, TypeScript, and Tailwind CSS. Hosted on Vercel; pushes to `main` auto-deploy to columbiawm.org within about a minute.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Test changes locally before pushing. See `README-NEXTJS.md` for the full project structure.

## Editing the E-Board

The executive board roster lives in `data/eboard.ts` — edit that file to update names, roles, bios, photos, and LinkedIn links. Headshots go in `public/assets/imgs/portraits/`. Members without a photo render an initials placeholder and are marked with a `// TODO(photo)` comment.
