import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPerson = ({ name }) => {
  const navigator = useNavigate();

  const Logout = () => {
    navigator("/");
  };
  return (
    <>
      <h2>hello</h2>
      <p>{name}</p>
      <button type="button" onClick={Logout}>
        LogOut!
      </button>
    </>
  );
};

export default LoginPerson;
