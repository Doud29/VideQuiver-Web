//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const CombinaisonDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown data={TechnicalValue.MER.Néopréne.Epaisseur} name="Épaisseur" />
      <DropDown data={TechnicalValue.MER.Néopréne.Fermeture} name="Fermeture" />
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      <DropDown data={TechnicalValue.COMMUN.Genre} name="Genre" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default CombinaisonDescription;
