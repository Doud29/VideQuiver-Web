//-----------------// Css

//-----------------// Packages
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Link } from "react-router-dom";

//-----------------// Components

const BtnProfil = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container-btn user">
      {currentUser ? (
        <ion-icon name="settings-outline"></ion-icon>
      ) : (
        <Link to="/welcome">
          <ion-icon name="person-add-outline"></ion-icon>{" "}
        </Link>
      )}

      <span>Profile</span>
    </div>
  );
};

export default BtnProfil;
