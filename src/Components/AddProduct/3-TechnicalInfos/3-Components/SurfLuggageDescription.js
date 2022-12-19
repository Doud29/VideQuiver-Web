//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const SurfLuggageDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.Surf.Bagagerie.Construction}
        name="Construction"
      />
      <DropDown
        data={TechnicalValue.COMMUN.Longueur}
        name="Longueur de la housse"
      />
      <DropDown
        data={TechnicalValue.COMMUN.Largeur}
        name="Largeur de la housse"
      />
      <DropDown
        data={TechnicalValue.MER.Surf.Bagagerie["Epaisseur-Bagagerie"]}
        name="Épaisseur Bagagerie"
      />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default SurfLuggageDescription;
