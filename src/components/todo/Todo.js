import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTodo, setCompleted } from "../../features/todos/todosSlice";
import ReactTooltip from "react-tooltip";
import popupConfig from "../popup/popupConfig";

const Todo = ({ todo }) => {
  const { text, isCompleted } = todo;
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
          <div data-tip data-for="starTodoTip">
            <FontAwesomeIcon icon={["far", "star"]} className="todo__icon" />
          </div>
          <ReactTooltip id="starTodoTip" place="top,bottom" {...popupConfig}>
            Star
          </ReactTooltip>
          <div data-tip data-for="deleteTip">
            <FontAwesomeIcon
              icon={["fas", "trash"]}
              className="todo__icon"
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </div>
          <ReactTooltip id="deleteTip" place="top,bottom" {...popupConfig}>
            Delete
          </ReactTooltip>
          <div data-tip data-for="optionsTip">
            <FontAwesomeIcon
              icon={["fas", "ellipsis-h"]}
              className="todo__icon"
            />
          </div>
          <ReactTooltip id="optionsTip" place="top,bottom" {...popupConfig}>
            Options
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
};

export default Todo;
