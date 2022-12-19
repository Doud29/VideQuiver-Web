//CSS
import "./SignUp.scss";

//COMPONENTS
import HeaderConnexion from "../../Components/Connexion/HeaderConnexion";

//PACKAGES
import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
//CONTEXT
import { UserContext } from "../../Context/UserContext";

const SignUp = () => {
  const [validation, setValidation] = useState("");
  const [moreInfo, setmoreInfos] = useState(null);
  const { createUser, completeProfile } = useContext(UserContext);

  const formRef = useRef();
  const navigate = useNavigate();

  const inputs = useRef([]);
  const addInputs = (el) => {
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

  const handleForm = async (e) => {
    e.preventDefault();

    if (moreInfo === null) {
      setValidation("* Veuillez définir un pseudo");
      return;
    }

    if (moreInfo.Pseudo.length < 4) {
      setValidation("* Votre pseudo doit avoir 4 lettres minimum");
      return;
    }

    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("* Vous devez rentrer un mot de passe identique");
      return;
    }

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("* 6 caracteres min pour votre mot de passe");
      return;
    }

    try {
      setValidation("");
      await createUser(inputs.current[0].value, inputs.current[1].value);
      await completeProfile({ displayName: moreInfo.Pseudo });
      formRef.current.reset();
      navigate("/home");
    } catch (error) {
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
