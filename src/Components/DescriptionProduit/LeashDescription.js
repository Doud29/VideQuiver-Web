//--------------// Css
import "./DescriptionProduit.scss";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const LeashDescription = () => {
  const [leashDescription, setLeashDescription] = useState({
    Marque: "",
    Taille: "",
    Epaisseur: "",
    Maintien: "",
    Etat: "",
  });

  // console.log(surfDescriptionState);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setLeashDescription((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };
  return (
    <div className="container-description">
      {/* //-----------------// Marque du leash //----------------//*/}
      <input
        type="text"
        placeholder="Marque du leash"
        name="Marque"
        id="Marque"
        value={leashDescription.Marque}
        onChange={handleChange}
      />
      {/* //-----------------// Taille du leash //----------------//*/}
      <input
        type="text"
        placeholder="Taille du leash"
        name="Taille"
        id="Taille"
        value={leashDescription.Taille}
        onChange={handleChange}
      />
      {/* //-----------------// Etat du leash //----------------//*/}
      <select
        value={leashDescription.Etat}
        onChange={handleChange}
        name="Etat"
        id="Etat"
      >
        <option>Etat du leash</option>
        <option value="Très bon état">Très bon état</option>
        <option value="Bon état">Bon état</option>
        <option value="Etat correct">Etat correct</option>
        <option value="Mauvais Etat">Mauvais Etat</option>
      </select>
      {/* //-----------------// Maintien du leash //----------------//*/}
      <select
        value={leashDescription.Maintien}
        onChange={handleChange}
        name="Maintien"
        id="Maintien"
      >
        <option>Type de maintien</option>
        <option value="Genou">Genou</option>
        <option value="Cheville">Cheville</option>
      </select>
      {/* //-----------------// Epaisseur du leash //----------------//*/}
      <select
        value={leashDescription.Epaisseur}
        onChange={handleChange}
        name="Epaisseur"
        id="Epaisseur"
      >
        <option>Etat du leash</option>
        <option value="4mm">3/5" - 4mm</option>
        <option value="5.5mm">3/16" - 5.5mm</option>
        <option value="5mm">7/32" - 5mm</option>
        <option value="6mm">1/4" - 6mm</option>
        <option value="7mm">5/16" - 7mm</option>
        <option value="7mm">9/32" - 7mm</option>
        <option value="9mm">3/8" - 9mm</option>
        <option value="1/4">1/4"</option>
        <option value="6mm">6mm</option>
        <option value="7mm">7mm</option>
        <option value="8mm">8mm</option>
      </select>
      {/* //-----------------// Prix du leash //----------------//*/}
      {/* <input
        type="text"
        placeholder="prix du leash [€]"
        name="Prix"
        id="Prix"
        value={leashDescription.Prix}
        onChange={handleChange}
      /> */}
    </div>
  );
};

export default LeashDescription;
