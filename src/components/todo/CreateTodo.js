import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateTodoModal from "../modal/CreateTodoModal";
import { useDispatch, useSelector } from "react-redux";
import { openCreateTodoModal } from "../../features/modalsSlice";

const CreateTodo = () => {
  const { displayCreateTodoModal } = useSelector((store) => store.modals);
  const dispatch = useDispatch();

  return (
    <div className="create-todo">
      <div
        className="create-todo__cta-button"
        onClick={() => dispatch(openCreateTodoModal())}
      >
        <FontAwesomeIcon icon={["fas", "plus"]} className="create-todo__icon" />
        <p className="create-todo__cta-message">Add a todo</p>
      </div>
      {displayCreateTodoModal && <CreateTodoModal />}
    </div>
  );
};

export default CreateTodo;
