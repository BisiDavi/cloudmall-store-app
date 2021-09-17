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
    state: StoreDetailsType = {
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
        storeLogo: "",
        storeImage: "",
    },
    action: actionType,
) {
    const { payload, type } = action;
    switch (type) {
        case STORETYPE_SELECTED: {
            return {
                ...state,
                type: payload,
            };
        }
        case STORE_DETAILS: {
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
                state: payload.state,
                category: payload.category,
            };
        }
        case STORE_OWNER_DETAILS: {
            return {
                ...state,
                ownerName: payload.ownerName,
                ownerPhone: payload.ownerPhone,
                ownerEmail: payload.ownerEmail,
            };
        }
        case UPDATE_STORE_OPENDAYS: {
            const { period, specificPeriod } = payload;

            return {
                ...state,
                openDays: {
                    ...state.openDays,
                    [period]: specificPeriod,
                },
            };
        }
        case STORE_ADDRESS_COORDINATES: {
            return {
                ...state,
                latitude: payload.latitude,
                longitude: payload.longitude,
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
        | "STORE_LOGO_UPLOAD"
        | "STORE_ADDRESS_COORDINATES"
        | "UPDATE_STORE_OPENDAYS";
    payload: StoreDetailsType;
};

type StoreDetailsType = {
    name: string;
    email: string;
    phone: string;
    address: string;
    type: string;
    state: string;
    category: string;
    ownerName: string;
    ownerPhone: string;
    ownerEmail: string;
    openDays: {
        weekDays: { status: boolean; openingTime: string; closingTime: string };
        saturday: { status: boolean; openingTime: string; closingTime: string };
        sunday: { status: boolean; openingTime: string; closingTime: string };
    };
    latitude: number | null;
    longitude: number | null;
    settlementPlan: string;
    bankName: string;
    bankCode: string;
    accountNumber: string;
    accountName: string;
    storeImage: string;
    storeLogo: string;
    period?: any;
    specificPeriod?: any;
};
