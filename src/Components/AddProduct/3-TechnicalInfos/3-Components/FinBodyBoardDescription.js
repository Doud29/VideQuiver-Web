//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const FinBodyboardDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      {/* //---// Etat  */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
      {/* //----// Marque*/}
    </div>
  );
};

export default FinBodyboardDescription;
