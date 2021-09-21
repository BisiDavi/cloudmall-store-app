import axios from "axios";
import { CLOUDMALL_BASE_API } from "@env";
import { getAuthtoken } from "@utils/authToken";

const axiosInstance = axios.create({
    baseURL: CLOUDMALL_BASE_API,
});

let savedToken: string | null;

getAuthtoken().then((response) => {
    savedToken = response;
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (savedToken) {
            config.headers["Authorization"] = "Bearer " + savedToken;
        }
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export const setClientToken = (token: any) => {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInstance;
