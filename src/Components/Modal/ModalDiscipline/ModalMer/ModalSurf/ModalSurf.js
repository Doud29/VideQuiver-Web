//--------------// packages

import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";

const ModalSurf = ({ Produit }) => {
  //---------// on récupére et on destrucure notre context[Objet] pour une meilleure lecture du code

  const { ToggleModal } = useContext(UserContext);

  const handleCheckBox = (e) => {
    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
    // updateInpute(e.target.value);
    // setCreateOffer("Planche de Surf");
  };

  return (
    <div className="container-modal">
      {/* //-----------------------------//Overlay  */}
      <div
        className="overlay-modal-trigger"
        onClick={() => ToggleModal("closeAll")}
      ></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Surf</p>
          <div className="bloc-arrowLeft" onClick={() => ToggleModal("Sea")}>
            <ion-icon name="arrow-back-outline"></ion-icon>{" "}
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
