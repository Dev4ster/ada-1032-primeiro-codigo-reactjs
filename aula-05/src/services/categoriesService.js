import apiService from "./apiService";

export const getApiCategories = async () => apiService.get("/categories");
