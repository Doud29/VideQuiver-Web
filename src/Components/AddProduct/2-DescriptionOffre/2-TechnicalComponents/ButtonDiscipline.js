import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const ButtonDiscipline = () => {
  const { ToggleModal, createOffer } = useContext(UserContext);
  console.log(createOffer);
  return (
    <button className="Discipline" onClick={() => ToggleModal("categories")}>
      <span>Produit</span>
      <div>
        <span id="product">{createOffer.Produit}</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </button>
  );
};

export default ButtonDiscipline;
