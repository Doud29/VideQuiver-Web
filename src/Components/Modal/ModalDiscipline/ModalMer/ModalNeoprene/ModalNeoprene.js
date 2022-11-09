//--------------// packages

import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalNeoprene = () => {
  const { ToggleModal, setCreateOffer, createOffer } = useContext(UserContext);

  const handleCheckBox = (e) => {
    const value = e.target.value;

    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
    setCreateOffer({ ...createOffer, Product: value });
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
        <TitleModal title="Néopréne" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Intégral"
            name="Produit"
            value="Combinaison intégrale"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Shorty"
            name="Produit"
            value="Combinaison shorty"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Lycra"
            name="Produit"
            value="Lycra / Top"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Long John"
            name="Produit"
            value="Long John"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Veste néopréne"
            name="Produit"
            value="Veste néopréne"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Chaussons"
            name="Produit"
            value="Chaussons néopréne"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Cagoules / Bonnets"
            name="Produit"
            value="Cagoules / Bonnets"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Gants"
            name="Produit"
            value="Gants néopréne"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalNeoprene;
