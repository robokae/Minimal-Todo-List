import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { closeModal } from "../../features/modal/modalSlice";
import { addTodo } from "../../features/todos/todosSlice";

const CreateTodoModal = () => {
  const [displayAdditionalDetails, setDisplayAdditionalDetails] =
    useState(false);
  const todoInput = useRef();
  const dispatch = useDispatch();

  const addTodoToList = (e) => {
    e.preventDefault();
    const todo = todoInput.current.value;

    if (todo !== "") {
      dispatch(
        addTodo({
          id: uuid(),
          text: todo,
          isCompleted: false,
          isSelected: false,
          displayDeleteOptions: false,
        })
      );
      todoInput.current.value = "";
      dispatch(closeModal());
    }
  };

  return (
    <div className="create-todo-modal">
      <div
        className="create-todo-modal__overlay"
        onClick={() => dispatch(closeModal())}
      ></div>
      <div className="create-todo-modal__content">
        <form
          className="create-todo-modal__create-todo-form"
          onSubmit={addTodoToList}
        >
          <input
            ref={todoInput}
            type="text"
            className="create-todo-modal__create-todo-title-input"
            placeholder="Add a todo"
            autoFocus="autofocus"
          />
          <div
            className="create-todo-modal__additional-details"
            onClick={(e) => {
              e.preventDefault();
              setDisplayAdditionalDetails(!displayAdditionalDetails);
            }}
          >
            <p>Additional Details</p>
            <FontAwesomeIcon icon={"chevron-down"} />
          </div>
          {displayAdditionalDetails && (
            <div className="create-todo-modal__input-group">
              <textarea
                className="create-todo-modal__create-todo-note-input"
                placeholder="Add an optional note (Markdown supported)"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateTodoModal;
