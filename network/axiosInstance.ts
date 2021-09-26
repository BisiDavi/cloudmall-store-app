import axios from "axios";
import { CLOUDMALL_BASE_API } from "@env";

const axiosInstance = axios.create({
    baseURL: CLOUDMALL_BASE_API,
    headers: {
        "Content-Type": "application/json",
    },
});

let authToken: string;

export const axiosImageInstance = axios.create({
    baseURL: CLOUDMALL_BASE_API,
    headers: {
        "content-type": "multipart/form-data;application/json",
        accept: "application/json",
    },
});

export const setClientToken = (token: any) => {
    authToken = token;
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return authToken;
};

axiosInstance.interceptors.request.use(
    (config) => {
        console.log("authToken", authToken);
        config.headers["Authorization"] = "Bearer " + authToken;
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

axiosImageInstance.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Bearer " + authToken;
        config.headers["content-type"] = "multipart/form-data;application/json";
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export default axiosInstance;
