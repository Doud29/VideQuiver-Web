//--------------// Surf description css
import "../DescriptionProduit.scss";

import TechnicalValue from "../../../JSON/Technical-informations.json";

//--------------// Composent
import TitleTechnicalInformation from "../TitleTechnicalInformations";
import DropDown from "../DropDownList/DropDown.js";
import InputField from "../InputField/InputField";

const SurfDescription = ({ technicalInformations }) => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---- Type de Planche */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Type}
        name="Type de planche"
      />
      {/* //---- Level */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Niveau}
        name="Niveau requis"
      />
      {/* //---- Boitier dérives */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Boitier}
        name="Type de boitier"
      />
      {/* //---- Types de dérives */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Dérives}
        name="Type de Dérives"
      />
      {/* //---- Volume */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Litrage}
        name="Volume de la planche [L]"
      />
      {/* //---- Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="Etat" />
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

      {/* //-----// Dimension */}
      <InputField
        type="text"
        name="Dimensions"
        id="Dimensions"
        // value={Marque}
        // onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
      {/* <div>
        <ion-icon
          style={{ color: "grey" }}
          name="information-circle-outline"
        ></ion-icon>
      </div> */}
    </div>
  );
};

export default SurfDescription;
