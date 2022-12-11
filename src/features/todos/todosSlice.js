import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    searchResults: [],
    searchPhrase: "",
    isSearch: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    searchTodo: (state, action) => {
      const searchPhrase = action.payload.toLowerCase();
      state.searchPhrase = searchPhrase;
      state.isSearch = true;
      state.searchResults = state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchPhrase)
      );
    },
    closeSearch: (state) => {
      state.searchPhrase = "";
      state.isSearch = false;
    },
    setCompleted: (state, action) => {
      const todo = action.payload;
      state.todos.find((t) => t.id === todo.id).isCompleted = !todo.isCompleted;

      if (state.isSearch)
        state.searchResults.find((t) => t.id === todo.id).isCompleted =
          !todo.isCompleted;
    },
    setSelected: (state, action) => {
      state.selected.push(action.payload);
    },
    unsetSelected: (state, action) => {
      state.selected.filter((t) => t.id !== action.payload.id);
    },
    setDisplayDeleteOptions: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload)
          todo.displayDeleteOptions = !todo.displayDeleteOptions;
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  searchTodo,
  closeSearch,
  setCompleted,
  setSelected,
  unsetSelected,
  setDisplayDeleteOptions,
} = todosSlice.actions;
export default todosSlice.reducer;
