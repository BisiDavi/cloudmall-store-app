import { combineReducers } from "redux";
import { SetupStoreReducer } from "./SetupStoreReducer";

export const RootReducer = combineReducers({
  setupStore: SetupStoreReducer,
});
