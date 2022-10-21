const CategorieButton = () => {
  return (
    <div className="container-button">
      <div
        onClick={() => {
          setModalState(true);
        }}
      >
        <span>Mer</span>
        <div className="chevronRight">{chevronRigth}</div>
      </div>{" "}
      <div
      // onClick={() => {
      //   setMontagneState(!montagneState);
      // }}
      >
        <span>Montagne</span>
        <div className="chevronRight">{chevronRigth}</div>
      </div>
      <div
      // onClick={() => {
      //   setVolState(!volState);
      // }}
      >
        <span>Vol</span>
        <div className="chevronRight">{chevronRigth}</div>
      </div>
      <div
      // onClick={() => {
      //   setStreetState(!streetState);
      // }}
      >
        <span>Street</span>
        <div className="chevronRight">{chevronRigth}</div>
      </div>
    </div>
  );
};

export default CategorieButton;
