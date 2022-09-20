//--------------// Css
import "./addProduct.scss";

//--------------// Components
import ModalCategories from "../../Components/Modal/ModalDiscipline/ModalCategories";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SurfDescription from "../../Components/DescriptionProduit/SurfDescription";
import CombinaisonDescription from "../../Components/DescriptionProduit/CombinaisonDescription";
import DerivesDescription from "../../Components/DescriptionProduit/DeriveDescription";
import { DescriptionContext } from "../../DescriptionContext";
import LeashDescription from "../../Components/DescriptionProduit/LeashDescription";
import PadDescription from "../../Components/DescriptionProduit/PadDescription";
//--------------// packages
import { Link } from "react-router-dom";
import { useState } from "react";

//---------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
const chevronRigth = <FontAwesomeIcon icon={faChevronRight} />;
const addimage = <FontAwesomeIcon icon={faImage} />;

const AddProduct = () => {
  //------------------------------------------------------//
  //----------------------// STATES //--------------------//
  //------------------------------------------------------//

  //-------// State pour ouvrir et fermer modal
  const [openModalState, setOpenModalState] = useState(false);
  //-------// State pour valider le choix de l'input et fermer l'ensemble des modaux lors de la validation
  const [choiceValidatedForSellState, setChoiceValidatedForSellState] =
    useState(false);
  //-------// State permettant de connaitre  quelle case a été cochée et quelle description de produit nous allons devoir utilisé
  const [Produit, setProduct] = useState([]);
  console.log(Produit);
  const [numberOfCaractAvailable, setNumberOfCaractAvailable] = useState(0);

  //------------------------------------------------------//
  //------------------// Contexte //----------------------//
  //------------------------------------------------------//

  //------// Cet objet doit ressembler trait pour trait à l'objet que l'on a créé dans DescriptionContext
  const contextValue = {
    Produit,
    updateInpute: setProduct,
  };

  //------------------------------------------------------//
  //------------------// FONCTIONS //---------------------//
  //------------------------------------------------------//

  return (
    <DescriptionContext.Provider value={contextValue}>
      <>
        <div className="container-header-addproduct">
          <SearchBar />
        </div>
        <div className="container-addProduct">
          {/* //-----------------------// Condition pour faire apparaitre ModalDiscipline //------------// */}
          {openModalState === true && choiceValidatedForSellState === false ? (
            <ModalCategories
              closeModalCategorie={setOpenModalState}
              choiceValidatedForSellState={choiceValidatedForSellState}
              setChoiceValidatedForSellState={setChoiceValidatedForSellState}
            />
          ) : null}

          {/* //-----------------------// Container Haeder pour revenir en arrière //-----------------------// */}
          <div className="bloc-header">
            <p>Vendre un article</p>
            <div className="bloc-arrowLeft">
              <Link to="/home" style={{ color: "grey" }}>
                {arrowLeft}
              </Link>
            </div>
          </div>
          {/* //-----------------------// Container ajout image//-----------------------// */}
          <div className="bloc-photo">
            <input type="file" id="image" />
            <label htmlFor="image" id="image-file">
              <div className="container-ajoutimage">{addimage}</div>
              <p>Ajouter des photos</p>
            </label>
          </div>
          {/* //-----------------------// Container description produit//-----------------------// */}
          <div className="container-input-button">
            <button
              className="Discipline"
              onClick={() => {
                setOpenModalState(true);
                setChoiceValidatedForSellState(false);
              }}
            >
              <span>Produit</span>

              <div>
                {" "}
                <span id="product">{Produit}</span>
                {chevronRigth}
              </div>
            </button>
            <input
              type="text"
              placeholder="Modèle"
              id="modéle"
              name="modèle"
              maxLength={40}
            />
            <span>caractères restants</span>
            <input
              type="text"
              placeholder="Description"
              name="description"
              id="description"
              maxLength={300}
            />
          </div>
          {/* //-----------------------// Container information général & techniques de chaque produit//-----------------------// */}
          {/*       
//----------------------------------------------//  
//--------------------// MER //-----------------//
//----------------------------------------------//  

//----------------------------------------------//  
//------------// Composents Surf //-------------// 
//----------------------------------------------//  
           */}

          {Produit === "Planche de surf" && <SurfDescription />}
          {Produit === "Dérives / Ailerons" && <DerivesDescription />}
          {Produit === "Pad" && <PadDescription />}
          {Produit === "Leash" && <LeashDescription />}
          {/*
//----------------------------------------------//  
//-----------// Composents Néopréne //----------// 
//----------------------------------------------//   */}

          {/* <CombinaisonDescription /> */}

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
        </div>
      </>
    </DescriptionContext.Provider>
  );
};

export default AddProduct;
