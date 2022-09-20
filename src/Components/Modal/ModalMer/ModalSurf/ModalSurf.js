//--------------// Components
// import ModalMer from "../ModalMer/ModalMer";

//--------------// packages

import React, { useContext } from "react";
import { DescriptionContext } from "../../../../DescriptionContext";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

const ModalSurf = ({ setsurfState, setChoiceValidatedForSellState }) => {
  //---------// on récupére et on destrucure notre context[Objet] pour une meilleure lecture du code
  const { Produit, updateInpute } = useContext(DescriptionContext);

  const handleCheckBox = (e) => {
    if (e.target.value !== "") {
      setChoiceValidatedForSellState(true);
    }
    // const name = e.target.name;
    // let value = e.target.value;

    // updateInpute((prevalue) => {
    //   return { ...prevalue, [name]: value };
    // });

    updateInpute(e.target.value);
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
              type="radio"
              onChange={handleCheckBox}
              value="Planche de surf"
              id="Planche"
              name="Produit"
            />
          </div>{" "}
          <div>
            <label htmlFor="dérives">Dérives/Ailerons </label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Dérives / Ailerons"
              id="Dérives"
              name="Produit"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="pad">Pad </label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Pad"
              id="Pad"
              name="Produit"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="leash">Leash</label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Leash"
              id="Leash"
              name="Produit"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="casque">Casque</label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Casque"
              id="Casque"
              name="Produit"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="gilet">Gilet Impact</label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Gilet"
              id="Gilet"
              name="Produit"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="accessoires">Accessoires </label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Accessoires"
              id="Accessoires"
              name="Produit"
            />{" "}
          </div>{" "}
          <div>
            <label htmlFor="bagagerie">Bagagerie Surf </label>
            <input
              onChange={handleCheckBox}
              type="radio"
              value="Bagagerie"
              id="Bagagerie"
              name="Produit"
            />{" "}
          </div>{" "}
          {JSON.stringify(Produit)}
        </div>
      </div>
    </div>
  );
};

export default ModalSurf;
