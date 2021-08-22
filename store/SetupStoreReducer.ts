import { STOREDETAILS_PAGE } from "./constant";
import { setupStorePayloadType } from "./SetupStoreAction";

export function SetupStoreReducer(
  state = {
    completed: false,
    formPage: 0,
  },
  action: actionType
) {
  const { payload, type } = action;
  console.log("payload", payload);
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