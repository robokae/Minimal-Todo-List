import { createSlice } from "@reduxjs/toolkit";

export const warningMessageSlice = createSlice({
  name: "warningMessage",
  initialState: {
    warningMessages: {
      duplicateTodo: false,
      invalidDate: false,
    },
  },
  reducers: {
    showWarningMessage: (state, action) => {
      state.warningMessages[action.payload] = true;
    },
    hideWarningMessage: (state, action) => {
      state.warningMessages[action.payload] = false;
    },
    closeWarningMessages: (state, action) => {
      action.payload.forEach(
        (warningMessageType) =>
          (state.warningMessages[warningMessageType] = false)
      );
    },
  },
});

export const { showWarningMessage, hideWarningMessage, closeWarningMessages } =
  warningMessageSlice.actions;
export default warningMessageSlice.reducer;
