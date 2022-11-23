import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const CategorieButton = ({ modal, value }) => {
  const { ToggleModal } = useContext(UserContext);

  return (
    <button onClick={() => ToggleModal(modal)}>
      <span>{value}</span>
      <ion-icon
        name="chevron-forward-outline"
        style={{ color: "#508ae2" }}
      ></ion-icon>
    </button>
  );
};

export default CategorieButton;
