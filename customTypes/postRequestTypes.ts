export type postStoreDetailsType = {
    name: string;
    email: string;
    phone: string;
    address: string;
    type: "IN STORE" | "PICK UP";
    openDays: any;
    longitude: number;
    latitude: number;
    category: string;
    state: string;
    ownerName: string;
    ownerPhone: string;
    ownerEmail: string;
    settlementPlan: "Daily" | "Weekly" | "Monthly";
    bankName: string;
    bankCode: string;
    accountNumber: string;
    accountName: string;
};

export type OrdersType = {
    data: {
        storeId: string;
    };
};

export type allProductType = {
    data: {
        storeId: string;
    };
};

export type uploadStoreLogoType = any;

export type uploadStoreBackgroundType = {
    background: any;
};

export type addProductsRequestType = {
    name: string;
    description: string;
    storeId: number;
    quantity: number;
    categoryId: number;
    takeAwayPrice: number;
    kg: number;
    duration: number;
    price: number;
    isAvailable: boolean;
};

export type toggleSpecificationStatusRequestType = {
    specificationId: string;
    status: boolean;
};

export type addProductExtraRequestType = {
    productId: string;
    extras: string[];
};

export type addProductSpecificationType = {
    productId: string;
    specifications: string[];
};

export type addProductMainExtraRequestType = {
    productId: string;
    mainExtra: string;
};
