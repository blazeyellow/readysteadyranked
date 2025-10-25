const HeroBanner = ({ onPrimaryAction }) => (
  <section className="hero-banner">
    <div className="hero-copy">
      <p className="eyebrow">Ranked. Rated. Ready.</p>
      <h1>Amazon survival gear the community actually trusts.</h1>
      <p>
        Every month we break down thousands of verified reviews to spotlight the flashlights,
        solar rigs, and emergency kits that stay mission ready when it counts.
      </p>
      <button type="button" className="cta hero-cta" onClick={onPrimaryAction}>
        See This Month's Top Gear
      </button>
    </div>
    <div className="hero-aside">
      <div className="stat-block">
        <span className="stat-value">3k+</span>
        <span className="stat-label">Amazon reviews analyzed</span>
      </div>
      <div className="stat-block">
        <span className="stat-value">25</span>
        <span className="stat-label">Gear categories tracked</span>
      </div>
      <div className="stat-block">
        <span className="stat-value">100%</span>
        <span className="stat-label">Affiliate transparency</span>
      </div>
    </div>
  </section>
);

export default HeroBanner;
