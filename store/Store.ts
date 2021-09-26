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
    blacklist: ["storeProfile"],
    storage,
};

const reducer = persistReducer(config, RootReducer);

export default function configureStore() {
    const store: any = createStore(reducer, applyMiddleware(...middleware));
    const persistor = persistStore(store);
    let hotModuleReplacement: any = module;

    if (hotModuleReplacement.hot) {
        hotModuleReplacement.hot.accept("./RootReducer", () => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require("./RootReducer").default;
            store.replaceReducer(persistReducer(config, nextRootReducer));
        });
    }

    return { persistor, store };
}
