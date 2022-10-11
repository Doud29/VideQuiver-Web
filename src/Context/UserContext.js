import { createContext, useState, useEffect } from "react";
import {
  signinWithEmailandPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
//création du context
export const UserContext = createContext();

//création du provider [composant d'ordre supérieur] qui va pouvoir lui même retourné le usercontext.provider.
//Celui qui va apporter le contenu les données à tout ceux qu'il va entouré. En l'occurence props.children
export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [data, setdata] = useState(true);

  const Signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  return (
    <UserContext.Provider value={{ Signup, currentUser, data }}>
      {props.children}
    </UserContext.Provider>
  );
};
