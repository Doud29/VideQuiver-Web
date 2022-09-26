//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const house = <FontAwesomeIcon icon={faHouse} />;

const BtnAcceuil = () => {
  return (
    <div className="container-btn acceuil">
      <Link to="/home">
        <div className="header-image"> {house}</div>
      </Link>
      <span>Acceuil</span>
    </div>
  );
};

export default BtnAcceuil;
