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

  //-------// State pour récupérer la valeur du modèle renseigné
  const [Model, setModelState] = useState("");

  //-------// State pour récupérer la valeur du modèle renseigné
  const [descriptionState, setDescriptionState] = useState("");

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

  //------// fonction pour afficher le nombre de caractere restant dans l'input Modèle
  const numberOfCaractersModel = (valueInput) => {
    let LongueurInput = valueInput.length;
    const Limit = 40;
    let result = Limit - LongueurInput;
    return result;
  };

  //------// fonction pour afficher le nombre de caractere restant dans l'input Description
  const numberOfCaractersDescription = (valueInput) => {
    let LongueurInput = valueInput.length;
    const Limit = 300;
    let result = Limit - LongueurInput;
    return result;
  };

  //------// fonction la couleur de l'input si maximum de caractére est atteinds
  const getColor = (valueInput) => {
    let InputLength = valueInput.length;
    let color = "";
    if (InputLength === 40) {
      return (color = "red");
    }
  };

  const getColorDescription = (valueInput) => {
    let InputLength = valueInput.length;
    let color = "";
    if (InputLength === 300) {
      return (color = "red");
    }
  };

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
            <div className="container-titre">
              <div className="line"></div>
              <h3>Description de votre offre</h3>
            </div>

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
            <div className="container-input-span">
              <input
                type="text"
                placeholder="Modèle"
                onChange={(e) => {
                  setModelState(e.target.value);
                }}
                value={Model}
                id="model"
                name="model"
                maxLength={40}
              />
              <span style={{ color: getColor(Model) }}>
                {numberOfCaractersModel(Model)} caractères restants
              </span>
            </div>
            <div className="container-input-span">
              <input
                type="text"
                placeholder="Description de l'annonce"
                onChange={(e) => {
                  setDescriptionState(e.target.value);
                }}
                value={descriptionState}
                name="description"
                id="description"
                maxLength={300}
              />
              <span style={{ color: getColorDescription(descriptionState) }}>
                {numberOfCaractersDescription(descriptionState)} caractères
                restants
              </span>
            </div>
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
