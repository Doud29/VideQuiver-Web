//--------------// Css
import "./SignUp.scss";
//--------------// Components

//--------------// packages
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container-signUp">
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
