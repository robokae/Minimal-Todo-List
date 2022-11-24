import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todosState = useSelector((state) => state.todos);

  const todos = todosState.isSearch
    ? todosState.searchResults
    : todosState.todos;

  return (
    <div className="todo-list">
      <div className="todo-list__content">
        {todos.length === 0 ? (
          <p className="todo-list__no-todos-message">
            You currently do not have any todos!
          </p>
        ) : (
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};

export default TodoList;
