//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const DerivesDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.COMMUN.Boitier}
        name="Système de dérives"
      />
      <DropDown
        data={TechnicalValue.COMMUN["Configuration ailerons"]}
        name="Configuration"
      />
      <DropDown data={TechnicalValue.COMMUN.Construction} name="Construction" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default DerivesDescription;
