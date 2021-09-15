import axiosInstance from "./axiosInstance";

type postStoreDetailsType = {
    name: string;
    email: string;
    phone: string;
    address: string;
    type: "IN STORE" | "PICK UP";
    openDays: any;
    longitude: number;
    latitude: number;
    category: string;
    state: string;
    ownerName: string;
    ownerPhone: string;
    ownerEmail: string;
    settlementPlan: "Daily" | "Weekly" | "Monthly";
    bankName: string;
    bankCode: string;
    accountNumber: string;
    accountName: string;
};

export async function postStoreDetails(data: postStoreDetailsType) {
    return await axiosInstance.post("/api/store", data);
}
