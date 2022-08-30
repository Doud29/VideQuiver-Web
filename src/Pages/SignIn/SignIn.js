//--------------// Css
import "./SignIn.scss";

//--------------// Components

//--------------// packages
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container-signIn">
      <div className="container-signIn-inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Se connecter</button>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <span>Still not registered? Click Here</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
