import { createSlice } from "@reduxjs/toolkit";

export const datePickerSlice = createSlice({
  name: "datePicker",
  initialState: {
    displayDatePicker: false,
    chosenDate: "",
  },
  reducers: {
    openDatePicker: (state) => {
      state.displayDatePicker = true;
    },
    closeDatePicker: (state) => {
      state.displayDatePicker = false;
    },
    chooseDate: (state, action) => {
      state.chosenDate = action.payload;
    },
    clearDate: (state) => {
      state.chosenDate = "";
    },
  },
});

export const { openDatePicker, closeDatePicker, chooseDate, clearDate } =
  datePickerSlice.actions;
export default datePickerSlice.reducer;
