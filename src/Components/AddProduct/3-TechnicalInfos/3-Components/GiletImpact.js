//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const GiletImpact = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---// Genre */}
      <DropDown data={TechnicalValue.COMMUN.Genre} name="Genre" />
      {/* //---// Etat Taille */}
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      {/* //---// Genre */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default GiletImpact;
