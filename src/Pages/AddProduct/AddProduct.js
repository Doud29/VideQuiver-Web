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
  //------------------// State Modal Discipline
  const [openCategoriesModalState, setOpenCategoriesState] = useState(false);

  //------------------// State permettant de connaitre  quelle case a été coché et quelle description de produit nous allons devoir utilisé
  const [checkValue, setcheckValueState] = useState({
    planche: false,
    dérives: false,
    pad: false,
    leash: false,
    casque: false,
    gilet: false,
    accessoires: false,
    bagagerie: false,
  });

  // console.log(checkValue);

  //-----// Cet objet doit ressembler trait pour trait à l'objet que l'on a créé dans DescriptionContext
  const contextValue = {
    description: checkValue,
    updateInpute: setcheckValueState,
  };

  return (
    <DescriptionContext.Provider value={contextValue}>
      <>
        <div className="container-header-addproduct">
          <SearchBar />
        </div>
        <div className="container-addProduct">
          {/* //-----------------------// Condition pour faire apparaitre ModalDiscipline //------------// */}
          {openCategoriesModalState && (
            <ModalCategories closeModalCategories={setOpenCategoriesState} />
          )}

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
            <input type="text" placeholder="Modèle" id="model" />
            <input type="text" placeholder="Description" id="description" />
            <button
              className="Discipline"
              onClick={() => {
                setOpenCategoriesState(true);
              }}
            >
              <span>Discipline</span>
              <div>{chevronRigth}</div>
            </button>
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
          {checkValue.planche && <SurfDescription />}
          {checkValue.dérives && <DerivesDescription />}
          {checkValue.pad && <PadDescription />}
          {checkValue.leash && <LeashDescription />}
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
