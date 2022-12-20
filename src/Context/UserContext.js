import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase-config";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const completeProfile = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };
  const connectGoogleUser = () => {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  };
  const connectUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const resetPassword = (password) => {
    return sendPasswordResetEmail(auth, password);
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
    return unscribe;
  }, []);

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

  const ToggleModal = (modal) => {
    if (modal === "Allcategories") {
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

    if (modal === "Air") {
      return setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: false,
        modalAir: true,
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

    if (modal === "Street") {
      return setOpenModalState({
        modalCategorie: false,
        modalMer: false,
        modalMountain: false,
        modalStreet: true,
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
    if (modal === "Apnee") {
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

  const [createOffer, setCreateOffer] = useState({
    userId: "",
    Price: "",
    Product: "",
    urls: [],
    sell: false,
    rent: false,
    technicalInformations: [],
  });

  console.log(createOffer);

  const addTechnicalData = (value, Theme) => {
    const newOffer = { ...createOffer };
    const ObjAdded = { valeur: value, Type: Theme };
    const index = newOffer.technicalInformations.findIndex(
      (obj) => obj.Type === Theme
    );

    if (index === -1) {
      newOffer.technicalInformations.push(ObjAdded);
    } else {
      newOffer.technicalInformations.splice(index, 1);
      newOffer.technicalInformations.push(ObjAdded);
    }

    // MAJ du state offer
    setCreateOffer(newOffer);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        completeProfile,
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
