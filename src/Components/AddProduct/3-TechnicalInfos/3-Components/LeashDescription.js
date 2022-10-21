//--------------// Css
import "../../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const LeashDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---- Maintien */}
      <DropDown
        data={TechnicalValue.MER.Surf.Leash["Type de maintien"]}
        name="Maintien"
      />
      {/* //---- Epaisseur */}
      <DropDown
        data={TechnicalValue.MER.Surf.Leash.Epaisseur}
        name="Epaisseur"
      />
      {/* //---- Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="Etat" />

      {/* //----- Longueur*/}
      <DropDown data={TechnicalValue.MER.Surf.Leash.Longueur} name="Longueur" />

      {/* //---- Marque */}
      <InputField
        type="text"
        name="Marque"
        id="Marque"
        // value={Marque}
        // onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default LeashDescription;
