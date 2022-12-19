//PACKAGES
import { Link } from "react-router-dom";

const HeaderConnexion = ({ title, previous }) => {
  return (
    <div className="bloc-header">
      <p>{title}</p>
      <div className="bloc-xmark">
        <Link to={previous}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default HeaderConnexion;
