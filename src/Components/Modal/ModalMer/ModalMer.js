//--------------// Css
import "./modalmer.scss";

//--------------// Components
import ModalSurf from "./ModalSurf/ModalSurf";
//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const chevronRigth = <FontAwesomeIcon icon={faChevronRight} />;

const ModalMer = ({ setMerState }) => {
  //------------------// State Modal Discipline Aquatique
  const [surfState, setsurfState] = useState(false);
  const [foilState, setfoilState] = useState(false);
  const [bodyBoardState, setbodyBoardState] = useState(false);
  const [standUpPaddleState, setStandUpPaddleState] = useState(false);
  const [kiteSurfState, setKiteSurfState] = useState(false);
  const [windState, setWindState] = useState(false);
  const [bodySurfState, setBodySurfState] = useState(false);
  const [apneeState, setApneeState] = useState(false);
  const [combinaisonState, setCombinaisonStaTe] = useState(false);

  return (
    //-----------------------------//Container Modal
    <div className="container-modal">
      {surfState === true ? <ModalSurf setsurfState={setsurfState} /> : <></>}
      {/* //-----------------------------//Overlay  */}
      <div className="overlay-modal-trigger"></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Disciplines</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              setMerState(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <button onClick={() => setsurfState(!surfState)}>
            <span>Surf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>{" "}
          <button>
            <span>BodyBoard</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>{" "}
          <button>
            <span>BodySurf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>{" "}
          <button>
            <span>Foil</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button>
            <span>KiteSurf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button>
            <span>WindSurf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button>
            <span>StandUpPaddle</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button>
            <span>Apnée</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button>
            <span>Combinaisons</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMer;
