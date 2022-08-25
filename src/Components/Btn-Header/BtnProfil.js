//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const user = <FontAwesomeIcon icon={faUser} />;

const BtnProfil = () => {
  return (
    <div className="container-btn user">
      <Link to="/Profile">{user}</Link>
      <span>Profile</span>
    </div>
  );
};

export default BtnProfil;
