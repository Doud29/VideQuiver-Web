//--------------// Components
// import ModalMer from "../ModalMer/ModalMer";

//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalBodyBoard = ({ closeModal }) => {
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
          <p>BodyBoard</p>
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
            <span>Planche</span>
            <input onChange={handleCheckBox} type="checkbox" value="planche" />
          </div>{" "}
          <div>
            <span>Palmes</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="palmes"
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
            <span>Accessoires BodyBoard</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="accessoire"
            />{" "}
          </div>{" "}
          <div>
            <span>Bagagerie BodyBoard</span>
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

export default ModalBodyBoard;
