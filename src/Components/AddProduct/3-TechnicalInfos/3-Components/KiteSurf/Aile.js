//--------------// Composent
import TitleTechnicalInformation from "../../1-Title/TitleTechnicalInformations";
import DropDown from "../../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../../JSON/Technical-informations.json";

const Aile = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.KiteSurf.Aile.Programme}
        name="Programme"
      />
      <DropDown
        data={TechnicalValue.MER.KiteSurf.Aile.Surface}
        name="Longueur"
      />
      <DropDown data={TechnicalValue.COMMUN.Niveau} name="Niveau" />
      <DropDown data={TechnicalValue.COMMUN.Etat} name="État" />
    </div>
  );
};

export default Aile;
