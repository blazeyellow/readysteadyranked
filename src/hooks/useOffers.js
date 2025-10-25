import { useEffect, useState } from 'react';
import { fetchOffers } from '../api/affiliateApi.js';

const prependAll = (categories) => {
  const unique = Array.from(new Set(categories));
  return ['all', ...unique];
};

const useOffers = (activeCategory = 'all') => {
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const loadOffers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { offers: nextOffers, categories: nextCategories } = await fetchOffers({
          category: activeCategory
        });

        if (!ignore) {
          setOffers(nextOffers);
          setCategories(prependAll(nextCategories));
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Unknown error fetching offers');
          setOffers([]);
          setCategories(['all']);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadOffers();

    return () => {
      ignore = true;
    };
  }, [activeCategory]);

  return { offers, categories, isLoading, error };
};

export default useOffers;
