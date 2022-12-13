import "./technicalInformationsOffer.scss";

const TechnicalInformationsOffer = ({ data }) => {
  //   console.log(data["Technical informations"]);

  //   const newArr = data["Technical informations"].filter((el) => {});
  //   console.log(newArr);
  return (
    <div className="container-technicalInformations">
      <div className="title">
        <h3>Informations techniques</h3>
      </div>

      {data["Technical informations"].map((infos, index) => {
        // console.log(infos);
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
