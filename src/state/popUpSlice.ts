import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  month: "",
  day: "",
};

const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    showPopUp: (state, action) => {
      const { month, day } = action.payload;
      state.show = true;
      state.month = month;
      state.day = day;
    },
    hidenPopUp: (state) => {
      state.show = false;
    },
  },
});

export const { showPopUp, hidenPopUp } = popUpSlice.actions;
export default popUpSlice.reducer;
