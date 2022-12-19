import "./technicalInformationsOffer.scss";

const TechnicalInformationsOffer = ({ data }) => {
  return (
    <div className="container-technicalInformations">
      <div className="title">
        <h3>Informations techniques</h3>
      </div>

      {data.technicalInformations.map((infos, index) => {
        return (
          <div key={index} className="container-span">
            <span style={{ fontWeight: "600", marginRight: "5px" }}>
              {infos.Type} :
            </span>
            <span>{infos.valeur}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TechnicalInformationsOffer;
