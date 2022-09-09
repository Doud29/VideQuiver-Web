//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalKiteSurf = ({ closeModal }) => {
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
          <p>Kite Surf</p>
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
            <span>Aile</span>
            <input onChange={handleCheckBox} type="checkbox" value="aile" />
          </button>{" "}
          <button>
            <span>Barre</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="barre"
            />{" "}
          </button>{" "}
          <button>
            <span>Twin-Tip</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="twin-tip"
            />{" "}
          </button>{" "}
          <button>
            <span>Planche directionnelle</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="directionnelle"
            />{" "}
          </button>{" "}
          <button>
            <span>Planche de Kite foil</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="kitefoil"
            />{" "}
          </button>
          <button>
            <span>Foil Kitesurf</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="foil"
            />{" "}
          </button>
          <button>
            <span>Harnais</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="harnais"
            />{" "}
          </button>{" "}
          <button>
            <span>Casque / Gilet </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="casque"
            />{" "}
          </button>{" "}
          <button>
            <span>Accessoires [Ailes / Barres / Planches]</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </button>{" "}
          <button>
            <span>Bagagerie KitSurf</span>
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

export default ModalKiteSurf;
