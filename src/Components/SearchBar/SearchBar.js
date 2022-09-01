//---------------// Css
import "./SearchBar.scss";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//---------------// Composent
import BtnProfil from "../Btn-Header/BtnProfil";

const user = <FontAwesomeIcon icon={faUser} />;

const SearchBar = () => {
  return (
    <div className="container-searchBar">
      <span>Vide Quiver</span>
      <input type="search" placeholder="Rechercher" />
      {/* <div className="container-searchBar-profil">
        <p>Mon compte</p>
        {user}
      </div>
      <button>Vendre</button> */}
    </div>
  );
};

export default SearchBar;
