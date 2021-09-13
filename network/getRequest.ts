import axiosInstance from "./axiosInstance";

export async function getStoreCategoriesRequest() {
    return await axiosInstance.get("/api/store/get-store-categories");
}
