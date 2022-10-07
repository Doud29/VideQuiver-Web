//--------------// Surf description css
import "../DescriptionProduit.scss";
import Planche from "../../../JSON/MER/SurfDescription/surfDescription.json";
import DropDownList from "../DropDownList";

//--------------// Composent
import TitleTechnicalInformation from "../TitleTechnicalInformations";
import { useState } from "react";
const SurfDescription = ({ technicalInformations, handleChange }) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      <DropDownList selected={selected} setSelected={setSelected} />
      {/* //-----------------// LISTE type de la planche //----------------//*/}
      <div className="selectdiv">
        <select
          type="text"
          value={technicalInformations.Type}
          onChange={handleChange}
          name="Type"
          id="Type"
          required="required"
        >
          {Planche.Type.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.content}
              </option>
            );
          })}
        </select>
        <span className="spanDescriptionInput">Type de planche</span>
      </div>

      {/* //-----------------// Niveau //----------------//*/}

      <div className="selectdiv">
        <select
          type="text"
          value={technicalInformations.Level}
          onChange={handleChange}
          name="Level"
          id="Level"
          required="required"
        >
          {Planche.Level.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.content}
              </option>
            );
          })}
        </select>
        <span className="spanDescriptionInput">Niveau requis</span>
      </div>

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

      {/* //-----------------// Boitier derives//----------------//*/}
      <div className="selectdiv">
        <select
          type="text"
          value={technicalInformations.Boitier}
          onChange={handleChange}
          name="Boitier"
          id="Boitier"
          required="required"
        >
          {Planche.Boitier.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.content}
              </option>
            );
          })}
        </select>
        <span className="spanDescriptionInput">Type de boitier</span>
      </div>

      {/* //-----------------// système de dérives  //----------------------//*/}
      <div className="selectdiv">
        <select
          value={technicalInformations.Derives}
          onChange={handleChange}
          name="Derives"
          id="Derives"
          required="required"
        >
          {Planche.Dérives.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.content}
              </option>
            );
          })}
        </select>
        <span className="spanDescriptionInput">Type de Dérives</span>
      </div>
      {/* //-----------------// Etat de la planche //----------------------//*/}
      <div className="selectdiv">
        <select
          value={technicalInformations.Etat}
          onChange={handleChange}
          name="Etat"
          id="Etat"
          required="required"
        >
          {Planche.Etat.map((data) => {
            return (
              <option key={data.id} value={data.value}>
                {data.content}
              </option>
            );
          })}
        </select>
        <span className="spanDescriptionInput">Etat de la planche</span>
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
        {/* //--------------------------// Volume //------------------------//*/}
        <div className="selectdiv">
          <select
            value={technicalInformations.Volume}
            onChange={handleChange}
            name="Volume"
            id="Volume"
            required="required"
          >
            {Planche.Litrage.map((data) => {
              return (
                <option key={data.id} value={data.value}>
                  {data.content}
                </option>
              );
            })}
          </select>
          <span className="spanDescriptionInput">Volume de la planche [L]</span>
        </div>
      </div>
    </div>
  );
};

export default SurfDescription;

// const handleChange = (event) => {
//   let value = event.target.value;
//   let name = event.target.name;

//   setTechnicalInformations((prevalue) => {
//     return {
//       ...prevalue,
//       [name]: value,
//     };
//   });
// };

/* <select
        type="text"
        value={surfDescriptionState.Marque}
        onChange={handleChange}
        name="Marque"
        id="Marque"
      >
        <option>Marque de la planche</option>
        <option value="Your Local Shaper">Your Local Shaper</option>
        <option value="Channel Island & Al Merrick">
          Channel Island & Al Merrick
        </option>
        <option value="Bic">Bic</option>
        <option value="Bing">Bing</option>
        <option value="Bradley Surfboards">Bradley Surfboards</option>
        <option value="Catch Surf">Catch Surf</option>
        <option value="Chilli Surfboards">Chilli Surfboards</option>
        <option value="Christenson">Christenson</option>
        <option value="DHD">DHD</option>
        <option value="Hurricanes">Hurricanes</option>
        <option value="JS SurfBoard">JS SurfBoard</option>
        <option value="Lost libTech">Lost libTech</option>
        <option value="LSD Surfboards">LSD Surfboards</option>
        <option value="Mick Fanning">Mick Fanning</option>
        <option value="Maurice Cole">Maurice Cole</option>
        <option value="Mark Richards">Mark Richards</option>
        <option value="NSP">NSP</option>
        <option value="Ocean & Earth">Ocean & Earth</option>
        <option value="Mark Phillips">Mark Phillips</option>
        <option value="Phil Grace">Phil Grace</option>
        <option value="Prism SurfBoards">Prism SurfBoards</option>
        <option value="Pukas">Pukas</option>
        <option value="Softeck">Softeck</option>
        <option value="SuperBrand Surfboard">SuperBrand Surfboard</option>
        <option value="Takayama">Takayama</option>
        <option value="Torq">Torq</option>
        <option value="Takoro">Takoro</option>
      </select> */
