//CSS
import "./Header.scss";

//COMPONENT
import BtnHeader from "./Btn-Header/BtnHeader";
import LogoProfil from "../../../img/logoProfil.svg";
import BtnLogOut from "./Btn-Header/BtnLogOut";

//PACKAGES
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container-header">
      <BtnHeader
        url="/message"
        item="Message"
        icon={<ion-icon name="mail-outline"></ion-icon>}
      />

      <BtnHeader
        url="/addProduct"
        item="Vendre"
        icon={<ion-icon name="play-outline"></ion-icon>}
      />

      <BtnHeader
        url="/panier"
        item="Panier"
        icon={<ion-icon name="basket-outline"></ion-icon>}
      />
      {currentUser ? (
        <>
          {!currentUser.photoURL ? (
            <img src={LogoProfil} alt="logo profil" />
          ) : (
            <img src={currentUser.photoURL} alt="utilisateur" />
          )}
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
