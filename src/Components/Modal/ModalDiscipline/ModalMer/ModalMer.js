// Css
// import "./modalmer.scss";

//--------------// Components
import { UserContext } from "../../../../Context/UserContext";

//COMPONENTS
import CategorieButton from "../ComposantModal/CategorieButton";

//--------------// packages
import { useContext } from "react";

const ModalMer = () => {
  const { ToggleModal } = useContext(UserContext);
  return (
    //-----------------------------//Container Modal
    <div className="container-modal">
      {/* //-----------------------------//Overlay  */}
      <div
        className="overlay-modal-trigger"
        onClick={() => ToggleModal("closeAll")}
      ></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Disciplines</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => ToggleModal("Allcategories")}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>{" "}
          </div>
        </div>
        <div className="container-button">
          <CategorieButton modal="Apnee" value="Apnee" />
          <CategorieButton modal="BodyBoard" value="BodyBoard" />
          <CategorieButton modal="BodySurf" value="BodySurf" />
          <CategorieButton modal="Foil" value="Foil" />
          <CategorieButton modal="KiteSurf" value="KiteSurf" />
          <CategorieButton modal="Neoprene" value="Néoprene" />
          <CategorieButton modal="Surf" value="Surf" />
          <CategorieButton modal="SUP" value="SUP" />
          <CategorieButton modal="WindSurf" value="WindSurf" />
        </div>
      </div>
    </div>
  );
};

export default ModalMer;
