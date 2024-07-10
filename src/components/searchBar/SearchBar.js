import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import toolkitConfig from "../../config/toolkitConfig";
import { collapseSearchBar } from "../../features/searchBarSlice";
import { closeSearch, searchTodo } from "../../features/todosSlice";
import { Tooltip } from "react-tooltip";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch(searchTodo(searchInput.current.value));
      }}
      className="search-bar"
    >
      <input
        type="text"
        ref={searchInput}
        className="search-bar__input"
        placeholder="Search"
        autoFocus="true"
        autoComplete="off"
        onChange={() => {
          if (searchInput.current.value === "") {
            dispatch(closeSearch());
          } else {
            dispatch(searchTodo(searchInput.current.value.trim()));
          }
        }}
      />
      <Tooltip id="clearTip" place="top,bottom" {...toolkitConfig}>
        Close Search
      </Tooltip>
      <div data-tip data-for="clearTip">
        <FontAwesomeIcon
          icon={faTimes}
          className="search-bar__close-button"
          onClick={() => {
            dispatch(collapseSearchBar());
            dispatch(closeSearch());
            searchInput.current.value = "";
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
