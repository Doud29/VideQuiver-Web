//--------------// Composent
import TitleTechnicalInformation from "../TitleTechnicalInformations";
import DropDown from "../DropDownList/DropDown.js";
import InputField from "../InputField/InputField";
import TechnicalValue from "../../../JSON/Technical-informations.json";

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
      <DropDown data={TechnicalValue.COMMUN.Etat} name="Etat" />
      {/* //----// Couleur */}
      <InputField
        type="text"
        name="Couleur"
        id="Couleur"
        // value={Marque}
        // onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
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

export default PadDescription;
