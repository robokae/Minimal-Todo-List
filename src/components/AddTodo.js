import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todoToAdd, setTodoToAdd] = useState("");

  const updateTodo = (e) => {
    setTodoToAdd(e.target.value);
  };

  return (
    <div className="add-todo">
      <form
        className="add-todo__input-form"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todoToAdd);
          setTodoToAdd("");
        }}
      >
        <input
          type="text"
          onChange={updateTodo}
          className="add-todo__text-input"
          value={todoToAdd}
          placeholder="Add a todo"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default AddTodo;
