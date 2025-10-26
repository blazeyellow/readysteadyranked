const TopRankingsCarousel = ({ items, onSelectCategory }) => (
  <section className="top-rankings">
    <div className="section-heading">
      <span className="card-kicker">Cover Stories</span>
      <h2>Top Rankings</h2>
      <p>Jump into this month's standout roundups curated from verified Amazon buyers.</p>
    </div>
    <div className="ranking-scroller">
      {items.map((item) => (
        <article key={item.id} className="ranking-card">
          <span className="card-kicker">{item.highlight}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="ranking-actions">
            <a className="text-link" href={item.href}>
              View roundup
            </a>
            <button
              type="button"
              className="pill ghost"
              onClick={() => onSelectCategory(item.category || 'all')}
            >
              See gear
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TopRankingsCarousel;
