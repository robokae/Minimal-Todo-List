import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateTodoModal from "../modal/CreateTodoModal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

const CreateTodo = () => {
  const { displayModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <div className="create-todo">
      <div
        className="create-todo__cta-button"
        onClick={() => dispatch(openModal())}
      >
        <FontAwesomeIcon icon={["fas", "plus"]} className="create-todo__icon" />
        <p className="create-todo__cta-message">Add a todo</p>
      </div>
      {displayModal && <CreateTodoModal />}
    </div>
  );
};

export default CreateTodo;
