//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";
import InputRadio from "../ComposantModal/InputRadio";
import TitleModal from "../ComposantModal/TitleModal";

const ModalKiteSurf = () => {
  const { ToggleModal, setCreateOffer, createOffer } = useContext(UserContext);

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
      {/* //-------//Overlay  */}
      <div
        className="overlay-modal-trigger"
        onClick={() => ToggleModal("closeAll")}
      ></div>
      {/* //------//Modal et son contenu */}
      <div className="modal">
        <TitleModal title="KiteSurf" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Aile"
            name="Produit"
            value="Aile de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Barre"
            name="Produit"
            value="Barre de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Twin-Tip"
            name="Produit"
            value="Twin-Tip de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Planche directionnelle"
            name="Produit"
            value="Planche directionnelle de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Planche de Kite foil"
            name="Produit"
            value="Planche de Kite foil"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Foil kiteSurf"
            name="Produit"
            value="Foil de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Harnais"
            name="Produit"
            value="Harnais de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Casque / Gilet"
            name="Produit"
            value="Casque / Gilet de Kite Surf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires [Ailes / Barres / Planches]"
            name="Produit"
            value="Accessoires [Ailes / Barres / Planches]"
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

export default ModalKiteSurf;
