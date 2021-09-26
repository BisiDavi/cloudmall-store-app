import { getStoreDetailsRequest } from "@network/getRequest";
import { showToast } from ".";

export default async function getExistingStoreProfile(navigation: any) {
    return await getStoreDetailsRequest()
        .then((response) => {
            const { data } = response.data;
            console.log("response getStoreDetailsRequest", data);
            const isBankRegisted = Object.keys(data).includes("bank");
            if (isBankRegisted) {
                showToast(`Welcome, ${data.name}`);
                navigation.navigate("Orders");
            } else {
                navigation.navigate("StoreDetailsScreenOne");
            }
        })
        .catch((error) => {
            if (error.response) {
                console.log(
                    "getStoreDetailsRequest error response",
                    error.response,
                );
                navigation.navigate("StoreDetailsScreenOne");
            } else if (error.request) {
                console.log(
                    "getStoreDetailsRequest error request",
                    error.request,
                );
                navigation.navigate("StoreDetailsScreenOne");
            }
        });
}
