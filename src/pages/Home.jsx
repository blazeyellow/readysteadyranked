import { useMemo } from 'react';
import ProductGrid from '../components/ProductGrid.jsx';
import useProducts from '../hooks/useProducts.js';

const Home = ({ activeCategory, onSelectCategory }) => {
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
    <main id="home" className="page-container">
      <header id="gear-rankings" className="page-header">
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
            onClick={() => onSelectCategory(pill.value)}
          >
            {pill.label}
          </button>
        ))}
      </nav>

      {isLoading ? <p>Gathering top-rated gear...</p> : null}
      {error ? <p role="alert">We hit a snag: {error}</p> : null}
      {!isLoading && !error ? <ProductGrid products={products} /> : null}

      <section id="buyers-guides" className="content-section">
        <h2>Buyers' Guides</h2>
        <p>
          Deep-dive walkthroughs on the best survival gear stacks, from building blackout kits to
          assembling self-reliant bug out bags. Coming soon with expert-tested checklists.
        </p>
      </section>

      <section id="field-tests" className="content-section">
        <h2>Field Tests</h2>
        <p>
          Trail, range, and storm-scenario reviews where we push gear past spec sheets to uncover
          real-world strengths and failures. Expect video highlights and data tables in future
          releases.
        </p>
      </section>

      <section id="blog-news" className="content-section">
        <h2>Blog / News</h2>
        <p>
          Stay current on preparedness trends, supply chain alerts, and Amazon deal drops. We will
          publish rotating briefs and actionable tips to keep your kit mission-ready.
        </p>
      </section>

      <section id="about-contact" className="content-section">
        <h2>About / Contact</h2>
        <p>
          Ready Steady Ranked is built by preppers for preppers. Have intel, gear suggestions, or
          want to collaborate? Email contact@readysteadyranked.com and we will get back within 2
          business days.
        </p>
      </section>
    </main>
  );
};

export default Home;
