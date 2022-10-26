//--------------// packages
import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalBodySurf = () => {
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
        <TitleModal title="BodySurf" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Palmes"
            name="Produit"
            value="Palmes de bodysurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Leash"
            name="Produit"
            value="Leash de bodysurf "
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="HandPlane"
            name="Produit"
            value="HandPlane de bodysurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Casque"
            name="Produit"
            value="Casque de bodysurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Accessoires"
            name="Produit"
            value="Accessoires de bodysurf"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Bagagerie Bodysurf"
            name="Produit"
            value="Bagagerie de bodysurf"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalBodySurf;
