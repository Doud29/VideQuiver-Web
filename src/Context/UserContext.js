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

  const [createOffer, setCreateOffer] = useState({
    ["Technical informations"]: [],
    ["Offer Description"]: [],
    ["Sale/Rent/Exchange"]: [],
  });

  console.log(createOffer);

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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
