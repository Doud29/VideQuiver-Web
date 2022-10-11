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
      <form action="" className="container-inputs">
        {/* //-----------------// Email  //----------------------//*/}
        <div className="inputdiv">
          <input
            type="email"
            placeholder=" "
            // value={}
            name="email"
            id="email"
            required
            // onChange={handleChange}
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Email</span>
        </div>
        {/* //-----------------// Password //----------------------//*/}
        <div className="inputdiv">
          <input
            type="password"
            placeholder=" "
            required
            // value={}
            name="password"
            id="password"
            // onChange={handleChange}
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Password</span>
        </div>
        <input type="submit" id="button" />
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <div className="no-account">Pas de compte? Cliqué ici</div>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
