//--------------// Css
import "./DescriptionProduit.scss";

//--------------// packages
// import { Link } from "react-router-dom";
import { useState } from "react";

const SurfDescription = () => {
  const [surfDescriptionState, setSurfDescriptionState] = useState({
    Type: "",
    Marque: "",
    Etat: "",
    Derives: "",
    Longueur: "",
    Largeur: "",
    Epaisseur: "",
    Prix: "",
  });

  // console.log(surfDescriptionState);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setSurfDescriptionState((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };

  return (
    <div className="container-description">
      {/* //-----------------// LISTE type de la planche //----------------//*/}
      <select
        type="text"
        value={surfDescriptionState.Type}
        onChange={handleChange}
        name="Type"
        id="Type"
      >
        <option>Type de Planche</option>
        <option value="Shortboard">ShortBoard</option>
        <option value="Longboard">Longboard</option>
        <option value="MiniMalibu">MiniMalibu</option>
        <option value="Fish">Fish</option>
        <option value="Hybride">Hybride</option>
        <option value="Egg">Egg</option>
        <option value="Evolutive">Evolutive</option>
        <option value="Gun">Gun</option>
        <option value="Enfant">Enfant</option>
        <option value="Retro">Retro</option>
      </select>
      {/* //-----------------// LISTE des Marques  //----------------------//*/}

      <input
        type="text"
        placeholder="Marque"
        name="Marque"
        id="Marque"
        onChange={handleChange}
      />

      {/* //-----------------// système de dérives  //----------------------//*/}
      <select
        value={surfDescriptionState.Derives}
        onChange={handleChange}
        name="Derives"
        id="Derives"
      >
        <option>Système de dérives</option>
        <option value="Single">Single(1)</option>
        <option value="Twin">Twin(2)</option>
        <option value="Thruster">Thruster(3)</option>
        <option value="Quad">Quad(4)</option>
        <option value="Combo">Combo(5)</option>
        <option value="Boitier US 2+1">Boitier US 2+1</option>
        <option value="Boitier US 4+1">Boitier US 4+1</option>
      </select>
      {/* //-----------------// Etat de la planche //----------------------//*/}
      <select
        value={surfDescriptionState.Etat}
        onChange={handleChange}
        name="Etat"
        id="Etat"
      >
        <option>Etat de la planche</option>
        <option value="Très bon état">Très bon état</option>
        <option value="Bon état">Bon état</option>
        <option value="Etat correct">Etat correct</option>
        <option value="Mauvais Etat">Mauvais Etat</option>
      </select>
      {/* //--------------------------// Longueur //-----------------------//*/}

      <input
        type="text"
        placeholder="Longueur"
        name="longueur"
        id="Longueur"
        onChange={handleChange}
      />
      {/* //--------------------------// Largeur //------------------------//*/}
      <input
        type="text"
        placeholder="Largeur"
        name="Largeur"
        id="Largeur"
        onChange={handleChange}
      />
      {/* //--------------------------// Epaisseur //----------------------//*/}
      <input
        type="text"
        placeholder="Epaisseur"
        name="Epaisseur"
        id="Epaisseur"
        onChange={handleChange}
      />
      {/* //--------------------------// Prix //-----------------------//*/}

      <input
        type="text"
        placeholder="Prix de vente [€]"
        name="Prix"
        id="Prix"
        onChange={handleChange}
      />
      {JSON.stringify(surfDescriptionState)}
    </div>
  );
};

export default SurfDescription;

/* <select
        type="text"
        value={surfDescriptionState.Marque}
        onChange={handleChange}
        name="Marque"
        id="Marque"
      >
        <option>Marque de la planche</option>
        <option value="Your Local Shaper">Your Local Shaper</option>
        <option value="Channel Island & Al Merrick">
          Channel Island & Al Merrick
        </option>
        <option value="Bic">Bic</option>
        <option value="Bing">Bing</option>
        <option value="Bradley Surfboards">Bradley Surfboards</option>
        <option value="Catch Surf">Catch Surf</option>
        <option value="Chilli Surfboards">Chilli Surfboards</option>
        <option value="Christenson">Christenson</option>
        <option value="DHD">DHD</option>
        <option value="Hurricanes">Hurricanes</option>
        <option value="JS SurfBoard">JS SurfBoard</option>
        <option value="Lost libTech">Lost libTech</option>
        <option value="LSD Surfboards">LSD Surfboards</option>
        <option value="Mick Fanning">Mick Fanning</option>
        <option value="Maurice Cole">Maurice Cole</option>
        <option value="Mark Richards">Mark Richards</option>
        <option value="NSP">NSP</option>
        <option value="Ocean & Earth">Ocean & Earth</option>
        <option value="Mark Phillips">Mark Phillips</option>
        <option value="Phil Grace">Phil Grace</option>
        <option value="Prism SurfBoards">Prism SurfBoards</option>
        <option value="Pukas">Pukas</option>
        <option value="Softeck">Softeck</option>
        <option value="SuperBrand Surfboard">SuperBrand Surfboard</option>
        <option value="Takayama">Takayama</option>
        <option value="Torq">Torq</option>
        <option value="Takoro">Takoro</option>
      </select> */
