//CSS
import "./descriptionOffer.scss";

const DescriptionOffer = ({ data }) => {
  return (
    <div className="container-OfferDescription">
      <div className="title">
        <h3>Description annonce</h3>
      </div>
      <div className="container-p">
        <p>{data.offerDescription}</p>
      </div>
    </div>
  );
};

export default DescriptionOffer;
