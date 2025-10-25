import ProductCard from './ProductCard.jsx';

const ProductGrid = ({ products }) => (
  <section className="product-grid" aria-live="polite">
    {products.length === 0 ? <p>No survival gear matches those filters yet.</p> : null}
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </section>
);

export default ProductGrid;
