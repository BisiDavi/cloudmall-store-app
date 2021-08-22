import { STOREDETAILS_PAGE } from "./constant";
import { setupStorePayloadType } from "./SetupStoreAction";

export function SetupStoreReducer(
  state = {
    completed: false,
    formPage: 0,
  },
  action: actionType
) {
  console.log("state", state);
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
