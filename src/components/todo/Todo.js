import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTodo, setCompleted } from "../../features/todosSlice";
import toolkitConfig from "../../config/toolkitConfig";
import { Tooltip } from "react-tooltip";

const Todo = ({ todo }) => {
  const { title, isCompleted } = todo;
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div className="todo__content">
        <FontAwesomeIcon
          icon={isCompleted ? "check-square" : ["far", "square"]}
          className={`todo__icon${
            isCompleted ? "--highlight" : ""
          } todo__icon--square`}
          onClick={() => dispatch(setCompleted(todo))}
        />
        {/* Display strike through todo when completed */}
        <p className={`todo__text${isCompleted ? "--strike-through" : ""}`}>
          {title}
        </p>
        <div className="todo__options-container">
          <div data-tip data-for="starTodoTip">
            <FontAwesomeIcon icon={["far", "star"]} className="todo__icon" />
          </div>
          <Tooltip id="starTodoTip" place="top,bottom" {...toolkitConfig}>
            Star
          </Tooltip>
          <div data-tip data-for="deleteTip">
            <FontAwesomeIcon
              icon={["fas", "trash"]}
              className="todo__icon"
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </div>
          <Tooltip id="deleteTip" place="top,bottom" {...toolkitConfig}>
            Delete
          </Tooltip>
          <div data-tip data-for="optionsTip">
            <FontAwesomeIcon
              icon={["fas", "ellipsis-h"]}
              className="todo__icon"
            />
          </div>
          <Tooltip id="optionsTip" place="top,bottom" {...toolkitConfig}>
            Options
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Todo;
