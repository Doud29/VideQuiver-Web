//--------------// Surf description css
import "../../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const SurfDescription = ({}) => {
  //add + check + update technical data Inputdata

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
        name="Volume de la planche"
      />
      {/* //---- Etat */}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="Etat" />
      {/* //---- Longueur */}
      <DropDown data={TechnicalValue.COMMUN.Longeur} name="Longueur planche" />
      {/* //---- Largeur */}
      <DropDown data={TechnicalValue.COMMUN.Largeur} name="Largeur planche" />
      {/* //---- Epaisseur */}
      <DropDown
        data={TechnicalValue.COMMUN.Epaisseur}
        name="Epaisseur planche"
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

export default SurfDescription;
