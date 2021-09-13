import { combineReducers } from "redux";
import { SetupStoreReducer } from "./reducers/SetupStoreReducer";
import { StoreDetailsReducer } from "./reducers/StoreDetailsReducer";

export const RootReducer = combineReducers({
  setupStore: SetupStoreReducer,
  storeDetails: StoreDetailsReducer
});

export type RootState = ReturnType<typeof RootReducer>;
