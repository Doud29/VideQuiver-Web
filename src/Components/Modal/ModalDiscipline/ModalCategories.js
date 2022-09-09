//--------------// Css
import "./modalCategories.scss";

//--------------// Components
import ModalMer from "../ModalMer/ModalMer";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const chevronRigth = <FontAwesomeIcon icon={faChevronRight} />;

const ModalCategories = ({ closeModalCategories }) => {
  //------------------// States Modal Discipline Aquatique [Permettent d'acceder à la pa suivante]
  const [openSeaModalState, setOpenSeaModalState] = useState(false);
  // const [volState, setVolState] = useState(false);
  // const [montagneState, setMontagneState] = useState(false);
  // const [streetState, setStreetState] = useState(false);

  return (
    //-----------------------------//Container Modal
    <div className="container-modal">
      {/* //-----------------------// Condition pour faire apparaitre ModalMer avec l'ensemble des sport aquatiques //------------// */}
      {openSeaModalState && (
        <ModalMer closeModalDiscipline={setOpenSeaModalState} />
      )}

      {/* //-----------------------------//Overlay  */}
      <div className="overlay-modal-trigger"></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Catégories</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              closeModalCategories(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <button
            onClick={() => {
              setOpenSeaModalState(true);
            }}
          >
            <span>Mer</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>{" "}
          <button
          // onClick={() => {
          //   setMontagneState(!montagneState);
          // }}
          >
            <span>Montagne</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button
          // onClick={() => {
          //   setVolState(!volState);
          // }}
          >
            <span>Vol</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
          <button
          // onClick={() => {
          //   setStreetState(!streetState);
          // }}
          >
            <span>Street</span>
            <div className="chevronRight">{chevronRigth}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCategories;
