import {
  STORETYPE_SELECTED,
  STOREDETAILS_SUBMITTED,
  STORE_DETAILS,
} from "./constant";

export function StoreDetailsReducer(
  state = {    
    storeName: "",
    storeEmail: "",
    phoneNumber: "",
    storeAddress: "",
    storeType: "",
    storeOwnerName: "",
    openingDays: "",
    storeOpenTime: "",
    settlementPlan: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
  },
  action: actionType
) {
  const { payload, type } = action;
  switch (type) {
    case STORETYPE_SELECTED: {
      return {
        ...state,
        storeType: payload,
      };
    }
    case STORE_DETAILS: {
      return {
        ...state,
        storeName: payload?.storeName,
        storeEmail: payload?.storeEmail,
        phoneNumber: payload?.phoneNumber,
        storeAddress: payload?.storeAddress,
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
        storeOwnerName: payload.storeOwnerName,
        openingDays: payload.openingDays,
        storeOpenTime: payload.storeOpenTime,
        settlementPlan: payload.settlementPlan,
        bankName: payload.bankName,
        accountNumber: payload.accountNumber,
        accountName: payload.accountName,
      };
    }
    default:
      return state;
  }
}

type actionType = {
  type: "STOREDETAILS_SUBMITTED" | "STORETYPE_SELECTED" | "STORE_DETAILS";
  payload: {
    storeName: string;
    storeEmail: string;
    phoneNumber: string;
    storeAddress: string;
    storeType: string;
    storeOwnerName: string;
    openingDays: string;
    storeOpenTime: string;
    settlementPlan: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
  };
};
