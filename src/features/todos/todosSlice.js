import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.text !== action.payload);
    },
    setCompleted: (state, action) => {
      const todo = action.payload;
      state.todos.forEach((t) => {
        if (t.id === todo.id) t.isCompleted = !t.isCompleted;
      });
    },
    setSelected: (state, action) => state.selected.push(action.payload),
    unsetSelected: (state, action) =>
      state.selected.filter((t) => t.id !== action.payload.id),
    setDisplayDeleteOptions: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id)
          todo.displayDeleteOptions = !todo.displayDeleteOptions;
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  setCompleted,
  setSelected,
  unsetSelected,
  setDisplayDeleteOptions,
} = todosSlice.actions;
export default todosSlice.reducer;
