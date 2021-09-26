import axios from "axios";
import { CLOUDMALL_BASE_API } from "@env";
import { getAuthtoken } from "@utils/authToken";
import { useSelector } from "react-redux";
import { RootState } from "@store/RootReducer";

const axiosInstance = axios.create({
    baseURL: CLOUDMALL_BASE_API,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosImageInstance = axios.create({
    baseURL: CLOUDMALL_BASE_API,
    headers: {
        "content-type": "multipart/form-data;application/json",
        accept: "application/json",
    },
});
let authToken: string;

export const setClientToken = (token: any) => {
    authToken = token;
    console.log("authToken setClientToken", authToken);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return authToken;
};

axiosInstance.interceptors.request.use(
    (config) => {
        console.log("token from redux", authToken);
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
        console.log("axiosImageInstance token", authToken);
        config.headers["Authorization"] = "Bearer " + authToken;
        config.headers["content-type"] = "multipart/form-data;application/json";
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export default axiosInstance;
