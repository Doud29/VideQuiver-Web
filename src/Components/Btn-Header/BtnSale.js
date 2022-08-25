//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";
//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const sale = <FontAwesomeIcon icon={faSquarePlus} />;

const BtnSale = () => {
  return (
    <div className="container-btn sale">
      <Link to="/sale">{sale}</Link>
      <span>Vendre</span>
    </div>
  );
};

export default BtnSale;
