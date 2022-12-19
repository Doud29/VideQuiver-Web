//CSS
import "./information.scss";

const Informations = ({ data }) => {
  const Objet = data.technicalInformations.find((el) => el.Type === "État");
  return (
    <>
      <div className="container-information">
        <div className="container-model-price">
          <h3>{data.Model}</h3>
          <h3>{data.Price} €</h3>
        </div>
        <div className="container-etat">
          <span style={{ fontWeight: "600", marginRight: "5px" }}>État : </span>
          <span>{Objet.valeur}</span>
        </div>
      </div>
    </>
  );
};

export default Informations;
