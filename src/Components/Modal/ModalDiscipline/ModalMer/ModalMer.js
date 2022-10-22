//--------------// Css
// import "./modalmer.scss";

//--------------// Components
import { UserContext } from "../../../../Context/UserContext";

//--------------// packages
// import { Link } from "react-router-dom";
import { useContext } from "react";

const ModalMer = ({}) => {
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
            onClick={() => ToggleModal("categories")}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>{" "}
          </div>
        </div>
        <div className="container-button">
          <div
            onClick={() => {
              // setCombinaisonStaTe(true);
            }}
          >
            <span>Néoprène </span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>
          <div onClick={() => ToggleModal("Surf")}>
            <span>Surf</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>{" "}
          <div onClick={() => ToggleModal("BodyBoard")}>
            <span>BodyBoard</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>{" "}
          <div onClick={() => ToggleModal("BodySurf")}>
            <span>BodySurf</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>{" "}
          {/* <div onClick={() => setfoilState(true)}>
            <span>Foil</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>{" "}

          </div> */}
          <div onClick={() => ToggleModal("KiteSurf")}>
            <span>KiteSurf</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>
          <div onClick={() => ToggleModal("WindSurf")}>
            <span>WindSurf</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>
          <div onClick={() => ToggleModal("SUP")}>
            <span>StandUpPaddle</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>
          <div onClick={() => ToggleModal("Apnee")}>
            <span>Apnée</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMer;
