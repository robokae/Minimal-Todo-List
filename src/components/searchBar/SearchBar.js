import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import toolkitConfig from "../../config/toolkitConfig";
import { closeSearch, searchTodo } from "../../features/todosSlice";

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
        autoComplete="off"
        onChange={() => {
          searchInput.current.value === ""
            ? dispatch(closeSearch())
            : dispatch(searchTodo(searchInput.current.value.trim()));
        }}
      />
      <ReactTooltip id="clearTip" place="top,bottom" {...toolkitConfig}>
        Clear
      </ReactTooltip>
      <div data-tip data-for="clearTip">
        <FontAwesomeIcon
          icon={faTimes}
          className="search-bar__close-button"
          onClick={() => {
            dispatch(closeSearch());
            searchInput.current.value = "";
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
