//--------------// Components
// import ModalMer from "../ModalMer/ModalMer";

//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalSurf = ({ setsurfState }) => {
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
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="Planches de Surf"
            />
          </button>{" "}
          <button>
            <span>Dérives/Ailerons </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="Dérives/Ailerons"
            />{" "}
          </button>{" "}
          <button>
            <span>Housse </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="Housse"
            />{" "}
          </button>{" "}
          <button>
            <span>Pad </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="Pads"
            />{" "}
          </button>{" "}
          <button>
            <span>Leash</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="leash"
            />{" "}
          </button>{" "}
          <button>
            <span>Accessoires </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="Accessoires"
            />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ModalSurf;
