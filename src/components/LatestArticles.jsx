const LatestArticles = ({ articles }) => (
  <section id="blog-news" className="latest-articles content-section">
    <h2>Latest Articles</h2>
    <p className="section-subhead">
      Stay ready with fresh intel, deal alerts, and preparedness tactics.
    </p>
    <div className="articles-grid">
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <div className="article-thumb" aria-hidden="true">
            <span>Prep</span>
          </div>
          <div className="article-content">
            <time dateTime={article.publishedAt}>Published {article.publishedAt}</time>
            <h3>
              <a href={article.href} className="text-link">
                {article.title}
              </a>
            </h3>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default LatestArticles;
