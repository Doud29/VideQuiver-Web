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
//----------// Technical Surf Components //------------//
import SurfDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfDescription";
import DerivesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/DeriveDescription";
// import { DescriptionContext } from "../../Context/DescriptionContext";
import LeashDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashDescription";
import PadDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/PadDescription";
import GiletImpact from "../../Components/AddProduct/3-TechnicalInfos/3-Components/GiletImpact";
import AccessoriesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/AccessoriesDescription";
import SurfLuggageDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfLuggageDescription";

//----------// Technical Bodyboard Components //------------//
import FinBodyboardDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/FinBodyBoardDescription";

// import InformationsComplémentaire from "../../Components/InformationsComplementaire/InformationsComplémentaire";
import HeaderAddProduct from "../../Components/AddProduct/0-HeaderAddProduct/HeaderAddProduct";
//----------// Components //------------//
import DragnDrop from "../../Components/AddProduct/1-DrapNDrop/DragnDrop";
// import SwitchSelection from "../../Components/InformationsComplementaire/SwitchSelection";
import OfferDescription from "../../Components/AddProduct/2-DescriptionOffre/OfferDescription";
//---------// Context
import { UserContext } from "../../Context/UserContext";
//--------------// packages
import { useState, useContext } from "react";

const AddProduct = () => {
  //-------// STATES

  //--------// Add Photos
  const [files, setfiles] = useState([]);

  //------// CONTEXT
  const { openModalState, createOffer } = useContext(UserContext);

  //------// fonction pour soumetre la demande de vente
  const handlAddProduct = (event) => {
    try {
      event.preventDefault();
    } catch (error) {}
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
        <HeaderAddProduct />
        <form onSubmit={handlAddProduct}>
          <DragnDrop files={files} setfiles={setfiles} />
          <OfferDescription />
          {/* 
//------------// MER 
//------------// Composents Surf 
           */}
          {createOffer.Produit === "Planche de Surf" && <SurfDescription />}
          {createOffer.Produit === "Dérives de surf" && <DerivesDescription />}
          {createOffer.Produit === "Gilet Impact de surf" && <GiletImpact />}
          {createOffer.Produit === "Pad de surf" && <PadDescription />}
          {createOffer.Produit === "Leash de surf" && <LeashDescription />}
          {createOffer.Produit === "Accessoires de surf" && (
            <AccessoriesDescription />
          )}
          {createOffer.Produit === "Bagagerie de surf" && (
            <SurfLuggageDescription />
          )}

          {/*
//-----------// Composents BodyBoard */}
          {createOffer.Produit === "Palmes de bodyboard" && (
            <FinBodyboardDescription />
          )}
          {createOffer.Produit === "Bagagerie de bodyboard" && (
            <FinBodyboardDescription />
          )}
          {/*
//-----------// Composents BodyBoard 
  */}

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
//----------------------------------------------//  
//----------------//Type D'ANNONCE //-----------//
//----------------------------------------------// */}

          {/* {choiceValidatedForSellState === true && (
            <SwitchSelection
            
            handleChange={handleChange}
            />
          )} */}
          {/* 
//----------------------------------------------//  
//----------//INFORMATIONS COMPLEMENTAIRE //----//
//----------------------------------------------// */}
          {/* {choiceValidatedForSellState === true && (
              <InformationsComplémentaire />
            )} */}
        </form>
      </div>
    </>
  );
};

export default AddProduct;
