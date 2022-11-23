import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";
import uuid from "react-uuid";

const AddTodoInput = () => {
  const todoInput = useRef();
  const dispatch = useDispatch();

  const addTodoToList = (e) => {
    const todo = todoInput.current.value;
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        text: todo,
        isCompleted: false,
        isSelected: false,
        displayDeleteOptions: false,
      })
    );
    todoInput.current.value = "";
  };

  return (
    <div className="add-todo">
      <form className="add-todo__input-form" onSubmit={addTodoToList}>
        <input
          type="text"
          ref={todoInput}
          className="add-todo__text-input"
          placeholder="Add a todo"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default AddTodoInput;
