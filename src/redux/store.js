import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import rootReducer from "./root-reducer";

const middleware = [thunk];
const persistConfig = {
  key: "persist-key",
  storage,
};

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export default store;
export { persistor };
