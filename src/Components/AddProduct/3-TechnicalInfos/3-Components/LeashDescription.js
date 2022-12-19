//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const LeashDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.Surf.Leash["Type de maintien"]}
        name="Maintien"
      />
      <DropDown
        data={TechnicalValue.MER.Surf.Leash.Epaisseur}
        name="Épaisseur"
      />
      <DropDown data={TechnicalValue.MER.Surf.Leash.Longueur} name="Longueur" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default LeashDescription;
