import apiService from "./apiService";

export const getApiBanners = () => apiService.get("/banners");
