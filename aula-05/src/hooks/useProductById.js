import { getApiProductById } from "src/services/productService";
import { useApi } from "./useApi";
import { useCallback } from "react";

export const useProductById = (productId) => {
  const PF = useCallback(
    () => getApiProductById(productId).then((response) => response.data[0]),
    [productId]
  );
  const apiResponse = useApi({
    initialData: {},
    promiseFunction: PF,
  });

  return apiResponse;
};
