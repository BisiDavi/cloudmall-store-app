import { CLOSE_WELCOME_MODAL, STOREDETAILS_PAGE } from "../constant";

export const SetupStoreScreenAction =
    (page: number, status: boolean) => (dispatch: (arg0: argType) => void) => {
        dispatch({
            type: STOREDETAILS_PAGE,
            payload: {
                page,
                status,
            },
        });
    };

export const CloseWelcomeModalAction =
    () => (dispatch: (arg0: { type: string }) => void) => {
        dispatch({
            type: CLOSE_WELCOME_MODAL,
        });
    };

export type setupStorePayloadType = {
    page: number;
    status: boolean;
};

export type setupStoreTypePayloadType = {
    storeType: string;
};

type argType = {
    type: string;
    payload: setupStorePayloadType;
};
