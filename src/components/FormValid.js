import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";

const FormValid = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
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

    localStorage.setItem("user-info", JSON.stringify(result));

    if (result.token === undefined) {
      navigate("/");
      alert("not registered");
    } else {
      console.log(result.token);
      navigate("/person");
    }
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("mail", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.mail && <p>Email is required.</p>}
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 10,
          })}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errors.password && <p>password is required.</p>}
        <input type="submit" />
      </form>
    </Form>
  );
};

export default FormValid;
