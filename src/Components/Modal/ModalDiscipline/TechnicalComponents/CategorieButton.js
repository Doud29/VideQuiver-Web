import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const CategorieButton = () => {
  const { ToggleModal } = useContext(UserContext);

  return (
    <div className="container-button">
      <div onClick={() => ToggleModal("Sea")}>
        <span>Mer</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
      </div>{" "}
      <div onClick={() => ToggleModal("Mountain")}>
        <span>Montagne</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
      </div>
      <div
      // onClick={() => {
      //   setVolState(!volState);
      // }}
      >
        <span>Vol</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
      </div>
      <div
      // onClick={() => {
      //   setStreetState(!streetState);
      // }}
      >
        <span>Street</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
      </div>
    </div>
  );
};

export default CategorieButton;
