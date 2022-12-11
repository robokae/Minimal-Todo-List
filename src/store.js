import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";
import modalReducer from "./features/modal/modalSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer,
  },
  preloadedState: loadState(),
});
