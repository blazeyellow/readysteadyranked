# Ready Steady Ranked

Curated React front end showcasing the highest-rated survival, emergency, and preparedness gear on Amazon. The data layer is mocked so you can iterate on UX, filtering, and outbound tracking before wiring up a live catalog API.

The interface leans into a magazine-inspired presentation with editorial typography, section kickers, featured reviews, and newsletter briefings to keep the experience immersive while you prototype.

### Brand palette

- Primary accents & CTAs: `#F26B1D`
- Headlines, navbar, footer: `#2B2B2B`
- Backgrounds: `#E7E7E7` (body), `#FFFFFF` (cards/sections)
- Links & icons: `#3C6E91` with `#FFC145` hover state
- Badges & rating highlights: `#FFC145`
- Light text on dark surfaces: `#FAFAFA`

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Project structure

- `src/api/productsApi.js` – Simulated API calls and future tracking placeholder.
- `src/hooks/useProducts.js` – React hook that drives filtering/loading state.
- `src/data/survivalProducts.js` – Mock catalog of Amazon survival gear.
- `src/data/homepageContent.js` – Stubbed hero, carousel, review, and article metadata.
- `src/components/TopNav.jsx` – Sticky navigation for primary sections and gear subcategories.
- `src/components` – Hero, top rankings carousel, methodology, featured review, product grid, articles, newsletter, footer, and supporting UI pieces.
- `src/pages/Home.jsx` – Landing page composition wiring the homepage sections together.

Swap the mocked API and data modules for real endpoints when the backend is ready, keeping the hook and presentation logic intact.
