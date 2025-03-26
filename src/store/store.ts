import { configureStore } from "@reduxjs/toolkit";
import { firebaseApiSlice } from "../Slices/firebase-api-slice";
import { authSlice } from "../Slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(firebaseApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
