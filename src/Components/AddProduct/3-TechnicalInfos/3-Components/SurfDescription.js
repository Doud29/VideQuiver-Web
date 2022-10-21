//--------------// Surf description css
import "../../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

import { useState } from "react";

const SurfDescription = ({}) => {
  //add + check + update technical data Inputdata

  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        value={inputValue.Marque}
        onChange={handleChange}
        placeholder=" "
        autoComplete="off"
      />

      {/* //-----// Dimension */}
      <InputField
        type="text"
        name="Dimensions"
        id="Dimensions"
        value={inputValue.Dimensions}
        onChange={handleChange}
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
