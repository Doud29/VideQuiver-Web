//--------------// Css
import "./addProduct.scss";

//--------------// Components
import ModalCategories from "../../Components/Modal/ModalDiscipline/ModalCategories";
import SurfDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/SurfDescription";
import DerivesDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/DeriveDescription";
import { DescriptionContext } from "../../Context/DescriptionContext";
import LeashDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/LeashDescription";
import PadDescription from "../../Components/AddProduct/3-TechnicalInfos/3-Components/PadDescription";
import InformationsComplémentaire from "../../Components/InformationsComplementaire/InformationsComplémentaire";
import DragnDrop from "../../Components/AddProduct/1-DrapNDrop/DragnDrop";
import SwitchSelection from "../../Components/InformationsComplementaire/SwitchSelection";
import OfferDescription from "../../Components/AddProduct/2-DescriptionOffre/OfferDescription";
import HeaderAddProduct from "../../Components/AddProduct/0-HeaderAddProduct/HeaderAddProduct";
import { UserContext } from "../../Context/UserContext";

//--------------// packages
import { useState, useContext } from "react";

const AddProduct = () => {
  //-------// STATES

  //-------// State pour valider le choix de l'input et fermer l'ensemble des modaux lors de la validation
  const [choiceValidatedForSellState, setChoiceValidatedForSellState] =
    useState(false);

  //--------// Add Photos
  const [files, setfiles] = useState([]);

  //-------// State pour connaitre quel produit choisi
  const [Produit, setProduct] = useState([]);
  console.log(Produit);

  //------// CONTEXT
  const { openModalState } = useContext(UserContext);

  const contextValue = {
    Produit,
    updateInpute: setProduct,
  };

  //------// fonction pour soumetre la demande de vente
  const handlAddProduct = (event) => {
    try {
      event.preventDefault();
    } catch (error) {}
  };

  return (
    <DescriptionContext.Provider value={contextValue}>
      <>
        <div className="container-addProduct">
          {/* //----// ModalDiscipline */}
          {openModalState.modalCategorie === true &&
          choiceValidatedForSellState === false ? (
            <ModalCategories
              // closeModalCategorie={setOpenModalState}
              choiceValidatedForSellState={choiceValidatedForSellState}
              setChoiceValidatedForSellState={setChoiceValidatedForSellState}
            />
          ) : null}
          <HeaderAddProduct />
          <form onSubmit={handlAddProduct}>
            <DragnDrop files={files} setfiles={setfiles} />
            <OfferDescription
              // setOpenModalState={setOpenModalState}
              Produit={Produit}
              setChoiceValidatedForSellState={setChoiceValidatedForSellState}
            />
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

            {choiceValidatedForSellState === true && (
              <SwitchSelection
              //
              // handleChange={handleChange}
              />
            )}
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
    </DescriptionContext.Provider>
  );
};

export default AddProduct;
