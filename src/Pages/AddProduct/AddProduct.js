//----------// Css
import "./addProduct.scss";

//----------// Modaux
import ModalCategories from "../../Components/Modal/ModalDiscipline/ModalCatégories/ModalCategories";
import ModalMer from "../../Components/Modal/ModalDiscipline/ModalMer/ModalMer";
import ModalSurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalSurf";
import ModalApnee from "../../Components/Modal/ModalDiscipline/ModalMer/ModalApnee";
import ModalBodyBoard from "../../Components/Modal/ModalDiscipline/ModalMer/ModalBodyBoard";
import ModalKiteSurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalKiteSurf";
import ModalBodySurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalBodySurf";
import ModalSup from "../../Components/Modal/ModalDiscipline/ModalMer/ModalSup";
import ModalWindSurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalWindSurf";
import ModalNeoprene from "../../Components/Modal/ModalDiscipline/ModalMer/ModalNeoprene";
//----------// Technical Surf Components
import SurfDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfDescription";
import DerivesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/DeriveDescription";
// import { DescriptionContext } from "../../Context/DescriptionContext";
import LeashDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashDescription";
import PadDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/PadDescription";
import GiletImpact from "../../Components/AddProduct/3-TechnicalInfos/3-Components/GiletImpact";
import AccessoriesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/AccessoriesDescription";
import SurfLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfLuggageDescription";
import BodyBoardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BodyBoardDescription";
//----------// Technical Bodyboard Components
import FinBodyboardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/FinBodyBoardDescription";
import BodyBoardLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BodyBoardLuggageDescription";
import LeashBodyBoardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashBodyBoardDescription";
//----------// Technical Neoprene Components
import JacketDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/JacketDescription";
import WetSuitDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/WetSuitDescription";
import SocksDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SocksDescription";
import LycraDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LycraDescription";
import BalaclavaDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BalaclavaDescription";
import GlovesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/GlovesDescription";
// import InformationsComplémentaire from "../../Components/InformationsComplementaire/InformationsComplémentaire";
import HeaderAddProduct from "../../Components/AddProduct/0-HeaderAddProduct/HeaderAddProduct";
//----------// Technical KiteSurf
import TwinTip from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/TwinTip";
import Aile from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/Aile";
import Barre from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/Barre";
import Harnais from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/Harnais";

//----------// Components
import DragnDrop from "../../Components/AddProduct/1-DrapNDrop/DragnDrop";
import SwitchSelection from "../../Components/AddProduct/5-SwicthSelection/SwitchSelection";
import OfferDescription from "../../Components/AddProduct/2-DescriptionOffre/OfferDescription";
import AdditionalInformation from "../../Components/AddProduct/6-additional information/AdditionalInformation";
import SubmitButton from "../../Components/AddProduct/7-SubmitButton/SubmitButton";

//---------// Context
import { UserContext } from "../../Context/UserContext";
//---------// packages
import { useState, useContext } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
// //---------// Firebase
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  //----// Erro MESSAGE
  const [errorMessage, setErrorMessage] = useState([]);
  //DISPLAY IMAGES
  const [imageUpload, setImageUpload] = useState([]);
  //UPLOAD OFFER
  // const [isOfferUpload, setIsOfferUpload] = useState(false);
  //---// CONTEXT
  const { openModalState, createOffer, currentUser, setCreateOffer } =
    useContext(UserContext);

  //---//REF DB FIRESTORE
  const newProductForSellCollectionRef = collection(db, "newOfferForSell");
  const newProductForRentCollectionRef = collection(db, "newOfferForRent");

  //---// Navigate
  const navigate = useNavigate();
  // console.log(errorMessage);
  //---// fonction pour soumetre la demande de vente et location
  const SubmitOffer = (e) => {
    // setIsOfferUpload(true);
    // setTimeout(() => {
    //   setIsOfferUpload(false);
    // }, 5000);

    // console.log(createOffer);

    e.preventDefault();
    //MESSAGE ERREUR DESCRIPTION OFFRE
    if (createOffer.sell === false && createOffer.rent === false) {
      return setErrorMessage("* S'agit-il d'une vente ou d'une location?");
    }
    if (!createOffer.Product) {
      return setErrorMessage("* Veuillez renseinger un produit");
    }
    if (!createOffer.Model) {
      return setErrorMessage("* Veuillez renseinger un modèle");
    }
    if (!createOffer.Brand) {
      return setErrorMessage("* Veuillez renseinger une marque");
    }
    if (!createOffer.offerDescription) {
      return setErrorMessage("* Veuillez Décrire votre produit");
    }
    //MESSAGE ERREUR INFORMATIONS TECHNIQUES
    //PLANCHE DE SURF
    if (
      createOffer["Technical informations"].length !== 10 &&
      createOffer.Product === "Planche de Surf"
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //DERIVES - LEASH DE SURF - VESTE NEOPRENE - AILE
    if (
      createOffer["Technical informations"].length !== 4 &&
      (createOffer.Product === "Dérives de surf" ||
        createOffer.Product === "Leash de surf" ||
        createOffer.Product === "Veste néopréne" ||
        createOffer.Product === "Aile de Kite Surf" ||
        createOffer.Product === "Harnais de Kite Surf")
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //PAD DE SURF - PALMES DE BODYBOARD
    if (
      createOffer["Technical informations"].length !== 2 &&
      (createOffer.Product === "Pad de surf" ||
        createOffer.Product === "Palmes de bodyboard")
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //GILET IMPACT - LYCRA - CHAUSSONS - BONNETS - PlANCHE DE BODYBOARD - BAGAGERIE BODYBOARD
    if (
      createOffer["Technical informations"].length !== 3 &&
      (createOffer.Product === "Gilet Impact de surf" ||
        createOffer.Product === "Lycra / Top" ||
        createOffer.Product === "Chaussons néopréne" ||
        createOffer.Product === "Cagoules / Bonnets" ||
        createOffer.Product === "Gants néopréne" ||
        createOffer.Product === "Planche de bodyboard" ||
        createOffer.Product === "Bagagerie de bodyboard")
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //ACCESSOIRES DE SURF - LEASH BODY BOARD - BARRE DE KITE
    if (
      createOffer["Technical informations"].length !== 1 &&
      (createOffer.Product === "Accessoires de surf" ||
        createOffer.Product === "Leash coil" ||
        createOffer.Product === "Accessoires de bodyboard" ||
        createOffer.Product === "Barre de Kite Surf")
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //BAGAGERIE DE SURF - COMBINAISON - TWINTIP
    if (
      createOffer["Technical informations"].length !== 5 &&
      (createOffer.Product === "Bagagerie de surf" ||
        createOffer.Product === "Combinaison intégrale" ||
        createOffer.Product === "Combinaison shorty" ||
        createOffer.Product === "Long John" ||
        createOffer.Product === "Twin-Tip de Kite Surf")
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }

    if (!createOffer.Price) {
      return setErrorMessage("* Veuillez renseigner le prix");
    }
    //---//upload on firebase
    if (imageUpload === null) {
      return setErrorMessage("* Veuillez sélectionner au moins une photo");
      // return;
    }
    //----//UPLOAD ON FIREBASE
    // const uploadMultipleImagesAndAddOffer = async () => {
    //   const newObj = { ...createOffer };
    //   try {
    //     //UPLOAD IMAGE
    //     for (let i = 0; i < imageUpload.length; i++) {
    //       console.log(imageUpload[i]);
    //       let file = imageUpload[i];
    //       // REF DB FIREBASE
    //       const imageRef = ref(
    //         storage,
    //         `Images/${currentUser.uid}/${createOffer.Product}/${file.name}`
    //       );
    //       // SNAPSHOT
    //       const snapshot = await uploadBytes(imageRef, file);
    //       //URL FIREBASE
    //       const downloadURL = await getDownloadURL(snapshot.ref);
    //       // console.log(downloadURL);
    //       newObj.urls.push(downloadURL);
    //     }
    //     console.log(newObj);
    //     console.log("images envoyées");
    //     // SELL
    //     if (newObj.sell === true && newObj.rent === false) {
    //       console.log("condition de vente respecté");
    //       await addDoc(newProductForSellCollectionRef, newObj);
    //       console.log("data sell envoyé");
    //       setErrorMessage("");
    //       // navigate("/home");
    //     }
    //     console.log("annoncé déposé");
    //     //RENT
    //     if (newObj.sell === false && newObj.rent === true) {
    //       await addDoc(newProductForRentCollectionRef, newObj);
    //       // window.location.reload(false);
    //       // console.log("data rent envoyé");
    //       // setIsOfferUpload(true);
    //       navigate("/home");
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    // uploadMultipleImagesAndAddOffer();
  };

  return (
    <>
      <div className="container-addProduct">
        {/* {isOfferUpload && (
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
        )} */}
        {/* //----// Disciplines */}
        {openModalState.modalCategorie && <ModalCategories />}
        {/* //----// Catégories */}
        {openModalState.modalMer && <ModalMer />}
        {/* //----// SportMer */}
        {openModalState.modalSurf && <ModalSurf />}
        {openModalState.modalBodyBoard && <ModalBodyBoard />}
        {openModalState.modalSup && <ModalSup />}
        {openModalState.modalWindSurf && <ModalWindSurf />}
        {openModalState.modalkiteSurf && <ModalKiteSurf />}
        {/* {openModalState.N && <ModalNeoprene  />} */}
        {openModalState.modalBodySurf && <ModalBodySurf />}
        {openModalState.modalApnee && <ModalApnee />}
        {openModalState.modalNeoprene && <ModalNeoprene />}
        <HeaderAddProduct />
        {/*  */}
        <DragnDrop imageUpload={imageUpload} setImageUpload={setImageUpload} />
        <div className="container-descriptionOffer">
          <SwitchSelection />
          <OfferDescription />
          {/* 
//------------// MER 
//------------// Composents Surf 
           */}
          {createOffer.Product === "Planche de Surf" && <SurfDescription />}
          {createOffer.Product === "Dérives de surf" && <DerivesDescription />}
          {createOffer.Product === "Gilet Impact de surf" && <GiletImpact />}
          {createOffer.Product === "Pad de surf" && <PadDescription />}
          {createOffer.Product === "Leash de surf" && <LeashDescription />}
          {createOffer.Product === "Accessoires de surf" && (
            <AccessoriesDescription />
          )}
          {createOffer.Product === "Bagagerie de surf" && (
            <SurfLuggageDescription />
          )}
          {/*
//-----------// Composents BodyBoard */}
          {createOffer.Product === "Planche de bodyboard" && (
            <BodyBoardDescription />
          )}
          {createOffer.Product === "Palmes de bodyboard" && (
            <FinBodyboardDescription />
          )}
          {createOffer.Product === "Bagagerie de bodyboard" && (
            <BodyBoardLuggageDescription />
          )}
          {createOffer.Product === "Leash coil" && (
            <LeashBodyBoardDescription />
          )}
          {createOffer.Product === "Accessoires de bodyboard" && (
            <AccessoriesDescription />
          )}
          {/*
//-----------// Composents Neoprene */}
          {createOffer.Product === "Combinaison intégrale" && (
            <WetSuitDescription />
          )}
          {createOffer.Product === "Combinaison shorty" && (
            <WetSuitDescription />
          )}
          {createOffer.Product === "Long John" && <WetSuitDescription />}
          {createOffer.Product === "Lycra / Top" && <LycraDescription />}
          {createOffer.Product === "Veste néopréne" && <JacketDescription />}
          {createOffer.Product === "Chaussons néopréne" && <SocksDescription />}
          {createOffer.Product === "Cagoules / Bonnets" && (
            <BalaclavaDescription />
          )}
          {createOffer.Product === "Gants néopréne" && <GlovesDescription />}
          {/*
//----------------------------------------------//  
//-----------// Composents BodySurf //----------// 
//----------------------------------------------//   */}
          {/*
//----------------------------------------------//  
//-----------// Composents Kite Surf //---------// 
//----------------------------------------------//   */}
          {createOffer.Product === "Twin-Tip de Kite Surf" && <TwinTip />}
          {createOffer.Product === "Aile de Kite Surf" && <Aile />}
          {createOffer.Product === "Barre de Kite Surf" && <Barre />}
          {createOffer.Product === "Harnais de Kite Surf" && <Harnais />}
          {/*
//----------------------------------------------//  
//-----------// Composents Windsurf //----------// 
//----------------------------------------------//   */}

          {/*
//----------------------------------------------//  
//--------// Composents StandUpPaddle //--------// 
//----------------------------------------------//   */}
          {/*
//----------------------------------------------//  
//----------// Composents Apnée //--------------// 
//----------------------------------------------//   */}
          {/* 
//----------------------------------------------//  
//------------------// MONTAGNE //--------------//
//----------------------------------------------//   */}
          {/* 

          {/* 
//----------------------------------------------//  
//----------//INFORMATIONS COMPLEMENTAIRE //----//
//----------------------------------------------// */}
          <AdditionalInformation />
          <SubmitButton errorMessage={errorMessage} SubmitOffer={SubmitOffer} />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
