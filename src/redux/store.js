import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import authReducer from "./reducers/Auth";

export const store = createStore(authReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
