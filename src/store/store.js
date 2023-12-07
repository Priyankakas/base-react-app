import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import userReducer from "STORE/User/UserSlice";

const persistConfig = {
    key: "root",
    storage: storageSession,
};

const reducer = combineReducers({
    user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
})

export const persistor = persistStore(store);

