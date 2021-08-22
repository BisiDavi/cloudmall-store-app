import { createStore, applyMiddleware } from "redux";
import { RootReducer } from "./RootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(RootReducer, applyMiddleware(...middleware));

export default store;
