//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const LycraDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //Epaisseur combinaisaon*/}
      <DropDown data={TechnicalValue.COMMUN.Genre} name="Genre" />
      {/* // Taille Lycra*/}
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      {/* // Etat*/}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default LycraDescription;
