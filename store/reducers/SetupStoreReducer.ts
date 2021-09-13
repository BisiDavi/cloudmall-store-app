import { STOREDETAILS_PAGE } from "../constant";
import { setupStorePayloadType } from "../actions/SetupStoreAction";

export function SetupStoreReducer(
  state = {
    completed: false,
    formPage: 0,
  },
  action: actionType
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
    default:
      return state;
  }
}

type actionType = {
  type: "STOREDETAILS_PAGE";
  payload: setupStorePayloadType;
};
