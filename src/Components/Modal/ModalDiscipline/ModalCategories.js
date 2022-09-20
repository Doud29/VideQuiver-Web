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

const ModalCategories = ({
  closeModalCategorie,
  choiceValidatedForSellState,
  setChoiceValidatedForSellState,
}) => {
  //------------------// States Modal Discipline Aquatique [Permettent d'acceder à la pa suivante]
  const [ModalState, setModalState] = useState(false);
  // const [volState, setVolState] = useState(false);
  // const [montagneState, setMontagneState] = useState(false);
  // const [streetState, setStreetState] = useState(false);

  // console.log(ModalState);
  return (
    //-----------------------------//Container Modal
    <div className="container-modal">
      {/* //-----------------------// Condition pour faire apparaitre ModalMer avec l'ensemble des sport aquatiques //------------// */}
      {ModalState === true && choiceValidatedForSellState === false ? (
        <ModalMer
          setModalState={setModalState}
          choiceValidatedForSellState={choiceValidatedForSellState}
          setChoiceValidatedForSellState={setChoiceValidatedForSellState}
        />
      ) : null}

      {/* //-----------------------------//Overlay  */}
      <div
        className="overlay-modal-trigger"
        onClick={() => {
          closeModalCategorie(false);
        }}
      ></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Catégories</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              closeModalCategorie(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <div
            onClick={() => {
              setModalState(true);
            }}
          >
            <span>Mer</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>{" "}
          <div
          // onClick={() => {
          //   setMontagneState(!montagneState);
          // }}
          >
            <span>Montagne</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
          <div
          // onClick={() => {
          //   setVolState(!volState);
          // }}
          >
            <span>Vol</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
          <div
          // onClick={() => {
          //   setStreetState(!streetState);
          // }}
          >
            <span>Street</span>
            <div className="chevronRight">{chevronRigth}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCategories;
