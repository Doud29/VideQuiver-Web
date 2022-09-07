//--------------// Components
// import ModalMer from "../ModalMer/ModalMer";

//--------------// packages
// import { Link } from "react-router-dom";
// import { useState } from "react";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const chevronRigth = <FontAwesomeIcon icon={faChevronRight} />;

const ModalSurf = ({ setsurfState }) => {
  return (
    <div className="container-modal">
      {/* //-----------------------------//Overlay  */}
      <div className="overlay-modal-trigger"></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Surf</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              setsurfState(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <button>
            <span>Planches de surf</span>
            <input type="checkbox" />
          </button>{" "}
          <button>
            <span>Dérives/Ailerons </span>
            <input type="checkbox" />{" "}
          </button>{" "}
          <button>
            <span>Housse </span>
            <input type="checkbox" />{" "}
          </button>{" "}
          <button>
            <span>Pads </span>
            <input type="checkbox" />{" "}
          </button>{" "}
          <button>
            <span>Accessoires </span>
            <input type="checkbox" />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ModalSurf;
