//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const logout = <FontAwesomeIcon icon={faArrowRightFromBracket} />;

const BtnSignIn = () => {
  return (
    <div className="container-btn user">
      <Link to="/home">{logout}</Link>
      <span>Logout</span>
    </div>
  );
};

export default BtnSignIn;
