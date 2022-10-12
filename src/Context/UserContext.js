import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
//création du context
export const UserContext = createContext();

//création du provider [composant d'ordre supérieur] qui va pouvoir lui même retourné le usercontext.provider.
//Celui qui va apporter le contenu les données à tout ceux qu'il va entouré. En l'occurence props.children
export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  console.log(currentUser);

  //inscription
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //connection
  const connectUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //déconnexion
  const logout = () => {
    return signOut(auth);
  };
  //déconnexion
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

  return (
    <UserContext.Provider
      value={{ createUser, connectUser, logout, currentUser, resetPassword }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
