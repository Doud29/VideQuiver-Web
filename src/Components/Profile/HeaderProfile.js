import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Headerprofile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container-header-profile">
      <h1>{currentUser.displayName}</h1>
    </div>
  );
};

export default Headerprofile;
