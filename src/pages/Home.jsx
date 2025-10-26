import { useMemo } from 'react';
import HeroBanner from '../components/HeroBanner.jsx';
import TopRankingsCarousel from '../components/TopRankingsCarousel.jsx';
import QuickRankMethodology from '../components/QuickRankMethodology.jsx';
import FeaturedReview from '../components/FeaturedReview.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import LatestArticles from '../components/LatestArticles.jsx';
import NewsletterSignup from '../components/NewsletterSignup.jsx';
import useProducts from '../hooks/useProducts.js';
import {
  topRankingCollections,
  rankMethodology,
  featuredReview,
  latestArticles
} from '../data/homepageContent.js';

const Home = ({ activeCategory, onSelectCategory }) => {
  const { products, categories, isLoading, error } = useProducts(activeCategory);

  const handleCategoryChange = (value) => {
    onSelectCategory(value);
    const anchor = document.getElementById('gear-rankings');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pills = useMemo(
    () =>
      categories.map((category) => ({
        label: category === 'all' ? 'All Gear' : category,
        value: category
      })),
    [categories]
  );

  return (
    <main id="home">
      <div className="page-container">
        <HeroBanner onPrimaryAction={() => handleCategoryChange('all')} />
        <TopRankingsCarousel items={topRankingCollections} onSelectCategory={handleCategoryChange} />
        <QuickRankMethodology criteria={rankMethodology} />

        <section id="gear-rankings" className="content-section gear-section">
          <header className="page-header">
            <span className="card-kicker">Gear Rankings</span>
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
                onClick={() => handleCategoryChange(pill.value)}
              >
                {pill.label}
              </button>
            ))}
          </nav>

          {isLoading ? <p>Gathering top-rated gear...</p> : null}
          {error ? <p role="alert">We hit a snag: {error}</p> : null}
          {!isLoading && !error ? <ProductGrid products={products} /> : null}
        </section>

        <FeaturedReview review={featuredReview} />

        <section id="buyers-guides" className="content-section">
          <span className="card-kicker section-kicker">Buyers' Guides</span>
          <h2>Buyers' Guides</h2>
          <p className="section-lede">
            Deep-dive walkthroughs on the best survival gear stacks, from building blackout kits to
            assembling self-reliant bug out bags. Coming soon with expert-tested checklists.
          </p>
        </section>

        <section id="field-tests" className="content-section">
          <span className="card-kicker section-kicker">Field Tests</span>
          <h2>Field Tests</h2>
          <p className="section-lede">
            Trail, range, and storm-scenario reviews where we push gear past spec sheets to uncover
            real-world strengths and failures. Expect video highlights and data tables in future
            releases.
          </p>
        </section>

        <LatestArticles articles={latestArticles} />
        <NewsletterSignup />

        <section id="about-contact" className="content-section">
          <span className="card-kicker section-kicker">About</span>
          <h2>About / Contact</h2>
          <p className="section-lede">
            Ready Steady Ranked is built by preppers for preppers. Have intel, gear suggestions, or
            want to collaborate? Email contact@readysteadyranked.com and we will get back within 2
            business days.
          </p>
        </section>

        <section id="privacy" className="content-section">
          <span className="card-kicker section-kicker">Policy</span>
          <h2>Privacy</h2>
          <p className="section-lede">
            We log only the analytics needed to understand which gear roundups are most helpful.
            Subscribe with confidence - you can unsubscribe anytime with one click.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
