//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const login = <FontAwesomeIcon icon={faArrowRightToBracket} />;

const BtnSignUp = () => {
  return (
    <div className="container-btn user">
      <Link to="/signup">{login}</Link>
      <span>Create an account</span>
    </div>
  );
};

export default BtnSignUp;
