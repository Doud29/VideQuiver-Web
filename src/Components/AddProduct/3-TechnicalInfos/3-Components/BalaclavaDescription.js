//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const BalaclavaDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.Néopréne["Epaisseur Jacket"]}
        name="Epaisseur"
      />
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default BalaclavaDescription;
