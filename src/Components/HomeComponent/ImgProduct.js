const ImgProduct = ({ data, index }) => {
  return (
    <div className="container-produit-description" key={index}>
      <img src="" alt="" className="image-produit" />
      <div className="bloc-image-nom">
        <img src="" alt="" />
        <span>Nom Vendeur</span>
      </div>
      <div className="container-titreProduit-description-prix">
        <span>{data.Produit}</span>
        <span>{data.Model}</span>
        <span style={{ color: "#508ae2" }}> {data.Price}</span>
      </div>
    </div>
  );
};

export default ImgProduct;
