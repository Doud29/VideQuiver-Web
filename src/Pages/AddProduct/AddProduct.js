import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";

//CONTEXT
import { UserContext } from "../../Context/UserContext";

//CSS
import "./addProduct.scss";

//CONSTANTS
import { CONSTANTS } from "../../constants/index";

//MODALS
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

// TECHNICAL SURF COMPONENTS
import SurfDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfDescription";
import DerivesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/DeriveDescription";
import LeashDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashDescription";
import PadDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/PadDescription";
import GiletImpact from "../../Components/AddProduct/3-TechnicalInfos/3-Components/GiletImpact";
import AccessoriesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/AccessoriesDescription";
import SurfLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfLuggageDescription";
import BodyBoardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BodyBoardDescription";

// TECHNICAL BODYBOARD COMPONENTS
import FinBodyboardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/FinBodyBoardDescription";
import BodyBoardLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BodyBoardLuggageDescription";
import LeashBodyBoardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashBodyBoardDescription";

// TECHNICAL NEOPRENE COMPONENTS
import JacketDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/JacketDescription";
import WetSuitDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/WetSuitDescription";
import SocksDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SocksDescription";
import LycraDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LycraDescription";
import BalaclavaDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BalaclavaDescription";
import GlovesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/GlovesDescription";
import HeaderAddProduct from "../../Components/AddProduct/0-HeaderAddProduct/HeaderAddProduct";

// TECHNICAL KITESURF
import TwinTip from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/TwinTip";
import Aile from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/Aile";
import Barre from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/Barre";
import Harnais from "../../Components/AddProduct/3-TechnicalInfos/3-Components/KiteSurf/Harnais";

// COMPONENTS
import DragnDrop from "../../Components/AddProduct/1-DrapNDrop/DragnDrop";
import SwitchSelection from "../../Components/AddProduct/5-SwicthSelection/SwitchSelection";
import OfferDescription from "../../Components/AddProduct/2-DescriptionOffre/OfferDescription";
import AdditionalInformation from "../../Components/AddProduct/6-additionalInformation/AdditionalInformation";
import SubmitButton from "../../Components/AddProduct/7-SubmitButton/SubmitButton";

const AddProduct = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);

  const { openModalState, createOffer, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const newProductForSellCollectionRef = collection(db, "newOfferForSell");

  const SubmitOffer = (e) => {
    e.preventDefault();

    if (imageUpload.length === 0) {
      return setErrorMessage("* Veuillez sélectionner au moins une photo");
    }
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
      createOffer.technicalInformations.length !== 10 &&
      createOffer.Product === CONSTANTS.SURFBOARD
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //DERIVES - LEASH DE SURF - VESTE NEOPRENE - AILE
    if (
      createOffer.technicalInformations.length !== 4 &&
      (createOffer.Product === CONSTANTS.FIN_SURFBOARD ||
        createOffer.Product === CONSTANTS.LEASH ||
        createOffer.Product === CONSTANTS.NEOPRENE_JACKET ||
        createOffer.Product === CONSTANTS.KITE_WING ||
        createOffer.Product === CONSTANTS.HARNESS_KYTE)
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //PAD DE SURF - PALMES DE BODYBOARD
    if (
      createOffer.technicalInformations.length !== 2 &&
      (createOffer.Product === CONSTANTS.PAD ||
        createOffer.Product === CONSTANTS.BORDYBOARD_FIN)
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //GILET IMPACT - LYCRA - CHAUSSONS - BONNETS - PlANCHE DE BODYBOARD - BAGAGERIE BODYBOARD
    if (
      createOffer.technicalInformations.length !== 3 &&
      (createOffer.Product === CONSTANTS.IMPACT_JACKET ||
        createOffer.Product === CONSTANTS.TOP ||
        createOffer.Product === CONSTANTS.BOOTTIES ||
        createOffer.Product === CONSTANTS.BLALACLAVA ||
        createOffer.Product === CONSTANTS.GLOVES ||
        createOffer.Product === CONSTANTS.BORDYBOARD ||
        createOffer.Product === CONSTANTS.LUGGAGE_BODYBOARD)
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //ACCESSOIRES DE SURF - LEASH BODY BOARD - BARRE DE KITE
    if (
      createOffer.technicalInformations.length !== 1 &&
      (createOffer.Product === CONSTANTS.SURF_ACCESSORIES ||
        createOffer.Product === CONSTANTS.LEASH_COIL ||
        createOffer.Product === CONSTANTS.BODYBOARD_ACCESSORIES ||
        createOffer.Product === CONSTANTS.KITESURF_BAR)
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }
    //BAGAGERIE DE SURF - COMBINAISON - TWINTIP
    if (
      createOffer.technicalInformations.length !== 5 &&
      (createOffer.Product === CONSTANTS.LUGGAGE_SURF ||
        createOffer.Product === CONSTANTS.FULL_WETSUIT ||
        createOffer.Product === CONSTANTS.SEMI_WETSUIT ||
        createOffer.Product === CONSTANTS.LONGJOHN ||
        createOffer.Product === CONSTANTS.TWINTIP)
    ) {
      return setErrorMessage("* Informations techniques manquantes");
    }

    if (!createOffer.Price) {
      return setErrorMessage("* Veuillez renseigner le prix");
    }

    // UPLOAD ON FIREBASE
    const uploadMultipleImagesAndAddOffer = async () => {
      const newOffer = { ...createOffer, userId: currentUser.uid };
      try {
        //UPLOAD IMAGE
        for (let i = 0; i < imageUpload.length; i++) {
          const file = imageUpload[i];
          const imageRef = ref(
            storage,
            `Images/${currentUser.uid}/${newOffer.Product}/${newOffer.name}`
          );
          const snapshot = await uploadBytes(imageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          newOffer.urls.push(downloadURL);
        }
        await addDoc(newProductForSellCollectionRef, newOffer);
        setErrorMessage("");
        navigate("/home");
      } catch (error) {
        console.error(error.message);
      }
    };
    uploadMultipleImagesAndAddOffer();
  };

  return (
    <>
      <div className="container-addProduct">
        {openModalState.modalCategorie && <ModalCategories />}
        {openModalState.modalMer && <ModalMer />}
        {openModalState.modalSurf && <ModalSurf />}
        {openModalState.modalBodyBoard && <ModalBodyBoard />}
        {openModalState.modalSup && <ModalSup />}
        {openModalState.modalWindSurf && <ModalWindSurf />}
        {openModalState.modalkiteSurf && <ModalKiteSurf />}
        {openModalState.modalBodySurf && <ModalBodySurf />}
        {openModalState.modalApnee && <ModalApnee />}
        {openModalState.modalNeoprene && <ModalNeoprene />}
        <HeaderAddProduct />
        <DragnDrop imageUpload={imageUpload} setImageUpload={setImageUpload} />
        <div className="container-descriptionOffer">
          <SwitchSelection />
          <OfferDescription />
          {createOffer.Product === CONSTANTS.SURFBOARD && <SurfDescription />}
          {createOffer.Product === CONSTANTS.FIN_SURFBOARD && (
            <DerivesDescription />
          )}
          {createOffer.Product === CONSTANTS.IMPACT_JACKET && <GiletImpact />}
          {createOffer.Product === CONSTANTS.PAD && <PadDescription />}
          {createOffer.Product === CONSTANTS.LEASH && <LeashDescription />}
          {createOffer.Product === CONSTANTS.SURF_ACCESSORIES && (
            <AccessoriesDescription />
          )}
          {createOffer.Product === CONSTANTS.LUGGAGE_SURF && (
            <SurfLuggageDescription />
          )}
          {createOffer.Product === CONSTANTS.BORDYBOARD && (
            <BodyBoardDescription />
          )}
          {createOffer.Product === CONSTANTS.BORDYBOARD_FIN && (
            <FinBodyboardDescription />
          )}
          {createOffer.Product === CONSTANTS.LUGGAGE_BODYBOARD && (
            <BodyBoardLuggageDescription />
          )}
          {createOffer.Product === CONSTANTS.LEASH_COIL && (
            <LeashBodyBoardDescription />
          )}
          {createOffer.Product === CONSTANTS.BODYBOARD_ACCESSORIES && (
            <AccessoriesDescription />
          )}
          {createOffer.Product === CONSTANTS.FULL_WETSUIT && (
            <WetSuitDescription />
          )}
          {createOffer.Product === CONSTANTS.SEMI_WETSUIT && (
            <WetSuitDescription />
          )}
          {createOffer.Product === CONSTANTS.LONGJOHN && <WetSuitDescription />}
          {createOffer.Product === CONSTANTS.TOP && <LycraDescription />}
          {createOffer.Product === CONSTANTS.NEOPRENE_JACKET && (
            <JacketDescription />
          )}
          {createOffer.Product === CONSTANTS.BOOTTIES && <SocksDescription />}
          {createOffer.Product === CONSTANTS.BLALACLAVA && (
            <BalaclavaDescription />
          )}
          {createOffer.Product === CONSTANTS.GLOVES && <GlovesDescription />}
          {createOffer.Product === CONSTANTS.TWINTIP && <TwinTip />}
          {createOffer.Product === CONSTANTS.KITE_WING && <Aile />}
          {createOffer.Product === CONSTANTS.KITESURF_BAR && <Barre />}
          {createOffer.Product === CONSTANTS.HARNESS_KYTE && <Harnais />}
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
