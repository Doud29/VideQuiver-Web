//--------------// Components
// import ModalMer from "../ModalMer/ModalMer";

//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalBodyBoard = () => {
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
        <TitleModal title="BodyBoard" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Planche "
            name="Produit"
            value="Planche de bodyboard"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Palmes"
            name="Produit"
            value="Palmes de bodyboard"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Leash"
            name="Produit"
            value="Leash coil"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires"
            name="Produit"
            value="Accessoires de bodyboard"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bagagerie"
            name="Produit"
            value="Bagagerie de bodyboard"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalBodyBoard;
