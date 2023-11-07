import { useState, useEffect } from "react";
import { getApiCategoryByName } from "src/services/categoryService";
import { getApiProductsByCategoryId } from "src/services/productService";

const useProductsByCategory = (categoryName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadBanners = async () => {
      try {
        setLoading(true);
        const response = await getApiCategoryByName(categoryName);
        const [category] = response.data;
        if (!category) return;
        const responseProducts = await getApiProductsByCategoryId(category.id);
        setData(responseProducts.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadBanners();
  }, [categoryName]);

  return {
    data,
    loading,
    error,
  };
};

export default useProductsByCategory;
