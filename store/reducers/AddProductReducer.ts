import {
    addProductStateType,
    addProductTypes,
} from "@customTypes/addProductTypes";
import { ADD_PRODUCT_STEP_1, ADD_PRODUCT_STEP_2 } from "@store/constant";

export function AddProductReducer(
    state: addProductStateType = {
        name: "",
        description: "",
        storeId: "",
        quantity: 0,
        categoryId: "",
        takeAwayPrice: 0,
        kg: "",
        duration: 0,
        price: "",
        isAvailable: true,
    },
    action: addProductTypes,
) {
    const { payload, type } = action;
    switch (type) {
        case ADD_PRODUCT_STEP_1: {
            return {
                ...state,
                name: payload.name,
                description: payload.description,
                price: payload.price,
                takeAwayPrice: payload.takeAwayPrice,
                quantity: payload.quantity,
                categoryId: payload.categoryId,
            };
        }
        case ADD_PRODUCT_STEP_2: {
            return {
                ...state,
                duration: payload.duration,
                isAvailable: payload.isAvailable,
            };
        }
        default:
            return state;
    }
}
