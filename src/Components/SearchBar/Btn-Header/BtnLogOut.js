//-----------------// Css

//-----------------// Packages

//-----------------// Components
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const BtnSignIn = () => {
  const { logout } = useContext(UserContext);

  return (
    <div className="container-btn user" onClick={logout}>
      <ion-icon name="log-out-outline"></ion-icon>
      <span>Logout</span>
    </div>
  );
};

export default BtnSignIn;
