import { configureStore } from "@reduxjs/toolkit";
import popUpSlice from "./popUpSlice";

export const store = configureStore({
  reducer: {
    popUp: popUpSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
