import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const HeaderAddProduct = () => {
  const { setCreateOffer, createOffer } = useContext(UserContext);

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
