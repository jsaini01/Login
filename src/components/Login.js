import React from "react";
// import Sideimg from "./Sideimg";
import EnterLogin from "./EnterLogin";

import { LoginWraper } from "../styles/LoginStyle";

const Login = () => {
  return (
    <LoginWraper>
      {/* <Sideimg /> */}
      <EnterLogin />
    </LoginWraper>
  );
};

export default Login;
