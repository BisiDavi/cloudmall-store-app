import axiosInstance from "@network/axiosInstance";
import showToast from "@utils/showToast";

export default async function postStoreRequest(store: any, navigation: any) {
    return await axiosInstance
        .post("/store", store)
        .then((response) => {
            const data: any = response.data;
            console.log("data", data);
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
