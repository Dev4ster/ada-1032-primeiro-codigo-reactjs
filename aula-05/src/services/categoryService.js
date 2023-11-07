import apiService from "./apiService";

export const getApiCategoryByName = async (name) =>
  apiService.get(`/categories?name_like=${name}`);
