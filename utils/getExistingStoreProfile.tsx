import { getStoreDetailsRequest } from "@network/getRequest";

export default async function getExistingStoreProfile() {
    return await getStoreDetailsRequest()
        .then((response) => {
            const { data } = response.data;
            console.log("response getStoreDetailsRequest", data);
            const isBankRegisted = Object.keys(data).includes("bank");
            console.log("isBankRegisted", isBankRegisted);
            return { bank: isBankRegisted, name: data.name };
        })
        .catch((error) => {
            if (error.response) {
                console.log(
                    "getStoreDetailsRequest error response",
                    error.response,
                );
            } else if (error.request) {
                console.log(
                    "getStoreDetailsRequest error request",
                    error.request,
                );
            }
        });
}
