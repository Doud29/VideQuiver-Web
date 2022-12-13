//CSS
import "../DescriptionProduit.scss";

//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const SurfLuggageDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---// Longueur */}
      <DropDown
        data={TechnicalValue.MER.Surf.Bagagerie.Construction}
        name="Construction"
      />
      {/* //---// Longueur */}
      <DropDown
        data={TechnicalValue.COMMUN.Longueur}
        name="Longueur de la housse"
      />
      {/* //---// Largeur */}
      <DropDown
        data={TechnicalValue.COMMUN.Largeur}
        name="Largeur de la housse"
      />
      {/* //---// Epaisseur */}
      <DropDown
        data={TechnicalValue.MER.Surf.Bagagerie["Epaisseur-Bagagerie"]}
        name="Épaisseur Bagagerie"
      />
      {/* //---// Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
      {/* //---// Marque */}
      {/* <InputField
        type="text"
        name="Marque"
        id="Marque"
        // value={Marque}
        // onChange={onChange}
        placeholder=" "
        autoComplete="off"
      /> */}
    </div>
  );
};

export default SurfLuggageDescription;
