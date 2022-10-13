//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

const BtnProfil = () => {
  return (
    <div className="container-btn user">
      <Link to="/welcome">
        <ion-icon name="person-add-outline"></ion-icon>
      </Link>
      <span>Profile</span>
    </div>
  );
};

export default BtnProfil;
