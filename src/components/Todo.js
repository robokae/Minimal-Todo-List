import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Todo.css";

const Todo = ({ todoEntry }) => {
  const [showDeleteOptions, setShowDeleteOptions] = useState(false);
  const [completed, setCompleted] = useState(false);

  const updateTodoStatus = () => {
    setCompleted(!completed);
  };

  const handleDeleteButtonClick = () => {
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
          {todoEntry.todo}
        </div>
        <div className="todoOptionsContainer">
          <FontAwesomeIcon icon={["far", "star"]} className="starIcon" />
          <FontAwesomeIcon
            icon={["fas", "trash"]}
            className="trashIcon"
            onClick={handleDeleteButtonClick}
          />
          <FontAwesomeIcon
            icon={["fas", "ellipsis-h"]}
            className="ellipsisIcon"
          />
        </div>
        {showDeleteOptions && (
          <div className={"deleteOptions"}>
            <button className="deleteButton">Delete</button>
            <button
              className="cancelDeleteButton"
              onClick={handleDeleteButtonClick}
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
