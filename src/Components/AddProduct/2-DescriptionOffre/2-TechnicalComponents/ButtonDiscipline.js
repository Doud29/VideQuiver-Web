import { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const ButtonDiscipline = () => {
  const { ToggleModal, createOffer, setCreateOffer } = useContext(UserContext);

  const deleteExistingArray = () => {
    let newArray = createOffer.technicalInformations.slice(
      createOffer.technicalInformations.length
    );
    setCreateOffer({
      ...createOffer,
      technicalInformations: newArray,
      Product: "",
    });
  };

  return (
    <button
      className="discipline"
      onClick={() => {
        ToggleModal("Allcategories");
        deleteExistingArray();
      }}
    >
      <span>Produit</span>
      <div>
        <span id="product">{createOffer.Product}</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </button>
  );
};

export default ButtonDiscipline;
