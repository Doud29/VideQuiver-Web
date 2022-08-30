//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const login = <FontAwesomeIcon icon={faArrowRightToBracket} />;

const BtnSignIn = () => {
  return (
    <div className="container-btn user">
      <Link to="/signin">{login}</Link>
      <span>Login</span>
    </div>
  );
};

export default BtnSignIn;
