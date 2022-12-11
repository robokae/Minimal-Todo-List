import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import uuid from "react-uuid";
import { closeModal } from "../../features/modal/modalSlice";
import { addTodo } from "../../features/todos/todosSlice";

const CreateTodoModal = () => {
  const [
    displayDuplicateTodoWarningMessage,
    setDisplayDuplicateTodoWarningMessage,
  ] = useState(false);
  const { todos } = useSelector((store) => store.todos);
  const todoInput = useRef();
  const dispatch = useDispatch();

  const addTodoToList = (e) => {
    e.preventDefault();
    const todoText = todoInput.current.value.trim();

    if (todoText !== "") {
      /*
       * Display an error message when the user tries to create a todo that
       * already exists
       * However, if the error message is shown and the user wants to create the
       * duplicated todo, then allow them to do so
       */
      if (
        todos.findIndex(
          (todo) => todo.text.toLowerCase() === todoText.toLowerCase()
        ) !== -1 &&
        !displayDuplicateTodoWarningMessage
      ) {
        setDisplayDuplicateTodoWarningMessage(true);
        return;
      }

      dispatch(
        addTodo({
          id: uuid(),
          text: todoText,
          isCompleted: false,
          isSelected: false,
          displayDeleteOptions: false,
        })
      );
      todoInput.current.value = "";
      displayDuplicateTodoWarningMessage &&
        setDisplayDuplicateTodoWarningMessage(false);
      dispatch(closeModal());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    displayDuplicateTodoWarningMessage &&
      setDisplayDuplicateTodoWarningMessage(false);
  };

  return (
    <div className="create-todo-modal">
      <div
        className="create-todo-modal__overlay"
        onClick={handleCloseModal}
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
            placeholder="Add a todo (press enter to create)"
            autoFocus="autofocus"
          />
          {displayDuplicateTodoWarningMessage && (
            <p className="create-todo-modal__warning-message">
              Todo already exists (press enter to ignore)
            </p>
          )}
          <div className="create-todo-modal__optional-details">
            <h5 className="create-todo-modal__optional-details-heading">
              Optional Details
            </h5>
            <div className="create-todo-modal__input-group">
              <ReactTextareaAutosize
                className="create-todo-modal__create-todo-note-input"
                placeholder="Add an optional note (Markdown supported)"
                minRows={3}
                maxRows={20}
              />
            </div>
          </div>
          <div className="create-todo-modal__action-buttons">
            <button
              type="button"
              className="create-todo-modal__action-button"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="create-todo-modal__action-button 
                create-todo-modal__action-button--success"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodoModal;
