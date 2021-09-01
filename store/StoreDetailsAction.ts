import {
  STORETYPE_SELECTED,
  STOREDETAILS_SUBMITTED,
  STORE_DETAILS,
} from "./constant";

export const StoreDetailsTypeAction = (payload: any) => (dispatch: any) => {
  console.log("payload", payload);
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
