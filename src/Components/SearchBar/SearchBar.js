//---------------// Css
import "./SearchBar.scss";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

//---------------// Composent
// import BtnProfil from "../Btn-Header/BtnProfil";

//---------------// Link
import { Link } from "react-router-dom";

//---------------// Déclaration des constantes
const user = <FontAwesomeIcon icon={faUser} />;
const maginFyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const message = <FontAwesomeIcon icon={faMessage} />;
const panier = <FontAwesomeIcon icon={faCartShopping} />;

const SearchBar = () => {
  return (
    <div className="container-searchBar">
      <h2>VideQuiver</h2>
      <div className="container-input-glass">
        <input type="search" placeholder="Rechercher" />
        <div className="glass">{maginFyingGlass}</div>
      </div>
      <div className="container-searchBar-profil">
        {/* <p>Mon compte</p> */}
        <div className="bloc-font">
          <Link to="/welcome" style={{ color: "grey" }}>
            {user}
          </Link>
          <Link to="/message" style={{ color: "grey" }}>
            {message}
          </Link>
          <Link to="/panier" style={{ color: "grey" }}>
            {panier}
          </Link>
        </div>
        <div className="bloc-button">
          <button>Vendre</button>
          <button>Louer</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
