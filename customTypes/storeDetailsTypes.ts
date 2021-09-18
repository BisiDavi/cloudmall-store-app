export type storeDetailsActionType = {
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
    payload: StoreDetailsPayloadType;
};

export type StoreDetailsStateType = {
    storeDetails: {
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
            weekDays: {
                status: boolean;
                openingTime: string;
                closingTime: string;
            };
            saturday: {
                status: boolean;
                openingTime: string;
                closingTime: string;
            };
            sunday: {
                status: boolean;
                openingTime: string;
                closingTime: string;
            };
        };
        latitude: number | null;
        longitude: number | null;
        settlementPlan: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        accountName: string;
    };
    storeImage: string;
    storeLogo: string;
    period?: any;
    specificPeriod?: any;
};

export type StoreDetailsPayloadType = {
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
        weekDays: {
            status: boolean;
            openingTime: string;
            closingTime: string;
        };
        saturday: {
            status: boolean;
            openingTime: string;
            closingTime: string;
        };
        sunday: {
            status: boolean;
            openingTime: string;
            closingTime: string;
        };
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
