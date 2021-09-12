import axios from "axios";
import { CLOUDMALL_BASE_API } from "@env";

const axiosInstance = axios.create({
    baseURL: CLOUDMALL_BASE_API,
});

export const setClientToken = (token: any) => {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
