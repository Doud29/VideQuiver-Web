//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const BalaclavaDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---------// Epaisseur combinaisaon*/}
      <DropDown
        data={TechnicalValue.MER.Néopréne["Epaisseur Jacket"]}
        name="Epaisseur"
      />
      {/* //-----------------// Taille combinaisaon*/}
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      {/* //-----------------// Etat*/}
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
    </div>
  );
};

export default BalaclavaDescription;
