const ImgProduct = () => {
  return (
    <div className="container-produit-description">
      <img src="" alt="" className="image-produit" />
      <div className="bloc-image-nom">
        <img src="" alt="" />
        <span>Nom Vendeur</span>
      </div>
      <div className="container-titreProduit-description-prix">
        <span>Titre produit</span>
        <span>Description produit</span>
        <span style={{ color: "#508ae2" }}>150 €</span>
      </div>
    </div>
  );
};

export default ImgProduct;
