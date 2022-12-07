//---------------// Css
import "./Header.scss";

import BtnLogOut from "../Btn-Header/BtnLogOut";
import BtnHeader from "../Btn-Header/BtnHeader";

import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

//---------------// Packages
const Header = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container-header">
      {/* message */}
      <BtnHeader
        url="/message"
        item="Message"
        icon={<ion-icon name="mail-outline"></ion-icon>}
      />
      {/* Vendre */}
      <BtnHeader
        url="/addProduct"
        item="Vendre"
        icon={<ion-icon name="play-outline"></ion-icon>}
      />
      {/* Panier */}
      <BtnHeader
        url="/panier"
        item="Panier"
        icon={<ion-icon name="basket-outline"></ion-icon>}
      />
      {currentUser ? (
        <>
          <img src={currentUser.photoURL} alt="utilisateur" />
          <BtnLogOut />
        </>
      ) : (
        <BtnHeader
          url="/welcome"
          item="Connexion"
          icon={<ion-icon name="person-add-outline"></ion-icon>}
        />
      )}
    </div>
  );
};

export default Header;
