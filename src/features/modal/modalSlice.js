import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    displayModal: false,
  },
  reducers: {
    openModal: (state) => {
      state.displayModal = true;
    },
    closeModal: (state) => {
      state.displayModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
