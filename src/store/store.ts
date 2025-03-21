export const store = {
    admin: false,
    setAdmin: (value: boolean) => (store.admin = value),
};




// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter-slice";
// import { apiSlice } from "../api/Products/products-slice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(apiSlice.middleware)
//   }
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;