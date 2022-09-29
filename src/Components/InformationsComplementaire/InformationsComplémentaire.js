const InformationsComplémentaire = ({
  technicalInformations,
  handleChange,
}) => {
  return (
    <div className="container-description">
      <div className="container-titre">
        <div className="line"></div>
        <h3>Prix et Livraison</h3>
      </div>
      <div className="inputdiv">
        <input
          type="text"
          placeholder=" "
          value={technicalInformations.Prix}
          name="Prix"
          id="Prix"
          onChange={handleChange}
          autoComplete="off"
        />
        <span className="spanDescriptionInput">Prix de l'annonce</span>
      </div>
      <div className="inputdiv">
        <input
          type="text"
          placeholder=" "
          value={technicalInformations.Adresse}
          name="Adresse"
          id="Adresse"
          onChange={handleChange}
          autoComplete="off"
        />
        <span className="spanDescriptionInput"></span>
      </div>
    </div>
  );
};

export default InformationsComplémentaire;
