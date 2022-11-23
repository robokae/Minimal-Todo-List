import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: loadState(),
});
