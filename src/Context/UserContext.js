import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase-config";
//création du context
export const UserContext = createContext();

//création du provider [composant d'ordre supérieur] qui va pouvoir lui même retourné le usercontext.provider.
//Celui qui va apporter le contenu les données à tout ceux qu'il va entouré. En l'occurence props.children
export const UserContextProvider = (props) => {
  //-------------------------------------------------------//
  //--------------------// Connexion //--------------------//
  //-------------------------------------------------------//

  //state User
  const [currentUser, setCurrentUser] = useState({});
  //inscription
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //connexion avec Google
  const connectGoogleUser = () => {
    //Instance de l'objet fournisseur google
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  };
  //connexion avec email User
  const connectUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //déconnexion
  const logout = () => {
    return signOut(auth);
  };
  //reset password
  const resetPassword = (password) => {
    return sendPasswordResetEmail(auth, password);
  };
  //observateur
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
    return unscribe;
  }, []);

  //--------------------------------------------------//
  //---------------// Toggle Modaux //----------------//
  //--------------------------------------------------//

  //-------// State pour ouvrir et fermer les modals modal

  const [openModalState, setOpenModalState] = useState({
    modalCategorie: false,
    modalMer: false,
    modalMountain: false,
    modalStreet: false,
    modalAir: false,
    modalSurf: false,
    modalBodyBoard: false,
    modalSup: false,
    modalWindSurf: false,
    modalkiteSurf: false,
    modalNeoprene: false,
    modalBodySurf: false,
    modalApnee: false,
  });

  console.log(openModalState.modalSurf);

  const ToggleModal = (modal) => {
    if (modal === "categories") {
      return setOpenModalState({
        modalCategorie: true,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }

    if (modal === "Sea") {
      return setOpenModalState({
        modalCategorie: false,
        modalMer: true,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }

    if (modal === "Mountain") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: true,
        modalStreet: false,
        modalAir: false,
        modalSurf: true,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }

    if (modal === "Surf") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: true,
        modalStreet: false,
        modalAir: false,
        modalSurf: true,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }

    if (modal === "BodyBoard") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: true,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: true,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }
    if (modal === "SUP") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: true,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }
    if (modal === "WindSurf") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: true,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }
    if (modal === "KiteSurf") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: true,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }
    if (modal === "Neoprene") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: true,
        modalBodySurf: false,
        modalApnee: false,
      });
    }
    if (modal === "BodySurf") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: true,
        modalApnee: false,
      });
    }
    if (modal === "Apnée") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: true,
      });
    }
    if (modal === "closeAll") {
      setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: false,
        modalSurf: false,
        modalBodyBoard: false,
        modalSup: false,
        modalWindSurf: false,
        modalkiteSurf: false,
        modalNeoprene: false,
        modalBodySurf: false,
        modalApnee: false,
      });
    }
  };

  //-------------------------------------------------------//
  //-----------------// Data add Product //----------------//
  //-------------------------------------------------------//

  //state global pour ajouter les datas
  const [createOffer, setCreateOffer] = useState({
    Model: "",
    DescriptionOffer: "",
    ["Technical informations"]: [],
    ["Sale/Rent/Exchange"]: [],
  });

  console.log(createOffer);

  //add + check + update technical data forDropdownList
  const addTechnicalData = (name, value, Theme) => {
    //copie du state
    let newOffer = { ...createOffer };
    //on récupére nos valeurs dans une varibale
    let ObjAdded = { [name]: value, Type: Theme };
    //on vérifie que nos valeurs
    let index = newOffer["Technical informations"].findIndex(
      (obj) => obj.Type === Theme
    );
    //si l'obj n'existe pas, on push
    if (index === -1) {
      newOffer["Technical informations"].push(ObjAdded);
      //si l'obj existe, on supprime l'existant et on push le nouvel
    } else if (index !== -1) {
      newOffer["Technical informations"].splice(index, 1);
      newOffer["Technical informations"].push(ObjAdded);
    }
    //MAJ state
    setCreateOffer(newOffer);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        connectUser,
        logout,
        currentUser,
        resetPassword,
        connectGoogleUser,
        createOffer,
        setCreateOffer,
        addTechnicalData,
        openModalState,
        setOpenModalState,
        ToggleModal,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
