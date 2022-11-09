//-----// Css
import "./produit.scss";

//-----// Librairie
import { useEffect, useState } from "react";
//-----// Components

import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const FetchProductSell = () => {
  const [data, setdata] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const addProductCollectionRef = collection(db, "newOfferForSell");

  useEffect(() => {
    try {
      const getProduct = async () => {
        const response = await getDocs(addProductCollectionRef);
        setdata(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data);
        setIsFetching(true);
      };
      getProduct();
    } catch (error) {
      console.dir(error.message);
    }
  }, []);

  return (
    <div className="container-home-produit">
      {isFetching === false ? (
        <div className="container-produit-description">
          <p>En Chargement...</p>
        </div>
      ) : (
        <>
          {data.map((data, index) => {
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
          })}
        </>
      )}
    </div>
  );
};

export default FetchProductSell;
