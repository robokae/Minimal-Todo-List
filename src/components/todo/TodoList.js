import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import SearchBar from "../searchBar/SearchBar";

const TodoList = () => {
  const todosState = useSelector((store) => store.todos);

  const todos = todosState.isSearch
    ? todosState.searchResults
    : todosState.todos;

  return (
    <div className="todo-list">
      <div className="todo-list__content">
        {todos.length === 0 && !todosState.isSearch ? (
          <p className="todo-list__no-todos-message">
            You currently do not have any todos!
          </p>
        ) : (
          <div className="todo-list__todo-list">
            <div className="todo-list__todo-list-menu">
              <p className="todo-list__todo-count">
                {`${todos.length} todo${todos.length !== 1 ? "s" : ""}`}
                {todosState.searchPhrase !== ""
                  ? ` matching "${todosState.searchPhrase}"`
                  : ""}
              </p>
              <SearchBar />
            </div>
            <div className="todo-list__todos">
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
