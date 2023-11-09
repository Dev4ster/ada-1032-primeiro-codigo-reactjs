import apiService from "./apiService";

export const getApiProductsByCategoryId = async (categoryId) =>
  apiService.get(`/products?category=${categoryId}`);

export const getApiProductById = async (productId) =>
  apiService.get(`/products?id=${productId}`);
