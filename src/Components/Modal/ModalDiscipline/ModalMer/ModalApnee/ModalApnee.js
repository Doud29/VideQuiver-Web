//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalApnee = () => {
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
            value="Palmes polymères d'apnée"
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
            id="Tubas"
            name="Produit"
            value="Tubas d'apnée"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Masques"
            name="Produit"
            value="Masques d'apnée"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires"
            name="Produit"
            value="Accessoires d'apnée"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bagagerie"
            name="Produit"
            value="Bagagerie Apnée"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalApnee;
