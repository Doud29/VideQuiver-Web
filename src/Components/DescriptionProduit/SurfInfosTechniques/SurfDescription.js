//--------------// Surf description css
import "../DescriptionProduit.scss";
import DropDown from "../DropDownList/DropDown.js";
import TechnicalValue from "../../../JSON/Technical-informations.json";

//--------------// Composent
import TitleTechnicalInformation from "../TitleTechnicalInformations";

const SurfDescription = ({ technicalInformations, handleChange }) => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Type}
        name="Type de planche"
      />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Niveau}
        name="Niveau requis"
      />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Boitier}
        name="Type de boitier"
      />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Dérives}
        name="Type de Dérives"
      />
      <DropDown
        data={TechnicalValue.MER.Surf["Planche de surf"].Litrage}
        name="Volume de la planche [L]"
      />
      {/* //-----------------// LISTE des Marques  //----------------------//*/}
      <div className="inputdiv">
        <input
          type="text"
          placeholder=" "
          value={technicalInformations.Marque}
          name="Marque"
          id="Marque"
          onChange={handleChange}
          autoComplete="off"
        />
        <span className="spanDescriptionInput">Marque</span>
      </div>

      <div className="container-dimension">
        {/* //--------------------------// Dimension //------------------------//*/}
        <div className="inputdiv">
          <input
            type="text"
            placeholder=" "
            value={technicalInformations.Dimension}
            name="Dimension"
            id="Dimension"
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="spanDescriptionInput">Dimensions</span>
          <div>
            <ion-icon
              style={{ color: "grey" }}
              name="information-circle-outline"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurfDescription;
