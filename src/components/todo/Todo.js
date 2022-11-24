import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  setCompleted,
  setDisplayDeleteOptions,
} from "../../features/todos/todosSlice";

const Todo = ({ todo }) => {
  const { text, isCompleted, displayDeleteOptions } = todo;
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div className="todo__content">
        <FontAwesomeIcon
          icon={isCompleted ? "check-square" : ["far", "square"]}
          className={`todo__icon${isCompleted ? "--highlight" : ""}`}
          onClick={() => dispatch(setCompleted(todo.id))}
        />
        {/* Display strike through todo when completed */}
        <p className={`todo__text${isCompleted ? "--strike-through" : ""}`}>
          {text}
        </p>
        <div className="todo__options-container">
          <FontAwesomeIcon icon={["far", "star"]} className="todo__icon" />
          <FontAwesomeIcon
            icon={["fas", "trash"]}
            className="todo__icon"
            onClick={() => dispatch(setDisplayDeleteOptions(todo.id))}
          />
          <FontAwesomeIcon
            icon={["fas", "ellipsis-h"]}
            className="todo__icon"
          />
        </div>
        {displayDeleteOptions && (
          <div className="todo__delete-options">
            <button
              className="todo__delete-button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
            <button
              className="todo__cancel-button"
              onClick={() => dispatch(setDisplayDeleteOptions(todo.id))}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
