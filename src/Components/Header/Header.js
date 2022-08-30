//---------------// Css
import "./Header.scss";

//---------------// Composent
import BtnAcceuil from "../Btn-Header/BtnAcceuil";
import BtnProfil from "../Btn-Header/BtnProfil";
import BtnSale from "../Btn-Header/BtnSale";
import BtnResearch from "../Btn-Header/BtnResearch";
import BtnLogOut from "../Btn-Header/BtnLogOut";
import BtnSignIn from "../Btn-Header/BtnSignIn";
import BtnSignUp from "../Btn-Header/BtnSignUp";

//---------------// Packages

const Header = ({ setIsSearchBarexisting }) => {
  return (
    <div className="container-header">
      <BtnAcceuil />
      <BtnProfil />
      <BtnSale />
      <BtnResearch setIsSearchBarexisting={setIsSearchBarexisting} />
      <BtnLogOut />
      <BtnSignIn />
      <BtnSignUp />
    </div>
  );
};

export default Header;
