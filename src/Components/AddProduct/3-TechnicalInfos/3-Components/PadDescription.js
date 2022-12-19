//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const PadDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.Surf.Pad["Nombre de pièces"]}
        name="Nombre de pièce"
      />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default PadDescription;
