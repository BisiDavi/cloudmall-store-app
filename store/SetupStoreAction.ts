import { STOREDETAILS_PAGE, STORETYPE_SELECTED } from "./constant";

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

export const SetupStoreTypeScreenAction =
  (storeType: string) => (dispatch: (arg0: argStoreType) => void) => {
    dispatch({
      type: STORETYPE_SELECTED,
      payload: {
        storeType,
      },
    });
  };

export type setupStorePayloadType = {
  page: number;
  status: boolean;
  storeType?: string;
};

export type setupStoreTypePayloadType = {
  storeType: string;
};

type argType = {
  type: string;
  payload: setupStorePayloadType;
};

type argStoreType = {
  type: string;
  payload: setupStoreTypePayloadType;
};
