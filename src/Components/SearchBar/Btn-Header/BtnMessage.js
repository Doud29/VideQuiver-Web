//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

//-----------------// Components

//---------------// icones

const BtnMessage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container-btn message">
      {currentUser ? (
        // <Link to="/message">
        <ion-icon name="mail-outline"></ion-icon>
      ) : (
        // </Link>
        <Link to="/welcome">
          <ion-icon name="mail-outline"></ion-icon>
        </Link>
      )}
      <span>Message</span>
    </div>
  );
};

export default BtnMessage;
