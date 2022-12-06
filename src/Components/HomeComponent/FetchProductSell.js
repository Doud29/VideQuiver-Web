//-----// Css
import "./produit.scss";

//-----// Librairie
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//-----// Components
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

//-----// Packages
import { Oval } from "react-loader-spinner";
const FetchProductSell = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    //REF
    const addProductCollectionRef = collection(db, "newOfferForSell");
    try {
      const getProduct = async () => {
        const response = await getDocs(addProductCollectionRef);
        setdata(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
          <div className="oval">
            {" "}
            <Oval
              height={40}
              width={40}
              color="#508ae2"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#555555"
              strokeWidth={3}
              strokeWidthSecondary={3}
            />
          </div>
        </div>
      ) : (
        // </div>
        <>
          {data.map((data, index) => {
            return (
              <div
                className="container-produit-description"
                key={index}
                onClick={() => {
                  navigate(`offer/${data.id}`);
                }}
              >
                <img src={data.urls[0]} alt="" className="image-produit" />
                <div className="bloc-image-nom">
                  <img src="" alt="" />
                  <span>Nom Vendeur</span>
                </div>
                <div className="container-titreProduit-description-prix">
                  <span>{data.Product}</span>
                  <span>
                    {data.Marque} | {data.Model} |{" "}
                    {data["Technical informations"][0].Epaisseur}
                  </span>
                  <span style={{ color: "#508ae2" }}> {data.Price} €</span>
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
