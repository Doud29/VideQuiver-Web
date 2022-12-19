//COMPONENTS
import TitleTechnicalInformation from "../../1-Title/TitleTechnicalInformations";
import DropDown from "../../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../../JSON/Technical-informations.json";

const TwinTip = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.KiteSurf.TwinTip.Programme}
        name="Programme"
      />
      <DropDown
        data={TechnicalValue.MER.KiteSurf.TwinTip.Longueur}
        name="Longueur"
      />
      <DropDown
        data={TechnicalValue.MER.KiteSurf.TwinTip.Largeur}
        name="Largeur"
      />
      <DropDown data={TechnicalValue.COMMUN.Niveau} name="Niveau" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default TwinTip;
