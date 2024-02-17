import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/ProductSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { cartReducer } from "./slices/CartSlice";

// Define the reducers
const rootReducer = combineReducers({
  product: productReducer,
  cart:cartReducer
  // Add other reducers as needed
});

const persistConfig = {
  key: "root",
  storage, // Use sessionStorage as the storage engine
  whitelist: ["product","cart"], // Specify which reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});


// Initialize Redux Persist
export const persistor = persistStore(store);