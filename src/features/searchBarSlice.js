import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    displaySearchBar: false,
  },
  reducers: {
    expandSearchBar: (state) => {
      state.displaySearchBar = true;
    },
    collapseSearchBar: (state) => {
      state.displaySearchBar = false;
    },
  },
});

export const { expandSearchBar, collapseSearchBar } = searchBarSlice.actions;
export default searchBarSlice.reducer;
