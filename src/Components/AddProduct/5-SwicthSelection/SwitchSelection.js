//----------// Css
import "./switchSelection.scss";

//----------// Packages
import { useState } from "react";

//------// Components
import RadioButton from "./RadioButton";

const SwitchSelection = () => {
  const [toggle, settoggle] = useState({
    sell: false,
    exchange: false,
    rent: false,
  });

  const toggleToggle = () => {
    if (toggle.sell === true) {
      settoggle({
        sell: true,
        exchange: true,
        rent: false,
      });
    }
    if (toggle.exchange === true) {
      settoggle({
        sell: false,
        exchange: false,
        rent: true,
      });
    }
    if (toggle.exchange === false) {
      settoggle({
        sell: false,
        exchange: false,
        rent: true,
      });
    }
  };

  const handleToggle = (e) => {
    let name = e.target.name;
    let value = e.target.checked;

    settoggle((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  };

  return (
    <div className="container-switch">
      <div className="container-titre">
        <div className="line"></div>
        <h3>Annonce </h3>
      </div>
      <RadioButton
        title="Vente :"
        name="sell"
        onChange={handleToggle}
        value={toggle.sell}
      />
      <RadioButton
        title="Location :"
        name="rent"
        onChange={handleToggle}
        value={toggle.rent}
      />
      <RadioButton
        title="Echange :"
        name="exchange"
        onChange={handleToggle}
        value={toggle.exchange}
      />

      {/* {toggle.sell === true ? (
        <div className="bloc-switch">
          <span>Echange Possible : </span>
          <label className="switch">
            <input
              type="checkbox"
              name="exchange"
              checked={toggle.exchange}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>
      ) : (
        <>{null}</>
      )} */}
      {/* <div className="bloc-switch location">
        <span>Location : </span>
        <label className="switch">
          <input
            type="checkbox"
            name="rent"
            onChange={handleToggle}
            checked={toggle.rent}
          />
          <span className="slider"></span>
        </label>
      </div> */}
    </div>
  );
};

export default SwitchSelection;
