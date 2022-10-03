//--------------// Composent
import TitleTechnicalInformation from "./TitleTechnicalInformations";

const SurfDescription = ({ technicalInformations, handleChange }) => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
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
          <option value={null}></option>
          <option value="0">Je ne sais pas</option>
          <option value="Shortboard">ShortBoard</option>
          <option value="Longboard">Longboard</option>
          <option value="MiniMalibu">MiniMalibu</option>
          <option value="Mousse">Mousse</option>
          <option value="Fish">Fish</option>
          <option value="Hybride">Hybride</option>
          <option value="Egg">Egg</option>
          <option value="Evolutive">Evolutive</option>
          <option value="Gun">Gun</option>
          <option value="Enfant">Enfant</option>
          <option value="Retro">Retro</option>
        </select>
        <span className="spanDescriptionInput">Type de planche</span>
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
          <option value={null}></option>
          <option value="0">Je ne sais pas</option>
          <option value="Futures">Débutant</option>
          <option value="FCS1">Intermédiaire</option>
          <option value="FCS1F">Confirmé</option>
        </select>
        <span className="spanDescriptionInput">Niveau requis</span>
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
          <option value={null}></option>
          <option value="0">Je ne sais pas</option>
          <option value="Futures">Boitier Futures</option>
          <option value="FCS1">Boitier FCS1</option>
          <option value="FCS1F">Boitier FCS1 Fusion</option>
          <option value="FCS2">Boitier FCS2 </option>
          <option value="us">Boitier U.S</option>
          <option value="Tuttle">Boitier Tuttle</option>
          <option value="Soft">Boitier SoftBoard</option>
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
          <option value={null}></option>
          <option value="0">Je ne sais pas</option>
          <option value="Single">Single(1)</option>
          <option value="Twin">Twin(2)</option>
          <option value="Thruster">Thruster(3)</option>
          <option value="Quad">Quad(4)</option>
          <option value="Combo">Combo(5)</option>
          <option value="Boitier US 2+1">Boitier US 2+1</option>
          <option value="Boitier US 4+1">Boitier US 4+1</option>
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
          <option value={null}></option>
          <option value="Neuf">Neuf</option>
          <option value="Très bon état">Très bon état</option>
          <option value="Bon état">Bon état</option>
          <option value="Etat correct">Etat correct</option>
          <option value="Mauvais Etat">Mauvais Etat</option>
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
            <option value={null}></option>
            <option value="0">Je ne sais pas</option>
            <option value="14L">14L</option>
            <option value="15L">15L</option>
            <option value="16L">16L</option>
            <option value="17L">17L</option>
            <option value="18L">18L</option>
            <option value="19L">19L</option>
            <option value="20L">20L</option>
            <option value="21L">21L</option>
            <option value="22L">22L</option>
            <option value="23L">23L</option>
            <option value="24L">24L</option>
            <option value="25L">25L</option>
            <option value="26L">26L</option>
            <option value="27L">27L</option>
            <option value="28L">28L</option>
            <option value="29L">29L</option>
            <option value="30L">30L</option>
            <option value="31L">31L</option>
            <option value="32L">32L</option>
            <option value="33L">33L</option>
            <option value="34L">34L</option>
            <option value="35L">35L</option>
            <option value="36L">36L</option>
            <option value="37L">37L</option>
            <option value="38L">38L</option>
            <option value="39L">39L</option>
            <option value="40L">40L</option>
            <option value="41L">41L</option>
            <option value="42L">42L</option>
            <option value="43L">43L</option>
            <option value="44L">44L</option>
            <option value="45L">45L</option>
            <option value="46L">46L</option>
            <option value="47L">47L</option>
            <option value="48L">48L</option>
            <option value="49L">49L</option>
            <option value="50L">50L</option>
            <option value="51L">51L</option>
            <option value="52L">52L</option>
            <option value="53L">53L</option>
            <option value="54L">54L</option>
            <option value="55L">55L</option>
            <option value="56L">56L</option>
            <option value="57L">57L</option>
            <option value="58L">58L</option>
            <option value="59L">59L</option>
            <option value="60L">60L</option>
            <option value="61L">61L</option>
          </select>
          <span className="spanDescriptionInput">
            Volume de la planche [Litre]
          </span>
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
