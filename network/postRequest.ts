import showToast from "@utils/showToast";
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

type OrdersType = {
    data: {
        storeId: string;
    };
};

type allProductType = {
    data: {
        categoryId: string;
        storeId: string;
    };
};

export async function postStoreDetails(
    data: postStoreDetailsType,
    navigation: any,
) {
    return await axiosInstance
        .post("/api/store", data)
        .then((response) => {
            const data: any = response.data;
            console.log("data", response.data);
            if (response.status === 200) {
                showToast(`${data.storeName} stores created`);
                navigation.navigate("BottomNav");
            } else {
                showToast(data);
            }
        })
        .catch((error) => {
            showToast(error.response.data);
        });
}

export async function getAllProducts(data: allProductType) {
    return await axiosInstance.post("/api/store/get-all-products", data);
}

export async function getCompletedOrders(data: OrdersType) {
    return await axiosInstance.post("/api/store/get-completed-orders", data);
}

export async function getPendingOrders(data: OrdersType) {
    return await axiosInstance.post("/api/store/get-pending-orders", data);
}
