import { createSlice } from "@reduxjs/toolkit";

const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState: {
    displaySideMenu: false,
    displayTodoDetails: false,
  },
  reducers: {
    openSideMenu: (state) => {
      state.displaySideMenu = true;
    },
    closeSideMenu: (state) => {
      state.displaySideMenu = false;
    },
    openTodoDetails: (state, action) => {
      state.displayTodoDetails = true;
    },
    closeTodoDetails: (state, action) => {
      state.displayTodoDetails = false;
    },
  },
});

export const {
  openSideMenu,
  closeSideMenu,
  openTodoDetails,
  closeTodoDetails,
} = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
