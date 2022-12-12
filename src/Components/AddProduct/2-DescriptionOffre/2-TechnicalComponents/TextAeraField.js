import { useContext, useState } from "react";
import { UserContext } from "../../../../Context/UserContext";

const TexteAeraField = ({ name, id, title }) => {
  const { createOffer, setCreateOffer } = useContext(UserContext);

  //STATE
  const [inputLength, setInputLength] = useState("");
  //LONGUEUR
  const numberOfCaractersDescription = (valueInput) => {
    let LongueurInput = valueInput.length;
    const Limit = 300;
    let result = Limit - LongueurInput;
    return result;
  };
  //COLOR
  const getColorDescription = (valueInput) => {
    let InputLength = valueInput.length;
    let color = "";
    if (InputLength === 300) {
      color = "red";
    }
    return color;
  };

  const handleCheckBox = (e) => {
    let newObject = { ...createOffer };
    let inputValue = e.target.value;
    setCreateOffer({ ...newObject, [name]: inputValue });
    setInputLength(inputValue);
  };

  return (
    <div className="container-input-span">
      <textarea
        type="text"
        placeholder=" "
        onChange={(e) => handleCheckBox(e)}
        name={name}
        id={id}
        maxLength={300}
        autoComplete="off"
      />
      <span className="descriptionSpan">{title}</span>
      <span
        className="numberCaracterstextaera"
        style={{
          color: getColorDescription(inputLength),
        }}
      >
        {numberOfCaractersDescription(inputLength)} caractères restants
      </span>
    </div>
  );
};

export default TexteAeraField;
