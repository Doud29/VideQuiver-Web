//----------// Css
import "./switchSelection.scss";

//----------// Packages
import { useState } from "react";

const SwitchSelection = () => {
  const [toggle, settoggle] = useState({
    sell: false,
    exchange: false,
    rent: false,
  });

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
        <h3>Type d'offre</h3>
      </div>
      <div className="bloc-switch">
        <span>Vente : </span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={toggle.sell}
            name="sell"
          />
          <span className="slider"></span>
        </label>
      </div>
      {toggle.sell === true ? (
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
      )}

      <div className="bloc-switch location">
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
      </div>
      {JSON.stringify(toggle)}
    </div>
  );
};

export default SwitchSelection;
