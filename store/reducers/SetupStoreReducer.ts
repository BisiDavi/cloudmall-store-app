import {
    AUTH_TOKEN,
    CLOSE_WELCOME_MODAL,
    ONBOARDING_COMPLETED,
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
        case ONBOARDING_COMPLETED: {
            return {
                ...state,
                completed: true,
            };
        }
        default:
            return state;
    }
}

type actionType = {
    type:
        | "STOREDETAILS_PAGE"
        | "CLOSE_WELCOME_MODAL"
        | "AUTH_TOKEN"
        | "ONBOARDING_COMPLETED";
    payload: {
        status: boolean;
        page: number;
        token: string | null;
    };
};
