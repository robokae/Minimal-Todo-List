import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todosSlice";
import modalsReducer from "./features/modalsSlice";
import sidePanelReducer from "./features/sidePanelSlice";
import datePickerReducer from "./features/datePickerSlice";
import markdownReducer from "./features/markdownSlice";
import warningMessageReducer from "./features/warningMessageSlice";
import { loadState } from "./localStorage";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modals: modalsReducer,
    sidePanel: sidePanelReducer,
    datePicker: datePickerReducer,
    markdown: markdownReducer,
    warningMessage: warningMessageReducer,
  },
  preloadedState: loadState(),
});
