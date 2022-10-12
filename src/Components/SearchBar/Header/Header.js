//---------------// Css
import "./Header.scss";

//---------------// Composent
import BtnAcceuil from "../Btn-Header/BtnAcceuil";
import BtnProfil from "../Btn-Header/BtnProfil";
import BtnSale from "../Btn-Header/BtnSale";
import BtnResearch from "../Btn-Header/BtnResearch";
import BtnLogOut from "../Btn-Header/BtnLogOut";
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
      {/* <BtnResearch
        setIsSearchBarexisting={setIsSearchBarexisting}
        isSearchBarexisting={isSearchBarexisting}
      /> */}
      {currentUser ? <BtnLogOut /> : <BtnProfil />}
    </div>
  );
};

export default Header;
