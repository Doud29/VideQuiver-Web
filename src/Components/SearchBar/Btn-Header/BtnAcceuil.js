//-----------------// Css

//-----------------// Packages
import { Link } from "react-router-dom";

//-----------------// Components

//---------------// icones

const BtnAcceuil = () => {
  return (
    <div className="container-btn acceuil">
      <Link to="/home">
        <ion-icon name="home-outline"></ion-icon>
      </Link>
      <span>Acceuil</span>
    </div>
  );
};

export default BtnAcceuil;
