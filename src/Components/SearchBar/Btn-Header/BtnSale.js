//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
//-----------------// Components

//---------------// icones

const BtnSale = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container-btn sale">
      {currentUser ? (
        <Link to="/addProduct">
          <ion-icon name="play-outline"></ion-icon>
        </Link>
      ) : (
        <Link to="/welcome">
          <ion-icon name="play-outline"></ion-icon>
        </Link>
      )}
      <span>Vendre</span>
    </div>
  );
};

export default BtnSale;
