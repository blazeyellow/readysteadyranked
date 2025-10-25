import { trackOutboundClick } from '../api/productsApi.js';

const formatReviewCount = (count) =>
  typeof count === 'number' ? count.toLocaleString('en-US') : count;

const ProductCard = ({ product }) => {
  const handleClick = async () => {
    await trackOutboundClick();
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="card" data-product-id={product.id}>
      <header className="card-header">
        <div className="card-meta">
          <h2>{product.name}</h2>
          <p className="brand">{product.brand}</p>
        </div>
        {product.badges?.length ? (
          <div className="badge-list">
            {product.badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <p>{product.summary}</p>

      <div className="product-stats">
        <span className="rating">
          <strong>{product.rating.toFixed(1)}</strong> / 5 rating
        </span>
        <span className="reviews">{formatReviewCount(product.reviewCount)} reviews</span>
        <span className="price">{product.price}</span>
        {product.prime ? <span className="prime">Prime eligible</span> : null}
      </div>

      <div>
        <strong>Why preppers love it</strong>
        <ul>
          {product.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <footer className="card-footer">
        <time dateTime={product.updatedAt}>Updated {product.updatedAt}</time>
        <button type="button" className="cta" onClick={handleClick}>
          View on Amazon
        </button>
      </footer>
    </article>
  );
};

export default ProductCard;
