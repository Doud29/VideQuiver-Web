import { useState } from "react";

const TexteAeraField = () => {
  //-------// State pour récupérer la description du produit renseigné
  const [descriptionState, setDescriptionState] = useState("");

  //------// connaitre le nombre de caractére restant
  const numberOfCaractersDescription = (valueInput) => {
    let LongueurInput = valueInput.length;
    const Limit = 300;
    let result = Limit - LongueurInput;
    return result;
  };

  const getColorDescription = (valueInput) => {
    let InputLength = valueInput.length;
    let color = "";
    if (InputLength === 300) {
      color = "red";
    }
    return color;
  };

  return (
    <div className="container-input-span">
      <textarea
        type="text"
        value={descriptionState}
        placeholder=" "
        onChange={(e) => {
          setDescriptionState(e.target.value);
        }}
        name="description"
        id="description"
        maxLength={300}
        autoComplete="off"
      />
      <span className="descriptionSpan">Description de l'annonce</span>
      <span
        className="numberCaracterstextaera"
        style={{
          color: getColorDescription(descriptionState),
        }}
      >
        {numberOfCaractersDescription(descriptionState)} caractères restants
      </span>
    </div>
  );
};

export default TexteAeraField;
