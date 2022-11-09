//--------------// Css
import "./addProduct.scss";

//----------// Modaux //------------//
import ModalCategories from "../../Components/Modal/ModalDiscipline/ModalCategories";
import ModalMer from "../../Components/Modal/ModalDiscipline/ModalMer/ModalMer";
import ModalSurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalSurf/ModalSurf";
import ModalApnee from "../../Components/Modal/ModalDiscipline/ModalMer/ModalApnee/ModalApnee";
import ModalBodyBoard from "../../Components/Modal/ModalDiscipline/ModalMer/ModalBodyBoard/ModalBodyBoard";
import ModalKiteSurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalKiteSurf/ModalKiteSurf";
import ModalBodySurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalBodySurf/ModalBodySurf";
import ModalSup from "../../Components/Modal/ModalDiscipline/ModalMer/ModalSup/ModalSup";
import ModalWindSurf from "../../Components/Modal/ModalDiscipline/ModalMer/ModalWindSurf/ModalWindSurf";
import ModalNeoprene from "../../Components/Modal/ModalDiscipline/ModalMer/ModalNeoprene/ModalNeoprene";
//----------// Technical Surf Components //------------//
import SurfDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfDescription";
import DerivesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/DeriveDescription";
// import { DescriptionContext } from "../../Context/DescriptionContext";
import LeashDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashDescription";
import PadDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/PadDescription";
import GiletImpact from "../../Components/AddProduct/3-TechnicalInfos/3-Components/GiletImpact";
import AccessoriesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/AccessoriesDescription";
import SurfLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfLuggageDescription";
import BodyBoardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BodyBoardDescription";
//----------// Technical Bodyboard Components //------------//
import FinBodyboardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/FinBodyBoardDescription";
import BodyBoardLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BodyBoardLuggageDescription";
import LeashBodyBoardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashBodyBoardDescription";
//----------// Technical Neoprene Components //------------//
import JacketDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/JacketDescription";
import WetSuitDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/WetSuitDescription";
import SocksDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SocksDescription";
import BalaclavaDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/BalaclavaDescription";
// import InformationsComplémentaire from "../../Components/InformationsComplementaire/InformationsComplémentaire";
import HeaderAddProduct from "../../Components/AddProduct/0-HeaderAddProduct/HeaderAddProduct";
//----------// Components //------------//
import DragnDrop from "../../Components/AddProduct/1-DrapNDrop/DragnDrop";
import SwitchSelection from "../../Components/AddProduct/5-SwicthSelection/SwitchSelection";
import OfferDescription from "../../Components/AddProduct/2-DescriptionOffre/OfferDescription";
import AdditionalInformation from "../../Components/AddProduct/6-additional information/AdditionalInformation";
import SubmitButton from "../../Components/AddProduct/7-SubmitButton/SubmitButton";
//---------// Context
import { UserContext } from "../../Context/UserContext";
//--------------// packages
import { useState, useContext } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  //----// STATES
  //----// Add Photos
  const [files, setfiles] = useState([]);
  //----// Erro Message
  const [errorMessage, setErrorMessage] = useState("");
  //---// Context
  const { openModalState, createOffer } = useContext(UserContext);
  //---// Ref db
  const newProductForSellCollectionRef = collection(db, "newOfferForSell");
  const newProductForRentCollectionRef = collection(db, "newOfferForRent");
  //---// Navigate
  const navigate = useNavigate();

  //---// fonction pour soumetre la demande de vente et location
  const handlAddProduct = (e) => {
    e.preventDefault();

    if (createOffer.sell === false && createOffer.rent === false) {
      setErrorMessage("* S'agit-il d'une vente ou d'une location?");
      return;
    }
    if (createOffer.Product === " ") {
      setErrorMessage("* Vous devez choisir un produit");
      return;
    }
    if (createOffer.Model === " ") {
      setErrorMessage("* Vous avez oubliez le modèle");
      return;
    }
    if (createOffer.DescriptionOffer === " ") {
      setErrorMessage("* Veuillez Décrire votre produit");
      return;
    }
    if (createOffer.Price === " ") {
      setErrorMessage("* Veuillez renseigner le prix");
      return;
    }

    try {
      //----// Sell
      if (createOffer.sell === true && createOffer.rent === false) {
        console.log("condition de vente respecté");
        const addProductForSell = async () => {
          await addDoc(newProductForSellCollectionRef, createOffer);
          console.log("data envoyé");
          setErrorMessage("");
          navigate("/home");
        };
        addProductForSell();
      }

      //----// Rent
      if (createOffer.sell === false && createOffer.rent === true) {
        const addProductForRent = async () => {
          await addDoc(newProductForRentCollectionRef, createOffer);
          console.log("data rent envoyé");
        };
        addProductForRent();
      }
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <>
      <div className="container-addProduct">
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
        <form onSubmit={handlAddProduct}>
          <DragnDrop files={files} setfiles={setfiles} />
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
          {(createOffer.Product === "Accessoires de surf" ||
            createOffer.Product === "Accessoires de bodyboard") && (
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
          {/*
//-----------// Composents Neoprene */}
          {createOffer.Product === "Combinaison intégrale" && (
            <WetSuitDescription />
          )}
          {createOffer.Product === "Veste néopréne" && <JacketDescription />}
          {createOffer.Product === "Chaussons néopréne" && <SocksDescription />}
          {createOffer.Product === "Cagoules / Bonnets" && (
            <BalaclavaDescription />
          )}

          {/*
//----------------------------------------------//  
//-----------// Composents BodySurf //----------// 
//----------------------------------------------//   */}

          {/*
//----------------------------------------------//  
//-----------// Composents Kite Surf //---------// 
//----------------------------------------------//   */}

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
          <SubmitButton errorMessage={errorMessage} />
        </form>
      </div>
    </>
  );
};

export default AddProduct;
