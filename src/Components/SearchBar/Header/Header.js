//---------------// Css
import "./Header.scss";

//---------------// Composent
import BtnAcceuil from "../Btn-Header/BtnAcceuil";
import BtnProfil from "../Btn-Header/BtnProfil";
import BtnSale from "../Btn-Header/BtnSale";
import BtnLogOut from "../Btn-Header/BtnLogOut";
import BtnMessage from "../Btn-Header/BtnMessage";
// import BtnSignIn from "../Btn-Header/BtnSignIn";
// import BtnSignUp from "../Btn-Header/BtnSignUp";

import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

//---------------// Packages
const Header = ({ setIsSearchBarexisting, isSearchBarexisting }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container-header">
      <BtnAcceuil />
      <BtnSale />
      <BtnMessage />
      {/* <BtnResearch
        setIsSearchBarexisting={setIsSearchBarexisting}
        isSearchBarexisting={isSearchBarexisting}
      /> */}
      <BtnProfil />
      {currentUser && <BtnLogOut />}
    </div>
  );
};

export default Header;
