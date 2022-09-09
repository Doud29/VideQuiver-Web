//--------------// packages

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalNeoprene = ({ closeModal }) => {
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
          <button>
            <span>Integrale</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="integrale"
            />
          </button>{" "}
          <button>
            <span>Shorty</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="shorty"
            />{" "}
          </button>{" "}
          <button>
            <span>Lycra / Top</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="lycra"
            />{" "}
          </button>{" "}
          <button>
            <span>Pants / Long John</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="pant"
            />{" "}
          </button>{" "}
          <button>
            <span>Veste Néoprène</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="veste"
            />{" "}
          </button>
          <button>
            <span>Chaussons</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="chaussons"
            />{" "}
          </button>
          <button>
            <span>Cagoules / Bonnets</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="cagoule"
            />{" "}
          </button>{" "}
          <button>
            <span>Gants</span>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              value="gant"
            />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ModalNeoprene;
