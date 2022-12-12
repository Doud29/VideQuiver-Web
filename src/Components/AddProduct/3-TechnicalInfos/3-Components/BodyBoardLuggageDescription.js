//CSS
import "../DescriptionProduit.scss";

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
        data={TechnicalValue.MER.BodyBoard["Planche de BodyBoard"].Longueur}
        name="Longueur de la housse"
      />
      {/* //---// nombre de planche */}
      <DropDown
        data={TechnicalValue.MER.BodyBoard.Bagagerie["Nombre de planche"]}
        name="Nombre de planche"
      />
      {/* //---// Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
      {/* //---- Marque */}
    </div>
  );
};

export default BodyBoardLuggageDescription;
