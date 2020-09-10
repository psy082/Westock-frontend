import viewReducer from "./viewReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  viewReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["viewReducer"],
};

export default persistReducer(persistConfig, rootReducer);
