import { useState, useEffect } from "react";
import { getApiBanners } from "src/services/bannersService";

const useSlider = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const loadBanners = async () => {
      try {
        setLoading(true);
        const response = await getApiBanners();
        setBanners(response.data);
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
    banners,
    loading,
    error,
  };
};

export default useSlider;
