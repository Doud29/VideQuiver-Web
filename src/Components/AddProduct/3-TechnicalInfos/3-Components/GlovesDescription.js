//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const GlovesDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown data={TechnicalValue.COMMUN.Genre} name="Genre" />
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default GlovesDescription;
