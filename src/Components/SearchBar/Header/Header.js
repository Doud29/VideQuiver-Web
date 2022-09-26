//---------------// Css
import "./Header.scss";

//---------------// Composent
import BtnAcceuil from "../Btn-Header/BtnAcceuil";
import BtnProfil from "../Btn-Header/BtnProfil";
import BtnSale from "../Btn-Header/BtnSale";
// import BtnRent from "../Btn-Header/BtnRent";
import BtnResearch from "../Btn-Header/BtnResearch";
// import BtnLogOut from "../Btn-Header/BtnLogOut";
// import BtnSignIn from "../Btn-Header/BtnSignIn";
// import BtnSignUp from "../Btn-Header/BtnSignUp";

//---------------// Packages

const Header = ({ setIsSearchBarexisting, isSearchBarexisting }) => {
  return (
    <div className="container-header">
      <BtnAcceuil />
      {/* <BtnRent /> */}
      <BtnSale />
      <BtnResearch
        setIsSearchBarexisting={setIsSearchBarexisting}
        isSearchBarexisting={isSearchBarexisting}
      />
      <BtnProfil />
      {/* <BtnLogOut />
      <BtnSignIn />
      <BtnSignUp /> */}
    </div>
  );
};

export default Header;
