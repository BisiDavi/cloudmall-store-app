import { STORETYPE_SELECTED, STOREDETAILS_SUBMITTED } from "./constant";

export function StoreDetailsReducer(
  state = {
    storeName: "",
    storeEmail: "",
    phoneNumber: "",
    storeAddress: "",
    storeType: "",
  },
  action: actionType
) {
  console.log("state", state);
  const { payload, type } = action;
  console.log("StoreDetailsReducer payload", payload);

  switch (type) {
    case STORETYPE_SELECTED: {
      return {
        ...state,
        storeType: payload,
      };
    }
    case STOREDETAILS_SUBMITTED: {
      return {
        ...state,
        storeName: payload?.storeName,
        storeEmail: payload?.storeEmail,
        phoneNumber: payload?.phoneNumber,
        storeAddress: payload?.storeAddress,
        storeType: payload?.storeType,
      };
    }
    default:
      return state;
  }
}

type actionType = {
  type: "STOREDETAILS_SUBMITTED" | "STORETYPE_SELECTED";
  payload: {
    storeName: string;
    storeEmail: string;
    phoneNumber: string;
    storeAddress: string;
    storeType: string;
  };
};
