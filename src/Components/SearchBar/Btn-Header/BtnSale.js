//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const sale = <FontAwesomeIcon icon={faSquarePlus} />;

const BtnSale = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container-btn sale">
      {currentUser ? (
        <Link to="/addProduct">
          <div className="header-image">{sale}</div>
        </Link>
      ) : (
        <Link to="/welcome">
          <div className="header-image">{sale}</div>
        </Link>
      )}
      <span>Vendre</span>
    </div>
  );
};

export default BtnSale;
