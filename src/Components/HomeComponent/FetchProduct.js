//-----// Css
import "./produit.scss";

//-----// Librairie
import { useEffect, useState } from "react";
//-----// Components
import ImgProduct from "./ImgProduct";
const FetchProduct = () => {
  const [data, setdata] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    try {
      // const fetchData = async () => {
      //const response = await // réponse
      // };
    } catch (error) {
      console.dir(error.message);
    }
  }, [data]);

  return (
    <div className="container-home-produit">
      <ImgProduct />
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
    </div>
  );
};

export default FetchProduct;
