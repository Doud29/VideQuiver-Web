//--------------// Surf description css
import "../DescriptionProduit.scss";
import DropDown from "../DropDownList/DropDown.js";
import TechnicalValue from "../../../JSON/Technical-informations.json";
import InputField from "../InputField/InputField";

//--------------// Composent
import TitleTechnicalInformation from "../TitleTechnicalInformations";

const DerivesDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //----// Boitier derives*/}
      <DropDown
        data={TechnicalValue.MER.Surf["Dérives/Ailerons"]["Système de dérives"]}
        name="Système de dérives"
      />
      {/* //----// type dérives*/}
      <DropDown
        data={TechnicalValue.MER.Surf["Dérives/Ailerons"]["Types de dérives"]}
        name="Types de dérives"
      />
      {/* //---// Etat derives */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="Etat" />
      {/* //----// Marque*/}
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

export default DerivesDescription;
