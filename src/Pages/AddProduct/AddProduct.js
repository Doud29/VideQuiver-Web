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
//----------// Technical Components //------------//
import SurfDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfDescription";
import DerivesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/DeriveDescription";
// import { DescriptionContext } from "../../Context/DescriptionContext";
import LeashDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashDescription";
import PadDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/PadDescription";
import InformationsComplémentaire from "../../Components/InformationsComplementaire/InformationsComplémentaire";
import HeaderAddProduct from "../../Components/AddProduct/0-HeaderAddProduct/HeaderAddProduct";
//----------// Components //------------//
import DragnDrop from "../../Components/AddProduct/1-DrapNDrop/DragnDrop";
import SwitchSelection from "../../Components/InformationsComplementaire/SwitchSelection";
import OfferDescription from "../../Components/AddProduct/2-DescriptionOffre/OfferDescription";
//---------// Context
import { UserContext } from "../../Context/UserContext";
//--------------// packages
import { useState, useContext } from "react";

const AddProduct = () => {
  //-------// STATES

  //--------// Add Photos
  const [files, setfiles] = useState([]);

  //-------// State pour connaitre quel produit choisi
  const [Produit, setProduct] = useState([]);
  // console.log(Produit);

  //------// CONTEXT
  const { openModalState } = useContext(UserContext);

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
        {openModalState.modalKiteSurf && <ModalKiteSurf />}
        {/* {openModalState.N && <ModalNeoprene  />} */}
        {openModalState.modalBodySurf && <ModalBodySurf />}
        {openModalState.modalApnee && <ModalApnee />}

        <HeaderAddProduct />
        <form onSubmit={handlAddProduct}>
          <DragnDrop files={files} setfiles={setfiles} />
          <OfferDescription Produit={Produit} />
          {/* 
//------------// MER 
//------------// Composents Surf 
           */}
          {Produit === "Planche de surf" && <SurfDescription />}
          {Produit === "Dérives / Ailerons" && <DerivesDescription />}
          {Produit === "Pad" && <PadDescription />}
          {Produit === "Leash" && <LeashDescription />}
          {/*

//-----------// Composents Néopréne*/}

          {/*
//----------------------------------------------//  
//-----------// Composents BodyBoard //---------// 
//----------------------------------------------//   */}

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
