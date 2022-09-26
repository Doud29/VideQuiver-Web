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
          <div>
            <span>Aile</span>
            <input onChange={handleCheckBox} type="checkbox" value="aile" />
          </div>{" "}
          <div>
            <span>Barre</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="barre"
            />{" "}
          </div>{" "}
          <div>
            <span>Twin-Tip</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="twin-tip"
            />{" "}
          </div>{" "}
          <div>
            <span>Planche directionnelle</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="directionnelle"
            />{" "}
          </div>{" "}
          <div>
            <span>Planche de Kite foil</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="kitefoil"
            />{" "}
          </div>
          <div>
            <span>Foil Kitesurf</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="foil"
            />{" "}
          </div>
          <div>
            <span>Harnais</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="harnais"
            />{" "}
          </div>{" "}
          <div>
            <span>Casque / Gilet </span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="casque"
            />{" "}
          </div>{" "}
          <div>
            <span>Accessoires [Ailes / Barres / Planches]</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </div>{" "}
          <div>
            <span>Bagagerie KitSurf</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="bagagerie"
            />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ModalKiteSurf;
