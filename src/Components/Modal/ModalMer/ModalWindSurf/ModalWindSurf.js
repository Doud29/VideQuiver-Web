//--------------// Components

//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalWindSurf = ({ closeModal }) => {
  const handleCheckBox = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container-modal">
      {/* //-----------------------------//Overlay  */}
      <div className="overlay-modal-trigger"></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>WindSurf</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              closeModal(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <button>
            <span>Flotteur</span>
            <input onChange={handleCheckBox} type="checkbox" value="flotteur" />
          </button>{" "}
          <button>
            <span>Voile</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="voile"
            />{" "}
          </button>{" "}
          <button>
            <span>Whisbone</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="whisbone"
            />{" "}
          </button>{" "}
          <button>
            <span>Mats</span>
            <input onChange={handleCheckBox} type="checkbox" value="mat" />{" "}
          </button>{" "}
          <button>
            <span>Dérives/Ailerons </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="ailerons"
            />{" "}
          </button>{" "}
          <button>
            <span>Pied de mat / Plaquette / Rallonge</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="pied"
            />{" "}
          </button>{" "}
          <button>
            <span>Accessoires </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </button>{" "}
          <button>
            <span>Bagagerie Wind Surf </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="bagagerie"
            />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ModalWindSurf;
