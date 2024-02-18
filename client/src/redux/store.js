import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import adminSlice from "./admin/adminSlice.js";


const rootReducer = combineReducers({
    user:adminSlice
})


const persistConfig = {
    key:"root",
    storage,
    version:1,
}

const persisterReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persisterReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }) 
})

export const persistor = persistStore(store);