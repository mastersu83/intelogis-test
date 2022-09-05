import { configureStore } from "@reduxjs/toolkit";
import transportationSlice from "./reducers/transportationSlice";

export const store = configureStore({
  reducer: {
    transportationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
