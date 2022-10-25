//--------------// Css
import "./modalCategories.scss";

//--------------// Components
import CategorieButton from "./TechnicalComponents/CategorieButton";
//--------------// packages
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const ModalCategories = () => {
  const { ToggleModal } = useContext(UserContext);

  return (
    //-----------------------------//Container Modal
    <div className="container-modal">
      {/* //-----------------------// Condition pour faire apparaitre ModalMer avec l'ensemble des sport aquatiques //------------// */}
      <div
        className="overlay-modal-trigger"
        onClick={() => ToggleModal("closeAll")}
      ></div>
      {/* //-----------------------------//Modal et son contenu */}
      <div className="modal">
        <div className="bloc-header">
          <p>Catégories</p>
          <div
            className="bloc-arrowLeft"
            onClick={() => ToggleModal("closeAll")}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>{" "}
          </div>
        </div>
        <CategorieButton />
      </div>
    </div>
  );
};

export default ModalCategories;
