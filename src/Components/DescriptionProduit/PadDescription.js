//--------------// Css
import "./DescriptionProduit.scss";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const PadDescription = () => {
  const [padDescription, setPadDescription] = useState({
    Couleur: "",
    Marque: "",
    Nombredepieces: "",
    Etat: "",
    Prix: "",
  });

  // console.log(surfDescriptionState);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setPadDescription((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };
  return (
    <div className="container-description">
      {/* //-----------------// Couleur type de la planche //----------------//*/}
      <input
        type="text"
        placeholder="Couleur du Pad"
        name="couleur"
        id="couleur"
        value={padDescription.Couleur}
        onChange={handleChange}
      />
      {/* //-----------------// Nombre de pièces sur le pad //----------------//*/}
      <select
        type="text"
        value={padDescription.Nombredepieces}
        onChange={handleChange}
        name="nombre de pièces"
        id="pièces"
      >
        <option>Nombre de pièces</option>
        <option value="1">1 pièces</option>
        <option value="2">2 pièces</option>
        <option value="3">3 pièces</option>
        <option value="4">4 pièces</option>
        <option value="5">5 pièces</option>
        <option value="6">6 pièces</option>
        <option value="7">7 pièces</option>
        <option value="8">8 pièces</option>
      </select>
      {/* //-----------------// Marque du pad //----------------//*/}
      <input
        type="text"
        placeholder="Couleur du Pad"
        name="couleur"
        id="couleur"
        value={padDescription.Marque}
        onChange={handleChange}
      />
      {/* //-----------------// Etat du pad //----------------//*/}
      <select
        value={padDescription.Etat}
        onChange={handleChange}
        name="Etat"
        id="Etat"
      >
        <option>Etat du pad</option>
        <option value="Très bon état">Très bon état</option>
        <option value="Bon état">Bon état</option>
        <option value="Etat correct">Etat correct</option>
        <option value="Mauvais Etat">Mauvais Etat</option>
      </select>
      {/* //-----------------// Prix du pad //----------------//*/}
      <input
        type="text"
        placeholder="prix du Pad"
        name="Prix"
        id="Prix"
        value={padDescription.Prix}
        onChange={handleChange}
      />
    </div>
  );
};

export default PadDescription;
