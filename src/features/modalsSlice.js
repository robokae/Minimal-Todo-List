import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    displayCreateTodoModal: false,
  },
  reducers: {
    openCreateTodoModal: (state) => {
      state.displayCreateTodoModal = true;
    },
    closeCreateTodoModal: (state) => {
      state.displayCreateTodoModal = false;
    },
  },
});

export const { openCreateTodoModal, closeCreateTodoModal } =
  modalsSlice.actions;
export default modalsSlice.reducer;
