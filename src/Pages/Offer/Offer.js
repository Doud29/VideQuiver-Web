//CSS
import "./offer.scss";

//COMPONENTS
import ImagesSlider from "../../Components/Offer/ImagesSlider";
import Informations from "../../Components/Offer/Information";
import TechnicalInformationsOffer from "../../Components/Offer/TechnicalInformationsOffer";
import DescriptionOffer from "../../Components/Offer/DescriptionOffer";
//PACKAGEs
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//DB
import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const Offer = () => {
  const params = useParams();

  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    const getOneProduct = async () => {
      //REF
      const docRef = doc(db, "newOfferForSell", params.id);
      try {
        const response = await getDoc(docRef);
        // console.log(response.data());
        setData(response.data());
        setIsloading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getOneProduct();
  }, [params.id]);

  return (
    <>
      {isLoading === false ? (
        <div className="container-ring">
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
      ) : (
        <div className="container-offer">
          <Link to="/home">
            <div className="close">
              <ion-icon name="close-circle-sharp"></ion-icon>
            </div>
          </Link>
          <ImagesSlider slides={data.urls} />
          <Informations data={data} />
          <TechnicalInformationsOffer data={data} />
          <DescriptionOffer data={data} />
        </div>
      )}
    </>
  );
};

export default Offer;
