//--------------// Css
import "./welcome.scss";
//--------------// Components
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
//--------------// packages
import { Link } from "react-router-dom";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const xMark = <FontAwesomeIcon icon={faXmark} />;

const Welcome = () => {
  //Déstructuration
  const { connectGoogleUser } = useContext(UserContext);
  //instanciation de notre useHook
  const navigate = useNavigate();
  //Call API
  const handleGoogle = async () => {
    try {
      await connectGoogleUser();
      navigate("/home");
    } catch (error) {
      console.dir(error.message);
    }
  };

  return (
    <div className="container-welcome">
      <div className="bloc-header">
        <p>connexion</p>
        <div className="bloc-xmark">
          <Link to="/home" style={{ color: "grey" }}>
            {xMark}
          </Link>
        </div>
      </div>
      <div className="bloc-image-citation">
        <p>
          "Plus qu'une obligation, donner une seconde vie à votre matériel est
          une nécessité"
        </p>
        <span>Rejoins nous!</span>
        <img src="" alt="" />
      </div>
      <div className="bloc-inscription">
        <div className="bloc-inscription-email email">
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="enveloppe">
              <ion-icon name="mail"></ion-icon>
            </div>
            <p>Continuer avec une adresse e-mail</p>
          </Link>
        </div>
        <div className="bloc-inscription-email google">
          <div className="enveloppe" onClick={handleGoogle}>
            <ion-icon name="logo-google"></ion-icon>
          </div>
          <p>Continuer avec Google </p>
        </div>
        <div className="bloc-inscription-email facebook">
          {" "}
          <div className="enveloppe">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <p>facebook</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
