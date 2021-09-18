import {
    storeDetailsActionType,
    StoreDetailsStateType,
} from "@customTypes/storeDetailsTypes";
import {
    STORETYPE_SELECTED,
    STOREDETAILS_SUBMITTED,
    STORE_DETAILS,
    STORE_OWNER_DETAILS,
    STORE_SETTLEMENT_DETAILS,
    STORE_IMAGE_UPLOAD,
    STORE_LOGO_UPLOAD,
    STORE_ADDRESS_COORDINATES,
    UPDATE_STORE_OPENDAYS,
} from "../constant";

export function StoreDetailsReducer(
    state: StoreDetailsStateType = {
        storeDetails: {
            name: "",
            email: "",
            phone: "",
            address: "",
            category: "",
            type: "",
            openDays: {
                weekDays: { status: false, openingTime: "", closingTime: "" },
                saturday: { status: false, openingTime: "", closingTime: "" },
                sunday: { status: false, openingTime: "", closingTime: "" },
            },
            latitude: null,
            longitude: null,
            ownerName: "",
            ownerPhone: "",
            state: "",
            ownerEmail: "",
            settlementPlan: "",
            bankName: "",
            bankCode: "",
            accountNumber: "",
            accountName: "",
        },
        storeLogo: "",
        storeImage: "",
    },
    action: storeDetailsActionType,
) {
    const { payload, type } = action;
    switch (type) {
        case STORETYPE_SELECTED: {
            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    type: payload,
                },
            };
        }
        case STORE_DETAILS: {
            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    address: payload.address,
                    state: payload.state,
                    category: payload.category,
                },
            };
        }
        case STORE_OWNER_DETAILS: {
            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    ownerName: payload.ownerName,
                    ownerPhone: payload.ownerPhone,
                    ownerEmail: payload.ownerEmail,
                },
            };
        }
        case UPDATE_STORE_OPENDAYS: {
            const { period, specificPeriod } = payload;

            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    openDays: {
                        ...state.storeDetails.openDays,
                        [period]: specificPeriod,
                    },
                },
            };
        }
        case STORE_ADDRESS_COORDINATES: {
            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    latitude: payload.latitude,
                    longitude: payload.longitude,
                },
            };
        }
        case STORE_IMAGE_UPLOAD: {
            return {
                ...state,
                storeImage: payload,
            };
        }
        case STORE_LOGO_UPLOAD: {
            return {
                ...state,
                storeLogo: payload,
            };
        }
        case STORE_SETTLEMENT_DETAILS: {
            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    settlementPlan: payload.settlementPlan,
                    bankName: payload.bankName,
                    bankCode: payload.bankCode,
                    accountNumber: payload.accountNumber,
                    accountName: payload.accountName,
                },
            };
        }
        case STOREDETAILS_SUBMITTED: {
            return {
                ...state,
                storeDetails: {
                    ...state.storeDetails,
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    address: payload.address,
                    category: payload.category,
                    type: payload?.type,
                    openDays: payload.openDays,
                    ownerName: payload.ownerName,
                    ownerPhone: payload.ownerPhone,
                    ownerEmail: payload.ownerEmail,
                    settlementPlan: payload.settlementPlan,
                    bankName: payload.bankName,
                    bankCode: payload.bankCode,
                    accountNumber: payload.accountNumber,
                    accountName: payload.accountName,
                },
            };
        }
        default:
            return state;
    }
}
