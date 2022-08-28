//---------------// Css
import "./Header.scss";

//---------------// Composent
import BtnAcceuil from "../Btn-Header/BtnAcceuil";
import BtnProfil from "../Btn-Header/BtnProfil";
import BtnSale from "../Btn-Header/BtnSale";
import BtnResearch from "../Btn-Header/BtnResearch";

//---------------// Packages

const Header = ({ setIsSearchBarexisting }) => {
  return (
    <div className="container-header">
      <BtnAcceuil />
      <BtnProfil />
      <BtnSale />
      <BtnResearch setIsSearchBarexisting={setIsSearchBarexisting} />
    </div>
  );
};

export default Header;
