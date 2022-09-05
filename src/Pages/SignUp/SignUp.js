//--------------// Css
import "./SignUp.scss";
//--------------// Components

//--------------// packages
import { Link } from "react-router-dom";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const SignUp = () => {
  return (
    <div className="container-signUp">
      <div className="bloc-header">
        <p>inscription ou connexion</p>
        <div className="bloc-arrowLeft">
          <Link to="/welcome" style={{ color: "grey" }}>
            {arrowLeft}
          </Link>
        </div>
      </div>{" "}
      <div className="container-inputs">
        <input type="text" placeholder="Pseudo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmation mot de passe" />
        <button>S'inscrire </button>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <span>Déjà un compte? Clique ici</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
