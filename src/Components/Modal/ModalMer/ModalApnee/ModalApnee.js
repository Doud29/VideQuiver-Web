import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalApnee = ({ closeModal }) => {
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
          <p>Apnée</p>
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
            <span>Palmes Polymères</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="palmes"
            />{" "}
          </button>{" "}
          <button>
            <span>Palmes Carbonnes</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="palmes"
            />{" "}
          </button>{" "}
          <button>
            <span>Tubas</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="tuba"
            />{" "}
          </button>{" "}
          <button>
            <span>Masques</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="masque"
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
            <span>Bagagerie Apnée</span>
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

export default ModalApnee;
