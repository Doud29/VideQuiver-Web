//--------------// Css
import "./SignUp.scss";

//--------------// packages
import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import HeaderConnexion from "../../Components/Connexion/HeaderConnexion";
//--------------// Components && Méthodes
import { UserContext } from "../../Context/UserContext";

const SignUp = () => {
  //----// Context
  const { createUser, completeProfile } = useContext(UserContext);
  //----//States
  const [validation, setValidation] = useState("");
  const [moreInfo, setmoreInfos] = useState(null);

  //-----//Rest formulaire
  const formRef = useRef();
  const navigate = useNavigate();

  //-----//Valeur input
  const inputs = useRef([]);
  const addInputs = (el) => {
    //Si l'élément existe et qu'il n'est pas déjà dans le tableau
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleInput = (e) => {
    if (e.target.value !== "") {
      setmoreInfos({ ...moreInfo, [e.target.name]: e.target.value });
    }
    if (e.target.value === "") {
      setmoreInfos({});
    }
  };

  //-----//Soumission formulaire
  const handleForm = async (e) => {
    e.preventDefault();
    //----//Pseudo existant
    if (moreInfo === null) {
      setValidation("* Veuillez définir un pseudo");
      return;
    }
    //----//Longueur pseudo
    if (moreInfo.Pseudo.length < 4) {
      setValidation("* Votre pseudo doit avoir 4 lettres minimum");
      return;
    }
    //----//Matchching MDP
    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("* Vous devez rentrer un mot de passe identique");
      return;
    }
    //----//Vérification MDP
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("* 6 caracteres min pour votre mot de passe");
      return;
    }
    //----// Soumission FireBase
    try {
      const cred = await createUser(
        inputs.current[0].value,
        inputs.current[1].value
      ).then(async () => {
        await completeProfile({
          displayName: moreInfo.Pseudo,
        });
      });
      formRef.current.reset();
      setValidation("");
      navigate("/home");
    } catch (error) {
      console.dir(error);
      if (error.code === "auth/email-already-in-use") {
        setValidation("* Email Déjà utilisé");
      }
      if (error.code === "auth/invalid-email") {
        setValidation("* Format de l'email invalide");
      }
    }
  };
  return (
    <div className="container-signUp">
      <HeaderConnexion title="Inscription" previous="/welcome" />

      <form onSubmit={handleForm} className="container-inputs" ref={formRef}>
        <div className="inputdiv">
          <input
            type="text"
            onChange={handleInput}
            placeholder=" "
            name="Pseudo"
            id="Pseudo"
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Pseudo</span>
        </div>
        <div className="inputdiv">
          <input
            type="email"
            ref={addInputs}
            placeholder=" "
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
            name="password"
            id="repeat-password"
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Confirme mot de passe</span>
        </div>
        <div className="validation">{validation}</div>

        <span className="infospwd">
          ! Votre mot de passe doit contenir au moins 6 caractéres
        </span>

        <input type="Submit" id="button" />
        <Link
          to="/signin"
          style={{ textDecoration: "none", color: "black", fontSize: "12px" }}
        >
          <div>Déjà un compte? Clique ici</div>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
