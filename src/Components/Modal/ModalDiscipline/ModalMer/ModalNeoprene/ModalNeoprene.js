//--------------// packages

import React, { useContext } from "react";
import { UserContext } from "../../../../../Context/UserContext";
import InputRadio from "../../ComposantModal/InputRadio";
import TitleModal from "../../ComposantModal/TitleModal";

const ModalNeoprene = () => {
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
        <TitleModal title="Néopréne" modal="Sea" />
        <div className="container-button">
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Intégral"
            name="Porduit"
            value="Combinaison Intégral"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Shorty"
            name="Porduit"
            value="Combinaison shorty"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Lycra"
            name="Porduit"
            value="Lycra / Top"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Pants"
            name="Porduit"
            value="Pants"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Veste néopréne"
            name="Porduit"
            value="Veste néopréne"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Chaussons"
            name="Porduit"
            value="Chaussons néopréne"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Cagoules / Bonnets"
            name="Porduit"
            value="Cagoules / Bonnets néopréne"
          />
          <InputRadio
            type="radio"
            onChange={handleCheckBox}
            id="Gants"
            name="Porduit"
            value="Gants néopréne"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalNeoprene;
