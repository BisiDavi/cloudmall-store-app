import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSecureStore from "redux-persist-expo-securestore";
import { RootReducer } from "./RootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

// Secure storage
const storage = createSecureStore();

const config = {
  key: "root",
  storage,
};

const reducer = persistReducer(config, RootReducer);

export default function configureStore() {
  const store: any = createStore(reducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);

  return { persistor, store };
}
