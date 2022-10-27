//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const BodyBoardLuggageDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---// Longueur */}
      <DropDown
        data={TechnicalValue.COMMUN.Longeur}
        name="Longueur de la housse"
      />
      {/* //---// Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="état" />
      {/* //---- Marque */}
      <InputField
        type="text"
        name="Marque"
        id="Marque"
        // value={Marque}
        // onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default BodyBoardLuggageDescription;
