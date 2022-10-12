//--------------// Css
import "./SignIn.scss";

//--------------// Components
import { UserContext } from "../../Context/UserContext";
//--------------// packages
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { connectUser, resetPassword } = useContext(UserContext);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const inputsRef = useRef([]);
  const formRef = useRef();

  const addinputs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await connectUser(
        inputsRef.current[0].value,
        inputsRef.current[1].value
      );
      formRef.current.reset();
      console.log(request);
      setValidation("");
      navigate("/home");
    } catch (error) {
      console.dir(error);
      if ((error.code = "auth/user-not-found")) {
        setValidation("Compte utilisateur introuvale");
      } else if ((error.code = "auth/wrong-password")) {
        setValidation("Mot de passe invalide");
      }
    }
  };

  return (
    <div className="container-signIn">
      <div className="bloc-header">
        <p>inscription ou connexion</p>
        <div className="bloc-arrowLeft">
          <Link to="/welcome" style={{ color: "grey" }}>
            <ion-icon
              name="arrow-back-outline"
              style={{ fontSize: "25px" }}
            ></ion-icon>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="container-inputs" ref={formRef}>
        {/* //-----------------// Email  //----------------------//*/}
        <div className="inputdiv">
          <input
            ref={addinputs}
            type="email"
            placeholder=" "
            name="email"
            id="email"
            required
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Email</span>
        </div>
        {/* //-----------------// Password //----------------------//*/}
        <div className="inputdiv">
          <input
            ref={addinputs}
            type="password"
            placeholder=" "
            required
            name="password"
            id="password"
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Password</span>
        </div>
        <div className="validation">{validation}</div>
        <input type="submit" id="button" />
        <Link
          to="/signup"
          style={{ textDecoration: "none", color: "black", fontSize: "12px" }}
        >
          <div className="no-account">Pas de compte? Cliqué ici</div>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
