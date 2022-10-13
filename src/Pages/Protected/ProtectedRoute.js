import React from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/home" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
