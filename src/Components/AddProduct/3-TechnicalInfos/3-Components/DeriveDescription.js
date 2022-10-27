//--------------// Surf description css
import "../../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

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
        data={
          TechnicalValue.MER.Surf["Dérives/Ailerons"]["Configuration ailerons"]
        }
        name="Configuration"
      />
      <DropDown data={TechnicalValue.COMMUN.Construction} name="Construction" />
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
