//--------------// packages

import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalSurf = () => {
  //---------// on récupére et on destrucure notre context[Objet] pour une meilleure lecture du code

  const { ToggleModal, setCreateOffer } = useContext(UserContext);

  const handleCheckBox = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
    setCreateOffer((prev) => {
      return { ...prev, Product: value };
    });
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
        <TitleModal title="Surf" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Planche"
            name="Produit"
            value="Planche de Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Dérives"
            name="Produit"
            value="Dérives de surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Pad"
            name="Produit"
            value="Pad de surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Leash"
            name="Produit"
            value="Leash de surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Gilet Impact"
            name="Produit"
            value="Gilet Impact de surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires"
            name="Produit"
            value="Accessoires de surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bagagerie"
            name="Produit"
            value="Bagagerie de surf"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSurf;
