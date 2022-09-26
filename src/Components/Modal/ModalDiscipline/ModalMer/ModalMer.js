//--------------// Css
// import "./modalmer.scss";

//--------------// Components
import ModalSurf from "./ModalSurf/ModalSurf";
import ModalBodyBoard from "./ModalBodyBoard/ModalBodyBoard";
import ModalSup from "./ModalSup/ModalSup";
import ModalWindSurf from "./ModalWindSurf/ModalWindSurf";
// import ModalFoil from "./ModalFoil/ModalFoil";
import ModalKiteSurf from "./ModalKiteSurf/ModalKiteSurf";
import ModalNeoprene from "./ModalNeoprene/ModalNeoprene";
import ModalBodySurf from "./ModalBodySurf/ModalBodySurf";
import ModalApnee from "./ModalApnee/ModalApnee";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const chevronRigth = <FontAwesomeIcon icon={faChevronRight} />;

const ModalMer = ({
  setModalState,
  choiceValidatedForSellState,
  setChoiceValidatedForSellState,
}) => {
  //------------------// State Modal Discipline Aquatique
  const [surfState, setsurfState] = useState(false);
  const [bodyBoardState, setbodyBoardState] = useState(false);
  const [standUpPaddleState, setStandUpPaddleState] = useState(false);
  const [windState, setWindState] = useState(false);
  // const [foilState, setfoilState] = useState(false);
  const [kiteSurfState, setKiteSurfState] = useState(false);
  const [combinaisonState, setCombinaisonStaTe] = useState(false);
  const [bodySurfState, setBodySurfState] = useState(false);
  const [apneeState, setApneeState] = useState(false);

  return (
    //-----------------------------//Container Modal
    <div className="container-modal">
      {/* {surfState && <ModalSurf setsurfState={setsurfState} />} */}

      {surfState === true && choiceValidatedForSellState === false ? (
        <ModalSurf
          setsurfState={setsurfState}
          setChoiceValidatedForSellState={setChoiceValidatedForSellState}
        />
      ) : null}

      {bodyBoardState && <ModalBodyBoard closeModal={setbodyBoardState} />}
      {standUpPaddleState && <ModalSup closeModal={setStandUpPaddleState} />}
      {windState && <ModalWindSurf closeModal={setWindState} />}
      {kiteSurfState && <ModalKiteSurf closeModal={setKiteSurfState} />}
      {combinaisonState && <ModalNeoprene closeModal={setCombinaisonStaTe} />}
      {bodySurfState && <ModalBodySurf closeModal={setBodySurfState} />}
      {apneeState && <ModalApnee closeModal={setApneeState} />}

      {/* {kiteSurfState && <ModalKiteSurf closeModal={setBodySurfState} />} */}

      {/* //-----------------------------//Overlay  */}
      <div
        className="overlay-modal-trigger"
        onClick={() => {
          setModalState(false);
        }}
      ></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Disciplines</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              setModalState(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <div
            onClick={() => {
              setCombinaisonStaTe(true);
            }}
          >
            <span>Néoprène </span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
          <div onClick={() => setsurfState(true)}>
            <span>Surf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>{" "}
          <div onClick={() => setbodyBoardState(true)}>
            <span>BodyBoard</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>{" "}
          <div onClick={() => setBodySurfState(true)}>
            <span>BodySurf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>{" "}
          {/* <div onClick={() => setfoilState(true)}>
            <span>Foil</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div> */}
          <div onClick={() => setKiteSurfState(true)}>
            <span>KiteSurf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
          <div
            onClick={() => {
              setWindState(true);
            }}
          >
            <span>WindSurf</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
          <div
            onClick={() => {
              setStandUpPaddleState(true);
            }}
          >
            <span>StandUpPaddle</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
          <div
            onClick={() => {
              setApneeState(true);
            }}
          >
            <span>Apnée</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMer;
