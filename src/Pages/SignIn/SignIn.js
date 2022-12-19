//--------------// Css
import "./SignIn.scss";

//--------------// Components
import { UserContext } from "../../Context/UserContext";
import HeaderConnexion from "../../Components/Connexion/HeaderConnexion";
//--------------// packages
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  //récupération de nos méthodes depuis notre contect
  const { connectUser, resetPassword } = useContext(UserContext);
  //state error
  const [validation, setValidation] = useState("");
  //Hook navigate
  const navigate = useNavigate();
  //référancement des inputs et du formulaire
  const inputsRef = useRef([]);
  const formRef = useRef();
  //on récupéra la valeur des inputs
  const addinputs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  //Reset password
  // const handleReset = async () => {
  //   try {
  //     const reset = await resetPassword(inputsRef.current[0].value);
  //     console.log(reset);
  //   } catch (error) {}
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Call API Firebase
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
      <HeaderConnexion title="Inscription ou connexion" previous="/welcome" />
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
          style={{ textDecoration: "none", color: "black", fontSize: "13px" }}
        >
          <div className="no-account">Pas de compte? Cliqué ici</div>
        </Link>
        <div
          className="no-account"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "12px",
            marginTop: "10px",
          }}
          // onClick={handleReset}
        >
          Mot de passe oublié?
        </div>
      </form>
    </div>
  );
};

export default SignIn;
