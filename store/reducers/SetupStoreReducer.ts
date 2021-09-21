import {
    AUTH_TOKEN,
    CLOSE_WELCOME_MODAL,
    STOREDETAILS_PAGE,
} from "../constant";

export function SetupStoreReducer(
    state = {
        completed: false,
        formPage: 0,
        isWelcomeModalShown: false,
        token: null,
    },
    action: actionType,
) {
    const { payload, type } = action;
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
        case AUTH_TOKEN: {
            return {
                ...state,
                token: payload.token,
            };
        }
        default:
            return state;
    }
}

type actionType = {
    type: "STOREDETAILS_PAGE" | "CLOSE_WELCOME_MODAL" | "AUTH_TOKEN";
    payload: {
        status: boolean;
        page: number;
        token: string;
    };
};
