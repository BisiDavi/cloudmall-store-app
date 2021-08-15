import axios from "axios";
import { API_BASE_URL } from "@env";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const setClientToken = (token: any) => {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default axiosInstance;
