//CSS
import "./SearchBar.scss";

//CONTEXT
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

//COMPONENTS
import BtnHeader from "../HeaderBottom/Btn-Header/BtnHeader";
import Container from "../Categories/container";
import LogoProfil from "../../../img/logoProfil.svg";

import { Link } from "react-router-dom";

const SearchBar = () => {
  const { currentUser, logout } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  const styleLink = { textDecoration: "none" };

  return (
    <>
      <div className="container-searchBar">
        <Link to="/home" style={styleLink}>
          <h2>VideQuiver</h2>
        </Link>
        <div className="container-input-glass">
          <input type="search" placeholder="Rechercher" />
          <div className="glass">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div className="bloc-button">
          <BtnHeader
            url="/message"
            item="Message"
            icon={<ion-icon name="mail-outline"></ion-icon>}
          />

          <BtnHeader
            url="/myProfil"
            item="Profile"
            icon={<ion-icon name="settings-outline"></ion-icon>}
          />

          <BtnHeader
            url="/panier"
            item="Panier"
            icon={<ion-icon name="basket-outline"></ion-icon>}
          />
          {currentUser ? (
            <>
              <Link to="/addProduct">
                <button className="btn-annonce">Vendre</button>
              </Link>
              <button className="btn-deconnexion" onClick={handleLogout}>
                Déconnexion
              </button>
              {!currentUser.photoURL ? (
                <img src={LogoProfil} alt="logo profil" />
              ) : (
                <img src={currentUser.photoURL} alt="utilisateur" />
              )}
            </>
          ) : (
            <>
              <BtnHeader
                url="/welcome"
                item="Connexion"
                icon={<ion-icon name="person-add-outline"></ion-icon>}
              />
              <Link to="/addProduct">
                <button className="btn-annonce">Vendre</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Container />
    </>
  );
};

export default SearchBar;
