import { useContext, useState } from "react";
import { UserContext } from "../../../../Context/UserContext";

const InputFieldSpan = ({ id, name, title }) => {
  const { createOffer, setCreateOffer } = useContext(UserContext);

  //STATE
  const [inputLength, setInputLength] = useState("");
  //LONGUEUR
  const numberOfCaractersModel = (valueInput) => {
    let LongueurInput = valueInput.length;
    const Limit = 40;
    let result = Limit - LongueurInput;
    return result;
  };

  //COLOR
  const getColor = (valueInput) => {
    let InputLength = valueInput.length;
    let color1 = "";
    if (InputLength === 40) {
      color1 = "red";
    }
    return color1;
  };

  const handleCheckBox = (e) => {
    let newObject = { ...createOffer };
    let inputValue = e.target.value;
    setCreateOffer({ ...newObject, [name]: inputValue });
    setInputLength(inputValue);
  };

  return (
    <div className="container-input-span">
      <input
        type="text"
        placeholder=" "
        onChange={(e) => handleCheckBox(e)}
        id={id}
        name={name}
        autoComplete="off"
        maxLength={40}
      />
      <span className="modèleSpan">{title}</span>
      <span
        className="numberCaracters"
        style={{
          color: getColor(inputLength),
        }}
      >
        {numberOfCaractersModel(inputLength)} caractères restants
      </span>
    </div>
  );
};

export default InputFieldSpan;
