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
            <input onChange={handleCheckBox} type="checkbox" value="planche" />
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
            <span>Pad </span>
            <input onChange={handleCheckBox} type="checkbox" value="pad" />{" "}
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
            <span>Casque</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="casque"
            />{" "}
          </button>{" "}
          <button>
            <span>Gilet Impact</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="gilet"
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
            <span>Bagagerie Surf </span>
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

export default ModalSurf;
