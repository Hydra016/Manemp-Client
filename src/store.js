import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import shopReducer from "./features/shopSlice";
import commonReducer from "./features/commonSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
    common: commonReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
