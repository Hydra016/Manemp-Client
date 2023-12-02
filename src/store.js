import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import shopReducer from "./features/shopSlice";
import commonReducer from "./features/commonSlice";
import requestsReducer from "./features/requestsSlice";
import shiftReducer from "./features/shiftSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
    common: commonReducer,
    request: requestsReducer,
    shifts: shiftReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
