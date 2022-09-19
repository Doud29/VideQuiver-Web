//--------------// Components
// import ModalMer from "../ModalMer/ModalMer";

//--------------// packages

import React, { useContext } from "react";
import { DescriptionContext } from "../../../../DescriptionContext";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalSurf = ({ setsurfState }) => {
  //---------// on destrucure notre objet pour une meilleure lecture du code
  const { description, updateInpute } = useContext(DescriptionContext);

  const handleCheckBox = (e) => {
    const name = e.target.name;
    let value = e.target.checked;

    updateInpute((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  };

  return (
    <div className="container-modal">
      {/* //-----------------------------//Overlay  */}
      <div className="overlay-modal-trigger"></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Surf</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => {
              setsurfState(false);
            }}
          >
            {arrowLeft}
          </div>
        </div>
        <div className="container-button">
          <div>
            <label htmlFor="planche">Planches de surf</label>
            <input
              type="checkbox"
              onChange={handleCheckBox}
              checked={description.planche}
              id="planche"
              name="planche"
            />
          </div>{" "}
          <div>
            <label htmlFor="dérives">Dérives/Ailerons </label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.dérives}
              id="dérives"
              name="dérives"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="pad">Pad </label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.pad}
              id="pad"
              name="pad"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="leash">Leash</label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.leash}
              id="leash"
              name="leash"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="casque">Casque</label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.casque}
              id="casque"
              name="casque"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="gilet">Gilet Impact</label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.gilet}
              id="gilet"
              name="gilet"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="accessoires">Accessoires </label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.accessoires}
              id="accessoires"
              name="accessoires"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="bagagerie">Bagagerie Surf </label>
            <input
              onChange={handleCheckBox}
              type="checkbox"
              checked={description.bagagerie}
              id="bagagerie"
              name="bagagerie"
            />{" "}
          </div>{" "}
          {JSON.stringify(description)}
        </div>
        {description.planche ||
        description.dérives ||
        description.pad ||
        description.leash ||
        description.casque ||
        description.gilet ||
        description.accessoires ||
        description.bagagerie === true ? (
          <button
            onClick={() => {
              setsurfState(false);
            }}
          >
            Valider sélection
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ModalSurf;
