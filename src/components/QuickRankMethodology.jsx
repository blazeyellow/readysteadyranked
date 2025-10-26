const QuickRankMethodology = ({ criteria }) => (
  <section className="methodology">
    <div className="section-heading">
      <span className="card-kicker">Methodology</span>
      <h2>How We Rank</h2>
      <p>Every score blends lab stress-tests with real-world community feedback.</p>
    </div>
    <div className="methodology-grid">
      {criteria.map((item) => (
        <article key={item.id} className="methodology-card">
          <h3>{item.label}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default QuickRankMethodology;
