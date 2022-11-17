//CSS
import "../DescriptionProduit.scss";

//--------------// Composent
import TitleTechnicalInformation from "../1-Title/TitleTechnicalInformations";
import DropDown from "../2-TechnicalComponents/DropDownList/DropDown";
import TechnicalValue from "../../../../JSON/Technical-informations.json";
import InputField from "../2-TechnicalComponents/InputField/InputField";

const CombinaisonDescription = () => {
  return (
    <div className="container-description">
      <TitleTechnicalInformation />
      {/* //---------// Epaisseur combinaisaon*/}
      <DropDown data={TechnicalValue.MER.Néopréne.Epaisseur} name="Epaisseur" />
      {/* //-----------------// Zip combinaisaon*/}
      <DropDown data={TechnicalValue.MER.Néopréne.Fermeture} name="Fermeture" />
      {/* //-----------------// Taille combinaisaon*/}
      <DropDown data={TechnicalValue.COMMUN.Taille} name="Taille" />
      {/* //-----------------// Genre */}
      <DropDown data={TechnicalValue.COMMUN.Genre} name="Genre" />
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

export default CombinaisonDescription;

/* <select
        type="text"
        value={wetsuitDescriptionState.Marque}
        onChange={handleChange}
        name="Marque"
        id="Marque"
      >
        <option>Marque</option>
        <option value="Adrenaline">Adrenaline</option>
        <option value="Artflex">Artflex</option>
        <option value="AutodidaKt">AutodidaKt</option>
        <option value="Billabong">Billabong</option>
        <option value="C-Skins">C-Skins</option>
        <option value="Chipiron">Chipiron</option>
        <option value="Coastlines">Coastlines</option>
        <option value="Coolum Boardroom">Coolum Boardroom</option>
        <option value="Deeply">Deeply</option>
        <option value="DHD">DHD</option>
        <option value="Gyroll">Gyroll</option>
        <option value="Hurley">Hurley</option>
        <option value="Hurley">Hoalen</option>
        <option value="Isurus">Isurus</option>
        <option value="Ion">Ion</option>
        <option value="Kynay">Kynay</option>
        <option value="Manusurf">Manusurf</option>
        <option value="Mdns">Mdns</option>
        <option value="Moors">Moors</option>
        <option value="Mystique">Mystique</option>
        <option value="Nche">Nche</option>
        <option value="O'Neil">O'Neil</option>
        <option value="Oakley">Oakley</option>
        <option value="Ocean & Earth">Ocean & Earth</option>
        <option value="Olaian">Olaian</option>
        <option value="Onda">Onda</option>
        <option value="Patagonia">Patagonia</option>
        <option value="Picture">Picture</option>
        <option value="Prime">Prime</option>
        <option value="Prolimit">Prolimit</option>
        <option value="Quicksilver">Quicksilver</option>
        <option value="Radz">Radz</option>
        <option value="Raw">Raw</option>
        <option value="Prime">Prime</option>
        <option value="Ripcurl">Ripcurl</option>
        <option value="Roark">Roark</option>
        <option value="RVCA">RVCA</option>
        <option value="Sen no Sen">Sen no Sen</option>
        <option value="SISSTREVOLUTION">SISSTREVOLUTION</option>
        <option value="Soöruz">Soöruz</option>
        <option value="Sowe">Sowe</option>
        <option value="SRFACE">SRFACE</option>
        <option value="Storm">Storm</option>
        <option value="Venice">Venice</option>
        <option value="Vissla">Vissla</option>
        <option value="Xcel">Xcel</option>
      </select> */
