import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsApi.js';

const prependAll = (categories) => ['all', ...Array.from(new Set(categories))];

const useProducts = (activeCategory = 'all') => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { products: nextProducts, categories: nextCategories } = await fetchProducts({
          category: activeCategory
        });

        if (!ignore) {
          setProducts(nextProducts);
          setCategories(prependAll(nextCategories));
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Unknown error fetching products');
          setProducts([]);
          setCategories(['all']);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      ignore = true;
    };
  }, [activeCategory]);

  return { products, categories, isLoading, error };
};

export default useProducts;
