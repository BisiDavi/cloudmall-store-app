import { STORETYPE_SELECTED, STOREDETAILS_SUBMITTED } from "./constant";

export const SetupStoreTypeAction = (payload: any) => (dispatch: any) => {
    console.log('payload',payload)
  dispatch({
    type: STORETYPE_SELECTED,
    payload,
  });
};


export const SetupStoreDetailsSubmittedAction = (payload: any) => (dispatch: any) => {
  dispatch({
    type: STOREDETAILS_SUBMITTED,
    payload,
  });
};
