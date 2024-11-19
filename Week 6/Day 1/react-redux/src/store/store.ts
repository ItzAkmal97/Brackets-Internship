import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice";
import userDetailsReducer from "../features/UserDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userDetails: userDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
