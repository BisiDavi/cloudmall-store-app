export type productType = "ADD_PRODUCT_STEP_1" | "ADD_PRODUCT_STEP_2";

export type productPayloadType = {
    name: string;
    description: string;
    price: string;
    quantity: number;
    categoryId: string;
    takeAwayPrice: number;
    isAvailable: number;
    duration: string;
};

export type addProductTypes = {
    payload: productPayloadType;
    type: productType;
};

export type addProductStateType = {
    name: string;
    description: string;
    price: string;
    quantity: number;
    categoryId: string;
    takeAwayPrice: number;
    storeId: string;
    kg: string;
    duration: number;
    isAvailable: boolean;
};
