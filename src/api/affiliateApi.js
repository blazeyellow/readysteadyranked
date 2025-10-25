import { mockOffers } from '../data/mockOffers.js';

const simulateNetworkDelay = (duration = 400) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

/**
 * Simulates an API call to fetch offers based on optional filters.
 * @param {{ category?: string }} filters
 * @returns {Promise<{ offers: typeof mockOffers, categories: string[] }>}
 */
export const fetchOffers = async (filters = {}) => {
  await simulateNetworkDelay();

  const { category } = filters;
  const filteredOffers =
    category && category !== 'all'
      ? mockOffers.filter((offer) => offer.category === category)
      : mockOffers;

  const categories = [...new Set(mockOffers.map((offer) => offer.category))];

  return {
    offers: filteredOffers,
    categories
  };
};

/**
 * Placeholder for future POST call to register conversions.
 * @returns {Promise<{ success: boolean }>}
 */
export const trackConversion = async () => {
  await simulateNetworkDelay(200);
  return { success: true };
};
