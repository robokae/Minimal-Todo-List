import React, { useState } from "react";
import "../styles/AddTodo.css";

const AddTodo = ({ addTodo }) => {
  const [todoToAdd, setTodoToAdd] = useState("");

  const updateTodo = (e) => {
    setTodoToAdd(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todoToAdd);
          setTodoToAdd("");
        }}
      >
        <input
          type="text"
          onChange={updateTodo}
          className="todoToAdd"
          value={todoToAdd}
          placeholder="Add a todo"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default AddTodo;
