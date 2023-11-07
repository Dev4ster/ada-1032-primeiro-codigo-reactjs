import apiService from "./apiService";

export const getApiProductsByCategoryId = async (categoryId) =>
  apiService.get(`/products?category=${categoryId}`);
