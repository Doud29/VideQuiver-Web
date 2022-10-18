//--------------// Surf description css
import "../DescriptionProduit.scss";
import DropDown from "../DropDownList/DropDown.js";
import TechnicalValue from "../../../JSON/Technical-informations.json";

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
      <input
        type="text"
        placeholder="Marque"
        name="Marque"
        id="Marque"
        // onChange={handleChange}
      />
    </div>
  );
};

export default DerivesDescription;
