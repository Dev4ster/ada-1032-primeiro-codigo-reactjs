import { useState, useEffect } from "react";
import { getApiFeaturedProducts } from "src/services/featuredProductsService";

const useFeaturedProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadBanners = async () => {
      try {
        setLoading(true);
        const response = await getApiFeaturedProducts();
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadBanners();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFeaturedProducts;
