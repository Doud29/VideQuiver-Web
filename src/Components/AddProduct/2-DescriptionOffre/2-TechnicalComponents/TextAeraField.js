import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const TexteAeraField = () => {
  const { createOffer, setCreateOffer, ToggleModal } = useContext(UserContext);

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

  const handleCheckBox = (e) => {
    if (e.target.value !== "") {
      setTimeout(() => {
        ToggleModal("closeAll");
      }, 500);
    }
    setCreateOffer({ ...createOffer, DescriptionOffer: e.target.value });
  };

  return (
    <div className="container-input-span">
      <textarea
        type="text"
        value={createOffer.DescriptionOffer}
        placeholder=" "
        onChange={(e) => handleCheckBox(e)}
        name="description"
        id="description"
        maxLength={300}
        autoComplete="off"
      />
      <span className="descriptionSpan">Description de l'annonce</span>
      <span
        className="numberCaracterstextaera"
        style={{
          color: getColorDescription(createOffer.DescriptionOffer),
        }}
      >
        {numberOfCaractersDescription(createOffer.DescriptionOffer)} caractères
        restants
      </span>
    </div>
  );
};

export default TexteAeraField;
