import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import SearchBar from "../../components/searchBar/SearchBar";
import {
  addTodo,
  closeSearch,
  hideCompleted,
  showCompleted,
} from "../../features/todosSlice";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import toolkitConfig from "../../config/toolkitConfig";
import { expandSearchBar } from "../../features/searchBarSlice";

const TodoList = () => {
  const todosState = useSelector((store) => store.todos);
  const { displaySearchBar } = useSelector((store) => store.searchBar);
  const dispatch = useDispatch();
  const { isSearch, searchPhrase, displayCompleted } = todosState;

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
                  {displayCompleted ? (
                    <FontAwesomeIcon
                      icon={["fas", "list"]}
                      onClick={() => dispatch(hideCompleted())}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={["fas", "tasks"]}
                      onClick={() => dispatch(showCompleted())}
                    />
                  )}
                </div>
                <Tooltip
                  id="clearCompletedTip"
                  place="top,bottom"
                  {...toolkitConfig}
                >
                  {displayCompleted ? "Hide Completed" : "Show Completed"}
                </Tooltip>
                {displaySearchBar ? (
                  <SearchBar />
                ) : (
                  <div>
                    <div data-tip data-for="searchTip">
                      <FontAwesomeIcon
                        icon={["fas", "search"]}
                        onClick={() => dispatch(expandSearchBar())}
                      />
                    </div>
                    <Tooltip
                      id="searchTip"
                      place="top,bottom"
                      {...toolkitConfig}
                    >
                      Search
                    </Tooltip>
                  </div>
                )}
              </div>
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
              ) : displayCompleted ? (
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)
              ) : (
                todos
                  .filter((todo) => !todo.isCompleted)
                  .map((todo) => <Todo key={todo.id} todo={todo} />)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
