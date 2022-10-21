const ButtonDiscipline = ({
  Produit,
  setOpenModalState,
  setChoiceValidatedForSellState,
}) => {
  return (
    <button
      className="Discipline"
      onClick={() => {
        setOpenModalState(true);
        setChoiceValidatedForSellState(false);
      }}
    >
      <span>Produit</span>
      <div>
        <span id="product">{Produit}</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </button>
  );
};

export default ButtonDiscipline;
