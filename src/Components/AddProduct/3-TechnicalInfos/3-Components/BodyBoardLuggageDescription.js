//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const BodyBoardLuggageDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.BodyBoard["Planche de BodyBoard"].Longueur}
        name="Longueur de la housse"
      />
      <DropDown
        data={TechnicalValue.MER.BodyBoard.Bagagerie["Nombre de planche"]}
        name="Nombre de planche"
      />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default BodyBoardLuggageDescription;
