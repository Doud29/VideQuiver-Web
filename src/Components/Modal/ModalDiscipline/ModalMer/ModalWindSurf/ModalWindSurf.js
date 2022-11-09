//--------------// Components

//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalWindSurf = () => {
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
        <TitleModal title="WindSurf" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Flotteur"
            name="Produit"
            value="Flotteur de Windsurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Voile"
            name="Produit"
            value="Voile de WindSurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Whisbone"
            name="Produit"
            value="Whisbone de Winsurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Mat"
            name="Produit"
            value="Mat de Winsurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Dérives/Ailerons"
            name="Produit"
            value="Dérives/Ailerons de Winsurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Pied de mat / Plaquette / Rallonge"
            name="Produit"
            value="Pied de mat / Plaquette / Rallonge"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires"
            name="Produit"
            value="Accessoires de Winsurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bagagerie"
            name="Produit"
            value="Bagagerie Wind Surf"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindSurf;
