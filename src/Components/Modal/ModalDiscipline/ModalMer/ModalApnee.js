//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";
import InputRadio from "../ComposantModal/InputRadio";
import TitleModal from "../ComposantModal/TitleModal";

const ModalApnee = () => {
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
      {/* //-----//Overlay  */}
      <div
        className="overlay-modal-trigger"
        onClick={() => ToggleModal("closeAll")}
      ></div>{" "}
      {/* //-----//Modal et son contenu */}
      <div className="modal">
        <TitleModal title="Apnée" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Palmes polymères"
            name="Produit"
            value="Palmes polymères"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Palmes carbonnes"
            name="Produit"
            value="Palmes carbonnes d'apnée"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bouée et planche"
            name="Produit"
            value="Bouée et planche de chasse"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Plomb et lestage"
            name="Produit"
            value="Plomb et lestage"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Tubas"
            name="Produit"
            value="Tubas"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Masques"
            name="Produit"
            value="Masques"
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

export default ModalApnee;
