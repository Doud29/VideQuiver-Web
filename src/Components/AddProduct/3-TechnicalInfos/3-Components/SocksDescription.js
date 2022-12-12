//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const SocksDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---------// Epaisseur combinaisaon*/}
      <DropDown
        data={TechnicalValue.MER.Néopréne["Epaisseur Jacket"]}
        name="Epaisseur"
      />
      {/* //-----------------// Taille combinaisaon*/}
      <DropDown data={TechnicalValue.COMMUN.Pointure} name="Pointure" />
      {/* //-----------------// Etat*/}
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
      {/* //---- Marque */}
    </div>
  );
};

export default SocksDescription;
