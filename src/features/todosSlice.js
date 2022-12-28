import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    searchResults: [],
    searchPhrase: "",
    isSearch: false,
    displayCompleted: true,
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      if (state.isSearch) {
        state.searchResults = state.searchResults.filter(
          (todo) => todo.id !== action.payload
        );
      }
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    searchTodo: (state, action) => {
      const searchPhrase = action.payload;
      state.searchPhrase = searchPhrase;
      state.isSearch = true;
      state.searchResults = state.todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchPhrase.toLowerCase())
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
    showDeleteOptions: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload)
          todo.displayDeleteOptions = !todo.displayDeleteOptions;
      });
    },
    showCompleted: (state) => {
      state.displayCompleted = true;
    },
    hideCompleted: (state) => {
      state.displayCompleted = false;
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
  showDeleteOptions,
  showCompleted,
  hideCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
