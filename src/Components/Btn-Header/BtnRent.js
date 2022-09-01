//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";
//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const rent = <FontAwesomeIcon icon={faSquarePlus} />;

const BtnRent = () => {
  return (
    <div className="container-btn sale">
      <Link to="/sale">{rent}</Link>
      <span>Louer</span>
    </div>
  );
};

export default BtnRent;
