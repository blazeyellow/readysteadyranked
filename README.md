# Ready Steady Ranked

Affiliate marketing React front-end scaffold built with Vite and React 18. The API layer is stubbed so you can focus on UI and flow before the backend is available.

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

- `src/api/affiliateApi.js` – Stubs for the future API endpoints.
- `src/hooks/useOffers.js` – React hook that handles fetching and state.
- `src/data/mockOffers.js` – Mocked offers that simulate API responses.
- `src/components` – UI building blocks for offers.
- `src/pages/Home.jsx` – Example page wiring the components together.

When the real API becomes available, replace the stubs in `src/api/affiliateApi.js` and adapt the `useOffers` hook to consume it.
