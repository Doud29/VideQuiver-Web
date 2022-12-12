//CSS
import "../DescriptionProduit.scss";

import { useState } from "react";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
// import InputField from "../2-TechnicalComponents/InputField/InputField";
// import { UserContext } from "../../../../Context/UserContext";
// import { useContext } from "react";
const SurfDescription = () => {
  //add + check + update technical data Inputdata

  // const { createOffer } = useContext(UserContext);

  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---- Type de Planche */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Type}
        name="Type de planche"
      />
      {/* //---- Construction */}
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Materiaux}
        name="Materiaux"
      />

      {/* //---- Level */}
      <DropDown data={TechnicalValue.COMMUN.Niveau} name="Niveau requis" />
      {/* //---- Boitier dérives */}
      <DropDown data={TechnicalValue.COMMUN.Boitier} name="Type de boitier" />
      {/* //---- Configuration */}
      <DropDown
        data={TechnicalValue.COMMUN["Configuration ailerons"]}
        name="Configuration"
      />
      {/* //---- Volume */}
      <DropDown
        data={TechnicalValue.COMMUN.Volume}
        name="Volume de la planche"
      />
      {/* //---- Longueur */}
      <DropDown data={TechnicalValue.COMMUN.Longueur} name="Longueur planche" />
      {/* //---- Largeur */}
      <DropDown data={TechnicalValue.COMMUN.Largeur} name="Largeur planche" />
      {/* //---- Epaisseur */}
      <DropDown
        data={TechnicalValue.COMMUN.Epaisseur}
        name="Épaisseur planche"
      />
      {/* //---- Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
      {/* //---- Marque */}
      {/* <InputField
        type="text"
        name="Marque"
        id="Marque"
        value={Marque}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
      /> */}
    </div>
  );
};

export default SurfDescription;
