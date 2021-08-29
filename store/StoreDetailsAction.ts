import { STORETYPE_SELECTED } from "./constant";

export const SetupStoreTypeScreenAction = (payload: any) => (dispatch: any) => {
  dispatch({
    type: STORETYPE_SELECTED,
    payload,
  });
};
