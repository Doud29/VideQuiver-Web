//--------------// Components

//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalSup = () => {
  const { ToggleModal } = useContext(UserContext);

  const handleCheckBox = (e) => {
    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
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
        <TitleModal title="Stand Up Paddle" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Sup de vagues"
            name="Produit"
            value="Sup de vagues"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Sup gonflables"
            name="Produit"
            value="Sup gonflables"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Sup de course"
            name="Produit"
            value="Sup de course"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Sup foil"
            name="Produit"
            value="Sup foil"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Ailerons / Dérives"
            name="Produit"
            value="Ailerons / Dérives"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Pagaie"
            name="Produit"
            value="Pagaie"
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
            id="Accessoires sup"
            name="Produit"
            value="Accessoires sup"
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

export default ModalSup;
