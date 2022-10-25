import React, { useContext } from "react";
import { UserContext } from "../../../../Context/UserContext";

const TitleModal = ({ title, modal }) => {
  const { ToggleModal } = useContext(UserContext);
  console.log(modal);
  return (
    <div className="bloc-header">
      <p>{title}</p>
      <div className="bloc-arrowLeft" onClick={() => ToggleModal(modal)}>
        <ion-icon name="arrow-back-outline"></ion-icon>{" "}
      </div>
    </div>
  );
};

export default TitleModal;
