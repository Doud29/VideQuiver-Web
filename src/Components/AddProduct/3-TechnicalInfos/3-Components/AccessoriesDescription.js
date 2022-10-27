//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const AccessoriesDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---// détails */}
      <DropDown data={TechnicalValue.COMMUN.Accessory} name="Détails" />
    </div>
  );
};

export default AccessoriesDescription;
