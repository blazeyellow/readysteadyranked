import { survivalProducts } from '../data/survivalProducts.js';

const simulateNetworkDelay = (duration = 400) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

const normalizeCategory = (category) => category.toLowerCase();

/**
 * Simulates an API call to fetch top-rated survival products.
 * @param {{ category?: string }} filters
 * @returns {Promise<{ products: typeof survivalProducts, categories: string[] }>}
 */
export const fetchProducts = async (filters = {}) => {
  await simulateNetworkDelay();

  const { category } = filters;
  const normalizedCategory = category ? normalizeCategory(category) : 'all';

  const filteredProducts =
    normalizedCategory !== 'all'
      ? survivalProducts.filter(
          (product) => normalizeCategory(product.category) === normalizedCategory
        )
      : survivalProducts;

  const categories = [...new Set(survivalProducts.map((product) => product.category))];

  return {
    products: filteredProducts,
    categories
  };
};

/**
 * Placeholder for future POST call to track outbound clicks.
 * @returns {Promise<{ success: boolean }>}
 */
export const trackOutboundClick = async () => {
  await simulateNetworkDelay(200);
  return { success: true };
};
