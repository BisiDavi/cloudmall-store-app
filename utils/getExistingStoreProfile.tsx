import { getStoreDetailsRequest } from "@network/getRequest";
import { showToast } from ".";

export default async function getExistingStoreProfile(dispatch: any) {
    return await getStoreDetailsRequest()
        .then((response) => {
            const { data } = response.data;
            console.log("response getStoreDetailsRequest", data);
            const isBankRegisted = Object.keys(data).includes("bank");
            console.log("isBankRegisted", isBankRegisted);
            if (isBankRegisted) {
                showToast(`Welcome, ${data.name}`);
                dispatch({ type: "HAS_ACCOUNT" });
            } else {
                dispatch({ type: "NO_ACCOUNT" });
            }
        })
        .catch((error) => {
            if (error.response) {
                console.log(
                    "getStoreDetailsRequest error response",
                    error.response,
                );
                dispatch({ type: "NO_ACCOUNT" });
            } else if (error.request) {
                console.log(
                    "getStoreDetailsRequest error request",
                    error.request,
                );
                dispatch({ type: "NO_ACCOUNT" });
            }
        });
}
