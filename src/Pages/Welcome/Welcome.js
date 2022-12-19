//Css
import "./welcome.scss";

//COMPONENTS
import { UserContext } from "../../Context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import HeaderConnexion from "../../Components/Connexion/HeaderConnexion";

//PACKAGES
import { Link } from "react-router-dom";

const Welcome = () => {
  //Déstructuration
  const { connectGoogleUser, currentUser } = useContext(UserContext);
  //instanciation de notre useHook
  const navigate = useNavigate();
  //Call API
  const handleGoogle = async () => {
    try {
      await connectGoogleUser();
      navigate("/home");
    } catch (error) {
      console.dir(error.message);
    }
  };

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    <div className="container-welcome">
      <HeaderConnexion title="Connexion" previous="/home" />
      <div className="bloc-inscription">
        <div className="bloc-inscription-email email">
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="enveloppe">
              <ion-icon name="mail"></ion-icon>
            </div>
            <p>Continuer avec une adresse e-mail</p>
          </Link>
        </div>
        <div className="bloc-inscription-email google" onClick={handleGoogle}>
          <div className="enveloppe">
            <ion-icon name="logo-google"></ion-icon>
          </div>
          <p>Continuer avec Google </p>
        </div>
        <div className="bloc-inscription-email facebook">
          {" "}
          <div className="enveloppe">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <p>Continuer avec Facebook</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
