import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./productService";
import productReducer from "./slice";

const rootReducer = combineReducers({
    productReducer,
    [productAPI.reducerPath]: productAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
