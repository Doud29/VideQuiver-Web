//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";
//--------------// packages

const PadDescription = () => {
  // console.log(surfDescriptionState);

  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---- Volume */}
      <DropDown
        data={TechnicalValue.MER.Surf.Pad["Nombre de pièces"]}
        name="Nombre de pièce"
      />
      {/* //---- Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />

      {/* //---- Marque */}
    </div>
  );
};

export default PadDescription;
