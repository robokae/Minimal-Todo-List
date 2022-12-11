import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { closeSearch, searchTodo } from "../../features/todos/todosSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch(searchTodo(searchInput.current.value));
      }}
      className="navbar__search-bar-form"
    >
      <input
        type="text"
        ref={searchInput}
        className="navbar__search-bar-input"
        placeholder="Search"
        autoComplete="off"
        onChange={() => {
          searchInput.current.value === ""
            ? dispatch(closeSearch())
            : dispatch(searchTodo(searchInput.current.value.trim()));
        }}
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

export default SearchBar;
