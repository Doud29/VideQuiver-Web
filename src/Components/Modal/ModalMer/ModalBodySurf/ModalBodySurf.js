//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalBodySurf = ({ closeModal }) => {
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
          <p>BodySurf</p>
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
            <span>Palmes</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="palme"
            />{" "}
          </button>{" "}
          <button>
            <span>Leash </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="leash"
            />{" "}
          </button>{" "}
          <button>
            <span>HandPlane</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="handplane"
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
            <span>Accessoires </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </button>{" "}
          <button>
            <span>Bagagerie BodySurf </span>
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

export default ModalBodySurf;
