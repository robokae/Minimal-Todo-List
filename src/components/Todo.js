import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Todo.css";

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
    <div>
      <div className="todoItemContainer">
        <FontAwesomeIcon
          icon={"thumbs-up"}
          className={completed ? "thumbsUpIconCompleted" : "thumbsUpIcon"}
          onClick={updateTodoStatus}
        />
        {/* Display strike through todo when completed */}
        <div
          className={completed ? "todoItemCompleted" : "todoItemNotCompleted"}
        >
          {todo}
        </div>
        <div className="todoOptionsContainer">
          <FontAwesomeIcon icon={["far", "star"]} className="starIcon" />
          <FontAwesomeIcon
            icon={["fas", "trash"]}
            className="trashIcon"
            onClick={toggleDisplayDeleteOptions}
          />
          <FontAwesomeIcon
            icon={["fas", "ellipsis-h"]}
            className="ellipsisIcon"
          />
        </div>
        {showDeleteOptions && (
          <div className={"deleteOptions"}>
            <button
              className="deleteButton"
              onClick={() => deleteTodo(todoIndex)}
            >
              Delete
            </button>
            <button
              className="cancelDeleteButton"
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
