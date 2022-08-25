//-----------------// Css

//-----------------// Packages

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const magniFyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const BtnResearch = ({ setIsSearchBarexisting }) => {
  return (
    <div
      className="container-btn recherche"
      onClick={() => {
        setIsSearchBarexisting(true);
      }}
    >
      <div>{magniFyingGlass}</div>
      <span>Rechercher</span>
    </div>
  );
};

export default BtnResearch;
