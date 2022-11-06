//-----// Css
import "./produit.scss";

//-----// Librairie
import { useEffect, useState } from "react";
//-----// Components

import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ImgProduct from "./ImgProduct";

const FetchProduct = () => {
  const [data, setdata] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const addProductCollectionRef = collection(db, "addProduct");

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
        <p>En Chargement...</p>
      ) : (
        <>
          {data.map((data, index) => {
            return <ImgProduct data={data} index={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default FetchProduct;
