import apiService from "./apiService";

export const getApiFeaturedProducts = () => apiService.get("/featuredProducts");
