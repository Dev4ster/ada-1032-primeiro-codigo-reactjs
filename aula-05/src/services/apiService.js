import axios from "axios";
import apiConfig from "src/config/api.config";

const apiService = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService;
