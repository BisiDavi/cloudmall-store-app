import axiosInstance from "./axiosInstance";

export async function getStoreCategoriesRequest() {
    return await axiosInstance.get("/api/store/get-store-categories");
}

export async function getBanksRequest() {
    return await axiosInstance.get("/api/store/get-all-banks");
}

export async function getAvailableState() {
    return await axiosInstance.get("/api/store/get-available-states");
}
