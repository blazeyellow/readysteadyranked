# Ready Steady Ranked

Curated React front end showcasing the highest-rated survival, emergency, and preparedness gear on Amazon. The data layer is mocked so you can iterate on UX, filtering, and outbound tracking before wiring up a live catalog API.

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
- `src/components` – Product grid, card, and supporting UI pieces.
- `src/pages/Home.jsx` – Landing page composition with category filters.

Swap the mocked API and data modules for real endpoints when the backend is ready, keeping the hook and presentation logic intact.
