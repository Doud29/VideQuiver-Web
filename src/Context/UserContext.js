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

  //-------------------------------------------------------//
  //-----------------// Data add Product //----------------//
  //-------------------------------------------------------//

  //state global pour ajouter les datas
  const [createOffer, setCreateOffer] = useState({
    ["Offer Description"]: [],
    ["Technical informations"]: [],
    ["Sale/Rent/Exchange"]: [],
  });

  console.log(createOffer);

  //add + check + update technical data
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
        // createOffer,
        addTechnicalData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
