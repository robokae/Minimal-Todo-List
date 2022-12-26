import { createSlice } from "@reduxjs/toolkit";

const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    displayMarkdownPreview: false,
    markdownText: "",
  },
  reducers: {
    openMarkdownPreview: (state) => {
      state.displayMarkdownPreview = true;
    },
    closeMarkdownPreview: (state) => {
      state.displayMarkdownPreview = false;
    },
    setMarkdownText: (state, action) => {
      state.markdownText = action.payload;
    },
  },
});

export const { openMarkdownPreview, closeMarkdownPreview, setMarkdownText } =
  markdownSlice.actions;
export default markdownSlice.reducer;
