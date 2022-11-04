import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import UserDefault from "../../svg/person-outline.svg";

const Headerprofile = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div className="container-header-profile">
      {currentUser.photoURL === null ? (
        <img src={UserDefault} alt="photo de profile" />
      ) : (
        <img src={currentUser.photoURL} alt="photo de profile" />
      )}
      <h1>{currentUser.displayName}</h1>
    </div>
  );
};

export default Headerprofile;
