import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserApi } from "/src/api/userApi.js";
import emailSlice from "../context/emailSlice";

export const store = configureStore({
  reducer: {
    email:emailSlice,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});

setupListeners(store.dispatch);
