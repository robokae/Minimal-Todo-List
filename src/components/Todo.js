import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, todoIndex, deleteTodo }) => {
  const [showDeleteOptions, setShowDeleteOptions] = useState(false);
  const [completed, setCompleted] = useState(false);

  const updateTodoStatus = () => {
    setCompleted(!completed);
  };

  const toggleDisplayDeleteOptions = () => {
    setShowDeleteOptions(!showDeleteOptions);
  };

  return (
    <div className="todo">
      <div className="todo__content">
        <FontAwesomeIcon
          icon={completed ? "check-square" : ["far", "square"]}
          className={`todo__icon${completed ? "--highlight" : ""}`}
          onClick={updateTodoStatus}
        />
        {/* Display strike through todo when completed */}
        <p className={`todo__text${completed ? "--strike-through" : ""}`}>
          {todo}
        </p>
        <div className="todo__options-container">
          <FontAwesomeIcon icon={["far", "star"]} className="todo__icon" />
          <FontAwesomeIcon
            icon={["fas", "trash"]}
            className="todo__icon"
            onClick={toggleDisplayDeleteOptions}
          />
          <FontAwesomeIcon
            icon={["fas", "ellipsis-h"]}
            className="todo__icon"
          />
        </div>
        {showDeleteOptions && (
          <div className="todo__delete-options">
            <button
              className="todo__delete-button"
              onClick={() => deleteTodo(todoIndex)}
            >
              Delete
            </button>
            <button
              className="todo__cancel-button"
              onClick={toggleDisplayDeleteOptions}
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
