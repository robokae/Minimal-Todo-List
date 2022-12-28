import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import uuid from "react-uuid";
import alertConfig from "../../config/alertConfig";
import {
  chooseDate,
  clearDate,
  closeDatePicker,
  openDatePicker,
} from "../../features/datePickerSlice";
import { closeCreateTodoModal } from "../../features/modalsSlice";
import { addTodo } from "../../features/todosSlice";
import {
  closeWarningMessages,
  showWarningMessage,
} from "../../features/warningMessageSlice";
import AlertMessage from "../AlertMessage";

const CreateTodoModal = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todos);
  const { displayDatePicker, chosenDate } = useSelector(
    (store) => store.datePicker
  );
  const { warningMessages } = useSelector((store) => store.warningMessage);
  const [todoPriority, setTodoPriority] = useState("normal");
  const [date, setDate] = useState(null);
  const todoInput = useRef();
  const todoDetails = useRef("");

  const warningMessageTypes = ["duplicateTodo", "invalidDate"];
  const { duplicateTodo, invalidDate } = alertConfig;

  const closeModal = () => {
    // Close all warning messages
    dispatch(closeWarningMessages(warningMessageTypes));
    dispatch(clearDate());
    dispatch(closeCreateTodoModal());
  };

  const addTodoToList = (e) => {
    e.preventDefault();
    const todoTitle = todoInput.current.value.trim();

    if (todoTitle !== "") {
      /*
       * Display an error message when the user tries to create a todo that
       * already exists
       * However, if the error message is shown and the user wants to create the
       * duplicated todo, then allow them to do so
       */
      if (
        todos.findIndex(
          (todo) => todo.title.toLowerCase() === todoTitle.toLowerCase()
        ) !== -1 &&
        !warningMessages.duplicateTodo
      ) {
        dispatch(showWarningMessage("duplicateTodo"));
        return;
      }

      dispatch(
        addTodo({
          id: uuid(),
          title: todoTitle,
          priority: todoPriority,
          due: chosenDate,
          note: todoDetails.current.value,
          isCompleted: false,
          isSelected: false,
          displayDeleteOptions: false,
        })
      );
      todoInput.current.value = "";
      closeModal();
    }
  };

  const priorities = ["low", "normal", "medium", "high"];

  return (
    <div className="create-todo-modal">
      <div className="create-todo-modal__overlay" onClick={closeModal}></div>
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
          {warningMessages.duplicateTodo && (
            <AlertMessage
              type={duplicateTodo.type}
              message={duplicateTodo.message}
            />
          )}
          <div className="create-todo-modal__additional-details">
            <h5 className="create-todo-modal__additional-details__heading">
              Additional Details
            </h5>
            <div className="create-todo-modal__additional-details__priority">
              <p>Priority:</p>
              <div className="create-todo-modal__additional-details__priority-options">
                {priorities.map((priority, index) => (
                  <div
                    key={index}
                    className={`create-todo-modal__additional-details__priority-option ${
                      priority === todoPriority &&
                      "create-todo-modal__additional-details__priority-option--selected"
                    }`}
                    onClick={() => setTodoPriority(priority)}
                  >
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            <div className="create-todo-modal__additional-details__due-date">
              <label htmlFor="due-date">Due:</label>
              <div className="create-todo-modal__additional-details__due-date-inputs">
                <div
                  className="create-todo-modal__additional-details__due-date-input"
                  onClick={() => dispatch(openDatePicker())}
                >
                  <p>
                    {chosenDate === ""
                      ? "Choose date"
                      : new Date(chosenDate).toLocaleDateString("en-us", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                  </p>
                  <FontAwesomeIcon icon={["fas", "calendar"]} />
                </div>
                {displayDatePicker && (
                  <div className="create-todo-modal__additional-details__due-date-calendar">
                    <Calendar onChange={setDate} />
                    {warningMessages.invalidDate && (
                      <AlertMessage
                        type={invalidDate.type}
                        message={invalidDate.message}
                      />
                    )}
                    <div className="create-todo-modal__additional-details__due-date-calendar-options">
                      <button
                        className="create-todo-modal__action-button"
                        onClick={() => {
                          dispatch(closeWarningMessages(["invalidDate"]));
                          dispatch(closeDatePicker());
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="create-todo-modal__action-button 
                        create-todo-modal__action-button--success"
                        onClick={(e) => {
                          e.preventDefault();
                          if (date !== null) {
                            if (date.getDate() < new Date().getDate()) {
                              dispatch(showWarningMessage("invalidDate"));
                            } else {
                              dispatch(chooseDate(date.toString()));
                              dispatch(closeWarningMessages(["invalidDate"]));
                              dispatch(closeDatePicker());
                            }
                          }
                        }}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="create-todo-modal__additional-details__note">
              <label htmlFor="details">Note:</label>
              <ReactTextareaAutosize
                id="details"
                ref={todoDetails}
                className="create-todo-modal__additional-details__note-input"
                minRows={3}
                maxRows={20}
              />
            </div>
          </div>
          <div className="create-todo-modal__action-buttons">
            <button
              type="button"
              className="create-todo-modal__action-button"
              onClick={closeModal}
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
