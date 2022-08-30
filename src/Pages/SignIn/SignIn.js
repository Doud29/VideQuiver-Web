//--------------// Css
import "./SignIn.scss";

//--------------// Components

//--------------// packages
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container-signIn">
      <div className="container-inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button>Se connecter</button>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <span>Pas de compte? Cliqué ici</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
