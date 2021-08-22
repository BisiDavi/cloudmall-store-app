import axios from "axios";
import { API_BASE_URL } from "@env";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const setClientToken = (token: any) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
