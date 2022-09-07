//--------------// Css
import "./SignIn.scss";

//--------------// Components

//--------------// packages
import { Link } from "react-router-dom";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const SignIn = () => {
  return (
    <div className="container-signIn">
      <div className="bloc-header">
        <p>inscription ou connexion</p>
        <div className="bloc-arrowLeft">
          <Link to="/welcome" style={{ color: "grey" }}>
            {arrowLeft}
          </Link>
        </div>
      </div>
      <div className="container-inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button>Se connecter</button>
        <Link to="/signup" style={{ textDecoration: "none", marginTop: 10 }}>
          <span>Pas de compte? Cliqué ici</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
