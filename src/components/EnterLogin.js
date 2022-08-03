import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
import { Form } from "../styles/LoginStyle";

import { useNavigate } from "react-router-dom";
const EnterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usererr, setUsererr] = useState(false);
  const [passerr, setPasserr] = useState(false);
  const navigate = useNavigate();

  const emailHandle = (ele) => {
    let item = ele.target.value;
    if (item.length < 1) {
      setUsererr(true);
    } else {
      setUsererr(false);
    }
    setEmail(item);
  };

  const passHandle = (ele) => {
    setPassword(ele.target.value);

    let item = ele.target.value;
    if (item.length < 6) {
      setPasserr(true);
    } else {
      setPasserr(false);
    }
    setPassword(item);
  };

  const AddValue = async (e) => {
    e.preventDefault();

    if (email.length < 1) {
      setUsererr("enter email");
    } else if (password.length < 1) {
      setPasserr("enter password");
    } else {
      console.log(email, password);

      let items = { email, password };
      let result = await fetch(
        "https://sql-dev-india.thewitslab.com:3003/auth/login ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(items),
        }
      );

      result = await result.json();

      localStorage.setItem("user-info", JSON.stringify(result.token));

      console.log(result.token);
      navigate("/person");
    }

    // navigate("/LoginPerson");
    // console.log(result);
    // history.push("add ");

    // e.preventDefault();
    // console.log({ email, password });
    // const { data } = await axios.post(
    //   "https://sql-dev-india.thewitslab.com:3003/auth/login",
    //   {
    //     email: email,
    //     password: password,
    //   }
    // );
    // const token = data.token;
    // localStorage.setItem("Users", JSON.stringify(email, token));
    // console.log(data);
  };

  return (
    <Form>
      <form onSubmit={AddValue}>
        <h1>Login</h1>
        <label htmlFor="email" />

        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          value={email} 
          onChange={emailHandle}
        />
        {usererr ? <p>Invalid Username</p> : null}

        <label htmlFor="password" />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={passHandle}
        />
        {passerr ? <p>Too short...</p> : null}

        <button type="submit">Submit</button>
      </form>
    </Form>
  );
};

export default EnterLogin;
