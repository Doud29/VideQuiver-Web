//--------------// Css
import "./SignUp.scss";

//--------------// packages
import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";

//--------------// Components && Méthodes
import { UserContext } from "../../Context/UserContext";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const SignUp = () => {
  const { Signup, currentUser, data } = useContext(UserContext);
  //-----------------------------//States //------------------------------//
  const [validation, setValidation] = useState("");
  //-------------//On reset les valeur de notre formulaire //-------------//
  const formRef = useRef();
  // const navigate = Navigate();

  //----------------------------------------------------------------------//
  //-------------//On récupére la valeur de nos inputs //-----------------//
  //----------------------------------------------------------------------//

  //Il faut prendre en référence l'ensemble de nos inputs,
  const inputs = useRef([]);
  const addInputs = (el) => {
    //Si l'élément existe et qu'il n'est pas déjà dans le tableau
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  console.log(inputs);

  //----------------------------------------------------------------------//
  //------//Soumission du formulaire et vérification côté front//---------//
  //----------------------------------------------------------------------//

  const handleForm = async (e) => {
    e.preventDefault();
    //vérification matching mot de passe
    if (inputs.current[2].value !== inputs.current[3].value) {
      return setValidation("* Vous devez rentrer un mot de passe identique");
    }
    //vérification longeur des mots de passes
    // if (inputs.current[2].value.length || inputs.current[3].value.length < 6) {
    //   return setValidation("* 6 caracteres min pour votre mot de passe");
    // }

    try {
      const cred = await Signup(
        inputs.current[1].value,
        inputs.current[2].value
      );
      formRef.current.reset();
      setValidation("");
    } catch (error) {
      console.log(error);
      if ((error.code = "auth/email-already-in-use")) {
        setValidation("* Email Déjà utilisé");
      }
      if ((error.code = "auth/invalid-email")) {
        setValidation("* Format de l'email invalide");
      }
    }
  };

  return (
    <div className="container-signUp">
      <div className="bloc-header">
        <p>inscription ou connexion</p>
        <div className="bloc-arrowLeft">
          <Link to="/welcome" style={{ color: "grey" }}>
            {arrowLeft}
          </Link>
        </div>
      </div>
      <form onSubmit={handleForm} className="container-inputs" ref={formRef}>
        <div className="inputdiv">
          <input
            type="text"
            ref={addInputs}
            placeholder=" "
            name="Pseudo"
            id="Pseudo"
            required
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Pseudo</span>
        </div>
        {/* //-----------------// Password //----------------------//*/}
        <div className="inputdiv">
          <input
            type="email"
            ref={addInputs}
            placeholder=" "
            required
            name="email"
            id="email"
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Email</span>
        </div>

        <div className="inputdiv">
          <input
            type="password"
            ref={addInputs}
            placeholder=" "
            required
            name="password"
            id="password"
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Mot de passe</span>
        </div>

        <div className="inputdiv">
          <input
            type="password"
            ref={addInputs}
            placeholder=" "
            required
            name="password"
            id="repeat-password"
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Confirme mot de passe</span>
        </div>
        <div className="validation">{validation}</div>
        <input type="Submit" id="button" />

        <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
          <div>Déjà un compte? Clique ici</div>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
