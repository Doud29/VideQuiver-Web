//--------------// Css
import "./welcome.scss";
//--------------// Components

//--------------// packages
import { Link } from "react-router-dom";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const xMark = <FontAwesomeIcon icon={faXmark} />;
const enveloppe = <FontAwesomeIcon icon={faEnvelope} />;

const Welcome = () => {
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
            <div className="enveloppe">{enveloppe}</div>
            <p>Continuer avec une adresse e-mail</p>
          </Link>
        </div>
        <div className="bloc-inscription-email google">
          {" "}
          <p>Google </p>{" "}
        </div>
        <div className="bloc-inscription-email facebook">
          {" "}
          <p>facebook</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
