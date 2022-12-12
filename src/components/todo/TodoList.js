import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import SearchBar from "../searchBar/SearchBar";
import { addTodo, closeSearch } from "../../features/todos/todosSlice";
import uuid from "react-uuid";

const TodoList = () => {
  const todosState = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const { isSearch, searchPhrase } = todosState;

  const todos = isSearch ? todosState.searchResults : todosState.todos;

  return (
    <div className="todo-list">
      <div className="todo-list__content">
        {todos.length === 0 && !isSearch ? (
          <p className="todo-list__no-todos-message">
            You currently do not have any todos!
          </p>
        ) : (
          <div className="todo-list__todo-list">
            <div className="todo-list__todo-list-menu">
              <div className="todo-list__todo-count">
                {isSearch ? (
                  <p>
                    {searchPhrase !== ""
                      ? `${todos.length} result${
                          todos.length !== 1 ? "s" : ""
                        } for "${searchPhrase}"`
                      : ""}
                  </p>
                ) : (
                  <p>
                    {`${todos.length} todo${todos.length !== 1 ? "s" : ""}`}
                  </p>
                )}
              </div>
              <SearchBar />
            </div>
            <div className="todo-list__todos">
              {isSearch && todos.length === 0 ? (
                <div className="todo-list__no-search-results-message">
                  <p>No matches</p>
                  <button
                    className="todo-list__create-todo-button"
                    onClick={() => {
                      dispatch(
                        addTodo({
                          id: uuid(),
                          text: searchPhrase,
                          isCompleted: false,
                          isSelected: false,
                          displayDeleteOptions: false,
                        })
                      );

                      dispatch(closeSearch());
                    }}
                  >
                    Create Todo for "{searchPhrase}"
                  </button>
                </div>
              ) : (
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
