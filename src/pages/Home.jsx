import { useMemo, useState } from 'react';
import ProductGrid from '../components/ProductGrid.jsx';
import useProducts from '../hooks/useProducts.js';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { products, categories, isLoading, error } = useProducts(activeCategory);

  const pills = useMemo(
    () =>
      categories.map((category) => ({
        label: category === 'all' ? 'All Gear' : category,
        value: category
      })),
    [categories]
  );

  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Ready Steady Ranked</h1>
        <p>
          Field-tested survival, emergency, and preparedness gear with standout Amazon reviews.
          Skip the scroll fatigue and get straight to the equipment the community trusts when it
          matters most.
        </p>
      </header>

      <nav className="filter-bar" aria-label="Gear categories">
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

      {isLoading ? <p>Gathering top-rated gear...</p> : null}
      {error ? <p role="alert">We hit a snag: {error}</p> : null}
      {!isLoading && !error ? <ProductGrid products={products} /> : null}
    </main>
  );
};

export default Home;
