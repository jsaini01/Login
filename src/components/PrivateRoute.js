import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isToken = localStorage.getItem("user");

  return isToken ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
