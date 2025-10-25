import { useMemo, useState } from 'react';
import OfferList from '../components/OfferList.jsx';
import useOffers from '../hooks/useOffers.js';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { offers, categories, isLoading, error } = useOffers(activeCategory);

  const pills = useMemo(
    () =>
      categories.map((category) => ({
        label: category,
        value: category
      })),
    [categories]
  );

  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Ready Steady Ranked</h1>
        <p>Curated affiliate offers designed to convert with trend-backed creative insights.</p>
      </header>

      <nav className="filter-bar" aria-label="Offer categories">
        {pills.map((pill) => (
          <button
            key={pill.value}
            type="button"
            className={`pill ${activeCategory === pill.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(pill.value)}
          >
            {pill.label}
          </button>
        ))}
      </nav>

      {isLoading ? <p>Loading offers…</p> : null}
      {error ? <p role="alert">We hit a snag: {error}</p> : null}
      {!isLoading && !error ? <OfferList offers={offers} /> : null}
    </main>
  );
};

export default Home;
