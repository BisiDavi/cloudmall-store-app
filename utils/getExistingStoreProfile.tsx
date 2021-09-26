import { getStoreDetailsRequest } from "@network/getRequest";
import StoreProfileActions from "@store/actions/StoreProfileActions";
import { Dispatch } from "redux";

export default async function getExistingStoreProfile(reduxDispatch: Dispatch<any>) {
    return await getStoreDetailsRequest()
        .then((response) => {
            const { data } = response.data;
            console.log("response getStoreDetailsRequest", data);
            const isBankRegisted = Object.keys(data).includes("bank");
						const storeProfile = {
							name: data.name,
							id: data._id,
						}
            reduxDispatch(StoreProfileActions(storeProfile));
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
