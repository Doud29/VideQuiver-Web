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
          <div>
            <span>SUP de vagues</span>
            <input onChange={handleCheckBox} type="checkbox" value="supvague" />
          </div>{" "}
          <div>
            <span>SUP gonflables</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="supgonflable"
            />{" "}
          </div>{" "}
          <div>
            <span>SUP de race</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="suprace"
            />{" "}
          </div>{" "}
          <div>
            <span>SUP foil</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="supfoil"
            />{" "}
          </div>{" "}
          <div>
            <span>Ailerons / Dérives</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="ailerons"
            />{" "}
          </div>{" "}
          <div>
            <span>Pagaie</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="pagaie"
            />{" "}
          </div>{" "}
          <div>
            <span>Leash</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="leash"
            />{" "}
          </div>{" "}
          <div>
            <span>Accessoires Sup</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </div>{" "}
          <div>
            <span>Bagagerie Sup</span>
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

export default ModalSup;
