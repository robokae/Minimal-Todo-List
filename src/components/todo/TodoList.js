import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { addTodo, closeSearch } from "../../features/todosSlice";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import toolkitConfig from "../../config/toolkitConfig";

const TodoList = () => {
  const todosState = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const { isSearch, searchPhrase } = todosState;

  const todos = isSearch ? todosState.searchResults : todosState.todos;
  const numCompleted = todos.filter((todo) => todo.isCompleted).length;

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
                  <div className="todo-list__todo-status">
                    <p>
                      {`${todos.length} todo${todos.length !== 1 ? "s" : ""}`}
                    </p>
                    <span>&#124;</span>
                    <p>{`${numCompleted} completed`}</p>
                  </div>
                )}
              </div>
              <div className="todo-list__options-container">
                <div data-tip data-for="clearCompletedTip">
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </div>
                <ReactTooltip
                  id="clearCompletedTip"
                  place="top,bottom"
                  {...toolkitConfig}
                >
                  Clear Completed
                </ReactTooltip>
                <div data-tip data-for="searchTip">
                  <FontAwesomeIcon icon={["fas", "search"]} />
                </div>
                <ReactTooltip
                  id="searchTip"
                  place="top,bottom"
                  {...toolkitConfig}
                >
                  Search
                </ReactTooltip>
              </div>
              {/* <SearchBar /> */}
            </div>
            <div className="todo-list__todos">
              {isSearch && todos.length === 0 ? (
                <div className="todo-list__no-search-results-message">
                  <button
                    className="todo-list__create-todo-button"
                    onClick={() => {
                      dispatch(
                        addTodo({
                          id: uuid(),
                          title: searchPhrase,
                          isCompleted: false,
                          isSelected: false,
                          displayDeleteOptions: false,
                        })
                      );

                      dispatch(closeSearch());
                    }}
                  >
                    Create todo for "{searchPhrase}"
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
