//CSS
import "./headerAddProduct.scss";

//PACKAGES
import { Link } from "react-router-dom";

const HeaderAddProduct = () => {
  return (
    <div className="bloc-header">
      <p>Vendre un article</p>
      <div
        className="bloc-arrowLeft"
        onClick={() => {
          window.location.reload(false);
        }}
      >
        <Link to="/home">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAddProduct;
