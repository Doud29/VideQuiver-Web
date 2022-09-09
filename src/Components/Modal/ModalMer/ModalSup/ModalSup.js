//--------------// Components

//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalSup = ({ closeModal }) => {
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
          <p>Stand Up Paddle</p>
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
            <span>SUP de vagues</span>
            <input onChange={handleCheckBox} type="checkbox" value="supvague" />
          </button>{" "}
          <button>
            <span>SUP gonflables</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="supgonflable"
            />{" "}
          </button>{" "}
          <button>
            <span>SUP de race</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="suprace"
            />{" "}
          </button>{" "}
          <button>
            <span>SUP foil</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="supfoil"
            />{" "}
          </button>{" "}
          <button>
            <span>Ailerons / Dérives</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="ailerons"
            />{" "}
          </button>{" "}
          <button>
            <span>Pagaie</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="pagaie"
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
            <span>Accessoires Sup</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </button>{" "}
          <button>
            <span>Bagagerie Sup</span>
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

export default ModalSup;
