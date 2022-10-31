//--------------// Css
import "./DescriptionProduit.scss";

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
      <DropDown
        data={TechnicalValue.MER.Néopréne.Epaisseur}
        name="Epaisseur de la combinaison"
      />
      {/* <select
        type="text"
        value={wetsuitDescriptionState.Epaisseur}
        onChange={handleChange}
        name="Epaisseur"
        id="Epaisseur"
      >
        <option>Epaisseur de la combinaison</option>
        <option value="5/3">5/3</option>
        <option value="4/3">4/3</option>
        <option value="3/2">3/2</option>
        <option value="0/5">0/5</option>
        <option value="1/1">1/1</option>
        <option value="2/2">2/2</option>
        <option value="1/5">1/5</option>
        <option value="5/4/3">5/4/3</option>
        <option value="6/4">6/4</option>
      </select> */}

      {/* //-----------------// Zip combinaisaon //----------------//*/}

      <select
        type="text"
        value={wetsuitDescriptionState.Zip}
        onChange={handleChange}
        name="Zip"
        id="Zip"
      >
        <option>Fermeture</option>
        <option value="Front">Front Zip</option>
        <option value="Back">Back Zip</option>
        <option value="Nozip">No zip</option>
      </select>

      {/* //-----------------// Taille combinaisaon //----------------//*/}

      <select
        type="text"
        value={wetsuitDescriptionState.Taille}
        onChange={handleChange}
        name="Taille"
        id="Taille"
      >
        <option>Taille de la combinaison</option>
        <option value="2XS">2XS</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>

      {/* //--------------------// Genre //------------------//*/}

      <select
        type="text"
        value={wetsuitDescriptionState.Genre}
        onChange={handleChange}
        name="Taille"
        id="Taille"
      >
        <option>Genre</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
        <option value="Junior">Enfant</option>
      </select>

      {/* //--------------------// Marque //------------------//*/}

      <input
        type="text"
        placeholder="Marque"
        name="Marque"
        id="Marque"
        onChange={handleChange}
      />

      {/* //-----------------// Etat Combinaison //----------------------//*/}
      <select
        value={wetsuitDescriptionState.Etat}
        onChange={handleChange}
        name="Etat"
        id="Etat"
      >
        <option>Etat de la combinaison</option>
        <option value="Neuf">Neuf</option>
        <option value="Très bon état">Très bon état</option>
        <option value="Bon état">Bon état</option>
        <option value="Etat correct">Etat correct</option>
        <option value="Mauvais Etat">Mauvais Etat</option>
      </select>

      {/* //-----------------// Prix //----------------------//*/}

      {/* <input
        type="text"
        placeholder="Prix de vente [€]"
        name="Prix"
        id="Prix"
        onChange={handleChange}
      /> */}
      {JSON.stringify(wetsuitDescriptionState)}
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
        <option value="Soöruz">Sowe</option>
        <option value="SRFACE">SRFACE</option>
        <option value="Storm">Storm</option>
        <option value="Storm">Venice</option>
        <option value="Storm">Vissla</option>
        <option value="Xcel">Xcel</option>
      </select> */
