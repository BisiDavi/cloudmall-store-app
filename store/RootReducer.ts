import { combineReducers } from "redux";
import { SetupStoreReducer } from "./SetupStoreReducer";
import { StoreDetailsReducer } from "./StoreDetailsReducer";

export const RootReducer = combineReducers({
  setupStore: SetupStoreReducer,
  storeDetails: StoreDetailsReducer
});

export type RootState = ReturnType<typeof RootReducer>;
