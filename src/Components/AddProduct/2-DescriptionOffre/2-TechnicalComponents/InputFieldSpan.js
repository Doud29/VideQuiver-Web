import { useState } from "react";

const InputFieldSpan = () => {
  //-------// State pour récupérer la valeur du modèle renseigné
  const [model, setModelState] = useState("");

  //------// fonction pour afficher le nombre de caractere restant dans l'input Modèle
  const numberOfCaractersModel = (valueInput) => {
    let LongueurInput = valueInput.length;
    const Limit = 40;
    let result = Limit - LongueurInput;
    return result;
  };

  //------// fonction la couleur de l'input si maximum de caractére est atteinds
  const getColor = (valueInput) => {
    let InputLength = valueInput.length;
    let color1 = "";
    if (InputLength === 40) {
      color1 = "red";
    }
    return color1;
  };
  return (
    <div className="container-input-span">
      <input
        type="text"
        placeholder=" "
        onChange={(e) => {
          setModelState(e.target.value);
        }}
        value={model}
        id="model"
        name="model"
        autoComplete="off"
        maxLength={40}
      />
      <span className="modèleSpan">Modèle</span>
      <span
        className="numberCaracters"
        style={{
          color: getColor(model),
        }}
      >
        {numberOfCaractersModel(model)} caractères restants
      </span>
    </div>
  );
};

export default InputFieldSpan;
