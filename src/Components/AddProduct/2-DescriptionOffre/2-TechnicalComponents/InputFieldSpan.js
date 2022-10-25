import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const InputFieldSpan = () => {
  const { createOffer, setCreateOffer, ToggleModal } = useContext(UserContext);

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

  const handleCheckBox = (e) => {
    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
    setCreateOffer({ ...createOffer, Model: e.target.value });
  };

  return (
    <div className="container-input-span">
      <input
        type="text"
        placeholder=" "
        onChange={(e) => handleCheckBox(e)}
        value={createOffer.Model}
        id="model"
        name="model"
        autoComplete="off"
        maxLength={40}
      />
      <span className="modèleSpan">Modèle</span>
      <span
        className="numberCaracters"
        style={{
          color: getColor(createOffer.Model),
        }}
      >
        {numberOfCaractersModel(createOffer.Model)} caractères restants
      </span>
    </div>
  );
};

export default InputFieldSpan;
