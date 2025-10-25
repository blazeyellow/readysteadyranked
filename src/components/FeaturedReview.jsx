const FeaturedReview = ({ review }) => (
  <section id="featured-review" className="featured-review">
    <div className="section-heading">
      <h2>Featured Review</h2>
      <p>Hands-on testing with affiliate transparency.</p>
    </div>
    <article className="featured-card">
      <header>
        <h3>{review.title}</h3>
        <span className="rating-badge">
          <strong>{review.rating.toFixed(1)}</strong> / 5
        </span>
      </header>
      <p>{review.excerpt}</p>
      <div className="featured-links">
        <a className="text-link" href={review.ctaHref}>
          {review.ctaLabel}
        </a>
        <a className="text-link" href={review.affiliateHref}>
          {review.affiliateLabel}
        </a>
      </div>
    </article>
  </section>
);

export default FeaturedReview;
