//--------------// packages

import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalSurf = () => {
  //---------// on récupére et on destrucure notre context[Objet] pour une meilleure lecture du code

  const { ToggleModal, setCreateOffer, createOffer } = useContext(UserContext);

  const handleCheckBox = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
    setCreateOffer({ ...createOffer, [name]: value });
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
            value="Dérives / Ailerons"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Pad"
            name="Produit"
            value="Pad"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Leash"
            name="Produit"
            value="Leash"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Casque"
            name="Produit"
            value="Casque"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Gilet Impact"
            name="Produit"
            value="Gilet Impact"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires"
            name="Produit"
            value="Accessoires"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bagagerie"
            name="Produit"
            value="Bagagerie"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalSurf;
