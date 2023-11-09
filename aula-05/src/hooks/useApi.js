import { useEffect, useState } from "react";

export const useApi = ({ initialData, promiseFunction }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = await promiseFunction();
        setData(response);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [promiseFunction]);

  return {
    data,
    loading,
    error,
  };
};
