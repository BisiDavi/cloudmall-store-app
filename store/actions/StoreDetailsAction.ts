import {
    STORETYPE_SELECTED,
    STOREDETAILS_SUBMITTED,
    STORE_DETAILS,
    STORE_OWNER_DETAILS,
    STORE_SETTLEMENT_DETAILS,
    STORE_IMAGE_UPLOAD,
    STORE_ADDRESS_COORDINATES,
    STORE_LOGO_UPLOAD,
    UPDATE_STORE_OPENDAYS,
} from "../constant";

export const StoreDetailsTypeAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: STORETYPE_SELECTED,
        payload,
    });
};

export const StoreDetailsSubmittedAction =
    (payload: any) => (dispatch: any) => {
        dispatch({
            type: STOREDETAILS_SUBMITTED,
            payload,
        });
    };

export const StoreDetailsAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: STORE_DETAILS,
        payload,
    });
};

export const StoreOwnerAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: STORE_OWNER_DETAILS,
        payload,
    });
};

export const StoreSettlementAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: STORE_SETTLEMENT_DETAILS,
        payload,
    });
};

export const StoreImageUploadAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: STORE_IMAGE_UPLOAD,
        payload,
    });
};

export const StoreLogoUploadAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: STORE_LOGO_UPLOAD,
        payload,
    });
};

export const StoreAddressCoordinatesAction =
    (payload: any) => (dispatch: any) => {
        dispatch({
            type: STORE_ADDRESS_COORDINATES,
            payload,
        });
    };

type StoreOpendaysType = {
    specificPeriod: {
        openingTime: string;
        closingTime: string;
        status: boolean;
    };
    period: string;
};

export const StoreOpendaysAction =
    (payload: StoreOpendaysType) => (dispatch: any) => {
        dispatch({
            type: UPDATE_STORE_OPENDAYS,
            payload,
        });
    };
