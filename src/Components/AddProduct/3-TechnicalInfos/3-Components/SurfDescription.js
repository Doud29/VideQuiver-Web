//CSS
import "../DescriptionProduit.scss";

//COMPONENTS
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";

const SurfDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Type}
        name="Type de planche"
      />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Materiaux}
        name="Materiaux"
      />
      <DropDown data={TechnicalValue.COMMUN.Niveau} name="Niveau requis" />
      <DropDown data={TechnicalValue.COMMUN.Boitier} name="Type de boitier" />
      <DropDown
        data={TechnicalValue.COMMUN["Configuration ailerons"]}
        name="Configuration"
      />
      <DropDown
        data={TechnicalValue.COMMUN.Volume}
        name="Volume de la planche"
      />
      <DropDown data={TechnicalValue.COMMUN.Longueur} name="Longueur planche" />
      <DropDown data={TechnicalValue.COMMUN.Largeur} name="Largeur planche" />
      <DropDown
        data={TechnicalValue.COMMUN.Epaisseur}
        name="Épaisseur planche"
      />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default SurfDescription;
