//CSS
import "./headerAddProduct.scss";

//COMPONENTS
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const HeaderAddProduct = () => {
  // const navigate = useNavigate();
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
