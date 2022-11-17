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
        <Link to="/home" style={{ color: "grey" }}>
          <ion-icon
            name="arrow-back-outline"
            style={{ fontSize: "25px" }}
          ></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAddProduct;
