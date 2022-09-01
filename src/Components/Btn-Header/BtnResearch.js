//-----------------// Css

//-----------------// Packages

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const magniFyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const BtnResearch = ({ setIsSearchBarexisting, isSearchBarexisting }) => {
  return (
    <div
      className="container-btn recherche"
      onClick={() => {
        setIsSearchBarexisting(!isSearchBarexisting);
      }}
    >
      <div className="header-image">{magniFyingGlass}</div>
      <span>Rechercher</span>
    </div>
  );
};

export default BtnResearch;
