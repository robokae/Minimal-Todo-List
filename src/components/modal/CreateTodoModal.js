import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import uuid from "react-uuid";
import {
  chooseDate,
  clearDate,
  closeDatePicker,
  openDatePicker,
} from "../../features/datePickerSlice";
import { closeCreateTodoModal } from "../../features/modalsSlice";
import { addTodo } from "../../features/todosSlice";

const CreateTodoModal = () => {
  const dispatch = useDispatch();
  const { displayDatePicker, chosenDate } = useSelector(
    (store) => store.datePicker
  );
  const [todoPriority, setTodoPriority] = useState("normal");
  const [date, setDate] = useState(null);
  const todoInput = useRef();
  const todoDetails = useRef("");

  const closeModal = () => {
    dispatch(clearDate());
    dispatch(closeCreateTodoModal());
  };

  const addTodoToList = (e) => {
    e.preventDefault();
    const todoTitle = todoInput.current.value.trim();

    if (todoTitle !== "") {
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

  const handleCloseModal = () => {
    closeModal();
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
          {/* {displayWarningMessage.duplicateTodo && (
            <p className="create-todo-modal__warning-message">
              {warningMessages.duplicateTodo}
            </p>
          )} */}
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
                    <div className="create-todo-modal__additional-details__due-date-calendar-options">
                      <button
                        className="create-todo-modal__action-button"
                        onClick={() => {
                          dispatch(closeDatePicker());
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="create-todo-modal__action-button 
                        create-todo-modal__action-button--success"
                        onClick={() => {
                          if (date !== null) {
                            dispatch(chooseDate(date.toString()));
                          }
                          dispatch(closeDatePicker());
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
