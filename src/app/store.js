import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/userSlice.js"

export const store = configureStore({
  reducer: {
    user: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  
});
