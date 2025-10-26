const formatPublishDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const LatestArticles = ({ articles }) => (
  <section id="blog-news" className="latest-articles content-section">
    <span className="card-kicker section-kicker">Dispatch</span>
    <h2>Latest Articles</h2>
    <p className="section-subhead">
      Stay ready with fresh intel, deal alerts, and preparedness tactics.
    </p>
    <div className="articles-grid">
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <div className="article-thumb" aria-hidden="true">
            <span>{article.category}</span>
          </div>
          <div className="article-content">
            <time dateTime={article.publishedAt}>
              Published {formatPublishDate(article.publishedAt)}
            </time>
            <h3>
              <a href={article.href} className="text-link">
                {article.title}
              </a>
            </h3>
            <p className="article-teaser">{article.teaser}</p>
            <div className="article-meta">
              <span>{article.author}</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default LatestArticles;
