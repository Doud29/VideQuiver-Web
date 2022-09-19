//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalNeoprene = ({ closeModal }) => {
  const handleCheckBox = (e) => {
    // console.log(e.target.value);
  };

  return (
    <div className="container-modal">
      {/* //-----------------------------//Overlay  */}
      <div className="overlay-modal-trigger"></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Néoprène</p>
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
            <span>Integrale</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="integrale"
            />
          </div>{" "}
          <div>
            <span>Shorty</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="shorty"
            />{" "}
          </div>{" "}
          <div>
            <span>Lycra / Top</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="lycra"
            />{" "}
          </div>{" "}
          <div>
            <span>Pants / Long John</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="pant"
            />{" "}
          </div>{" "}
          <div>
            <span>Veste Néoprène</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="veste"
            />{" "}
          </div>
          <div>
            <span>Chaussons</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="chaussons"
            />{" "}
          </div>
          <div>
            <span>Cagoules / Bonnets</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="cagoule"
            />{" "}
          </div>{" "}
          <div>
            <span>Gants</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="gant"
            />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ModalNeoprene;
