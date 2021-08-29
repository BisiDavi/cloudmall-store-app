import { STOREDETAILS_PAGE, STORETYPE_SELECTED } from "./constant";
import { setupStorePayloadType } from "./SetupStoreAction";

export function SetupStoreReducer(
  state = {
    completed: false,
    formPage: 0,
    storeType: "",
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
    case STORETYPE_SELECTED: {
      return {
        ...state,
        storeType: payload.storeType,
      };
    }
    default:
      return state;
  }
}

type actionType = {
  type: "STOREDETAILS_PAGE" | "STORETYPE_SELECTED";
  payload: setupStorePayloadType;
};
