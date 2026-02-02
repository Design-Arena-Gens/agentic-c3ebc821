# Boring Mais Cher

Landing page Next.js pour un faux SaaS volontairement banal mais facture tres cher. L'objectif est de presenter l'offre, ses differenciateurs, la grille tarifaire et un formulaire de prise de contact premium.

## Scripts

- `npm run dev` lance le serveur de developpement.
- `npm run lint` verifie les erreurs ESLint.
- `npm run build` cree la version de production.
- `npm run start` demarre la version construite.

## Structure

- `src/app/page.tsx` contient le contenu marketing (sections hero, fonctionnalites, playbook, tarifs, FAQ, formulaire).
- `src/app/layout.tsx` configure les polices, les metadonnees et le fond global.
- `src/app/globals.css` applique le theme sombre avec effets glassmorphism.
- `public/og-image.svg` fournit l'illustration Open Graph pour le partage.

## Deploiement

Apres verification locale (`npm run lint` puis `npm run build`), deployez via Vercel :

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-c3ebc821
```

Le site s'attend a etre servi depuis `https://agentic-c3ebc821.vercel.app`.
