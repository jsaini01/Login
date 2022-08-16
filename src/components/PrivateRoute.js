import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    console.log(userInfo.token);
    setToken(userInfo.token);
  }, []);
  return token ? <Navigate to="/person" /> : <Navigate to="/" />;
};

export default PrivateRoute;
