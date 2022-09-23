const InformationsLivraison = ({ technicalInformations, handleChange }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="container-titre">
        <div className="line"></div>
        <h3>Informations livraison </h3>
      </div>
      <div className="container-description">
        <div className="inputdiv ">
          <input
            type="text"
            placeholder=" "
            value={technicalInformations.Prix}
            name="Prix"
            id="Prix"
            onChange={handleChange}
            required="required"
          />
          <span className="spanDescriptionInput">Prix de vente</span>
        </div>
        <div className="inputdiv ">
          <input
            type="text"
            placeholder=" "
            value={technicalInformations.Adresse}
            name="Adresse"
            id="Adresse"
            onChange={handleChange}
            required="required"
          />
          <span className="spanDescriptionInput">Adresse</span>
        </div>
      </div>
    </div>
  );
};

export default InformationsLivraison;
