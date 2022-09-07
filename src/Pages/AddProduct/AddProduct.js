//--------------// Css
import "./addProduct.scss";

//--------------// Components
import ModalDiscipline from "../../Components/Modal/ModalDiscipline/ModalDiscipline";

//--------------// packages
import { Link } from "react-router-dom";
import { useState } from "react";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const chevronRigth = <FontAwesomeIcon icon={faChevronRight} />;

const AddProduct = () => {
  //------------------// State Modal Discipline
  const [disciplineState, setDisciplineState] = useState(false);
  return (
    <div className="container-addProduct">
      {/* //-----------------------// Condition pour faire apparaitre ModalDiscipline //------------// */}
      {disciplineState === true ? (
        <ModalDiscipline setDisciplineState={setDisciplineState} />
      ) : (
        <></>
      )}
      {/* //-----------------------// Container Haeder pour revenir en arrière //-----------------------// */}
      <div className="bloc-header">
        <p>Vendre un article</p>
        <div className="bloc-arrowLeft">
          <Link to="/home" style={{ color: "grey" }}>
            {arrowLeft}
          </Link>
        </div>
      </div>
      {/* //-----------------------// Container ajout image//-----------------------// */}
      <div className="bloc-photo">
        <input type="file" id="image" />
        <label htmlFor="image" id="image-file">
          <p>Ajouter des photos</p>
        </label>
      </div>
      {/* //-----------------------// Container description produit//-----------------------// */}
      <div className="container-input-button">
        <input type="text" placeholder="Modèle" id="model" />
        <input type="text" placeholder="Description" id="description" />
        <button
          className="Discipline"
          onClick={() => {
            setDisciplineState(!disciplineState);
          }}
        >
          <span>Discipline</span>
          <div>{chevronRigth}</div>
        </button>
      </div>
      {/* //-----------------------// Container information général & techniques//-----------------------// */}

      <div className="container-techniques-generales">bloc</div>
    </div>
  );
};

export default AddProduct;
