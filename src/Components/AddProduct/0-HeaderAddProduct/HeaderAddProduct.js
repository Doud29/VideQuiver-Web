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
            onClick={() => {
              createOffer.Model ||
                createOffer.DescriptionOffer ||
                createOffer["Technical informations"] ||
                (createOffer["Sale/Rent/Exchange"] !== "" &&
                  alert(
                    "Attention, l'essemble de votre annonce ne sera pas enregistré!"
                  ));
              setCreateOffer({ Model: "", DescriptionOffer: "" });
            }}
          ></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default HeaderAddProduct;
