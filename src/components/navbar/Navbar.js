import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { closeSearch, searchTodo } from "../../features/todos/todosSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchTodo(searchInput.current.value));
      }}
      className="navbar__search-bar-form"
    >
      <input
        type="text"
        ref={searchInput}
        className="navbar__search-bar-input"
        placeholder="Search todos"
        autoComplete="off"
      />
      <FontAwesomeIcon
        icon={faTimes}
        className="navbar__search-bar-close-button"
        onClick={() => {
          dispatch(closeSearch());
          searchInput.current.value = "";
        }}
      />
    </form>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <a href="/" className="navbar__app-title">
          Minimal Todo List
        </a>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
