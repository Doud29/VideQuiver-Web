//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const BodyBoardDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.BodyBoard["Planche de BodyBoard"].Longueur}
        name="Longueur"
      />
      <DropDown data={TechnicalValue.COMMUN.Niveau} name="Niveau requis" />
      {/* //---// Etat  */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
      {/* //----// Marque*/}
    </div>
  );
};

export default BodyBoardDescription;
