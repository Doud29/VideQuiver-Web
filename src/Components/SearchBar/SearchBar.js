//--// Css
import "./SearchBar.scss";

//--// Composent
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import BtnHeader from "./Btn-Header/BtnHeader";
// import BtnAcceuil from "./Btn-Header/BtnAcceuil";
// import BtnProfil from "./Btn-Header/BtnProfil";
// import BtnSale from "./Btn-Header/BtnSale";
// import BtnLogOut from "./Btn-Header/BtnLogOut";
// import BtnMessage from "./Btn-Header/BtnMessage";
//--// Link
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { currentUser, logout } = useContext(UserContext);
  console.log(currentUser);

  //on se déconnecte
  const handleLogout = async () => {
    try {
      await logout();
      console.log("your are disconnect");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-searchBar">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <h2>VideQuiver</h2>
      </Link>

      <div className="container-input-glass">
        <input type="search" placeholder="Rechercher" />
        <div className="glass">
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
      <div className="bloc-button">
        {/* Message */}
        <BtnHeader
          url="/message"
          item="Message"
          icon={<ion-icon name="mail-outline"></ion-icon>}
        />
        {/* Profile */}
        <BtnHeader
          url="/myProfil"
          item="Profile"
          icon={<ion-icon name="settings-outline"></ion-icon>}
        />
        {/* Panier */}
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
            <img src={currentUser.photoURL} alt="utilisateur" />
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
  );
};

export default SearchBar;
