//---------------// Css
import "./SearchBar.scss";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//---------------// Composent

const xMark = <FontAwesomeIcon icon={faXmark} />;

const SearchBar = ({ setIsSearchBarexisting }) => {
  return (
    <div className="container-searchBar">
      <div
        className="xMark"
        onClick={() => {
          setIsSearchBarexisting(false);
        }}
      >
        {xMark}
      </div>
      <input type="search" placeholder="What are you looking for?" />
    </div>
  );
};

export default SearchBar;
