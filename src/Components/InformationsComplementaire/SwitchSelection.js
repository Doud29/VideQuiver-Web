//----------// Css
import "./switchSelection.scss";

//----------// Packages
import { useState } from "react";

const SwitchSelection = () => {
  const [toggleSellSate, setToggleSellSate] = useState(false);
  const [toggleRentState, setToggleRentState] = useState(false);

  return (
    <div className="container-switch">
      <div className="container-titre">
        <div className="line"></div>
        <h3>Type d'offre</h3>
      </div>
      <div className="bloc-switch">
        <span>Vente : </span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className="bloc-switch">
        <span>Echange Possible : </span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className="bloc-switch location">
        <span>Location : [prochainement] </span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default SwitchSelection;
