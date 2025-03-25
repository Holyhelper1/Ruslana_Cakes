import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter-slice";
import { firebaseApiSlice } from "../Slices/firebase-api-slice";
import { authSlice } from "../Slices/authSlice";
import { dessertSlice } from "../Slices/dessertSlice";

export const store = configureStore({
  reducer: {
    desserts: dessertSlice.reducer,
    auth: authSlice.reducer,
    [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(firebaseApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
