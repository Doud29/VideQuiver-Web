//CSS
import "./headerAddProduct.scss";

//COMPONENTS
import { Link } from "react-router-dom";
import React from "react";

const HeaderAddProduct = () => {
  return (
    <div className="bloc-header">
      <p>Vendre un article</p>
      <div className="bloc-arrowLeft">
        <Link to="/home">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAddProduct;
