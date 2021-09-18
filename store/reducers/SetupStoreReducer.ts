import { CLOSE_WELCOME_MODAL, STOREDETAILS_PAGE } from "../constant";
import { setupStorePayloadType } from "../actions/SetupStoreAction";

export function SetupStoreReducer(
    state = {
        completed: false,
        formPage: 0,
        isWelcomeModalShown: false,
    },
    action: actionType,
) {
    const { payload, type } = action;
    console.log("SetupStoreReducer state", state);
    switch (type) {
        case STOREDETAILS_PAGE: {
            return {
                ...state,
                completed: payload.status,
                formPage: payload.page,
            };
        }
        case CLOSE_WELCOME_MODAL: {
            return {
                ...state,
                isWelcomeModalShown: true,
            };
        }
        default:
            return state;
    }
}

type actionType = {
    type: "STOREDETAILS_PAGE" | "CLOSE_WELCOME_MODAL";
    payload: setupStorePayloadType;
};
