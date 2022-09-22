//--------------// Css
import "./DescriptionProduit.scss";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const DerivesDescription = () => {
  const [derivesDescriptionState, setDerivesDescriptionState] = useState({
    Boitier: "",
    Type: "",
    Marque: "",
    Etat: "",
    Prix: " €",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setDerivesDescriptionState((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  return (
    <div className="container-description">
      <div className="container-titre">
        <div className="line"></div>
        <h3>Informations Techniques</h3>
      </div>
      {/* //-----------------// Systeme derives//----------------//*/}
      <div className="selectdiv ">
        <select
          type="text"
          value={derivesDescriptionState.Boitier}
          onChange={handleChange}
          name="Boitier"
          id="Boitier"
        >
          <option>Système de dérives</option>
          <option value="Futures">Boitier Futures</option>
          <option value="FCS1">Boitier FCS1</option>
          <option value="FCS1F">Boitier FCS1 Fusion</option>
          <option value="FCS2">Boitier FCS2 </option>
          <option value="us">Boitier U.S</option>
          <option value="Tuttle">Boitier Tuttle</option>
          <option value="Soft">Boitier SoftBoard</option>
        </select>
      </div>
      {/* //-----------------// type dérives //----------------//*/}
      <div className="selectdiv ">
        <select
          type="text"
          value={derivesDescriptionState.Type}
          onChange={handleChange}
          name="Type"
          id="Type"
        >
          <option>Type de dérives</option>
          <option value="Single">Single(1)</option>
          <option value="Twin">Twin(2)</option>
          <option value="Thruster">Thruster(3)</option>
          <option value="Quad">Quad(4)</option>
          <option value="Combo">Combo(5)</option>
          <option value="Boitier US 2+1">Boitier US 2+1</option>
          <option value="Boitier US 4+1">Boitier US 4+1</option>
        </select>
      </div>
      {/* //--------------------// Marque //------------------//*/}

      <input
        type="text"
        placeholder="Marque"
        name="Marque"
        id="Marque"
        onChange={handleChange}
      />
      {/* //-----------------// Etat derives //----------------------//*/}
      <div className="selectdiv ">
        <select
          value={derivesDescriptionState.Etat}
          onChange={handleChange}
          name="Etat"
          id="Etat"
        >
          <option>Etat des dérives</option>
          <option value="Neuf">Neuf</option>
          <option value="Très bon état">Très bon état</option>
          <option value="Bon état">Bon état</option>
          <option value="Etat correct">Etat correct</option>
          <option value="Mauvais Etat">Mauvais Etat</option>
        </select>
      </div>

      {/* //--------------------// Prix //------------------//*/}
      <input
        type="text"
        placeholder="Prix de vente [€]"
        name="Prix"
        id="Prix"
        onChange={handleChange}
      />
      {JSON.stringify(derivesDescriptionState)}
    </div>
  );
};

export default DerivesDescription;
