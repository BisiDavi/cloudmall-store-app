import {
    STORETYPE_SELECTED,
    STOREDETAILS_SUBMITTED,
    STORE_DETAILS,
    STORE_OWNER_DETAILS,
    STORE_SETTLEMENT_DETAILS,
    STORE_IMAGE_UPLOAD,
    STORE_LOGO_UPLOAD,
} from "../constant";

export function StoreDetailsReducer(
    state = {
        name: "",
        email: "",
        phone: "",
        address: "",
        category: "",
        type: "",
        ownerName: "",
        openDays: "",
        openTime: "",
        settlementPlan: "",
        bankName: "",
        bankCode: "",
        accountNumber: "",
        accountName: "",
        storeLogo: "",
        storeImage: "",
    },
    action: actionType,
) {
    const { payload, type } = action;
    //console.log("StoreDetailsReducer", state);

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
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
                category: payload.category,
            };
        }
        case STORE_OWNER_DETAILS: {
            return {
                ...state,
                storeOwnerName: payload.ownerName,
                openingDays: payload.openDays,
                storeOpenTime: payload.openTime,
            };
        }
        case STORE_IMAGE_UPLOAD: {
            return {
                ...state,
                storeImage: payload.storeImage,
            };
        }
        case STORE_LOGO_UPLOAD: {
            return {
                ...state,
                storeLogo: payload.storeLogo,
            };
        }
        case STORE_SETTLEMENT_DETAILS: {
            return {
                ...state,
                settlementPlan: payload.settlementPlan,
                bankName: payload.bankName,
                bankCode: payload.bankCode,
                accountNumber: payload.accountNumber,
                accountName: payload.accountName,
            };
        }
        case STOREDETAILS_SUBMITTED: {
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
                category: payload.category,
                storeType: payload?.type,
                bankCode: payload.bankCode,
                storeOwnerName: payload.ownerName,
                openingDays: payload.openDays,
                storeOpenTime: payload.openTime,
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
    type:
        | "STOREDETAILS_SUBMITTED"
        | "STORETYPE_SELECTED"
        | "STORE_DETAILS"
        | "STORE_OWNER_DETAILS"
        | "STORE_SETTLEMENT_DETAILS"
        | "STORE_IMAGE_UPLOAD"
        | "STORE_LOGO_UPLOAD";
    payload: {
        name: string;
        email: string;
        phone: string;
        address: string;
        type: string;
        category: string;
        ownerName: string;
        openDays: string;
        openTime: string;
        settlementPlan: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
        storeImage: string;
        storeLogo: string;
    };
};
